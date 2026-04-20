// src/extension.ts — FuturLang VS Code Extension
// Registers hover, completion, and diagnostic providers directly via VS Code API.
// No child process or LSP protocol needed — simpler and more reliable.

import * as vscode from 'vscode';

// ── Hover docs ────────────────────────────────────────────────────────────────

const HOVER_DOCS: Record<string, string> = {
  // Top-level blocks
  theorem:        '**theorem** `Name() { ... } ↔`\n\nDeclare a theorem. Must be paired with a `proof` block via `↔`.',
  proof:          '**proof** `Name() { ... }`\n\nProve a theorem. Paired with its `theorem` via `↔`.',
  lemma:          '**lemma** `Name() { ... } ↔`\n\nDeclare a helper lemma. Paired with a `proof` block via `↔`.',
  definition:     '**definition** `Name { ... }`\n\nDefine a mathematical object or value.',
  fn:             '**fn** `name(x ∈ T) -> R { ... }`\n\nDeclare a function. Desugars into a `theorem` + `proof` pair.',
  struct:         '**struct** `Name { field ∈ Type, ... }`\n\nDeclare a record data structure with named fields.',
  type:           '**type** `Name { | Variant(...) }`\n\nDeclare a sum type (tagged union).',
  program:        '**program** `Name { ... }`\n\nDeclare an on-chain FuturChain program (smart contract).',
  account:        '**account** `Name { field ∈ Type, ... }`\n\nOn-chain account state struct for a FuturChain program.',
  instruction:    '**instruction** `name(accounts, data) { ... }`\n\nInstruction handler inside a `program` block.',
  error:          '**error** `Name { | Variant("msg") }`\n\nCustom program error variants for a FuturChain program.',
  // Proof statements
  assume:         '**assume**`(P)`\n\nIntroduce hypothesis `P` into the proof context.\n\nMultiple independent hypotheses use `∧` between them.',
  conclude:       '**conclude**`(P)`\n\nClose the proof. Must match the `declareToProve` goal.',
  declareToProve: '**declareToProve**`(P)`\n\nSet the proof goal. Required exactly once in a theorem body, as the last statement.',
  prove:          '**prove**`(P)`\n\nDerive and record an intermediate fact. The kernel checks `P` follows from current context.',
  apply:          '**apply**`(LemmaName)`\n\nBack-chain through a proved lemma.\n\n> Makes the connective after the preceding `proof` block `→`.',
  derive:         '**derive**`()`\n\nForward-chain all reachable conclusions from current premises.',
  intro:          '**intro**`(x: T)`\n\nStrip an implication antecedent, binding it as `x`.',
  rewrite:        '**rewrite**`(h)`\n\nSubstitute equals using hypothesis `h`.',
  exact:          '**exact**`(e)`\n\nClose the goal directly with expression `e`.',
  obtain:         '**obtain**`(x, ∃ y ∈ S, P)`\n\nDestructure an existential, binding the witness as `x`.',
  // Blockchain statements
  require:        '**require**`(condition, ErrorVariant)`\n\nGuard: returns the named program error if `condition` is false.\n\n```fl\nrequire(from.balance >= amount, InsufficientFunds)\n```',
  emit:           '**emit**`(EventName, field: value, ...)`\n\nEmit a named event recorded in the block\'s event log.',
  pda:            '**let addr = pda**`([seed1, seed2])`\n\nDerive a Program-Derived Address from seeds relative to this program.',
  cpi:            '**cpi**`(program_id, instruction, [accounts])`\n\nQueue a cross-program invocation.',
  transfer:       '**transfer**`(from, to, amount)`\n\nNative token transfer between two accounts in this instruction.',
  // Types
  Address:        '`Address` — 32-byte public key / account address (`[u8; 32]`).',
  TokenAmount:    '`TokenAmount` — native token quantity (`u64`).',
  Hash:           '`Hash` — SHA-256 hash output (`[u8; 32]`).',
  Signature:      '`Signature` — Ed25519 signature (`[u8; 64]`).',
  Slot:           '`Slot` — monotonic block slot number (`u64`).',
  Epoch:          '`Epoch` — epoch number (`u64`).',
  Nat:            '`Nat` — natural number ≥ 0 (`u64`). Alias: `ℕ`.',
  Int:            '`Int` — signed integer (`i64`). Alias: `ℤ`.',
  Bool:           '`Bool` — boolean (`bool`).',
  String:         '`String` — UTF-8 string.',
  // Connectives
  '→':            '`→` **(implies / sequences)**\n\nThe next block calls `apply()` on the current one.',
  '↔':            '`↔` **(iff / pairs)**\n\nPairs a `theorem` or `lemma` with its `proof` block.',
  '∧':            '`∧` **(and / independent)**\n\nThe next block does **not** call `apply()` on the current one.',
  '∨':            '`∨` **(or / disjunctive)**\n\nEither block suffices (emits warning, not yet kernel-validated).',
  // Math symbols
  '∈':            '`∈` — membership.\n\nUsed in type annotations (`x ∈ Nat`) and membership proofs (`x ∈ A ∧ A ⊆ B`).',
  '∀':            '`∀` — universal quantifier. `∀ x ∈ A, P(x)`.',
  '∃':            '`∃` — existential quantifier. `∃ x ∈ A, P(x)`.',
  '⊆':            '`⊆` — subset relation. `A ⊆ B` means every element of A is in B.',
  // Modifiers
  mut:            '`mut` — marks an instruction account parameter as **mutable**.',
  signer:         '`signer` — marks an instruction account parameter as a **required signer**.',
  init:           '`init` — marks an account as **newly created** in this instruction.',
  close:          '`close` — marks an account as **closed** (zeroed) after this instruction.',
  seeds:          '`seeds` — marks a PDA account, validated against derived seeds.',
  // Proof statements
  setVar:         '**setVar** or **let** `x = value`\n\nBind a local variable in a proof or definition body.',
  induction:      '**induction**`(n) { base: ..., step: ... }`\n\nStructural induction over `n`. Requires `base:` and `step:` cases.',
  match:          '**match** `value { case Pattern => result }`\n\nCase split on a sum type or list value.',
};

