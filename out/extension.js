"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/extension.ts
var extension_exports = {};
__export(extension_exports, {
  activate: () => activate,
  deactivate: () => deactivate
});
module.exports = __toCommonJS(extension_exports);
var vscode = __toESM(require("vscode"));
var HOVER_DOCS = {
  // Top-level blocks
  theorem: "**theorem** `Name() { ... } \u2194`\n\nDeclare a theorem. Must be paired with a `proof` block via `\u2194`.",
  proof: "**proof** `Name() { ... }`\n\nProve a theorem. Paired with its `theorem` via `\u2194`.",
  lemma: "**lemma** `Name() { ... } \u2194`\n\nDeclare a helper lemma. Paired with a `proof` block via `\u2194`.",
  definition: "**definition** `Name { ... }`\n\nDefine a mathematical object or value.",
  fn: "**fn** `name(x \u2208 T) -> R { ... }`\n\nDeclare a function. Desugars into a `theorem` + `proof` pair.",
  struct: "**struct** `Name { field \u2208 Type, ... }`\n\nDeclare a record data structure with named fields.",
  type: "**type** `Name { | Variant(...) }`\n\nDeclare a sum type (tagged union).",
  program: "**program** `Name { ... }`\n\nDeclare an on-chain FuturChain program (smart contract).",
  account: "**account** `Name { field \u2208 Type, ... }`\n\nOn-chain account state struct for a FuturChain program.",
  instruction: "**instruction** `name(accounts, data) { ... }`\n\nInstruction handler inside a `program` block.",
  error: '**error** `Name { | Variant("msg") }`\n\nCustom program error variants for a FuturChain program.',
  // Proof statements
  assume: "**assume**`(P)`\n\nIntroduce hypothesis `P` into the proof context.\n\nMultiple independent hypotheses use `\u2227` between them.",
  conclude: "**conclude**`(P)`\n\nClose the proof. Must match the `declareToProve` goal.",
  declareToProve: "**declareToProve**`(P)`\n\nSet the proof goal. Required exactly once in a theorem body, as the last statement.",
  prove: "**prove**`(P)`\n\nDerive and record an intermediate fact. The kernel checks `P` follows from current context.",
  apply: "**apply**`(LemmaName)`\n\nBack-chain through a proved lemma.\n\n> Makes the connective after the preceding `proof` block `\u2192`.",
  derive: "**derive**`()`\n\nForward-chain all reachable conclusions from current premises.",
  intro: "**intro**`(x: T)`\n\nStrip an implication antecedent, binding it as `x`.",
  rewrite: "**rewrite**`(h)`\n\nSubstitute equals using hypothesis `h`.",
  exact: "**exact**`(e)`\n\nClose the goal directly with expression `e`.",
  obtain: "**obtain**`(x, \u2203 y \u2208 S, P)`\n\nDestructure an existential, binding the witness as `x`.",
  // Blockchain statements
  require: "**require**`(condition, ErrorVariant)`\n\nGuard: returns the named program error if `condition` is false.\n\n```fl\nrequire(from.balance >= amount, InsufficientFunds)\n```",
  emit: "**emit**`(EventName, field: value, ...)`\n\nEmit a named event recorded in the block's event log.",
  pda: "**let addr = pda**`([seed1, seed2])`\n\nDerive a Program-Derived Address from seeds relative to this program.",
  cpi: "**cpi**`(program_id, instruction, [accounts])`\n\nQueue a cross-program invocation.",
  transfer: "**transfer**`(from, to, amount)`\n\nNative token transfer between two accounts in this instruction.",
  // Types
  Address: "`Address` \u2014 32-byte public key / account address (`[u8; 32]`).",
  TokenAmount: "`TokenAmount` \u2014 native token quantity (`u64`).",
  Hash: "`Hash` \u2014 SHA-256 hash output (`[u8; 32]`).",
  Signature: "`Signature` \u2014 Ed25519 signature (`[u8; 64]`).",
  Slot: "`Slot` \u2014 monotonic block slot number (`u64`).",
  Epoch: "`Epoch` \u2014 epoch number (`u64`).",
  Nat: "`Nat` \u2014 natural number \u2265 0 (`u64`). Alias: `\u2115`.",
  Int: "`Int` \u2014 signed integer (`i64`). Alias: `\u2124`.",
  Bool: "`Bool` \u2014 boolean (`bool`).",
  String: "`String` \u2014 UTF-8 string.",
  // Connectives
  "\u2192": "`\u2192` **(implies / sequences)**\n\nThe next block calls `apply()` on the current one.",
  "\u2194": "`\u2194` **(iff / pairs)**\n\nPairs a `theorem` or `lemma` with its `proof` block.",
  "\u2227": "`\u2227` **(and / independent)**\n\nThe next block does **not** call `apply()` on the current one.",
  "\u2228": "`\u2228` **(or / disjunctive)**\n\nEither block suffices (emits warning, not yet kernel-validated).",
  // Math symbols
  "\u2208": "`\u2208` \u2014 membership.\n\nUsed in type annotations (`x \u2208 Nat`) and membership proofs (`x \u2208 A \u2227 A \u2286 B`).",
  "\u2200": "`\u2200` \u2014 universal quantifier. `\u2200 x \u2208 A, P(x)`.",
  "\u2203": "`\u2203` \u2014 existential quantifier. `\u2203 x \u2208 A, P(x)`.",
  "\u2286": "`\u2286` \u2014 subset relation. `A \u2286 B` means every element of A is in B.",
  // Modifiers
  mut: "`mut` \u2014 marks an instruction account parameter as **mutable**.",
  signer: "`signer` \u2014 marks an instruction account parameter as a **required signer**.",
  init: "`init` \u2014 marks an account as **newly created** in this instruction.",
  close: "`close` \u2014 marks an account as **closed** (zeroed) after this instruction.",
  seeds: "`seeds` \u2014 marks a PDA account, validated against derived seeds.",
  // Proof statements
  setVar: "**setVar** or **let** `x = value`\n\nBind a local variable in a proof or definition body.",
  induction: "**induction**`(n) { base: ..., step: ... }`\n\nStructural induction over `n`. Requires `base:` and `step:` cases.",
  match: "**match** `value { case Pattern => result }`\n\nCase split on a sum type or list value."
};
var COMPLETIONS = [
  mkSnippet("theorem", "theorem ${1:Name}() {\n  assume(${2:P}) \u2192\n  declareToProve(${3:Q})\n} \u2194\n\nproof ${1:Name}() {\n  conclude(${3:Q})\n}", "Theorem + proof pair", vscode.CompletionItemKind.Keyword),
  mkSnippet("proof", "proof ${1:Name}() {\n  conclude(${2:P})\n}", "Proof block", vscode.CompletionItemKind.Keyword),
  mkSnippet("lemma", "lemma ${1:Name}() {\n  assume(${2:P}) \u2192\n  declareToProve(${3:Q})\n} \u2194\n\nproof ${1:Name}() {\n  conclude(${3:Q})\n}", "Lemma + proof pair", vscode.CompletionItemKind.Keyword),
  mkSnippet("fn", "fn ${1:name}(${2:x} \u2208 ${3:Nat}) -> ${4:Nat} {\n  conclude(${5:x})\n}", "Function declaration", vscode.CompletionItemKind.Keyword),
  mkSnippet("struct", "struct ${1:Name} {\n  ${2:field} \u2208 ${3:Nat},\n}", "Struct declaration", vscode.CompletionItemKind.Keyword),
  mkSnippet("program", 'program ${1:Name} {\n\n  account ${2:State} {\n    owner   \u2208 Address,\n    balance \u2208 TokenAmount,\n    nonce   \u2208 Nat,\n  } \u2192\n\n  error ${1:Name}Error {\n    | Unauthorized("not the owner")\n  } \u2192\n\n  instruction ${3:initialize}(\n    authority: mut signer \u2208 ${2:State},\n  ) {\n    require(${4:true}, ${1:Name}Error::Unauthorized)\n  }\n\n} \u2227', "Full program scaffold", vscode.CompletionItemKind.Keyword),
  mkSnippet("account", "account ${1:Name} {\n  owner   \u2208 Address,\n  balance \u2208 TokenAmount,\n  nonce   \u2208 Nat,\n}", "Account state", vscode.CompletionItemKind.Keyword),
  mkSnippet("instruction", "instruction ${1:name}(\n  ${2:authority}: mut signer \u2208 ${3:State},\n  ${4:amount} \u2208 TokenAmount,\n) {\n  require(${5:condition}, ${6:Error})\n}", "Instruction handler", vscode.CompletionItemKind.Keyword),
  mkSnippet("error", 'error ${1:Name} {\n  | ${2:Unauthorized}("${3:not the owner}")\n}', "Error variants", vscode.CompletionItemKind.Keyword),
  mkSnippet("assume", "assume(${1:P})", "Introduce hypothesis", vscode.CompletionItemKind.Function),
  mkSnippet("conclude", "conclude(${1:P})", "Close proof", vscode.CompletionItemKind.Function),
  mkSnippet("declareToProve", "declareToProve(${1:P})", "Set proof goal", vscode.CompletionItemKind.Function),
  mkSnippet("prove", "prove(${1:P})", "Derive intermediate fact", vscode.CompletionItemKind.Function),
  mkSnippet("apply", "apply(${1:LemmaName})", "Apply lemma", vscode.CompletionItemKind.Function),
  mkSnippet("require", "require(${1:condition}, ${2:Error})", "Guard condition", vscode.CompletionItemKind.Function),
  mkSnippet("emit", "emit(${1:EventName}, ${2:field}: ${3:value})", "Emit event", vscode.CompletionItemKind.Function),
  mkSnippet("transfer", "transfer(${1:from}, ${2:to}, ${3:amount})", "Token transfer", vscode.CompletionItemKind.Function),
  mkSnippet("pda", "let ${1:addr} = pda([${2:seed}])", "Derive PDA", vscode.CompletionItemKind.Function),
  mkSnippet("cpi", "cpi(${1:program_id}, ${2:instruction}, [${3:accounts}])", "Cross-program invocation", vscode.CompletionItemKind.Function),
  mkWord("Address", vscode.CompletionItemKind.TypeParameter),
  mkWord("TokenAmount", vscode.CompletionItemKind.TypeParameter),
  mkWord("Hash", vscode.CompletionItemKind.TypeParameter),
  mkWord("Signature", vscode.CompletionItemKind.TypeParameter),
  mkWord("Slot", vscode.CompletionItemKind.TypeParameter),
  mkWord("Nat", vscode.CompletionItemKind.TypeParameter),
  mkWord("Bool", vscode.CompletionItemKind.TypeParameter),
  mkWord("String", vscode.CompletionItemKind.TypeParameter)
];
function mkSnippet(label, snippet, detail, kind) {
  const item = new vscode.CompletionItem(label, kind);
  item.insertText = new vscode.SnippetString(snippet);
  item.detail = detail;
  return item;
}
function mkWord(label, kind) {
  return new vscode.CompletionItem(label, kind);
}
function tokenAt(doc, pos) {
  const line = doc.lineAt(pos.line).text;
  const col = pos.character;
  const before = line.slice(0, col).match(/[\w∀∃∈∧∨→↔⊆ℕℤℝℚ]+$/)?.[0] ?? "";
  const after = line.slice(col).match(/^[\w∀∃∈∧∨→↔⊆ℕℤℝℚ]*/)?.[0] ?? "";
  return before + after;
}
function activate(context) {
  const FL = { language: "futurlang", scheme: "file" };
  context.subscriptions.push(
    vscode.languages.registerHoverProvider(FL, {
      provideHover(doc, pos) {
        const token = tokenAt(doc, pos);
        const docs = HOVER_DOCS[token];
        if (!docs) return null;
        return new vscode.Hover(new vscode.MarkdownString(docs));
      }
    })
  );
  context.subscriptions.push(
    vscode.languages.registerCompletionItemProvider(FL, {
      provideCompletionItems() {
        return COMPLETIONS;
      }
    }, "(", " ")
  );
}
function deactivate() {
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  activate,
  deactivate
});