// ── Completions ───────────────────────────────────────────────────────────────

const COMPLETIONS: vscode.CompletionItem[] = [
  mkSnippet('theorem', 'theorem ${1:Name}() {\n  assume(${2:P}) →\n  declareToProve(${3:Q})\n} ↔\n\nproof ${1:Name}() {\n  conclude(${3:Q})\n}', 'Theorem + proof pair', vscode.CompletionItemKind.Keyword),
  mkSnippet('proof', 'proof ${1:Name}() {\n  conclude(${2:P})\n}', 'Proof block', vscode.CompletionItemKind.Keyword),
  mkSnippet('lemma', 'lemma ${1:Name}() {\n  assume(${2:P}) →\n  declareToProve(${3:Q})\n} ↔\n\nproof ${1:Name}() {\n  conclude(${3:Q})\n}', 'Lemma + proof pair', vscode.CompletionItemKind.Keyword),
  mkSnippet('fn', 'fn ${1:name}(${2:x} ∈ ${3:Nat}) -> ${4:Nat} {\n  conclude(${5:x})\n}', 'Function declaration', vscode.CompletionItemKind.Keyword),
  mkSnippet('struct', 'struct ${1:Name} {\n  ${2:field} ∈ ${3:Nat},\n}', 'Struct declaration', vscode.CompletionItemKind.Keyword),
  mkSnippet('program', 'program ${1:Name} {\n\n  account ${2:State} {\n    owner   ∈ Address,\n    balance ∈ TokenAmount,\n    nonce   ∈ Nat,\n  } →\n\n  error ${1:Name}Error {\n    | Unauthorized("not the owner")\n  } →\n\n  instruction ${3:initialize}(\n    authority: mut signer ∈ ${2:State},\n  ) {\n    require(${4:true}, ${1:Name}Error::Unauthorized)\n  }\n\n} ∧', 'Full program scaffold', vscode.CompletionItemKind.Keyword),
  mkSnippet('account', 'account ${1:Name} {\n  owner   ∈ Address,\n  balance ∈ TokenAmount,\n  nonce   ∈ Nat,\n}', 'Account state', vscode.CompletionItemKind.Keyword),
  mkSnippet('instruction', 'instruction ${1:name}(\n  ${2:authority}: mut signer ∈ ${3:State},\n  ${4:amount} ∈ TokenAmount,\n) {\n  require(${5:condition}, ${6:Error})\n}', 'Instruction handler', vscode.CompletionItemKind.Keyword),
  mkSnippet('error', 'error ${1:Name} {\n  | ${2:Unauthorized}("${3:not the owner}")\n}', 'Error variants', vscode.CompletionItemKind.Keyword),
  mkSnippet('assume', 'assume(${1:P})', 'Introduce hypothesis', vscode.CompletionItemKind.Function),
  mkSnippet('conclude', 'conclude(${1:P})', 'Close proof', vscode.CompletionItemKind.Function),
  mkSnippet('declareToProve', 'declareToProve(${1:P})', 'Set proof goal', vscode.CompletionItemKind.Function),
  mkSnippet('prove', 'prove(${1:P})', 'Derive intermediate fact', vscode.CompletionItemKind.Function),
  mkSnippet('apply', 'apply(${1:LemmaName})', 'Apply lemma', vscode.CompletionItemKind.Function),
  mkSnippet('require', 'require(${1:condition}, ${2:Error})', 'Guard condition', vscode.CompletionItemKind.Function),
  mkSnippet('emit', 'emit(${1:EventName}, ${2:field}: ${3:value})', 'Emit event', vscode.CompletionItemKind.Function),
  mkSnippet('transfer', 'transfer(${1:from}, ${2:to}, ${3:amount})', 'Token transfer', vscode.CompletionItemKind.Function),
  mkSnippet('pda', 'let ${1:addr} = pda([${2:seed}])', 'Derive PDA', vscode.CompletionItemKind.Function),
  mkSnippet('cpi', 'cpi(${1:program_id}, ${2:instruction}, [${3:accounts}])', 'Cross-program invocation', vscode.CompletionItemKind.Function),
  mkWord('Address', vscode.CompletionItemKind.TypeParameter),
  mkWord('TokenAmount', vscode.CompletionItemKind.TypeParameter),
  mkWord('Hash', vscode.CompletionItemKind.TypeParameter),
  mkWord('Signature', vscode.CompletionItemKind.TypeParameter),
  mkWord('Slot', vscode.CompletionItemKind.TypeParameter),
  mkWord('Nat', vscode.CompletionItemKind.TypeParameter),
  mkWord('Bool', vscode.CompletionItemKind.TypeParameter),
  mkWord('String', vscode.CompletionItemKind.TypeParameter),
];

function mkSnippet(label: string, snippet: string, detail: string, kind: vscode.CompletionItemKind): vscode.CompletionItem {
  const item = new vscode.CompletionItem(label, kind);
  item.insertText = new vscode.SnippetString(snippet);
  item.detail = detail;
  return item;
}

function mkWord(label: string, kind: vscode.CompletionItemKind): vscode.CompletionItem {
  return new vscode.CompletionItem(label, kind);
}

// ── Token extraction ──────────────────────────────────────────────────────────

function tokenAt(doc: vscode.TextDocument, pos: vscode.Position): string {
  const line = doc.lineAt(pos.line).text;
  const col  = pos.character;
  const before = line.slice(0, col).match(/[\w∀∃∈∧∨→↔⊆ℕℤℝℚ]+$/)?.[0] ?? '';
  const after  = line.slice(col).match(/^[\w∀∃∈∧∨→↔⊆ℕℤℝℚ]*/)?.[0] ?? '';
  return before + after;
}

// ── Extension activate / deactivate ───────────────────────────────────────────

export function activate(context: vscode.ExtensionContext) {
  const FL = { language: 'futurlang', scheme: 'file' };

  // Hover provider
  context.subscriptions.push(
    vscode.languages.registerHoverProvider(FL, {
      provideHover(doc, pos) {
        const token = tokenAt(doc, pos);
        const docs  = HOVER_DOCS[token];
        if (!docs) return null;
        return new vscode.Hover(new vscode.MarkdownString(docs));
      },
    })
  );

  // Completion provider
  context.subscriptions.push(
    vscode.languages.registerCompletionItemProvider(FL, {
      provideCompletionItems() {
        return COMPLETIONS;
      },
    }, '(', ' ')
  );
}

export function deactivate() {}
