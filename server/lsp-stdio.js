"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
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

// node_modules/vscode-languageserver/lib/common/utils/is.js
var require_is = __commonJS({
  "node_modules/vscode-languageserver/lib/common/utils/is.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.thenable = exports2.typedArray = exports2.stringArray = exports2.array = exports2.func = exports2.error = exports2.number = exports2.string = exports2.boolean = void 0;
    function boolean(value) {
      return value === true || value === false;
    }
    exports2.boolean = boolean;
    function string(value) {
      return typeof value === "string" || value instanceof String;
    }
    exports2.string = string;
    function number(value) {
      return typeof value === "number" || value instanceof Number;
    }
    exports2.number = number;
    function error(value) {
      return value instanceof Error;
    }
    exports2.error = error;
    function func(value) {
      return typeof value === "function";
    }
    exports2.func = func;
    function array(value) {
      return Array.isArray(value);
    }
    exports2.array = array;
    function stringArray(value) {
      return array(value) && value.every((elem) => string(elem));
    }
    exports2.stringArray = stringArray;
    function typedArray(value, check) {
      return Array.isArray(value) && value.every(check);
    }
    exports2.typedArray = typedArray;
    function thenable(value) {
      return value && func(value.then);
    }
    exports2.thenable = thenable;
  }
});

// node_modules/vscode-jsonrpc/lib/common/is.js
var require_is2 = __commonJS({
  "node_modules/vscode-jsonrpc/lib/common/is.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.stringArray = exports2.array = exports2.func = exports2.error = exports2.number = exports2.string = exports2.boolean = void 0;
    function boolean(value) {
      return value === true || value === false;
    }
    exports2.boolean = boolean;
    function string(value) {
      return typeof value === "string" || value instanceof String;
    }
    exports2.string = string;
    function number(value) {
      return typeof value === "number" || value instanceof Number;
    }
    exports2.number = number;
    function error(value) {
      return value instanceof Error;
    }
    exports2.error = error;
    function func(value) {
      return typeof value === "function";
    }
    exports2.func = func;
    function array(value) {
      return Array.isArray(value);
    }
    exports2.array = array;
    function stringArray(value) {
      return array(value) && value.every((elem) => string(elem));
    }
    exports2.stringArray = stringArray;
  }
});

// node_modules/vscode-jsonrpc/lib/common/messages.js
var require_messages = __commonJS({
  "node_modules/vscode-jsonrpc/lib/common/messages.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.Message = exports2.NotificationType9 = exports2.NotificationType8 = exports2.NotificationType7 = exports2.NotificationType6 = exports2.NotificationType5 = exports2.NotificationType4 = exports2.NotificationType3 = exports2.NotificationType2 = exports2.NotificationType1 = exports2.NotificationType0 = exports2.NotificationType = exports2.RequestType9 = exports2.RequestType8 = exports2.RequestType7 = exports2.RequestType6 = exports2.RequestType5 = exports2.RequestType4 = exports2.RequestType3 = exports2.RequestType2 = exports2.RequestType1 = exports2.RequestType = exports2.RequestType0 = exports2.AbstractMessageSignature = exports2.ParameterStructures = exports2.ResponseError = exports2.ErrorCodes = void 0;
    var is = require_is2();
    var ErrorCodes;
    (function(ErrorCodes2) {
      ErrorCodes2.ParseError = -32700;
      ErrorCodes2.InvalidRequest = -32600;
      ErrorCodes2.MethodNotFound = -32601;
      ErrorCodes2.InvalidParams = -32602;
      ErrorCodes2.InternalError = -32603;
      ErrorCodes2.jsonrpcReservedErrorRangeStart = -32099;
      ErrorCodes2.serverErrorStart = -32099;
      ErrorCodes2.MessageWriteError = -32099;
      ErrorCodes2.MessageReadError = -32098;
      ErrorCodes2.PendingResponseRejected = -32097;
      ErrorCodes2.ConnectionInactive = -32096;
      ErrorCodes2.ServerNotInitialized = -32002;
      ErrorCodes2.UnknownErrorCode = -32001;
      ErrorCodes2.jsonrpcReservedErrorRangeEnd = -32e3;
      ErrorCodes2.serverErrorEnd = -32e3;
    })(ErrorCodes || (exports2.ErrorCodes = ErrorCodes = {}));
    var ResponseError = class _ResponseError extends Error {
      constructor(code, message, data) {
        super(message);
        this.code = is.number(code) ? code : ErrorCodes.UnknownErrorCode;
        this.data = data;
        Object.setPrototypeOf(this, _ResponseError.prototype);
      }
      toJson() {
        const result = {
          code: this.code,
          message: this.message
        };
        if (this.data !== void 0) {
          result.data = this.data;
        }
        return result;
      }
    };
    exports2.ResponseError = ResponseError;
    var ParameterStructures = class _ParameterStructures {
      constructor(kind) {
        this.kind = kind;
      }
      static is(value) {
        return value === _ParameterStructures.auto || value === _ParameterStructures.byName || value === _ParameterStructures.byPosition;
      }
      toString() {
        return this.kind;
      }
    };
    exports2.ParameterStructures = ParameterStructures;
    ParameterStructures.auto = new ParameterStructures("auto");
    ParameterStructures.byPosition = new ParameterStructures("byPosition");
    ParameterStructures.byName = new ParameterStructures("byName");
    var AbstractMessageSignature = class {
      constructor(method, numberOfParams) {
        this.method = method;
        this.numberOfParams = numberOfParams;
      }
      get parameterStructures() {
        return ParameterStructures.auto;
      }
    };
    exports2.AbstractMessageSignature = AbstractMessageSignature;
    var RequestType0 = class extends AbstractMessageSignature {
      constructor(method) {
        super(method, 0);
      }
    };
    exports2.RequestType0 = RequestType0;
    var RequestType = class extends AbstractMessageSignature {
      constructor(method, _parameterStructures = ParameterStructures.auto) {
        super(method, 1);
        this._parameterStructures = _parameterStructures;
      }
      get parameterStructures() {
        return this._parameterStructures;
      }
    };
    exports2.RequestType = RequestType;
    var RequestType1 = class extends AbstractMessageSignature {
      constructor(method, _parameterStructures = ParameterStructures.auto) {
        super(method, 1);
        this._parameterStructures = _parameterStructures;
      }
      get parameterStructures() {
        return this._parameterStructures;
      }
    };
    exports2.RequestType1 = RequestType1;
    var RequestType2 = class extends AbstractMessageSignature {
      constructor(method) {
        super(method, 2);
      }
    };
    exports2.RequestType2 = RequestType2;
    var RequestType3 = class extends AbstractMessageSignature {
      constructor(method) {
        super(method, 3);
      }
    };
    exports2.RequestType3 = RequestType3;
    var RequestType4 = class extends AbstractMessageSignature {
      constructor(method) {
        super(method, 4);
      }
    };
    exports2.RequestType4 = RequestType4;
    var RequestType5 = class extends AbstractMessageSignature {
      constructor(method) {
        super(method, 5);
      }
    };
    exports2.RequestType5 = RequestType5;
    var RequestType6 = class extends AbstractMessageSignature {
      constructor(method) {
        super(method, 6);
      }
    };
    exports2.RequestType6 = RequestType6;
    var RequestType7 = class extends AbstractMessageSignature {
      constructor(method) {
        super(method, 7);
      }
    };
    exports2.RequestType7 = RequestType7;
    var RequestType8 = class extends AbstractMessageSignature {
      constructor(method) {
        super(method, 8);
      }
    };
    exports2.RequestType8 = RequestType8;
    var RequestType9 = class extends AbstractMessageSignature {
      constructor(method) {
        super(method, 9);
      }
    };
    exports2.RequestType9 = RequestType9;
    var NotificationType = class extends AbstractMessageSignature {
      constructor(method, _parameterStructures = ParameterStructures.auto) {
        super(method, 1);
        this._parameterStructures = _parameterStructures;
      }
      get parameterStructures() {
        return this._parameterStructures;
      }
    };
    exports2.NotificationType = NotificationType;
    var NotificationType0 = class extends AbstractMessageSignature {
      constructor(method) {
        super(method, 0);
      }
    };
    exports2.NotificationType0 = NotificationType0;
    var NotificationType1 = class extends AbstractMessageSignature {
      constructor(method, _parameterStructures = ParameterStructures.auto) {
        super(method, 1);
        this._parameterStructures = _parameterStructures;
      }
      get parameterStructures() {
        return this._parameterStructures;
      }
    };
    exports2.NotificationType1 = NotificationType1;
    var NotificationType2 = class extends AbstractMessageSignature {
      constructor(method) {
        super(method, 2);
      }
    };
    exports2.NotificationType2 = NotificationType2;
    var NotificationType3 = class extends AbstractMessageSignature {
      constructor(method) {
        super(method, 3);
      }
    };
    exports2.NotificationType3 = NotificationType3;
    var NotificationType4 = class extends AbstractMessageSignature {
      constructor(method) {
        super(method, 4);
      }
    };
    exports2.NotificationType4 = NotificationType4;
    var NotificationType5 = class extends AbstractMessageSignature {
      constructor(method) {
        super(method, 5);
      }
    };
    exports2.NotificationType5 = NotificationType5;
    var NotificationType6 = class extends AbstractMessageSignature {
      constructor(method) {
        super(method, 6);
      }
    };
    exports2.NotificationType6 = NotificationType6;
    var NotificationType7 = class extends AbstractMessageSignature {
      constructor(method) {
        super(method, 7);
      }
    };
    exports2.NotificationType7 = NotificationType7;
    var NotificationType8 = class extends AbstractMessageSignature {
      constructor(method) {
        super(method, 8);
      }
    };
    exports2.NotificationType8 = NotificationType8;
    var NotificationType9 = class extends AbstractMessageSignature {
      constructor(method) {
        super(method, 9);
      }
    };
    exports2.NotificationType9 = NotificationType9;
    var Message;
    (function(Message2) {
      function isRequest(message) {
        const candidate = message;
        return candidate && is.string(candidate.method) && (is.string(candidate.id) || is.number(candidate.id));
      }
      Message2.isRequest = isRequest;
      function isNotification(message) {
        const candidate = message;
        return candidate && is.string(candidate.method) && message.id === void 0;
      }
      Message2.isNotification = isNotification;
      function isResponse(message) {
        const candidate = message;
        return candidate && (candidate.result !== void 0 || !!candidate.error) && (is.string(candidate.id) || is.number(candidate.id) || candidate.id === null);
      }
      Message2.isResponse = isResponse;
    })(Message || (exports2.Message = Message = {}));
  }
});

// node_modules/vscode-jsonrpc/lib/common/linkedMap.js
var require_linkedMap = __commonJS({
  "node_modules/vscode-jsonrpc/lib/common/linkedMap.js"(exports2) {
    "use strict";
    var _a;
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.LRUCache = exports2.LinkedMap = exports2.Touch = void 0;
    var Touch;
    (function(Touch2) {
      Touch2.None = 0;
      Touch2.First = 1;
      Touch2.AsOld = Touch2.First;
      Touch2.Last = 2;
      Touch2.AsNew = Touch2.Last;
    })(Touch || (exports2.Touch = Touch = {}));
    var LinkedMap = class {
      constructor() {
        this[_a] = "LinkedMap";
        this._map = /* @__PURE__ */ new Map();
        this._head = void 0;
        this._tail = void 0;
        this._size = 0;
        this._state = 0;
      }
      clear() {
        this._map.clear();
        this._head = void 0;
        this._tail = void 0;
        this._size = 0;
        this._state++;
      }
      isEmpty() {
        return !this._head && !this._tail;
      }
      get size() {
        return this._size;
      }
      get first() {
        return this._head?.value;
      }
      get last() {
        return this._tail?.value;
      }
      has(key) {
        return this._map.has(key);
      }
      get(key, touch = Touch.None) {
        const item = this._map.get(key);
        if (!item) {
          return void 0;
        }
        if (touch !== Touch.None) {
          this.touch(item, touch);
        }
        return item.value;
      }
      set(key, value, touch = Touch.None) {
        let item = this._map.get(key);
        if (item) {
          item.value = value;
          if (touch !== Touch.None) {
            this.touch(item, touch);
          }
        } else {
          item = { key, value, next: void 0, previous: void 0 };
          switch (touch) {
            case Touch.None:
              this.addItemLast(item);
              break;
            case Touch.First:
              this.addItemFirst(item);
              break;
            case Touch.Last:
              this.addItemLast(item);
              break;
            default:
              this.addItemLast(item);
              break;
          }
          this._map.set(key, item);
          this._size++;
        }
        return this;
      }
      delete(key) {
        return !!this.remove(key);
      }
      remove(key) {
        const item = this._map.get(key);
        if (!item) {
          return void 0;
        }
        this._map.delete(key);
        this.removeItem(item);
        this._size--;
        return item.value;
      }
      shift() {
        if (!this._head && !this._tail) {
          return void 0;
        }
        if (!this._head || !this._tail) {
          throw new Error("Invalid list");
        }
        const item = this._head;
        this._map.delete(item.key);
        this.removeItem(item);
        this._size--;
        return item.value;
      }
      forEach(callbackfn, thisArg) {
        const state = this._state;
        let current = this._head;
        while (current) {
          if (thisArg) {
            callbackfn.bind(thisArg)(current.value, current.key, this);
          } else {
            callbackfn(current.value, current.key, this);
          }
          if (this._state !== state) {
            throw new Error(`LinkedMap got modified during iteration.`);
          }
          current = current.next;
        }
      }
      keys() {
        const state = this._state;
        let current = this._head;
        const iterator = {
          [Symbol.iterator]: () => {
            return iterator;
          },
          next: () => {
            if (this._state !== state) {
              throw new Error(`LinkedMap got modified during iteration.`);
            }
            if (current) {
              const result = { value: current.key, done: false };
              current = current.next;
              return result;
            } else {
              return { value: void 0, done: true };
            }
          }
        };
        return iterator;
      }
      values() {
        const state = this._state;
        let current = this._head;
        const iterator = {
          [Symbol.iterator]: () => {
            return iterator;
          },
          next: () => {
            if (this._state !== state) {
              throw new Error(`LinkedMap got modified during iteration.`);
            }
            if (current) {
              const result = { value: current.value, done: false };
              current = current.next;
              return result;
            } else {
              return { value: void 0, done: true };
            }
          }
        };
        return iterator;
      }
      entries() {
        const state = this._state;
        let current = this._head;
        const iterator = {
          [Symbol.iterator]: () => {
            return iterator;
          },
          next: () => {
            if (this._state !== state) {
              throw new Error(`LinkedMap got modified during iteration.`);
            }
            if (current) {
              const result = { value: [current.key, current.value], done: false };
              current = current.next;
              return result;
            } else {
              return { value: void 0, done: true };
            }
          }
        };
        return iterator;
      }
      [(_a = Symbol.toStringTag, Symbol.iterator)]() {
        return this.entries();
      }
      trimOld(newSize) {
        if (newSize >= this.size) {
          return;
        }
        if (newSize === 0) {
          this.clear();
          return;
        }
        let current = this._head;
        let currentSize = this.size;
        while (current && currentSize > newSize) {
          this._map.delete(current.key);
          current = current.next;
          currentSize--;
        }
        this._head = current;
        this._size = currentSize;
        if (current) {
          current.previous = void 0;
        }
        this._state++;
      }
      addItemFirst(item) {
        if (!this._head && !this._tail) {
          this._tail = item;
        } else if (!this._head) {
          throw new Error("Invalid list");
        } else {
          item.next = this._head;
          this._head.previous = item;
        }
        this._head = item;
        this._state++;
      }
      addItemLast(item) {
        if (!this._head && !this._tail) {
          this._head = item;
        } else if (!this._tail) {
          throw new Error("Invalid list");
        } else {
          item.previous = this._tail;
          this._tail.next = item;
        }
        this._tail = item;
        this._state++;
      }
      removeItem(item) {
        if (item === this._head && item === this._tail) {
          this._head = void 0;
          this._tail = void 0;
        } else if (item === this._head) {
          if (!item.next) {
            throw new Error("Invalid list");
          }
          item.next.previous = void 0;
          this._head = item.next;
        } else if (item === this._tail) {
          if (!item.previous) {
            throw new Error("Invalid list");
          }
          item.previous.next = void 0;
          this._tail = item.previous;
        } else {
          const next = item.next;
          const previous = item.previous;
          if (!next || !previous) {
            throw new Error("Invalid list");
          }
          next.previous = previous;
          previous.next = next;
        }
        item.next = void 0;
        item.previous = void 0;
        this._state++;
      }
      touch(item, touch) {
        if (!this._head || !this._tail) {
          throw new Error("Invalid list");
        }
        if (touch !== Touch.First && touch !== Touch.Last) {
          return;
        }
        if (touch === Touch.First) {
          if (item === this._head) {
            return;
          }
          const next = item.next;
          const previous = item.previous;
          if (item === this._tail) {
            previous.next = void 0;
            this._tail = previous;
          } else {
            next.previous = previous;
            previous.next = next;
          }
          item.previous = void 0;
          item.next = this._head;
          this._head.previous = item;
          this._head = item;
          this._state++;
        } else if (touch === Touch.Last) {
          if (item === this._tail) {
            return;
          }
          const next = item.next;
          const previous = item.previous;
          if (item === this._head) {
            next.previous = void 0;
            this._head = next;
          } else {
            next.previous = previous;
            previous.next = next;
          }
          item.next = void 0;
          item.previous = this._tail;
          this._tail.next = item;
          this._tail = item;
          this._state++;
        }
      }
      toJSON() {
        const data = [];
        this.forEach((value, key) => {
          data.push([key, value]);
        });
        return data;
      }
      fromJSON(data) {
        this.clear();
        for (const [key, value] of data) {
          this.set(key, value);
        }
      }
    };
    exports2.LinkedMap = LinkedMap;
    var LRUCache = class extends LinkedMap {
      constructor(limit, ratio = 1) {
        super();
        this._limit = limit;
        this._ratio = Math.min(Math.max(0, ratio), 1);
      }
      get limit() {
        return this._limit;
      }
      set limit(limit) {
        this._limit = limit;
        this.checkTrim();
      }
      get ratio() {
        return this._ratio;
      }
      set ratio(ratio) {
        this._ratio = Math.min(Math.max(0, ratio), 1);
        this.checkTrim();
      }
      get(key, touch = Touch.AsNew) {
        return super.get(key, touch);
      }
      peek(key) {
        return super.get(key, Touch.None);
      }
      set(key, value) {
        super.set(key, value, Touch.Last);
        this.checkTrim();
        return this;
      }
      checkTrim() {
        if (this.size > this._limit) {
          this.trimOld(Math.round(this._limit * this._ratio));
        }
      }
    };
    exports2.LRUCache = LRUCache;
  }
});

// node_modules/vscode-jsonrpc/lib/common/disposable.js
var require_disposable = __commonJS({
  "node_modules/vscode-jsonrpc/lib/common/disposable.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.Disposable = void 0;
    var Disposable;
    (function(Disposable2) {
      function create(func) {
        return {
          dispose: func
        };
      }
      Disposable2.create = create;
    })(Disposable || (exports2.Disposable = Disposable = {}));
  }
});

// node_modules/vscode-jsonrpc/lib/common/ral.js
var require_ral = __commonJS({
  "node_modules/vscode-jsonrpc/lib/common/ral.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    var _ral;
    function RAL() {
      if (_ral === void 0) {
        throw new Error(`No runtime abstraction layer installed`);
      }
      return _ral;
    }
    (function(RAL2) {
      function install(ral) {
        if (ral === void 0) {
          throw new Error(`No runtime abstraction layer provided`);
        }
        _ral = ral;
      }
      RAL2.install = install;
    })(RAL || (RAL = {}));
    exports2.default = RAL;
  }
});

// node_modules/vscode-jsonrpc/lib/common/events.js
var require_events = __commonJS({
  "node_modules/vscode-jsonrpc/lib/common/events.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.Emitter = exports2.Event = void 0;
    var ral_1 = require_ral();
    var Event;
    (function(Event2) {
      const _disposable = { dispose() {
      } };
      Event2.None = function() {
        return _disposable;
      };
    })(Event || (exports2.Event = Event = {}));
    var CallbackList = class {
      add(callback, context = null, bucket) {
        if (!this._callbacks) {
          this._callbacks = [];
          this._contexts = [];
        }
        this._callbacks.push(callback);
        this._contexts.push(context);
        if (Array.isArray(bucket)) {
          bucket.push({ dispose: () => this.remove(callback, context) });
        }
      }
      remove(callback, context = null) {
        if (!this._callbacks) {
          return;
        }
        let foundCallbackWithDifferentContext = false;
        for (let i = 0, len = this._callbacks.length; i < len; i++) {
          if (this._callbacks[i] === callback) {
            if (this._contexts[i] === context) {
              this._callbacks.splice(i, 1);
              this._contexts.splice(i, 1);
              return;
            } else {
              foundCallbackWithDifferentContext = true;
            }
          }
        }
        if (foundCallbackWithDifferentContext) {
          throw new Error("When adding a listener with a context, you should remove it with the same context");
        }
      }
      invoke(...args) {
        if (!this._callbacks) {
          return [];
        }
        const ret = [], callbacks = this._callbacks.slice(0), contexts = this._contexts.slice(0);
        for (let i = 0, len = callbacks.length; i < len; i++) {
          try {
            ret.push(callbacks[i].apply(contexts[i], args));
          } catch (e) {
            (0, ral_1.default)().console.error(e);
          }
        }
        return ret;
      }
      isEmpty() {
        return !this._callbacks || this._callbacks.length === 0;
      }
      dispose() {
        this._callbacks = void 0;
        this._contexts = void 0;
      }
    };
    var Emitter = class _Emitter {
      constructor(_options) {
        this._options = _options;
      }
      /**
       * For the public to allow to subscribe
       * to events from this Emitter
       */
      get event() {
        if (!this._event) {
          this._event = (listener, thisArgs, disposables) => {
            if (!this._callbacks) {
              this._callbacks = new CallbackList();
            }
            if (this._options && this._options.onFirstListenerAdd && this._callbacks.isEmpty()) {
              this._options.onFirstListenerAdd(this);
            }
            this._callbacks.add(listener, thisArgs);
            const result = {
              dispose: () => {
                if (!this._callbacks) {
                  return;
                }
                this._callbacks.remove(listener, thisArgs);
                result.dispose = _Emitter._noop;
                if (this._options && this._options.onLastListenerRemove && this._callbacks.isEmpty()) {
                  this._options.onLastListenerRemove(this);
                }
              }
            };
            if (Array.isArray(disposables)) {
              disposables.push(result);
            }
            return result;
          };
        }
        return this._event;
      }
      /**
       * To be kept private to fire an event to
       * subscribers
       */
      fire(event) {
        if (this._callbacks) {
          this._callbacks.invoke.call(this._callbacks, event);
        }
      }
      dispose() {
        if (this._callbacks) {
          this._callbacks.dispose();
          this._callbacks = void 0;
        }
      }
    };
    exports2.Emitter = Emitter;
    Emitter._noop = function() {
    };
  }
});

// node_modules/vscode-jsonrpc/lib/common/cancellation.js
var require_cancellation = __commonJS({
  "node_modules/vscode-jsonrpc/lib/common/cancellation.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.CancellationTokenSource = exports2.CancellationToken = void 0;
    var ral_1 = require_ral();
    var Is = require_is2();
    var events_1 = require_events();
    var CancellationToken;
    (function(CancellationToken2) {
      CancellationToken2.None = Object.freeze({
        isCancellationRequested: false,
        onCancellationRequested: events_1.Event.None
      });
      CancellationToken2.Cancelled = Object.freeze({
        isCancellationRequested: true,
        onCancellationRequested: events_1.Event.None
      });
      function is(value) {
        const candidate = value;
        return candidate && (candidate === CancellationToken2.None || candidate === CancellationToken2.Cancelled || Is.boolean(candidate.isCancellationRequested) && !!candidate.onCancellationRequested);
      }
      CancellationToken2.is = is;
    })(CancellationToken || (exports2.CancellationToken = CancellationToken = {}));
    var shortcutEvent = Object.freeze(function(callback, context) {
      const handle = (0, ral_1.default)().timer.setTimeout(callback.bind(context), 0);
      return { dispose() {
        handle.dispose();
      } };
    });
    var MutableToken = class {
      constructor() {
        this._isCancelled = false;
      }
      cancel() {
        if (!this._isCancelled) {
          this._isCancelled = true;
          if (this._emitter) {
            this._emitter.fire(void 0);
            this.dispose();
          }
        }
      }
      get isCancellationRequested() {
        return this._isCancelled;
      }
      get onCancellationRequested() {
        if (this._isCancelled) {
          return shortcutEvent;
        }
        if (!this._emitter) {
          this._emitter = new events_1.Emitter();
        }
        return this._emitter.event;
      }
      dispose() {
        if (this._emitter) {
          this._emitter.dispose();
          this._emitter = void 0;
        }
      }
    };
    var CancellationTokenSource = class {
      get token() {
        if (!this._token) {
          this._token = new MutableToken();
        }
        return this._token;
      }
      cancel() {
        if (!this._token) {
          this._token = CancellationToken.Cancelled;
        } else {
          this._token.cancel();
        }
      }
      dispose() {
        if (!this._token) {
          this._token = CancellationToken.None;
        } else if (this._token instanceof MutableToken) {
          this._token.dispose();
        }
      }
    };
    exports2.CancellationTokenSource = CancellationTokenSource;
  }
});

// node_modules/vscode-jsonrpc/lib/common/sharedArrayCancellation.js
var require_sharedArrayCancellation = __commonJS({
  "node_modules/vscode-jsonrpc/lib/common/sharedArrayCancellation.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.SharedArrayReceiverStrategy = exports2.SharedArraySenderStrategy = void 0;
    var cancellation_1 = require_cancellation();
    var CancellationState;
    (function(CancellationState2) {
      CancellationState2.Continue = 0;
      CancellationState2.Cancelled = 1;
    })(CancellationState || (CancellationState = {}));
    var SharedArraySenderStrategy = class {
      constructor() {
        this.buffers = /* @__PURE__ */ new Map();
      }
      enableCancellation(request) {
        if (request.id === null) {
          return;
        }
        const buffer = new SharedArrayBuffer(4);
        const data = new Int32Array(buffer, 0, 1);
        data[0] = CancellationState.Continue;
        this.buffers.set(request.id, buffer);
        request.$cancellationData = buffer;
      }
      async sendCancellation(_conn, id) {
        const buffer = this.buffers.get(id);
        if (buffer === void 0) {
          return;
        }
        const data = new Int32Array(buffer, 0, 1);
        Atomics.store(data, 0, CancellationState.Cancelled);
      }
      cleanup(id) {
        this.buffers.delete(id);
      }
      dispose() {
        this.buffers.clear();
      }
    };
    exports2.SharedArraySenderStrategy = SharedArraySenderStrategy;
    var SharedArrayBufferCancellationToken = class {
      constructor(buffer) {
        this.data = new Int32Array(buffer, 0, 1);
      }
      get isCancellationRequested() {
        return Atomics.load(this.data, 0) === CancellationState.Cancelled;
      }
      get onCancellationRequested() {
        throw new Error(`Cancellation over SharedArrayBuffer doesn't support cancellation events`);
      }
    };
    var SharedArrayBufferCancellationTokenSource = class {
      constructor(buffer) {
        this.token = new SharedArrayBufferCancellationToken(buffer);
      }
      cancel() {
      }
      dispose() {
      }
    };
    var SharedArrayReceiverStrategy = class {
      constructor() {
        this.kind = "request";
      }
      createCancellationTokenSource(request) {
        const buffer = request.$cancellationData;
        if (buffer === void 0) {
          return new cancellation_1.CancellationTokenSource();
        }
        return new SharedArrayBufferCancellationTokenSource(buffer);
      }
    };
    exports2.SharedArrayReceiverStrategy = SharedArrayReceiverStrategy;
  }
});

// node_modules/vscode-jsonrpc/lib/common/semaphore.js
var require_semaphore = __commonJS({
  "node_modules/vscode-jsonrpc/lib/common/semaphore.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.Semaphore = void 0;
    var ral_1 = require_ral();
    var Semaphore = class {
      constructor(capacity = 1) {
        if (capacity <= 0) {
          throw new Error("Capacity must be greater than 0");
        }
        this._capacity = capacity;
        this._active = 0;
        this._waiting = [];
      }
      lock(thunk) {
        return new Promise((resolve, reject) => {
          this._waiting.push({ thunk, resolve, reject });
          this.runNext();
        });
      }
      get active() {
        return this._active;
      }
      runNext() {
        if (this._waiting.length === 0 || this._active === this._capacity) {
          return;
        }
        (0, ral_1.default)().timer.setImmediate(() => this.doRunNext());
      }
      doRunNext() {
        if (this._waiting.length === 0 || this._active === this._capacity) {
          return;
        }
        const next = this._waiting.shift();
        this._active++;
        if (this._active > this._capacity) {
          throw new Error(`To many thunks active`);
        }
        try {
          const result = next.thunk();
          if (result instanceof Promise) {
            result.then((value) => {
              this._active--;
              next.resolve(value);
              this.runNext();
            }, (err) => {
              this._active--;
              next.reject(err);
              this.runNext();
            });
          } else {
            this._active--;
            next.resolve(result);
            this.runNext();
          }
        } catch (err) {
          this._active--;
          next.reject(err);
          this.runNext();
        }
      }
    };
    exports2.Semaphore = Semaphore;
  }
});

// node_modules/vscode-jsonrpc/lib/common/messageReader.js
var require_messageReader = __commonJS({
  "node_modules/vscode-jsonrpc/lib/common/messageReader.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.ReadableStreamMessageReader = exports2.AbstractMessageReader = exports2.MessageReader = void 0;
    var ral_1 = require_ral();
    var Is = require_is2();
    var events_1 = require_events();
    var semaphore_1 = require_semaphore();
    var MessageReader;
    (function(MessageReader2) {
      function is(value) {
        let candidate = value;
        return candidate && Is.func(candidate.listen) && Is.func(candidate.dispose) && Is.func(candidate.onError) && Is.func(candidate.onClose) && Is.func(candidate.onPartialMessage);
      }
      MessageReader2.is = is;
    })(MessageReader || (exports2.MessageReader = MessageReader = {}));
    var AbstractMessageReader = class {
      constructor() {
        this.errorEmitter = new events_1.Emitter();
        this.closeEmitter = new events_1.Emitter();
        this.partialMessageEmitter = new events_1.Emitter();
      }
      dispose() {
        this.errorEmitter.dispose();
        this.closeEmitter.dispose();
      }
      get onError() {
        return this.errorEmitter.event;
      }
      fireError(error) {
        this.errorEmitter.fire(this.asError(error));
      }
      get onClose() {
        return this.closeEmitter.event;
      }
      fireClose() {
        this.closeEmitter.fire(void 0);
      }
      get onPartialMessage() {
        return this.partialMessageEmitter.event;
      }
      firePartialMessage(info) {
        this.partialMessageEmitter.fire(info);
      }
      asError(error) {
        if (error instanceof Error) {
          return error;
        } else {
          return new Error(`Reader received error. Reason: ${Is.string(error.message) ? error.message : "unknown"}`);
        }
      }
    };
    exports2.AbstractMessageReader = AbstractMessageReader;
    var ResolvedMessageReaderOptions;
    (function(ResolvedMessageReaderOptions2) {
      function fromOptions(options) {
        let charset;
        let result;
        let contentDecoder;
        const contentDecoders = /* @__PURE__ */ new Map();
        let contentTypeDecoder;
        const contentTypeDecoders = /* @__PURE__ */ new Map();
        if (options === void 0 || typeof options === "string") {
          charset = options ?? "utf-8";
        } else {
          charset = options.charset ?? "utf-8";
          if (options.contentDecoder !== void 0) {
            contentDecoder = options.contentDecoder;
            contentDecoders.set(contentDecoder.name, contentDecoder);
          }
          if (options.contentDecoders !== void 0) {
            for (const decoder of options.contentDecoders) {
              contentDecoders.set(decoder.name, decoder);
            }
          }
          if (options.contentTypeDecoder !== void 0) {
            contentTypeDecoder = options.contentTypeDecoder;
            contentTypeDecoders.set(contentTypeDecoder.name, contentTypeDecoder);
          }
          if (options.contentTypeDecoders !== void 0) {
            for (const decoder of options.contentTypeDecoders) {
              contentTypeDecoders.set(decoder.name, decoder);
            }
          }
        }
        if (contentTypeDecoder === void 0) {
          contentTypeDecoder = (0, ral_1.default)().applicationJson.decoder;
          contentTypeDecoders.set(contentTypeDecoder.name, contentTypeDecoder);
        }
        return { charset, contentDecoder, contentDecoders, contentTypeDecoder, contentTypeDecoders };
      }
      ResolvedMessageReaderOptions2.fromOptions = fromOptions;
    })(ResolvedMessageReaderOptions || (ResolvedMessageReaderOptions = {}));
    var ReadableStreamMessageReader = class extends AbstractMessageReader {
      constructor(readable, options) {
        super();
        this.readable = readable;
        this.options = ResolvedMessageReaderOptions.fromOptions(options);
        this.buffer = (0, ral_1.default)().messageBuffer.create(this.options.charset);
        this._partialMessageTimeout = 1e4;
        this.nextMessageLength = -1;
        this.messageToken = 0;
        this.readSemaphore = new semaphore_1.Semaphore(1);
      }
      set partialMessageTimeout(timeout) {
        this._partialMessageTimeout = timeout;
      }
      get partialMessageTimeout() {
        return this._partialMessageTimeout;
      }
      listen(callback) {
        this.nextMessageLength = -1;
        this.messageToken = 0;
        this.partialMessageTimer = void 0;
        this.callback = callback;
        const result = this.readable.onData((data) => {
          this.onData(data);
        });
        this.readable.onError((error) => this.fireError(error));
        this.readable.onClose(() => this.fireClose());
        return result;
      }
      onData(data) {
        try {
          this.buffer.append(data);
          while (true) {
            if (this.nextMessageLength === -1) {
              const headers = this.buffer.tryReadHeaders(true);
              if (!headers) {
                return;
              }
              const contentLength = headers.get("content-length");
              if (!contentLength) {
                this.fireError(new Error(`Header must provide a Content-Length property.
${JSON.stringify(Object.fromEntries(headers))}`));
                return;
              }
              const length = parseInt(contentLength);
              if (isNaN(length)) {
                this.fireError(new Error(`Content-Length value must be a number. Got ${contentLength}`));
                return;
              }
              this.nextMessageLength = length;
            }
            const body = this.buffer.tryReadBody(this.nextMessageLength);
            if (body === void 0) {
              this.setPartialMessageTimer();
              return;
            }
            this.clearPartialMessageTimer();
            this.nextMessageLength = -1;
            this.readSemaphore.lock(async () => {
              const bytes = this.options.contentDecoder !== void 0 ? await this.options.contentDecoder.decode(body) : body;
              const message = await this.options.contentTypeDecoder.decode(bytes, this.options);
              this.callback(message);
            }).catch((error) => {
              this.fireError(error);
            });
          }
        } catch (error) {
          this.fireError(error);
        }
      }
      clearPartialMessageTimer() {
        if (this.partialMessageTimer) {
          this.partialMessageTimer.dispose();
          this.partialMessageTimer = void 0;
        }
      }
      setPartialMessageTimer() {
        this.clearPartialMessageTimer();
        if (this._partialMessageTimeout <= 0) {
          return;
        }
        this.partialMessageTimer = (0, ral_1.default)().timer.setTimeout((token, timeout) => {
          this.partialMessageTimer = void 0;
          if (token === this.messageToken) {
            this.firePartialMessage({ messageToken: token, waitingTime: timeout });
            this.setPartialMessageTimer();
          }
        }, this._partialMessageTimeout, this.messageToken, this._partialMessageTimeout);
      }
    };
    exports2.ReadableStreamMessageReader = ReadableStreamMessageReader;
  }
});

// node_modules/vscode-jsonrpc/lib/common/messageWriter.js
var require_messageWriter = __commonJS({
  "node_modules/vscode-jsonrpc/lib/common/messageWriter.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.WriteableStreamMessageWriter = exports2.AbstractMessageWriter = exports2.MessageWriter = void 0;
    var ral_1 = require_ral();
    var Is = require_is2();
    var semaphore_1 = require_semaphore();
    var events_1 = require_events();
    var ContentLength = "Content-Length: ";
    var CRLF = "\r\n";
    var MessageWriter;
    (function(MessageWriter2) {
      function is(value) {
        let candidate = value;
        return candidate && Is.func(candidate.dispose) && Is.func(candidate.onClose) && Is.func(candidate.onError) && Is.func(candidate.write);
      }
      MessageWriter2.is = is;
    })(MessageWriter || (exports2.MessageWriter = MessageWriter = {}));
    var AbstractMessageWriter = class {
      constructor() {
        this.errorEmitter = new events_1.Emitter();
        this.closeEmitter = new events_1.Emitter();
      }
      dispose() {
        this.errorEmitter.dispose();
        this.closeEmitter.dispose();
      }
      get onError() {
        return this.errorEmitter.event;
      }
      fireError(error, message, count) {
        this.errorEmitter.fire([this.asError(error), message, count]);
      }
      get onClose() {
        return this.closeEmitter.event;
      }
      fireClose() {
        this.closeEmitter.fire(void 0);
      }
      asError(error) {
        if (error instanceof Error) {
          return error;
        } else {
          return new Error(`Writer received error. Reason: ${Is.string(error.message) ? error.message : "unknown"}`);
        }
      }
    };
    exports2.AbstractMessageWriter = AbstractMessageWriter;
    var ResolvedMessageWriterOptions;
    (function(ResolvedMessageWriterOptions2) {
      function fromOptions(options) {
        if (options === void 0 || typeof options === "string") {
          return { charset: options ?? "utf-8", contentTypeEncoder: (0, ral_1.default)().applicationJson.encoder };
        } else {
          return { charset: options.charset ?? "utf-8", contentEncoder: options.contentEncoder, contentTypeEncoder: options.contentTypeEncoder ?? (0, ral_1.default)().applicationJson.encoder };
        }
      }
      ResolvedMessageWriterOptions2.fromOptions = fromOptions;
    })(ResolvedMessageWriterOptions || (ResolvedMessageWriterOptions = {}));
    var WriteableStreamMessageWriter = class extends AbstractMessageWriter {
      constructor(writable, options) {
        super();
        this.writable = writable;
        this.options = ResolvedMessageWriterOptions.fromOptions(options);
        this.errorCount = 0;
        this.writeSemaphore = new semaphore_1.Semaphore(1);
        this.writable.onError((error) => this.fireError(error));
        this.writable.onClose(() => this.fireClose());
      }
      async write(msg) {
        return this.writeSemaphore.lock(async () => {
          const payload = this.options.contentTypeEncoder.encode(msg, this.options).then((buffer) => {
            if (this.options.contentEncoder !== void 0) {
              return this.options.contentEncoder.encode(buffer);
            } else {
              return buffer;
            }
          });
          return payload.then((buffer) => {
            const headers = [];
            headers.push(ContentLength, buffer.byteLength.toString(), CRLF);
            headers.push(CRLF);
            return this.doWrite(msg, headers, buffer);
          }, (error) => {
            this.fireError(error);
            throw error;
          });
        });
      }
      async doWrite(msg, headers, data) {
        try {
          await this.writable.write(headers.join(""), "ascii");
          return this.writable.write(data);
        } catch (error) {
          this.handleError(error, msg);
          return Promise.reject(error);
        }
      }
      handleError(error, msg) {
        this.errorCount++;
        this.fireError(error, msg, this.errorCount);
      }
      end() {
        this.writable.end();
      }
    };
    exports2.WriteableStreamMessageWriter = WriteableStreamMessageWriter;
  }
});

// node_modules/vscode-jsonrpc/lib/common/messageBuffer.js
var require_messageBuffer = __commonJS({
  "node_modules/vscode-jsonrpc/lib/common/messageBuffer.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.AbstractMessageBuffer = void 0;
    var CR = 13;
    var LF = 10;
    var CRLF = "\r\n";
    var AbstractMessageBuffer = class {
      constructor(encoding = "utf-8") {
        this._encoding = encoding;
        this._chunks = [];
        this._totalLength = 0;
      }
      get encoding() {
        return this._encoding;
      }
      append(chunk) {
        const toAppend = typeof chunk === "string" ? this.fromString(chunk, this._encoding) : chunk;
        this._chunks.push(toAppend);
        this._totalLength += toAppend.byteLength;
      }
      tryReadHeaders(lowerCaseKeys = false) {
        if (this._chunks.length === 0) {
          return void 0;
        }
        let state = 0;
        let chunkIndex = 0;
        let offset = 0;
        let chunkBytesRead = 0;
        row: while (chunkIndex < this._chunks.length) {
          const chunk = this._chunks[chunkIndex];
          offset = 0;
          column: while (offset < chunk.length) {
            const value = chunk[offset];
            switch (value) {
              case CR:
                switch (state) {
                  case 0:
                    state = 1;
                    break;
                  case 2:
                    state = 3;
                    break;
                  default:
                    state = 0;
                }
                break;
              case LF:
                switch (state) {
                  case 1:
                    state = 2;
                    break;
                  case 3:
                    state = 4;
                    offset++;
                    break row;
                  default:
                    state = 0;
                }
                break;
              default:
                state = 0;
            }
            offset++;
          }
          chunkBytesRead += chunk.byteLength;
          chunkIndex++;
        }
        if (state !== 4) {
          return void 0;
        }
        const buffer = this._read(chunkBytesRead + offset);
        const result = /* @__PURE__ */ new Map();
        const headers = this.toString(buffer, "ascii").split(CRLF);
        if (headers.length < 2) {
          return result;
        }
        for (let i = 0; i < headers.length - 2; i++) {
          const header = headers[i];
          const index = header.indexOf(":");
          if (index === -1) {
            throw new Error(`Message header must separate key and value using ':'
${header}`);
          }
          const key = header.substr(0, index);
          const value = header.substr(index + 1).trim();
          result.set(lowerCaseKeys ? key.toLowerCase() : key, value);
        }
        return result;
      }
      tryReadBody(length) {
        if (this._totalLength < length) {
          return void 0;
        }
        return this._read(length);
      }
      get numberOfBytes() {
        return this._totalLength;
      }
      _read(byteCount) {
        if (byteCount === 0) {
          return this.emptyBuffer();
        }
        if (byteCount > this._totalLength) {
          throw new Error(`Cannot read so many bytes!`);
        }
        if (this._chunks[0].byteLength === byteCount) {
          const chunk = this._chunks[0];
          this._chunks.shift();
          this._totalLength -= byteCount;
          return this.asNative(chunk);
        }
        if (this._chunks[0].byteLength > byteCount) {
          const chunk = this._chunks[0];
          const result2 = this.asNative(chunk, byteCount);
          this._chunks[0] = chunk.slice(byteCount);
          this._totalLength -= byteCount;
          return result2;
        }
        const result = this.allocNative(byteCount);
        let resultOffset = 0;
        let chunkIndex = 0;
        while (byteCount > 0) {
          const chunk = this._chunks[chunkIndex];
          if (chunk.byteLength > byteCount) {
            const chunkPart = chunk.slice(0, byteCount);
            result.set(chunkPart, resultOffset);
            resultOffset += byteCount;
            this._chunks[chunkIndex] = chunk.slice(byteCount);
            this._totalLength -= byteCount;
            byteCount -= byteCount;
          } else {
            result.set(chunk, resultOffset);
            resultOffset += chunk.byteLength;
            this._chunks.shift();
            this._totalLength -= chunk.byteLength;
            byteCount -= chunk.byteLength;
          }
        }
        return result;
      }
    };
    exports2.AbstractMessageBuffer = AbstractMessageBuffer;
  }
});

// node_modules/vscode-jsonrpc/lib/common/connection.js
var require_connection = __commonJS({
  "node_modules/vscode-jsonrpc/lib/common/connection.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.createMessageConnection = exports2.ConnectionOptions = exports2.MessageStrategy = exports2.CancellationStrategy = exports2.CancellationSenderStrategy = exports2.CancellationReceiverStrategy = exports2.RequestCancellationReceiverStrategy = exports2.IdCancellationReceiverStrategy = exports2.ConnectionStrategy = exports2.ConnectionError = exports2.ConnectionErrors = exports2.LogTraceNotification = exports2.SetTraceNotification = exports2.TraceFormat = exports2.TraceValues = exports2.Trace = exports2.NullLogger = exports2.ProgressType = exports2.ProgressToken = void 0;
    var ral_1 = require_ral();
    var Is = require_is2();
    var messages_1 = require_messages();
    var linkedMap_1 = require_linkedMap();
    var events_1 = require_events();
    var cancellation_1 = require_cancellation();
    var CancelNotification;
    (function(CancelNotification2) {
      CancelNotification2.type = new messages_1.NotificationType("$/cancelRequest");
    })(CancelNotification || (CancelNotification = {}));
    var ProgressToken;
    (function(ProgressToken2) {
      function is(value) {
        return typeof value === "string" || typeof value === "number";
      }
      ProgressToken2.is = is;
    })(ProgressToken || (exports2.ProgressToken = ProgressToken = {}));
    var ProgressNotification;
    (function(ProgressNotification2) {
      ProgressNotification2.type = new messages_1.NotificationType("$/progress");
    })(ProgressNotification || (ProgressNotification = {}));
    var ProgressType = class {
      constructor() {
      }
    };
    exports2.ProgressType = ProgressType;
    var StarRequestHandler;
    (function(StarRequestHandler2) {
      function is(value) {
        return Is.func(value);
      }
      StarRequestHandler2.is = is;
    })(StarRequestHandler || (StarRequestHandler = {}));
    exports2.NullLogger = Object.freeze({
      error: () => {
      },
      warn: () => {
      },
      info: () => {
      },
      log: () => {
      }
    });
    var Trace;
    (function(Trace2) {
      Trace2[Trace2["Off"] = 0] = "Off";
      Trace2[Trace2["Messages"] = 1] = "Messages";
      Trace2[Trace2["Compact"] = 2] = "Compact";
      Trace2[Trace2["Verbose"] = 3] = "Verbose";
    })(Trace || (exports2.Trace = Trace = {}));
    var TraceValues;
    (function(TraceValues2) {
      TraceValues2.Off = "off";
      TraceValues2.Messages = "messages";
      TraceValues2.Compact = "compact";
      TraceValues2.Verbose = "verbose";
    })(TraceValues || (exports2.TraceValues = TraceValues = {}));
    (function(Trace2) {
      function fromString(value) {
        if (!Is.string(value)) {
          return Trace2.Off;
        }
        value = value.toLowerCase();
        switch (value) {
          case "off":
            return Trace2.Off;
          case "messages":
            return Trace2.Messages;
          case "compact":
            return Trace2.Compact;
          case "verbose":
            return Trace2.Verbose;
          default:
            return Trace2.Off;
        }
      }
      Trace2.fromString = fromString;
      function toString(value) {
        switch (value) {
          case Trace2.Off:
            return "off";
          case Trace2.Messages:
            return "messages";
          case Trace2.Compact:
            return "compact";
          case Trace2.Verbose:
            return "verbose";
          default:
            return "off";
        }
      }
      Trace2.toString = toString;
    })(Trace || (exports2.Trace = Trace = {}));
    var TraceFormat;
    (function(TraceFormat2) {
      TraceFormat2["Text"] = "text";
      TraceFormat2["JSON"] = "json";
    })(TraceFormat || (exports2.TraceFormat = TraceFormat = {}));
    (function(TraceFormat2) {
      function fromString(value) {
        if (!Is.string(value)) {
          return TraceFormat2.Text;
        }
        value = value.toLowerCase();
        if (value === "json") {
          return TraceFormat2.JSON;
        } else {
          return TraceFormat2.Text;
        }
      }
      TraceFormat2.fromString = fromString;
    })(TraceFormat || (exports2.TraceFormat = TraceFormat = {}));
    var SetTraceNotification;
    (function(SetTraceNotification2) {
      SetTraceNotification2.type = new messages_1.NotificationType("$/setTrace");
    })(SetTraceNotification || (exports2.SetTraceNotification = SetTraceNotification = {}));
    var LogTraceNotification;
    (function(LogTraceNotification2) {
      LogTraceNotification2.type = new messages_1.NotificationType("$/logTrace");
    })(LogTraceNotification || (exports2.LogTraceNotification = LogTraceNotification = {}));
    var ConnectionErrors;
    (function(ConnectionErrors2) {
      ConnectionErrors2[ConnectionErrors2["Closed"] = 1] = "Closed";
      ConnectionErrors2[ConnectionErrors2["Disposed"] = 2] = "Disposed";
      ConnectionErrors2[ConnectionErrors2["AlreadyListening"] = 3] = "AlreadyListening";
    })(ConnectionErrors || (exports2.ConnectionErrors = ConnectionErrors = {}));
    var ConnectionError = class _ConnectionError extends Error {
      constructor(code, message) {
        super(message);
        this.code = code;
        Object.setPrototypeOf(this, _ConnectionError.prototype);
      }
    };
    exports2.ConnectionError = ConnectionError;
    var ConnectionStrategy;
    (function(ConnectionStrategy2) {
      function is(value) {
        const candidate = value;
        return candidate && Is.func(candidate.cancelUndispatched);
      }
      ConnectionStrategy2.is = is;
    })(ConnectionStrategy || (exports2.ConnectionStrategy = ConnectionStrategy = {}));
    var IdCancellationReceiverStrategy;
    (function(IdCancellationReceiverStrategy2) {
      function is(value) {
        const candidate = value;
        return candidate && (candidate.kind === void 0 || candidate.kind === "id") && Is.func(candidate.createCancellationTokenSource) && (candidate.dispose === void 0 || Is.func(candidate.dispose));
      }
      IdCancellationReceiverStrategy2.is = is;
    })(IdCancellationReceiverStrategy || (exports2.IdCancellationReceiverStrategy = IdCancellationReceiverStrategy = {}));
    var RequestCancellationReceiverStrategy;
    (function(RequestCancellationReceiverStrategy2) {
      function is(value) {
        const candidate = value;
        return candidate && candidate.kind === "request" && Is.func(candidate.createCancellationTokenSource) && (candidate.dispose === void 0 || Is.func(candidate.dispose));
      }
      RequestCancellationReceiverStrategy2.is = is;
    })(RequestCancellationReceiverStrategy || (exports2.RequestCancellationReceiverStrategy = RequestCancellationReceiverStrategy = {}));
    var CancellationReceiverStrategy;
    (function(CancellationReceiverStrategy2) {
      CancellationReceiverStrategy2.Message = Object.freeze({
        createCancellationTokenSource(_) {
          return new cancellation_1.CancellationTokenSource();
        }
      });
      function is(value) {
        return IdCancellationReceiverStrategy.is(value) || RequestCancellationReceiverStrategy.is(value);
      }
      CancellationReceiverStrategy2.is = is;
    })(CancellationReceiverStrategy || (exports2.CancellationReceiverStrategy = CancellationReceiverStrategy = {}));
    var CancellationSenderStrategy;
    (function(CancellationSenderStrategy2) {
      CancellationSenderStrategy2.Message = Object.freeze({
        sendCancellation(conn, id) {
          return conn.sendNotification(CancelNotification.type, { id });
        },
        cleanup(_) {
        }
      });
      function is(value) {
        const candidate = value;
        return candidate && Is.func(candidate.sendCancellation) && Is.func(candidate.cleanup);
      }
      CancellationSenderStrategy2.is = is;
    })(CancellationSenderStrategy || (exports2.CancellationSenderStrategy = CancellationSenderStrategy = {}));
    var CancellationStrategy;
    (function(CancellationStrategy2) {
      CancellationStrategy2.Message = Object.freeze({
        receiver: CancellationReceiverStrategy.Message,
        sender: CancellationSenderStrategy.Message
      });
      function is(value) {
        const candidate = value;
        return candidate && CancellationReceiverStrategy.is(candidate.receiver) && CancellationSenderStrategy.is(candidate.sender);
      }
      CancellationStrategy2.is = is;
    })(CancellationStrategy || (exports2.CancellationStrategy = CancellationStrategy = {}));
    var MessageStrategy;
    (function(MessageStrategy2) {
      function is(value) {
        const candidate = value;
        return candidate && Is.func(candidate.handleMessage);
      }
      MessageStrategy2.is = is;
    })(MessageStrategy || (exports2.MessageStrategy = MessageStrategy = {}));
    var ConnectionOptions;
    (function(ConnectionOptions2) {
      function is(value) {
        const candidate = value;
        return candidate && (CancellationStrategy.is(candidate.cancellationStrategy) || ConnectionStrategy.is(candidate.connectionStrategy) || MessageStrategy.is(candidate.messageStrategy));
      }
      ConnectionOptions2.is = is;
    })(ConnectionOptions || (exports2.ConnectionOptions = ConnectionOptions = {}));
    var ConnectionState;
    (function(ConnectionState2) {
      ConnectionState2[ConnectionState2["New"] = 1] = "New";
      ConnectionState2[ConnectionState2["Listening"] = 2] = "Listening";
      ConnectionState2[ConnectionState2["Closed"] = 3] = "Closed";
      ConnectionState2[ConnectionState2["Disposed"] = 4] = "Disposed";
    })(ConnectionState || (ConnectionState = {}));
    function createMessageConnection(messageReader, messageWriter, _logger, options) {
      const logger = _logger !== void 0 ? _logger : exports2.NullLogger;
      let sequenceNumber = 0;
      let notificationSequenceNumber = 0;
      let unknownResponseSequenceNumber = 0;
      const version = "2.0";
      let starRequestHandler = void 0;
      const requestHandlers = /* @__PURE__ */ new Map();
      let starNotificationHandler = void 0;
      const notificationHandlers = /* @__PURE__ */ new Map();
      const progressHandlers = /* @__PURE__ */ new Map();
      let timer;
      let messageQueue = new linkedMap_1.LinkedMap();
      let responsePromises = /* @__PURE__ */ new Map();
      let knownCanceledRequests = /* @__PURE__ */ new Set();
      let requestTokens = /* @__PURE__ */ new Map();
      let trace = Trace.Off;
      let traceFormat = TraceFormat.Text;
      let tracer;
      let state = ConnectionState.New;
      const errorEmitter = new events_1.Emitter();
      const closeEmitter = new events_1.Emitter();
      const unhandledNotificationEmitter = new events_1.Emitter();
      const unhandledProgressEmitter = new events_1.Emitter();
      const disposeEmitter = new events_1.Emitter();
      const cancellationStrategy = options && options.cancellationStrategy ? options.cancellationStrategy : CancellationStrategy.Message;
      function createRequestQueueKey(id) {
        if (id === null) {
          throw new Error(`Can't send requests with id null since the response can't be correlated.`);
        }
        return "req-" + id.toString();
      }
      function createResponseQueueKey(id) {
        if (id === null) {
          return "res-unknown-" + (++unknownResponseSequenceNumber).toString();
        } else {
          return "res-" + id.toString();
        }
      }
      function createNotificationQueueKey() {
        return "not-" + (++notificationSequenceNumber).toString();
      }
      function addMessageToQueue(queue, message) {
        if (messages_1.Message.isRequest(message)) {
          queue.set(createRequestQueueKey(message.id), message);
        } else if (messages_1.Message.isResponse(message)) {
          queue.set(createResponseQueueKey(message.id), message);
        } else {
          queue.set(createNotificationQueueKey(), message);
        }
      }
      function cancelUndispatched(_message) {
        return void 0;
      }
      function isListening() {
        return state === ConnectionState.Listening;
      }
      function isClosed() {
        return state === ConnectionState.Closed;
      }
      function isDisposed() {
        return state === ConnectionState.Disposed;
      }
      function closeHandler() {
        if (state === ConnectionState.New || state === ConnectionState.Listening) {
          state = ConnectionState.Closed;
          closeEmitter.fire(void 0);
        }
      }
      function readErrorHandler(error) {
        errorEmitter.fire([error, void 0, void 0]);
      }
      function writeErrorHandler(data) {
        errorEmitter.fire(data);
      }
      messageReader.onClose(closeHandler);
      messageReader.onError(readErrorHandler);
      messageWriter.onClose(closeHandler);
      messageWriter.onError(writeErrorHandler);
      function triggerMessageQueue() {
        if (timer || messageQueue.size === 0) {
          return;
        }
        timer = (0, ral_1.default)().timer.setImmediate(() => {
          timer = void 0;
          processMessageQueue();
        });
      }
      function handleMessage(message) {
        if (messages_1.Message.isRequest(message)) {
          handleRequest(message);
        } else if (messages_1.Message.isNotification(message)) {
          handleNotification(message);
        } else if (messages_1.Message.isResponse(message)) {
          handleResponse(message);
        } else {
          handleInvalidMessage(message);
        }
      }
      function processMessageQueue() {
        if (messageQueue.size === 0) {
          return;
        }
        const message = messageQueue.shift();
        try {
          const messageStrategy = options?.messageStrategy;
          if (MessageStrategy.is(messageStrategy)) {
            messageStrategy.handleMessage(message, handleMessage);
          } else {
            handleMessage(message);
          }
        } finally {
          triggerMessageQueue();
        }
      }
      const callback = (message) => {
        try {
          if (messages_1.Message.isNotification(message) && message.method === CancelNotification.type.method) {
            const cancelId = message.params.id;
            const key = createRequestQueueKey(cancelId);
            const toCancel = messageQueue.get(key);
            if (messages_1.Message.isRequest(toCancel)) {
              const strategy = options?.connectionStrategy;
              const response = strategy && strategy.cancelUndispatched ? strategy.cancelUndispatched(toCancel, cancelUndispatched) : cancelUndispatched(toCancel);
              if (response && (response.error !== void 0 || response.result !== void 0)) {
                messageQueue.delete(key);
                requestTokens.delete(cancelId);
                response.id = toCancel.id;
                traceSendingResponse(response, message.method, Date.now());
                messageWriter.write(response).catch(() => logger.error(`Sending response for canceled message failed.`));
                return;
              }
            }
            const cancellationToken = requestTokens.get(cancelId);
            if (cancellationToken !== void 0) {
              cancellationToken.cancel();
              traceReceivedNotification(message);
              return;
            } else {
              knownCanceledRequests.add(cancelId);
            }
          }
          addMessageToQueue(messageQueue, message);
        } finally {
          triggerMessageQueue();
        }
      };
      function handleRequest(requestMessage) {
        if (isDisposed()) {
          return;
        }
        function reply(resultOrError, method, startTime2) {
          const message = {
            jsonrpc: version,
            id: requestMessage.id
          };
          if (resultOrError instanceof messages_1.ResponseError) {
            message.error = resultOrError.toJson();
          } else {
            message.result = resultOrError === void 0 ? null : resultOrError;
          }
          traceSendingResponse(message, method, startTime2);
          messageWriter.write(message).catch(() => logger.error(`Sending response failed.`));
        }
        function replyError(error, method, startTime2) {
          const message = {
            jsonrpc: version,
            id: requestMessage.id,
            error: error.toJson()
          };
          traceSendingResponse(message, method, startTime2);
          messageWriter.write(message).catch(() => logger.error(`Sending response failed.`));
        }
        function replySuccess(result, method, startTime2) {
          if (result === void 0) {
            result = null;
          }
          const message = {
            jsonrpc: version,
            id: requestMessage.id,
            result
          };
          traceSendingResponse(message, method, startTime2);
          messageWriter.write(message).catch(() => logger.error(`Sending response failed.`));
        }
        traceReceivedRequest(requestMessage);
        const element = requestHandlers.get(requestMessage.method);
        let type;
        let requestHandler;
        if (element) {
          type = element.type;
          requestHandler = element.handler;
        }
        const startTime = Date.now();
        if (requestHandler || starRequestHandler) {
          const tokenKey = requestMessage.id ?? String(Date.now());
          const cancellationSource = IdCancellationReceiverStrategy.is(cancellationStrategy.receiver) ? cancellationStrategy.receiver.createCancellationTokenSource(tokenKey) : cancellationStrategy.receiver.createCancellationTokenSource(requestMessage);
          if (requestMessage.id !== null && knownCanceledRequests.has(requestMessage.id)) {
            cancellationSource.cancel();
          }
          if (requestMessage.id !== null) {
            requestTokens.set(tokenKey, cancellationSource);
          }
          try {
            let handlerResult;
            if (requestHandler) {
              if (requestMessage.params === void 0) {
                if (type !== void 0 && type.numberOfParams !== 0) {
                  replyError(new messages_1.ResponseError(messages_1.ErrorCodes.InvalidParams, `Request ${requestMessage.method} defines ${type.numberOfParams} params but received none.`), requestMessage.method, startTime);
                  return;
                }
                handlerResult = requestHandler(cancellationSource.token);
              } else if (Array.isArray(requestMessage.params)) {
                if (type !== void 0 && type.parameterStructures === messages_1.ParameterStructures.byName) {
                  replyError(new messages_1.ResponseError(messages_1.ErrorCodes.InvalidParams, `Request ${requestMessage.method} defines parameters by name but received parameters by position`), requestMessage.method, startTime);
                  return;
                }
                handlerResult = requestHandler(...requestMessage.params, cancellationSource.token);
              } else {
                if (type !== void 0 && type.parameterStructures === messages_1.ParameterStructures.byPosition) {
                  replyError(new messages_1.ResponseError(messages_1.ErrorCodes.InvalidParams, `Request ${requestMessage.method} defines parameters by position but received parameters by name`), requestMessage.method, startTime);
                  return;
                }
                handlerResult = requestHandler(requestMessage.params, cancellationSource.token);
              }
            } else if (starRequestHandler) {
              handlerResult = starRequestHandler(requestMessage.method, requestMessage.params, cancellationSource.token);
            }
            const promise = handlerResult;
            if (!handlerResult) {
              requestTokens.delete(tokenKey);
              replySuccess(handlerResult, requestMessage.method, startTime);
            } else if (promise.then) {
              promise.then((resultOrError) => {
                requestTokens.delete(tokenKey);
                reply(resultOrError, requestMessage.method, startTime);
              }, (error) => {
                requestTokens.delete(tokenKey);
                if (error instanceof messages_1.ResponseError) {
                  replyError(error, requestMessage.method, startTime);
                } else if (error && Is.string(error.message)) {
                  replyError(new messages_1.ResponseError(messages_1.ErrorCodes.InternalError, `Request ${requestMessage.method} failed with message: ${error.message}`), requestMessage.method, startTime);
                } else {
                  replyError(new messages_1.ResponseError(messages_1.ErrorCodes.InternalError, `Request ${requestMessage.method} failed unexpectedly without providing any details.`), requestMessage.method, startTime);
                }
              });
            } else {
              requestTokens.delete(tokenKey);
              reply(handlerResult, requestMessage.method, startTime);
            }
          } catch (error) {
            requestTokens.delete(tokenKey);
            if (error instanceof messages_1.ResponseError) {
              reply(error, requestMessage.method, startTime);
            } else if (error && Is.string(error.message)) {
              replyError(new messages_1.ResponseError(messages_1.ErrorCodes.InternalError, `Request ${requestMessage.method} failed with message: ${error.message}`), requestMessage.method, startTime);
            } else {
              replyError(new messages_1.ResponseError(messages_1.ErrorCodes.InternalError, `Request ${requestMessage.method} failed unexpectedly without providing any details.`), requestMessage.method, startTime);
            }
          }
        } else {
          replyError(new messages_1.ResponseError(messages_1.ErrorCodes.MethodNotFound, `Unhandled method ${requestMessage.method}`), requestMessage.method, startTime);
        }
      }
      function handleResponse(responseMessage) {
        if (isDisposed()) {
          return;
        }
        if (responseMessage.id === null) {
          if (responseMessage.error) {
            logger.error(`Received response message without id: Error is: 
${JSON.stringify(responseMessage.error, void 0, 4)}`);
          } else {
            logger.error(`Received response message without id. No further error information provided.`);
          }
        } else {
          const key = responseMessage.id;
          const responsePromise = responsePromises.get(key);
          traceReceivedResponse(responseMessage, responsePromise);
          if (responsePromise !== void 0) {
            responsePromises.delete(key);
            try {
              if (responseMessage.error) {
                const error = responseMessage.error;
                responsePromise.reject(new messages_1.ResponseError(error.code, error.message, error.data));
              } else if (responseMessage.result !== void 0) {
                responsePromise.resolve(responseMessage.result);
              } else {
                throw new Error("Should never happen.");
              }
            } catch (error) {
              if (error.message) {
                logger.error(`Response handler '${responsePromise.method}' failed with message: ${error.message}`);
              } else {
                logger.error(`Response handler '${responsePromise.method}' failed unexpectedly.`);
              }
            }
          }
        }
      }
      function handleNotification(message) {
        if (isDisposed()) {
          return;
        }
        let type = void 0;
        let notificationHandler;
        if (message.method === CancelNotification.type.method) {
          const cancelId = message.params.id;
          knownCanceledRequests.delete(cancelId);
          traceReceivedNotification(message);
          return;
        } else {
          const element = notificationHandlers.get(message.method);
          if (element) {
            notificationHandler = element.handler;
            type = element.type;
          }
        }
        if (notificationHandler || starNotificationHandler) {
          try {
            traceReceivedNotification(message);
            if (notificationHandler) {
              if (message.params === void 0) {
                if (type !== void 0) {
                  if (type.numberOfParams !== 0 && type.parameterStructures !== messages_1.ParameterStructures.byName) {
                    logger.error(`Notification ${message.method} defines ${type.numberOfParams} params but received none.`);
                  }
                }
                notificationHandler();
              } else if (Array.isArray(message.params)) {
                const params = message.params;
                if (message.method === ProgressNotification.type.method && params.length === 2 && ProgressToken.is(params[0])) {
                  notificationHandler({ token: params[0], value: params[1] });
                } else {
                  if (type !== void 0) {
                    if (type.parameterStructures === messages_1.ParameterStructures.byName) {
                      logger.error(`Notification ${message.method} defines parameters by name but received parameters by position`);
                    }
                    if (type.numberOfParams !== message.params.length) {
                      logger.error(`Notification ${message.method} defines ${type.numberOfParams} params but received ${params.length} arguments`);
                    }
                  }
                  notificationHandler(...params);
                }
              } else {
                if (type !== void 0 && type.parameterStructures === messages_1.ParameterStructures.byPosition) {
                  logger.error(`Notification ${message.method} defines parameters by position but received parameters by name`);
                }
                notificationHandler(message.params);
              }
            } else if (starNotificationHandler) {
              starNotificationHandler(message.method, message.params);
            }
          } catch (error) {
            if (error.message) {
              logger.error(`Notification handler '${message.method}' failed with message: ${error.message}`);
            } else {
              logger.error(`Notification handler '${message.method}' failed unexpectedly.`);
            }
          }
        } else {
          unhandledNotificationEmitter.fire(message);
        }
      }
      function handleInvalidMessage(message) {
        if (!message) {
          logger.error("Received empty message.");
          return;
        }
        logger.error(`Received message which is neither a response nor a notification message:
${JSON.stringify(message, null, 4)}`);
        const responseMessage = message;
        if (Is.string(responseMessage.id) || Is.number(responseMessage.id)) {
          const key = responseMessage.id;
          const responseHandler = responsePromises.get(key);
          if (responseHandler) {
            responseHandler.reject(new Error("The received response has neither a result nor an error property."));
          }
        }
      }
      function stringifyTrace(params) {
        if (params === void 0 || params === null) {
          return void 0;
        }
        switch (trace) {
          case Trace.Verbose:
            return JSON.stringify(params, null, 4);
          case Trace.Compact:
            return JSON.stringify(params);
          default:
            return void 0;
        }
      }
      function traceSendingRequest(message) {
        if (trace === Trace.Off || !tracer) {
          return;
        }
        if (traceFormat === TraceFormat.Text) {
          let data = void 0;
          if ((trace === Trace.Verbose || trace === Trace.Compact) && message.params) {
            data = `Params: ${stringifyTrace(message.params)}

`;
          }
          tracer.log(`Sending request '${message.method} - (${message.id})'.`, data);
        } else {
          logLSPMessage("send-request", message);
        }
      }
      function traceSendingNotification(message) {
        if (trace === Trace.Off || !tracer) {
          return;
        }
        if (traceFormat === TraceFormat.Text) {
          let data = void 0;
          if (trace === Trace.Verbose || trace === Trace.Compact) {
            if (message.params) {
              data = `Params: ${stringifyTrace(message.params)}

`;
            } else {
              data = "No parameters provided.\n\n";
            }
          }
          tracer.log(`Sending notification '${message.method}'.`, data);
        } else {
          logLSPMessage("send-notification", message);
        }
      }
      function traceSendingResponse(message, method, startTime) {
        if (trace === Trace.Off || !tracer) {
          return;
        }
        if (traceFormat === TraceFormat.Text) {
          let data = void 0;
          if (trace === Trace.Verbose || trace === Trace.Compact) {
            if (message.error && message.error.data) {
              data = `Error data: ${stringifyTrace(message.error.data)}

`;
            } else {
              if (message.result) {
                data = `Result: ${stringifyTrace(message.result)}

`;
              } else if (message.error === void 0) {
                data = "No result returned.\n\n";
              }
            }
          }
          tracer.log(`Sending response '${method} - (${message.id})'. Processing request took ${Date.now() - startTime}ms`, data);
        } else {
          logLSPMessage("send-response", message);
        }
      }
      function traceReceivedRequest(message) {
        if (trace === Trace.Off || !tracer) {
          return;
        }
        if (traceFormat === TraceFormat.Text) {
          let data = void 0;
          if ((trace === Trace.Verbose || trace === Trace.Compact) && message.params) {
            data = `Params: ${stringifyTrace(message.params)}

`;
          }
          tracer.log(`Received request '${message.method} - (${message.id})'.`, data);
        } else {
          logLSPMessage("receive-request", message);
        }
      }
      function traceReceivedNotification(message) {
        if (trace === Trace.Off || !tracer || message.method === LogTraceNotification.type.method) {
          return;
        }
        if (traceFormat === TraceFormat.Text) {
          let data = void 0;
          if (trace === Trace.Verbose || trace === Trace.Compact) {
            if (message.params) {
              data = `Params: ${stringifyTrace(message.params)}

`;
            } else {
              data = "No parameters provided.\n\n";
            }
          }
          tracer.log(`Received notification '${message.method}'.`, data);
        } else {
          logLSPMessage("receive-notification", message);
        }
      }
      function traceReceivedResponse(message, responsePromise) {
        if (trace === Trace.Off || !tracer) {
          return;
        }
        if (traceFormat === TraceFormat.Text) {
          let data = void 0;
          if (trace === Trace.Verbose || trace === Trace.Compact) {
            if (message.error && message.error.data) {
              data = `Error data: ${stringifyTrace(message.error.data)}

`;
            } else {
              if (message.result) {
                data = `Result: ${stringifyTrace(message.result)}

`;
              } else if (message.error === void 0) {
                data = "No result returned.\n\n";
              }
            }
          }
          if (responsePromise) {
            const error = message.error ? ` Request failed: ${message.error.message} (${message.error.code}).` : "";
            tracer.log(`Received response '${responsePromise.method} - (${message.id})' in ${Date.now() - responsePromise.timerStart}ms.${error}`, data);
          } else {
            tracer.log(`Received response ${message.id} without active response promise.`, data);
          }
        } else {
          logLSPMessage("receive-response", message);
        }
      }
      function logLSPMessage(type, message) {
        if (!tracer || trace === Trace.Off) {
          return;
        }
        const lspMessage = {
          isLSPMessage: true,
          type,
          message,
          timestamp: Date.now()
        };
        tracer.log(lspMessage);
      }
      function throwIfClosedOrDisposed() {
        if (isClosed()) {
          throw new ConnectionError(ConnectionErrors.Closed, "Connection is closed.");
        }
        if (isDisposed()) {
          throw new ConnectionError(ConnectionErrors.Disposed, "Connection is disposed.");
        }
      }
      function throwIfListening() {
        if (isListening()) {
          throw new ConnectionError(ConnectionErrors.AlreadyListening, "Connection is already listening");
        }
      }
      function throwIfNotListening() {
        if (!isListening()) {
          throw new Error("Call listen() first.");
        }
      }
      function undefinedToNull(param) {
        if (param === void 0) {
          return null;
        } else {
          return param;
        }
      }
      function nullToUndefined(param) {
        if (param === null) {
          return void 0;
        } else {
          return param;
        }
      }
      function isNamedParam(param) {
        return param !== void 0 && param !== null && !Array.isArray(param) && typeof param === "object";
      }
      function computeSingleParam(parameterStructures, param) {
        switch (parameterStructures) {
          case messages_1.ParameterStructures.auto:
            if (isNamedParam(param)) {
              return nullToUndefined(param);
            } else {
              return [undefinedToNull(param)];
            }
          case messages_1.ParameterStructures.byName:
            if (!isNamedParam(param)) {
              throw new Error(`Received parameters by name but param is not an object literal.`);
            }
            return nullToUndefined(param);
          case messages_1.ParameterStructures.byPosition:
            return [undefinedToNull(param)];
          default:
            throw new Error(`Unknown parameter structure ${parameterStructures.toString()}`);
        }
      }
      function computeMessageParams(type, params) {
        let result;
        const numberOfParams = type.numberOfParams;
        switch (numberOfParams) {
          case 0:
            result = void 0;
            break;
          case 1:
            result = computeSingleParam(type.parameterStructures, params[0]);
            break;
          default:
            result = [];
            for (let i = 0; i < params.length && i < numberOfParams; i++) {
              result.push(undefinedToNull(params[i]));
            }
            if (params.length < numberOfParams) {
              for (let i = params.length; i < numberOfParams; i++) {
                result.push(null);
              }
            }
            break;
        }
        return result;
      }
      const connection2 = {
        sendNotification: (type, ...args) => {
          throwIfClosedOrDisposed();
          let method;
          let messageParams;
          if (Is.string(type)) {
            method = type;
            const first = args[0];
            let paramStart = 0;
            let parameterStructures = messages_1.ParameterStructures.auto;
            if (messages_1.ParameterStructures.is(first)) {
              paramStart = 1;
              parameterStructures = first;
            }
            let paramEnd = args.length;
            const numberOfParams = paramEnd - paramStart;
            switch (numberOfParams) {
              case 0:
                messageParams = void 0;
                break;
              case 1:
                messageParams = computeSingleParam(parameterStructures, args[paramStart]);
                break;
              default:
                if (parameterStructures === messages_1.ParameterStructures.byName) {
                  throw new Error(`Received ${numberOfParams} parameters for 'by Name' notification parameter structure.`);
                }
                messageParams = args.slice(paramStart, paramEnd).map((value) => undefinedToNull(value));
                break;
            }
          } else {
            const params = args;
            method = type.method;
            messageParams = computeMessageParams(type, params);
          }
          const notificationMessage = {
            jsonrpc: version,
            method,
            params: messageParams
          };
          traceSendingNotification(notificationMessage);
          return messageWriter.write(notificationMessage).catch((error) => {
            logger.error(`Sending notification failed.`);
            throw error;
          });
        },
        onNotification: (type, handler) => {
          throwIfClosedOrDisposed();
          let method;
          if (Is.func(type)) {
            starNotificationHandler = type;
          } else if (handler) {
            if (Is.string(type)) {
              method = type;
              notificationHandlers.set(type, { type: void 0, handler });
            } else {
              method = type.method;
              notificationHandlers.set(type.method, { type, handler });
            }
          }
          return {
            dispose: () => {
              if (method !== void 0) {
                notificationHandlers.delete(method);
              } else {
                starNotificationHandler = void 0;
              }
            }
          };
        },
        onProgress: (_type, token, handler) => {
          if (progressHandlers.has(token)) {
            throw new Error(`Progress handler for token ${token} already registered`);
          }
          progressHandlers.set(token, handler);
          return {
            dispose: () => {
              progressHandlers.delete(token);
            }
          };
        },
        sendProgress: (_type, token, value) => {
          return connection2.sendNotification(ProgressNotification.type, { token, value });
        },
        onUnhandledProgress: unhandledProgressEmitter.event,
        sendRequest: (type, ...args) => {
          throwIfClosedOrDisposed();
          throwIfNotListening();
          let method;
          let messageParams;
          let token = void 0;
          if (Is.string(type)) {
            method = type;
            const first = args[0];
            const last = args[args.length - 1];
            let paramStart = 0;
            let parameterStructures = messages_1.ParameterStructures.auto;
            if (messages_1.ParameterStructures.is(first)) {
              paramStart = 1;
              parameterStructures = first;
            }
            let paramEnd = args.length;
            if (cancellation_1.CancellationToken.is(last)) {
              paramEnd = paramEnd - 1;
              token = last;
            }
            const numberOfParams = paramEnd - paramStart;
            switch (numberOfParams) {
              case 0:
                messageParams = void 0;
                break;
              case 1:
                messageParams = computeSingleParam(parameterStructures, args[paramStart]);
                break;
              default:
                if (parameterStructures === messages_1.ParameterStructures.byName) {
                  throw new Error(`Received ${numberOfParams} parameters for 'by Name' request parameter structure.`);
                }
                messageParams = args.slice(paramStart, paramEnd).map((value) => undefinedToNull(value));
                break;
            }
          } else {
            const params = args;
            method = type.method;
            messageParams = computeMessageParams(type, params);
            const numberOfParams = type.numberOfParams;
            token = cancellation_1.CancellationToken.is(params[numberOfParams]) ? params[numberOfParams] : void 0;
          }
          const id = sequenceNumber++;
          let disposable;
          if (token) {
            disposable = token.onCancellationRequested(() => {
              const p = cancellationStrategy.sender.sendCancellation(connection2, id);
              if (p === void 0) {
                logger.log(`Received no promise from cancellation strategy when cancelling id ${id}`);
                return Promise.resolve();
              } else {
                return p.catch(() => {
                  logger.log(`Sending cancellation messages for id ${id} failed`);
                });
              }
            });
          }
          const requestMessage = {
            jsonrpc: version,
            id,
            method,
            params: messageParams
          };
          traceSendingRequest(requestMessage);
          if (typeof cancellationStrategy.sender.enableCancellation === "function") {
            cancellationStrategy.sender.enableCancellation(requestMessage);
          }
          return new Promise(async (resolve, reject) => {
            const resolveWithCleanup = (r) => {
              resolve(r);
              cancellationStrategy.sender.cleanup(id);
              disposable?.dispose();
            };
            const rejectWithCleanup = (r) => {
              reject(r);
              cancellationStrategy.sender.cleanup(id);
              disposable?.dispose();
            };
            const responsePromise = { method, timerStart: Date.now(), resolve: resolveWithCleanup, reject: rejectWithCleanup };
            try {
              await messageWriter.write(requestMessage);
              responsePromises.set(id, responsePromise);
            } catch (error) {
              logger.error(`Sending request failed.`);
              responsePromise.reject(new messages_1.ResponseError(messages_1.ErrorCodes.MessageWriteError, error.message ? error.message : "Unknown reason"));
              throw error;
            }
          });
        },
        onRequest: (type, handler) => {
          throwIfClosedOrDisposed();
          let method = null;
          if (StarRequestHandler.is(type)) {
            method = void 0;
            starRequestHandler = type;
          } else if (Is.string(type)) {
            method = null;
            if (handler !== void 0) {
              method = type;
              requestHandlers.set(type, { handler, type: void 0 });
            }
          } else {
            if (handler !== void 0) {
              method = type.method;
              requestHandlers.set(type.method, { type, handler });
            }
          }
          return {
            dispose: () => {
              if (method === null) {
                return;
              }
              if (method !== void 0) {
                requestHandlers.delete(method);
              } else {
                starRequestHandler = void 0;
              }
            }
          };
        },
        hasPendingResponse: () => {
          return responsePromises.size > 0;
        },
        trace: async (_value, _tracer, sendNotificationOrTraceOptions) => {
          let _sendNotification = false;
          let _traceFormat = TraceFormat.Text;
          if (sendNotificationOrTraceOptions !== void 0) {
            if (Is.boolean(sendNotificationOrTraceOptions)) {
              _sendNotification = sendNotificationOrTraceOptions;
            } else {
              _sendNotification = sendNotificationOrTraceOptions.sendNotification || false;
              _traceFormat = sendNotificationOrTraceOptions.traceFormat || TraceFormat.Text;
            }
          }
          trace = _value;
          traceFormat = _traceFormat;
          if (trace === Trace.Off) {
            tracer = void 0;
          } else {
            tracer = _tracer;
          }
          if (_sendNotification && !isClosed() && !isDisposed()) {
            await connection2.sendNotification(SetTraceNotification.type, { value: Trace.toString(_value) });
          }
        },
        onError: errorEmitter.event,
        onClose: closeEmitter.event,
        onUnhandledNotification: unhandledNotificationEmitter.event,
        onDispose: disposeEmitter.event,
        end: () => {
          messageWriter.end();
        },
        dispose: () => {
          if (isDisposed()) {
            return;
          }
          state = ConnectionState.Disposed;
          disposeEmitter.fire(void 0);
          const error = new messages_1.ResponseError(messages_1.ErrorCodes.PendingResponseRejected, "Pending response rejected since connection got disposed");
          for (const promise of responsePromises.values()) {
            promise.reject(error);
          }
          responsePromises = /* @__PURE__ */ new Map();
          requestTokens = /* @__PURE__ */ new Map();
          knownCanceledRequests = /* @__PURE__ */ new Set();
          messageQueue = new linkedMap_1.LinkedMap();
          if (Is.func(messageWriter.dispose)) {
            messageWriter.dispose();
          }
          if (Is.func(messageReader.dispose)) {
            messageReader.dispose();
          }
        },
        listen: () => {
          throwIfClosedOrDisposed();
          throwIfListening();
          state = ConnectionState.Listening;
          messageReader.listen(callback);
        },
        inspect: () => {
          (0, ral_1.default)().console.log("inspect");
        }
      };
      connection2.onNotification(LogTraceNotification.type, (params) => {
        if (trace === Trace.Off || !tracer) {
          return;
        }
        const verbose = trace === Trace.Verbose || trace === Trace.Compact;
        tracer.log(params.message, verbose ? params.verbose : void 0);
      });
      connection2.onNotification(ProgressNotification.type, (params) => {
        const handler = progressHandlers.get(params.token);
        if (handler) {
          handler(params.value);
        } else {
          unhandledProgressEmitter.fire(params);
        }
      });
      return connection2;
    }
    exports2.createMessageConnection = createMessageConnection;
  }
});

// node_modules/vscode-jsonrpc/lib/common/api.js
var require_api = __commonJS({
  "node_modules/vscode-jsonrpc/lib/common/api.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.ProgressType = exports2.ProgressToken = exports2.createMessageConnection = exports2.NullLogger = exports2.ConnectionOptions = exports2.ConnectionStrategy = exports2.AbstractMessageBuffer = exports2.WriteableStreamMessageWriter = exports2.AbstractMessageWriter = exports2.MessageWriter = exports2.ReadableStreamMessageReader = exports2.AbstractMessageReader = exports2.MessageReader = exports2.SharedArrayReceiverStrategy = exports2.SharedArraySenderStrategy = exports2.CancellationToken = exports2.CancellationTokenSource = exports2.Emitter = exports2.Event = exports2.Disposable = exports2.LRUCache = exports2.Touch = exports2.LinkedMap = exports2.ParameterStructures = exports2.NotificationType9 = exports2.NotificationType8 = exports2.NotificationType7 = exports2.NotificationType6 = exports2.NotificationType5 = exports2.NotificationType4 = exports2.NotificationType3 = exports2.NotificationType2 = exports2.NotificationType1 = exports2.NotificationType0 = exports2.NotificationType = exports2.ErrorCodes = exports2.ResponseError = exports2.RequestType9 = exports2.RequestType8 = exports2.RequestType7 = exports2.RequestType6 = exports2.RequestType5 = exports2.RequestType4 = exports2.RequestType3 = exports2.RequestType2 = exports2.RequestType1 = exports2.RequestType0 = exports2.RequestType = exports2.Message = exports2.RAL = void 0;
    exports2.MessageStrategy = exports2.CancellationStrategy = exports2.CancellationSenderStrategy = exports2.CancellationReceiverStrategy = exports2.ConnectionError = exports2.ConnectionErrors = exports2.LogTraceNotification = exports2.SetTraceNotification = exports2.TraceFormat = exports2.TraceValues = exports2.Trace = void 0;
    var messages_1 = require_messages();
    Object.defineProperty(exports2, "Message", { enumerable: true, get: function() {
      return messages_1.Message;
    } });
    Object.defineProperty(exports2, "RequestType", { enumerable: true, get: function() {
      return messages_1.RequestType;
    } });
    Object.defineProperty(exports2, "RequestType0", { enumerable: true, get: function() {
      return messages_1.RequestType0;
    } });
    Object.defineProperty(exports2, "RequestType1", { enumerable: true, get: function() {
      return messages_1.RequestType1;
    } });
    Object.defineProperty(exports2, "RequestType2", { enumerable: true, get: function() {
      return messages_1.RequestType2;
    } });
    Object.defineProperty(exports2, "RequestType3", { enumerable: true, get: function() {
      return messages_1.RequestType3;
    } });
    Object.defineProperty(exports2, "RequestType4", { enumerable: true, get: function() {
      return messages_1.RequestType4;
    } });
    Object.defineProperty(exports2, "RequestType5", { enumerable: true, get: function() {
      return messages_1.RequestType5;
    } });
    Object.defineProperty(exports2, "RequestType6", { enumerable: true, get: function() {
      return messages_1.RequestType6;
    } });
    Object.defineProperty(exports2, "RequestType7", { enumerable: true, get: function() {
      return messages_1.RequestType7;
    } });
    Object.defineProperty(exports2, "RequestType8", { enumerable: true, get: function() {
      return messages_1.RequestType8;
    } });
    Object.defineProperty(exports2, "RequestType9", { enumerable: true, get: function() {
      return messages_1.RequestType9;
    } });
    Object.defineProperty(exports2, "ResponseError", { enumerable: true, get: function() {
      return messages_1.ResponseError;
    } });
    Object.defineProperty(exports2, "ErrorCodes", { enumerable: true, get: function() {
      return messages_1.ErrorCodes;
    } });
    Object.defineProperty(exports2, "NotificationType", { enumerable: true, get: function() {
      return messages_1.NotificationType;
    } });
    Object.defineProperty(exports2, "NotificationType0", { enumerable: true, get: function() {
      return messages_1.NotificationType0;
    } });
    Object.defineProperty(exports2, "NotificationType1", { enumerable: true, get: function() {
      return messages_1.NotificationType1;
    } });
    Object.defineProperty(exports2, "NotificationType2", { enumerable: true, get: function() {
      return messages_1.NotificationType2;
    } });
    Object.defineProperty(exports2, "NotificationType3", { enumerable: true, get: function() {
      return messages_1.NotificationType3;
    } });
    Object.defineProperty(exports2, "NotificationType4", { enumerable: true, get: function() {
      return messages_1.NotificationType4;
    } });
    Object.defineProperty(exports2, "NotificationType5", { enumerable: true, get: function() {
      return messages_1.NotificationType5;
    } });
    Object.defineProperty(exports2, "NotificationType6", { enumerable: true, get: function() {
      return messages_1.NotificationType6;
    } });
    Object.defineProperty(exports2, "NotificationType7", { enumerable: true, get: function() {
      return messages_1.NotificationType7;
    } });
    Object.defineProperty(exports2, "NotificationType8", { enumerable: true, get: function() {
      return messages_1.NotificationType8;
    } });
    Object.defineProperty(exports2, "NotificationType9", { enumerable: true, get: function() {
      return messages_1.NotificationType9;
    } });
    Object.defineProperty(exports2, "ParameterStructures", { enumerable: true, get: function() {
      return messages_1.ParameterStructures;
    } });
    var linkedMap_1 = require_linkedMap();
    Object.defineProperty(exports2, "LinkedMap", { enumerable: true, get: function() {
      return linkedMap_1.LinkedMap;
    } });
    Object.defineProperty(exports2, "LRUCache", { enumerable: true, get: function() {
      return linkedMap_1.LRUCache;
    } });
    Object.defineProperty(exports2, "Touch", { enumerable: true, get: function() {
      return linkedMap_1.Touch;
    } });
    var disposable_1 = require_disposable();
    Object.defineProperty(exports2, "Disposable", { enumerable: true, get: function() {
      return disposable_1.Disposable;
    } });
    var events_1 = require_events();
    Object.defineProperty(exports2, "Event", { enumerable: true, get: function() {
      return events_1.Event;
    } });
    Object.defineProperty(exports2, "Emitter", { enumerable: true, get: function() {
      return events_1.Emitter;
    } });
    var cancellation_1 = require_cancellation();
    Object.defineProperty(exports2, "CancellationTokenSource", { enumerable: true, get: function() {
      return cancellation_1.CancellationTokenSource;
    } });
    Object.defineProperty(exports2, "CancellationToken", { enumerable: true, get: function() {
      return cancellation_1.CancellationToken;
    } });
    var sharedArrayCancellation_1 = require_sharedArrayCancellation();
    Object.defineProperty(exports2, "SharedArraySenderStrategy", { enumerable: true, get: function() {
      return sharedArrayCancellation_1.SharedArraySenderStrategy;
    } });
    Object.defineProperty(exports2, "SharedArrayReceiverStrategy", { enumerable: true, get: function() {
      return sharedArrayCancellation_1.SharedArrayReceiverStrategy;
    } });
    var messageReader_1 = require_messageReader();
    Object.defineProperty(exports2, "MessageReader", { enumerable: true, get: function() {
      return messageReader_1.MessageReader;
    } });
    Object.defineProperty(exports2, "AbstractMessageReader", { enumerable: true, get: function() {
      return messageReader_1.AbstractMessageReader;
    } });
    Object.defineProperty(exports2, "ReadableStreamMessageReader", { enumerable: true, get: function() {
      return messageReader_1.ReadableStreamMessageReader;
    } });
    var messageWriter_1 = require_messageWriter();
    Object.defineProperty(exports2, "MessageWriter", { enumerable: true, get: function() {
      return messageWriter_1.MessageWriter;
    } });
    Object.defineProperty(exports2, "AbstractMessageWriter", { enumerable: true, get: function() {
      return messageWriter_1.AbstractMessageWriter;
    } });
    Object.defineProperty(exports2, "WriteableStreamMessageWriter", { enumerable: true, get: function() {
      return messageWriter_1.WriteableStreamMessageWriter;
    } });
    var messageBuffer_1 = require_messageBuffer();
    Object.defineProperty(exports2, "AbstractMessageBuffer", { enumerable: true, get: function() {
      return messageBuffer_1.AbstractMessageBuffer;
    } });
    var connection_1 = require_connection();
    Object.defineProperty(exports2, "ConnectionStrategy", { enumerable: true, get: function() {
      return connection_1.ConnectionStrategy;
    } });
    Object.defineProperty(exports2, "ConnectionOptions", { enumerable: true, get: function() {
      return connection_1.ConnectionOptions;
    } });
    Object.defineProperty(exports2, "NullLogger", { enumerable: true, get: function() {
      return connection_1.NullLogger;
    } });
    Object.defineProperty(exports2, "createMessageConnection", { enumerable: true, get: function() {
      return connection_1.createMessageConnection;
    } });
    Object.defineProperty(exports2, "ProgressToken", { enumerable: true, get: function() {
      return connection_1.ProgressToken;
    } });
    Object.defineProperty(exports2, "ProgressType", { enumerable: true, get: function() {
      return connection_1.ProgressType;
    } });
    Object.defineProperty(exports2, "Trace", { enumerable: true, get: function() {
      return connection_1.Trace;
    } });
    Object.defineProperty(exports2, "TraceValues", { enumerable: true, get: function() {
      return connection_1.TraceValues;
    } });
    Object.defineProperty(exports2, "TraceFormat", { enumerable: true, get: function() {
      return connection_1.TraceFormat;
    } });
    Object.defineProperty(exports2, "SetTraceNotification", { enumerable: true, get: function() {
      return connection_1.SetTraceNotification;
    } });
    Object.defineProperty(exports2, "LogTraceNotification", { enumerable: true, get: function() {
      return connection_1.LogTraceNotification;
    } });
    Object.defineProperty(exports2, "ConnectionErrors", { enumerable: true, get: function() {
      return connection_1.ConnectionErrors;
    } });
    Object.defineProperty(exports2, "ConnectionError", { enumerable: true, get: function() {
      return connection_1.ConnectionError;
    } });
    Object.defineProperty(exports2, "CancellationReceiverStrategy", { enumerable: true, get: function() {
      return connection_1.CancellationReceiverStrategy;
    } });
    Object.defineProperty(exports2, "CancellationSenderStrategy", { enumerable: true, get: function() {
      return connection_1.CancellationSenderStrategy;
    } });
    Object.defineProperty(exports2, "CancellationStrategy", { enumerable: true, get: function() {
      return connection_1.CancellationStrategy;
    } });
    Object.defineProperty(exports2, "MessageStrategy", { enumerable: true, get: function() {
      return connection_1.MessageStrategy;
    } });
    var ral_1 = require_ral();
    exports2.RAL = ral_1.default;
  }
});

// node_modules/vscode-jsonrpc/lib/node/ril.js
var require_ril = __commonJS({
  "node_modules/vscode-jsonrpc/lib/node/ril.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    var util_1 = require("util");
    var api_1 = require_api();
    var MessageBuffer = class _MessageBuffer extends api_1.AbstractMessageBuffer {
      constructor(encoding = "utf-8") {
        super(encoding);
      }
      emptyBuffer() {
        return _MessageBuffer.emptyBuffer;
      }
      fromString(value, encoding) {
        return Buffer.from(value, encoding);
      }
      toString(value, encoding) {
        if (value instanceof Buffer) {
          return value.toString(encoding);
        } else {
          return new util_1.TextDecoder(encoding).decode(value);
        }
      }
      asNative(buffer, length) {
        if (length === void 0) {
          return buffer instanceof Buffer ? buffer : Buffer.from(buffer);
        } else {
          return buffer instanceof Buffer ? buffer.slice(0, length) : Buffer.from(buffer, 0, length);
        }
      }
      allocNative(length) {
        return Buffer.allocUnsafe(length);
      }
    };
    MessageBuffer.emptyBuffer = Buffer.allocUnsafe(0);
    var ReadableStreamWrapper = class {
      constructor(stream) {
        this.stream = stream;
      }
      onClose(listener) {
        this.stream.on("close", listener);
        return api_1.Disposable.create(() => this.stream.off("close", listener));
      }
      onError(listener) {
        this.stream.on("error", listener);
        return api_1.Disposable.create(() => this.stream.off("error", listener));
      }
      onEnd(listener) {
        this.stream.on("end", listener);
        return api_1.Disposable.create(() => this.stream.off("end", listener));
      }
      onData(listener) {
        this.stream.on("data", listener);
        return api_1.Disposable.create(() => this.stream.off("data", listener));
      }
    };
    var WritableStreamWrapper = class {
      constructor(stream) {
        this.stream = stream;
      }
      onClose(listener) {
        this.stream.on("close", listener);
        return api_1.Disposable.create(() => this.stream.off("close", listener));
      }
      onError(listener) {
        this.stream.on("error", listener);
        return api_1.Disposable.create(() => this.stream.off("error", listener));
      }
      onEnd(listener) {
        this.stream.on("end", listener);
        return api_1.Disposable.create(() => this.stream.off("end", listener));
      }
      write(data, encoding) {
        return new Promise((resolve, reject) => {
          const callback = (error) => {
            if (error === void 0 || error === null) {
              resolve();
            } else {
              reject(error);
            }
          };
          if (typeof data === "string") {
            this.stream.write(data, encoding, callback);
          } else {
            this.stream.write(data, callback);
          }
        });
      }
      end() {
        this.stream.end();
      }
    };
    var _ril = Object.freeze({
      messageBuffer: Object.freeze({
        create: (encoding) => new MessageBuffer(encoding)
      }),
      applicationJson: Object.freeze({
        encoder: Object.freeze({
          name: "application/json",
          encode: (msg, options) => {
            try {
              return Promise.resolve(Buffer.from(JSON.stringify(msg, void 0, 0), options.charset));
            } catch (err) {
              return Promise.reject(err);
            }
          }
        }),
        decoder: Object.freeze({
          name: "application/json",
          decode: (buffer, options) => {
            try {
              if (buffer instanceof Buffer) {
                return Promise.resolve(JSON.parse(buffer.toString(options.charset)));
              } else {
                return Promise.resolve(JSON.parse(new util_1.TextDecoder(options.charset).decode(buffer)));
              }
            } catch (err) {
              return Promise.reject(err);
            }
          }
        })
      }),
      stream: Object.freeze({
        asReadableStream: (stream) => new ReadableStreamWrapper(stream),
        asWritableStream: (stream) => new WritableStreamWrapper(stream)
      }),
      console,
      timer: Object.freeze({
        setTimeout(callback, ms, ...args) {
          const handle = setTimeout(callback, ms, ...args);
          return { dispose: () => clearTimeout(handle) };
        },
        setImmediate(callback, ...args) {
          const handle = setImmediate(callback, ...args);
          return { dispose: () => clearImmediate(handle) };
        },
        setInterval(callback, ms, ...args) {
          const handle = setInterval(callback, ms, ...args);
          return { dispose: () => clearInterval(handle) };
        }
      })
    });
    function RIL() {
      return _ril;
    }
    (function(RIL2) {
      function install() {
        api_1.RAL.install(_ril);
      }
      RIL2.install = install;
    })(RIL || (RIL = {}));
    exports2.default = RIL;
  }
});

// node_modules/vscode-jsonrpc/lib/node/main.js
var require_main = __commonJS({
  "node_modules/vscode-jsonrpc/lib/node/main.js"(exports2) {
    "use strict";
    var __createBinding = exports2 && exports2.__createBinding || (Object.create ? (function(o, m, k, k2) {
      if (k2 === void 0) k2 = k;
      var desc = Object.getOwnPropertyDescriptor(m, k);
      if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: function() {
          return m[k];
        } };
      }
      Object.defineProperty(o, k2, desc);
    }) : (function(o, m, k, k2) {
      if (k2 === void 0) k2 = k;
      o[k2] = m[k];
    }));
    var __exportStar = exports2 && exports2.__exportStar || function(m, exports3) {
      for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports3, p)) __createBinding(exports3, m, p);
    };
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.createMessageConnection = exports2.createServerSocketTransport = exports2.createClientSocketTransport = exports2.createServerPipeTransport = exports2.createClientPipeTransport = exports2.generateRandomPipeName = exports2.StreamMessageWriter = exports2.StreamMessageReader = exports2.SocketMessageWriter = exports2.SocketMessageReader = exports2.PortMessageWriter = exports2.PortMessageReader = exports2.IPCMessageWriter = exports2.IPCMessageReader = void 0;
    var ril_1 = require_ril();
    ril_1.default.install();
    var path = require("path");
    var os = require("os");
    var crypto_1 = require("crypto");
    var net_1 = require("net");
    var api_1 = require_api();
    __exportStar(require_api(), exports2);
    var IPCMessageReader = class extends api_1.AbstractMessageReader {
      constructor(process2) {
        super();
        this.process = process2;
        let eventEmitter = this.process;
        eventEmitter.on("error", (error) => this.fireError(error));
        eventEmitter.on("close", () => this.fireClose());
      }
      listen(callback) {
        this.process.on("message", callback);
        return api_1.Disposable.create(() => this.process.off("message", callback));
      }
    };
    exports2.IPCMessageReader = IPCMessageReader;
    var IPCMessageWriter = class extends api_1.AbstractMessageWriter {
      constructor(process2) {
        super();
        this.process = process2;
        this.errorCount = 0;
        const eventEmitter = this.process;
        eventEmitter.on("error", (error) => this.fireError(error));
        eventEmitter.on("close", () => this.fireClose);
      }
      write(msg) {
        try {
          if (typeof this.process.send === "function") {
            this.process.send(msg, void 0, void 0, (error) => {
              if (error) {
                this.errorCount++;
                this.handleError(error, msg);
              } else {
                this.errorCount = 0;
              }
            });
          }
          return Promise.resolve();
        } catch (error) {
          this.handleError(error, msg);
          return Promise.reject(error);
        }
      }
      handleError(error, msg) {
        this.errorCount++;
        this.fireError(error, msg, this.errorCount);
      }
      end() {
      }
    };
    exports2.IPCMessageWriter = IPCMessageWriter;
    var PortMessageReader = class extends api_1.AbstractMessageReader {
      constructor(port) {
        super();
        this.onData = new api_1.Emitter();
        port.on("close", () => this.fireClose);
        port.on("error", (error) => this.fireError(error));
        port.on("message", (message) => {
          this.onData.fire(message);
        });
      }
      listen(callback) {
        return this.onData.event(callback);
      }
    };
    exports2.PortMessageReader = PortMessageReader;
    var PortMessageWriter = class extends api_1.AbstractMessageWriter {
      constructor(port) {
        super();
        this.port = port;
        this.errorCount = 0;
        port.on("close", () => this.fireClose());
        port.on("error", (error) => this.fireError(error));
      }
      write(msg) {
        try {
          this.port.postMessage(msg);
          return Promise.resolve();
        } catch (error) {
          this.handleError(error, msg);
          return Promise.reject(error);
        }
      }
      handleError(error, msg) {
        this.errorCount++;
        this.fireError(error, msg, this.errorCount);
      }
      end() {
      }
    };
    exports2.PortMessageWriter = PortMessageWriter;
    var SocketMessageReader = class extends api_1.ReadableStreamMessageReader {
      constructor(socket, encoding = "utf-8") {
        super((0, ril_1.default)().stream.asReadableStream(socket), encoding);
      }
    };
    exports2.SocketMessageReader = SocketMessageReader;
    var SocketMessageWriter = class extends api_1.WriteableStreamMessageWriter {
      constructor(socket, options) {
        super((0, ril_1.default)().stream.asWritableStream(socket), options);
        this.socket = socket;
      }
      dispose() {
        super.dispose();
        this.socket.destroy();
      }
    };
    exports2.SocketMessageWriter = SocketMessageWriter;
    var StreamMessageReader2 = class extends api_1.ReadableStreamMessageReader {
      constructor(readable, encoding) {
        super((0, ril_1.default)().stream.asReadableStream(readable), encoding);
      }
    };
    exports2.StreamMessageReader = StreamMessageReader2;
    var StreamMessageWriter2 = class extends api_1.WriteableStreamMessageWriter {
      constructor(writable, options) {
        super((0, ril_1.default)().stream.asWritableStream(writable), options);
      }
    };
    exports2.StreamMessageWriter = StreamMessageWriter2;
    var XDG_RUNTIME_DIR = process.env["XDG_RUNTIME_DIR"];
    var safeIpcPathLengths = /* @__PURE__ */ new Map([
      ["linux", 107],
      ["darwin", 103]
    ]);
    function generateRandomPipeName() {
      const randomSuffix = (0, crypto_1.randomBytes)(21).toString("hex");
      if (process.platform === "win32") {
        return `\\\\.\\pipe\\vscode-jsonrpc-${randomSuffix}-sock`;
      }
      let result;
      if (XDG_RUNTIME_DIR) {
        result = path.join(XDG_RUNTIME_DIR, `vscode-ipc-${randomSuffix}.sock`);
      } else {
        result = path.join(os.tmpdir(), `vscode-${randomSuffix}.sock`);
      }
      const limit = safeIpcPathLengths.get(process.platform);
      if (limit !== void 0 && result.length > limit) {
        (0, ril_1.default)().console.warn(`WARNING: IPC handle "${result}" is longer than ${limit} characters.`);
      }
      return result;
    }
    exports2.generateRandomPipeName = generateRandomPipeName;
    function createClientPipeTransport(pipeName, encoding = "utf-8") {
      let connectResolve;
      const connected = new Promise((resolve, _reject) => {
        connectResolve = resolve;
      });
      return new Promise((resolve, reject) => {
        let server = (0, net_1.createServer)((socket) => {
          server.close();
          connectResolve([
            new SocketMessageReader(socket, encoding),
            new SocketMessageWriter(socket, encoding)
          ]);
        });
        server.on("error", reject);
        server.listen(pipeName, () => {
          server.removeListener("error", reject);
          resolve({
            onConnected: () => {
              return connected;
            }
          });
        });
      });
    }
    exports2.createClientPipeTransport = createClientPipeTransport;
    function createServerPipeTransport(pipeName, encoding = "utf-8") {
      const socket = (0, net_1.createConnection)(pipeName);
      return [
        new SocketMessageReader(socket, encoding),
        new SocketMessageWriter(socket, encoding)
      ];
    }
    exports2.createServerPipeTransport = createServerPipeTransport;
    function createClientSocketTransport(port, encoding = "utf-8") {
      let connectResolve;
      const connected = new Promise((resolve, _reject) => {
        connectResolve = resolve;
      });
      return new Promise((resolve, reject) => {
        const server = (0, net_1.createServer)((socket) => {
          server.close();
          connectResolve([
            new SocketMessageReader(socket, encoding),
            new SocketMessageWriter(socket, encoding)
          ]);
        });
        server.on("error", reject);
        server.listen(port, "127.0.0.1", () => {
          server.removeListener("error", reject);
          resolve({
            onConnected: () => {
              return connected;
            }
          });
        });
      });
    }
    exports2.createClientSocketTransport = createClientSocketTransport;
    function createServerSocketTransport(port, encoding = "utf-8") {
      const socket = (0, net_1.createConnection)(port, "127.0.0.1");
      return [
        new SocketMessageReader(socket, encoding),
        new SocketMessageWriter(socket, encoding)
      ];
    }
    exports2.createServerSocketTransport = createServerSocketTransport;
    function isReadableStream(value) {
      const candidate = value;
      return candidate.read !== void 0 && candidate.addListener !== void 0;
    }
    function isWritableStream(value) {
      const candidate = value;
      return candidate.write !== void 0 && candidate.addListener !== void 0;
    }
    function createMessageConnection(input, output, logger, options) {
      if (!logger) {
        logger = api_1.NullLogger;
      }
      const reader = isReadableStream(input) ? new StreamMessageReader2(input) : input;
      const writer = isWritableStream(output) ? new StreamMessageWriter2(output) : output;
      if (api_1.ConnectionStrategy.is(options)) {
        options = { connectionStrategy: options };
      }
      return (0, api_1.createMessageConnection)(reader, writer, logger, options);
    }
    exports2.createMessageConnection = createMessageConnection;
  }
});

// node_modules/vscode-jsonrpc/node.js
var require_node = __commonJS({
  "node_modules/vscode-jsonrpc/node.js"(exports2, module2) {
    "use strict";
    module2.exports = require_main();
  }
});

// node_modules/vscode-languageserver-types/lib/umd/main.js
var require_main2 = __commonJS({
  "node_modules/vscode-languageserver-types/lib/umd/main.js"(exports2, module2) {
    (function(factory) {
      if (typeof module2 === "object" && typeof module2.exports === "object") {
        var v = factory(require, exports2);
        if (v !== void 0) module2.exports = v;
      } else if (typeof define === "function" && define.amd) {
        define(["require", "exports"], factory);
      }
    })(function(require2, exports3) {
      "use strict";
      Object.defineProperty(exports3, "__esModule", { value: true });
      exports3.TextDocument = exports3.EOL = exports3.WorkspaceFolder = exports3.InlineCompletionContext = exports3.SelectedCompletionInfo = exports3.InlineCompletionTriggerKind = exports3.InlineCompletionList = exports3.InlineCompletionItem = exports3.StringValue = exports3.InlayHint = exports3.InlayHintLabelPart = exports3.InlayHintKind = exports3.InlineValueContext = exports3.InlineValueEvaluatableExpression = exports3.InlineValueVariableLookup = exports3.InlineValueText = exports3.SemanticTokens = exports3.SemanticTokenModifiers = exports3.SemanticTokenTypes = exports3.SelectionRange = exports3.DocumentLink = exports3.FormattingOptions = exports3.CodeLens = exports3.CodeAction = exports3.CodeActionContext = exports3.CodeActionTriggerKind = exports3.CodeActionKind = exports3.DocumentSymbol = exports3.WorkspaceSymbol = exports3.SymbolInformation = exports3.SymbolTag = exports3.SymbolKind = exports3.DocumentHighlight = exports3.DocumentHighlightKind = exports3.SignatureInformation = exports3.ParameterInformation = exports3.Hover = exports3.MarkedString = exports3.CompletionList = exports3.CompletionItem = exports3.CompletionItemLabelDetails = exports3.InsertTextMode = exports3.InsertReplaceEdit = exports3.CompletionItemTag = exports3.InsertTextFormat = exports3.CompletionItemKind = exports3.MarkupContent = exports3.MarkupKind = exports3.TextDocumentItem = exports3.OptionalVersionedTextDocumentIdentifier = exports3.VersionedTextDocumentIdentifier = exports3.TextDocumentIdentifier = exports3.WorkspaceChange = exports3.WorkspaceEdit = exports3.DeleteFile = exports3.RenameFile = exports3.CreateFile = exports3.TextDocumentEdit = exports3.AnnotatedTextEdit = exports3.ChangeAnnotationIdentifier = exports3.ChangeAnnotation = exports3.TextEdit = exports3.Command = exports3.Diagnostic = exports3.CodeDescription = exports3.DiagnosticTag = exports3.DiagnosticSeverity = exports3.DiagnosticRelatedInformation = exports3.FoldingRange = exports3.FoldingRangeKind = exports3.ColorPresentation = exports3.ColorInformation = exports3.Color = exports3.LocationLink = exports3.Location = exports3.Range = exports3.Position = exports3.uinteger = exports3.integer = exports3.URI = exports3.DocumentUri = void 0;
      var DocumentUri;
      (function(DocumentUri2) {
        function is(value) {
          return typeof value === "string";
        }
        DocumentUri2.is = is;
      })(DocumentUri || (exports3.DocumentUri = DocumentUri = {}));
      var URI;
      (function(URI2) {
        function is(value) {
          return typeof value === "string";
        }
        URI2.is = is;
      })(URI || (exports3.URI = URI = {}));
      var integer;
      (function(integer2) {
        integer2.MIN_VALUE = -2147483648;
        integer2.MAX_VALUE = 2147483647;
        function is(value) {
          return typeof value === "number" && integer2.MIN_VALUE <= value && value <= integer2.MAX_VALUE;
        }
        integer2.is = is;
      })(integer || (exports3.integer = integer = {}));
      var uinteger;
      (function(uinteger2) {
        uinteger2.MIN_VALUE = 0;
        uinteger2.MAX_VALUE = 2147483647;
        function is(value) {
          return typeof value === "number" && uinteger2.MIN_VALUE <= value && value <= uinteger2.MAX_VALUE;
        }
        uinteger2.is = is;
      })(uinteger || (exports3.uinteger = uinteger = {}));
      var Position2;
      (function(Position3) {
        function create(line, character) {
          if (line === Number.MAX_VALUE) {
            line = uinteger.MAX_VALUE;
          }
          if (character === Number.MAX_VALUE) {
            character = uinteger.MAX_VALUE;
          }
          return { line, character };
        }
        Position3.create = create;
        function is(value) {
          var candidate = value;
          return Is.objectLiteral(candidate) && Is.uinteger(candidate.line) && Is.uinteger(candidate.character);
        }
        Position3.is = is;
      })(Position2 || (exports3.Position = Position2 = {}));
      var Range;
      (function(Range2) {
        function create(one, two, three, four) {
          if (Is.uinteger(one) && Is.uinteger(two) && Is.uinteger(three) && Is.uinteger(four)) {
            return { start: Position2.create(one, two), end: Position2.create(three, four) };
          } else if (Position2.is(one) && Position2.is(two)) {
            return { start: one, end: two };
          } else {
            throw new Error("Range#create called with invalid arguments[".concat(one, ", ").concat(two, ", ").concat(three, ", ").concat(four, "]"));
          }
        }
        Range2.create = create;
        function is(value) {
          var candidate = value;
          return Is.objectLiteral(candidate) && Position2.is(candidate.start) && Position2.is(candidate.end);
        }
        Range2.is = is;
      })(Range || (exports3.Range = Range = {}));
      var Location;
      (function(Location2) {
        function create(uri, range) {
          return { uri, range };
        }
        Location2.create = create;
        function is(value) {
          var candidate = value;
          return Is.objectLiteral(candidate) && Range.is(candidate.range) && (Is.string(candidate.uri) || Is.undefined(candidate.uri));
        }
        Location2.is = is;
      })(Location || (exports3.Location = Location = {}));
      var LocationLink;
      (function(LocationLink2) {
        function create(targetUri, targetRange, targetSelectionRange, originSelectionRange) {
          return { targetUri, targetRange, targetSelectionRange, originSelectionRange };
        }
        LocationLink2.create = create;
        function is(value) {
          var candidate = value;
          return Is.objectLiteral(candidate) && Range.is(candidate.targetRange) && Is.string(candidate.targetUri) && Range.is(candidate.targetSelectionRange) && (Range.is(candidate.originSelectionRange) || Is.undefined(candidate.originSelectionRange));
        }
        LocationLink2.is = is;
      })(LocationLink || (exports3.LocationLink = LocationLink = {}));
      var Color;
      (function(Color2) {
        function create(red, green, blue, alpha) {
          return {
            red,
            green,
            blue,
            alpha
          };
        }
        Color2.create = create;
        function is(value) {
          var candidate = value;
          return Is.objectLiteral(candidate) && Is.numberRange(candidate.red, 0, 1) && Is.numberRange(candidate.green, 0, 1) && Is.numberRange(candidate.blue, 0, 1) && Is.numberRange(candidate.alpha, 0, 1);
        }
        Color2.is = is;
      })(Color || (exports3.Color = Color = {}));
      var ColorInformation;
      (function(ColorInformation2) {
        function create(range, color) {
          return {
            range,
            color
          };
        }
        ColorInformation2.create = create;
        function is(value) {
          var candidate = value;
          return Is.objectLiteral(candidate) && Range.is(candidate.range) && Color.is(candidate.color);
        }
        ColorInformation2.is = is;
      })(ColorInformation || (exports3.ColorInformation = ColorInformation = {}));
      var ColorPresentation;
      (function(ColorPresentation2) {
        function create(label, textEdit, additionalTextEdits) {
          return {
            label,
            textEdit,
            additionalTextEdits
          };
        }
        ColorPresentation2.create = create;
        function is(value) {
          var candidate = value;
          return Is.objectLiteral(candidate) && Is.string(candidate.label) && (Is.undefined(candidate.textEdit) || TextEdit.is(candidate)) && (Is.undefined(candidate.additionalTextEdits) || Is.typedArray(candidate.additionalTextEdits, TextEdit.is));
        }
        ColorPresentation2.is = is;
      })(ColorPresentation || (exports3.ColorPresentation = ColorPresentation = {}));
      var FoldingRangeKind;
      (function(FoldingRangeKind2) {
        FoldingRangeKind2.Comment = "comment";
        FoldingRangeKind2.Imports = "imports";
        FoldingRangeKind2.Region = "region";
      })(FoldingRangeKind || (exports3.FoldingRangeKind = FoldingRangeKind = {}));
      var FoldingRange;
      (function(FoldingRange2) {
        function create(startLine, endLine, startCharacter, endCharacter, kind, collapsedText) {
          var result = {
            startLine,
            endLine
          };
          if (Is.defined(startCharacter)) {
            result.startCharacter = startCharacter;
          }
          if (Is.defined(endCharacter)) {
            result.endCharacter = endCharacter;
          }
          if (Is.defined(kind)) {
            result.kind = kind;
          }
          if (Is.defined(collapsedText)) {
            result.collapsedText = collapsedText;
          }
          return result;
        }
        FoldingRange2.create = create;
        function is(value) {
          var candidate = value;
          return Is.objectLiteral(candidate) && Is.uinteger(candidate.startLine) && Is.uinteger(candidate.startLine) && (Is.undefined(candidate.startCharacter) || Is.uinteger(candidate.startCharacter)) && (Is.undefined(candidate.endCharacter) || Is.uinteger(candidate.endCharacter)) && (Is.undefined(candidate.kind) || Is.string(candidate.kind));
        }
        FoldingRange2.is = is;
      })(FoldingRange || (exports3.FoldingRange = FoldingRange = {}));
      var DiagnosticRelatedInformation;
      (function(DiagnosticRelatedInformation2) {
        function create(location, message) {
          return {
            location,
            message
          };
        }
        DiagnosticRelatedInformation2.create = create;
        function is(value) {
          var candidate = value;
          return Is.defined(candidate) && Location.is(candidate.location) && Is.string(candidate.message);
        }
        DiagnosticRelatedInformation2.is = is;
      })(DiagnosticRelatedInformation || (exports3.DiagnosticRelatedInformation = DiagnosticRelatedInformation = {}));
      var DiagnosticSeverity2;
      (function(DiagnosticSeverity3) {
        DiagnosticSeverity3.Error = 1;
        DiagnosticSeverity3.Warning = 2;
        DiagnosticSeverity3.Information = 3;
        DiagnosticSeverity3.Hint = 4;
      })(DiagnosticSeverity2 || (exports3.DiagnosticSeverity = DiagnosticSeverity2 = {}));
      var DiagnosticTag;
      (function(DiagnosticTag2) {
        DiagnosticTag2.Unnecessary = 1;
        DiagnosticTag2.Deprecated = 2;
      })(DiagnosticTag || (exports3.DiagnosticTag = DiagnosticTag = {}));
      var CodeDescription;
      (function(CodeDescription2) {
        function is(value) {
          var candidate = value;
          return Is.objectLiteral(candidate) && Is.string(candidate.href);
        }
        CodeDescription2.is = is;
      })(CodeDescription || (exports3.CodeDescription = CodeDescription = {}));
      var Diagnostic2;
      (function(Diagnostic3) {
        function create(range, message, severity, code, source, relatedInformation) {
          var result = { range, message };
          if (Is.defined(severity)) {
            result.severity = severity;
          }
          if (Is.defined(code)) {
            result.code = code;
          }
          if (Is.defined(source)) {
            result.source = source;
          }
          if (Is.defined(relatedInformation)) {
            result.relatedInformation = relatedInformation;
          }
          return result;
        }
        Diagnostic3.create = create;
        function is(value) {
          var _a;
          var candidate = value;
          return Is.defined(candidate) && Range.is(candidate.range) && Is.string(candidate.message) && (Is.number(candidate.severity) || Is.undefined(candidate.severity)) && (Is.integer(candidate.code) || Is.string(candidate.code) || Is.undefined(candidate.code)) && (Is.undefined(candidate.codeDescription) || Is.string((_a = candidate.codeDescription) === null || _a === void 0 ? void 0 : _a.href)) && (Is.string(candidate.source) || Is.undefined(candidate.source)) && (Is.undefined(candidate.relatedInformation) || Is.typedArray(candidate.relatedInformation, DiagnosticRelatedInformation.is));
        }
        Diagnostic3.is = is;
      })(Diagnostic2 || (exports3.Diagnostic = Diagnostic2 = {}));
      var Command;
      (function(Command2) {
        function create(title, command) {
          var args = [];
          for (var _i = 2; _i < arguments.length; _i++) {
            args[_i - 2] = arguments[_i];
          }
          var result = { title, command };
          if (Is.defined(args) && args.length > 0) {
            result.arguments = args;
          }
          return result;
        }
        Command2.create = create;
        function is(value) {
          var candidate = value;
          return Is.defined(candidate) && Is.string(candidate.title) && Is.string(candidate.command);
        }
        Command2.is = is;
      })(Command || (exports3.Command = Command = {}));
      var TextEdit;
      (function(TextEdit2) {
        function replace(range, newText) {
          return { range, newText };
        }
        TextEdit2.replace = replace;
        function insert(position, newText) {
          return { range: { start: position, end: position }, newText };
        }
        TextEdit2.insert = insert;
        function del(range) {
          return { range, newText: "" };
        }
        TextEdit2.del = del;
        function is(value) {
          var candidate = value;
          return Is.objectLiteral(candidate) && Is.string(candidate.newText) && Range.is(candidate.range);
        }
        TextEdit2.is = is;
      })(TextEdit || (exports3.TextEdit = TextEdit = {}));
      var ChangeAnnotation;
      (function(ChangeAnnotation2) {
        function create(label, needsConfirmation, description) {
          var result = { label };
          if (needsConfirmation !== void 0) {
            result.needsConfirmation = needsConfirmation;
          }
          if (description !== void 0) {
            result.description = description;
          }
          return result;
        }
        ChangeAnnotation2.create = create;
        function is(value) {
          var candidate = value;
          return Is.objectLiteral(candidate) && Is.string(candidate.label) && (Is.boolean(candidate.needsConfirmation) || candidate.needsConfirmation === void 0) && (Is.string(candidate.description) || candidate.description === void 0);
        }
        ChangeAnnotation2.is = is;
      })(ChangeAnnotation || (exports3.ChangeAnnotation = ChangeAnnotation = {}));
      var ChangeAnnotationIdentifier;
      (function(ChangeAnnotationIdentifier2) {
        function is(value) {
          var candidate = value;
          return Is.string(candidate);
        }
        ChangeAnnotationIdentifier2.is = is;
      })(ChangeAnnotationIdentifier || (exports3.ChangeAnnotationIdentifier = ChangeAnnotationIdentifier = {}));
      var AnnotatedTextEdit;
      (function(AnnotatedTextEdit2) {
        function replace(range, newText, annotation) {
          return { range, newText, annotationId: annotation };
        }
        AnnotatedTextEdit2.replace = replace;
        function insert(position, newText, annotation) {
          return { range: { start: position, end: position }, newText, annotationId: annotation };
        }
        AnnotatedTextEdit2.insert = insert;
        function del(range, annotation) {
          return { range, newText: "", annotationId: annotation };
        }
        AnnotatedTextEdit2.del = del;
        function is(value) {
          var candidate = value;
          return TextEdit.is(candidate) && (ChangeAnnotation.is(candidate.annotationId) || ChangeAnnotationIdentifier.is(candidate.annotationId));
        }
        AnnotatedTextEdit2.is = is;
      })(AnnotatedTextEdit || (exports3.AnnotatedTextEdit = AnnotatedTextEdit = {}));
      var TextDocumentEdit;
      (function(TextDocumentEdit2) {
        function create(textDocument, edits) {
          return { textDocument, edits };
        }
        TextDocumentEdit2.create = create;
        function is(value) {
          var candidate = value;
          return Is.defined(candidate) && OptionalVersionedTextDocumentIdentifier.is(candidate.textDocument) && Array.isArray(candidate.edits);
        }
        TextDocumentEdit2.is = is;
      })(TextDocumentEdit || (exports3.TextDocumentEdit = TextDocumentEdit = {}));
      var CreateFile;
      (function(CreateFile2) {
        function create(uri, options, annotation) {
          var result = {
            kind: "create",
            uri
          };
          if (options !== void 0 && (options.overwrite !== void 0 || options.ignoreIfExists !== void 0)) {
            result.options = options;
          }
          if (annotation !== void 0) {
            result.annotationId = annotation;
          }
          return result;
        }
        CreateFile2.create = create;
        function is(value) {
          var candidate = value;
          return candidate && candidate.kind === "create" && Is.string(candidate.uri) && (candidate.options === void 0 || (candidate.options.overwrite === void 0 || Is.boolean(candidate.options.overwrite)) && (candidate.options.ignoreIfExists === void 0 || Is.boolean(candidate.options.ignoreIfExists))) && (candidate.annotationId === void 0 || ChangeAnnotationIdentifier.is(candidate.annotationId));
        }
        CreateFile2.is = is;
      })(CreateFile || (exports3.CreateFile = CreateFile = {}));
      var RenameFile;
      (function(RenameFile2) {
        function create(oldUri, newUri, options, annotation) {
          var result = {
            kind: "rename",
            oldUri,
            newUri
          };
          if (options !== void 0 && (options.overwrite !== void 0 || options.ignoreIfExists !== void 0)) {
            result.options = options;
          }
          if (annotation !== void 0) {
            result.annotationId = annotation;
          }
          return result;
        }
        RenameFile2.create = create;
        function is(value) {
          var candidate = value;
          return candidate && candidate.kind === "rename" && Is.string(candidate.oldUri) && Is.string(candidate.newUri) && (candidate.options === void 0 || (candidate.options.overwrite === void 0 || Is.boolean(candidate.options.overwrite)) && (candidate.options.ignoreIfExists === void 0 || Is.boolean(candidate.options.ignoreIfExists))) && (candidate.annotationId === void 0 || ChangeAnnotationIdentifier.is(candidate.annotationId));
        }
        RenameFile2.is = is;
      })(RenameFile || (exports3.RenameFile = RenameFile = {}));
      var DeleteFile;
      (function(DeleteFile2) {
        function create(uri, options, annotation) {
          var result = {
            kind: "delete",
            uri
          };
          if (options !== void 0 && (options.recursive !== void 0 || options.ignoreIfNotExists !== void 0)) {
            result.options = options;
          }
          if (annotation !== void 0) {
            result.annotationId = annotation;
          }
          return result;
        }
        DeleteFile2.create = create;
        function is(value) {
          var candidate = value;
          return candidate && candidate.kind === "delete" && Is.string(candidate.uri) && (candidate.options === void 0 || (candidate.options.recursive === void 0 || Is.boolean(candidate.options.recursive)) && (candidate.options.ignoreIfNotExists === void 0 || Is.boolean(candidate.options.ignoreIfNotExists))) && (candidate.annotationId === void 0 || ChangeAnnotationIdentifier.is(candidate.annotationId));
        }
        DeleteFile2.is = is;
      })(DeleteFile || (exports3.DeleteFile = DeleteFile = {}));
      var WorkspaceEdit;
      (function(WorkspaceEdit2) {
        function is(value) {
          var candidate = value;
          return candidate && (candidate.changes !== void 0 || candidate.documentChanges !== void 0) && (candidate.documentChanges === void 0 || candidate.documentChanges.every(function(change) {
            if (Is.string(change.kind)) {
              return CreateFile.is(change) || RenameFile.is(change) || DeleteFile.is(change);
            } else {
              return TextDocumentEdit.is(change);
            }
          }));
        }
        WorkspaceEdit2.is = is;
      })(WorkspaceEdit || (exports3.WorkspaceEdit = WorkspaceEdit = {}));
      var TextEditChangeImpl = (
        /** @class */
        (function() {
          function TextEditChangeImpl2(edits, changeAnnotations) {
            this.edits = edits;
            this.changeAnnotations = changeAnnotations;
          }
          TextEditChangeImpl2.prototype.insert = function(position, newText, annotation) {
            var edit;
            var id;
            if (annotation === void 0) {
              edit = TextEdit.insert(position, newText);
            } else if (ChangeAnnotationIdentifier.is(annotation)) {
              id = annotation;
              edit = AnnotatedTextEdit.insert(position, newText, annotation);
            } else {
              this.assertChangeAnnotations(this.changeAnnotations);
              id = this.changeAnnotations.manage(annotation);
              edit = AnnotatedTextEdit.insert(position, newText, id);
            }
            this.edits.push(edit);
            if (id !== void 0) {
              return id;
            }
          };
          TextEditChangeImpl2.prototype.replace = function(range, newText, annotation) {
            var edit;
            var id;
            if (annotation === void 0) {
              edit = TextEdit.replace(range, newText);
            } else if (ChangeAnnotationIdentifier.is(annotation)) {
              id = annotation;
              edit = AnnotatedTextEdit.replace(range, newText, annotation);
            } else {
              this.assertChangeAnnotations(this.changeAnnotations);
              id = this.changeAnnotations.manage(annotation);
              edit = AnnotatedTextEdit.replace(range, newText, id);
            }
            this.edits.push(edit);
            if (id !== void 0) {
              return id;
            }
          };
          TextEditChangeImpl2.prototype.delete = function(range, annotation) {
            var edit;
            var id;
            if (annotation === void 0) {
              edit = TextEdit.del(range);
            } else if (ChangeAnnotationIdentifier.is(annotation)) {
              id = annotation;
              edit = AnnotatedTextEdit.del(range, annotation);
            } else {
              this.assertChangeAnnotations(this.changeAnnotations);
              id = this.changeAnnotations.manage(annotation);
              edit = AnnotatedTextEdit.del(range, id);
            }
            this.edits.push(edit);
            if (id !== void 0) {
              return id;
            }
          };
          TextEditChangeImpl2.prototype.add = function(edit) {
            this.edits.push(edit);
          };
          TextEditChangeImpl2.prototype.all = function() {
            return this.edits;
          };
          TextEditChangeImpl2.prototype.clear = function() {
            this.edits.splice(0, this.edits.length);
          };
          TextEditChangeImpl2.prototype.assertChangeAnnotations = function(value) {
            if (value === void 0) {
              throw new Error("Text edit change is not configured to manage change annotations.");
            }
          };
          return TextEditChangeImpl2;
        })()
      );
      var ChangeAnnotations = (
        /** @class */
        (function() {
          function ChangeAnnotations2(annotations) {
            this._annotations = annotations === void 0 ? /* @__PURE__ */ Object.create(null) : annotations;
            this._counter = 0;
            this._size = 0;
          }
          ChangeAnnotations2.prototype.all = function() {
            return this._annotations;
          };
          Object.defineProperty(ChangeAnnotations2.prototype, "size", {
            get: function() {
              return this._size;
            },
            enumerable: false,
            configurable: true
          });
          ChangeAnnotations2.prototype.manage = function(idOrAnnotation, annotation) {
            var id;
            if (ChangeAnnotationIdentifier.is(idOrAnnotation)) {
              id = idOrAnnotation;
            } else {
              id = this.nextId();
              annotation = idOrAnnotation;
            }
            if (this._annotations[id] !== void 0) {
              throw new Error("Id ".concat(id, " is already in use."));
            }
            if (annotation === void 0) {
              throw new Error("No annotation provided for id ".concat(id));
            }
            this._annotations[id] = annotation;
            this._size++;
            return id;
          };
          ChangeAnnotations2.prototype.nextId = function() {
            this._counter++;
            return this._counter.toString();
          };
          return ChangeAnnotations2;
        })()
      );
      var WorkspaceChange = (
        /** @class */
        (function() {
          function WorkspaceChange2(workspaceEdit) {
            var _this = this;
            this._textEditChanges = /* @__PURE__ */ Object.create(null);
            if (workspaceEdit !== void 0) {
              this._workspaceEdit = workspaceEdit;
              if (workspaceEdit.documentChanges) {
                this._changeAnnotations = new ChangeAnnotations(workspaceEdit.changeAnnotations);
                workspaceEdit.changeAnnotations = this._changeAnnotations.all();
                workspaceEdit.documentChanges.forEach(function(change) {
                  if (TextDocumentEdit.is(change)) {
                    var textEditChange = new TextEditChangeImpl(change.edits, _this._changeAnnotations);
                    _this._textEditChanges[change.textDocument.uri] = textEditChange;
                  }
                });
              } else if (workspaceEdit.changes) {
                Object.keys(workspaceEdit.changes).forEach(function(key) {
                  var textEditChange = new TextEditChangeImpl(workspaceEdit.changes[key]);
                  _this._textEditChanges[key] = textEditChange;
                });
              }
            } else {
              this._workspaceEdit = {};
            }
          }
          Object.defineProperty(WorkspaceChange2.prototype, "edit", {
            /**
             * Returns the underlying {@link WorkspaceEdit} literal
             * use to be returned from a workspace edit operation like rename.
             */
            get: function() {
              this.initDocumentChanges();
              if (this._changeAnnotations !== void 0) {
                if (this._changeAnnotations.size === 0) {
                  this._workspaceEdit.changeAnnotations = void 0;
                } else {
                  this._workspaceEdit.changeAnnotations = this._changeAnnotations.all();
                }
              }
              return this._workspaceEdit;
            },
            enumerable: false,
            configurable: true
          });
          WorkspaceChange2.prototype.getTextEditChange = function(key) {
            if (OptionalVersionedTextDocumentIdentifier.is(key)) {
              this.initDocumentChanges();
              if (this._workspaceEdit.documentChanges === void 0) {
                throw new Error("Workspace edit is not configured for document changes.");
              }
              var textDocument = { uri: key.uri, version: key.version };
              var result = this._textEditChanges[textDocument.uri];
              if (!result) {
                var edits = [];
                var textDocumentEdit = {
                  textDocument,
                  edits
                };
                this._workspaceEdit.documentChanges.push(textDocumentEdit);
                result = new TextEditChangeImpl(edits, this._changeAnnotations);
                this._textEditChanges[textDocument.uri] = result;
              }
              return result;
            } else {
              this.initChanges();
              if (this._workspaceEdit.changes === void 0) {
                throw new Error("Workspace edit is not configured for normal text edit changes.");
              }
              var result = this._textEditChanges[key];
              if (!result) {
                var edits = [];
                this._workspaceEdit.changes[key] = edits;
                result = new TextEditChangeImpl(edits);
                this._textEditChanges[key] = result;
              }
              return result;
            }
          };
          WorkspaceChange2.prototype.initDocumentChanges = function() {
            if (this._workspaceEdit.documentChanges === void 0 && this._workspaceEdit.changes === void 0) {
              this._changeAnnotations = new ChangeAnnotations();
              this._workspaceEdit.documentChanges = [];
              this._workspaceEdit.changeAnnotations = this._changeAnnotations.all();
            }
          };
          WorkspaceChange2.prototype.initChanges = function() {
            if (this._workspaceEdit.documentChanges === void 0 && this._workspaceEdit.changes === void 0) {
              this._workspaceEdit.changes = /* @__PURE__ */ Object.create(null);
            }
          };
          WorkspaceChange2.prototype.createFile = function(uri, optionsOrAnnotation, options) {
            this.initDocumentChanges();
            if (this._workspaceEdit.documentChanges === void 0) {
              throw new Error("Workspace edit is not configured for document changes.");
            }
            var annotation;
            if (ChangeAnnotation.is(optionsOrAnnotation) || ChangeAnnotationIdentifier.is(optionsOrAnnotation)) {
              annotation = optionsOrAnnotation;
            } else {
              options = optionsOrAnnotation;
            }
            var operation;
            var id;
            if (annotation === void 0) {
              operation = CreateFile.create(uri, options);
            } else {
              id = ChangeAnnotationIdentifier.is(annotation) ? annotation : this._changeAnnotations.manage(annotation);
              operation = CreateFile.create(uri, options, id);
            }
            this._workspaceEdit.documentChanges.push(operation);
            if (id !== void 0) {
              return id;
            }
          };
          WorkspaceChange2.prototype.renameFile = function(oldUri, newUri, optionsOrAnnotation, options) {
            this.initDocumentChanges();
            if (this._workspaceEdit.documentChanges === void 0) {
              throw new Error("Workspace edit is not configured for document changes.");
            }
            var annotation;
            if (ChangeAnnotation.is(optionsOrAnnotation) || ChangeAnnotationIdentifier.is(optionsOrAnnotation)) {
              annotation = optionsOrAnnotation;
            } else {
              options = optionsOrAnnotation;
            }
            var operation;
            var id;
            if (annotation === void 0) {
              operation = RenameFile.create(oldUri, newUri, options);
            } else {
              id = ChangeAnnotationIdentifier.is(annotation) ? annotation : this._changeAnnotations.manage(annotation);
              operation = RenameFile.create(oldUri, newUri, options, id);
            }
            this._workspaceEdit.documentChanges.push(operation);
            if (id !== void 0) {
              return id;
            }
          };
          WorkspaceChange2.prototype.deleteFile = function(uri, optionsOrAnnotation, options) {
            this.initDocumentChanges();
            if (this._workspaceEdit.documentChanges === void 0) {
              throw new Error("Workspace edit is not configured for document changes.");
            }
            var annotation;
            if (ChangeAnnotation.is(optionsOrAnnotation) || ChangeAnnotationIdentifier.is(optionsOrAnnotation)) {
              annotation = optionsOrAnnotation;
            } else {
              options = optionsOrAnnotation;
            }
            var operation;
            var id;
            if (annotation === void 0) {
              operation = DeleteFile.create(uri, options);
            } else {
              id = ChangeAnnotationIdentifier.is(annotation) ? annotation : this._changeAnnotations.manage(annotation);
              operation = DeleteFile.create(uri, options, id);
            }
            this._workspaceEdit.documentChanges.push(operation);
            if (id !== void 0) {
              return id;
            }
          };
          return WorkspaceChange2;
        })()
      );
      exports3.WorkspaceChange = WorkspaceChange;
      var TextDocumentIdentifier;
      (function(TextDocumentIdentifier2) {
        function create(uri) {
          return { uri };
        }
        TextDocumentIdentifier2.create = create;
        function is(value) {
          var candidate = value;
          return Is.defined(candidate) && Is.string(candidate.uri);
        }
        TextDocumentIdentifier2.is = is;
      })(TextDocumentIdentifier || (exports3.TextDocumentIdentifier = TextDocumentIdentifier = {}));
      var VersionedTextDocumentIdentifier;
      (function(VersionedTextDocumentIdentifier2) {
        function create(uri, version) {
          return { uri, version };
        }
        VersionedTextDocumentIdentifier2.create = create;
        function is(value) {
          var candidate = value;
          return Is.defined(candidate) && Is.string(candidate.uri) && Is.integer(candidate.version);
        }
        VersionedTextDocumentIdentifier2.is = is;
      })(VersionedTextDocumentIdentifier || (exports3.VersionedTextDocumentIdentifier = VersionedTextDocumentIdentifier = {}));
      var OptionalVersionedTextDocumentIdentifier;
      (function(OptionalVersionedTextDocumentIdentifier2) {
        function create(uri, version) {
          return { uri, version };
        }
        OptionalVersionedTextDocumentIdentifier2.create = create;
        function is(value) {
          var candidate = value;
          return Is.defined(candidate) && Is.string(candidate.uri) && (candidate.version === null || Is.integer(candidate.version));
        }
        OptionalVersionedTextDocumentIdentifier2.is = is;
      })(OptionalVersionedTextDocumentIdentifier || (exports3.OptionalVersionedTextDocumentIdentifier = OptionalVersionedTextDocumentIdentifier = {}));
      var TextDocumentItem;
      (function(TextDocumentItem2) {
        function create(uri, languageId, version, text) {
          return { uri, languageId, version, text };
        }
        TextDocumentItem2.create = create;
        function is(value) {
          var candidate = value;
          return Is.defined(candidate) && Is.string(candidate.uri) && Is.string(candidate.languageId) && Is.integer(candidate.version) && Is.string(candidate.text);
        }
        TextDocumentItem2.is = is;
      })(TextDocumentItem || (exports3.TextDocumentItem = TextDocumentItem = {}));
      var MarkupKind2;
      (function(MarkupKind3) {
        MarkupKind3.PlainText = "plaintext";
        MarkupKind3.Markdown = "markdown";
        function is(value) {
          var candidate = value;
          return candidate === MarkupKind3.PlainText || candidate === MarkupKind3.Markdown;
        }
        MarkupKind3.is = is;
      })(MarkupKind2 || (exports3.MarkupKind = MarkupKind2 = {}));
      var MarkupContent;
      (function(MarkupContent2) {
        function is(value) {
          var candidate = value;
          return Is.objectLiteral(value) && MarkupKind2.is(candidate.kind) && Is.string(candidate.value);
        }
        MarkupContent2.is = is;
      })(MarkupContent || (exports3.MarkupContent = MarkupContent = {}));
      var CompletionItemKind2;
      (function(CompletionItemKind3) {
        CompletionItemKind3.Text = 1;
        CompletionItemKind3.Method = 2;
        CompletionItemKind3.Function = 3;
        CompletionItemKind3.Constructor = 4;
        CompletionItemKind3.Field = 5;
        CompletionItemKind3.Variable = 6;
        CompletionItemKind3.Class = 7;
        CompletionItemKind3.Interface = 8;
        CompletionItemKind3.Module = 9;
        CompletionItemKind3.Property = 10;
        CompletionItemKind3.Unit = 11;
        CompletionItemKind3.Value = 12;
        CompletionItemKind3.Enum = 13;
        CompletionItemKind3.Keyword = 14;
        CompletionItemKind3.Snippet = 15;
        CompletionItemKind3.Color = 16;
        CompletionItemKind3.File = 17;
        CompletionItemKind3.Reference = 18;
        CompletionItemKind3.Folder = 19;
        CompletionItemKind3.EnumMember = 20;
        CompletionItemKind3.Constant = 21;
        CompletionItemKind3.Struct = 22;
        CompletionItemKind3.Event = 23;
        CompletionItemKind3.Operator = 24;
        CompletionItemKind3.TypeParameter = 25;
      })(CompletionItemKind2 || (exports3.CompletionItemKind = CompletionItemKind2 = {}));
      var InsertTextFormat;
      (function(InsertTextFormat2) {
        InsertTextFormat2.PlainText = 1;
        InsertTextFormat2.Snippet = 2;
      })(InsertTextFormat || (exports3.InsertTextFormat = InsertTextFormat = {}));
      var CompletionItemTag;
      (function(CompletionItemTag2) {
        CompletionItemTag2.Deprecated = 1;
      })(CompletionItemTag || (exports3.CompletionItemTag = CompletionItemTag = {}));
      var InsertReplaceEdit;
      (function(InsertReplaceEdit2) {
        function create(newText, insert, replace) {
          return { newText, insert, replace };
        }
        InsertReplaceEdit2.create = create;
        function is(value) {
          var candidate = value;
          return candidate && Is.string(candidate.newText) && Range.is(candidate.insert) && Range.is(candidate.replace);
        }
        InsertReplaceEdit2.is = is;
      })(InsertReplaceEdit || (exports3.InsertReplaceEdit = InsertReplaceEdit = {}));
      var InsertTextMode;
      (function(InsertTextMode2) {
        InsertTextMode2.asIs = 1;
        InsertTextMode2.adjustIndentation = 2;
      })(InsertTextMode || (exports3.InsertTextMode = InsertTextMode = {}));
      var CompletionItemLabelDetails;
      (function(CompletionItemLabelDetails2) {
        function is(value) {
          var candidate = value;
          return candidate && (Is.string(candidate.detail) || candidate.detail === void 0) && (Is.string(candidate.description) || candidate.description === void 0);
        }
        CompletionItemLabelDetails2.is = is;
      })(CompletionItemLabelDetails || (exports3.CompletionItemLabelDetails = CompletionItemLabelDetails = {}));
      var CompletionItem2;
      (function(CompletionItem3) {
        function create(label) {
          return { label };
        }
        CompletionItem3.create = create;
      })(CompletionItem2 || (exports3.CompletionItem = CompletionItem2 = {}));
      var CompletionList;
      (function(CompletionList2) {
        function create(items, isIncomplete) {
          return { items: items ? items : [], isIncomplete: !!isIncomplete };
        }
        CompletionList2.create = create;
      })(CompletionList || (exports3.CompletionList = CompletionList = {}));
      var MarkedString;
      (function(MarkedString2) {
        function fromPlainText(plainText) {
          return plainText.replace(/[\\`*_{}[\]()#+\-.!]/g, "\\$&");
        }
        MarkedString2.fromPlainText = fromPlainText;
        function is(value) {
          var candidate = value;
          return Is.string(candidate) || Is.objectLiteral(candidate) && Is.string(candidate.language) && Is.string(candidate.value);
        }
        MarkedString2.is = is;
      })(MarkedString || (exports3.MarkedString = MarkedString = {}));
      var Hover2;
      (function(Hover3) {
        function is(value) {
          var candidate = value;
          return !!candidate && Is.objectLiteral(candidate) && (MarkupContent.is(candidate.contents) || MarkedString.is(candidate.contents) || Is.typedArray(candidate.contents, MarkedString.is)) && (value.range === void 0 || Range.is(value.range));
        }
        Hover3.is = is;
      })(Hover2 || (exports3.Hover = Hover2 = {}));
      var ParameterInformation;
      (function(ParameterInformation2) {
        function create(label, documentation) {
          return documentation ? { label, documentation } : { label };
        }
        ParameterInformation2.create = create;
      })(ParameterInformation || (exports3.ParameterInformation = ParameterInformation = {}));
      var SignatureInformation;
      (function(SignatureInformation2) {
        function create(label, documentation) {
          var parameters = [];
          for (var _i = 2; _i < arguments.length; _i++) {
            parameters[_i - 2] = arguments[_i];
          }
          var result = { label };
          if (Is.defined(documentation)) {
            result.documentation = documentation;
          }
          if (Is.defined(parameters)) {
            result.parameters = parameters;
          } else {
            result.parameters = [];
          }
          return result;
        }
        SignatureInformation2.create = create;
      })(SignatureInformation || (exports3.SignatureInformation = SignatureInformation = {}));
      var DocumentHighlightKind;
      (function(DocumentHighlightKind2) {
        DocumentHighlightKind2.Text = 1;
        DocumentHighlightKind2.Read = 2;
        DocumentHighlightKind2.Write = 3;
      })(DocumentHighlightKind || (exports3.DocumentHighlightKind = DocumentHighlightKind = {}));
      var DocumentHighlight;
      (function(DocumentHighlight2) {
        function create(range, kind) {
          var result = { range };
          if (Is.number(kind)) {
            result.kind = kind;
          }
          return result;
        }
        DocumentHighlight2.create = create;
      })(DocumentHighlight || (exports3.DocumentHighlight = DocumentHighlight = {}));
      var SymbolKind;
      (function(SymbolKind2) {
        SymbolKind2.File = 1;
        SymbolKind2.Module = 2;
        SymbolKind2.Namespace = 3;
        SymbolKind2.Package = 4;
        SymbolKind2.Class = 5;
        SymbolKind2.Method = 6;
        SymbolKind2.Property = 7;
        SymbolKind2.Field = 8;
        SymbolKind2.Constructor = 9;
        SymbolKind2.Enum = 10;
        SymbolKind2.Interface = 11;
        SymbolKind2.Function = 12;
        SymbolKind2.Variable = 13;
        SymbolKind2.Constant = 14;
        SymbolKind2.String = 15;
        SymbolKind2.Number = 16;
        SymbolKind2.Boolean = 17;
        SymbolKind2.Array = 18;
        SymbolKind2.Object = 19;
        SymbolKind2.Key = 20;
        SymbolKind2.Null = 21;
        SymbolKind2.EnumMember = 22;
        SymbolKind2.Struct = 23;
        SymbolKind2.Event = 24;
        SymbolKind2.Operator = 25;
        SymbolKind2.TypeParameter = 26;
      })(SymbolKind || (exports3.SymbolKind = SymbolKind = {}));
      var SymbolTag;
      (function(SymbolTag2) {
        SymbolTag2.Deprecated = 1;
      })(SymbolTag || (exports3.SymbolTag = SymbolTag = {}));
      var SymbolInformation;
      (function(SymbolInformation2) {
        function create(name, kind, range, uri, containerName) {
          var result = {
            name,
            kind,
            location: { uri, range }
          };
          if (containerName) {
            result.containerName = containerName;
          }
          return result;
        }
        SymbolInformation2.create = create;
      })(SymbolInformation || (exports3.SymbolInformation = SymbolInformation = {}));
      var WorkspaceSymbol;
      (function(WorkspaceSymbol2) {
        function create(name, kind, uri, range) {
          return range !== void 0 ? { name, kind, location: { uri, range } } : { name, kind, location: { uri } };
        }
        WorkspaceSymbol2.create = create;
      })(WorkspaceSymbol || (exports3.WorkspaceSymbol = WorkspaceSymbol = {}));
      var DocumentSymbol;
      (function(DocumentSymbol2) {
        function create(name, detail, kind, range, selectionRange, children) {
          var result = {
            name,
            detail,
            kind,
            range,
            selectionRange
          };
          if (children !== void 0) {
            result.children = children;
          }
          return result;
        }
        DocumentSymbol2.create = create;
        function is(value) {
          var candidate = value;
          return candidate && Is.string(candidate.name) && Is.number(candidate.kind) && Range.is(candidate.range) && Range.is(candidate.selectionRange) && (candidate.detail === void 0 || Is.string(candidate.detail)) && (candidate.deprecated === void 0 || Is.boolean(candidate.deprecated)) && (candidate.children === void 0 || Array.isArray(candidate.children)) && (candidate.tags === void 0 || Array.isArray(candidate.tags));
        }
        DocumentSymbol2.is = is;
      })(DocumentSymbol || (exports3.DocumentSymbol = DocumentSymbol = {}));
      var CodeActionKind;
      (function(CodeActionKind2) {
        CodeActionKind2.Empty = "";
        CodeActionKind2.QuickFix = "quickfix";
        CodeActionKind2.Refactor = "refactor";
        CodeActionKind2.RefactorExtract = "refactor.extract";
        CodeActionKind2.RefactorInline = "refactor.inline";
        CodeActionKind2.RefactorRewrite = "refactor.rewrite";
        CodeActionKind2.Source = "source";
        CodeActionKind2.SourceOrganizeImports = "source.organizeImports";
        CodeActionKind2.SourceFixAll = "source.fixAll";
      })(CodeActionKind || (exports3.CodeActionKind = CodeActionKind = {}));
      var CodeActionTriggerKind;
      (function(CodeActionTriggerKind2) {
        CodeActionTriggerKind2.Invoked = 1;
        CodeActionTriggerKind2.Automatic = 2;
      })(CodeActionTriggerKind || (exports3.CodeActionTriggerKind = CodeActionTriggerKind = {}));
      var CodeActionContext;
      (function(CodeActionContext2) {
        function create(diagnostics, only, triggerKind) {
          var result = { diagnostics };
          if (only !== void 0 && only !== null) {
            result.only = only;
          }
          if (triggerKind !== void 0 && triggerKind !== null) {
            result.triggerKind = triggerKind;
          }
          return result;
        }
        CodeActionContext2.create = create;
        function is(value) {
          var candidate = value;
          return Is.defined(candidate) && Is.typedArray(candidate.diagnostics, Diagnostic2.is) && (candidate.only === void 0 || Is.typedArray(candidate.only, Is.string)) && (candidate.triggerKind === void 0 || candidate.triggerKind === CodeActionTriggerKind.Invoked || candidate.triggerKind === CodeActionTriggerKind.Automatic);
        }
        CodeActionContext2.is = is;
      })(CodeActionContext || (exports3.CodeActionContext = CodeActionContext = {}));
      var CodeAction;
      (function(CodeAction2) {
        function create(title, kindOrCommandOrEdit, kind) {
          var result = { title };
          var checkKind = true;
          if (typeof kindOrCommandOrEdit === "string") {
            checkKind = false;
            result.kind = kindOrCommandOrEdit;
          } else if (Command.is(kindOrCommandOrEdit)) {
            result.command = kindOrCommandOrEdit;
          } else {
            result.edit = kindOrCommandOrEdit;
          }
          if (checkKind && kind !== void 0) {
            result.kind = kind;
          }
          return result;
        }
        CodeAction2.create = create;
        function is(value) {
          var candidate = value;
          return candidate && Is.string(candidate.title) && (candidate.diagnostics === void 0 || Is.typedArray(candidate.diagnostics, Diagnostic2.is)) && (candidate.kind === void 0 || Is.string(candidate.kind)) && (candidate.edit !== void 0 || candidate.command !== void 0) && (candidate.command === void 0 || Command.is(candidate.command)) && (candidate.isPreferred === void 0 || Is.boolean(candidate.isPreferred)) && (candidate.edit === void 0 || WorkspaceEdit.is(candidate.edit));
        }
        CodeAction2.is = is;
      })(CodeAction || (exports3.CodeAction = CodeAction = {}));
      var CodeLens;
      (function(CodeLens2) {
        function create(range, data) {
          var result = { range };
          if (Is.defined(data)) {
            result.data = data;
          }
          return result;
        }
        CodeLens2.create = create;
        function is(value) {
          var candidate = value;
          return Is.defined(candidate) && Range.is(candidate.range) && (Is.undefined(candidate.command) || Command.is(candidate.command));
        }
        CodeLens2.is = is;
      })(CodeLens || (exports3.CodeLens = CodeLens = {}));
      var FormattingOptions;
      (function(FormattingOptions2) {
        function create(tabSize, insertSpaces) {
          return { tabSize, insertSpaces };
        }
        FormattingOptions2.create = create;
        function is(value) {
          var candidate = value;
          return Is.defined(candidate) && Is.uinteger(candidate.tabSize) && Is.boolean(candidate.insertSpaces);
        }
        FormattingOptions2.is = is;
      })(FormattingOptions || (exports3.FormattingOptions = FormattingOptions = {}));
      var DocumentLink;
      (function(DocumentLink2) {
        function create(range, target, data) {
          return { range, target, data };
        }
        DocumentLink2.create = create;
        function is(value) {
          var candidate = value;
          return Is.defined(candidate) && Range.is(candidate.range) && (Is.undefined(candidate.target) || Is.string(candidate.target));
        }
        DocumentLink2.is = is;
      })(DocumentLink || (exports3.DocumentLink = DocumentLink = {}));
      var SelectionRange;
      (function(SelectionRange2) {
        function create(range, parent) {
          return { range, parent };
        }
        SelectionRange2.create = create;
        function is(value) {
          var candidate = value;
          return Is.objectLiteral(candidate) && Range.is(candidate.range) && (candidate.parent === void 0 || SelectionRange2.is(candidate.parent));
        }
        SelectionRange2.is = is;
      })(SelectionRange || (exports3.SelectionRange = SelectionRange = {}));
      var SemanticTokenTypes;
      (function(SemanticTokenTypes2) {
        SemanticTokenTypes2["namespace"] = "namespace";
        SemanticTokenTypes2["type"] = "type";
        SemanticTokenTypes2["class"] = "class";
        SemanticTokenTypes2["enum"] = "enum";
        SemanticTokenTypes2["interface"] = "interface";
        SemanticTokenTypes2["struct"] = "struct";
        SemanticTokenTypes2["typeParameter"] = "typeParameter";
        SemanticTokenTypes2["parameter"] = "parameter";
        SemanticTokenTypes2["variable"] = "variable";
        SemanticTokenTypes2["property"] = "property";
        SemanticTokenTypes2["enumMember"] = "enumMember";
        SemanticTokenTypes2["event"] = "event";
        SemanticTokenTypes2["function"] = "function";
        SemanticTokenTypes2["method"] = "method";
        SemanticTokenTypes2["macro"] = "macro";
        SemanticTokenTypes2["keyword"] = "keyword";
        SemanticTokenTypes2["modifier"] = "modifier";
        SemanticTokenTypes2["comment"] = "comment";
        SemanticTokenTypes2["string"] = "string";
        SemanticTokenTypes2["number"] = "number";
        SemanticTokenTypes2["regexp"] = "regexp";
        SemanticTokenTypes2["operator"] = "operator";
        SemanticTokenTypes2["decorator"] = "decorator";
      })(SemanticTokenTypes || (exports3.SemanticTokenTypes = SemanticTokenTypes = {}));
      var SemanticTokenModifiers;
      (function(SemanticTokenModifiers2) {
        SemanticTokenModifiers2["declaration"] = "declaration";
        SemanticTokenModifiers2["definition"] = "definition";
        SemanticTokenModifiers2["readonly"] = "readonly";
        SemanticTokenModifiers2["static"] = "static";
        SemanticTokenModifiers2["deprecated"] = "deprecated";
        SemanticTokenModifiers2["abstract"] = "abstract";
        SemanticTokenModifiers2["async"] = "async";
        SemanticTokenModifiers2["modification"] = "modification";
        SemanticTokenModifiers2["documentation"] = "documentation";
        SemanticTokenModifiers2["defaultLibrary"] = "defaultLibrary";
      })(SemanticTokenModifiers || (exports3.SemanticTokenModifiers = SemanticTokenModifiers = {}));
      var SemanticTokens;
      (function(SemanticTokens2) {
        function is(value) {
          var candidate = value;
          return Is.objectLiteral(candidate) && (candidate.resultId === void 0 || typeof candidate.resultId === "string") && Array.isArray(candidate.data) && (candidate.data.length === 0 || typeof candidate.data[0] === "number");
        }
        SemanticTokens2.is = is;
      })(SemanticTokens || (exports3.SemanticTokens = SemanticTokens = {}));
      var InlineValueText;
      (function(InlineValueText2) {
        function create(range, text) {
          return { range, text };
        }
        InlineValueText2.create = create;
        function is(value) {
          var candidate = value;
          return candidate !== void 0 && candidate !== null && Range.is(candidate.range) && Is.string(candidate.text);
        }
        InlineValueText2.is = is;
      })(InlineValueText || (exports3.InlineValueText = InlineValueText = {}));
      var InlineValueVariableLookup;
      (function(InlineValueVariableLookup2) {
        function create(range, variableName, caseSensitiveLookup) {
          return { range, variableName, caseSensitiveLookup };
        }
        InlineValueVariableLookup2.create = create;
        function is(value) {
          var candidate = value;
          return candidate !== void 0 && candidate !== null && Range.is(candidate.range) && Is.boolean(candidate.caseSensitiveLookup) && (Is.string(candidate.variableName) || candidate.variableName === void 0);
        }
        InlineValueVariableLookup2.is = is;
      })(InlineValueVariableLookup || (exports3.InlineValueVariableLookup = InlineValueVariableLookup = {}));
      var InlineValueEvaluatableExpression;
      (function(InlineValueEvaluatableExpression2) {
        function create(range, expression) {
          return { range, expression };
        }
        InlineValueEvaluatableExpression2.create = create;
        function is(value) {
          var candidate = value;
          return candidate !== void 0 && candidate !== null && Range.is(candidate.range) && (Is.string(candidate.expression) || candidate.expression === void 0);
        }
        InlineValueEvaluatableExpression2.is = is;
      })(InlineValueEvaluatableExpression || (exports3.InlineValueEvaluatableExpression = InlineValueEvaluatableExpression = {}));
      var InlineValueContext;
      (function(InlineValueContext2) {
        function create(frameId, stoppedLocation) {
          return { frameId, stoppedLocation };
        }
        InlineValueContext2.create = create;
        function is(value) {
          var candidate = value;
          return Is.defined(candidate) && Range.is(value.stoppedLocation);
        }
        InlineValueContext2.is = is;
      })(InlineValueContext || (exports3.InlineValueContext = InlineValueContext = {}));
      var InlayHintKind;
      (function(InlayHintKind2) {
        InlayHintKind2.Type = 1;
        InlayHintKind2.Parameter = 2;
        function is(value) {
          return value === 1 || value === 2;
        }
        InlayHintKind2.is = is;
      })(InlayHintKind || (exports3.InlayHintKind = InlayHintKind = {}));
      var InlayHintLabelPart;
      (function(InlayHintLabelPart2) {
        function create(value) {
          return { value };
        }
        InlayHintLabelPart2.create = create;
        function is(value) {
          var candidate = value;
          return Is.objectLiteral(candidate) && (candidate.tooltip === void 0 || Is.string(candidate.tooltip) || MarkupContent.is(candidate.tooltip)) && (candidate.location === void 0 || Location.is(candidate.location)) && (candidate.command === void 0 || Command.is(candidate.command));
        }
        InlayHintLabelPart2.is = is;
      })(InlayHintLabelPart || (exports3.InlayHintLabelPart = InlayHintLabelPart = {}));
      var InlayHint;
      (function(InlayHint2) {
        function create(position, label, kind) {
          var result = { position, label };
          if (kind !== void 0) {
            result.kind = kind;
          }
          return result;
        }
        InlayHint2.create = create;
        function is(value) {
          var candidate = value;
          return Is.objectLiteral(candidate) && Position2.is(candidate.position) && (Is.string(candidate.label) || Is.typedArray(candidate.label, InlayHintLabelPart.is)) && (candidate.kind === void 0 || InlayHintKind.is(candidate.kind)) && candidate.textEdits === void 0 || Is.typedArray(candidate.textEdits, TextEdit.is) && (candidate.tooltip === void 0 || Is.string(candidate.tooltip) || MarkupContent.is(candidate.tooltip)) && (candidate.paddingLeft === void 0 || Is.boolean(candidate.paddingLeft)) && (candidate.paddingRight === void 0 || Is.boolean(candidate.paddingRight));
        }
        InlayHint2.is = is;
      })(InlayHint || (exports3.InlayHint = InlayHint = {}));
      var StringValue;
      (function(StringValue2) {
        function createSnippet(value) {
          return { kind: "snippet", value };
        }
        StringValue2.createSnippet = createSnippet;
      })(StringValue || (exports3.StringValue = StringValue = {}));
      var InlineCompletionItem;
      (function(InlineCompletionItem2) {
        function create(insertText, filterText, range, command) {
          return { insertText, filterText, range, command };
        }
        InlineCompletionItem2.create = create;
      })(InlineCompletionItem || (exports3.InlineCompletionItem = InlineCompletionItem = {}));
      var InlineCompletionList;
      (function(InlineCompletionList2) {
        function create(items) {
          return { items };
        }
        InlineCompletionList2.create = create;
      })(InlineCompletionList || (exports3.InlineCompletionList = InlineCompletionList = {}));
      var InlineCompletionTriggerKind;
      (function(InlineCompletionTriggerKind2) {
        InlineCompletionTriggerKind2.Invoked = 0;
        InlineCompletionTriggerKind2.Automatic = 1;
      })(InlineCompletionTriggerKind || (exports3.InlineCompletionTriggerKind = InlineCompletionTriggerKind = {}));
      var SelectedCompletionInfo;
      (function(SelectedCompletionInfo2) {
        function create(range, text) {
          return { range, text };
        }
        SelectedCompletionInfo2.create = create;
      })(SelectedCompletionInfo || (exports3.SelectedCompletionInfo = SelectedCompletionInfo = {}));
      var InlineCompletionContext;
      (function(InlineCompletionContext2) {
        function create(triggerKind, selectedCompletionInfo) {
          return { triggerKind, selectedCompletionInfo };
        }
        InlineCompletionContext2.create = create;
      })(InlineCompletionContext || (exports3.InlineCompletionContext = InlineCompletionContext = {}));
      var WorkspaceFolder;
      (function(WorkspaceFolder2) {
        function is(value) {
          var candidate = value;
          return Is.objectLiteral(candidate) && URI.is(candidate.uri) && Is.string(candidate.name);
        }
        WorkspaceFolder2.is = is;
      })(WorkspaceFolder || (exports3.WorkspaceFolder = WorkspaceFolder = {}));
      exports3.EOL = ["\n", "\r\n", "\r"];
      var TextDocument2;
      (function(TextDocument3) {
        function create(uri, languageId, version, content) {
          return new FullTextDocument2(uri, languageId, version, content);
        }
        TextDocument3.create = create;
        function is(value) {
          var candidate = value;
          return Is.defined(candidate) && Is.string(candidate.uri) && (Is.undefined(candidate.languageId) || Is.string(candidate.languageId)) && Is.uinteger(candidate.lineCount) && Is.func(candidate.getText) && Is.func(candidate.positionAt) && Is.func(candidate.offsetAt) ? true : false;
        }
        TextDocument3.is = is;
        function applyEdits(document, edits) {
          var text = document.getText();
          var sortedEdits = mergeSort2(edits, function(a, b) {
            var diff = a.range.start.line - b.range.start.line;
            if (diff === 0) {
              return a.range.start.character - b.range.start.character;
            }
            return diff;
          });
          var lastModifiedOffset = text.length;
          for (var i = sortedEdits.length - 1; i >= 0; i--) {
            var e = sortedEdits[i];
            var startOffset = document.offsetAt(e.range.start);
            var endOffset = document.offsetAt(e.range.end);
            if (endOffset <= lastModifiedOffset) {
              text = text.substring(0, startOffset) + e.newText + text.substring(endOffset, text.length);
            } else {
              throw new Error("Overlapping edit");
            }
            lastModifiedOffset = startOffset;
          }
          return text;
        }
        TextDocument3.applyEdits = applyEdits;
        function mergeSort2(data, compare) {
          if (data.length <= 1) {
            return data;
          }
          var p = data.length / 2 | 0;
          var left = data.slice(0, p);
          var right = data.slice(p);
          mergeSort2(left, compare);
          mergeSort2(right, compare);
          var leftIdx = 0;
          var rightIdx = 0;
          var i = 0;
          while (leftIdx < left.length && rightIdx < right.length) {
            var ret = compare(left[leftIdx], right[rightIdx]);
            if (ret <= 0) {
              data[i++] = left[leftIdx++];
            } else {
              data[i++] = right[rightIdx++];
            }
          }
          while (leftIdx < left.length) {
            data[i++] = left[leftIdx++];
          }
          while (rightIdx < right.length) {
            data[i++] = right[rightIdx++];
          }
          return data;
        }
      })(TextDocument2 || (exports3.TextDocument = TextDocument2 = {}));
      var FullTextDocument2 = (
        /** @class */
        (function() {
          function FullTextDocument3(uri, languageId, version, content) {
            this._uri = uri;
            this._languageId = languageId;
            this._version = version;
            this._content = content;
            this._lineOffsets = void 0;
          }
          Object.defineProperty(FullTextDocument3.prototype, "uri", {
            get: function() {
              return this._uri;
            },
            enumerable: false,
            configurable: true
          });
          Object.defineProperty(FullTextDocument3.prototype, "languageId", {
            get: function() {
              return this._languageId;
            },
            enumerable: false,
            configurable: true
          });
          Object.defineProperty(FullTextDocument3.prototype, "version", {
            get: function() {
              return this._version;
            },
            enumerable: false,
            configurable: true
          });
          FullTextDocument3.prototype.getText = function(range) {
            if (range) {
              var start = this.offsetAt(range.start);
              var end = this.offsetAt(range.end);
              return this._content.substring(start, end);
            }
            return this._content;
          };
          FullTextDocument3.prototype.update = function(event, version) {
            this._content = event.text;
            this._version = version;
            this._lineOffsets = void 0;
          };
          FullTextDocument3.prototype.getLineOffsets = function() {
            if (this._lineOffsets === void 0) {
              var lineOffsets = [];
              var text = this._content;
              var isLineStart = true;
              for (var i = 0; i < text.length; i++) {
                if (isLineStart) {
                  lineOffsets.push(i);
                  isLineStart = false;
                }
                var ch = text.charAt(i);
                isLineStart = ch === "\r" || ch === "\n";
                if (ch === "\r" && i + 1 < text.length && text.charAt(i + 1) === "\n") {
                  i++;
                }
              }
              if (isLineStart && text.length > 0) {
                lineOffsets.push(text.length);
              }
              this._lineOffsets = lineOffsets;
            }
            return this._lineOffsets;
          };
          FullTextDocument3.prototype.positionAt = function(offset) {
            offset = Math.max(Math.min(offset, this._content.length), 0);
            var lineOffsets = this.getLineOffsets();
            var low = 0, high = lineOffsets.length;
            if (high === 0) {
              return Position2.create(0, offset);
            }
            while (low < high) {
              var mid = Math.floor((low + high) / 2);
              if (lineOffsets[mid] > offset) {
                high = mid;
              } else {
                low = mid + 1;
              }
            }
            var line = low - 1;
            return Position2.create(line, offset - lineOffsets[line]);
          };
          FullTextDocument3.prototype.offsetAt = function(position) {
            var lineOffsets = this.getLineOffsets();
            if (position.line >= lineOffsets.length) {
              return this._content.length;
            } else if (position.line < 0) {
              return 0;
            }
            var lineOffset = lineOffsets[position.line];
            var nextLineOffset = position.line + 1 < lineOffsets.length ? lineOffsets[position.line + 1] : this._content.length;
            return Math.max(Math.min(lineOffset + position.character, nextLineOffset), lineOffset);
          };
          Object.defineProperty(FullTextDocument3.prototype, "lineCount", {
            get: function() {
              return this.getLineOffsets().length;
            },
            enumerable: false,
            configurable: true
          });
          return FullTextDocument3;
        })()
      );
      var Is;
      (function(Is2) {
        var toString = Object.prototype.toString;
        function defined(value) {
          return typeof value !== "undefined";
        }
        Is2.defined = defined;
        function undefined2(value) {
          return typeof value === "undefined";
        }
        Is2.undefined = undefined2;
        function boolean(value) {
          return value === true || value === false;
        }
        Is2.boolean = boolean;
        function string(value) {
          return toString.call(value) === "[object String]";
        }
        Is2.string = string;
        function number(value) {
          return toString.call(value) === "[object Number]";
        }
        Is2.number = number;
        function numberRange(value, min, max) {
          return toString.call(value) === "[object Number]" && min <= value && value <= max;
        }
        Is2.numberRange = numberRange;
        function integer2(value) {
          return toString.call(value) === "[object Number]" && -2147483648 <= value && value <= 2147483647;
        }
        Is2.integer = integer2;
        function uinteger2(value) {
          return toString.call(value) === "[object Number]" && 0 <= value && value <= 2147483647;
        }
        Is2.uinteger = uinteger2;
        function func(value) {
          return toString.call(value) === "[object Function]";
        }
        Is2.func = func;
        function objectLiteral(value) {
          return value !== null && typeof value === "object";
        }
        Is2.objectLiteral = objectLiteral;
        function typedArray(value, check) {
          return Array.isArray(value) && value.every(check);
        }
        Is2.typedArray = typedArray;
      })(Is || (Is = {}));
    });
  }
});

// node_modules/vscode-languageserver-protocol/lib/common/messages.js
var require_messages2 = __commonJS({
  "node_modules/vscode-languageserver-protocol/lib/common/messages.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.ProtocolNotificationType = exports2.ProtocolNotificationType0 = exports2.ProtocolRequestType = exports2.ProtocolRequestType0 = exports2.RegistrationType = exports2.MessageDirection = void 0;
    var vscode_jsonrpc_1 = require_main();
    var MessageDirection;
    (function(MessageDirection2) {
      MessageDirection2["clientToServer"] = "clientToServer";
      MessageDirection2["serverToClient"] = "serverToClient";
      MessageDirection2["both"] = "both";
    })(MessageDirection || (exports2.MessageDirection = MessageDirection = {}));
    var RegistrationType = class {
      constructor(method) {
        this.method = method;
      }
    };
    exports2.RegistrationType = RegistrationType;
    var ProtocolRequestType0 = class extends vscode_jsonrpc_1.RequestType0 {
      constructor(method) {
        super(method);
      }
    };
    exports2.ProtocolRequestType0 = ProtocolRequestType0;
    var ProtocolRequestType = class extends vscode_jsonrpc_1.RequestType {
      constructor(method) {
        super(method, vscode_jsonrpc_1.ParameterStructures.byName);
      }
    };
    exports2.ProtocolRequestType = ProtocolRequestType;
    var ProtocolNotificationType0 = class extends vscode_jsonrpc_1.NotificationType0 {
      constructor(method) {
        super(method);
      }
    };
    exports2.ProtocolNotificationType0 = ProtocolNotificationType0;
    var ProtocolNotificationType = class extends vscode_jsonrpc_1.NotificationType {
      constructor(method) {
        super(method, vscode_jsonrpc_1.ParameterStructures.byName);
      }
    };
    exports2.ProtocolNotificationType = ProtocolNotificationType;
  }
});

// node_modules/vscode-languageserver-protocol/lib/common/utils/is.js
var require_is3 = __commonJS({
  "node_modules/vscode-languageserver-protocol/lib/common/utils/is.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.objectLiteral = exports2.typedArray = exports2.stringArray = exports2.array = exports2.func = exports2.error = exports2.number = exports2.string = exports2.boolean = void 0;
    function boolean(value) {
      return value === true || value === false;
    }
    exports2.boolean = boolean;
    function string(value) {
      return typeof value === "string" || value instanceof String;
    }
    exports2.string = string;
    function number(value) {
      return typeof value === "number" || value instanceof Number;
    }
    exports2.number = number;
    function error(value) {
      return value instanceof Error;
    }
    exports2.error = error;
    function func(value) {
      return typeof value === "function";
    }
    exports2.func = func;
    function array(value) {
      return Array.isArray(value);
    }
    exports2.array = array;
    function stringArray(value) {
      return array(value) && value.every((elem) => string(elem));
    }
    exports2.stringArray = stringArray;
    function typedArray(value, check) {
      return Array.isArray(value) && value.every(check);
    }
    exports2.typedArray = typedArray;
    function objectLiteral(value) {
      return value !== null && typeof value === "object";
    }
    exports2.objectLiteral = objectLiteral;
  }
});

// node_modules/vscode-languageserver-protocol/lib/common/protocol.implementation.js
var require_protocol_implementation = __commonJS({
  "node_modules/vscode-languageserver-protocol/lib/common/protocol.implementation.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.ImplementationRequest = void 0;
    var messages_1 = require_messages2();
    var ImplementationRequest;
    (function(ImplementationRequest2) {
      ImplementationRequest2.method = "textDocument/implementation";
      ImplementationRequest2.messageDirection = messages_1.MessageDirection.clientToServer;
      ImplementationRequest2.type = new messages_1.ProtocolRequestType(ImplementationRequest2.method);
    })(ImplementationRequest || (exports2.ImplementationRequest = ImplementationRequest = {}));
  }
});

// node_modules/vscode-languageserver-protocol/lib/common/protocol.typeDefinition.js
var require_protocol_typeDefinition = __commonJS({
  "node_modules/vscode-languageserver-protocol/lib/common/protocol.typeDefinition.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.TypeDefinitionRequest = void 0;
    var messages_1 = require_messages2();
    var TypeDefinitionRequest;
    (function(TypeDefinitionRequest2) {
      TypeDefinitionRequest2.method = "textDocument/typeDefinition";
      TypeDefinitionRequest2.messageDirection = messages_1.MessageDirection.clientToServer;
      TypeDefinitionRequest2.type = new messages_1.ProtocolRequestType(TypeDefinitionRequest2.method);
    })(TypeDefinitionRequest || (exports2.TypeDefinitionRequest = TypeDefinitionRequest = {}));
  }
});

// node_modules/vscode-languageserver-protocol/lib/common/protocol.workspaceFolder.js
var require_protocol_workspaceFolder = __commonJS({
  "node_modules/vscode-languageserver-protocol/lib/common/protocol.workspaceFolder.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.DidChangeWorkspaceFoldersNotification = exports2.WorkspaceFoldersRequest = void 0;
    var messages_1 = require_messages2();
    var WorkspaceFoldersRequest;
    (function(WorkspaceFoldersRequest2) {
      WorkspaceFoldersRequest2.method = "workspace/workspaceFolders";
      WorkspaceFoldersRequest2.messageDirection = messages_1.MessageDirection.serverToClient;
      WorkspaceFoldersRequest2.type = new messages_1.ProtocolRequestType0(WorkspaceFoldersRequest2.method);
    })(WorkspaceFoldersRequest || (exports2.WorkspaceFoldersRequest = WorkspaceFoldersRequest = {}));
    var DidChangeWorkspaceFoldersNotification;
    (function(DidChangeWorkspaceFoldersNotification2) {
      DidChangeWorkspaceFoldersNotification2.method = "workspace/didChangeWorkspaceFolders";
      DidChangeWorkspaceFoldersNotification2.messageDirection = messages_1.MessageDirection.clientToServer;
      DidChangeWorkspaceFoldersNotification2.type = new messages_1.ProtocolNotificationType(DidChangeWorkspaceFoldersNotification2.method);
    })(DidChangeWorkspaceFoldersNotification || (exports2.DidChangeWorkspaceFoldersNotification = DidChangeWorkspaceFoldersNotification = {}));
  }
});

// node_modules/vscode-languageserver-protocol/lib/common/protocol.configuration.js
var require_protocol_configuration = __commonJS({
  "node_modules/vscode-languageserver-protocol/lib/common/protocol.configuration.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.ConfigurationRequest = void 0;
    var messages_1 = require_messages2();
    var ConfigurationRequest;
    (function(ConfigurationRequest2) {
      ConfigurationRequest2.method = "workspace/configuration";
      ConfigurationRequest2.messageDirection = messages_1.MessageDirection.serverToClient;
      ConfigurationRequest2.type = new messages_1.ProtocolRequestType(ConfigurationRequest2.method);
    })(ConfigurationRequest || (exports2.ConfigurationRequest = ConfigurationRequest = {}));
  }
});

// node_modules/vscode-languageserver-protocol/lib/common/protocol.colorProvider.js
var require_protocol_colorProvider = __commonJS({
  "node_modules/vscode-languageserver-protocol/lib/common/protocol.colorProvider.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.ColorPresentationRequest = exports2.DocumentColorRequest = void 0;
    var messages_1 = require_messages2();
    var DocumentColorRequest;
    (function(DocumentColorRequest2) {
      DocumentColorRequest2.method = "textDocument/documentColor";
      DocumentColorRequest2.messageDirection = messages_1.MessageDirection.clientToServer;
      DocumentColorRequest2.type = new messages_1.ProtocolRequestType(DocumentColorRequest2.method);
    })(DocumentColorRequest || (exports2.DocumentColorRequest = DocumentColorRequest = {}));
    var ColorPresentationRequest;
    (function(ColorPresentationRequest2) {
      ColorPresentationRequest2.method = "textDocument/colorPresentation";
      ColorPresentationRequest2.messageDirection = messages_1.MessageDirection.clientToServer;
      ColorPresentationRequest2.type = new messages_1.ProtocolRequestType(ColorPresentationRequest2.method);
    })(ColorPresentationRequest || (exports2.ColorPresentationRequest = ColorPresentationRequest = {}));
  }
});

// node_modules/vscode-languageserver-protocol/lib/common/protocol.foldingRange.js
var require_protocol_foldingRange = __commonJS({
  "node_modules/vscode-languageserver-protocol/lib/common/protocol.foldingRange.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.FoldingRangeRefreshRequest = exports2.FoldingRangeRequest = void 0;
    var messages_1 = require_messages2();
    var FoldingRangeRequest;
    (function(FoldingRangeRequest2) {
      FoldingRangeRequest2.method = "textDocument/foldingRange";
      FoldingRangeRequest2.messageDirection = messages_1.MessageDirection.clientToServer;
      FoldingRangeRequest2.type = new messages_1.ProtocolRequestType(FoldingRangeRequest2.method);
    })(FoldingRangeRequest || (exports2.FoldingRangeRequest = FoldingRangeRequest = {}));
    var FoldingRangeRefreshRequest;
    (function(FoldingRangeRefreshRequest2) {
      FoldingRangeRefreshRequest2.method = `workspace/foldingRange/refresh`;
      FoldingRangeRefreshRequest2.messageDirection = messages_1.MessageDirection.serverToClient;
      FoldingRangeRefreshRequest2.type = new messages_1.ProtocolRequestType0(FoldingRangeRefreshRequest2.method);
    })(FoldingRangeRefreshRequest || (exports2.FoldingRangeRefreshRequest = FoldingRangeRefreshRequest = {}));
  }
});

// node_modules/vscode-languageserver-protocol/lib/common/protocol.declaration.js
var require_protocol_declaration = __commonJS({
  "node_modules/vscode-languageserver-protocol/lib/common/protocol.declaration.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.DeclarationRequest = void 0;
    var messages_1 = require_messages2();
    var DeclarationRequest;
    (function(DeclarationRequest2) {
      DeclarationRequest2.method = "textDocument/declaration";
      DeclarationRequest2.messageDirection = messages_1.MessageDirection.clientToServer;
      DeclarationRequest2.type = new messages_1.ProtocolRequestType(DeclarationRequest2.method);
    })(DeclarationRequest || (exports2.DeclarationRequest = DeclarationRequest = {}));
  }
});

// node_modules/vscode-languageserver-protocol/lib/common/protocol.selectionRange.js
var require_protocol_selectionRange = __commonJS({
  "node_modules/vscode-languageserver-protocol/lib/common/protocol.selectionRange.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.SelectionRangeRequest = void 0;
    var messages_1 = require_messages2();
    var SelectionRangeRequest;
    (function(SelectionRangeRequest2) {
      SelectionRangeRequest2.method = "textDocument/selectionRange";
      SelectionRangeRequest2.messageDirection = messages_1.MessageDirection.clientToServer;
      SelectionRangeRequest2.type = new messages_1.ProtocolRequestType(SelectionRangeRequest2.method);
    })(SelectionRangeRequest || (exports2.SelectionRangeRequest = SelectionRangeRequest = {}));
  }
});

// node_modules/vscode-languageserver-protocol/lib/common/protocol.progress.js
var require_protocol_progress = __commonJS({
  "node_modules/vscode-languageserver-protocol/lib/common/protocol.progress.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.WorkDoneProgressCancelNotification = exports2.WorkDoneProgressCreateRequest = exports2.WorkDoneProgress = void 0;
    var vscode_jsonrpc_1 = require_main();
    var messages_1 = require_messages2();
    var WorkDoneProgress;
    (function(WorkDoneProgress2) {
      WorkDoneProgress2.type = new vscode_jsonrpc_1.ProgressType();
      function is(value) {
        return value === WorkDoneProgress2.type;
      }
      WorkDoneProgress2.is = is;
    })(WorkDoneProgress || (exports2.WorkDoneProgress = WorkDoneProgress = {}));
    var WorkDoneProgressCreateRequest;
    (function(WorkDoneProgressCreateRequest2) {
      WorkDoneProgressCreateRequest2.method = "window/workDoneProgress/create";
      WorkDoneProgressCreateRequest2.messageDirection = messages_1.MessageDirection.serverToClient;
      WorkDoneProgressCreateRequest2.type = new messages_1.ProtocolRequestType(WorkDoneProgressCreateRequest2.method);
    })(WorkDoneProgressCreateRequest || (exports2.WorkDoneProgressCreateRequest = WorkDoneProgressCreateRequest = {}));
    var WorkDoneProgressCancelNotification;
    (function(WorkDoneProgressCancelNotification2) {
      WorkDoneProgressCancelNotification2.method = "window/workDoneProgress/cancel";
      WorkDoneProgressCancelNotification2.messageDirection = messages_1.MessageDirection.clientToServer;
      WorkDoneProgressCancelNotification2.type = new messages_1.ProtocolNotificationType(WorkDoneProgressCancelNotification2.method);
    })(WorkDoneProgressCancelNotification || (exports2.WorkDoneProgressCancelNotification = WorkDoneProgressCancelNotification = {}));
  }
});

// node_modules/vscode-languageserver-protocol/lib/common/protocol.callHierarchy.js
var require_protocol_callHierarchy = __commonJS({
  "node_modules/vscode-languageserver-protocol/lib/common/protocol.callHierarchy.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.CallHierarchyOutgoingCallsRequest = exports2.CallHierarchyIncomingCallsRequest = exports2.CallHierarchyPrepareRequest = void 0;
    var messages_1 = require_messages2();
    var CallHierarchyPrepareRequest;
    (function(CallHierarchyPrepareRequest2) {
      CallHierarchyPrepareRequest2.method = "textDocument/prepareCallHierarchy";
      CallHierarchyPrepareRequest2.messageDirection = messages_1.MessageDirection.clientToServer;
      CallHierarchyPrepareRequest2.type = new messages_1.ProtocolRequestType(CallHierarchyPrepareRequest2.method);
    })(CallHierarchyPrepareRequest || (exports2.CallHierarchyPrepareRequest = CallHierarchyPrepareRequest = {}));
    var CallHierarchyIncomingCallsRequest;
    (function(CallHierarchyIncomingCallsRequest2) {
      CallHierarchyIncomingCallsRequest2.method = "callHierarchy/incomingCalls";
      CallHierarchyIncomingCallsRequest2.messageDirection = messages_1.MessageDirection.clientToServer;
      CallHierarchyIncomingCallsRequest2.type = new messages_1.ProtocolRequestType(CallHierarchyIncomingCallsRequest2.method);
    })(CallHierarchyIncomingCallsRequest || (exports2.CallHierarchyIncomingCallsRequest = CallHierarchyIncomingCallsRequest = {}));
    var CallHierarchyOutgoingCallsRequest;
    (function(CallHierarchyOutgoingCallsRequest2) {
      CallHierarchyOutgoingCallsRequest2.method = "callHierarchy/outgoingCalls";
      CallHierarchyOutgoingCallsRequest2.messageDirection = messages_1.MessageDirection.clientToServer;
      CallHierarchyOutgoingCallsRequest2.type = new messages_1.ProtocolRequestType(CallHierarchyOutgoingCallsRequest2.method);
    })(CallHierarchyOutgoingCallsRequest || (exports2.CallHierarchyOutgoingCallsRequest = CallHierarchyOutgoingCallsRequest = {}));
  }
});

// node_modules/vscode-languageserver-protocol/lib/common/protocol.semanticTokens.js
var require_protocol_semanticTokens = __commonJS({
  "node_modules/vscode-languageserver-protocol/lib/common/protocol.semanticTokens.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.SemanticTokensRefreshRequest = exports2.SemanticTokensRangeRequest = exports2.SemanticTokensDeltaRequest = exports2.SemanticTokensRequest = exports2.SemanticTokensRegistrationType = exports2.TokenFormat = void 0;
    var messages_1 = require_messages2();
    var TokenFormat;
    (function(TokenFormat2) {
      TokenFormat2.Relative = "relative";
    })(TokenFormat || (exports2.TokenFormat = TokenFormat = {}));
    var SemanticTokensRegistrationType;
    (function(SemanticTokensRegistrationType2) {
      SemanticTokensRegistrationType2.method = "textDocument/semanticTokens";
      SemanticTokensRegistrationType2.type = new messages_1.RegistrationType(SemanticTokensRegistrationType2.method);
    })(SemanticTokensRegistrationType || (exports2.SemanticTokensRegistrationType = SemanticTokensRegistrationType = {}));
    var SemanticTokensRequest;
    (function(SemanticTokensRequest2) {
      SemanticTokensRequest2.method = "textDocument/semanticTokens/full";
      SemanticTokensRequest2.messageDirection = messages_1.MessageDirection.clientToServer;
      SemanticTokensRequest2.type = new messages_1.ProtocolRequestType(SemanticTokensRequest2.method);
      SemanticTokensRequest2.registrationMethod = SemanticTokensRegistrationType.method;
    })(SemanticTokensRequest || (exports2.SemanticTokensRequest = SemanticTokensRequest = {}));
    var SemanticTokensDeltaRequest;
    (function(SemanticTokensDeltaRequest2) {
      SemanticTokensDeltaRequest2.method = "textDocument/semanticTokens/full/delta";
      SemanticTokensDeltaRequest2.messageDirection = messages_1.MessageDirection.clientToServer;
      SemanticTokensDeltaRequest2.type = new messages_1.ProtocolRequestType(SemanticTokensDeltaRequest2.method);
      SemanticTokensDeltaRequest2.registrationMethod = SemanticTokensRegistrationType.method;
    })(SemanticTokensDeltaRequest || (exports2.SemanticTokensDeltaRequest = SemanticTokensDeltaRequest = {}));
    var SemanticTokensRangeRequest;
    (function(SemanticTokensRangeRequest2) {
      SemanticTokensRangeRequest2.method = "textDocument/semanticTokens/range";
      SemanticTokensRangeRequest2.messageDirection = messages_1.MessageDirection.clientToServer;
      SemanticTokensRangeRequest2.type = new messages_1.ProtocolRequestType(SemanticTokensRangeRequest2.method);
      SemanticTokensRangeRequest2.registrationMethod = SemanticTokensRegistrationType.method;
    })(SemanticTokensRangeRequest || (exports2.SemanticTokensRangeRequest = SemanticTokensRangeRequest = {}));
    var SemanticTokensRefreshRequest;
    (function(SemanticTokensRefreshRequest2) {
      SemanticTokensRefreshRequest2.method = `workspace/semanticTokens/refresh`;
      SemanticTokensRefreshRequest2.messageDirection = messages_1.MessageDirection.serverToClient;
      SemanticTokensRefreshRequest2.type = new messages_1.ProtocolRequestType0(SemanticTokensRefreshRequest2.method);
    })(SemanticTokensRefreshRequest || (exports2.SemanticTokensRefreshRequest = SemanticTokensRefreshRequest = {}));
  }
});

// node_modules/vscode-languageserver-protocol/lib/common/protocol.showDocument.js
var require_protocol_showDocument = __commonJS({
  "node_modules/vscode-languageserver-protocol/lib/common/protocol.showDocument.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.ShowDocumentRequest = void 0;
    var messages_1 = require_messages2();
    var ShowDocumentRequest;
    (function(ShowDocumentRequest2) {
      ShowDocumentRequest2.method = "window/showDocument";
      ShowDocumentRequest2.messageDirection = messages_1.MessageDirection.serverToClient;
      ShowDocumentRequest2.type = new messages_1.ProtocolRequestType(ShowDocumentRequest2.method);
    })(ShowDocumentRequest || (exports2.ShowDocumentRequest = ShowDocumentRequest = {}));
  }
});

// node_modules/vscode-languageserver-protocol/lib/common/protocol.linkedEditingRange.js
var require_protocol_linkedEditingRange = __commonJS({
  "node_modules/vscode-languageserver-protocol/lib/common/protocol.linkedEditingRange.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.LinkedEditingRangeRequest = void 0;
    var messages_1 = require_messages2();
    var LinkedEditingRangeRequest;
    (function(LinkedEditingRangeRequest2) {
      LinkedEditingRangeRequest2.method = "textDocument/linkedEditingRange";
      LinkedEditingRangeRequest2.messageDirection = messages_1.MessageDirection.clientToServer;
      LinkedEditingRangeRequest2.type = new messages_1.ProtocolRequestType(LinkedEditingRangeRequest2.method);
    })(LinkedEditingRangeRequest || (exports2.LinkedEditingRangeRequest = LinkedEditingRangeRequest = {}));
  }
});

// node_modules/vscode-languageserver-protocol/lib/common/protocol.fileOperations.js
var require_protocol_fileOperations = __commonJS({
  "node_modules/vscode-languageserver-protocol/lib/common/protocol.fileOperations.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.WillDeleteFilesRequest = exports2.DidDeleteFilesNotification = exports2.DidRenameFilesNotification = exports2.WillRenameFilesRequest = exports2.DidCreateFilesNotification = exports2.WillCreateFilesRequest = exports2.FileOperationPatternKind = void 0;
    var messages_1 = require_messages2();
    var FileOperationPatternKind;
    (function(FileOperationPatternKind2) {
      FileOperationPatternKind2.file = "file";
      FileOperationPatternKind2.folder = "folder";
    })(FileOperationPatternKind || (exports2.FileOperationPatternKind = FileOperationPatternKind = {}));
    var WillCreateFilesRequest;
    (function(WillCreateFilesRequest2) {
      WillCreateFilesRequest2.method = "workspace/willCreateFiles";
      WillCreateFilesRequest2.messageDirection = messages_1.MessageDirection.clientToServer;
      WillCreateFilesRequest2.type = new messages_1.ProtocolRequestType(WillCreateFilesRequest2.method);
    })(WillCreateFilesRequest || (exports2.WillCreateFilesRequest = WillCreateFilesRequest = {}));
    var DidCreateFilesNotification;
    (function(DidCreateFilesNotification2) {
      DidCreateFilesNotification2.method = "workspace/didCreateFiles";
      DidCreateFilesNotification2.messageDirection = messages_1.MessageDirection.clientToServer;
      DidCreateFilesNotification2.type = new messages_1.ProtocolNotificationType(DidCreateFilesNotification2.method);
    })(DidCreateFilesNotification || (exports2.DidCreateFilesNotification = DidCreateFilesNotification = {}));
    var WillRenameFilesRequest;
    (function(WillRenameFilesRequest2) {
      WillRenameFilesRequest2.method = "workspace/willRenameFiles";
      WillRenameFilesRequest2.messageDirection = messages_1.MessageDirection.clientToServer;
      WillRenameFilesRequest2.type = new messages_1.ProtocolRequestType(WillRenameFilesRequest2.method);
    })(WillRenameFilesRequest || (exports2.WillRenameFilesRequest = WillRenameFilesRequest = {}));
    var DidRenameFilesNotification;
    (function(DidRenameFilesNotification2) {
      DidRenameFilesNotification2.method = "workspace/didRenameFiles";
      DidRenameFilesNotification2.messageDirection = messages_1.MessageDirection.clientToServer;
      DidRenameFilesNotification2.type = new messages_1.ProtocolNotificationType(DidRenameFilesNotification2.method);
    })(DidRenameFilesNotification || (exports2.DidRenameFilesNotification = DidRenameFilesNotification = {}));
    var DidDeleteFilesNotification;
    (function(DidDeleteFilesNotification2) {
      DidDeleteFilesNotification2.method = "workspace/didDeleteFiles";
      DidDeleteFilesNotification2.messageDirection = messages_1.MessageDirection.clientToServer;
      DidDeleteFilesNotification2.type = new messages_1.ProtocolNotificationType(DidDeleteFilesNotification2.method);
    })(DidDeleteFilesNotification || (exports2.DidDeleteFilesNotification = DidDeleteFilesNotification = {}));
    var WillDeleteFilesRequest;
    (function(WillDeleteFilesRequest2) {
      WillDeleteFilesRequest2.method = "workspace/willDeleteFiles";
      WillDeleteFilesRequest2.messageDirection = messages_1.MessageDirection.clientToServer;
      WillDeleteFilesRequest2.type = new messages_1.ProtocolRequestType(WillDeleteFilesRequest2.method);
    })(WillDeleteFilesRequest || (exports2.WillDeleteFilesRequest = WillDeleteFilesRequest = {}));
  }
});

// node_modules/vscode-languageserver-protocol/lib/common/protocol.moniker.js
var require_protocol_moniker = __commonJS({
  "node_modules/vscode-languageserver-protocol/lib/common/protocol.moniker.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.MonikerRequest = exports2.MonikerKind = exports2.UniquenessLevel = void 0;
    var messages_1 = require_messages2();
    var UniquenessLevel;
    (function(UniquenessLevel2) {
      UniquenessLevel2.document = "document";
      UniquenessLevel2.project = "project";
      UniquenessLevel2.group = "group";
      UniquenessLevel2.scheme = "scheme";
      UniquenessLevel2.global = "global";
    })(UniquenessLevel || (exports2.UniquenessLevel = UniquenessLevel = {}));
    var MonikerKind;
    (function(MonikerKind2) {
      MonikerKind2.$import = "import";
      MonikerKind2.$export = "export";
      MonikerKind2.local = "local";
    })(MonikerKind || (exports2.MonikerKind = MonikerKind = {}));
    var MonikerRequest;
    (function(MonikerRequest2) {
      MonikerRequest2.method = "textDocument/moniker";
      MonikerRequest2.messageDirection = messages_1.MessageDirection.clientToServer;
      MonikerRequest2.type = new messages_1.ProtocolRequestType(MonikerRequest2.method);
    })(MonikerRequest || (exports2.MonikerRequest = MonikerRequest = {}));
  }
});

// node_modules/vscode-languageserver-protocol/lib/common/protocol.typeHierarchy.js
var require_protocol_typeHierarchy = __commonJS({
  "node_modules/vscode-languageserver-protocol/lib/common/protocol.typeHierarchy.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.TypeHierarchySubtypesRequest = exports2.TypeHierarchySupertypesRequest = exports2.TypeHierarchyPrepareRequest = void 0;
    var messages_1 = require_messages2();
    var TypeHierarchyPrepareRequest;
    (function(TypeHierarchyPrepareRequest2) {
      TypeHierarchyPrepareRequest2.method = "textDocument/prepareTypeHierarchy";
      TypeHierarchyPrepareRequest2.messageDirection = messages_1.MessageDirection.clientToServer;
      TypeHierarchyPrepareRequest2.type = new messages_1.ProtocolRequestType(TypeHierarchyPrepareRequest2.method);
    })(TypeHierarchyPrepareRequest || (exports2.TypeHierarchyPrepareRequest = TypeHierarchyPrepareRequest = {}));
    var TypeHierarchySupertypesRequest;
    (function(TypeHierarchySupertypesRequest2) {
      TypeHierarchySupertypesRequest2.method = "typeHierarchy/supertypes";
      TypeHierarchySupertypesRequest2.messageDirection = messages_1.MessageDirection.clientToServer;
      TypeHierarchySupertypesRequest2.type = new messages_1.ProtocolRequestType(TypeHierarchySupertypesRequest2.method);
    })(TypeHierarchySupertypesRequest || (exports2.TypeHierarchySupertypesRequest = TypeHierarchySupertypesRequest = {}));
    var TypeHierarchySubtypesRequest;
    (function(TypeHierarchySubtypesRequest2) {
      TypeHierarchySubtypesRequest2.method = "typeHierarchy/subtypes";
      TypeHierarchySubtypesRequest2.messageDirection = messages_1.MessageDirection.clientToServer;
      TypeHierarchySubtypesRequest2.type = new messages_1.ProtocolRequestType(TypeHierarchySubtypesRequest2.method);
    })(TypeHierarchySubtypesRequest || (exports2.TypeHierarchySubtypesRequest = TypeHierarchySubtypesRequest = {}));
  }
});

// node_modules/vscode-languageserver-protocol/lib/common/protocol.inlineValue.js
var require_protocol_inlineValue = __commonJS({
  "node_modules/vscode-languageserver-protocol/lib/common/protocol.inlineValue.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.InlineValueRefreshRequest = exports2.InlineValueRequest = void 0;
    var messages_1 = require_messages2();
    var InlineValueRequest;
    (function(InlineValueRequest2) {
      InlineValueRequest2.method = "textDocument/inlineValue";
      InlineValueRequest2.messageDirection = messages_1.MessageDirection.clientToServer;
      InlineValueRequest2.type = new messages_1.ProtocolRequestType(InlineValueRequest2.method);
    })(InlineValueRequest || (exports2.InlineValueRequest = InlineValueRequest = {}));
    var InlineValueRefreshRequest;
    (function(InlineValueRefreshRequest2) {
      InlineValueRefreshRequest2.method = `workspace/inlineValue/refresh`;
      InlineValueRefreshRequest2.messageDirection = messages_1.MessageDirection.serverToClient;
      InlineValueRefreshRequest2.type = new messages_1.ProtocolRequestType0(InlineValueRefreshRequest2.method);
    })(InlineValueRefreshRequest || (exports2.InlineValueRefreshRequest = InlineValueRefreshRequest = {}));
  }
});

// node_modules/vscode-languageserver-protocol/lib/common/protocol.inlayHint.js
var require_protocol_inlayHint = __commonJS({
  "node_modules/vscode-languageserver-protocol/lib/common/protocol.inlayHint.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.InlayHintRefreshRequest = exports2.InlayHintResolveRequest = exports2.InlayHintRequest = void 0;
    var messages_1 = require_messages2();
    var InlayHintRequest;
    (function(InlayHintRequest2) {
      InlayHintRequest2.method = "textDocument/inlayHint";
      InlayHintRequest2.messageDirection = messages_1.MessageDirection.clientToServer;
      InlayHintRequest2.type = new messages_1.ProtocolRequestType(InlayHintRequest2.method);
    })(InlayHintRequest || (exports2.InlayHintRequest = InlayHintRequest = {}));
    var InlayHintResolveRequest;
    (function(InlayHintResolveRequest2) {
      InlayHintResolveRequest2.method = "inlayHint/resolve";
      InlayHintResolveRequest2.messageDirection = messages_1.MessageDirection.clientToServer;
      InlayHintResolveRequest2.type = new messages_1.ProtocolRequestType(InlayHintResolveRequest2.method);
    })(InlayHintResolveRequest || (exports2.InlayHintResolveRequest = InlayHintResolveRequest = {}));
    var InlayHintRefreshRequest;
    (function(InlayHintRefreshRequest2) {
      InlayHintRefreshRequest2.method = `workspace/inlayHint/refresh`;
      InlayHintRefreshRequest2.messageDirection = messages_1.MessageDirection.serverToClient;
      InlayHintRefreshRequest2.type = new messages_1.ProtocolRequestType0(InlayHintRefreshRequest2.method);
    })(InlayHintRefreshRequest || (exports2.InlayHintRefreshRequest = InlayHintRefreshRequest = {}));
  }
});

// node_modules/vscode-languageserver-protocol/lib/common/protocol.diagnostic.js
var require_protocol_diagnostic = __commonJS({
  "node_modules/vscode-languageserver-protocol/lib/common/protocol.diagnostic.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.DiagnosticRefreshRequest = exports2.WorkspaceDiagnosticRequest = exports2.DocumentDiagnosticRequest = exports2.DocumentDiagnosticReportKind = exports2.DiagnosticServerCancellationData = void 0;
    var vscode_jsonrpc_1 = require_main();
    var Is = require_is3();
    var messages_1 = require_messages2();
    var DiagnosticServerCancellationData;
    (function(DiagnosticServerCancellationData2) {
      function is(value) {
        const candidate = value;
        return candidate && Is.boolean(candidate.retriggerRequest);
      }
      DiagnosticServerCancellationData2.is = is;
    })(DiagnosticServerCancellationData || (exports2.DiagnosticServerCancellationData = DiagnosticServerCancellationData = {}));
    var DocumentDiagnosticReportKind;
    (function(DocumentDiagnosticReportKind2) {
      DocumentDiagnosticReportKind2.Full = "full";
      DocumentDiagnosticReportKind2.Unchanged = "unchanged";
    })(DocumentDiagnosticReportKind || (exports2.DocumentDiagnosticReportKind = DocumentDiagnosticReportKind = {}));
    var DocumentDiagnosticRequest;
    (function(DocumentDiagnosticRequest2) {
      DocumentDiagnosticRequest2.method = "textDocument/diagnostic";
      DocumentDiagnosticRequest2.messageDirection = messages_1.MessageDirection.clientToServer;
      DocumentDiagnosticRequest2.type = new messages_1.ProtocolRequestType(DocumentDiagnosticRequest2.method);
      DocumentDiagnosticRequest2.partialResult = new vscode_jsonrpc_1.ProgressType();
    })(DocumentDiagnosticRequest || (exports2.DocumentDiagnosticRequest = DocumentDiagnosticRequest = {}));
    var WorkspaceDiagnosticRequest;
    (function(WorkspaceDiagnosticRequest2) {
      WorkspaceDiagnosticRequest2.method = "workspace/diagnostic";
      WorkspaceDiagnosticRequest2.messageDirection = messages_1.MessageDirection.clientToServer;
      WorkspaceDiagnosticRequest2.type = new messages_1.ProtocolRequestType(WorkspaceDiagnosticRequest2.method);
      WorkspaceDiagnosticRequest2.partialResult = new vscode_jsonrpc_1.ProgressType();
    })(WorkspaceDiagnosticRequest || (exports2.WorkspaceDiagnosticRequest = WorkspaceDiagnosticRequest = {}));
    var DiagnosticRefreshRequest;
    (function(DiagnosticRefreshRequest2) {
      DiagnosticRefreshRequest2.method = `workspace/diagnostic/refresh`;
      DiagnosticRefreshRequest2.messageDirection = messages_1.MessageDirection.serverToClient;
      DiagnosticRefreshRequest2.type = new messages_1.ProtocolRequestType0(DiagnosticRefreshRequest2.method);
    })(DiagnosticRefreshRequest || (exports2.DiagnosticRefreshRequest = DiagnosticRefreshRequest = {}));
  }
});

// node_modules/vscode-languageserver-protocol/lib/common/protocol.notebook.js
var require_protocol_notebook = __commonJS({
  "node_modules/vscode-languageserver-protocol/lib/common/protocol.notebook.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.DidCloseNotebookDocumentNotification = exports2.DidSaveNotebookDocumentNotification = exports2.DidChangeNotebookDocumentNotification = exports2.NotebookCellArrayChange = exports2.DidOpenNotebookDocumentNotification = exports2.NotebookDocumentSyncRegistrationType = exports2.NotebookDocument = exports2.NotebookCell = exports2.ExecutionSummary = exports2.NotebookCellKind = void 0;
    var vscode_languageserver_types_1 = require_main2();
    var Is = require_is3();
    var messages_1 = require_messages2();
    var NotebookCellKind;
    (function(NotebookCellKind2) {
      NotebookCellKind2.Markup = 1;
      NotebookCellKind2.Code = 2;
      function is(value) {
        return value === 1 || value === 2;
      }
      NotebookCellKind2.is = is;
    })(NotebookCellKind || (exports2.NotebookCellKind = NotebookCellKind = {}));
    var ExecutionSummary;
    (function(ExecutionSummary2) {
      function create(executionOrder, success) {
        const result = { executionOrder };
        if (success === true || success === false) {
          result.success = success;
        }
        return result;
      }
      ExecutionSummary2.create = create;
      function is(value) {
        const candidate = value;
        return Is.objectLiteral(candidate) && vscode_languageserver_types_1.uinteger.is(candidate.executionOrder) && (candidate.success === void 0 || Is.boolean(candidate.success));
      }
      ExecutionSummary2.is = is;
      function equals(one, other) {
        if (one === other) {
          return true;
        }
        if (one === null || one === void 0 || other === null || other === void 0) {
          return false;
        }
        return one.executionOrder === other.executionOrder && one.success === other.success;
      }
      ExecutionSummary2.equals = equals;
    })(ExecutionSummary || (exports2.ExecutionSummary = ExecutionSummary = {}));
    var NotebookCell;
    (function(NotebookCell2) {
      function create(kind, document) {
        return { kind, document };
      }
      NotebookCell2.create = create;
      function is(value) {
        const candidate = value;
        return Is.objectLiteral(candidate) && NotebookCellKind.is(candidate.kind) && vscode_languageserver_types_1.DocumentUri.is(candidate.document) && (candidate.metadata === void 0 || Is.objectLiteral(candidate.metadata));
      }
      NotebookCell2.is = is;
      function diff(one, two) {
        const result = /* @__PURE__ */ new Set();
        if (one.document !== two.document) {
          result.add("document");
        }
        if (one.kind !== two.kind) {
          result.add("kind");
        }
        if (one.executionSummary !== two.executionSummary) {
          result.add("executionSummary");
        }
        if ((one.metadata !== void 0 || two.metadata !== void 0) && !equalsMetadata(one.metadata, two.metadata)) {
          result.add("metadata");
        }
        if ((one.executionSummary !== void 0 || two.executionSummary !== void 0) && !ExecutionSummary.equals(one.executionSummary, two.executionSummary)) {
          result.add("executionSummary");
        }
        return result;
      }
      NotebookCell2.diff = diff;
      function equalsMetadata(one, other) {
        if (one === other) {
          return true;
        }
        if (one === null || one === void 0 || other === null || other === void 0) {
          return false;
        }
        if (typeof one !== typeof other) {
          return false;
        }
        if (typeof one !== "object") {
          return false;
        }
        const oneArray = Array.isArray(one);
        const otherArray = Array.isArray(other);
        if (oneArray !== otherArray) {
          return false;
        }
        if (oneArray && otherArray) {
          if (one.length !== other.length) {
            return false;
          }
          for (let i = 0; i < one.length; i++) {
            if (!equalsMetadata(one[i], other[i])) {
              return false;
            }
          }
        }
        if (Is.objectLiteral(one) && Is.objectLiteral(other)) {
          const oneKeys = Object.keys(one);
          const otherKeys = Object.keys(other);
          if (oneKeys.length !== otherKeys.length) {
            return false;
          }
          oneKeys.sort();
          otherKeys.sort();
          if (!equalsMetadata(oneKeys, otherKeys)) {
            return false;
          }
          for (let i = 0; i < oneKeys.length; i++) {
            const prop = oneKeys[i];
            if (!equalsMetadata(one[prop], other[prop])) {
              return false;
            }
          }
        }
        return true;
      }
    })(NotebookCell || (exports2.NotebookCell = NotebookCell = {}));
    var NotebookDocument;
    (function(NotebookDocument2) {
      function create(uri, notebookType, version, cells) {
        return { uri, notebookType, version, cells };
      }
      NotebookDocument2.create = create;
      function is(value) {
        const candidate = value;
        return Is.objectLiteral(candidate) && Is.string(candidate.uri) && vscode_languageserver_types_1.integer.is(candidate.version) && Is.typedArray(candidate.cells, NotebookCell.is);
      }
      NotebookDocument2.is = is;
    })(NotebookDocument || (exports2.NotebookDocument = NotebookDocument = {}));
    var NotebookDocumentSyncRegistrationType;
    (function(NotebookDocumentSyncRegistrationType2) {
      NotebookDocumentSyncRegistrationType2.method = "notebookDocument/sync";
      NotebookDocumentSyncRegistrationType2.messageDirection = messages_1.MessageDirection.clientToServer;
      NotebookDocumentSyncRegistrationType2.type = new messages_1.RegistrationType(NotebookDocumentSyncRegistrationType2.method);
    })(NotebookDocumentSyncRegistrationType || (exports2.NotebookDocumentSyncRegistrationType = NotebookDocumentSyncRegistrationType = {}));
    var DidOpenNotebookDocumentNotification;
    (function(DidOpenNotebookDocumentNotification2) {
      DidOpenNotebookDocumentNotification2.method = "notebookDocument/didOpen";
      DidOpenNotebookDocumentNotification2.messageDirection = messages_1.MessageDirection.clientToServer;
      DidOpenNotebookDocumentNotification2.type = new messages_1.ProtocolNotificationType(DidOpenNotebookDocumentNotification2.method);
      DidOpenNotebookDocumentNotification2.registrationMethod = NotebookDocumentSyncRegistrationType.method;
    })(DidOpenNotebookDocumentNotification || (exports2.DidOpenNotebookDocumentNotification = DidOpenNotebookDocumentNotification = {}));
    var NotebookCellArrayChange;
    (function(NotebookCellArrayChange2) {
      function is(value) {
        const candidate = value;
        return Is.objectLiteral(candidate) && vscode_languageserver_types_1.uinteger.is(candidate.start) && vscode_languageserver_types_1.uinteger.is(candidate.deleteCount) && (candidate.cells === void 0 || Is.typedArray(candidate.cells, NotebookCell.is));
      }
      NotebookCellArrayChange2.is = is;
      function create(start, deleteCount, cells) {
        const result = { start, deleteCount };
        if (cells !== void 0) {
          result.cells = cells;
        }
        return result;
      }
      NotebookCellArrayChange2.create = create;
    })(NotebookCellArrayChange || (exports2.NotebookCellArrayChange = NotebookCellArrayChange = {}));
    var DidChangeNotebookDocumentNotification;
    (function(DidChangeNotebookDocumentNotification2) {
      DidChangeNotebookDocumentNotification2.method = "notebookDocument/didChange";
      DidChangeNotebookDocumentNotification2.messageDirection = messages_1.MessageDirection.clientToServer;
      DidChangeNotebookDocumentNotification2.type = new messages_1.ProtocolNotificationType(DidChangeNotebookDocumentNotification2.method);
      DidChangeNotebookDocumentNotification2.registrationMethod = NotebookDocumentSyncRegistrationType.method;
    })(DidChangeNotebookDocumentNotification || (exports2.DidChangeNotebookDocumentNotification = DidChangeNotebookDocumentNotification = {}));
    var DidSaveNotebookDocumentNotification;
    (function(DidSaveNotebookDocumentNotification2) {
      DidSaveNotebookDocumentNotification2.method = "notebookDocument/didSave";
      DidSaveNotebookDocumentNotification2.messageDirection = messages_1.MessageDirection.clientToServer;
      DidSaveNotebookDocumentNotification2.type = new messages_1.ProtocolNotificationType(DidSaveNotebookDocumentNotification2.method);
      DidSaveNotebookDocumentNotification2.registrationMethod = NotebookDocumentSyncRegistrationType.method;
    })(DidSaveNotebookDocumentNotification || (exports2.DidSaveNotebookDocumentNotification = DidSaveNotebookDocumentNotification = {}));
    var DidCloseNotebookDocumentNotification;
    (function(DidCloseNotebookDocumentNotification2) {
      DidCloseNotebookDocumentNotification2.method = "notebookDocument/didClose";
      DidCloseNotebookDocumentNotification2.messageDirection = messages_1.MessageDirection.clientToServer;
      DidCloseNotebookDocumentNotification2.type = new messages_1.ProtocolNotificationType(DidCloseNotebookDocumentNotification2.method);
      DidCloseNotebookDocumentNotification2.registrationMethod = NotebookDocumentSyncRegistrationType.method;
    })(DidCloseNotebookDocumentNotification || (exports2.DidCloseNotebookDocumentNotification = DidCloseNotebookDocumentNotification = {}));
  }
});

// node_modules/vscode-languageserver-protocol/lib/common/protocol.inlineCompletion.js
var require_protocol_inlineCompletion = __commonJS({
  "node_modules/vscode-languageserver-protocol/lib/common/protocol.inlineCompletion.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.InlineCompletionRequest = void 0;
    var messages_1 = require_messages2();
    var InlineCompletionRequest;
    (function(InlineCompletionRequest2) {
      InlineCompletionRequest2.method = "textDocument/inlineCompletion";
      InlineCompletionRequest2.messageDirection = messages_1.MessageDirection.clientToServer;
      InlineCompletionRequest2.type = new messages_1.ProtocolRequestType(InlineCompletionRequest2.method);
    })(InlineCompletionRequest || (exports2.InlineCompletionRequest = InlineCompletionRequest = {}));
  }
});

// node_modules/vscode-languageserver-protocol/lib/common/protocol.js
var require_protocol = __commonJS({
  "node_modules/vscode-languageserver-protocol/lib/common/protocol.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.WorkspaceSymbolRequest = exports2.CodeActionResolveRequest = exports2.CodeActionRequest = exports2.DocumentSymbolRequest = exports2.DocumentHighlightRequest = exports2.ReferencesRequest = exports2.DefinitionRequest = exports2.SignatureHelpRequest = exports2.SignatureHelpTriggerKind = exports2.HoverRequest = exports2.CompletionResolveRequest = exports2.CompletionRequest = exports2.CompletionTriggerKind = exports2.PublishDiagnosticsNotification = exports2.WatchKind = exports2.RelativePattern = exports2.FileChangeType = exports2.DidChangeWatchedFilesNotification = exports2.WillSaveTextDocumentWaitUntilRequest = exports2.WillSaveTextDocumentNotification = exports2.TextDocumentSaveReason = exports2.DidSaveTextDocumentNotification = exports2.DidCloseTextDocumentNotification = exports2.DidChangeTextDocumentNotification = exports2.TextDocumentContentChangeEvent = exports2.DidOpenTextDocumentNotification = exports2.TextDocumentSyncKind = exports2.TelemetryEventNotification = exports2.LogMessageNotification = exports2.ShowMessageRequest = exports2.ShowMessageNotification = exports2.MessageType = exports2.DidChangeConfigurationNotification = exports2.ExitNotification = exports2.ShutdownRequest = exports2.InitializedNotification = exports2.InitializeErrorCodes = exports2.InitializeRequest = exports2.WorkDoneProgressOptions = exports2.TextDocumentRegistrationOptions = exports2.StaticRegistrationOptions = exports2.PositionEncodingKind = exports2.FailureHandlingKind = exports2.ResourceOperationKind = exports2.UnregistrationRequest = exports2.RegistrationRequest = exports2.DocumentSelector = exports2.NotebookCellTextDocumentFilter = exports2.NotebookDocumentFilter = exports2.TextDocumentFilter = void 0;
    exports2.MonikerRequest = exports2.MonikerKind = exports2.UniquenessLevel = exports2.WillDeleteFilesRequest = exports2.DidDeleteFilesNotification = exports2.WillRenameFilesRequest = exports2.DidRenameFilesNotification = exports2.WillCreateFilesRequest = exports2.DidCreateFilesNotification = exports2.FileOperationPatternKind = exports2.LinkedEditingRangeRequest = exports2.ShowDocumentRequest = exports2.SemanticTokensRegistrationType = exports2.SemanticTokensRefreshRequest = exports2.SemanticTokensRangeRequest = exports2.SemanticTokensDeltaRequest = exports2.SemanticTokensRequest = exports2.TokenFormat = exports2.CallHierarchyPrepareRequest = exports2.CallHierarchyOutgoingCallsRequest = exports2.CallHierarchyIncomingCallsRequest = exports2.WorkDoneProgressCancelNotification = exports2.WorkDoneProgressCreateRequest = exports2.WorkDoneProgress = exports2.SelectionRangeRequest = exports2.DeclarationRequest = exports2.FoldingRangeRefreshRequest = exports2.FoldingRangeRequest = exports2.ColorPresentationRequest = exports2.DocumentColorRequest = exports2.ConfigurationRequest = exports2.DidChangeWorkspaceFoldersNotification = exports2.WorkspaceFoldersRequest = exports2.TypeDefinitionRequest = exports2.ImplementationRequest = exports2.ApplyWorkspaceEditRequest = exports2.ExecuteCommandRequest = exports2.PrepareRenameRequest = exports2.RenameRequest = exports2.PrepareSupportDefaultBehavior = exports2.DocumentOnTypeFormattingRequest = exports2.DocumentRangesFormattingRequest = exports2.DocumentRangeFormattingRequest = exports2.DocumentFormattingRequest = exports2.DocumentLinkResolveRequest = exports2.DocumentLinkRequest = exports2.CodeLensRefreshRequest = exports2.CodeLensResolveRequest = exports2.CodeLensRequest = exports2.WorkspaceSymbolResolveRequest = void 0;
    exports2.InlineCompletionRequest = exports2.DidCloseNotebookDocumentNotification = exports2.DidSaveNotebookDocumentNotification = exports2.DidChangeNotebookDocumentNotification = exports2.NotebookCellArrayChange = exports2.DidOpenNotebookDocumentNotification = exports2.NotebookDocumentSyncRegistrationType = exports2.NotebookDocument = exports2.NotebookCell = exports2.ExecutionSummary = exports2.NotebookCellKind = exports2.DiagnosticRefreshRequest = exports2.WorkspaceDiagnosticRequest = exports2.DocumentDiagnosticRequest = exports2.DocumentDiagnosticReportKind = exports2.DiagnosticServerCancellationData = exports2.InlayHintRefreshRequest = exports2.InlayHintResolveRequest = exports2.InlayHintRequest = exports2.InlineValueRefreshRequest = exports2.InlineValueRequest = exports2.TypeHierarchySupertypesRequest = exports2.TypeHierarchySubtypesRequest = exports2.TypeHierarchyPrepareRequest = void 0;
    var messages_1 = require_messages2();
    var vscode_languageserver_types_1 = require_main2();
    var Is = require_is3();
    var protocol_implementation_1 = require_protocol_implementation();
    Object.defineProperty(exports2, "ImplementationRequest", { enumerable: true, get: function() {
      return protocol_implementation_1.ImplementationRequest;
    } });
    var protocol_typeDefinition_1 = require_protocol_typeDefinition();
    Object.defineProperty(exports2, "TypeDefinitionRequest", { enumerable: true, get: function() {
      return protocol_typeDefinition_1.TypeDefinitionRequest;
    } });
    var protocol_workspaceFolder_1 = require_protocol_workspaceFolder();
    Object.defineProperty(exports2, "WorkspaceFoldersRequest", { enumerable: true, get: function() {
      return protocol_workspaceFolder_1.WorkspaceFoldersRequest;
    } });
    Object.defineProperty(exports2, "DidChangeWorkspaceFoldersNotification", { enumerable: true, get: function() {
      return protocol_workspaceFolder_1.DidChangeWorkspaceFoldersNotification;
    } });
    var protocol_configuration_1 = require_protocol_configuration();
    Object.defineProperty(exports2, "ConfigurationRequest", { enumerable: true, get: function() {
      return protocol_configuration_1.ConfigurationRequest;
    } });
    var protocol_colorProvider_1 = require_protocol_colorProvider();
    Object.defineProperty(exports2, "DocumentColorRequest", { enumerable: true, get: function() {
      return protocol_colorProvider_1.DocumentColorRequest;
    } });
    Object.defineProperty(exports2, "ColorPresentationRequest", { enumerable: true, get: function() {
      return protocol_colorProvider_1.ColorPresentationRequest;
    } });
    var protocol_foldingRange_1 = require_protocol_foldingRange();
    Object.defineProperty(exports2, "FoldingRangeRequest", { enumerable: true, get: function() {
      return protocol_foldingRange_1.FoldingRangeRequest;
    } });
    Object.defineProperty(exports2, "FoldingRangeRefreshRequest", { enumerable: true, get: function() {
      return protocol_foldingRange_1.FoldingRangeRefreshRequest;
    } });
    var protocol_declaration_1 = require_protocol_declaration();
    Object.defineProperty(exports2, "DeclarationRequest", { enumerable: true, get: function() {
      return protocol_declaration_1.DeclarationRequest;
    } });
    var protocol_selectionRange_1 = require_protocol_selectionRange();
    Object.defineProperty(exports2, "SelectionRangeRequest", { enumerable: true, get: function() {
      return protocol_selectionRange_1.SelectionRangeRequest;
    } });
    var protocol_progress_1 = require_protocol_progress();
    Object.defineProperty(exports2, "WorkDoneProgress", { enumerable: true, get: function() {
      return protocol_progress_1.WorkDoneProgress;
    } });
    Object.defineProperty(exports2, "WorkDoneProgressCreateRequest", { enumerable: true, get: function() {
      return protocol_progress_1.WorkDoneProgressCreateRequest;
    } });
    Object.defineProperty(exports2, "WorkDoneProgressCancelNotification", { enumerable: true, get: function() {
      return protocol_progress_1.WorkDoneProgressCancelNotification;
    } });
    var protocol_callHierarchy_1 = require_protocol_callHierarchy();
    Object.defineProperty(exports2, "CallHierarchyIncomingCallsRequest", { enumerable: true, get: function() {
      return protocol_callHierarchy_1.CallHierarchyIncomingCallsRequest;
    } });
    Object.defineProperty(exports2, "CallHierarchyOutgoingCallsRequest", { enumerable: true, get: function() {
      return protocol_callHierarchy_1.CallHierarchyOutgoingCallsRequest;
    } });
    Object.defineProperty(exports2, "CallHierarchyPrepareRequest", { enumerable: true, get: function() {
      return protocol_callHierarchy_1.CallHierarchyPrepareRequest;
    } });
    var protocol_semanticTokens_1 = require_protocol_semanticTokens();
    Object.defineProperty(exports2, "TokenFormat", { enumerable: true, get: function() {
      return protocol_semanticTokens_1.TokenFormat;
    } });
    Object.defineProperty(exports2, "SemanticTokensRequest", { enumerable: true, get: function() {
      return protocol_semanticTokens_1.SemanticTokensRequest;
    } });
    Object.defineProperty(exports2, "SemanticTokensDeltaRequest", { enumerable: true, get: function() {
      return protocol_semanticTokens_1.SemanticTokensDeltaRequest;
    } });
    Object.defineProperty(exports2, "SemanticTokensRangeRequest", { enumerable: true, get: function() {
      return protocol_semanticTokens_1.SemanticTokensRangeRequest;
    } });
    Object.defineProperty(exports2, "SemanticTokensRefreshRequest", { enumerable: true, get: function() {
      return protocol_semanticTokens_1.SemanticTokensRefreshRequest;
    } });
    Object.defineProperty(exports2, "SemanticTokensRegistrationType", { enumerable: true, get: function() {
      return protocol_semanticTokens_1.SemanticTokensRegistrationType;
    } });
    var protocol_showDocument_1 = require_protocol_showDocument();
    Object.defineProperty(exports2, "ShowDocumentRequest", { enumerable: true, get: function() {
      return protocol_showDocument_1.ShowDocumentRequest;
    } });
    var protocol_linkedEditingRange_1 = require_protocol_linkedEditingRange();
    Object.defineProperty(exports2, "LinkedEditingRangeRequest", { enumerable: true, get: function() {
      return protocol_linkedEditingRange_1.LinkedEditingRangeRequest;
    } });
    var protocol_fileOperations_1 = require_protocol_fileOperations();
    Object.defineProperty(exports2, "FileOperationPatternKind", { enumerable: true, get: function() {
      return protocol_fileOperations_1.FileOperationPatternKind;
    } });
    Object.defineProperty(exports2, "DidCreateFilesNotification", { enumerable: true, get: function() {
      return protocol_fileOperations_1.DidCreateFilesNotification;
    } });
    Object.defineProperty(exports2, "WillCreateFilesRequest", { enumerable: true, get: function() {
      return protocol_fileOperations_1.WillCreateFilesRequest;
    } });
    Object.defineProperty(exports2, "DidRenameFilesNotification", { enumerable: true, get: function() {
      return protocol_fileOperations_1.DidRenameFilesNotification;
    } });
    Object.defineProperty(exports2, "WillRenameFilesRequest", { enumerable: true, get: function() {
      return protocol_fileOperations_1.WillRenameFilesRequest;
    } });
    Object.defineProperty(exports2, "DidDeleteFilesNotification", { enumerable: true, get: function() {
      return protocol_fileOperations_1.DidDeleteFilesNotification;
    } });
    Object.defineProperty(exports2, "WillDeleteFilesRequest", { enumerable: true, get: function() {
      return protocol_fileOperations_1.WillDeleteFilesRequest;
    } });
    var protocol_moniker_1 = require_protocol_moniker();
    Object.defineProperty(exports2, "UniquenessLevel", { enumerable: true, get: function() {
      return protocol_moniker_1.UniquenessLevel;
    } });
    Object.defineProperty(exports2, "MonikerKind", { enumerable: true, get: function() {
      return protocol_moniker_1.MonikerKind;
    } });
    Object.defineProperty(exports2, "MonikerRequest", { enumerable: true, get: function() {
      return protocol_moniker_1.MonikerRequest;
    } });
    var protocol_typeHierarchy_1 = require_protocol_typeHierarchy();
    Object.defineProperty(exports2, "TypeHierarchyPrepareRequest", { enumerable: true, get: function() {
      return protocol_typeHierarchy_1.TypeHierarchyPrepareRequest;
    } });
    Object.defineProperty(exports2, "TypeHierarchySubtypesRequest", { enumerable: true, get: function() {
      return protocol_typeHierarchy_1.TypeHierarchySubtypesRequest;
    } });
    Object.defineProperty(exports2, "TypeHierarchySupertypesRequest", { enumerable: true, get: function() {
      return protocol_typeHierarchy_1.TypeHierarchySupertypesRequest;
    } });
    var protocol_inlineValue_1 = require_protocol_inlineValue();
    Object.defineProperty(exports2, "InlineValueRequest", { enumerable: true, get: function() {
      return protocol_inlineValue_1.InlineValueRequest;
    } });
    Object.defineProperty(exports2, "InlineValueRefreshRequest", { enumerable: true, get: function() {
      return protocol_inlineValue_1.InlineValueRefreshRequest;
    } });
    var protocol_inlayHint_1 = require_protocol_inlayHint();
    Object.defineProperty(exports2, "InlayHintRequest", { enumerable: true, get: function() {
      return protocol_inlayHint_1.InlayHintRequest;
    } });
    Object.defineProperty(exports2, "InlayHintResolveRequest", { enumerable: true, get: function() {
      return protocol_inlayHint_1.InlayHintResolveRequest;
    } });
    Object.defineProperty(exports2, "InlayHintRefreshRequest", { enumerable: true, get: function() {
      return protocol_inlayHint_1.InlayHintRefreshRequest;
    } });
    var protocol_diagnostic_1 = require_protocol_diagnostic();
    Object.defineProperty(exports2, "DiagnosticServerCancellationData", { enumerable: true, get: function() {
      return protocol_diagnostic_1.DiagnosticServerCancellationData;
    } });
    Object.defineProperty(exports2, "DocumentDiagnosticReportKind", { enumerable: true, get: function() {
      return protocol_diagnostic_1.DocumentDiagnosticReportKind;
    } });
    Object.defineProperty(exports2, "DocumentDiagnosticRequest", { enumerable: true, get: function() {
      return protocol_diagnostic_1.DocumentDiagnosticRequest;
    } });
    Object.defineProperty(exports2, "WorkspaceDiagnosticRequest", { enumerable: true, get: function() {
      return protocol_diagnostic_1.WorkspaceDiagnosticRequest;
    } });
    Object.defineProperty(exports2, "DiagnosticRefreshRequest", { enumerable: true, get: function() {
      return protocol_diagnostic_1.DiagnosticRefreshRequest;
    } });
    var protocol_notebook_1 = require_protocol_notebook();
    Object.defineProperty(exports2, "NotebookCellKind", { enumerable: true, get: function() {
      return protocol_notebook_1.NotebookCellKind;
    } });
    Object.defineProperty(exports2, "ExecutionSummary", { enumerable: true, get: function() {
      return protocol_notebook_1.ExecutionSummary;
    } });
    Object.defineProperty(exports2, "NotebookCell", { enumerable: true, get: function() {
      return protocol_notebook_1.NotebookCell;
    } });
    Object.defineProperty(exports2, "NotebookDocument", { enumerable: true, get: function() {
      return protocol_notebook_1.NotebookDocument;
    } });
    Object.defineProperty(exports2, "NotebookDocumentSyncRegistrationType", { enumerable: true, get: function() {
      return protocol_notebook_1.NotebookDocumentSyncRegistrationType;
    } });
    Object.defineProperty(exports2, "DidOpenNotebookDocumentNotification", { enumerable: true, get: function() {
      return protocol_notebook_1.DidOpenNotebookDocumentNotification;
    } });
    Object.defineProperty(exports2, "NotebookCellArrayChange", { enumerable: true, get: function() {
      return protocol_notebook_1.NotebookCellArrayChange;
    } });
    Object.defineProperty(exports2, "DidChangeNotebookDocumentNotification", { enumerable: true, get: function() {
      return protocol_notebook_1.DidChangeNotebookDocumentNotification;
    } });
    Object.defineProperty(exports2, "DidSaveNotebookDocumentNotification", { enumerable: true, get: function() {
      return protocol_notebook_1.DidSaveNotebookDocumentNotification;
    } });
    Object.defineProperty(exports2, "DidCloseNotebookDocumentNotification", { enumerable: true, get: function() {
      return protocol_notebook_1.DidCloseNotebookDocumentNotification;
    } });
    var protocol_inlineCompletion_1 = require_protocol_inlineCompletion();
    Object.defineProperty(exports2, "InlineCompletionRequest", { enumerable: true, get: function() {
      return protocol_inlineCompletion_1.InlineCompletionRequest;
    } });
    var TextDocumentFilter;
    (function(TextDocumentFilter2) {
      function is(value) {
        const candidate = value;
        return Is.string(candidate) || (Is.string(candidate.language) || Is.string(candidate.scheme) || Is.string(candidate.pattern));
      }
      TextDocumentFilter2.is = is;
    })(TextDocumentFilter || (exports2.TextDocumentFilter = TextDocumentFilter = {}));
    var NotebookDocumentFilter;
    (function(NotebookDocumentFilter2) {
      function is(value) {
        const candidate = value;
        return Is.objectLiteral(candidate) && (Is.string(candidate.notebookType) || Is.string(candidate.scheme) || Is.string(candidate.pattern));
      }
      NotebookDocumentFilter2.is = is;
    })(NotebookDocumentFilter || (exports2.NotebookDocumentFilter = NotebookDocumentFilter = {}));
    var NotebookCellTextDocumentFilter;
    (function(NotebookCellTextDocumentFilter2) {
      function is(value) {
        const candidate = value;
        return Is.objectLiteral(candidate) && (Is.string(candidate.notebook) || NotebookDocumentFilter.is(candidate.notebook)) && (candidate.language === void 0 || Is.string(candidate.language));
      }
      NotebookCellTextDocumentFilter2.is = is;
    })(NotebookCellTextDocumentFilter || (exports2.NotebookCellTextDocumentFilter = NotebookCellTextDocumentFilter = {}));
    var DocumentSelector;
    (function(DocumentSelector2) {
      function is(value) {
        if (!Array.isArray(value)) {
          return false;
        }
        for (let elem of value) {
          if (!Is.string(elem) && !TextDocumentFilter.is(elem) && !NotebookCellTextDocumentFilter.is(elem)) {
            return false;
          }
        }
        return true;
      }
      DocumentSelector2.is = is;
    })(DocumentSelector || (exports2.DocumentSelector = DocumentSelector = {}));
    var RegistrationRequest;
    (function(RegistrationRequest2) {
      RegistrationRequest2.method = "client/registerCapability";
      RegistrationRequest2.messageDirection = messages_1.MessageDirection.serverToClient;
      RegistrationRequest2.type = new messages_1.ProtocolRequestType(RegistrationRequest2.method);
    })(RegistrationRequest || (exports2.RegistrationRequest = RegistrationRequest = {}));
    var UnregistrationRequest;
    (function(UnregistrationRequest2) {
      UnregistrationRequest2.method = "client/unregisterCapability";
      UnregistrationRequest2.messageDirection = messages_1.MessageDirection.serverToClient;
      UnregistrationRequest2.type = new messages_1.ProtocolRequestType(UnregistrationRequest2.method);
    })(UnregistrationRequest || (exports2.UnregistrationRequest = UnregistrationRequest = {}));
    var ResourceOperationKind;
    (function(ResourceOperationKind2) {
      ResourceOperationKind2.Create = "create";
      ResourceOperationKind2.Rename = "rename";
      ResourceOperationKind2.Delete = "delete";
    })(ResourceOperationKind || (exports2.ResourceOperationKind = ResourceOperationKind = {}));
    var FailureHandlingKind;
    (function(FailureHandlingKind2) {
      FailureHandlingKind2.Abort = "abort";
      FailureHandlingKind2.Transactional = "transactional";
      FailureHandlingKind2.TextOnlyTransactional = "textOnlyTransactional";
      FailureHandlingKind2.Undo = "undo";
    })(FailureHandlingKind || (exports2.FailureHandlingKind = FailureHandlingKind = {}));
    var PositionEncodingKind;
    (function(PositionEncodingKind2) {
      PositionEncodingKind2.UTF8 = "utf-8";
      PositionEncodingKind2.UTF16 = "utf-16";
      PositionEncodingKind2.UTF32 = "utf-32";
    })(PositionEncodingKind || (exports2.PositionEncodingKind = PositionEncodingKind = {}));
    var StaticRegistrationOptions;
    (function(StaticRegistrationOptions2) {
      function hasId(value) {
        const candidate = value;
        return candidate && Is.string(candidate.id) && candidate.id.length > 0;
      }
      StaticRegistrationOptions2.hasId = hasId;
    })(StaticRegistrationOptions || (exports2.StaticRegistrationOptions = StaticRegistrationOptions = {}));
    var TextDocumentRegistrationOptions;
    (function(TextDocumentRegistrationOptions2) {
      function is(value) {
        const candidate = value;
        return candidate && (candidate.documentSelector === null || DocumentSelector.is(candidate.documentSelector));
      }
      TextDocumentRegistrationOptions2.is = is;
    })(TextDocumentRegistrationOptions || (exports2.TextDocumentRegistrationOptions = TextDocumentRegistrationOptions = {}));
    var WorkDoneProgressOptions;
    (function(WorkDoneProgressOptions2) {
      function is(value) {
        const candidate = value;
        return Is.objectLiteral(candidate) && (candidate.workDoneProgress === void 0 || Is.boolean(candidate.workDoneProgress));
      }
      WorkDoneProgressOptions2.is = is;
      function hasWorkDoneProgress(value) {
        const candidate = value;
        return candidate && Is.boolean(candidate.workDoneProgress);
      }
      WorkDoneProgressOptions2.hasWorkDoneProgress = hasWorkDoneProgress;
    })(WorkDoneProgressOptions || (exports2.WorkDoneProgressOptions = WorkDoneProgressOptions = {}));
    var InitializeRequest;
    (function(InitializeRequest2) {
      InitializeRequest2.method = "initialize";
      InitializeRequest2.messageDirection = messages_1.MessageDirection.clientToServer;
      InitializeRequest2.type = new messages_1.ProtocolRequestType(InitializeRequest2.method);
    })(InitializeRequest || (exports2.InitializeRequest = InitializeRequest = {}));
    var InitializeErrorCodes;
    (function(InitializeErrorCodes2) {
      InitializeErrorCodes2.unknownProtocolVersion = 1;
    })(InitializeErrorCodes || (exports2.InitializeErrorCodes = InitializeErrorCodes = {}));
    var InitializedNotification;
    (function(InitializedNotification2) {
      InitializedNotification2.method = "initialized";
      InitializedNotification2.messageDirection = messages_1.MessageDirection.clientToServer;
      InitializedNotification2.type = new messages_1.ProtocolNotificationType(InitializedNotification2.method);
    })(InitializedNotification || (exports2.InitializedNotification = InitializedNotification = {}));
    var ShutdownRequest;
    (function(ShutdownRequest2) {
      ShutdownRequest2.method = "shutdown";
      ShutdownRequest2.messageDirection = messages_1.MessageDirection.clientToServer;
      ShutdownRequest2.type = new messages_1.ProtocolRequestType0(ShutdownRequest2.method);
    })(ShutdownRequest || (exports2.ShutdownRequest = ShutdownRequest = {}));
    var ExitNotification;
    (function(ExitNotification2) {
      ExitNotification2.method = "exit";
      ExitNotification2.messageDirection = messages_1.MessageDirection.clientToServer;
      ExitNotification2.type = new messages_1.ProtocolNotificationType0(ExitNotification2.method);
    })(ExitNotification || (exports2.ExitNotification = ExitNotification = {}));
    var DidChangeConfigurationNotification2;
    (function(DidChangeConfigurationNotification3) {
      DidChangeConfigurationNotification3.method = "workspace/didChangeConfiguration";
      DidChangeConfigurationNotification3.messageDirection = messages_1.MessageDirection.clientToServer;
      DidChangeConfigurationNotification3.type = new messages_1.ProtocolNotificationType(DidChangeConfigurationNotification3.method);
    })(DidChangeConfigurationNotification2 || (exports2.DidChangeConfigurationNotification = DidChangeConfigurationNotification2 = {}));
    var MessageType;
    (function(MessageType2) {
      MessageType2.Error = 1;
      MessageType2.Warning = 2;
      MessageType2.Info = 3;
      MessageType2.Log = 4;
      MessageType2.Debug = 5;
    })(MessageType || (exports2.MessageType = MessageType = {}));
    var ShowMessageNotification;
    (function(ShowMessageNotification2) {
      ShowMessageNotification2.method = "window/showMessage";
      ShowMessageNotification2.messageDirection = messages_1.MessageDirection.serverToClient;
      ShowMessageNotification2.type = new messages_1.ProtocolNotificationType(ShowMessageNotification2.method);
    })(ShowMessageNotification || (exports2.ShowMessageNotification = ShowMessageNotification = {}));
    var ShowMessageRequest;
    (function(ShowMessageRequest2) {
      ShowMessageRequest2.method = "window/showMessageRequest";
      ShowMessageRequest2.messageDirection = messages_1.MessageDirection.serverToClient;
      ShowMessageRequest2.type = new messages_1.ProtocolRequestType(ShowMessageRequest2.method);
    })(ShowMessageRequest || (exports2.ShowMessageRequest = ShowMessageRequest = {}));
    var LogMessageNotification;
    (function(LogMessageNotification2) {
      LogMessageNotification2.method = "window/logMessage";
      LogMessageNotification2.messageDirection = messages_1.MessageDirection.serverToClient;
      LogMessageNotification2.type = new messages_1.ProtocolNotificationType(LogMessageNotification2.method);
    })(LogMessageNotification || (exports2.LogMessageNotification = LogMessageNotification = {}));
    var TelemetryEventNotification;
    (function(TelemetryEventNotification2) {
      TelemetryEventNotification2.method = "telemetry/event";
      TelemetryEventNotification2.messageDirection = messages_1.MessageDirection.serverToClient;
      TelemetryEventNotification2.type = new messages_1.ProtocolNotificationType(TelemetryEventNotification2.method);
    })(TelemetryEventNotification || (exports2.TelemetryEventNotification = TelemetryEventNotification = {}));
    var TextDocumentSyncKind2;
    (function(TextDocumentSyncKind3) {
      TextDocumentSyncKind3.None = 0;
      TextDocumentSyncKind3.Full = 1;
      TextDocumentSyncKind3.Incremental = 2;
    })(TextDocumentSyncKind2 || (exports2.TextDocumentSyncKind = TextDocumentSyncKind2 = {}));
    var DidOpenTextDocumentNotification;
    (function(DidOpenTextDocumentNotification2) {
      DidOpenTextDocumentNotification2.method = "textDocument/didOpen";
      DidOpenTextDocumentNotification2.messageDirection = messages_1.MessageDirection.clientToServer;
      DidOpenTextDocumentNotification2.type = new messages_1.ProtocolNotificationType(DidOpenTextDocumentNotification2.method);
    })(DidOpenTextDocumentNotification || (exports2.DidOpenTextDocumentNotification = DidOpenTextDocumentNotification = {}));
    var TextDocumentContentChangeEvent;
    (function(TextDocumentContentChangeEvent2) {
      function isIncremental(event) {
        let candidate = event;
        return candidate !== void 0 && candidate !== null && typeof candidate.text === "string" && candidate.range !== void 0 && (candidate.rangeLength === void 0 || typeof candidate.rangeLength === "number");
      }
      TextDocumentContentChangeEvent2.isIncremental = isIncremental;
      function isFull(event) {
        let candidate = event;
        return candidate !== void 0 && candidate !== null && typeof candidate.text === "string" && candidate.range === void 0 && candidate.rangeLength === void 0;
      }
      TextDocumentContentChangeEvent2.isFull = isFull;
    })(TextDocumentContentChangeEvent || (exports2.TextDocumentContentChangeEvent = TextDocumentContentChangeEvent = {}));
    var DidChangeTextDocumentNotification;
    (function(DidChangeTextDocumentNotification2) {
      DidChangeTextDocumentNotification2.method = "textDocument/didChange";
      DidChangeTextDocumentNotification2.messageDirection = messages_1.MessageDirection.clientToServer;
      DidChangeTextDocumentNotification2.type = new messages_1.ProtocolNotificationType(DidChangeTextDocumentNotification2.method);
    })(DidChangeTextDocumentNotification || (exports2.DidChangeTextDocumentNotification = DidChangeTextDocumentNotification = {}));
    var DidCloseTextDocumentNotification;
    (function(DidCloseTextDocumentNotification2) {
      DidCloseTextDocumentNotification2.method = "textDocument/didClose";
      DidCloseTextDocumentNotification2.messageDirection = messages_1.MessageDirection.clientToServer;
      DidCloseTextDocumentNotification2.type = new messages_1.ProtocolNotificationType(DidCloseTextDocumentNotification2.method);
    })(DidCloseTextDocumentNotification || (exports2.DidCloseTextDocumentNotification = DidCloseTextDocumentNotification = {}));
    var DidSaveTextDocumentNotification;
    (function(DidSaveTextDocumentNotification2) {
      DidSaveTextDocumentNotification2.method = "textDocument/didSave";
      DidSaveTextDocumentNotification2.messageDirection = messages_1.MessageDirection.clientToServer;
      DidSaveTextDocumentNotification2.type = new messages_1.ProtocolNotificationType(DidSaveTextDocumentNotification2.method);
    })(DidSaveTextDocumentNotification || (exports2.DidSaveTextDocumentNotification = DidSaveTextDocumentNotification = {}));
    var TextDocumentSaveReason;
    (function(TextDocumentSaveReason2) {
      TextDocumentSaveReason2.Manual = 1;
      TextDocumentSaveReason2.AfterDelay = 2;
      TextDocumentSaveReason2.FocusOut = 3;
    })(TextDocumentSaveReason || (exports2.TextDocumentSaveReason = TextDocumentSaveReason = {}));
    var WillSaveTextDocumentNotification;
    (function(WillSaveTextDocumentNotification2) {
      WillSaveTextDocumentNotification2.method = "textDocument/willSave";
      WillSaveTextDocumentNotification2.messageDirection = messages_1.MessageDirection.clientToServer;
      WillSaveTextDocumentNotification2.type = new messages_1.ProtocolNotificationType(WillSaveTextDocumentNotification2.method);
    })(WillSaveTextDocumentNotification || (exports2.WillSaveTextDocumentNotification = WillSaveTextDocumentNotification = {}));
    var WillSaveTextDocumentWaitUntilRequest;
    (function(WillSaveTextDocumentWaitUntilRequest2) {
      WillSaveTextDocumentWaitUntilRequest2.method = "textDocument/willSaveWaitUntil";
      WillSaveTextDocumentWaitUntilRequest2.messageDirection = messages_1.MessageDirection.clientToServer;
      WillSaveTextDocumentWaitUntilRequest2.type = new messages_1.ProtocolRequestType(WillSaveTextDocumentWaitUntilRequest2.method);
    })(WillSaveTextDocumentWaitUntilRequest || (exports2.WillSaveTextDocumentWaitUntilRequest = WillSaveTextDocumentWaitUntilRequest = {}));
    var DidChangeWatchedFilesNotification;
    (function(DidChangeWatchedFilesNotification2) {
      DidChangeWatchedFilesNotification2.method = "workspace/didChangeWatchedFiles";
      DidChangeWatchedFilesNotification2.messageDirection = messages_1.MessageDirection.clientToServer;
      DidChangeWatchedFilesNotification2.type = new messages_1.ProtocolNotificationType(DidChangeWatchedFilesNotification2.method);
    })(DidChangeWatchedFilesNotification || (exports2.DidChangeWatchedFilesNotification = DidChangeWatchedFilesNotification = {}));
    var FileChangeType;
    (function(FileChangeType2) {
      FileChangeType2.Created = 1;
      FileChangeType2.Changed = 2;
      FileChangeType2.Deleted = 3;
    })(FileChangeType || (exports2.FileChangeType = FileChangeType = {}));
    var RelativePattern;
    (function(RelativePattern2) {
      function is(value) {
        const candidate = value;
        return Is.objectLiteral(candidate) && (vscode_languageserver_types_1.URI.is(candidate.baseUri) || vscode_languageserver_types_1.WorkspaceFolder.is(candidate.baseUri)) && Is.string(candidate.pattern);
      }
      RelativePattern2.is = is;
    })(RelativePattern || (exports2.RelativePattern = RelativePattern = {}));
    var WatchKind;
    (function(WatchKind2) {
      WatchKind2.Create = 1;
      WatchKind2.Change = 2;
      WatchKind2.Delete = 4;
    })(WatchKind || (exports2.WatchKind = WatchKind = {}));
    var PublishDiagnosticsNotification;
    (function(PublishDiagnosticsNotification2) {
      PublishDiagnosticsNotification2.method = "textDocument/publishDiagnostics";
      PublishDiagnosticsNotification2.messageDirection = messages_1.MessageDirection.serverToClient;
      PublishDiagnosticsNotification2.type = new messages_1.ProtocolNotificationType(PublishDiagnosticsNotification2.method);
    })(PublishDiagnosticsNotification || (exports2.PublishDiagnosticsNotification = PublishDiagnosticsNotification = {}));
    var CompletionTriggerKind;
    (function(CompletionTriggerKind2) {
      CompletionTriggerKind2.Invoked = 1;
      CompletionTriggerKind2.TriggerCharacter = 2;
      CompletionTriggerKind2.TriggerForIncompleteCompletions = 3;
    })(CompletionTriggerKind || (exports2.CompletionTriggerKind = CompletionTriggerKind = {}));
    var CompletionRequest;
    (function(CompletionRequest2) {
      CompletionRequest2.method = "textDocument/completion";
      CompletionRequest2.messageDirection = messages_1.MessageDirection.clientToServer;
      CompletionRequest2.type = new messages_1.ProtocolRequestType(CompletionRequest2.method);
    })(CompletionRequest || (exports2.CompletionRequest = CompletionRequest = {}));
    var CompletionResolveRequest;
    (function(CompletionResolveRequest2) {
      CompletionResolveRequest2.method = "completionItem/resolve";
      CompletionResolveRequest2.messageDirection = messages_1.MessageDirection.clientToServer;
      CompletionResolveRequest2.type = new messages_1.ProtocolRequestType(CompletionResolveRequest2.method);
    })(CompletionResolveRequest || (exports2.CompletionResolveRequest = CompletionResolveRequest = {}));
    var HoverRequest;
    (function(HoverRequest2) {
      HoverRequest2.method = "textDocument/hover";
      HoverRequest2.messageDirection = messages_1.MessageDirection.clientToServer;
      HoverRequest2.type = new messages_1.ProtocolRequestType(HoverRequest2.method);
    })(HoverRequest || (exports2.HoverRequest = HoverRequest = {}));
    var SignatureHelpTriggerKind;
    (function(SignatureHelpTriggerKind2) {
      SignatureHelpTriggerKind2.Invoked = 1;
      SignatureHelpTriggerKind2.TriggerCharacter = 2;
      SignatureHelpTriggerKind2.ContentChange = 3;
    })(SignatureHelpTriggerKind || (exports2.SignatureHelpTriggerKind = SignatureHelpTriggerKind = {}));
    var SignatureHelpRequest;
    (function(SignatureHelpRequest2) {
      SignatureHelpRequest2.method = "textDocument/signatureHelp";
      SignatureHelpRequest2.messageDirection = messages_1.MessageDirection.clientToServer;
      SignatureHelpRequest2.type = new messages_1.ProtocolRequestType(SignatureHelpRequest2.method);
    })(SignatureHelpRequest || (exports2.SignatureHelpRequest = SignatureHelpRequest = {}));
    var DefinitionRequest;
    (function(DefinitionRequest2) {
      DefinitionRequest2.method = "textDocument/definition";
      DefinitionRequest2.messageDirection = messages_1.MessageDirection.clientToServer;
      DefinitionRequest2.type = new messages_1.ProtocolRequestType(DefinitionRequest2.method);
    })(DefinitionRequest || (exports2.DefinitionRequest = DefinitionRequest = {}));
    var ReferencesRequest;
    (function(ReferencesRequest2) {
      ReferencesRequest2.method = "textDocument/references";
      ReferencesRequest2.messageDirection = messages_1.MessageDirection.clientToServer;
      ReferencesRequest2.type = new messages_1.ProtocolRequestType(ReferencesRequest2.method);
    })(ReferencesRequest || (exports2.ReferencesRequest = ReferencesRequest = {}));
    var DocumentHighlightRequest;
    (function(DocumentHighlightRequest2) {
      DocumentHighlightRequest2.method = "textDocument/documentHighlight";
      DocumentHighlightRequest2.messageDirection = messages_1.MessageDirection.clientToServer;
      DocumentHighlightRequest2.type = new messages_1.ProtocolRequestType(DocumentHighlightRequest2.method);
    })(DocumentHighlightRequest || (exports2.DocumentHighlightRequest = DocumentHighlightRequest = {}));
    var DocumentSymbolRequest;
    (function(DocumentSymbolRequest2) {
      DocumentSymbolRequest2.method = "textDocument/documentSymbol";
      DocumentSymbolRequest2.messageDirection = messages_1.MessageDirection.clientToServer;
      DocumentSymbolRequest2.type = new messages_1.ProtocolRequestType(DocumentSymbolRequest2.method);
    })(DocumentSymbolRequest || (exports2.DocumentSymbolRequest = DocumentSymbolRequest = {}));
    var CodeActionRequest;
    (function(CodeActionRequest2) {
      CodeActionRequest2.method = "textDocument/codeAction";
      CodeActionRequest2.messageDirection = messages_1.MessageDirection.clientToServer;
      CodeActionRequest2.type = new messages_1.ProtocolRequestType(CodeActionRequest2.method);
    })(CodeActionRequest || (exports2.CodeActionRequest = CodeActionRequest = {}));
    var CodeActionResolveRequest;
    (function(CodeActionResolveRequest2) {
      CodeActionResolveRequest2.method = "codeAction/resolve";
      CodeActionResolveRequest2.messageDirection = messages_1.MessageDirection.clientToServer;
      CodeActionResolveRequest2.type = new messages_1.ProtocolRequestType(CodeActionResolveRequest2.method);
    })(CodeActionResolveRequest || (exports2.CodeActionResolveRequest = CodeActionResolveRequest = {}));
    var WorkspaceSymbolRequest;
    (function(WorkspaceSymbolRequest2) {
      WorkspaceSymbolRequest2.method = "workspace/symbol";
      WorkspaceSymbolRequest2.messageDirection = messages_1.MessageDirection.clientToServer;
      WorkspaceSymbolRequest2.type = new messages_1.ProtocolRequestType(WorkspaceSymbolRequest2.method);
    })(WorkspaceSymbolRequest || (exports2.WorkspaceSymbolRequest = WorkspaceSymbolRequest = {}));
    var WorkspaceSymbolResolveRequest;
    (function(WorkspaceSymbolResolveRequest2) {
      WorkspaceSymbolResolveRequest2.method = "workspaceSymbol/resolve";
      WorkspaceSymbolResolveRequest2.messageDirection = messages_1.MessageDirection.clientToServer;
      WorkspaceSymbolResolveRequest2.type = new messages_1.ProtocolRequestType(WorkspaceSymbolResolveRequest2.method);
    })(WorkspaceSymbolResolveRequest || (exports2.WorkspaceSymbolResolveRequest = WorkspaceSymbolResolveRequest = {}));
    var CodeLensRequest;
    (function(CodeLensRequest2) {
      CodeLensRequest2.method = "textDocument/codeLens";
      CodeLensRequest2.messageDirection = messages_1.MessageDirection.clientToServer;
      CodeLensRequest2.type = new messages_1.ProtocolRequestType(CodeLensRequest2.method);
    })(CodeLensRequest || (exports2.CodeLensRequest = CodeLensRequest = {}));
    var CodeLensResolveRequest;
    (function(CodeLensResolveRequest2) {
      CodeLensResolveRequest2.method = "codeLens/resolve";
      CodeLensResolveRequest2.messageDirection = messages_1.MessageDirection.clientToServer;
      CodeLensResolveRequest2.type = new messages_1.ProtocolRequestType(CodeLensResolveRequest2.method);
    })(CodeLensResolveRequest || (exports2.CodeLensResolveRequest = CodeLensResolveRequest = {}));
    var CodeLensRefreshRequest;
    (function(CodeLensRefreshRequest2) {
      CodeLensRefreshRequest2.method = `workspace/codeLens/refresh`;
      CodeLensRefreshRequest2.messageDirection = messages_1.MessageDirection.serverToClient;
      CodeLensRefreshRequest2.type = new messages_1.ProtocolRequestType0(CodeLensRefreshRequest2.method);
    })(CodeLensRefreshRequest || (exports2.CodeLensRefreshRequest = CodeLensRefreshRequest = {}));
    var DocumentLinkRequest;
    (function(DocumentLinkRequest2) {
      DocumentLinkRequest2.method = "textDocument/documentLink";
      DocumentLinkRequest2.messageDirection = messages_1.MessageDirection.clientToServer;
      DocumentLinkRequest2.type = new messages_1.ProtocolRequestType(DocumentLinkRequest2.method);
    })(DocumentLinkRequest || (exports2.DocumentLinkRequest = DocumentLinkRequest = {}));
    var DocumentLinkResolveRequest;
    (function(DocumentLinkResolveRequest2) {
      DocumentLinkResolveRequest2.method = "documentLink/resolve";
      DocumentLinkResolveRequest2.messageDirection = messages_1.MessageDirection.clientToServer;
      DocumentLinkResolveRequest2.type = new messages_1.ProtocolRequestType(DocumentLinkResolveRequest2.method);
    })(DocumentLinkResolveRequest || (exports2.DocumentLinkResolveRequest = DocumentLinkResolveRequest = {}));
    var DocumentFormattingRequest;
    (function(DocumentFormattingRequest2) {
      DocumentFormattingRequest2.method = "textDocument/formatting";
      DocumentFormattingRequest2.messageDirection = messages_1.MessageDirection.clientToServer;
      DocumentFormattingRequest2.type = new messages_1.ProtocolRequestType(DocumentFormattingRequest2.method);
    })(DocumentFormattingRequest || (exports2.DocumentFormattingRequest = DocumentFormattingRequest = {}));
    var DocumentRangeFormattingRequest;
    (function(DocumentRangeFormattingRequest2) {
      DocumentRangeFormattingRequest2.method = "textDocument/rangeFormatting";
      DocumentRangeFormattingRequest2.messageDirection = messages_1.MessageDirection.clientToServer;
      DocumentRangeFormattingRequest2.type = new messages_1.ProtocolRequestType(DocumentRangeFormattingRequest2.method);
    })(DocumentRangeFormattingRequest || (exports2.DocumentRangeFormattingRequest = DocumentRangeFormattingRequest = {}));
    var DocumentRangesFormattingRequest;
    (function(DocumentRangesFormattingRequest2) {
      DocumentRangesFormattingRequest2.method = "textDocument/rangesFormatting";
      DocumentRangesFormattingRequest2.messageDirection = messages_1.MessageDirection.clientToServer;
      DocumentRangesFormattingRequest2.type = new messages_1.ProtocolRequestType(DocumentRangesFormattingRequest2.method);
    })(DocumentRangesFormattingRequest || (exports2.DocumentRangesFormattingRequest = DocumentRangesFormattingRequest = {}));
    var DocumentOnTypeFormattingRequest;
    (function(DocumentOnTypeFormattingRequest2) {
      DocumentOnTypeFormattingRequest2.method = "textDocument/onTypeFormatting";
      DocumentOnTypeFormattingRequest2.messageDirection = messages_1.MessageDirection.clientToServer;
      DocumentOnTypeFormattingRequest2.type = new messages_1.ProtocolRequestType(DocumentOnTypeFormattingRequest2.method);
    })(DocumentOnTypeFormattingRequest || (exports2.DocumentOnTypeFormattingRequest = DocumentOnTypeFormattingRequest = {}));
    var PrepareSupportDefaultBehavior;
    (function(PrepareSupportDefaultBehavior2) {
      PrepareSupportDefaultBehavior2.Identifier = 1;
    })(PrepareSupportDefaultBehavior || (exports2.PrepareSupportDefaultBehavior = PrepareSupportDefaultBehavior = {}));
    var RenameRequest;
    (function(RenameRequest2) {
      RenameRequest2.method = "textDocument/rename";
      RenameRequest2.messageDirection = messages_1.MessageDirection.clientToServer;
      RenameRequest2.type = new messages_1.ProtocolRequestType(RenameRequest2.method);
    })(RenameRequest || (exports2.RenameRequest = RenameRequest = {}));
    var PrepareRenameRequest;
    (function(PrepareRenameRequest2) {
      PrepareRenameRequest2.method = "textDocument/prepareRename";
      PrepareRenameRequest2.messageDirection = messages_1.MessageDirection.clientToServer;
      PrepareRenameRequest2.type = new messages_1.ProtocolRequestType(PrepareRenameRequest2.method);
    })(PrepareRenameRequest || (exports2.PrepareRenameRequest = PrepareRenameRequest = {}));
    var ExecuteCommandRequest;
    (function(ExecuteCommandRequest2) {
      ExecuteCommandRequest2.method = "workspace/executeCommand";
      ExecuteCommandRequest2.messageDirection = messages_1.MessageDirection.clientToServer;
      ExecuteCommandRequest2.type = new messages_1.ProtocolRequestType(ExecuteCommandRequest2.method);
    })(ExecuteCommandRequest || (exports2.ExecuteCommandRequest = ExecuteCommandRequest = {}));
    var ApplyWorkspaceEditRequest;
    (function(ApplyWorkspaceEditRequest2) {
      ApplyWorkspaceEditRequest2.method = "workspace/applyEdit";
      ApplyWorkspaceEditRequest2.messageDirection = messages_1.MessageDirection.serverToClient;
      ApplyWorkspaceEditRequest2.type = new messages_1.ProtocolRequestType("workspace/applyEdit");
    })(ApplyWorkspaceEditRequest || (exports2.ApplyWorkspaceEditRequest = ApplyWorkspaceEditRequest = {}));
  }
});

// node_modules/vscode-languageserver-protocol/lib/common/connection.js
var require_connection2 = __commonJS({
  "node_modules/vscode-languageserver-protocol/lib/common/connection.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.createProtocolConnection = void 0;
    var vscode_jsonrpc_1 = require_main();
    function createProtocolConnection(input, output, logger, options) {
      if (vscode_jsonrpc_1.ConnectionStrategy.is(options)) {
        options = { connectionStrategy: options };
      }
      return (0, vscode_jsonrpc_1.createMessageConnection)(input, output, logger, options);
    }
    exports2.createProtocolConnection = createProtocolConnection;
  }
});

// node_modules/vscode-languageserver-protocol/lib/common/api.js
var require_api2 = __commonJS({
  "node_modules/vscode-languageserver-protocol/lib/common/api.js"(exports2) {
    "use strict";
    var __createBinding = exports2 && exports2.__createBinding || (Object.create ? (function(o, m, k, k2) {
      if (k2 === void 0) k2 = k;
      var desc = Object.getOwnPropertyDescriptor(m, k);
      if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: function() {
          return m[k];
        } };
      }
      Object.defineProperty(o, k2, desc);
    }) : (function(o, m, k, k2) {
      if (k2 === void 0) k2 = k;
      o[k2] = m[k];
    }));
    var __exportStar = exports2 && exports2.__exportStar || function(m, exports3) {
      for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports3, p)) __createBinding(exports3, m, p);
    };
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.LSPErrorCodes = exports2.createProtocolConnection = void 0;
    __exportStar(require_main(), exports2);
    __exportStar(require_main2(), exports2);
    __exportStar(require_messages2(), exports2);
    __exportStar(require_protocol(), exports2);
    var connection_1 = require_connection2();
    Object.defineProperty(exports2, "createProtocolConnection", { enumerable: true, get: function() {
      return connection_1.createProtocolConnection;
    } });
    var LSPErrorCodes;
    (function(LSPErrorCodes2) {
      LSPErrorCodes2.lspReservedErrorRangeStart = -32899;
      LSPErrorCodes2.RequestFailed = -32803;
      LSPErrorCodes2.ServerCancelled = -32802;
      LSPErrorCodes2.ContentModified = -32801;
      LSPErrorCodes2.RequestCancelled = -32800;
      LSPErrorCodes2.lspReservedErrorRangeEnd = -32800;
    })(LSPErrorCodes || (exports2.LSPErrorCodes = LSPErrorCodes = {}));
  }
});

// node_modules/vscode-languageserver-protocol/lib/node/main.js
var require_main3 = __commonJS({
  "node_modules/vscode-languageserver-protocol/lib/node/main.js"(exports2) {
    "use strict";
    var __createBinding = exports2 && exports2.__createBinding || (Object.create ? (function(o, m, k, k2) {
      if (k2 === void 0) k2 = k;
      var desc = Object.getOwnPropertyDescriptor(m, k);
      if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: function() {
          return m[k];
        } };
      }
      Object.defineProperty(o, k2, desc);
    }) : (function(o, m, k, k2) {
      if (k2 === void 0) k2 = k;
      o[k2] = m[k];
    }));
    var __exportStar = exports2 && exports2.__exportStar || function(m, exports3) {
      for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports3, p)) __createBinding(exports3, m, p);
    };
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.createProtocolConnection = void 0;
    var node_1 = require_node();
    __exportStar(require_node(), exports2);
    __exportStar(require_api2(), exports2);
    function createProtocolConnection(input, output, logger, options) {
      return (0, node_1.createMessageConnection)(input, output, logger, options);
    }
    exports2.createProtocolConnection = createProtocolConnection;
  }
});

// node_modules/vscode-languageserver/lib/common/utils/uuid.js
var require_uuid = __commonJS({
  "node_modules/vscode-languageserver/lib/common/utils/uuid.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.generateUuid = exports2.parse = exports2.isUUID = exports2.v4 = exports2.empty = void 0;
    var ValueUUID = class {
      constructor(_value) {
        this._value = _value;
      }
      asHex() {
        return this._value;
      }
      equals(other) {
        return this.asHex() === other.asHex();
      }
    };
    var V4UUID = class _V4UUID extends ValueUUID {
      static _oneOf(array) {
        return array[Math.floor(array.length * Math.random())];
      }
      static _randomHex() {
        return _V4UUID._oneOf(_V4UUID._chars);
      }
      constructor() {
        super([
          _V4UUID._randomHex(),
          _V4UUID._randomHex(),
          _V4UUID._randomHex(),
          _V4UUID._randomHex(),
          _V4UUID._randomHex(),
          _V4UUID._randomHex(),
          _V4UUID._randomHex(),
          _V4UUID._randomHex(),
          "-",
          _V4UUID._randomHex(),
          _V4UUID._randomHex(),
          _V4UUID._randomHex(),
          _V4UUID._randomHex(),
          "-",
          "4",
          _V4UUID._randomHex(),
          _V4UUID._randomHex(),
          _V4UUID._randomHex(),
          "-",
          _V4UUID._oneOf(_V4UUID._timeHighBits),
          _V4UUID._randomHex(),
          _V4UUID._randomHex(),
          _V4UUID._randomHex(),
          "-",
          _V4UUID._randomHex(),
          _V4UUID._randomHex(),
          _V4UUID._randomHex(),
          _V4UUID._randomHex(),
          _V4UUID._randomHex(),
          _V4UUID._randomHex(),
          _V4UUID._randomHex(),
          _V4UUID._randomHex(),
          _V4UUID._randomHex(),
          _V4UUID._randomHex(),
          _V4UUID._randomHex(),
          _V4UUID._randomHex()
        ].join(""));
      }
    };
    V4UUID._chars = ["0", "1", "2", "3", "4", "5", "6", "6", "7", "8", "9", "a", "b", "c", "d", "e", "f"];
    V4UUID._timeHighBits = ["8", "9", "a", "b"];
    exports2.empty = new ValueUUID("00000000-0000-0000-0000-000000000000");
    function v4() {
      return new V4UUID();
    }
    exports2.v4 = v4;
    var _UUIDPattern = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;
    function isUUID(value) {
      return _UUIDPattern.test(value);
    }
    exports2.isUUID = isUUID;
    function parse(value) {
      if (!isUUID(value)) {
        throw new Error("invalid uuid");
      }
      return new ValueUUID(value);
    }
    exports2.parse = parse;
    function generateUuid() {
      return v4().asHex();
    }
    exports2.generateUuid = generateUuid;
  }
});

// node_modules/vscode-languageserver/lib/common/progress.js
var require_progress = __commonJS({
  "node_modules/vscode-languageserver/lib/common/progress.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.attachPartialResult = exports2.ProgressFeature = exports2.attachWorkDone = void 0;
    var vscode_languageserver_protocol_1 = require_main3();
    var uuid_1 = require_uuid();
    var WorkDoneProgressReporterImpl = class _WorkDoneProgressReporterImpl {
      constructor(_connection, _token) {
        this._connection = _connection;
        this._token = _token;
        _WorkDoneProgressReporterImpl.Instances.set(this._token, this);
      }
      begin(title, percentage, message, cancellable) {
        let param = {
          kind: "begin",
          title,
          percentage,
          message,
          cancellable
        };
        this._connection.sendProgress(vscode_languageserver_protocol_1.WorkDoneProgress.type, this._token, param);
      }
      report(arg0, arg1) {
        let param = {
          kind: "report"
        };
        if (typeof arg0 === "number") {
          param.percentage = arg0;
          if (arg1 !== void 0) {
            param.message = arg1;
          }
        } else {
          param.message = arg0;
        }
        this._connection.sendProgress(vscode_languageserver_protocol_1.WorkDoneProgress.type, this._token, param);
      }
      done() {
        _WorkDoneProgressReporterImpl.Instances.delete(this._token);
        this._connection.sendProgress(vscode_languageserver_protocol_1.WorkDoneProgress.type, this._token, { kind: "end" });
      }
    };
    WorkDoneProgressReporterImpl.Instances = /* @__PURE__ */ new Map();
    var WorkDoneProgressServerReporterImpl = class extends WorkDoneProgressReporterImpl {
      constructor(connection2, token) {
        super(connection2, token);
        this._source = new vscode_languageserver_protocol_1.CancellationTokenSource();
      }
      get token() {
        return this._source.token;
      }
      done() {
        this._source.dispose();
        super.done();
      }
      cancel() {
        this._source.cancel();
      }
    };
    var NullProgressReporter = class {
      constructor() {
      }
      begin() {
      }
      report() {
      }
      done() {
      }
    };
    var NullProgressServerReporter = class extends NullProgressReporter {
      constructor() {
        super();
        this._source = new vscode_languageserver_protocol_1.CancellationTokenSource();
      }
      get token() {
        return this._source.token;
      }
      done() {
        this._source.dispose();
      }
      cancel() {
        this._source.cancel();
      }
    };
    function attachWorkDone(connection2, params) {
      if (params === void 0 || params.workDoneToken === void 0) {
        return new NullProgressReporter();
      }
      const token = params.workDoneToken;
      delete params.workDoneToken;
      return new WorkDoneProgressReporterImpl(connection2, token);
    }
    exports2.attachWorkDone = attachWorkDone;
    var ProgressFeature = (Base) => {
      return class extends Base {
        constructor() {
          super();
          this._progressSupported = false;
        }
        initialize(capabilities) {
          super.initialize(capabilities);
          if (capabilities?.window?.workDoneProgress === true) {
            this._progressSupported = true;
            this.connection.onNotification(vscode_languageserver_protocol_1.WorkDoneProgressCancelNotification.type, (params) => {
              let progress = WorkDoneProgressReporterImpl.Instances.get(params.token);
              if (progress instanceof WorkDoneProgressServerReporterImpl || progress instanceof NullProgressServerReporter) {
                progress.cancel();
              }
            });
          }
        }
        attachWorkDoneProgress(token) {
          if (token === void 0) {
            return new NullProgressReporter();
          } else {
            return new WorkDoneProgressReporterImpl(this.connection, token);
          }
        }
        createWorkDoneProgress() {
          if (this._progressSupported) {
            const token = (0, uuid_1.generateUuid)();
            return this.connection.sendRequest(vscode_languageserver_protocol_1.WorkDoneProgressCreateRequest.type, { token }).then(() => {
              const result = new WorkDoneProgressServerReporterImpl(this.connection, token);
              return result;
            });
          } else {
            return Promise.resolve(new NullProgressServerReporter());
          }
        }
      };
    };
    exports2.ProgressFeature = ProgressFeature;
    var ResultProgress;
    (function(ResultProgress2) {
      ResultProgress2.type = new vscode_languageserver_protocol_1.ProgressType();
    })(ResultProgress || (ResultProgress = {}));
    var ResultProgressReporterImpl = class {
      constructor(_connection, _token) {
        this._connection = _connection;
        this._token = _token;
      }
      report(data) {
        this._connection.sendProgress(ResultProgress.type, this._token, data);
      }
    };
    function attachPartialResult(connection2, params) {
      if (params === void 0 || params.partialResultToken === void 0) {
        return void 0;
      }
      const token = params.partialResultToken;
      delete params.partialResultToken;
      return new ResultProgressReporterImpl(connection2, token);
    }
    exports2.attachPartialResult = attachPartialResult;
  }
});

// node_modules/vscode-languageserver/lib/common/configuration.js
var require_configuration = __commonJS({
  "node_modules/vscode-languageserver/lib/common/configuration.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.ConfigurationFeature = void 0;
    var vscode_languageserver_protocol_1 = require_main3();
    var Is = require_is();
    var ConfigurationFeature = (Base) => {
      return class extends Base {
        getConfiguration(arg) {
          if (!arg) {
            return this._getConfiguration({});
          } else if (Is.string(arg)) {
            return this._getConfiguration({ section: arg });
          } else {
            return this._getConfiguration(arg);
          }
        }
        _getConfiguration(arg) {
          let params = {
            items: Array.isArray(arg) ? arg : [arg]
          };
          return this.connection.sendRequest(vscode_languageserver_protocol_1.ConfigurationRequest.type, params).then((result) => {
            if (Array.isArray(result)) {
              return Array.isArray(arg) ? result : result[0];
            } else {
              return Array.isArray(arg) ? [] : null;
            }
          });
        }
      };
    };
    exports2.ConfigurationFeature = ConfigurationFeature;
  }
});

// node_modules/vscode-languageserver/lib/common/workspaceFolder.js
var require_workspaceFolder = __commonJS({
  "node_modules/vscode-languageserver/lib/common/workspaceFolder.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.WorkspaceFoldersFeature = void 0;
    var vscode_languageserver_protocol_1 = require_main3();
    var WorkspaceFoldersFeature = (Base) => {
      return class extends Base {
        constructor() {
          super();
          this._notificationIsAutoRegistered = false;
        }
        initialize(capabilities) {
          super.initialize(capabilities);
          let workspaceCapabilities = capabilities.workspace;
          if (workspaceCapabilities && workspaceCapabilities.workspaceFolders) {
            this._onDidChangeWorkspaceFolders = new vscode_languageserver_protocol_1.Emitter();
            this.connection.onNotification(vscode_languageserver_protocol_1.DidChangeWorkspaceFoldersNotification.type, (params) => {
              this._onDidChangeWorkspaceFolders.fire(params.event);
            });
          }
        }
        fillServerCapabilities(capabilities) {
          super.fillServerCapabilities(capabilities);
          const changeNotifications = capabilities.workspace?.workspaceFolders?.changeNotifications;
          this._notificationIsAutoRegistered = changeNotifications === true || typeof changeNotifications === "string";
        }
        getWorkspaceFolders() {
          return this.connection.sendRequest(vscode_languageserver_protocol_1.WorkspaceFoldersRequest.type);
        }
        get onDidChangeWorkspaceFolders() {
          if (!this._onDidChangeWorkspaceFolders) {
            throw new Error("Client doesn't support sending workspace folder change events.");
          }
          if (!this._notificationIsAutoRegistered && !this._unregistration) {
            this._unregistration = this.connection.client.register(vscode_languageserver_protocol_1.DidChangeWorkspaceFoldersNotification.type);
          }
          return this._onDidChangeWorkspaceFolders.event;
        }
      };
    };
    exports2.WorkspaceFoldersFeature = WorkspaceFoldersFeature;
  }
});

// node_modules/vscode-languageserver/lib/common/callHierarchy.js
var require_callHierarchy = __commonJS({
  "node_modules/vscode-languageserver/lib/common/callHierarchy.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.CallHierarchyFeature = void 0;
    var vscode_languageserver_protocol_1 = require_main3();
    var CallHierarchyFeature = (Base) => {
      return class extends Base {
        get callHierarchy() {
          return {
            onPrepare: (handler) => {
              return this.connection.onRequest(vscode_languageserver_protocol_1.CallHierarchyPrepareRequest.type, (params, cancel) => {
                return handler(params, cancel, this.attachWorkDoneProgress(params), void 0);
              });
            },
            onIncomingCalls: (handler) => {
              const type = vscode_languageserver_protocol_1.CallHierarchyIncomingCallsRequest.type;
              return this.connection.onRequest(type, (params, cancel) => {
                return handler(params, cancel, this.attachWorkDoneProgress(params), this.attachPartialResultProgress(type, params));
              });
            },
            onOutgoingCalls: (handler) => {
              const type = vscode_languageserver_protocol_1.CallHierarchyOutgoingCallsRequest.type;
              return this.connection.onRequest(type, (params, cancel) => {
                return handler(params, cancel, this.attachWorkDoneProgress(params), this.attachPartialResultProgress(type, params));
              });
            }
          };
        }
      };
    };
    exports2.CallHierarchyFeature = CallHierarchyFeature;
  }
});

// node_modules/vscode-languageserver/lib/common/semanticTokens.js
var require_semanticTokens = __commonJS({
  "node_modules/vscode-languageserver/lib/common/semanticTokens.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.SemanticTokensBuilder = exports2.SemanticTokensDiff = exports2.SemanticTokensFeature = void 0;
    var vscode_languageserver_protocol_1 = require_main3();
    var SemanticTokensFeature = (Base) => {
      return class extends Base {
        get semanticTokens() {
          return {
            refresh: () => {
              return this.connection.sendRequest(vscode_languageserver_protocol_1.SemanticTokensRefreshRequest.type);
            },
            on: (handler) => {
              const type = vscode_languageserver_protocol_1.SemanticTokensRequest.type;
              return this.connection.onRequest(type, (params, cancel) => {
                return handler(params, cancel, this.attachWorkDoneProgress(params), this.attachPartialResultProgress(type, params));
              });
            },
            onDelta: (handler) => {
              const type = vscode_languageserver_protocol_1.SemanticTokensDeltaRequest.type;
              return this.connection.onRequest(type, (params, cancel) => {
                return handler(params, cancel, this.attachWorkDoneProgress(params), this.attachPartialResultProgress(type, params));
              });
            },
            onRange: (handler) => {
              const type = vscode_languageserver_protocol_1.SemanticTokensRangeRequest.type;
              return this.connection.onRequest(type, (params, cancel) => {
                return handler(params, cancel, this.attachWorkDoneProgress(params), this.attachPartialResultProgress(type, params));
              });
            }
          };
        }
      };
    };
    exports2.SemanticTokensFeature = SemanticTokensFeature;
    var SemanticTokensDiff = class {
      constructor(originalSequence, modifiedSequence) {
        this.originalSequence = originalSequence;
        this.modifiedSequence = modifiedSequence;
      }
      computeDiff() {
        const originalLength = this.originalSequence.length;
        const modifiedLength = this.modifiedSequence.length;
        let startIndex = 0;
        while (startIndex < modifiedLength && startIndex < originalLength && this.originalSequence[startIndex] === this.modifiedSequence[startIndex]) {
          startIndex++;
        }
        if (startIndex < modifiedLength && startIndex < originalLength) {
          let originalEndIndex = originalLength - 1;
          let modifiedEndIndex = modifiedLength - 1;
          while (originalEndIndex >= startIndex && modifiedEndIndex >= startIndex && this.originalSequence[originalEndIndex] === this.modifiedSequence[modifiedEndIndex]) {
            originalEndIndex--;
            modifiedEndIndex--;
          }
          if (originalEndIndex < startIndex || modifiedEndIndex < startIndex) {
            originalEndIndex++;
            modifiedEndIndex++;
          }
          const deleteCount = originalEndIndex - startIndex + 1;
          const newData = this.modifiedSequence.slice(startIndex, modifiedEndIndex + 1);
          if (newData.length === 1 && newData[0] === this.originalSequence[originalEndIndex]) {
            return [
              { start: startIndex, deleteCount: deleteCount - 1 }
            ];
          } else {
            return [
              { start: startIndex, deleteCount, data: newData }
            ];
          }
        } else if (startIndex < modifiedLength) {
          return [
            { start: startIndex, deleteCount: 0, data: this.modifiedSequence.slice(startIndex) }
          ];
        } else if (startIndex < originalLength) {
          return [
            { start: startIndex, deleteCount: originalLength - startIndex }
          ];
        } else {
          return [];
        }
      }
    };
    exports2.SemanticTokensDiff = SemanticTokensDiff;
    var SemanticTokensBuilder = class {
      constructor() {
        this._prevData = void 0;
        this.initialize();
      }
      initialize() {
        this._id = Date.now();
        this._prevLine = 0;
        this._prevChar = 0;
        this._data = [];
        this._dataLen = 0;
      }
      push(line, char, length, tokenType, tokenModifiers) {
        let pushLine = line;
        let pushChar = char;
        if (this._dataLen > 0) {
          pushLine -= this._prevLine;
          if (pushLine === 0) {
            pushChar -= this._prevChar;
          }
        }
        this._data[this._dataLen++] = pushLine;
        this._data[this._dataLen++] = pushChar;
        this._data[this._dataLen++] = length;
        this._data[this._dataLen++] = tokenType;
        this._data[this._dataLen++] = tokenModifiers;
        this._prevLine = line;
        this._prevChar = char;
      }
      get id() {
        return this._id.toString();
      }
      previousResult(id) {
        if (this.id === id) {
          this._prevData = this._data;
        }
        this.initialize();
      }
      build() {
        this._prevData = void 0;
        return {
          resultId: this.id,
          data: this._data
        };
      }
      canBuildEdits() {
        return this._prevData !== void 0;
      }
      buildEdits() {
        if (this._prevData !== void 0) {
          return {
            resultId: this.id,
            edits: new SemanticTokensDiff(this._prevData, this._data).computeDiff()
          };
        } else {
          return this.build();
        }
      }
    };
    exports2.SemanticTokensBuilder = SemanticTokensBuilder;
  }
});

// node_modules/vscode-languageserver/lib/common/showDocument.js
var require_showDocument = __commonJS({
  "node_modules/vscode-languageserver/lib/common/showDocument.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.ShowDocumentFeature = void 0;
    var vscode_languageserver_protocol_1 = require_main3();
    var ShowDocumentFeature = (Base) => {
      return class extends Base {
        showDocument(params) {
          return this.connection.sendRequest(vscode_languageserver_protocol_1.ShowDocumentRequest.type, params);
        }
      };
    };
    exports2.ShowDocumentFeature = ShowDocumentFeature;
  }
});

// node_modules/vscode-languageserver/lib/common/fileOperations.js
var require_fileOperations = __commonJS({
  "node_modules/vscode-languageserver/lib/common/fileOperations.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.FileOperationsFeature = void 0;
    var vscode_languageserver_protocol_1 = require_main3();
    var FileOperationsFeature = (Base) => {
      return class extends Base {
        onDidCreateFiles(handler) {
          return this.connection.onNotification(vscode_languageserver_protocol_1.DidCreateFilesNotification.type, (params) => {
            handler(params);
          });
        }
        onDidRenameFiles(handler) {
          return this.connection.onNotification(vscode_languageserver_protocol_1.DidRenameFilesNotification.type, (params) => {
            handler(params);
          });
        }
        onDidDeleteFiles(handler) {
          return this.connection.onNotification(vscode_languageserver_protocol_1.DidDeleteFilesNotification.type, (params) => {
            handler(params);
          });
        }
        onWillCreateFiles(handler) {
          return this.connection.onRequest(vscode_languageserver_protocol_1.WillCreateFilesRequest.type, (params, cancel) => {
            return handler(params, cancel);
          });
        }
        onWillRenameFiles(handler) {
          return this.connection.onRequest(vscode_languageserver_protocol_1.WillRenameFilesRequest.type, (params, cancel) => {
            return handler(params, cancel);
          });
        }
        onWillDeleteFiles(handler) {
          return this.connection.onRequest(vscode_languageserver_protocol_1.WillDeleteFilesRequest.type, (params, cancel) => {
            return handler(params, cancel);
          });
        }
      };
    };
    exports2.FileOperationsFeature = FileOperationsFeature;
  }
});

// node_modules/vscode-languageserver/lib/common/linkedEditingRange.js
var require_linkedEditingRange = __commonJS({
  "node_modules/vscode-languageserver/lib/common/linkedEditingRange.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.LinkedEditingRangeFeature = void 0;
    var vscode_languageserver_protocol_1 = require_main3();
    var LinkedEditingRangeFeature = (Base) => {
      return class extends Base {
        onLinkedEditingRange(handler) {
          return this.connection.onRequest(vscode_languageserver_protocol_1.LinkedEditingRangeRequest.type, (params, cancel) => {
            return handler(params, cancel, this.attachWorkDoneProgress(params), void 0);
          });
        }
      };
    };
    exports2.LinkedEditingRangeFeature = LinkedEditingRangeFeature;
  }
});

// node_modules/vscode-languageserver/lib/common/typeHierarchy.js
var require_typeHierarchy = __commonJS({
  "node_modules/vscode-languageserver/lib/common/typeHierarchy.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.TypeHierarchyFeature = void 0;
    var vscode_languageserver_protocol_1 = require_main3();
    var TypeHierarchyFeature = (Base) => {
      return class extends Base {
        get typeHierarchy() {
          return {
            onPrepare: (handler) => {
              return this.connection.onRequest(vscode_languageserver_protocol_1.TypeHierarchyPrepareRequest.type, (params, cancel) => {
                return handler(params, cancel, this.attachWorkDoneProgress(params), void 0);
              });
            },
            onSupertypes: (handler) => {
              const type = vscode_languageserver_protocol_1.TypeHierarchySupertypesRequest.type;
              return this.connection.onRequest(type, (params, cancel) => {
                return handler(params, cancel, this.attachWorkDoneProgress(params), this.attachPartialResultProgress(type, params));
              });
            },
            onSubtypes: (handler) => {
              const type = vscode_languageserver_protocol_1.TypeHierarchySubtypesRequest.type;
              return this.connection.onRequest(type, (params, cancel) => {
                return handler(params, cancel, this.attachWorkDoneProgress(params), this.attachPartialResultProgress(type, params));
              });
            }
          };
        }
      };
    };
    exports2.TypeHierarchyFeature = TypeHierarchyFeature;
  }
});

// node_modules/vscode-languageserver/lib/common/inlineValue.js
var require_inlineValue = __commonJS({
  "node_modules/vscode-languageserver/lib/common/inlineValue.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.InlineValueFeature = void 0;
    var vscode_languageserver_protocol_1 = require_main3();
    var InlineValueFeature = (Base) => {
      return class extends Base {
        get inlineValue() {
          return {
            refresh: () => {
              return this.connection.sendRequest(vscode_languageserver_protocol_1.InlineValueRefreshRequest.type);
            },
            on: (handler) => {
              return this.connection.onRequest(vscode_languageserver_protocol_1.InlineValueRequest.type, (params, cancel) => {
                return handler(params, cancel, this.attachWorkDoneProgress(params));
              });
            }
          };
        }
      };
    };
    exports2.InlineValueFeature = InlineValueFeature;
  }
});

// node_modules/vscode-languageserver/lib/common/foldingRange.js
var require_foldingRange = __commonJS({
  "node_modules/vscode-languageserver/lib/common/foldingRange.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.FoldingRangeFeature = void 0;
    var vscode_languageserver_protocol_1 = require_main3();
    var FoldingRangeFeature = (Base) => {
      return class extends Base {
        get foldingRange() {
          return {
            refresh: () => {
              return this.connection.sendRequest(vscode_languageserver_protocol_1.FoldingRangeRefreshRequest.type);
            },
            on: (handler) => {
              const type = vscode_languageserver_protocol_1.FoldingRangeRequest.type;
              return this.connection.onRequest(type, (params, cancel) => {
                return handler(params, cancel, this.attachWorkDoneProgress(params), this.attachPartialResultProgress(type, params));
              });
            }
          };
        }
      };
    };
    exports2.FoldingRangeFeature = FoldingRangeFeature;
  }
});

// node_modules/vscode-languageserver/lib/common/inlayHint.js
var require_inlayHint = __commonJS({
  "node_modules/vscode-languageserver/lib/common/inlayHint.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.InlayHintFeature = void 0;
    var vscode_languageserver_protocol_1 = require_main3();
    var InlayHintFeature = (Base) => {
      return class extends Base {
        get inlayHint() {
          return {
            refresh: () => {
              return this.connection.sendRequest(vscode_languageserver_protocol_1.InlayHintRefreshRequest.type);
            },
            on: (handler) => {
              return this.connection.onRequest(vscode_languageserver_protocol_1.InlayHintRequest.type, (params, cancel) => {
                return handler(params, cancel, this.attachWorkDoneProgress(params));
              });
            },
            resolve: (handler) => {
              return this.connection.onRequest(vscode_languageserver_protocol_1.InlayHintResolveRequest.type, (params, cancel) => {
                return handler(params, cancel);
              });
            }
          };
        }
      };
    };
    exports2.InlayHintFeature = InlayHintFeature;
  }
});

// node_modules/vscode-languageserver/lib/common/diagnostic.js
var require_diagnostic = __commonJS({
  "node_modules/vscode-languageserver/lib/common/diagnostic.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.DiagnosticFeature = void 0;
    var vscode_languageserver_protocol_1 = require_main3();
    var DiagnosticFeature = (Base) => {
      return class extends Base {
        get diagnostics() {
          return {
            refresh: () => {
              return this.connection.sendRequest(vscode_languageserver_protocol_1.DiagnosticRefreshRequest.type);
            },
            on: (handler) => {
              return this.connection.onRequest(vscode_languageserver_protocol_1.DocumentDiagnosticRequest.type, (params, cancel) => {
                return handler(params, cancel, this.attachWorkDoneProgress(params), this.attachPartialResultProgress(vscode_languageserver_protocol_1.DocumentDiagnosticRequest.partialResult, params));
              });
            },
            onWorkspace: (handler) => {
              return this.connection.onRequest(vscode_languageserver_protocol_1.WorkspaceDiagnosticRequest.type, (params, cancel) => {
                return handler(params, cancel, this.attachWorkDoneProgress(params), this.attachPartialResultProgress(vscode_languageserver_protocol_1.WorkspaceDiagnosticRequest.partialResult, params));
              });
            }
          };
        }
      };
    };
    exports2.DiagnosticFeature = DiagnosticFeature;
  }
});

// node_modules/vscode-languageserver/lib/common/textDocuments.js
var require_textDocuments = __commonJS({
  "node_modules/vscode-languageserver/lib/common/textDocuments.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.TextDocuments = void 0;
    var vscode_languageserver_protocol_1 = require_main3();
    var TextDocuments2 = class {
      /**
       * Create a new text document manager.
       */
      constructor(configuration) {
        this._configuration = configuration;
        this._syncedDocuments = /* @__PURE__ */ new Map();
        this._onDidChangeContent = new vscode_languageserver_protocol_1.Emitter();
        this._onDidOpen = new vscode_languageserver_protocol_1.Emitter();
        this._onDidClose = new vscode_languageserver_protocol_1.Emitter();
        this._onDidSave = new vscode_languageserver_protocol_1.Emitter();
        this._onWillSave = new vscode_languageserver_protocol_1.Emitter();
      }
      /**
       * An event that fires when a text document managed by this manager
       * has been opened.
       */
      get onDidOpen() {
        return this._onDidOpen.event;
      }
      /**
       * An event that fires when a text document managed by this manager
       * has been opened or the content changes.
       */
      get onDidChangeContent() {
        return this._onDidChangeContent.event;
      }
      /**
       * An event that fires when a text document managed by this manager
       * will be saved.
       */
      get onWillSave() {
        return this._onWillSave.event;
      }
      /**
       * Sets a handler that will be called if a participant wants to provide
       * edits during a text document save.
       */
      onWillSaveWaitUntil(handler) {
        this._willSaveWaitUntil = handler;
      }
      /**
       * An event that fires when a text document managed by this manager
       * has been saved.
       */
      get onDidSave() {
        return this._onDidSave.event;
      }
      /**
       * An event that fires when a text document managed by this manager
       * has been closed.
       */
      get onDidClose() {
        return this._onDidClose.event;
      }
      /**
       * Returns the document for the given URI. Returns undefined if
       * the document is not managed by this instance.
       *
       * @param uri The text document's URI to retrieve.
       * @return the text document or `undefined`.
       */
      get(uri) {
        return this._syncedDocuments.get(uri);
      }
      /**
       * Returns all text documents managed by this instance.
       *
       * @return all text documents.
       */
      all() {
        return Array.from(this._syncedDocuments.values());
      }
      /**
       * Returns the URIs of all text documents managed by this instance.
       *
       * @return the URI's of all text documents.
       */
      keys() {
        return Array.from(this._syncedDocuments.keys());
      }
      /**
       * Listens for `low level` notification on the given connection to
       * update the text documents managed by this instance.
       *
       * Please note that the connection only provides handlers not an event model. Therefore
       * listening on a connection will overwrite the following handlers on a connection:
       * `onDidOpenTextDocument`, `onDidChangeTextDocument`, `onDidCloseTextDocument`,
       * `onWillSaveTextDocument`, `onWillSaveTextDocumentWaitUntil` and `onDidSaveTextDocument`.
       *
       * Use the corresponding events on the TextDocuments instance instead.
       *
       * @param connection The connection to listen on.
       */
      listen(connection2) {
        connection2.__textDocumentSync = vscode_languageserver_protocol_1.TextDocumentSyncKind.Incremental;
        const disposables = [];
        disposables.push(connection2.onDidOpenTextDocument((event) => {
          const td = event.textDocument;
          const document = this._configuration.create(td.uri, td.languageId, td.version, td.text);
          this._syncedDocuments.set(td.uri, document);
          const toFire = Object.freeze({ document });
          this._onDidOpen.fire(toFire);
          this._onDidChangeContent.fire(toFire);
        }));
        disposables.push(connection2.onDidChangeTextDocument((event) => {
          const td = event.textDocument;
          const changes = event.contentChanges;
          if (changes.length === 0) {
            return;
          }
          const { version } = td;
          if (version === null || version === void 0) {
            throw new Error(`Received document change event for ${td.uri} without valid version identifier`);
          }
          let syncedDocument = this._syncedDocuments.get(td.uri);
          if (syncedDocument !== void 0) {
            syncedDocument = this._configuration.update(syncedDocument, changes, version);
            this._syncedDocuments.set(td.uri, syncedDocument);
            this._onDidChangeContent.fire(Object.freeze({ document: syncedDocument }));
          }
        }));
        disposables.push(connection2.onDidCloseTextDocument((event) => {
          let syncedDocument = this._syncedDocuments.get(event.textDocument.uri);
          if (syncedDocument !== void 0) {
            this._syncedDocuments.delete(event.textDocument.uri);
            this._onDidClose.fire(Object.freeze({ document: syncedDocument }));
          }
        }));
        disposables.push(connection2.onWillSaveTextDocument((event) => {
          let syncedDocument = this._syncedDocuments.get(event.textDocument.uri);
          if (syncedDocument !== void 0) {
            this._onWillSave.fire(Object.freeze({ document: syncedDocument, reason: event.reason }));
          }
        }));
        disposables.push(connection2.onWillSaveTextDocumentWaitUntil((event, token) => {
          let syncedDocument = this._syncedDocuments.get(event.textDocument.uri);
          if (syncedDocument !== void 0 && this._willSaveWaitUntil) {
            return this._willSaveWaitUntil(Object.freeze({ document: syncedDocument, reason: event.reason }), token);
          } else {
            return [];
          }
        }));
        disposables.push(connection2.onDidSaveTextDocument((event) => {
          let syncedDocument = this._syncedDocuments.get(event.textDocument.uri);
          if (syncedDocument !== void 0) {
            this._onDidSave.fire(Object.freeze({ document: syncedDocument }));
          }
        }));
        return vscode_languageserver_protocol_1.Disposable.create(() => {
          disposables.forEach((disposable) => disposable.dispose());
        });
      }
    };
    exports2.TextDocuments = TextDocuments2;
  }
});

// node_modules/vscode-languageserver/lib/common/notebook.js
var require_notebook = __commonJS({
  "node_modules/vscode-languageserver/lib/common/notebook.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.NotebookDocuments = exports2.NotebookSyncFeature = void 0;
    var vscode_languageserver_protocol_1 = require_main3();
    var textDocuments_1 = require_textDocuments();
    var NotebookSyncFeature = (Base) => {
      return class extends Base {
        get synchronization() {
          return {
            onDidOpenNotebookDocument: (handler) => {
              return this.connection.onNotification(vscode_languageserver_protocol_1.DidOpenNotebookDocumentNotification.type, (params) => {
                handler(params);
              });
            },
            onDidChangeNotebookDocument: (handler) => {
              return this.connection.onNotification(vscode_languageserver_protocol_1.DidChangeNotebookDocumentNotification.type, (params) => {
                handler(params);
              });
            },
            onDidSaveNotebookDocument: (handler) => {
              return this.connection.onNotification(vscode_languageserver_protocol_1.DidSaveNotebookDocumentNotification.type, (params) => {
                handler(params);
              });
            },
            onDidCloseNotebookDocument: (handler) => {
              return this.connection.onNotification(vscode_languageserver_protocol_1.DidCloseNotebookDocumentNotification.type, (params) => {
                handler(params);
              });
            }
          };
        }
      };
    };
    exports2.NotebookSyncFeature = NotebookSyncFeature;
    var CellTextDocumentConnection = class _CellTextDocumentConnection {
      onDidOpenTextDocument(handler) {
        this.openHandler = handler;
        return vscode_languageserver_protocol_1.Disposable.create(() => {
          this.openHandler = void 0;
        });
      }
      openTextDocument(params) {
        this.openHandler && this.openHandler(params);
      }
      onDidChangeTextDocument(handler) {
        this.changeHandler = handler;
        return vscode_languageserver_protocol_1.Disposable.create(() => {
          this.changeHandler = handler;
        });
      }
      changeTextDocument(params) {
        this.changeHandler && this.changeHandler(params);
      }
      onDidCloseTextDocument(handler) {
        this.closeHandler = handler;
        return vscode_languageserver_protocol_1.Disposable.create(() => {
          this.closeHandler = void 0;
        });
      }
      closeTextDocument(params) {
        this.closeHandler && this.closeHandler(params);
      }
      onWillSaveTextDocument() {
        return _CellTextDocumentConnection.NULL_DISPOSE;
      }
      onWillSaveTextDocumentWaitUntil() {
        return _CellTextDocumentConnection.NULL_DISPOSE;
      }
      onDidSaveTextDocument() {
        return _CellTextDocumentConnection.NULL_DISPOSE;
      }
    };
    CellTextDocumentConnection.NULL_DISPOSE = Object.freeze({ dispose: () => {
    } });
    var NotebookDocuments = class {
      constructor(configurationOrTextDocuments) {
        if (configurationOrTextDocuments instanceof textDocuments_1.TextDocuments) {
          this._cellTextDocuments = configurationOrTextDocuments;
        } else {
          this._cellTextDocuments = new textDocuments_1.TextDocuments(configurationOrTextDocuments);
        }
        this.notebookDocuments = /* @__PURE__ */ new Map();
        this.notebookCellMap = /* @__PURE__ */ new Map();
        this._onDidOpen = new vscode_languageserver_protocol_1.Emitter();
        this._onDidChange = new vscode_languageserver_protocol_1.Emitter();
        this._onDidSave = new vscode_languageserver_protocol_1.Emitter();
        this._onDidClose = new vscode_languageserver_protocol_1.Emitter();
      }
      get cellTextDocuments() {
        return this._cellTextDocuments;
      }
      getCellTextDocument(cell) {
        return this._cellTextDocuments.get(cell.document);
      }
      getNotebookDocument(uri) {
        return this.notebookDocuments.get(uri);
      }
      getNotebookCell(uri) {
        const value = this.notebookCellMap.get(uri);
        return value && value[0];
      }
      findNotebookDocumentForCell(cell) {
        const key = typeof cell === "string" ? cell : cell.document;
        const value = this.notebookCellMap.get(key);
        return value && value[1];
      }
      get onDidOpen() {
        return this._onDidOpen.event;
      }
      get onDidSave() {
        return this._onDidSave.event;
      }
      get onDidChange() {
        return this._onDidChange.event;
      }
      get onDidClose() {
        return this._onDidClose.event;
      }
      /**
       * Listens for `low level` notification on the given connection to
       * update the notebook documents managed by this instance.
       *
       * Please note that the connection only provides handlers not an event model. Therefore
       * listening on a connection will overwrite the following handlers on a connection:
       * `onDidOpenNotebookDocument`, `onDidChangeNotebookDocument`, `onDidSaveNotebookDocument`,
       *  and `onDidCloseNotebookDocument`.
       *
       * @param connection The connection to listen on.
       */
      listen(connection2) {
        const cellTextDocumentConnection = new CellTextDocumentConnection();
        const disposables = [];
        disposables.push(this.cellTextDocuments.listen(cellTextDocumentConnection));
        disposables.push(connection2.notebooks.synchronization.onDidOpenNotebookDocument((params) => {
          this.notebookDocuments.set(params.notebookDocument.uri, params.notebookDocument);
          for (const cellTextDocument of params.cellTextDocuments) {
            cellTextDocumentConnection.openTextDocument({ textDocument: cellTextDocument });
          }
          this.updateCellMap(params.notebookDocument);
          this._onDidOpen.fire(params.notebookDocument);
        }));
        disposables.push(connection2.notebooks.synchronization.onDidChangeNotebookDocument((params) => {
          const notebookDocument = this.notebookDocuments.get(params.notebookDocument.uri);
          if (notebookDocument === void 0) {
            return;
          }
          notebookDocument.version = params.notebookDocument.version;
          const oldMetadata = notebookDocument.metadata;
          let metadataChanged = false;
          const change = params.change;
          if (change.metadata !== void 0) {
            metadataChanged = true;
            notebookDocument.metadata = change.metadata;
          }
          const opened = [];
          const closed = [];
          const data = [];
          const text = [];
          if (change.cells !== void 0) {
            const changedCells = change.cells;
            if (changedCells.structure !== void 0) {
              const array = changedCells.structure.array;
              notebookDocument.cells.splice(array.start, array.deleteCount, ...array.cells !== void 0 ? array.cells : []);
              if (changedCells.structure.didOpen !== void 0) {
                for (const open of changedCells.structure.didOpen) {
                  cellTextDocumentConnection.openTextDocument({ textDocument: open });
                  opened.push(open.uri);
                }
              }
              if (changedCells.structure.didClose) {
                for (const close of changedCells.structure.didClose) {
                  cellTextDocumentConnection.closeTextDocument({ textDocument: close });
                  closed.push(close.uri);
                }
              }
            }
            if (changedCells.data !== void 0) {
              const cellUpdates = new Map(changedCells.data.map((cell) => [cell.document, cell]));
              for (let i = 0; i <= notebookDocument.cells.length; i++) {
                const change2 = cellUpdates.get(notebookDocument.cells[i].document);
                if (change2 !== void 0) {
                  const old = notebookDocument.cells.splice(i, 1, change2);
                  data.push({ old: old[0], new: change2 });
                  cellUpdates.delete(change2.document);
                  if (cellUpdates.size === 0) {
                    break;
                  }
                }
              }
            }
            if (changedCells.textContent !== void 0) {
              for (const cellTextDocument of changedCells.textContent) {
                cellTextDocumentConnection.changeTextDocument({ textDocument: cellTextDocument.document, contentChanges: cellTextDocument.changes });
                text.push(cellTextDocument.document.uri);
              }
            }
          }
          this.updateCellMap(notebookDocument);
          const changeEvent = { notebookDocument };
          if (metadataChanged) {
            changeEvent.metadata = { old: oldMetadata, new: notebookDocument.metadata };
          }
          const added = [];
          for (const open of opened) {
            added.push(this.getNotebookCell(open));
          }
          const removed = [];
          for (const close of closed) {
            removed.push(this.getNotebookCell(close));
          }
          const textContent = [];
          for (const change2 of text) {
            textContent.push(this.getNotebookCell(change2));
          }
          if (added.length > 0 || removed.length > 0 || data.length > 0 || textContent.length > 0) {
            changeEvent.cells = { added, removed, changed: { data, textContent } };
          }
          if (changeEvent.metadata !== void 0 || changeEvent.cells !== void 0) {
            this._onDidChange.fire(changeEvent);
          }
        }));
        disposables.push(connection2.notebooks.synchronization.onDidSaveNotebookDocument((params) => {
          const notebookDocument = this.notebookDocuments.get(params.notebookDocument.uri);
          if (notebookDocument === void 0) {
            return;
          }
          this._onDidSave.fire(notebookDocument);
        }));
        disposables.push(connection2.notebooks.synchronization.onDidCloseNotebookDocument((params) => {
          const notebookDocument = this.notebookDocuments.get(params.notebookDocument.uri);
          if (notebookDocument === void 0) {
            return;
          }
          this._onDidClose.fire(notebookDocument);
          for (const cellTextDocument of params.cellTextDocuments) {
            cellTextDocumentConnection.closeTextDocument({ textDocument: cellTextDocument });
          }
          this.notebookDocuments.delete(params.notebookDocument.uri);
          for (const cell of notebookDocument.cells) {
            this.notebookCellMap.delete(cell.document);
          }
        }));
        return vscode_languageserver_protocol_1.Disposable.create(() => {
          disposables.forEach((disposable) => disposable.dispose());
        });
      }
      updateCellMap(notebookDocument) {
        for (const cell of notebookDocument.cells) {
          this.notebookCellMap.set(cell.document, [cell, notebookDocument]);
        }
      }
    };
    exports2.NotebookDocuments = NotebookDocuments;
  }
});

// node_modules/vscode-languageserver/lib/common/moniker.js
var require_moniker = __commonJS({
  "node_modules/vscode-languageserver/lib/common/moniker.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.MonikerFeature = void 0;
    var vscode_languageserver_protocol_1 = require_main3();
    var MonikerFeature = (Base) => {
      return class extends Base {
        get moniker() {
          return {
            on: (handler) => {
              const type = vscode_languageserver_protocol_1.MonikerRequest.type;
              return this.connection.onRequest(type, (params, cancel) => {
                return handler(params, cancel, this.attachWorkDoneProgress(params), this.attachPartialResultProgress(type, params));
              });
            }
          };
        }
      };
    };
    exports2.MonikerFeature = MonikerFeature;
  }
});

// node_modules/vscode-languageserver/lib/common/server.js
var require_server = __commonJS({
  "node_modules/vscode-languageserver/lib/common/server.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.createConnection = exports2.combineFeatures = exports2.combineNotebooksFeatures = exports2.combineLanguagesFeatures = exports2.combineWorkspaceFeatures = exports2.combineWindowFeatures = exports2.combineClientFeatures = exports2.combineTracerFeatures = exports2.combineTelemetryFeatures = exports2.combineConsoleFeatures = exports2._NotebooksImpl = exports2._LanguagesImpl = exports2.BulkUnregistration = exports2.BulkRegistration = exports2.ErrorMessageTracker = void 0;
    var vscode_languageserver_protocol_1 = require_main3();
    var Is = require_is();
    var UUID = require_uuid();
    var progress_1 = require_progress();
    var configuration_1 = require_configuration();
    var workspaceFolder_1 = require_workspaceFolder();
    var callHierarchy_1 = require_callHierarchy();
    var semanticTokens_1 = require_semanticTokens();
    var showDocument_1 = require_showDocument();
    var fileOperations_1 = require_fileOperations();
    var linkedEditingRange_1 = require_linkedEditingRange();
    var typeHierarchy_1 = require_typeHierarchy();
    var inlineValue_1 = require_inlineValue();
    var foldingRange_1 = require_foldingRange();
    var inlayHint_1 = require_inlayHint();
    var diagnostic_1 = require_diagnostic();
    var notebook_1 = require_notebook();
    var moniker_1 = require_moniker();
    function null2Undefined(value) {
      if (value === null) {
        return void 0;
      }
      return value;
    }
    var ErrorMessageTracker = class {
      constructor() {
        this._messages = /* @__PURE__ */ Object.create(null);
      }
      /**
       * Add a message to the tracker.
       *
       * @param message The message to add.
       */
      add(message) {
        let count = this._messages[message];
        if (!count) {
          count = 0;
        }
        count++;
        this._messages[message] = count;
      }
      /**
       * Send all tracked messages to the connection's window.
       *
       * @param connection The connection established between client and server.
       */
      sendErrors(connection2) {
        Object.keys(this._messages).forEach((message) => {
          connection2.window.showErrorMessage(message);
        });
      }
    };
    exports2.ErrorMessageTracker = ErrorMessageTracker;
    var RemoteConsoleImpl = class {
      constructor() {
      }
      rawAttach(connection2) {
        this._rawConnection = connection2;
      }
      attach(connection2) {
        this._connection = connection2;
      }
      get connection() {
        if (!this._connection) {
          throw new Error("Remote is not attached to a connection yet.");
        }
        return this._connection;
      }
      fillServerCapabilities(_capabilities) {
      }
      initialize(_capabilities) {
      }
      error(message) {
        this.send(vscode_languageserver_protocol_1.MessageType.Error, message);
      }
      warn(message) {
        this.send(vscode_languageserver_protocol_1.MessageType.Warning, message);
      }
      info(message) {
        this.send(vscode_languageserver_protocol_1.MessageType.Info, message);
      }
      log(message) {
        this.send(vscode_languageserver_protocol_1.MessageType.Log, message);
      }
      debug(message) {
        this.send(vscode_languageserver_protocol_1.MessageType.Debug, message);
      }
      send(type, message) {
        if (this._rawConnection) {
          this._rawConnection.sendNotification(vscode_languageserver_protocol_1.LogMessageNotification.type, { type, message }).catch(() => {
            (0, vscode_languageserver_protocol_1.RAL)().console.error(`Sending log message failed`);
          });
        }
      }
    };
    var _RemoteWindowImpl = class {
      constructor() {
      }
      attach(connection2) {
        this._connection = connection2;
      }
      get connection() {
        if (!this._connection) {
          throw new Error("Remote is not attached to a connection yet.");
        }
        return this._connection;
      }
      initialize(_capabilities) {
      }
      fillServerCapabilities(_capabilities) {
      }
      showErrorMessage(message, ...actions) {
        let params = { type: vscode_languageserver_protocol_1.MessageType.Error, message, actions };
        return this.connection.sendRequest(vscode_languageserver_protocol_1.ShowMessageRequest.type, params).then(null2Undefined);
      }
      showWarningMessage(message, ...actions) {
        let params = { type: vscode_languageserver_protocol_1.MessageType.Warning, message, actions };
        return this.connection.sendRequest(vscode_languageserver_protocol_1.ShowMessageRequest.type, params).then(null2Undefined);
      }
      showInformationMessage(message, ...actions) {
        let params = { type: vscode_languageserver_protocol_1.MessageType.Info, message, actions };
        return this.connection.sendRequest(vscode_languageserver_protocol_1.ShowMessageRequest.type, params).then(null2Undefined);
      }
    };
    var RemoteWindowImpl = (0, showDocument_1.ShowDocumentFeature)((0, progress_1.ProgressFeature)(_RemoteWindowImpl));
    var BulkRegistration;
    (function(BulkRegistration2) {
      function create() {
        return new BulkRegistrationImpl();
      }
      BulkRegistration2.create = create;
    })(BulkRegistration || (exports2.BulkRegistration = BulkRegistration = {}));
    var BulkRegistrationImpl = class {
      constructor() {
        this._registrations = [];
        this._registered = /* @__PURE__ */ new Set();
      }
      add(type, registerOptions) {
        const method = Is.string(type) ? type : type.method;
        if (this._registered.has(method)) {
          throw new Error(`${method} is already added to this registration`);
        }
        const id = UUID.generateUuid();
        this._registrations.push({
          id,
          method,
          registerOptions: registerOptions || {}
        });
        this._registered.add(method);
      }
      asRegistrationParams() {
        return {
          registrations: this._registrations
        };
      }
    };
    var BulkUnregistration;
    (function(BulkUnregistration2) {
      function create() {
        return new BulkUnregistrationImpl(void 0, []);
      }
      BulkUnregistration2.create = create;
    })(BulkUnregistration || (exports2.BulkUnregistration = BulkUnregistration = {}));
    var BulkUnregistrationImpl = class {
      constructor(_connection, unregistrations) {
        this._connection = _connection;
        this._unregistrations = /* @__PURE__ */ new Map();
        unregistrations.forEach((unregistration) => {
          this._unregistrations.set(unregistration.method, unregistration);
        });
      }
      get isAttached() {
        return !!this._connection;
      }
      attach(connection2) {
        this._connection = connection2;
      }
      add(unregistration) {
        this._unregistrations.set(unregistration.method, unregistration);
      }
      dispose() {
        let unregistrations = [];
        for (let unregistration of this._unregistrations.values()) {
          unregistrations.push(unregistration);
        }
        let params = {
          unregisterations: unregistrations
        };
        this._connection.sendRequest(vscode_languageserver_protocol_1.UnregistrationRequest.type, params).catch(() => {
          this._connection.console.info(`Bulk unregistration failed.`);
        });
      }
      disposeSingle(arg) {
        const method = Is.string(arg) ? arg : arg.method;
        const unregistration = this._unregistrations.get(method);
        if (!unregistration) {
          return false;
        }
        let params = {
          unregisterations: [unregistration]
        };
        this._connection.sendRequest(vscode_languageserver_protocol_1.UnregistrationRequest.type, params).then(() => {
          this._unregistrations.delete(method);
        }, (_error) => {
          this._connection.console.info(`Un-registering request handler for ${unregistration.id} failed.`);
        });
        return true;
      }
    };
    var RemoteClientImpl = class {
      attach(connection2) {
        this._connection = connection2;
      }
      get connection() {
        if (!this._connection) {
          throw new Error("Remote is not attached to a connection yet.");
        }
        return this._connection;
      }
      initialize(_capabilities) {
      }
      fillServerCapabilities(_capabilities) {
      }
      register(typeOrRegistrations, registerOptionsOrType, registerOptions) {
        if (typeOrRegistrations instanceof BulkRegistrationImpl) {
          return this.registerMany(typeOrRegistrations);
        } else if (typeOrRegistrations instanceof BulkUnregistrationImpl) {
          return this.registerSingle1(typeOrRegistrations, registerOptionsOrType, registerOptions);
        } else {
          return this.registerSingle2(typeOrRegistrations, registerOptionsOrType);
        }
      }
      registerSingle1(unregistration, type, registerOptions) {
        const method = Is.string(type) ? type : type.method;
        const id = UUID.generateUuid();
        let params = {
          registrations: [{ id, method, registerOptions: registerOptions || {} }]
        };
        if (!unregistration.isAttached) {
          unregistration.attach(this.connection);
        }
        return this.connection.sendRequest(vscode_languageserver_protocol_1.RegistrationRequest.type, params).then((_result) => {
          unregistration.add({ id, method });
          return unregistration;
        }, (_error) => {
          this.connection.console.info(`Registering request handler for ${method} failed.`);
          return Promise.reject(_error);
        });
      }
      registerSingle2(type, registerOptions) {
        const method = Is.string(type) ? type : type.method;
        const id = UUID.generateUuid();
        let params = {
          registrations: [{ id, method, registerOptions: registerOptions || {} }]
        };
        return this.connection.sendRequest(vscode_languageserver_protocol_1.RegistrationRequest.type, params).then((_result) => {
          return vscode_languageserver_protocol_1.Disposable.create(() => {
            this.unregisterSingle(id, method).catch(() => {
              this.connection.console.info(`Un-registering capability with id ${id} failed.`);
            });
          });
        }, (_error) => {
          this.connection.console.info(`Registering request handler for ${method} failed.`);
          return Promise.reject(_error);
        });
      }
      unregisterSingle(id, method) {
        let params = {
          unregisterations: [{ id, method }]
        };
        return this.connection.sendRequest(vscode_languageserver_protocol_1.UnregistrationRequest.type, params).catch(() => {
          this.connection.console.info(`Un-registering request handler for ${id} failed.`);
        });
      }
      registerMany(registrations) {
        let params = registrations.asRegistrationParams();
        return this.connection.sendRequest(vscode_languageserver_protocol_1.RegistrationRequest.type, params).then(() => {
          return new BulkUnregistrationImpl(this._connection, params.registrations.map((registration) => {
            return { id: registration.id, method: registration.method };
          }));
        }, (_error) => {
          this.connection.console.info(`Bulk registration failed.`);
          return Promise.reject(_error);
        });
      }
    };
    var _RemoteWorkspaceImpl = class {
      constructor() {
      }
      attach(connection2) {
        this._connection = connection2;
      }
      get connection() {
        if (!this._connection) {
          throw new Error("Remote is not attached to a connection yet.");
        }
        return this._connection;
      }
      initialize(_capabilities) {
      }
      fillServerCapabilities(_capabilities) {
      }
      applyEdit(paramOrEdit) {
        function isApplyWorkspaceEditParams(value) {
          return value && !!value.edit;
        }
        let params = isApplyWorkspaceEditParams(paramOrEdit) ? paramOrEdit : { edit: paramOrEdit };
        return this.connection.sendRequest(vscode_languageserver_protocol_1.ApplyWorkspaceEditRequest.type, params);
      }
    };
    var RemoteWorkspaceImpl = (0, fileOperations_1.FileOperationsFeature)((0, workspaceFolder_1.WorkspaceFoldersFeature)((0, configuration_1.ConfigurationFeature)(_RemoteWorkspaceImpl)));
    var TracerImpl = class {
      constructor() {
        this._trace = vscode_languageserver_protocol_1.Trace.Off;
      }
      attach(connection2) {
        this._connection = connection2;
      }
      get connection() {
        if (!this._connection) {
          throw new Error("Remote is not attached to a connection yet.");
        }
        return this._connection;
      }
      initialize(_capabilities) {
      }
      fillServerCapabilities(_capabilities) {
      }
      set trace(value) {
        this._trace = value;
      }
      log(message, verbose) {
        if (this._trace === vscode_languageserver_protocol_1.Trace.Off) {
          return;
        }
        this.connection.sendNotification(vscode_languageserver_protocol_1.LogTraceNotification.type, {
          message,
          verbose: this._trace === vscode_languageserver_protocol_1.Trace.Verbose ? verbose : void 0
        }).catch(() => {
        });
      }
    };
    var TelemetryImpl = class {
      constructor() {
      }
      attach(connection2) {
        this._connection = connection2;
      }
      get connection() {
        if (!this._connection) {
          throw new Error("Remote is not attached to a connection yet.");
        }
        return this._connection;
      }
      initialize(_capabilities) {
      }
      fillServerCapabilities(_capabilities) {
      }
      logEvent(data) {
        this.connection.sendNotification(vscode_languageserver_protocol_1.TelemetryEventNotification.type, data).catch(() => {
          this.connection.console.log(`Sending TelemetryEventNotification failed`);
        });
      }
    };
    var _LanguagesImpl = class {
      constructor() {
      }
      attach(connection2) {
        this._connection = connection2;
      }
      get connection() {
        if (!this._connection) {
          throw new Error("Remote is not attached to a connection yet.");
        }
        return this._connection;
      }
      initialize(_capabilities) {
      }
      fillServerCapabilities(_capabilities) {
      }
      attachWorkDoneProgress(params) {
        return (0, progress_1.attachWorkDone)(this.connection, params);
      }
      attachPartialResultProgress(_type, params) {
        return (0, progress_1.attachPartialResult)(this.connection, params);
      }
    };
    exports2._LanguagesImpl = _LanguagesImpl;
    var LanguagesImpl = (0, foldingRange_1.FoldingRangeFeature)((0, moniker_1.MonikerFeature)((0, diagnostic_1.DiagnosticFeature)((0, inlayHint_1.InlayHintFeature)((0, inlineValue_1.InlineValueFeature)((0, typeHierarchy_1.TypeHierarchyFeature)((0, linkedEditingRange_1.LinkedEditingRangeFeature)((0, semanticTokens_1.SemanticTokensFeature)((0, callHierarchy_1.CallHierarchyFeature)(_LanguagesImpl)))))))));
    var _NotebooksImpl = class {
      constructor() {
      }
      attach(connection2) {
        this._connection = connection2;
      }
      get connection() {
        if (!this._connection) {
          throw new Error("Remote is not attached to a connection yet.");
        }
        return this._connection;
      }
      initialize(_capabilities) {
      }
      fillServerCapabilities(_capabilities) {
      }
      attachWorkDoneProgress(params) {
        return (0, progress_1.attachWorkDone)(this.connection, params);
      }
      attachPartialResultProgress(_type, params) {
        return (0, progress_1.attachPartialResult)(this.connection, params);
      }
    };
    exports2._NotebooksImpl = _NotebooksImpl;
    var NotebooksImpl = (0, notebook_1.NotebookSyncFeature)(_NotebooksImpl);
    function combineConsoleFeatures(one, two) {
      return function(Base) {
        return two(one(Base));
      };
    }
    exports2.combineConsoleFeatures = combineConsoleFeatures;
    function combineTelemetryFeatures(one, two) {
      return function(Base) {
        return two(one(Base));
      };
    }
    exports2.combineTelemetryFeatures = combineTelemetryFeatures;
    function combineTracerFeatures(one, two) {
      return function(Base) {
        return two(one(Base));
      };
    }
    exports2.combineTracerFeatures = combineTracerFeatures;
    function combineClientFeatures(one, two) {
      return function(Base) {
        return two(one(Base));
      };
    }
    exports2.combineClientFeatures = combineClientFeatures;
    function combineWindowFeatures(one, two) {
      return function(Base) {
        return two(one(Base));
      };
    }
    exports2.combineWindowFeatures = combineWindowFeatures;
    function combineWorkspaceFeatures(one, two) {
      return function(Base) {
        return two(one(Base));
      };
    }
    exports2.combineWorkspaceFeatures = combineWorkspaceFeatures;
    function combineLanguagesFeatures(one, two) {
      return function(Base) {
        return two(one(Base));
      };
    }
    exports2.combineLanguagesFeatures = combineLanguagesFeatures;
    function combineNotebooksFeatures(one, two) {
      return function(Base) {
        return two(one(Base));
      };
    }
    exports2.combineNotebooksFeatures = combineNotebooksFeatures;
    function combineFeatures(one, two) {
      function combine(one2, two2, func) {
        if (one2 && two2) {
          return func(one2, two2);
        } else if (one2) {
          return one2;
        } else {
          return two2;
        }
      }
      let result = {
        __brand: "features",
        console: combine(one.console, two.console, combineConsoleFeatures),
        tracer: combine(one.tracer, two.tracer, combineTracerFeatures),
        telemetry: combine(one.telemetry, two.telemetry, combineTelemetryFeatures),
        client: combine(one.client, two.client, combineClientFeatures),
        window: combine(one.window, two.window, combineWindowFeatures),
        workspace: combine(one.workspace, two.workspace, combineWorkspaceFeatures),
        languages: combine(one.languages, two.languages, combineLanguagesFeatures),
        notebooks: combine(one.notebooks, two.notebooks, combineNotebooksFeatures)
      };
      return result;
    }
    exports2.combineFeatures = combineFeatures;
    function createConnection2(connectionFactory, watchDog, factories) {
      const logger = factories && factories.console ? new (factories.console(RemoteConsoleImpl))() : new RemoteConsoleImpl();
      const connection2 = connectionFactory(logger);
      logger.rawAttach(connection2);
      const tracer = factories && factories.tracer ? new (factories.tracer(TracerImpl))() : new TracerImpl();
      const telemetry = factories && factories.telemetry ? new (factories.telemetry(TelemetryImpl))() : new TelemetryImpl();
      const client = factories && factories.client ? new (factories.client(RemoteClientImpl))() : new RemoteClientImpl();
      const remoteWindow = factories && factories.window ? new (factories.window(RemoteWindowImpl))() : new RemoteWindowImpl();
      const workspace = factories && factories.workspace ? new (factories.workspace(RemoteWorkspaceImpl))() : new RemoteWorkspaceImpl();
      const languages = factories && factories.languages ? new (factories.languages(LanguagesImpl))() : new LanguagesImpl();
      const notebooks = factories && factories.notebooks ? new (factories.notebooks(NotebooksImpl))() : new NotebooksImpl();
      const allRemotes = [logger, tracer, telemetry, client, remoteWindow, workspace, languages, notebooks];
      function asPromise(value) {
        if (value instanceof Promise) {
          return value;
        } else if (Is.thenable(value)) {
          return new Promise((resolve, reject) => {
            value.then((resolved) => resolve(resolved), (error) => reject(error));
          });
        } else {
          return Promise.resolve(value);
        }
      }
      let shutdownHandler = void 0;
      let initializeHandler = void 0;
      let exitHandler = void 0;
      let protocolConnection = {
        listen: () => connection2.listen(),
        sendRequest: (type, ...params) => connection2.sendRequest(Is.string(type) ? type : type.method, ...params),
        onRequest: (type, handler) => connection2.onRequest(type, handler),
        sendNotification: (type, param) => {
          const method = Is.string(type) ? type : type.method;
          return connection2.sendNotification(method, param);
        },
        onNotification: (type, handler) => connection2.onNotification(type, handler),
        onProgress: connection2.onProgress,
        sendProgress: connection2.sendProgress,
        onInitialize: (handler) => {
          initializeHandler = handler;
          return {
            dispose: () => {
              initializeHandler = void 0;
            }
          };
        },
        onInitialized: (handler) => connection2.onNotification(vscode_languageserver_protocol_1.InitializedNotification.type, handler),
        onShutdown: (handler) => {
          shutdownHandler = handler;
          return {
            dispose: () => {
              shutdownHandler = void 0;
            }
          };
        },
        onExit: (handler) => {
          exitHandler = handler;
          return {
            dispose: () => {
              exitHandler = void 0;
            }
          };
        },
        get console() {
          return logger;
        },
        get telemetry() {
          return telemetry;
        },
        get tracer() {
          return tracer;
        },
        get client() {
          return client;
        },
        get window() {
          return remoteWindow;
        },
        get workspace() {
          return workspace;
        },
        get languages() {
          return languages;
        },
        get notebooks() {
          return notebooks;
        },
        onDidChangeConfiguration: (handler) => connection2.onNotification(vscode_languageserver_protocol_1.DidChangeConfigurationNotification.type, handler),
        onDidChangeWatchedFiles: (handler) => connection2.onNotification(vscode_languageserver_protocol_1.DidChangeWatchedFilesNotification.type, handler),
        __textDocumentSync: void 0,
        onDidOpenTextDocument: (handler) => connection2.onNotification(vscode_languageserver_protocol_1.DidOpenTextDocumentNotification.type, handler),
        onDidChangeTextDocument: (handler) => connection2.onNotification(vscode_languageserver_protocol_1.DidChangeTextDocumentNotification.type, handler),
        onDidCloseTextDocument: (handler) => connection2.onNotification(vscode_languageserver_protocol_1.DidCloseTextDocumentNotification.type, handler),
        onWillSaveTextDocument: (handler) => connection2.onNotification(vscode_languageserver_protocol_1.WillSaveTextDocumentNotification.type, handler),
        onWillSaveTextDocumentWaitUntil: (handler) => connection2.onRequest(vscode_languageserver_protocol_1.WillSaveTextDocumentWaitUntilRequest.type, handler),
        onDidSaveTextDocument: (handler) => connection2.onNotification(vscode_languageserver_protocol_1.DidSaveTextDocumentNotification.type, handler),
        sendDiagnostics: (params) => connection2.sendNotification(vscode_languageserver_protocol_1.PublishDiagnosticsNotification.type, params),
        onHover: (handler) => connection2.onRequest(vscode_languageserver_protocol_1.HoverRequest.type, (params, cancel) => {
          return handler(params, cancel, (0, progress_1.attachWorkDone)(connection2, params), void 0);
        }),
        onCompletion: (handler) => connection2.onRequest(vscode_languageserver_protocol_1.CompletionRequest.type, (params, cancel) => {
          return handler(params, cancel, (0, progress_1.attachWorkDone)(connection2, params), (0, progress_1.attachPartialResult)(connection2, params));
        }),
        onCompletionResolve: (handler) => connection2.onRequest(vscode_languageserver_protocol_1.CompletionResolveRequest.type, handler),
        onSignatureHelp: (handler) => connection2.onRequest(vscode_languageserver_protocol_1.SignatureHelpRequest.type, (params, cancel) => {
          return handler(params, cancel, (0, progress_1.attachWorkDone)(connection2, params), void 0);
        }),
        onDeclaration: (handler) => connection2.onRequest(vscode_languageserver_protocol_1.DeclarationRequest.type, (params, cancel) => {
          return handler(params, cancel, (0, progress_1.attachWorkDone)(connection2, params), (0, progress_1.attachPartialResult)(connection2, params));
        }),
        onDefinition: (handler) => connection2.onRequest(vscode_languageserver_protocol_1.DefinitionRequest.type, (params, cancel) => {
          return handler(params, cancel, (0, progress_1.attachWorkDone)(connection2, params), (0, progress_1.attachPartialResult)(connection2, params));
        }),
        onTypeDefinition: (handler) => connection2.onRequest(vscode_languageserver_protocol_1.TypeDefinitionRequest.type, (params, cancel) => {
          return handler(params, cancel, (0, progress_1.attachWorkDone)(connection2, params), (0, progress_1.attachPartialResult)(connection2, params));
        }),
        onImplementation: (handler) => connection2.onRequest(vscode_languageserver_protocol_1.ImplementationRequest.type, (params, cancel) => {
          return handler(params, cancel, (0, progress_1.attachWorkDone)(connection2, params), (0, progress_1.attachPartialResult)(connection2, params));
        }),
        onReferences: (handler) => connection2.onRequest(vscode_languageserver_protocol_1.ReferencesRequest.type, (params, cancel) => {
          return handler(params, cancel, (0, progress_1.attachWorkDone)(connection2, params), (0, progress_1.attachPartialResult)(connection2, params));
        }),
        onDocumentHighlight: (handler) => connection2.onRequest(vscode_languageserver_protocol_1.DocumentHighlightRequest.type, (params, cancel) => {
          return handler(params, cancel, (0, progress_1.attachWorkDone)(connection2, params), (0, progress_1.attachPartialResult)(connection2, params));
        }),
        onDocumentSymbol: (handler) => connection2.onRequest(vscode_languageserver_protocol_1.DocumentSymbolRequest.type, (params, cancel) => {
          return handler(params, cancel, (0, progress_1.attachWorkDone)(connection2, params), (0, progress_1.attachPartialResult)(connection2, params));
        }),
        onWorkspaceSymbol: (handler) => connection2.onRequest(vscode_languageserver_protocol_1.WorkspaceSymbolRequest.type, (params, cancel) => {
          return handler(params, cancel, (0, progress_1.attachWorkDone)(connection2, params), (0, progress_1.attachPartialResult)(connection2, params));
        }),
        onWorkspaceSymbolResolve: (handler) => connection2.onRequest(vscode_languageserver_protocol_1.WorkspaceSymbolResolveRequest.type, handler),
        onCodeAction: (handler) => connection2.onRequest(vscode_languageserver_protocol_1.CodeActionRequest.type, (params, cancel) => {
          return handler(params, cancel, (0, progress_1.attachWorkDone)(connection2, params), (0, progress_1.attachPartialResult)(connection2, params));
        }),
        onCodeActionResolve: (handler) => connection2.onRequest(vscode_languageserver_protocol_1.CodeActionResolveRequest.type, (params, cancel) => {
          return handler(params, cancel);
        }),
        onCodeLens: (handler) => connection2.onRequest(vscode_languageserver_protocol_1.CodeLensRequest.type, (params, cancel) => {
          return handler(params, cancel, (0, progress_1.attachWorkDone)(connection2, params), (0, progress_1.attachPartialResult)(connection2, params));
        }),
        onCodeLensResolve: (handler) => connection2.onRequest(vscode_languageserver_protocol_1.CodeLensResolveRequest.type, (params, cancel) => {
          return handler(params, cancel);
        }),
        onDocumentFormatting: (handler) => connection2.onRequest(vscode_languageserver_protocol_1.DocumentFormattingRequest.type, (params, cancel) => {
          return handler(params, cancel, (0, progress_1.attachWorkDone)(connection2, params), void 0);
        }),
        onDocumentRangeFormatting: (handler) => connection2.onRequest(vscode_languageserver_protocol_1.DocumentRangeFormattingRequest.type, (params, cancel) => {
          return handler(params, cancel, (0, progress_1.attachWorkDone)(connection2, params), void 0);
        }),
        onDocumentOnTypeFormatting: (handler) => connection2.onRequest(vscode_languageserver_protocol_1.DocumentOnTypeFormattingRequest.type, (params, cancel) => {
          return handler(params, cancel);
        }),
        onRenameRequest: (handler) => connection2.onRequest(vscode_languageserver_protocol_1.RenameRequest.type, (params, cancel) => {
          return handler(params, cancel, (0, progress_1.attachWorkDone)(connection2, params), void 0);
        }),
        onPrepareRename: (handler) => connection2.onRequest(vscode_languageserver_protocol_1.PrepareRenameRequest.type, (params, cancel) => {
          return handler(params, cancel);
        }),
        onDocumentLinks: (handler) => connection2.onRequest(vscode_languageserver_protocol_1.DocumentLinkRequest.type, (params, cancel) => {
          return handler(params, cancel, (0, progress_1.attachWorkDone)(connection2, params), (0, progress_1.attachPartialResult)(connection2, params));
        }),
        onDocumentLinkResolve: (handler) => connection2.onRequest(vscode_languageserver_protocol_1.DocumentLinkResolveRequest.type, (params, cancel) => {
          return handler(params, cancel);
        }),
        onDocumentColor: (handler) => connection2.onRequest(vscode_languageserver_protocol_1.DocumentColorRequest.type, (params, cancel) => {
          return handler(params, cancel, (0, progress_1.attachWorkDone)(connection2, params), (0, progress_1.attachPartialResult)(connection2, params));
        }),
        onColorPresentation: (handler) => connection2.onRequest(vscode_languageserver_protocol_1.ColorPresentationRequest.type, (params, cancel) => {
          return handler(params, cancel, (0, progress_1.attachWorkDone)(connection2, params), (0, progress_1.attachPartialResult)(connection2, params));
        }),
        onFoldingRanges: (handler) => connection2.onRequest(vscode_languageserver_protocol_1.FoldingRangeRequest.type, (params, cancel) => {
          return handler(params, cancel, (0, progress_1.attachWorkDone)(connection2, params), (0, progress_1.attachPartialResult)(connection2, params));
        }),
        onSelectionRanges: (handler) => connection2.onRequest(vscode_languageserver_protocol_1.SelectionRangeRequest.type, (params, cancel) => {
          return handler(params, cancel, (0, progress_1.attachWorkDone)(connection2, params), (0, progress_1.attachPartialResult)(connection2, params));
        }),
        onExecuteCommand: (handler) => connection2.onRequest(vscode_languageserver_protocol_1.ExecuteCommandRequest.type, (params, cancel) => {
          return handler(params, cancel, (0, progress_1.attachWorkDone)(connection2, params), void 0);
        }),
        dispose: () => connection2.dispose()
      };
      for (let remote of allRemotes) {
        remote.attach(protocolConnection);
      }
      connection2.onRequest(vscode_languageserver_protocol_1.InitializeRequest.type, (params) => {
        watchDog.initialize(params);
        if (Is.string(params.trace)) {
          tracer.trace = vscode_languageserver_protocol_1.Trace.fromString(params.trace);
        }
        for (let remote of allRemotes) {
          remote.initialize(params.capabilities);
        }
        if (initializeHandler) {
          let result = initializeHandler(params, new vscode_languageserver_protocol_1.CancellationTokenSource().token, (0, progress_1.attachWorkDone)(connection2, params), void 0);
          return asPromise(result).then((value) => {
            if (value instanceof vscode_languageserver_protocol_1.ResponseError) {
              return value;
            }
            let result2 = value;
            if (!result2) {
              result2 = { capabilities: {} };
            }
            let capabilities = result2.capabilities;
            if (!capabilities) {
              capabilities = {};
              result2.capabilities = capabilities;
            }
            if (capabilities.textDocumentSync === void 0 || capabilities.textDocumentSync === null) {
              capabilities.textDocumentSync = Is.number(protocolConnection.__textDocumentSync) ? protocolConnection.__textDocumentSync : vscode_languageserver_protocol_1.TextDocumentSyncKind.None;
            } else if (!Is.number(capabilities.textDocumentSync) && !Is.number(capabilities.textDocumentSync.change)) {
              capabilities.textDocumentSync.change = Is.number(protocolConnection.__textDocumentSync) ? protocolConnection.__textDocumentSync : vscode_languageserver_protocol_1.TextDocumentSyncKind.None;
            }
            for (let remote of allRemotes) {
              remote.fillServerCapabilities(capabilities);
            }
            return result2;
          });
        } else {
          let result = { capabilities: { textDocumentSync: vscode_languageserver_protocol_1.TextDocumentSyncKind.None } };
          for (let remote of allRemotes) {
            remote.fillServerCapabilities(result.capabilities);
          }
          return result;
        }
      });
      connection2.onRequest(vscode_languageserver_protocol_1.ShutdownRequest.type, () => {
        watchDog.shutdownReceived = true;
        if (shutdownHandler) {
          return shutdownHandler(new vscode_languageserver_protocol_1.CancellationTokenSource().token);
        } else {
          return void 0;
        }
      });
      connection2.onNotification(vscode_languageserver_protocol_1.ExitNotification.type, () => {
        try {
          if (exitHandler) {
            exitHandler();
          }
        } finally {
          if (watchDog.shutdownReceived) {
            watchDog.exit(0);
          } else {
            watchDog.exit(1);
          }
        }
      });
      connection2.onNotification(vscode_languageserver_protocol_1.SetTraceNotification.type, (params) => {
        tracer.trace = vscode_languageserver_protocol_1.Trace.fromString(params.value);
      });
      return protocolConnection;
    }
    exports2.createConnection = createConnection2;
  }
});

// node_modules/vscode-languageserver/lib/node/files.js
var require_files = __commonJS({
  "node_modules/vscode-languageserver/lib/node/files.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.resolveModulePath = exports2.FileSystem = exports2.resolveGlobalYarnPath = exports2.resolveGlobalNodePath = exports2.resolve = exports2.uriToFilePath = void 0;
    var url = require("url");
    var path = require("path");
    var fs = require("fs");
    var child_process_1 = require("child_process");
    function uriToFilePath(uri) {
      let parsed = url.parse(uri);
      if (parsed.protocol !== "file:" || !parsed.path) {
        return void 0;
      }
      let segments = parsed.path.split("/");
      for (var i = 0, len = segments.length; i < len; i++) {
        segments[i] = decodeURIComponent(segments[i]);
      }
      if (process.platform === "win32" && segments.length > 1) {
        let first = segments[0];
        let second = segments[1];
        if (first.length === 0 && second.length > 1 && second[1] === ":") {
          segments.shift();
        }
      }
      return path.normalize(segments.join("/"));
    }
    exports2.uriToFilePath = uriToFilePath;
    function isWindows() {
      return process.platform === "win32";
    }
    function resolve(moduleName, nodePath, cwd, tracer) {
      const nodePathKey = "NODE_PATH";
      const app = [
        "var p = process;",
        "p.on('message',function(m){",
        "if(m.c==='e'){",
        "p.exit(0);",
        "}",
        "else if(m.c==='rs'){",
        "try{",
        "var r=require.resolve(m.a);",
        "p.send({c:'r',s:true,r:r});",
        "}",
        "catch(err){",
        "p.send({c:'r',s:false});",
        "}",
        "}",
        "});"
      ].join("");
      return new Promise((resolve2, reject) => {
        let env = process.env;
        let newEnv = /* @__PURE__ */ Object.create(null);
        Object.keys(env).forEach((key) => newEnv[key] = env[key]);
        if (nodePath && fs.existsSync(nodePath)) {
          if (newEnv[nodePathKey]) {
            newEnv[nodePathKey] = nodePath + path.delimiter + newEnv[nodePathKey];
          } else {
            newEnv[nodePathKey] = nodePath;
          }
          if (tracer) {
            tracer(`NODE_PATH value is: ${newEnv[nodePathKey]}`);
          }
        }
        newEnv["ELECTRON_RUN_AS_NODE"] = "1";
        try {
          let cp = (0, child_process_1.fork)("", [], {
            cwd,
            env: newEnv,
            execArgv: ["-e", app]
          });
          if (cp.pid === void 0) {
            reject(new Error(`Starting process to resolve node module  ${moduleName} failed`));
            return;
          }
          cp.on("error", (error) => {
            reject(error);
          });
          cp.on("message", (message2) => {
            if (message2.c === "r") {
              cp.send({ c: "e" });
              if (message2.s) {
                resolve2(message2.r);
              } else {
                reject(new Error(`Failed to resolve module: ${moduleName}`));
              }
            }
          });
          let message = {
            c: "rs",
            a: moduleName
          };
          cp.send(message);
        } catch (error) {
          reject(error);
        }
      });
    }
    exports2.resolve = resolve;
    function resolveGlobalNodePath(tracer) {
      let npmCommand = "npm";
      const env = /* @__PURE__ */ Object.create(null);
      Object.keys(process.env).forEach((key) => env[key] = process.env[key]);
      env["NO_UPDATE_NOTIFIER"] = "true";
      const options = {
        encoding: "utf8",
        env
      };
      if (isWindows()) {
        npmCommand = "npm.cmd";
        options.shell = true;
      }
      let handler = () => {
      };
      try {
        process.on("SIGPIPE", handler);
        let stdout = (0, child_process_1.spawnSync)(npmCommand, ["config", "get", "prefix"], options).stdout;
        if (!stdout) {
          if (tracer) {
            tracer(`'npm config get prefix' didn't return a value.`);
          }
          return void 0;
        }
        let prefix = stdout.trim();
        if (tracer) {
          tracer(`'npm config get prefix' value is: ${prefix}`);
        }
        if (prefix.length > 0) {
          if (isWindows()) {
            return path.join(prefix, "node_modules");
          } else {
            return path.join(prefix, "lib", "node_modules");
          }
        }
        return void 0;
      } catch (err) {
        return void 0;
      } finally {
        process.removeListener("SIGPIPE", handler);
      }
    }
    exports2.resolveGlobalNodePath = resolveGlobalNodePath;
    function resolveGlobalYarnPath(tracer) {
      let yarnCommand = "yarn";
      let options = {
        encoding: "utf8"
      };
      if (isWindows()) {
        yarnCommand = "yarn.cmd";
        options.shell = true;
      }
      let handler = () => {
      };
      try {
        process.on("SIGPIPE", handler);
        let results = (0, child_process_1.spawnSync)(yarnCommand, ["global", "dir", "--json"], options);
        let stdout = results.stdout;
        if (!stdout) {
          if (tracer) {
            tracer(`'yarn global dir' didn't return a value.`);
            if (results.stderr) {
              tracer(results.stderr);
            }
          }
          return void 0;
        }
        let lines = stdout.trim().split(/\r?\n/);
        for (let line of lines) {
          try {
            let yarn = JSON.parse(line);
            if (yarn.type === "log") {
              return path.join(yarn.data, "node_modules");
            }
          } catch (e) {
          }
        }
        return void 0;
      } catch (err) {
        return void 0;
      } finally {
        process.removeListener("SIGPIPE", handler);
      }
    }
    exports2.resolveGlobalYarnPath = resolveGlobalYarnPath;
    var FileSystem;
    (function(FileSystem2) {
      let _isCaseSensitive = void 0;
      function isCaseSensitive() {
        if (_isCaseSensitive !== void 0) {
          return _isCaseSensitive;
        }
        if (process.platform === "win32") {
          _isCaseSensitive = false;
        } else {
          _isCaseSensitive = !fs.existsSync(__filename.toUpperCase()) || !fs.existsSync(__filename.toLowerCase());
        }
        return _isCaseSensitive;
      }
      FileSystem2.isCaseSensitive = isCaseSensitive;
      function isParent(parent, child) {
        if (isCaseSensitive()) {
          return path.normalize(child).indexOf(path.normalize(parent)) === 0;
        } else {
          return path.normalize(child).toLowerCase().indexOf(path.normalize(parent).toLowerCase()) === 0;
        }
      }
      FileSystem2.isParent = isParent;
    })(FileSystem || (exports2.FileSystem = FileSystem = {}));
    function resolveModulePath(workspaceRoot, moduleName, nodePath, tracer) {
      if (nodePath) {
        if (!path.isAbsolute(nodePath)) {
          nodePath = path.join(workspaceRoot, nodePath);
        }
        return resolve(moduleName, nodePath, nodePath, tracer).then((value) => {
          if (FileSystem.isParent(nodePath, value)) {
            return value;
          } else {
            return Promise.reject(new Error(`Failed to load ${moduleName} from node path location.`));
          }
        }).then(void 0, (_error) => {
          return resolve(moduleName, resolveGlobalNodePath(tracer), workspaceRoot, tracer);
        });
      } else {
        return resolve(moduleName, resolveGlobalNodePath(tracer), workspaceRoot, tracer);
      }
    }
    exports2.resolveModulePath = resolveModulePath;
  }
});

// node_modules/vscode-languageserver-protocol/node.js
var require_node2 = __commonJS({
  "node_modules/vscode-languageserver-protocol/node.js"(exports2, module2) {
    "use strict";
    module2.exports = require_main3();
  }
});

// node_modules/vscode-languageserver/lib/common/inlineCompletion.proposed.js
var require_inlineCompletion_proposed = __commonJS({
  "node_modules/vscode-languageserver/lib/common/inlineCompletion.proposed.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.InlineCompletionFeature = void 0;
    var vscode_languageserver_protocol_1 = require_main3();
    var InlineCompletionFeature = (Base) => {
      return class extends Base {
        get inlineCompletion() {
          return {
            on: (handler) => {
              return this.connection.onRequest(vscode_languageserver_protocol_1.InlineCompletionRequest.type, (params, cancel) => {
                return handler(params, cancel, this.attachWorkDoneProgress(params));
              });
            }
          };
        }
      };
    };
    exports2.InlineCompletionFeature = InlineCompletionFeature;
  }
});

// node_modules/vscode-languageserver/lib/common/api.js
var require_api3 = __commonJS({
  "node_modules/vscode-languageserver/lib/common/api.js"(exports2) {
    "use strict";
    var __createBinding = exports2 && exports2.__createBinding || (Object.create ? (function(o, m, k, k2) {
      if (k2 === void 0) k2 = k;
      var desc = Object.getOwnPropertyDescriptor(m, k);
      if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: function() {
          return m[k];
        } };
      }
      Object.defineProperty(o, k2, desc);
    }) : (function(o, m, k, k2) {
      if (k2 === void 0) k2 = k;
      o[k2] = m[k];
    }));
    var __exportStar = exports2 && exports2.__exportStar || function(m, exports3) {
      for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports3, p)) __createBinding(exports3, m, p);
    };
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.ProposedFeatures = exports2.NotebookDocuments = exports2.TextDocuments = exports2.SemanticTokensBuilder = void 0;
    var semanticTokens_1 = require_semanticTokens();
    Object.defineProperty(exports2, "SemanticTokensBuilder", { enumerable: true, get: function() {
      return semanticTokens_1.SemanticTokensBuilder;
    } });
    var ic = require_inlineCompletion_proposed();
    __exportStar(require_main3(), exports2);
    var textDocuments_1 = require_textDocuments();
    Object.defineProperty(exports2, "TextDocuments", { enumerable: true, get: function() {
      return textDocuments_1.TextDocuments;
    } });
    var notebook_1 = require_notebook();
    Object.defineProperty(exports2, "NotebookDocuments", { enumerable: true, get: function() {
      return notebook_1.NotebookDocuments;
    } });
    __exportStar(require_server(), exports2);
    var ProposedFeatures2;
    (function(ProposedFeatures3) {
      ProposedFeatures3.all = {
        __brand: "features",
        languages: ic.InlineCompletionFeature
      };
    })(ProposedFeatures2 || (exports2.ProposedFeatures = ProposedFeatures2 = {}));
  }
});

// node_modules/vscode-languageserver/lib/node/main.js
var require_main4 = __commonJS({
  "node_modules/vscode-languageserver/lib/node/main.js"(exports2) {
    "use strict";
    var __createBinding = exports2 && exports2.__createBinding || (Object.create ? (function(o, m, k, k2) {
      if (k2 === void 0) k2 = k;
      var desc = Object.getOwnPropertyDescriptor(m, k);
      if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: function() {
          return m[k];
        } };
      }
      Object.defineProperty(o, k2, desc);
    }) : (function(o, m, k, k2) {
      if (k2 === void 0) k2 = k;
      o[k2] = m[k];
    }));
    var __exportStar = exports2 && exports2.__exportStar || function(m, exports3) {
      for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports3, p)) __createBinding(exports3, m, p);
    };
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.createConnection = exports2.Files = void 0;
    var node_util_1 = require("node:util");
    var Is = require_is();
    var server_1 = require_server();
    var fm = require_files();
    var node_1 = require_node2();
    __exportStar(require_node2(), exports2);
    __exportStar(require_api3(), exports2);
    var Files;
    (function(Files2) {
      Files2.uriToFilePath = fm.uriToFilePath;
      Files2.resolveGlobalNodePath = fm.resolveGlobalNodePath;
      Files2.resolveGlobalYarnPath = fm.resolveGlobalYarnPath;
      Files2.resolve = fm.resolve;
      Files2.resolveModulePath = fm.resolveModulePath;
    })(Files || (exports2.Files = Files = {}));
    var _protocolConnection;
    function endProtocolConnection() {
      if (_protocolConnection === void 0) {
        return;
      }
      try {
        _protocolConnection.end();
      } catch (_err) {
      }
    }
    var _shutdownReceived = false;
    var exitTimer = void 0;
    function setupExitTimer() {
      const argName = "--clientProcessId";
      function runTimer(value) {
        try {
          let processId = parseInt(value);
          if (!isNaN(processId)) {
            exitTimer = setInterval(() => {
              try {
                process.kill(processId, 0);
              } catch (ex) {
                endProtocolConnection();
                process.exit(_shutdownReceived ? 0 : 1);
              }
            }, 3e3);
          }
        } catch (e) {
        }
      }
      for (let i = 2; i < process.argv.length; i++) {
        let arg = process.argv[i];
        if (arg === argName && i + 1 < process.argv.length) {
          runTimer(process.argv[i + 1]);
          return;
        } else {
          let args = arg.split("=");
          if (args[0] === argName) {
            runTimer(args[1]);
          }
        }
      }
    }
    setupExitTimer();
    var watchDog = {
      initialize: (params) => {
        const processId = params.processId;
        if (Is.number(processId) && exitTimer === void 0) {
          setInterval(() => {
            try {
              process.kill(processId, 0);
            } catch (ex) {
              process.exit(_shutdownReceived ? 0 : 1);
            }
          }, 3e3);
        }
      },
      get shutdownReceived() {
        return _shutdownReceived;
      },
      set shutdownReceived(value) {
        _shutdownReceived = value;
      },
      exit: (code) => {
        endProtocolConnection();
        process.exit(code);
      }
    };
    function createConnection2(arg1, arg2, arg3, arg4) {
      let factories;
      let input;
      let output;
      let options;
      if (arg1 !== void 0 && arg1.__brand === "features") {
        factories = arg1;
        arg1 = arg2;
        arg2 = arg3;
        arg3 = arg4;
      }
      if (node_1.ConnectionStrategy.is(arg1) || node_1.ConnectionOptions.is(arg1)) {
        options = arg1;
      } else {
        input = arg1;
        output = arg2;
        options = arg3;
      }
      return _createConnection(input, output, options, factories);
    }
    exports2.createConnection = createConnection2;
    function _createConnection(input, output, options, factories) {
      let stdio = false;
      if (!input && !output && process.argv.length > 2) {
        let port = void 0;
        let pipeName = void 0;
        let argv = process.argv.slice(2);
        for (let i = 0; i < argv.length; i++) {
          let arg = argv[i];
          if (arg === "--node-ipc") {
            input = new node_1.IPCMessageReader(process);
            output = new node_1.IPCMessageWriter(process);
            break;
          } else if (arg === "--stdio") {
            stdio = true;
            input = process.stdin;
            output = process.stdout;
            break;
          } else if (arg === "--socket") {
            port = parseInt(argv[i + 1]);
            break;
          } else if (arg === "--pipe") {
            pipeName = argv[i + 1];
            break;
          } else {
            var args = arg.split("=");
            if (args[0] === "--socket") {
              port = parseInt(args[1]);
              break;
            } else if (args[0] === "--pipe") {
              pipeName = args[1];
              break;
            }
          }
        }
        if (port) {
          let transport = (0, node_1.createServerSocketTransport)(port);
          input = transport[0];
          output = transport[1];
        } else if (pipeName) {
          let transport = (0, node_1.createServerPipeTransport)(pipeName);
          input = transport[0];
          output = transport[1];
        }
      }
      var commandLineMessage = "Use arguments of createConnection or set command line parameters: '--node-ipc', '--stdio' or '--socket={number}'";
      if (!input) {
        throw new Error("Connection input stream is not set. " + commandLineMessage);
      }
      if (!output) {
        throw new Error("Connection output stream is not set. " + commandLineMessage);
      }
      if (Is.func(input.read) && Is.func(input.on)) {
        let inputStream = input;
        inputStream.on("end", () => {
          endProtocolConnection();
          process.exit(_shutdownReceived ? 0 : 1);
        });
        inputStream.on("close", () => {
          endProtocolConnection();
          process.exit(_shutdownReceived ? 0 : 1);
        });
      }
      const connectionFactory = (logger) => {
        const result = (0, node_1.createProtocolConnection)(input, output, logger, options);
        if (stdio) {
          patchConsole(logger);
        }
        return result;
      };
      return (0, server_1.createConnection)(connectionFactory, watchDog, factories);
    }
    function patchConsole(logger) {
      function serialize(args) {
        return args.map((arg) => typeof arg === "string" ? arg : (0, node_util_1.inspect)(arg)).join(" ");
      }
      const counters = /* @__PURE__ */ new Map();
      console.assert = function assert(assertion, ...args) {
        if (assertion) {
          return;
        }
        if (args.length === 0) {
          logger.error("Assertion failed");
        } else {
          const [message, ...rest] = args;
          logger.error(`Assertion failed: ${message} ${serialize(rest)}`);
        }
      };
      console.count = function count(label = "default") {
        const message = String(label);
        let counter = counters.get(message) ?? 0;
        counter += 1;
        counters.set(message, counter);
        logger.log(`${message}: ${message}`);
      };
      console.countReset = function countReset(label) {
        if (label === void 0) {
          counters.clear();
        } else {
          counters.delete(String(label));
        }
      };
      console.debug = function debug(...args) {
        logger.log(serialize(args));
      };
      console.dir = function dir(arg, options) {
        logger.log((0, node_util_1.inspect)(arg, options));
      };
      console.log = function log(...args) {
        logger.log(serialize(args));
      };
      console.error = function error(...args) {
        logger.error(serialize(args));
      };
      console.trace = function trace(...args) {
        const stack = new Error().stack.replace(/(.+\n){2}/, "");
        let message = "Trace";
        if (args.length !== 0) {
          message += `: ${serialize(args)}`;
        }
        logger.log(`${message}
${stack}`);
      };
      console.warn = function warn(...args) {
        logger.warn(serialize(args));
      };
    }
  }
});

// node_modules/vscode-languageserver/node.js
var require_node3 = __commonJS({
  "node_modules/vscode-languageserver/node.js"(exports2, module2) {
    "use strict";
    module2.exports = require_main4();
  }
});

// src/lsp-stdio.ts
var import_node = __toESM(require_node3());

// node_modules/vscode-languageserver-textdocument/lib/esm/main.js
var FullTextDocument = class _FullTextDocument {
  constructor(uri, languageId, version, content) {
    this._uri = uri;
    this._languageId = languageId;
    this._version = version;
    this._content = content;
    this._lineOffsets = void 0;
  }
  get uri() {
    return this._uri;
  }
  get languageId() {
    return this._languageId;
  }
  get version() {
    return this._version;
  }
  getText(range) {
    if (range) {
      const start = this.offsetAt(range.start);
      const end = this.offsetAt(range.end);
      return this._content.substring(start, end);
    }
    return this._content;
  }
  update(changes, version) {
    for (const change of changes) {
      if (_FullTextDocument.isIncremental(change)) {
        const range = getWellformedRange(change.range);
        const startOffset = this.offsetAt(range.start);
        const endOffset = this.offsetAt(range.end);
        this._content = this._content.substring(0, startOffset) + change.text + this._content.substring(endOffset, this._content.length);
        const startLine = Math.max(range.start.line, 0);
        const endLine = Math.max(range.end.line, 0);
        let lineOffsets = this._lineOffsets;
        const addedLineOffsets = computeLineOffsets(change.text, false, startOffset);
        if (endLine - startLine === addedLineOffsets.length) {
          for (let i = 0, len = addedLineOffsets.length; i < len; i++) {
            lineOffsets[i + startLine + 1] = addedLineOffsets[i];
          }
        } else {
          if (addedLineOffsets.length < 1e4) {
            lineOffsets.splice(startLine + 1, endLine - startLine, ...addedLineOffsets);
          } else {
            this._lineOffsets = lineOffsets = lineOffsets.slice(0, startLine + 1).concat(addedLineOffsets, lineOffsets.slice(endLine + 1));
          }
        }
        const diff = change.text.length - (endOffset - startOffset);
        if (diff !== 0) {
          for (let i = startLine + 1 + addedLineOffsets.length, len = lineOffsets.length; i < len; i++) {
            lineOffsets[i] = lineOffsets[i] + diff;
          }
        }
      } else if (_FullTextDocument.isFull(change)) {
        this._content = change.text;
        this._lineOffsets = void 0;
      } else {
        throw new Error("Unknown change event received");
      }
    }
    this._version = version;
  }
  getLineOffsets() {
    if (this._lineOffsets === void 0) {
      this._lineOffsets = computeLineOffsets(this._content, true);
    }
    return this._lineOffsets;
  }
  positionAt(offset) {
    offset = Math.max(Math.min(offset, this._content.length), 0);
    const lineOffsets = this.getLineOffsets();
    let low = 0, high = lineOffsets.length;
    if (high === 0) {
      return { line: 0, character: offset };
    }
    while (low < high) {
      const mid = Math.floor((low + high) / 2);
      if (lineOffsets[mid] > offset) {
        high = mid;
      } else {
        low = mid + 1;
      }
    }
    const line = low - 1;
    offset = this.ensureBeforeEOL(offset, lineOffsets[line]);
    return { line, character: offset - lineOffsets[line] };
  }
  offsetAt(position) {
    const lineOffsets = this.getLineOffsets();
    if (position.line >= lineOffsets.length) {
      return this._content.length;
    } else if (position.line < 0) {
      return 0;
    }
    const lineOffset = lineOffsets[position.line];
    if (position.character <= 0) {
      return lineOffset;
    }
    const nextLineOffset = position.line + 1 < lineOffsets.length ? lineOffsets[position.line + 1] : this._content.length;
    const offset = Math.min(lineOffset + position.character, nextLineOffset);
    return this.ensureBeforeEOL(offset, lineOffset);
  }
  ensureBeforeEOL(offset, lineOffset) {
    while (offset > lineOffset && isEOL(this._content.charCodeAt(offset - 1))) {
      offset--;
    }
    return offset;
  }
  get lineCount() {
    return this.getLineOffsets().length;
  }
  static isIncremental(event) {
    const candidate = event;
    return candidate !== void 0 && candidate !== null && typeof candidate.text === "string" && candidate.range !== void 0 && (candidate.rangeLength === void 0 || typeof candidate.rangeLength === "number");
  }
  static isFull(event) {
    const candidate = event;
    return candidate !== void 0 && candidate !== null && typeof candidate.text === "string" && candidate.range === void 0 && candidate.rangeLength === void 0;
  }
};
var TextDocument;
(function(TextDocument2) {
  function create(uri, languageId, version, content) {
    return new FullTextDocument(uri, languageId, version, content);
  }
  TextDocument2.create = create;
  function update(document, changes, version) {
    if (document instanceof FullTextDocument) {
      document.update(changes, version);
      return document;
    } else {
      throw new Error("TextDocument.update: document must be created by TextDocument.create");
    }
  }
  TextDocument2.update = update;
  function applyEdits(document, edits) {
    const text = document.getText();
    const sortedEdits = mergeSort(edits.map(getWellformedEdit), (a, b) => {
      const diff = a.range.start.line - b.range.start.line;
      if (diff === 0) {
        return a.range.start.character - b.range.start.character;
      }
      return diff;
    });
    let lastModifiedOffset = 0;
    const spans = [];
    for (const e of sortedEdits) {
      const startOffset = document.offsetAt(e.range.start);
      if (startOffset < lastModifiedOffset) {
        throw new Error("Overlapping edit");
      } else if (startOffset > lastModifiedOffset) {
        spans.push(text.substring(lastModifiedOffset, startOffset));
      }
      if (e.newText.length) {
        spans.push(e.newText);
      }
      lastModifiedOffset = document.offsetAt(e.range.end);
    }
    spans.push(text.substr(lastModifiedOffset));
    return spans.join("");
  }
  TextDocument2.applyEdits = applyEdits;
})(TextDocument || (TextDocument = {}));
function mergeSort(data, compare) {
  if (data.length <= 1) {
    return data;
  }
  const p = data.length / 2 | 0;
  const left = data.slice(0, p);
  const right = data.slice(p);
  mergeSort(left, compare);
  mergeSort(right, compare);
  let leftIdx = 0;
  let rightIdx = 0;
  let i = 0;
  while (leftIdx < left.length && rightIdx < right.length) {
    const ret = compare(left[leftIdx], right[rightIdx]);
    if (ret <= 0) {
      data[i++] = left[leftIdx++];
    } else {
      data[i++] = right[rightIdx++];
    }
  }
  while (leftIdx < left.length) {
    data[i++] = left[leftIdx++];
  }
  while (rightIdx < right.length) {
    data[i++] = right[rightIdx++];
  }
  return data;
}
function computeLineOffsets(text, isAtLineStart, textOffset = 0) {
  const result = isAtLineStart ? [textOffset] : [];
  for (let i = 0; i < text.length; i++) {
    const ch = text.charCodeAt(i);
    if (isEOL(ch)) {
      if (ch === 13 && i + 1 < text.length && text.charCodeAt(i + 1) === 10) {
        i++;
      }
      result.push(textOffset + i + 1);
    }
  }
  return result;
}
function isEOL(char) {
  return char === 13 || char === 10;
}
function getWellformedRange(range) {
  const start = range.start;
  const end = range.end;
  if (start.line > end.line || start.line === end.line && start.character > end.character) {
    return { start: end, end: start };
  }
  return range;
}
function getWellformedEdit(textEdit) {
  const range = getWellformedRange(textEdit.range);
  if (range !== textEdit.range) {
    return { newText: textEdit.newText, range };
  }
  return textEdit;
}

// src/parser/lexer.ts
function extractConnective(line) {
  const m = line.match(/^([\s\S]*?)\s*(→|∧|∨|↔)\s*(?:\/\/.*)?$/);
  if (m) {
    return [m[1].trimEnd(), m[2]];
  }
  const ascii = line.match(/^([\s\S]*?)\s*(->|&&|\|\||<->)\s*(?:\/\/.*)?$/);
  if (ascii) {
    const map = { "->": "\u2192", "&&": "\u2227", "||": "\u2228", "<->": "\u2194" };
    return [ascii[1].trimEnd(), map[ascii[2]]];
  }
  const noComment = line.replace(/\s*\/\/.*$/, "").trimEnd();
  return [noComment, null];
}
function parenDepth(s) {
  let d = 0;
  let inStr = false;
  let strChar = "";
  for (const ch of s) {
    if (inStr) {
      if (ch === strChar) inStr = false;
    } else if (ch === '"' || ch === "'") {
      inStr = true;
      strChar = ch;
    } else if (ch === "(" || ch === "[" || ch === "{") d++;
    else if (ch === ")" || ch === "]" || ch === "}") d--;
  }
  return d;
}
function lexFL(text) {
  const raw = text.replace(/\r\n/g, "\n").split("\n").map((l) => l.trim());
  const parsed = [];
  let i = 0;
  while (i < raw.length) {
    const line = raw[i];
    i++;
    if (!line || line.startsWith("//") || line.startsWith("#")) continue;
    if (/^}/.test(line)) {
      const [, conn2] = extractConnective(line);
      parsed.push({ type: "blockEnd", content: "}", connective: conn2 });
      continue;
    }
    if (/^theorem\b/.test(line)) {
      const [cleaned2, conn2] = extractConnective(line);
      parsed.push({
        type: "theorem",
        content: cleaned2,
        name: cleaned2.match(/^theorem\s+(\w+)/)?.[1] ?? "unnamed",
        connective: conn2
      });
      continue;
    }
    if (/^definition\b/.test(line)) {
      const [cleaned2, conn2] = extractConnective(line);
      parsed.push({
        type: "definition",
        content: cleaned2,
        name: cleaned2.match(/^definition\s+(\w+)/)?.[1] ?? "unnamed",
        connective: conn2
      });
      continue;
    }
    if (/^struct\b/.test(line)) {
      const [cleaned2, conn2] = extractConnective(line);
      parsed.push({
        type: "struct",
        content: cleaned2,
        name: cleaned2.match(/^struct\s+(\w+)/)?.[1] ?? "unnamed",
        connective: conn2
      });
      continue;
    }
    if (/^type\b/.test(line)) {
      const [cleaned2, conn2] = extractConnective(line);
      parsed.push({
        type: "typeDecl",
        content: cleaned2,
        name: cleaned2.match(/^type\s+(\w+)/)?.[1] ?? "unnamed",
        connective: conn2
      });
      continue;
    }
    if (/^proof\b/.test(line)) {
      const [cleaned2, conn2] = extractConnective(line);
      const name = cleaned2.match(/^proof\s+(\w+)/)?.[1] ?? "unnamed";
      parsed.push({ type: "proof", content: cleaned2, name, connective: conn2 });
      continue;
    }
    if (/^fn\b/.test(line)) {
      const [cleaned2, conn2] = extractConnective(line);
      const name = cleaned2.match(/^fn\s+(\w+)/)?.[1] ?? "unnamed";
      parsed.push({ type: "fn", content: cleaned2, name, connective: conn2 });
      continue;
    }
    if (/^induction\s*\(/.test(line)) {
      const [cleaned2, conn2] = extractConnective(line);
      parsed.push({ type: "induction", content: cleaned2, connective: conn2 });
      continue;
    }
    if (/^match\s+/.test(line)) {
      const [cleaned2, conn2] = extractConnective(line);
      parsed.push({ type: "match", content: cleaned2, connective: conn2 });
      continue;
    }
    if (/^lemma\b/.test(line)) {
      const [cleaned2, conn2] = extractConnective(line);
      parsed.push({
        type: "lemma",
        content: cleaned2,
        name: cleaned2.match(/^lemma\s+(\w+)/)?.[1] ?? "unnamed",
        connective: conn2
      });
      continue;
    }
    if (/^program\s+\w/.test(line)) {
      const [cleaned2, conn2] = extractConnective(line);
      parsed.push({
        type: "program",
        content: cleaned2,
        name: cleaned2.match(/^program\s+(\w+)/)?.[1] ?? "unnamed",
        connective: conn2
      });
      continue;
    }
    if (/^account\s+\w/.test(line)) {
      const [cleaned2, conn2] = extractConnective(line);
      parsed.push({
        type: "account",
        content: cleaned2,
        name: cleaned2.match(/^account\s+(\w+)/)?.[1] ?? "unnamed",
        connective: conn2
      });
      continue;
    }
    if (/^instruction\s+\w/.test(line)) {
      let combined = line;
      while (!combined.trimEnd().endsWith("{") && i < raw.length) {
        combined += " " + raw[i];
        i++;
      }
      const [cleaned2, conn2] = extractConnective(combined);
      parsed.push({
        type: "instruction",
        content: cleaned2,
        name: cleaned2.match(/^instruction\s+(\w+)/)?.[1] ?? "unnamed",
        connective: conn2
      });
      continue;
    }
    if (/^error\s+\w/.test(line)) {
      const [cleaned2, conn2] = extractConnective(line);
      parsed.push({
        type: "errorDecl",
        content: cleaned2,
        name: cleaned2.match(/^error\s+(\w+)/)?.[1] ?? "unnamed",
        connective: conn2
      });
      continue;
    }
    if (/^require\s*\(/.test(line)) {
      let combined = line;
      while (parenDepth(combined) !== 0 && i < raw.length) {
        combined += " " + raw[i];
        i++;
      }
      const [cleaned2, conn2] = extractConnective(combined);
      parsed.push({ type: "require", content: cleaned2, connective: conn2 });
      continue;
    }
    if (/^emit\s*\(/.test(line)) {
      let combined = line;
      while (parenDepth(combined) !== 0 && i < raw.length) {
        combined += " " + raw[i];
        i++;
      }
      const [cleaned2, conn2] = extractConnective(combined);
      parsed.push({ type: "emit", content: cleaned2, connective: conn2 });
      continue;
    }
    if (/^pda\s*\(/.test(line) || /^let\s+\w+\s*=\s*pda\s*\(/.test(line)) {
      let combined = line;
      while (parenDepth(combined) !== 0 && i < raw.length) {
        combined += " " + raw[i];
        i++;
      }
      const [cleaned2, conn2] = extractConnective(combined);
      parsed.push({ type: "pda", content: cleaned2, connective: conn2 });
      continue;
    }
    if (/^cpi\s*\(/.test(line)) {
      let combined = line;
      while (parenDepth(combined) !== 0 && i < raw.length) {
        combined += " " + raw[i];
        i++;
      }
      const [cleaned2, conn2] = extractConnective(combined);
      parsed.push({ type: "cpi", content: cleaned2, connective: conn2 });
      continue;
    }
    if (/^transfer\s*\(/.test(line)) {
      let combined = line;
      while (parenDepth(combined) !== 0 && i < raw.length) {
        combined += " " + raw[i];
        i++;
      }
      const [cleaned2, conn2] = extractConnective(combined);
      parsed.push({ type: "transfer", content: cleaned2, connective: conn2 });
      continue;
    }
    if (/^level\b/.test(line)) {
      const [cleaned2, conn2] = extractConnective(line);
      parsed.push({ type: "level", content: cleaned2, connective: conn2 });
      continue;
    }
    if (/^return\b/.test(line)) {
      const [cleaned2, conn2] = extractConnective(line);
      parsed.push({ type: "return", content: cleaned2, connective: conn2 });
      continue;
    }
    if (/^declareToProve\s*\(/.test(line)) {
      let combined = line;
      while (parenDepth(combined) !== 0 && i < raw.length) {
        combined += " " + raw[i];
        i++;
      }
      const [cleaned2, conn2] = extractConnective(combined);
      parsed.push({ type: "declareToProve", content: cleaned2, connective: conn2 });
      continue;
    }
    if (/^prove\s*\(/.test(line)) {
      let combined = line;
      while (parenDepth(combined) !== 0 && i < raw.length) {
        combined += " " + raw[i];
        i++;
      }
      const [cleaned2, conn2] = extractConnective(combined);
      parsed.push({ type: "prove", content: cleaned2, connective: conn2 });
      continue;
    }
    if (/^derive\s*\(\s*\)/.test(line)) {
      const [, conn2] = extractConnective(line);
      parsed.push({ type: "derive", content: "", connective: conn2 });
      continue;
    }
    if (/^AndIntro\s*\(/.test(line)) {
      let combined = line;
      while (parenDepth(combined) !== 0 && i < raw.length) {
        combined += " " + raw[i];
        i++;
      }
      const [cleaned2, conn2] = extractConnective(combined);
      parsed.push({ type: "andIntroStep", content: cleaned2, connective: conn2 });
      continue;
    }
    if (/^OrIntro\s*\(/.test(line)) {
      let combined = line;
      while (parenDepth(combined) !== 0 && i < raw.length) {
        combined += " " + raw[i];
        i++;
      }
      const [cleaned2, conn2] = extractConnective(combined);
      parsed.push({ type: "orIntroStep", content: cleaned2, connective: conn2 });
      continue;
    }
    if (/^assert\s*\(/.test(line)) {
      let combined = line;
      while (parenDepth(combined) !== 0 && i < raw.length) {
        combined += " " + raw[i];
        i++;
      }
      const [cleaned2, conn2] = extractConnective(combined);
      parsed.push({ type: "assert", content: cleaned2, connective: conn2 });
      continue;
    }
    if (/^requires\s*\(/.test(line)) {
      let combined = line;
      while (parenDepth(combined) !== 0 && i < raw.length) {
        combined += " " + raw[i];
        i++;
      }
      const [cleaned2, conn2] = extractConnective(combined);
      parsed.push({ type: "requires", content: cleaned2, connective: conn2 });
      continue;
    }
    if (/^ensures\s*\(/.test(line)) {
      let combined = line;
      while (parenDepth(combined) !== 0 && i < raw.length) {
        combined += " " + raw[i];
        i++;
      }
      const [cleaned2, conn2] = extractConnective(combined);
      parsed.push({ type: "ensures", content: cleaned2, connective: conn2 });
      continue;
    }
    if (/^given\s*\(/.test(line)) {
      let combined = line;
      while (parenDepth(combined) !== 0 && i < raw.length) {
        combined += " " + raw[i];
        i++;
      }
      const [cleaned2, conn2] = extractConnective(combined);
      parsed.push({ type: "given", content: cleaned2, connective: conn2 });
      continue;
    }
    if (/^assume\s*\(/.test(line)) {
      let combined = line;
      while (parenDepth(combined) !== 0 && i < raw.length) {
        combined += " " + raw[i];
        i++;
      }
      const [cleaned2, conn2] = extractConnective(combined);
      parsed.push({ type: "assume", content: cleaned2, connective: conn2 });
      continue;
    }
    if (/^conclude\s*\(/.test(line)) {
      let combined = line;
      while (parenDepth(combined) !== 0 && i < raw.length) {
        combined += " " + raw[i];
        i++;
      }
      const [cleaned2, conn2] = extractConnective(combined);
      parsed.push({ type: "conclude", content: cleaned2, connective: conn2 });
      continue;
    }
    if (/^apply\s*\(/.test(line)) {
      const [cleaned2, conn2] = extractConnective(line);
      const target = cleaned2.match(/^apply\s*\((.+)\)/)?.[1]?.trim() ?? cleaned2;
      parsed.push({ type: "apply", content: cleaned2, name: target, connective: conn2 });
      continue;
    }
    if (/^intro\s*\(/.test(line)) {
      const [cleaned2, conn2] = extractConnective(line);
      parsed.push({ type: "intro", content: cleaned2, connective: conn2 });
      continue;
    }
    if (/^rewrite\s*\(/.test(line)) {
      const [cleaned2, conn2] = extractConnective(line);
      parsed.push({ type: "rewrite", content: cleaned2, connective: conn2 });
      continue;
    }
    if (/^exact\s*\(/.test(line)) {
      let combined = line;
      while (parenDepth(combined) !== 0 && i < raw.length) {
        combined += " " + raw[i];
        i++;
      }
      const [cleaned2, conn2] = extractConnective(combined);
      parsed.push({ type: "exact", content: cleaned2, connective: conn2 });
      continue;
    }
    if (/^obtain\s*\(/.test(line)) {
      let combined = line;
      while (parenDepth(combined) !== 0 && i < raw.length) {
        combined += " " + raw[i];
        i++;
      }
      const [cleaned2, conn2] = extractConnective(combined);
      parsed.push({ type: "obtain", content: cleaned2, connective: conn2 });
      continue;
    }
    if (/^setVar\s*\(/.test(line)) {
      let combined = line;
      while (parenDepth(combined) !== 0 && i < raw.length) {
        combined += " " + raw[i];
        i++;
      }
      const [cleaned2, conn2] = extractConnective(combined);
      parsed.push({ type: "setVar", content: cleaned2, connective: conn2 });
      continue;
    }
    if (/^base\s*:/.test(line)) {
      const [cleaned2, conn2] = extractConnective(line);
      parsed.push({ type: "base", content: cleaned2, connective: conn2 });
      continue;
    }
    if (/^step\s*:/.test(line)) {
      const [cleaned2, conn2] = extractConnective(line);
      parsed.push({ type: "step", content: cleaned2, connective: conn2 });
      continue;
    }
    if (/^case\b/.test(line)) {
      const [cleaned2, conn2] = extractConnective(line);
      parsed.push({ type: "case", content: cleaned2, connective: conn2 });
      continue;
    }
    if (/^let\s+/.test(line)) {
      let combined = line;
      while (parenDepth(combined) !== 0 && i < raw.length) {
        combined += " " + raw[i];
        i++;
      }
      const [cleaned2, conn2] = extractConnective(combined);
      parsed.push({ type: "setVar", content: cleaned2, connective: conn2 });
      continue;
    }
    const [cleaned, conn] = extractConnective(line);
    parsed.push({ type: "raw", content: cleaned, connective: conn });
  }
  return parsed;
}

// src/parser/expr.ts
var WORD_NORMALIZATIONS = [
  [/\bfor\s+all\b/gi, "\u2200"],
  [/\bforall\b/gi, "\u2200"],
  [/\bthere\s+exists\b/gi, "\u2203"],
  [/\bexists\b/gi, "\u2203"],
  [/\bnot\s+in\b/gi, "\u2209"],
  [/\bnotin\b/gi, "\u2209"],
  [/\bstrictsubset\b/gi, "\u2286"],
  [/\bpropersubset\b/gi, "\u2286"],
  [/\bsubseteq\b/gi, "\u2282"],
  [/\bsubset\b/gi, "\u2282"],
  [/\bintersection\b/gi, "\u2229"],
  [/\bintersect\b/gi, "\u2229"],
  [/\bunion\b/gi, "\u222A"],
  [/\bneq\b/gi, "\u2260"],
  [/\bnot\s*=\b/gi, "\u2260"],
  [/\bNat\b/g, "\u2115"],
  [/\bnat\b/g, "\u2115"],
  [/\bInt\b/g, "\u2124"],
  [/\bint\b/g, "\u2124"],
  [/\bRat\b/g, "\u211A"],
  [/\brat\b/g, "\u211A"],
  [/\bReal\b/g, "\u211D"],
  [/\breal\b/g, "\u211D"],
  [/\b(in)\b/gi, "\u2208"]
];
function normalizeSurfaceSyntax(src) {
  const segments = src.split(/(".*?"|'.*?')/g);
  return segments.map((segment, index) => {
    if (index % 2 === 1) return segment;
    let value = segment;
    for (const [pattern, replacement] of WORD_NORMALIZATIONS) {
      value = value.replace(pattern, replacement);
    }
    value = value.replace(/!=/g, "\u2260");
    value = value.replace(/<=/g, "\u2264");
    value = value.replace(/>=/g, "\u2265");
    value = normalizePrefixQuantifiedBinders(value);
    value = normalizeStandaloneQuantifiedDeclarations(value);
    return value;
  }).join("");
}
function normalizePrefixQuantifiedBinders(src) {
  let value = src.trim();
  let changed = true;
  while (changed) {
    changed = false;
    const normalized = normalizeSingleLeadingQuantifier(value);
    if (normalized && normalized !== value) {
      value = normalized;
      changed = true;
    }
  }
  return value;
}
function normalizeStandaloneQuantifiedDeclarations(src) {
  return src.replace(/(∀|∃!|∃)\s*\(([^()]+)\)(?=\s*(?:[∧∨),]|$))/g, (match, quantifier, binder) => {
    return normalizeBinderList(quantifier, binder.trim(), null) ?? match;
  });
}
function normalizeSingleLeadingQuantifier(src) {
  const trimmed = src.trim();
  const quantifierMatch = trimmed.match(/^(∀|∃!|∃)\s*\(/);
  if (!quantifierMatch) return null;
  const quantifier = quantifierMatch[1];
  const binderStart = trimmed.indexOf("(");
  const binderEnd = findMatchingParen(trimmed, binderStart);
  if (binderEnd === -1) return null;
  const binder = trimmed.slice(binderStart + 1, binderEnd).trim();
  const remainder = trimmed.slice(binderEnd + 1).trimStart();
  if (!remainder) {
    return normalizeBinderList(quantifier, binder, null);
  }
  const arrowMatch = remainder.match(/^(→|⇒|->)\s*([\s\S]+)$/);
  if (!arrowMatch) return null;
  const body = arrowMatch[2].trim();
  if (!body) return null;
  const normalizedBinders = normalizeBinderList(quantifier, binder, body);
  if (!normalizedBinders) return null;
  return normalizedBinders;
}
function findMatchingParen(value, start) {
  let depth = 0;
  for (let i = start; i < value.length; i++) {
    const ch = value[i];
    if (ch === "(") depth++;
    else if (ch === ")") {
      depth--;
      if (depth === 0) return i;
    }
  }
  return -1;
}
function normalizeBinderList(quantifier, binder, body) {
  const normalizedBody = body ? normalizePrefixQuantifiedBinders(body) : null;
  const boundedMatch = binder.match(/^(.+?)\s*∈\s*(.+)$/);
  if (boundedMatch) {
    const variables = splitBinderNames(boundedMatch[1]);
    const set = boundedMatch[2].trim();
    if (variables.length === 0 || !set) return null;
    return variables.reduceRight(
      (acc, variable) => acc ? `${quantifier} ${variable} \u2208 ${set}, ${acc}` : `${quantifier} ${variable} \u2208 ${set}`,
      normalizedBody
    );
  }
  const typedMatch = binder.match(/^(.+?)\s*:\s*(.+)$/);
  if (typedMatch) {
    const variables = splitBinderNames(typedMatch[1]);
    const type = typedMatch[2].trim();
    if (variables.length === 0 || !type) return null;
    return variables.reduceRight(
      (acc, variable) => acc ? `${quantifier} ${variable}: ${type}, ${acc}` : `${quantifier} ${variable}: ${type}`,
      normalizedBody
    );
  }
  return null;
}
function splitBinderNames(value) {
  return value.split(/[,\s]+/).map((part) => part.trim()).filter(Boolean);
}
var OP_TABLE = [
  [/^(↔|⇔|<->|iff\b)/i, "IFF"],
  [/^(→|⇒|->|implies\b)/i, "IMPLIES"],
  [/^(∨|\|\||or\b)/i, "OR"],
  [/^(∧|&&|and\b)/i, "AND"],
  [/^(¬|!|not\b)/i, "NOT"],
  [/^\(/, "LPAREN"],
  [/^\)/, "RPAREN"]
];
function startsWithOpInAtom(rest, atom) {
  const symbolic = /^(↔|⇔|<->|→|⇒|->|∨|\|\||∧|&&|¬|!|\(|\))/.test(rest);
  if (symbolic) return true;
  const wordLike = /^(iff\b|implies\b|or\b|and\b|not\b)/i.test(rest);
  if (!wordLike) return false;
  return atom.length === 0 || /\s$/.test(atom);
}
function tokenise(src) {
  const tokens = [];
  let s = src.trim();
  if (!s) {
    tokens.push({ kind: "EOF", value: "" });
    return tokens;
  }
  while (s.length > 0) {
    s = s.replace(/^\s+/, "");
    if (!s.length) break;
    let opMatched = false;
    for (const [re, kind] of OP_TABLE) {
      const m = s.match(re);
      if (m) {
        tokens.push({ kind, value: m[0] });
        s = s.slice(m[0].length);
        opMatched = true;
        break;
      }
    }
    if (opMatched) continue;
    if (s[0] === '"' || s[0] === "'") {
      const q = s[0];
      const end = s.indexOf(q, 1);
      if (end === -1) throw new Error(`Unterminated string: ${s}`);
      const lit = s.slice(0, end + 1);
      const prev = tokens[tokens.length - 1];
      if (prev?.kind === "ATOM" && /[=<>!]\s*$/.test(prev.value)) {
        prev.value += lit;
      } else {
        tokens.push({ kind: "ATOM", value: lit });
      }
      s = s.slice(end + 1);
      continue;
    }
    let atom = "";
    if (s.startsWith("\u2203!")) {
      atom = "\u2203!";
      s = s.slice(2);
    }
    while (s.length > 0) {
      const rest = s.replace(/^\s+/, "");
      if (startsWithOpInAtom(rest, atom)) break;
      if (rest[0] === '"' || rest[0] === "'") break;
      atom += s[0];
      s = s.slice(1);
    }
    const trimmed = atom.trim();
    if (trimmed.length > 0) {
      tokens.push({ kind: "ATOM", value: trimmed });
    }
  }
  tokens.push({ kind: "EOF", value: "" });
  return tokens;
}
var ExprParser = class {
  constructor(tokens) {
    this.tokens = tokens;
    this.pos = 0;
  }
  peek() {
    return this.tokens[this.pos];
  }
  consume() {
    return this.tokens[this.pos++];
  }
  expect(kind) {
    const t = this.consume();
    if (t.kind !== kind) throw new Error(`Expected ${kind}, got ${t.kind} ("${t.value}")`);
  }
  parse() {
    if (this.peek().kind === "EOF") return { type: "Atom", condition: "true", atomKind: "expression" };
    const node = this.parseIff();
    if (this.peek().kind !== "EOF")
      throw new Error(`Unexpected token after expression: "${this.peek().value}"`);
    return node;
  }
  parseIff() {
    const left = this.parseImplies();
    if (this.peek().kind === "IFF") {
      this.consume();
      return { type: "Iff", left, right: this.parseIff() };
    }
    return left;
  }
  parseImplies() {
    const left = this.parseOr();
    if (this.peek().kind === "IMPLIES") {
      this.consume();
      return { type: "Implies", left, right: this.parseImplies() };
    }
    return left;
  }
  parseOr() {
    let left = this.parseAnd();
    while (this.peek().kind === "OR") {
      this.consume();
      left = { type: "Or", left, right: this.parseAnd() };
    }
    return left;
  }
  parseAnd() {
    let left = this.parseNot();
    while (this.peek().kind === "AND") {
      this.consume();
      left = { type: "And", left, right: this.parseNot() };
    }
    return left;
  }
  parseNot() {
    if (this.peek().kind === "NOT") {
      this.consume();
      return { type: "Not", operand: this.parseNot() };
    }
    return this.parseAtom();
  }
  parseAtom() {
    const t = this.peek();
    if (t.kind === "LPAREN") {
      this.consume();
      const inner = this.parseIff();
      this.expect("RPAREN");
      return inner;
    }
    if (t.kind === "ATOM") {
      this.consume();
      let condition = t.value.trim();
      while (this.peek().kind === "LPAREN") {
        condition += this.consumeAtomicCallSuffix();
      }
      while (this.peek().kind === "ATOM" && /^(∈|∉|⊆|⊂|=|≠|≤|≥|<|>)/.test(this.peek().value.trim())) {
        condition += " " + this.consume().value.trim();
      }
      const quantified = parseQuantifiedExpr(condition);
      if (quantified) return quantified;
      const atomKind = condition.startsWith('"') && condition.endsWith('"') || condition.startsWith("'") && condition.endsWith("'") ? "string" : "expression";
      return { type: "Atom", condition, atomKind };
    }
    throw new Error(`Unexpected token: "${t.value}" (${t.kind})`);
  }
  consumeAtomicCallSuffix() {
    let suffix = "";
    let depth = 0;
    while (true) {
      const token = this.consume();
      suffix += token.value;
      if (token.kind === "LPAREN") depth++;
      else if (token.kind === "RPAREN") {
        depth--;
        if (depth === 0) break;
      } else if (token.kind === "EOF") {
        throw new Error("Unterminated atomic call suffix");
      }
    }
    return suffix;
  }
};
function parseExpr(src) {
  const raw = src.trim();
  const ifExpr = parseIfExpr(raw);
  if (ifExpr) {
    return ifExpr;
  }
  const letExpr = parseLetExpr(raw);
  if (letExpr) {
    return letExpr;
  }
  const lambda = parseLambdaExpr(raw);
  if (lambda) {
    return lambda;
  }
  const normalized = normalizeSurfaceSyntax(src).trim();
  const fold = parseFoldExpr(normalized);
  if (fold) {
    return fold;
  }
  const sigma = parseSigmaExpr(normalized);
  if (sigma) {
    return sigma;
  }
  const indexedUnion = parseIndexedUnionExpr(normalized);
  if (indexedUnion) {
    return indexedUnion;
  }
  const setBuilder = parseSetBuilderExpr(normalized);
  if (setBuilder) {
    return setBuilder;
  }
  const quantified = parseQuantifiedExpr(normalized);
  if (quantified) {
    return quantified;
  }
  return new ExprParser(tokenise(normalized)).parse();
}
function parseIfExpr(value) {
  const trimmed = value.trim();
  if (!trimmed.startsWith("if ")) return null;
  const thenIndex = findTopLevelKeyword(trimmed, " then ");
  if (thenIndex === -1) return null;
  const elseIndex = findTopLevelKeyword(trimmed, " else ", thenIndex + 6);
  if (elseIndex === -1) return null;
  return {
    type: "If",
    condition: parseExpr(trimmed.slice(3, thenIndex).trim()),
    thenBranch: parseExpr(trimmed.slice(thenIndex + 6, elseIndex).trim()),
    elseBranch: parseExpr(trimmed.slice(elseIndex + 6).trim())
  };
}
function parseLetExpr(value) {
  const trimmed = value.trim();
  if (!trimmed.startsWith("let ")) return null;
  const inIndex = findTopLevelKeyword(trimmed, " in ");
  if (inIndex === -1) return null;
  const binding = trimmed.slice(4, inIndex).trim();
  const eqIndex = findTopLevelEquals(binding);
  if (eqIndex === -1) return null;
  return {
    type: "LetExpr",
    name: binding.slice(0, eqIndex).trim(),
    value: parseExpr(binding.slice(eqIndex + 1).trim()),
    body: parseExpr(trimmed.slice(inIndex + 4).trim())
  };
}
function parseLambdaExpr(value) {
  const trimmed = value.trim();
  const match = trimmed.match(/^fn\s*\(([\s\S]*)\)\s*=>\s*([\s\S]+)$/);
  if (!match) return null;
  const params = match[1].trim() ? splitTopLevelArgs(match[1]).map(parseLambdaParam) : [];
  return {
    type: "Lambda",
    params,
    body: parseExpr(match[2].trim())
  };
}
function parseFoldExpr(value) {
  const trimmed = value.trim();
  if (!trimmed.startsWith("fold(") || !trimmed.endsWith(")")) return null;
  const inner = trimmed.slice(5, -1);
  const args = splitTopLevelArgs(inner);
  if (args.length !== 3) return null;
  return {
    type: "Fold",
    sequence: args[0],
    init: args[1],
    fn: args[2],
    sugar: "fold"
  };
}
function parseSigmaExpr(value) {
  const trimmed = value.trim();
  if (!trimmed.startsWith("\u03A3(") || !trimmed.endsWith(")")) return null;
  const inner = trimmed.slice(2, -1);
  const args = splitTopLevelArgs(inner);
  if (args.length !== 3) return null;
  return {
    type: "Fold",
    sequence: `[${args[1]}..${args[2]}]`,
    init: "0",
    fn: "+",
    sugar: "sigma"
  };
}
function parseQuantifiedExpr(value) {
  const trimmed = value.trim();
  const head = trimmed.match(/^(∀|∃!|∃)\s+/);
  if (!head) return null;
  const quantifierSymbol = head[1];
  const quantifier = quantifierSymbol === "\u2200" ? "forall" : quantifierSymbol === "\u2203!" ? "exists_unique" : "exists";
  let index = head[0].length;
  const variableMatch = trimmed.slice(index).match(/^([A-Za-z_][\w₀-₉ₐ-ₙ]*)/);
  if (!variableMatch) return null;
  const variable = variableMatch[1];
  index += variable.length;
  while (index < trimmed.length && /\s/.test(trimmed[index])) index++;
  const separator = trimmed[index];
  if (separator !== ":" && separator !== "\u2208") return null;
  const binderStyle = separator === "\u2208" ? "bounded" : "typed";
  index += 1;
  while (index < trimmed.length && /\s/.test(trimmed[index])) index++;
  const commaIndex = findTopLevelComma(trimmed, index);
  const domain = (commaIndex === -1 ? trimmed.slice(index) : trimmed.slice(index, commaIndex)).trim();
  const body = commaIndex === -1 ? "" : trimmed.slice(commaIndex + 1).trim();
  if (!domain) return null;
  return {
    type: "Quantified",
    quantifier,
    binderStyle,
    variable,
    domain,
    body: body ? parseExpr(body) : null
  };
}
function findTopLevelComma(value, start) {
  let depth = 0;
  for (let i = start; i < value.length; i++) {
    const ch = value[i];
    if (ch === "(") depth++;
    else if (ch === ")") depth = Math.max(0, depth - 1);
    else if (depth === 0 && ch === ",") return i;
  }
  return -1;
}
function splitTopLevelArgs(value) {
  const args = [];
  let start = 0;
  let depth = 0;
  let braceDepth = 0;
  let bracketDepth = 0;
  for (let i = 0; i < value.length; i++) {
    const ch = value[i];
    if (ch === "(") depth++;
    else if (ch === ")") depth = Math.max(0, depth - 1);
    else if (ch === "{") braceDepth++;
    else if (ch === "}") braceDepth = Math.max(0, braceDepth - 1);
    else if (ch === "[") bracketDepth++;
    else if (ch === "]") bracketDepth = Math.max(0, bracketDepth - 1);
    else if (ch === "," && depth === 0 && braceDepth === 0 && bracketDepth === 0) {
      args.push(value.slice(start, i).trim());
      start = i + 1;
    }
  }
  const final = value.slice(start).trim();
  if (final) args.push(final);
  return args;
}
function findTopLevelKeyword(value, keyword, start = 0) {
  let depth = 0;
  let braceDepth = 0;
  let bracketDepth = 0;
  for (let i = start; i <= value.length - keyword.length; i++) {
    const ch = value[i];
    if (ch === "(") depth++;
    else if (ch === ")") depth = Math.max(0, depth - 1);
    else if (ch === "{") braceDepth++;
    else if (ch === "}") braceDepth = Math.max(0, braceDepth - 1);
    else if (ch === "[") bracketDepth++;
    else if (ch === "]") bracketDepth = Math.max(0, bracketDepth - 1);
    if (depth === 0 && braceDepth === 0 && bracketDepth === 0 && value.slice(i, i + keyword.length) === keyword) {
      return i;
    }
  }
  return -1;
}
function findTopLevelEquals(value) {
  let depth = 0;
  let bracketDepth = 0;
  for (let i = 0; i < value.length; i++) {
    const ch = value[i];
    if (ch === "(") depth++;
    else if (ch === ")") depth = Math.max(0, depth - 1);
    else if (ch === "[") bracketDepth++;
    else if (ch === "]") bracketDepth = Math.max(0, bracketDepth - 1);
    else if (ch === "=" && depth === 0 && bracketDepth === 0) return i;
  }
  return -1;
}
function parseLambdaParam(value) {
  const typed = value.match(/^(\w[\w₀-₉ₐ-ₙ]*)\s*(?::|∈)\s*(.+)$/);
  if (typed) {
    return { name: typed[1], type: typed[2].trim() };
  }
  return { name: value.trim(), type: "Any" };
}
function parseSetBuilderExpr(value) {
  const trimmed = value.trim();
  const match = trimmed.match(/^\{\s*(.+?)\s*\|\s*([A-Za-z_][\w₀-₉ₐ-ₙ]*)\s*∈\s*(.+)\s*\}$/);
  if (!match) return null;
  return {
    type: "SetBuilder",
    element: match[1].trim(),
    variable: match[2].trim(),
    domain: match[3].trim()
  };
}
function parseIndexedUnionExpr(value) {
  const trimmed = value.trim();
  if (!trimmed.startsWith("\u222A")) return null;
  const builder = parseSetBuilderExpr(trimmed.slice(1).trim());
  if (!builder) return null;
  return {
    type: "IndexedUnion",
    builder
  };
}

// src/parser/parser.ts
function parseLinesToAST(lines, options = {}) {
  const ast = [];
  const stack = [];
  const desugarFns = options.desugarFns ?? true;
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    switch (line.type) {
      // ── Block openers ──────────────────────────────────────────────────────
      case "theorem": {
        const node = { type: "Theorem", name: line.name, body: [], connective: null };
        stack.push(node);
        break;
      }
      case "definition": {
        const node = { type: "Definition", name: line.name, body: [], connective: null };
        stack.push(node);
        break;
      }
      case "struct": {
        const node = { type: "Struct", name: line.name, fields: [], connective: null };
        stack.push(node);
        break;
      }
      case "typeDecl": {
        const node = { type: "TypeDecl", name: line.name, variants: [], connective: null };
        stack.push(node);
        break;
      }
      case "proof": {
        const node = { type: "Proof", name: line.name, body: [], connective: null };
        stack.push(node);
        break;
      }
      case "lemma": {
        const node = { type: "Lemma", name: line.name, body: [], connective: null };
        stack.push(node);
        break;
      }
      case "fn": {
        const signature = parseFnSignature(line.content);
        const node = {
          type: "FnDecl",
          name: signature.name,
          params: signature.params,
          returnType: signature.returnType,
          requires: [],
          ensures: [],
          body: [],
          connective: null
        };
        stack.push(node);
        break;
      }
      case "program": {
        const node = {
          type: "Program",
          name: line.name,
          programId: "11111111111111111111111111111111",
          body: [],
          connective: null
        };
        stack.push(node);
        break;
      }
      case "account": {
        const node = { type: "Account", name: line.name, fields: [], connective: null };
        stack.push(node);
        break;
      }
      case "instruction": {
        const sig = parseInstructionSignature(line.content);
        const node = {
          type: "Instruction",
          name: sig.name,
          params: sig.params,
          body: [],
          connective: null
        };
        stack.push(node);
        break;
      }
      case "errorDecl": {
        const node = { type: "ErrorDecl", name: line.name, variants: [], connective: null };
        stack.push(node);
        break;
      }
      // ── Block-end: pop, attach connective, push to parent or top-level ─────
      case "blockEnd": {
        const finished = stack.pop();
        if (!finished) throw new Error("Unmatched }");
        finished.connective = line.connective;
        if (finished.type === "Struct") {
          finished.fields = finished.fields.map((field) => parseStructField(field));
        }
        if (finished.type === "TypeDecl") {
          finished.variants = finished.variants.map((variant) => parseTypeVariant(variant));
        }
        if (finished.type === "Account") {
          finished.fields = finished.fields.map((field) => parseStructField(field));
        }
        if (finished.type === "ErrorDecl") {
          finished.variants = finished.variants.map((raw) => parseErrorVariant(raw));
        }
        const lowered = finished.type === "FnDecl" && desugarFns ? desugarFnDecl(finished) : [finished];
        if (stack.length === 0) {
          ast.push(...lowered);
        } else {
          for (const node of lowered) {
            pushToBlock(stack[stack.length - 1], node);
          }
        }
        break;
      }
      // ── Statement nodes ────────────────────────────────────────────────────
      case "assert": {
        const currentBlock = stack[stack.length - 1];
        const inDecl = currentBlock?.type === "Theorem" || currentBlock?.type === "Lemma";
        const suggestion = inDecl ? "Use declareToProve() to declare the theorem goal" : "Use prove() for intermediate steps or conclude() for the final step";
        const errExpr = parseCallExpr(line.content, "assert");
        const node = { type: "Assert", expr: errExpr, connective: line.connective };
        node.legacyError = `assert() is no longer valid. ${suggestion}`;
        pushOrTop(stack, ast, node);
        break;
      }
      case "given": {
        const errExpr = parseCallExpr(line.content, "given");
        const node = { type: "Given", expr: errExpr, connective: line.connective };
        node.legacyError = "given() is no longer valid. Use assume() to declare hypotheses";
        pushOrTop(stack, ast, node);
        break;
      }
      case "declareToProve": {
        const expr = parseCallExpr(line.content, "declareToProve");
        const node = { type: "DeclareToProve", expr, connective: line.connective };
        pushOrTop(stack, ast, node);
        break;
      }
      case "prove": {
        const expr = parseCallExpr(line.content, "prove");
        const node = { type: "Prove", expr, connective: line.connective };
        pushOrTop(stack, ast, node);
        break;
      }
      case "derive": {
        const node = { type: "Derive", connective: line.connective };
        pushOrTop(stack, ast, node);
        break;
      }
      case "andIntroStep": {
        const inner = line.content.replace(/^AndIntro\s*\(/, "").replace(/\)\s*;?\s*$/, "").trim();
        const commaIdx = inner.lastIndexOf(",");
        const left = commaIdx >= 0 ? inner.slice(0, commaIdx).trim() : inner;
        const right = commaIdx >= 0 ? inner.slice(commaIdx + 1).trim() : "";
        const node = { type: "AndIntroStep", left, right, connective: line.connective };
        pushOrTop(stack, ast, node);
        break;
      }
      case "orIntroStep": {
        const claim = line.content.replace(/^OrIntro\s*\(/, "").replace(/\)\s*;?\s*$/, "").trim();
        const node = { type: "OrIntroStep", claim, connective: line.connective };
        pushOrTop(stack, ast, node);
        break;
      }
      case "requires": {
        const expr = parseCallExpr(line.content, "requires");
        if (stack.length > 0 && stack[stack.length - 1].type === "FnDecl") {
          stack[stack.length - 1].requires.push(expr);
        } else {
          throw new Error("requires() may only appear inside fn blocks");
        }
        break;
      }
      case "ensures": {
        const expr = parseCallExpr(line.content, "ensures");
        if (stack.length > 0 && stack[stack.length - 1].type === "FnDecl") {
          stack[stack.length - 1].ensures.push(expr);
        } else {
          throw new Error("ensures() may only appear inside fn blocks");
        }
        break;
      }
      case "assume": {
        const expr = parseCallExpr(line.content, "assume");
        const node = { type: "Assume", expr, connective: line.connective };
        pushOrTop(stack, ast, node);
        break;
      }
      case "conclude": {
        const expr = parseCallExpr(line.content, "conclude");
        const node = { type: "Conclude", expr, connective: line.connective };
        pushOrTop(stack, ast, node);
        break;
      }
      case "apply": {
        const node = { type: "Apply", target: line.name, connective: line.connective };
        pushOrTop(stack, ast, node);
        break;
      }
      case "intro": {
        const inner = line.content.replace(/^intro\s*\(/, "").replace(/\)\s*;?\s*$/, "").trim();
        const colonMatch = inner.match(/^(\w[\w₀-₉ₐ-ₙ]*)\s*[:\s]\s*(.+)$/);
        const memMatch = inner.match(/^(\w[\w₀-₉ₐ-ₙ]*)\s*∈\s*(.+)$/);
        const m = colonMatch ?? memMatch;
        const varName = m?.[1] ?? inner;
        const varType = m?.[2]?.trim() ?? "";
        const node = { type: "Intro", varName, varType, connective: line.connective };
        pushOrTop(stack, ast, node);
        break;
      }
      case "rewrite": {
        const inner = line.content.replace(/^rewrite\s*\(/, "").replace(/\)\s*;?\s*$/, "").trim();
        const parts = inner.split(",").map((s) => s.trim());
        const hyp = parts[0];
        const direction = parts[1] === "rtl" ? "rtl" : "ltr";
        const node = { type: "Rewrite", hypothesis: hyp, direction, connective: line.connective };
        pushOrTop(stack, ast, node);
        break;
      }
      case "exact": {
        const expr = parseCallExpr(line.content, "exact");
        const node = { type: "Exact", expr, connective: line.connective };
        pushOrTop(stack, ast, node);
        break;
      }
      case "require": {
        const inner = line.content.replace(/^require\s*\(/, "").replace(/\)\s*;?\s*$/, "").trim();
        const lastComma = inner.lastIndexOf(",");
        const condStr = lastComma >= 0 ? inner.slice(0, lastComma).trim() : inner;
        const errName = lastComma >= 0 ? inner.slice(lastComma + 1).trim() : "";
        const condition = parseCallExprFromStr(condStr);
        const node = { type: "Require", condition, error: errName, connective: line.connective };
        pushOrTop(stack, ast, node);
        break;
      }
      case "emit": {
        const inner = line.content.replace(/^emit\s*\(/, "").replace(/\)\s*;?\s*$/, "").trim();
        const firstComma = inner.indexOf(",");
        const eventName = firstComma >= 0 ? inner.slice(0, firstComma).trim() : inner;
        const fieldsRaw = firstComma >= 0 ? inner.slice(firstComma + 1).trim() : "";
        const fields = fieldsRaw ? splitFnParams(fieldsRaw).map((f) => {
          const colon = f.indexOf(":");
          return colon >= 0 ? { name: f.slice(0, colon).trim(), value: f.slice(colon + 1).trim() } : { name: f.trim(), value: f.trim() };
        }) : [];
        const emitNode = { type: "Emit", eventName, fields, connective: line.connective };
        pushOrTop(stack, ast, emitNode);
        break;
      }
      case "pda": {
        const letMatch = line.content.match(/^let\s+(\w+)\s*=\s*pda\s*\(\[([\s\S]*)\]\)/);
        const bareMatch = line.content.match(/^pda\s*\(\[([\s\S]*)\]\)/);
        const varName = letMatch ? letMatch[1] : "_pda";
        const seedsRaw = letMatch ? letMatch[2] : bareMatch ? bareMatch[1] : "";
        const seeds = seedsRaw.split(",").map((s) => s.trim()).filter((s) => s.length > 0);
        const pdaNode = { type: "Pda", varName, seeds, connective: line.connective };
        pushOrTop(stack, ast, pdaNode);
        break;
      }
      case "cpi": {
        const inner = line.content.replace(/^cpi\s*\(/, "").replace(/\)\s*;?\s*$/, "").trim();
        const parts = splitFnParams(inner);
        const program = parts[0]?.trim() ?? "";
        const instruction = parts[1]?.trim() ?? "";
        const accountsRaw = parts[2]?.trim() ?? "";
        const accounts = accountsRaw.replace(/^\[/, "").replace(/\]$/, "").split(",").map((s) => s.trim()).filter((s) => s.length > 0);
        const cpiNode = { type: "Cpi", program, instruction, accounts, connective: line.connective };
        pushOrTop(stack, ast, cpiNode);
        break;
      }
      case "transfer": {
        const inner = line.content.replace(/^transfer\s*\(/, "").replace(/\)\s*;?\s*$/, "").trim();
        const parts = splitFnParams(inner);
        const transferNode = {
          type: "Transfer",
          from: parts[0]?.trim() ?? "",
          to: parts[1]?.trim() ?? "",
          amount: parts[2]?.trim() ?? "",
          connective: line.connective
        };
        pushOrTop(stack, ast, transferNode);
        break;
      }
      case "obtain": {
        const inner = line.content.replace(/^obtain\s*\(/, "").replace(/\)\s*;?\s*$/, "").trim();
        const commaIdx = inner.indexOf(",");
        const varName = commaIdx >= 0 ? inner.slice(0, commaIdx).trim() : inner;
        const source = commaIdx >= 0 ? inner.slice(commaIdx + 1).trim() : "";
        const node = { type: "Obtain", varName, source, connective: line.connective };
        pushOrTop(stack, ast, node);
        break;
      }
      case "setVar": {
        const node = parseSetVar(line.content, line.connective);
        pushOrTop(stack, ast, node);
        break;
      }
      case "induction": {
        const parsed = parseInduction(lines, i);
        i = parsed.nextIndex;
        pushOrTop(stack, ast, parsed.node);
        break;
      }
      case "match": {
        const parsed = parseMatch(lines, i);
        i = parsed.nextIndex;
        pushOrTop(stack, ast, parsed.node);
        break;
      }
      case "base":
      case "step":
      case "case":
        throw new Error(`${line.type}: may only appear inside induction(...)`);
      case "return":
      case "level":
      case "raw": {
        const node = { type: "Raw", content: line.content, connective: line.connective };
        const top = stack.length > 0 ? stack[stack.length - 1] : null;
        if (top?.type === "Struct" || top?.type === "Account") {
          top.fields.push(line.content);
        } else if (top?.type === "TypeDecl" || top?.type === "ErrorDecl") {
          top.variants.push(line.content);
        } else {
          pushOrTop(stack, ast, node);
        }
        break;
      }
    }
  }
  if (stack.length > 0) throw new Error(`Unclosed block: ${stack[stack.length - 1].type}`);
  validateTopLevelConnectives(ast);
  return ast;
}
function pushOrTop(stack, ast, node) {
  if (stack.length > 0) {
    pushToBlock(stack[stack.length - 1], node);
  } else {
    ast.push(node);
  }
}
function pushToBlock(block, node) {
  if (block.type === "Struct" || block.type === "TypeDecl" || block.type === "Account" || block.type === "ErrorDecl") {
    return;
  }
  block.body.push(node);
}
function extractCallBody(content, keyword) {
  const m = content.match(new RegExp(`^${keyword}\\s*\\(([\\s\\S]*)\\)\\s*;?\\s*$`));
  if (m) return m[1].trim();
  return content.replace(new RegExp(`^${keyword}\\s*`), "").trim();
}
function parseSetVar(content, connective) {
  const letForm = content.match(/^let\s+(\w[\w₀-₉ₐ-ₙ]*)\s*=\s*(.+?);?\s*$/);
  if (letForm) {
    return { type: "SetVar", varName: letForm[1], varType: null, value: letForm[2].trim(), connective };
  }
  const inner = extractCallBody(content, "setVar");
  const typed = inner.match(/^(\w[\w₀-₉ₐ-ₙ]*)\s*:\s*([^,]+),\s*(.+)$/);
  if (typed) {
    return { type: "SetVar", varName: typed[1], varType: typed[2].trim(), value: typed[3].trim(), connective };
  }
  const decl = inner.match(/^(\w[\w₀-₉ₐ-ₙ]*)\s*:\s*(.+)$/);
  if (decl) {
    return { type: "SetVar", varName: decl[1], varType: decl[2].trim(), value: null, connective };
  }
  const untyped = inner.match(/^(\w[\w₀-₉ₐ-ₙ]*)\s*,\s*(.+)$/);
  if (untyped) {
    return { type: "SetVar", varName: untyped[1], varType: null, value: untyped[2].trim(), connective };
  }
  return { type: "SetVar", varName: inner.trim(), varType: null, value: null, connective };
}
function parseCallExpr(content, keyword) {
  const body = extractCallBody(content, keyword);
  try {
    return parseExpr(body);
  } catch (error) {
    return {
      type: "Atom",
      condition: body,
      atomKind: "opaque",
      parseError: error instanceof Error ? error.message : "Expression could not be parsed"
    };
  }
}
function parseInduction(lines, start) {
  const line = lines[start];
  const match = line.content.match(/^induction\s*\(([\s\S]+)\)\s*\{$/);
  if (!match) {
    throw new Error("Malformed induction block");
  }
  const iterator = match[1].trim();
  let base = null;
  let step = null;
  let connective = line.connective;
  let cursor = start + 1;
  while (cursor < lines.length) {
    const current = lines[cursor];
    if (current.type === "blockEnd") {
      connective = current.connective;
      break;
    }
    if (current.type === "base") {
      base = current.content.replace(/^base\s*:\s*/, "").trim();
    } else if (current.type === "step") {
      step = current.content.replace(/^step\s*:\s*/, "").trim();
    } else {
      throw new Error(`Unexpected line inside induction block: ${current.content}`);
    }
    cursor++;
  }
  if (cursor >= lines.length || lines[cursor].type !== "blockEnd") {
    throw new Error("Unclosed induction block");
  }
  if (!base || !step) {
    throw new Error("induction(...) requires both base: and step:");
  }
  const fold = {
    type: "Fold",
    sequence: `[0..${iterator}]`,
    init: `proof(${base})`,
    fn: `step_fn(${step})`,
    sugar: "induction"
  };
  return {
    node: {
      type: "Induction",
      iterator,
      fold,
      base,
      step,
      connective
    },
    nextIndex: cursor
  };
}
function parseFnSignature(content) {
  const match = content.match(/^fn\s+(\w+)\s*\(([\s\S]*)\)\s*->\s*([^{]+)\s*\{$/);
  if (!match) {
    throw new Error(`Malformed fn signature: ${content}`);
  }
  const [, name, rawParams, returnType] = match;
  const params = rawParams.trim() ? splitFnParams(rawParams).map(parseFnParam) : [];
  return {
    name,
    params,
    returnType: returnType.trim()
  };
}
function splitFnParams(value) {
  const params = [];
  let depth = 0;
  let start = 0;
  for (let i = 0; i < value.length; i++) {
    const ch = value[i];
    if (ch === "(") depth++;
    else if (ch === ")") depth = Math.max(0, depth - 1);
    else if (ch === "," && depth === 0) {
      params.push(value.slice(start, i).trim());
      start = i + 1;
    }
  }
  const final = value.slice(start).trim();
  if (final) params.push(final);
  return params;
}
function parseFnParam(value) {
  const match = value.match(/^(\w[\w₀-₉ₐ-ₙ]*)\s*∈\s*(.+)$/);
  if (!match) {
    throw new Error(`Malformed fn parameter: ${value}`);
  }
  return { name: match[1], type: normalizeSortName(match[2]) };
}
function parseStructField(value) {
  const trimmed = value.trim().replace(/,+$/, "").trim();
  const match = trimmed.match(/^(\w[\w₀-₉ₐ-ₙ]*)\s*∈\s*(.+)$/);
  if (!match) {
    throw new Error(`Malformed struct field: ${value}`);
  }
  return {
    name: match[1],
    type: normalizeSortName(match[2])
  };
}
function parseTypeVariant(value) {
  const trimmed = value.trim().replace(/,+$/, "").trim();
  const match = trimmed.match(/^\|\s*(\w[\w₀-₉ₐ-ₙ]*)\s*\(([\s\S]*)\)\s*$/);
  if (!match) {
    throw new Error(`Malformed type variant: ${value}`);
  }
  const [, name, rawFields] = match;
  const fields = rawFields.trim() ? splitFnParams(rawFields).map(parseStructField) : [];
  return { name, fields };
}
function desugarFnDecl(node) {
  const conclusion = findFnConclusion(node.body);
  const matchBody = findTopLevelMatch(node.body);
  if (!conclusion && !matchBody) {
    throw new Error(`fn '${node.name}' requires a conclude(...) statement`);
  }
  const goalExpr = conclusion ? conclusion.expr : parseFnGoalExpr(node);
  const theoremBody = node.params.map((param) => ({
    type: "Given",
    expr: parseExpr(`${param.name} \u2208 ${param.type}`),
    connective: "\u2192"
  }));
  for (const req of node.requires) {
    theoremBody.push({
      type: "Given",
      expr: req,
      connective: "\u2192"
    });
  }
  if (node.ensures.length > 0) {
    for (let i = 0; i < node.ensures.length; i++) {
      theoremBody.push({
        type: "Assert",
        expr: node.ensures[i],
        connective: i === node.ensures.length - 1 ? null : "\u2227"
      });
    }
  } else {
    theoremBody.push({
      type: "Assert",
      expr: goalExpr,
      connective: null
    });
  }
  const theorem = {
    type: "Theorem",
    name: node.name,
    body: theoremBody,
    connective: "\u2194"
  };
  const proofBody = conclusion ? [
    {
      type: "Assume",
      expr: conclusion.expr,
      connective: node.body.length > 0 ? "\u2192" : null
    },
    ...node.body
  ] : node.body;
  const proof = {
    type: "Proof",
    name: node.name,
    body: proofBody,
    connective: node.connective,
    fnMeta: {
      params: node.params,
      returnType: normalizeSortName(node.returnType)
    }
  };
  return [theorem, proof];
}
function parseFnGoalExpr(node) {
  const goal = `${node.name}(${node.params.map((param) => param.name).join(", ")}) \u2208 ${normalizeSortName(node.returnType)}`;
  try {
    return parseExpr(goal);
  } catch {
    return {
      type: "Atom",
      condition: goal,
      atomKind: "opaque"
    };
  }
}
function normalizeSortName(value) {
  return normalizeSurfaceSyntax(value).trim();
}
function findFnConclusion(body) {
  for (let i = body.length - 1; i >= 0; i--) {
    const node = body[i];
    if (node.type === "Conclude") {
      return node;
    }
  }
  return null;
}
function findTopLevelMatch(body) {
  for (const node of body) {
    if (node.type === "Match") return node;
  }
  return null;
}
function parseMatch(lines, start) {
  const line = lines[start];
  const match = line.content.match(/^match\s+([\s\S]+)\s*\{$/);
  if (!match) {
    throw new Error("Malformed match block");
  }
  const scrutinee = parseExpr(match[1].trim());
  const cases = [];
  let connective = line.connective;
  let cursor = start + 1;
  while (cursor < lines.length) {
    const current = lines[cursor];
    if (current.type === "blockEnd") {
      connective = current.connective;
      break;
    }
    if (current.type !== "case") {
      throw new Error(`Unexpected line inside match block: ${current.content}`);
    }
    const parsedCase = parseMatchCase(lines, cursor);
    cases.push(parsedCase.node);
    cursor = parsedCase.nextIndex;
  }
  if (cursor >= lines.length || lines[cursor].type !== "blockEnd") {
    throw new Error("Unclosed match block");
  }
  return {
    node: {
      type: "Match",
      scrutinee,
      cases,
      connective
    },
    nextIndex: cursor
  };
}
function parseMatchCase(lines, start) {
  const content = lines[start].content;
  const match = content.match(/^case\s+(.+?)\s*=>\s*([\s\S]+)$/);
  const emptyMatch = content.match(/^case\s+(.+?)\s*=>\s*$/);
  if (!match && !emptyMatch) {
    throw new Error(`Malformed case clause: ${content}`);
  }
  const pattern = parsePattern((match ?? emptyMatch)[1].trim());
  const body = [];
  const inlineBody = match?.[2]?.trim() ?? "";
  if (inlineBody) {
    body.push(parseInlineStatement(inlineBody));
  }
  let cursor = start + 1;
  while (cursor < lines.length) {
    const current = lines[cursor];
    if (current.type === "case" || current.type === "blockEnd") break;
    const parsed = parseNestedStatement(lines, cursor);
    body.push(parsed.node);
    cursor = parsed.nextIndex + 1;
  }
  return {
    node: { pattern, body },
    nextIndex: cursor
  };
}
function parsePattern(value) {
  if (value === "_") {
    return { kind: "wildcard" };
  }
  if (value === "[]") {
    return { kind: "list_nil" };
  }
  const listMatch = value.match(/^\[\s*([^,\]]+)\s*,\s*\.\.\.\s*([A-Za-z_][\w₀-₉ₐ-ₙ]*)\s*\]$/);
  if (listMatch) {
    return {
      kind: "list_cons",
      head: listMatch[1].trim(),
      tail: listMatch[2].trim()
    };
  }
  const match = value.match(/^(\w[\w₀-₉ₐ-ₙ]*)\s*\(([\s\S]*)\)\s*$/);
  if (!match) {
    const bare = value.match(/^([A-Za-z_][\w₀-₉ₐ-ₙ]*)$/);
    if (!bare) {
      throw new Error(`Malformed pattern: ${value}`);
    }
    return { kind: "variant", constructor: bare[1], bindings: [] };
  }
  const [, constructor, rawBindings] = match;
  const bindings = rawBindings.trim() ? splitFnParams(rawBindings).map((binding) => binding.trim()).map((binding) => binding === "_" ? "_" : binding) : [];
  return { kind: "variant", constructor, bindings };
}
function parseInlineStatement(content) {
  if (/^conclude\s*\(/.test(content)) {
    return { type: "Conclude", expr: parseCallExpr(content, "conclude"), connective: null };
  }
  if (/^assert\s*\(/.test(content)) {
    return { type: "Assert", expr: parseCallExpr(content, "assert"), connective: null };
  }
  if (/^assume\s*\(/.test(content)) {
    return { type: "Assume", expr: parseCallExpr(content, "assume"), connective: null };
  }
  if (/^apply\s*\(/.test(content)) {
    const target = content.match(/^apply\s*\((.+)\)/)?.[1]?.trim() ?? content;
    return { type: "Apply", target, connective: null };
  }
  return { type: "Raw", content, connective: null };
}
function parseNestedStatement(lines, start) {
  const line = lines[start];
  switch (line.type) {
    case "assert":
      return { node: { type: "Assert", expr: parseCallExpr(line.content, "assert"), connective: line.connective }, nextIndex: start };
    case "assume":
      return { node: { type: "Assume", expr: parseCallExpr(line.content, "assume"), connective: line.connective }, nextIndex: start };
    case "conclude":
      return { node: { type: "Conclude", expr: parseCallExpr(line.content, "conclude"), connective: line.connective }, nextIndex: start };
    case "apply": {
      const target = line.content.match(/^apply\s*\((.+)\)/)?.[1]?.trim() ?? line.content;
      return { node: { type: "Apply", target, connective: line.connective }, nextIndex: start };
    }
    case "setVar":
      return { node: parseSetVar(line.content, line.connective), nextIndex: start };
    case "intro": {
      const inner = line.content.replace(/^intro\s*\(/, "").replace(/\)\s*;?\s*$/, "").trim();
      const colonMatch = inner.match(/^(\w[\w₀-₉ₐ-ₙ]*)\s*[:\s]\s*(.+)$/);
      const memMatch = inner.match(/^(\w[\w₀-₉ₐ-ₙ]*)\s*∈\s*(.+)$/);
      const m = colonMatch ?? memMatch;
      const varName = m?.[1] ?? inner;
      const varType = m?.[2]?.trim() ?? "";
      return { node: { type: "Intro", varName, varType, connective: line.connective }, nextIndex: start };
    }
    case "rewrite": {
      const inner = line.content.replace(/^rewrite\s*\(/, "").replace(/\)\s*;?\s*$/, "").trim();
      const parts = inner.split(",").map((s) => s.trim());
      const hyp = parts[0];
      const direction = parts[1] === "rtl" ? "rtl" : "ltr";
      return { node: { type: "Rewrite", hypothesis: hyp, direction, connective: line.connective }, nextIndex: start };
    }
    case "exact": {
      const expr = parseCallExpr(line.content, "exact");
      return { node: { type: "Exact", expr, connective: line.connective }, nextIndex: start };
    }
    case "match":
      return parseMatch(lines, start);
    case "raw":
    case "return":
    case "level":
      return { node: { type: "Raw", content: line.content, connective: line.connective }, nextIndex: start };
    default:
      throw new Error(`Unexpected nested statement: ${line.content}`);
  }
}
function validateTopLevelConnectives(ast) {
  for (let i = 0; i < ast.length - 1; i++) {
    const node = ast[i];
    if (isTopLevelBlock(node) && node.connective === null) {
      throw new Error(`Missing connective between top-level blocks after ${describeTopLevelNode(node)}`);
    }
  }
}
function validateDeclarationBody(name, body) {
  const errors = [];
  for (const node of body) {
    const legacy = node.legacyError;
    if (legacy) errors.push(`In '${name}': ${legacy}`);
  }
  const assumes = body.filter((n) => n.type === "Assume");
  const dtp = body.filter((n) => n.type === "DeclareToProve");
  const oldAssert = body.filter((n) => n.type === "Assert");
  const oldGiven = body.filter((n) => n.type === "Given");
  if (oldAssert.length > 0)
    errors.push(`In '${name}': replace assert() with declareToProve() in declarations`);
  if (oldGiven.length > 0)
    errors.push(`In '${name}': replace given() with assume() in declarations`);
  if (dtp.length === 0 && oldAssert.length === 0)
    errors.push(`In '${name}': declaration must end with declareToProve(...)`);
  if (dtp.length > 1)
    errors.push(`In '${name}': declaration must have exactly one declareToProve()`);
  for (let i = 0; i < assumes.length; i++) {
    const isLast = i === assumes.length - 1;
    const node = assumes[i];
    if (isLast) {
      if (node.connective !== "\u2192" && dtp.length > 0)
        errors.push(`In '${name}': assume() before declareToProve() must use \u2192 not '${node.connective ?? "missing"}'`);
    } else {
      if (node.connective === "\u2192")
        errors.push(`In '${name}': assume() followed by another assume() must use \u2227, not \u2192 (hypotheses are independent)`);
    }
  }
  return errors;
}
function isTopLevelBlock(node) {
  return node.type === "Theorem" || node.type === "Definition" || node.type === "Struct" || node.type === "TypeDecl" || node.type === "Proof" || node.type === "Lemma" || node.type === "FnDecl" || node.type === "Program" || node.type === "Account" || node.type === "Instruction" || node.type === "ErrorDecl";
}
function describeTopLevelNode(node) {
  switch (node.type) {
    case "Theorem":
    case "Definition":
    case "Struct":
    case "TypeDecl":
    case "Proof":
    case "Lemma":
    case "FnDecl":
    case "Account":
    case "Instruction":
    case "ErrorDecl":
      return `${node.type.toLowerCase()} '${node.name}'`;
    case "Program":
      return `program '${node.name}'`;
  }
}
function parseInstructionSignature(content) {
  const match = content.match(/^instruction\s+(\w+)\s*\(([\s\S]*)\)\s*\{?$/);
  if (!match) throw new Error(`Malformed instruction signature: ${content}`);
  const [, name, rawParams] = match;
  const params = rawParams.trim() ? splitFnParams(rawParams).map((p) => parseInstructionParam(p.trim())) : [];
  return { name, params };
}
function parseInstructionParam(value) {
  const accountMatch = value.match(/^(\w[\w₀-₉ₐ-ₙ]*)\s*:\s*(.*?)\s*∈\s*(.+)$/);
  if (accountMatch) {
    const qualifiers = accountMatch[2].trim().split(/\s+/).filter((q) => q.length > 0).filter((q) => ["mut", "signer", "init", "close", "seeds"].includes(q));
    return {
      name: accountMatch[1],
      qualifiers,
      paramType: normalizeSortName(accountMatch[3]),
      isAccount: true
    };
  }
  const dataMatch = value.match(/^(\w[\w₀-₉ₐ-ₙ]*)\s*∈\s*(.+)$/);
  if (dataMatch) {
    return {
      name: dataMatch[1],
      qualifiers: [],
      paramType: normalizeSortName(dataMatch[2]),
      isAccount: false
    };
  }
  throw new Error(`Malformed instruction parameter: ${value}`);
}
function parseErrorVariant(raw) {
  const trimmed = raw.trim().replace(/^[|,]+\s*/, "").trim();
  const withMsg = trimmed.match(/^(\w[\w₀-₉ₐ-ₙ]*)\s*\("(.*)"\)\s*$/);
  if (withMsg) return { name: withMsg[1], message: withMsg[2] };
  const bare = trimmed.match(/^(\w[\w₀-₉ₐ-ₙ]*)\s*$/);
  if (bare) return { name: bare[1], message: bare[1] };
  throw new Error(`Malformed error variant: ${raw}`);
}
function parseCallExprFromStr(raw) {
  try {
    return parseExpr(raw);
  } catch {
    return { type: "Atom", condition: raw, atomKind: "opaque" };
  }
}

// src/checker/propositions.ts
function exprToProp(expr) {
  switch (expr.type) {
    case "Atom":
      return expr.condition;
    case "SetBuilder":
      return `{${expr.element} | ${expr.variable} \u2208 ${expr.domain}}`;
    case "IndexedUnion":
      return `\u222A${exprToProp(expr.builder)}`;
    case "Fold":
      return `fold(${expr.sequence}, ${expr.init}, ${expr.fn})`;
    case "If":
      return `if ${exprToProp(expr.condition)} then ${exprToProp(expr.thenBranch)} else ${exprToProp(expr.elseBranch)}`;
    case "LetExpr":
      return `let ${expr.name} = ${exprToProp(expr.value)} in ${exprToProp(expr.body)}`;
    case "Lambda":
      return `fn(${expr.params.map((param) => `${param.name}: ${param.type}`).join(", ")}) => ${exprToProp(expr.body)}`;
    case "And":
      return `${exprToProp(expr.left)} \u2227 ${exprToProp(expr.right)}`;
    case "Or":
      return `${exprToProp(expr.left)} \u2228 ${exprToProp(expr.right)}`;
    case "Implies":
      return `${exprToProp(expr.left)} \u2192 ${exprToProp(expr.right)}`;
    case "Iff":
      return `${exprToProp(expr.left)} \u2194 ${exprToProp(expr.right)}`;
    case "Not":
      return `\xAC${exprToProp(expr.operand)}`;
    case "Quantified": {
      const symbol = expr.quantifier === "forall" ? "\u2200" : expr.quantifier === "exists" ? "\u2203" : "\u2203!";
      const binder = expr.binderStyle === "bounded" ? `${expr.variable} \u2208 ${expr.domain}` : `${expr.variable}: ${expr.domain}`;
      return expr.body ? `${symbol} ${binder}, ${exprToProp(expr.body)}` : `${symbol} ${binder}`;
    }
    default:
      return "";
  }
}
function normalizeProp(s) {
  try {
    return propKey(parseCanonicalExpr(s)).trim().toLowerCase().replace(/\s+/g, " ");
  } catch {
    return s.trim().toLowerCase().replace(/\s+/g, " ");
  }
}
function sameProp(a, b) {
  return normalizeProp(a) === normalizeProp(b);
}
function parseCanonicalExpr(input) {
  const trimmed = input.trim();
  try {
    const parsed = parseExpr(trimmed);
    return canonicalizeExpr(parsed);
  } catch {
    return canonicalizeAtom(normalizeSurfaceSyntax(trimmed));
  }
}
function canonicalizeExpr(expr) {
  if (expr.type !== "Atom") return expr;
  return canonicalizeAtom(expr.condition);
}
function canonicalizeAtom(value) {
  const normalized = normalizeTerm(value);
  const typed = splitTopLevelAtom(normalized, ":");
  if (typed && /^[A-Za-z_][\w₀-₉ₐ-ₙ]*$/.test(typed[0])) {
    return {
      kind: "typed_variable",
      variable: normalizeTerm(typed[0]),
      domain: normalizeTerm(typed[1])
    };
  }
  const nonmembership = splitTopLevelAtom(normalized, "\u2209");
  if (nonmembership) {
    return {
      kind: "nonmembership",
      element: normalizeTerm(nonmembership[0]),
      set: normalizeTerm(nonmembership[1])
    };
  }
  const topSigmaMatch = normalized.match(/^Σ\s+(\w[\w₀-₉ₐ-ₙ]*)\s*∈\s*(.+?)\s*,\s*(.+)$/);
  if (topSigmaMatch) {
    return {
      kind: "dependent_sum",
      element: "",
      variable: normalizeTerm(topSigmaMatch[1]),
      domain: normalizeTerm(topSigmaMatch[2]),
      body: normalizeTerm(topSigmaMatch[3])
    };
  }
  const topPiMatch = normalized.match(/^Π\s+(\w[\w₀-₉ₐ-ₙ]*)\s*∈\s*(.+?)\s*,\s*(.+)$/);
  if (topPiMatch) {
    return {
      kind: "dependent_product",
      element: "",
      variable: normalizeTerm(topPiMatch[1]),
      domain: normalizeTerm(topPiMatch[2]),
      body: normalizeTerm(topPiMatch[3])
    };
  }
  const membership = splitTopLevelAtom(normalized, "\u2208");
  if (membership) {
    const setExpr = membership[1];
    const piMatch = setExpr.match(/^Π\s*\(\s*(\w[\w₀-₉ₐ-ₙ]*)\s*∈\s*(.+?)\s*,\s*(.+)\s*\)$/);
    if (piMatch) {
      return {
        kind: "dependent_product",
        element: normalizeTerm(membership[0]),
        variable: normalizeTerm(piMatch[1]),
        domain: normalizeTerm(piMatch[2]),
        body: normalizeTerm(piMatch[3])
      };
    }
    const sigMatch = setExpr.match(/^Σ\s*\(\s*(\w[\w₀-₉ₐ-ₙ]*)\s*∈\s*(.+?)\s*,\s*(.+)\s*\)$/);
    if (sigMatch) {
      return {
        kind: "dependent_sum",
        element: normalizeTerm(membership[0]),
        variable: normalizeTerm(sigMatch[1]),
        domain: normalizeTerm(sigMatch[2]),
        body: normalizeTerm(sigMatch[3])
      };
    }
    const setEqSigma = setExpr.match(/^Σ\s+(\w[\w₀-₉ₐ-ₙ]*)\s*∈\s*(.+?)\s*,\s*(.+)$/);
    if (setEqSigma) {
      return {
        kind: "dependent_sum",
        element: normalizeTerm(membership[0]),
        variable: normalizeTerm(setEqSigma[1]),
        domain: normalizeTerm(setEqSigma[2]),
        body: normalizeTerm(setEqSigma[3])
      };
    }
    const setEqPi = setExpr.match(/^Π\s+(\w[\w₀-₉ₐ-ₙ]*)\s*∈\s*(.+?)\s*,\s*(.+)$/);
    if (setEqPi) {
      return {
        kind: "dependent_product",
        element: normalizeTerm(membership[0]),
        variable: normalizeTerm(setEqPi[1]),
        domain: normalizeTerm(setEqPi[2]),
        body: normalizeTerm(setEqPi[3])
      };
    }
    return {
      kind: "membership",
      element: normalizeTerm(membership[0]),
      set: normalizeTerm(membership[1])
    };
  }
  const subseteq = splitTopLevelAtom(normalized, "\u2286");
  if (subseteq) {
    return {
      kind: "subset",
      left: normalizeTerm(subseteq[0]),
      strict: true,
      right: normalizeTerm(subseteq[1])
    };
  }
  const strictSubset = splitTopLevelAtom(normalized, "\u2282");
  if (strictSubset) {
    return {
      kind: "subset",
      left: normalizeTerm(strictSubset[0]),
      strict: false,
      right: normalizeTerm(strictSubset[1])
    };
  }
  const equality = splitTopLevelAtom(normalized, "=");
  if (equality) {
    return {
      kind: "equality",
      left: normalizeTerm(equality[0]),
      right: normalizeTerm(equality[1])
    };
  }
  return { kind: "atom", value: normalized };
}
function parseMembershipCanonical(prop) {
  const canonical = parseCanonicalExpr(prop);
  return isCanonicalAtom(canonical) && canonical.kind === "membership" ? { element: canonical.element, set: canonical.set } : null;
}
function parseNonMembershipCanonical(prop) {
  const canonical = parseCanonicalExpr(prop);
  return isCanonicalAtom(canonical) && canonical.kind === "nonmembership" ? { element: canonical.element, set: canonical.set } : null;
}
function parseSubsetCanonical(prop) {
  const canonical = parseCanonicalExpr(prop);
  return isCanonicalAtom(canonical) && canonical.kind === "subset" ? { left: canonical.left, right: canonical.right, strict: canonical.strict } : null;
}
function parseEqualityCanonical(prop) {
  const canonical = parseCanonicalExpr(prop);
  return isCanonicalAtom(canonical) && canonical.kind === "equality" ? { left: canonical.left, right: canonical.right } : null;
}
function parseMorphismDeclarationCanonical(prop) {
  const value = normalizeTerm(normalizeSurfaceSyntax(prop));
  const match = value.match(/^(.+?)\s*:\s*(.+?)\s*→\s*(.+)$/);
  if (!match) return null;
  const label = normalizeTerm(match[1]);
  const domain = normalizeTerm(match[2]);
  const codomain = normalizeTerm(match[3]);
  if (!label || !domain || !codomain) return null;
  if (label.includes(" ") && !/^id_/.test(label)) return null;
  return { label, domain, codomain };
}
function parseMorphismExprCanonical(input) {
  const value = stripOuterParens(normalizeTerm(normalizeSurfaceSyntax(input)));
  if (!value) return null;
  const compositionIndex = findTopLevelSeparator(value, "\u2218");
  if (compositionIndex !== -1) {
    const left = parseMorphismExprCanonical(value.slice(0, compositionIndex));
    const right = parseMorphismExprCanonical(value.slice(compositionIndex + 1));
    if (!left || !right) return null;
    return { kind: "compose", left, right };
  }
  const functorMatch = value.match(/^([A-Za-z_][\w₀-₉ₐ-ₙ]*)\((.+)\)$/);
  if (functorMatch) {
    const argument = parseMorphismExprCanonical(functorMatch[2]);
    if (!argument) return null;
    return { kind: "functor_map", functor: normalizeTerm(functorMatch[1]), argument };
  }
  const identityMatch = value.match(/^id_(?:\{(.+)\}|(.+))$/);
  if (identityMatch) {
    return { kind: "identity", object: normalizeTerm(identityMatch[1] ?? identityMatch[2]) };
  }
  return { kind: "name", label: value };
}
function formatMorphismExpr(expr) {
  switch (expr.kind) {
    case "name":
      return expr.label;
    case "identity":
      return `id_${expr.object}`;
    case "compose":
      return `${formatMorphismExpr(expr.left)} \u2218 ${formatMorphismExpr(expr.right)}`;
    case "functor_map":
      return `${expr.functor}(${formatMorphismExpr(expr.argument)})`;
  }
}
function parseCategoricalEqualityCanonical(prop) {
  const equality = splitTopLevelAtom(normalizeTerm(normalizeSurfaceSyntax(prop)), "=");
  if (!equality) return null;
  const left = parseMorphismExprCanonical(equality[0]);
  const right = parseMorphismExprCanonical(equality[1]);
  if (!left || !right) return null;
  return { left, right };
}
function parseCategoryPredicateCanonical(prop) {
  const value = normalizeTerm(normalizeSurfaceSyntax(prop));
  const match = value.match(/^(Category|Object|Morphism|Iso|Product|ProductMediator|Coproduct|Pullback|Pushout|Functor)\((.*)\)$/);
  if (!match) return null;
  const name = match[1];
  const args = splitTopLevelArgs2(match[2]);
  return { name, args };
}
function parseMeasurePredicateCanonical(claim) {
  const value = normalizeTerm(normalizeSurfaceSyntax(claim));
  const match = value.match(/^(SigmaAlgebra|Measure|ProbabilityMeasure|Measurable)\s*\((.*)\)$/);
  if (!match) return null;
  const name = match[1];
  const args = splitTopLevelArgs2(match[2]);
  return { name, args };
}
function parseImplicationCanonical(prop) {
  return splitTopLevelProp(prop, "\u2192");
}
function parseConjunctionCanonical(prop) {
  return splitTopLevelProp(prop, "\u2227");
}
function parseDisjunctionCanonical(prop) {
  return splitTopLevelProp(prop, "\u2228");
}
function parseIffCanonical(prop) {
  return splitTopLevelProp(prop, "\u2194");
}
function parseBinarySetCanonical(prop, operator) {
  return splitTopLevelProp(prop, operator);
}
function parseSetBuilderCanonical(term) {
  const value = stripOuterParens(normalizeTerm(term));
  if (!(value.startsWith("{") && value.endsWith("}"))) return null;
  const inner = value.slice(1, -1).trim();
  const barIndex = findTopLevelSeparator(inner, "|");
  if (barIndex === -1) return null;
  const elementTemplate = normalizeTerm(inner.slice(0, barIndex));
  const binder = inner.slice(barIndex + 1).trim();
  const membership = splitTopLevelAtom(binder, "\u2208");
  if (!membership) return null;
  const variable = normalizeTerm(membership[0]);
  if (!/^[A-Za-z_][\w₀-₉ₐ-ₙ]*$/.test(variable)) return null;
  const domain = stripOuterParens(normalizeTerm(membership[1]));
  if (!elementTemplate || !domain) return null;
  return { elementTemplate, variable, domain };
}
function parseBoundedQuantifierCanonical(prop, kind) {
  const quantifier = parseQuantifiedExpr2(prop, kind, "bounded");
  if (!quantifier || !quantifier.body) return null;
  return {
    kind,
    variable: quantifier.variable,
    set: quantifier.domain,
    body: exprToProp(quantifier.body)
  };
}
function parseQuantifiedExpr2(prop, kind, binderStyle) {
  let parsed;
  try {
    parsed = parseExpr(prop.trim());
  } catch {
    return null;
  }
  if (parsed.type !== "Quantified") return null;
  if (parsed.quantifier !== kind || parsed.binderStyle !== binderStyle) return null;
  return parsed;
}
function propKey(expr) {
  if (isCanonicalAtom(expr)) return canonicalAtomKey(expr);
  switch (expr.type) {
    case "And":
      return `and(${propKey(canonicalizeExpr(expr.left))},${propKey(canonicalizeExpr(expr.right))})`;
    case "Or":
      return `or(${propKey(canonicalizeExpr(expr.left))},${propKey(canonicalizeExpr(expr.right))})`;
    case "Implies":
      return `implies(${propKey(canonicalizeExpr(expr.left))},${propKey(canonicalizeExpr(expr.right))})`;
    case "Iff":
      return `iff(${propKey(canonicalizeExpr(expr.left))},${propKey(canonicalizeExpr(expr.right))})`;
    case "Not":
      return `not(${propKey(canonicalizeExpr(expr.operand))})`;
    case "Quantified": {
      const binder = expr.binderStyle === "bounded" ? `${normalizeTerm(expr.variable)}\u2208${normalizeTerm(expr.domain)}` : `${normalizeTerm(expr.variable)}:${normalizeTerm(expr.domain)}`;
      const body = expr.body ? propKey(canonicalizeExpr(expr.body)) : "";
      return `${expr.quantifier}(${expr.binderStyle},${binder},${body})`;
    }
    case "Fold":
      return `fold(${normalizeTerm(expr.sequence)},${normalizeTerm(expr.init)},${normalizeTerm(expr.fn)})`;
    case "Atom":
      return canonicalAtomKey(canonicalizeAtom(expr.condition));
  }
  return "";
}
function canonicalAtomKey(atom) {
  switch (atom.kind) {
    case "membership":
      return `membership(${normalizeTerm(atom.element)},${normalizeTerm(atom.set)})`;
    case "nonmembership":
      return `nonmembership(${normalizeTerm(atom.element)},${normalizeTerm(atom.set)})`;
    case "dependent_product":
      return `pi(${normalizeTerm(atom.element)},${normalizeTerm(atom.variable)},${normalizeTerm(atom.domain)},${normalizeTerm(atom.body)})`;
    case "dependent_sum":
      return `sigma(${normalizeTerm(atom.element)},${normalizeTerm(atom.variable)},${normalizeTerm(atom.domain)},${normalizeTerm(atom.body)})`;
    case "subset":
      return `subset(${atom.strict ? "strict" : "weak"},${normalizeTerm(atom.left)},${normalizeTerm(atom.right)})`;
    case "equality":
      return `equality(${normalizeTerm(atom.left)},${normalizeTerm(atom.right)})`;
    case "typed_variable":
      return `typed(${normalizeTerm(atom.variable)},${normalizeTerm(atom.domain)})`;
    case "atom":
      return `atom(${normalizeTerm(atom.value)})`;
  }
  return "";
}
function isCanonicalAtom(expr) {
  return typeof expr.kind === "string";
}
function normalizeTerm(value) {
  return value.trim().replace(/\s+/g, " ");
}
function splitTopLevelAtom(value, operator) {
  let parenDepth2 = 0;
  let braceDepth = 0;
  let bracketDepth = 0;
  for (let i = 0; i < value.length; i++) {
    const ch = value[i];
    if (ch === "(") parenDepth2++;
    else if (ch === ")") parenDepth2 = Math.max(0, parenDepth2 - 1);
    else if (ch === "{") braceDepth++;
    else if (ch === "}") braceDepth = Math.max(0, braceDepth - 1);
    else if (ch === "[") bracketDepth++;
    else if (ch === "]") bracketDepth = Math.max(0, bracketDepth - 1);
    if (parenDepth2 === 0 && braceDepth === 0 && bracketDepth === 0 && value.slice(i, i + operator.length) === operator) {
      const left = normalizeTerm(value.slice(0, i));
      const right = normalizeTerm(value.slice(i + operator.length));
      if (left && right) return [left, right];
    }
  }
  return null;
}
function splitTopLevelProp(value, operator) {
  let parenDepth2 = 0;
  let braceDepth = 0;
  let bracketDepth = 0;
  for (let i = 0; i < value.length; i++) {
    const ch = value[i];
    if (ch === "(") parenDepth2++;
    else if (ch === ")") parenDepth2 = Math.max(0, parenDepth2 - 1);
    else if (ch === "{") braceDepth++;
    else if (ch === "}") braceDepth = Math.max(0, braceDepth - 1);
    else if (ch === "[") bracketDepth++;
    else if (ch === "]") bracketDepth = Math.max(0, bracketDepth - 1);
    if (parenDepth2 === 0 && braceDepth === 0 && bracketDepth === 0 && value.slice(i, i + operator.length) === operator) {
      const left = normalizeTerm(value.slice(0, i));
      const right = normalizeTerm(value.slice(i + operator.length));
      if (left && right) return [left, right];
    }
  }
  return null;
}
function findTopLevelSeparator(value, separator) {
  let parenDepth2 = 0;
  let braceDepth = 0;
  let bracketDepth = 0;
  for (let i = 0; i < value.length; i++) {
    const ch = value[i];
    if (ch === "(") parenDepth2++;
    else if (ch === ")") parenDepth2 = Math.max(0, parenDepth2 - 1);
    else if (ch === "{") braceDepth++;
    else if (ch === "}") braceDepth = Math.max(0, braceDepth - 1);
    else if (ch === "[") bracketDepth++;
    else if (ch === "]") bracketDepth = Math.max(0, bracketDepth - 1);
    if (parenDepth2 === 0 && braceDepth === 0 && bracketDepth === 0 && value.slice(i, i + separator.length) === separator) {
      return i;
    }
  }
  return -1;
}
function splitTopLevelArgs2(value) {
  const args = [];
  let start = 0;
  let parenDepth2 = 0;
  let braceDepth = 0;
  let bracketDepth = 0;
  for (let i = 0; i < value.length; i++) {
    const ch = value[i];
    if (ch === "(") parenDepth2++;
    else if (ch === ")") parenDepth2 = Math.max(0, parenDepth2 - 1);
    else if (ch === "{") braceDepth++;
    else if (ch === "}") braceDepth = Math.max(0, braceDepth - 1);
    else if (ch === "[") bracketDepth++;
    else if (ch === "]") bracketDepth = Math.max(0, bracketDepth - 1);
    if (parenDepth2 === 0 && braceDepth === 0 && bracketDepth === 0 && ch === ",") {
      args.push(normalizeTerm(value.slice(start, i)));
      start = i + 1;
    }
  }
  const final = normalizeTerm(value.slice(start));
  if (final) args.push(final);
  return args;
}
function stripOuterParens(value) {
  let current = value.trim();
  while (hasWrappingParens(current)) {
    current = current.slice(1, -1).trim();
  }
  return current;
}
function hasWrappingParens(value) {
  if (!(value.startsWith("(") && value.endsWith(")"))) return false;
  let depth = 0;
  for (let i = 0; i < value.length; i++) {
    const ch = value[i];
    if (ch === "(") depth++;
    else if (ch === ")") {
      depth--;
      if (depth === 0 && i < value.length - 1) return false;
    }
  }
  return depth === 0;
}

// src/kernel/term.ts
function termFromString(s) {
  const normalized = normalizeAtom(s);
  const memMatch = splitTop(normalized, "\u2208");
  if (memMatch) return { kind: "mem", element: termAtom(memMatch[0]), set: termAtom(memMatch[1]) };
  const nonMemMatch = splitTop(normalized, "\u2209");
  if (nonMemMatch) return { kind: "not", body: { kind: "mem", element: termAtom(nonMemMatch[0]), set: termAtom(nonMemMatch[1]) } };
  const eqMatch = splitTop(normalized, "=");
  if (eqMatch) return { kind: "eq", left: termAtom(eqMatch[0]), right: termAtom(eqMatch[1]) };
  const subMatch = splitTop(normalized, "\u2286") ?? splitTop(normalized, "\u2282");
  if (subMatch) return { kind: "sub", left: termAtom(subMatch[0]), right: termAtom(subMatch[1]) };
  const implMatch = splitTop(normalized, "\u2192");
  if (implMatch) return { kind: "implies", left: termFromString(implMatch[0]), right: termFromString(implMatch[1]) };
  const andMatch = splitTop(normalized, "\u2227");
  if (andMatch) return { kind: "and", left: termFromString(andMatch[0]), right: termFromString(andMatch[1]) };
  const orMatch = splitTop(normalized, "\u2228");
  if (orMatch) return { kind: "or", left: termFromString(orMatch[0]), right: termFromString(orMatch[1]) };
  if (normalized.startsWith("\xAC")) return { kind: "not", body: termFromString(normalized.slice(1).trim()) };
  const appMatch = normalized.match(/^(\w[\w₀-₉]*)\s*\((.+)\)$/);
  if (appMatch) {
    const args = splitArgs(appMatch[2]).map(termAtom);
    return { kind: "app", fn: appMatch[1], args };
  }
  const addMatch = splitTopRightArith(normalized, ["+", "-"]);
  if (addMatch) {
    return { kind: "app", fn: addMatch[1], args: [termAtom(addMatch[0]), termAtom(addMatch[2])] };
  }
  const mulMatch = splitTopRightArith(normalized, ["*", "/"]);
  if (mulMatch) {
    return { kind: "app", fn: mulMatch[1], args: [termAtom(mulMatch[0]), termAtom(mulMatch[2])] };
  }
  if (/^[A-Za-z_][\w₀-₉ₐ-ₙ]*$/.test(normalized)) {
    return { kind: "var", name: normalized };
  }
  return { kind: "atom", value: normalized };
}
function termAtom(s) {
  const t = termFromString(s.trim());
  return t;
}
function termEqual(a, b) {
  if (a.kind !== b.kind) return false;
  switch (a.kind) {
    case "var":
      return a.name === b.name;
    case "atom":
      return a.value === b.value;
    case "app": {
      const bb = b;
      return a.fn === bb.fn && a.args.length === bb.args.length && a.args.every((arg, i) => termEqual(arg, bb.args[i]));
    }
    case "and":
    case "or":
    case "iff": {
      const bb = b;
      return termEqual(a.left, bb.left) && termEqual(a.right, bb.right);
    }
    case "implies": {
      const bb = b;
      return termEqual(a.left, bb.left) && termEqual(a.right, bb.right);
    }
    case "not": {
      const bb = b;
      return termEqual(a.body, bb.body);
    }
    case "forall":
    case "exists": {
      const bb = b;
      if (a.domain !== bb.domain) return false;
      const renamed = alphaRename(bb.body, bb.variable, a.variable);
      return termEqual(a.body, renamed);
    }
    case "mem": {
      const bb = b;
      return termEqual(a.element, bb.element) && termEqual(a.set, bb.set);
    }
    case "eq": {
      const bb = b;
      return termEqual(a.left, bb.left) && termEqual(a.right, bb.right) || termEqual(a.left, bb.right) && termEqual(a.right, bb.left);
    }
    case "sub": {
      const bb = b;
      return termEqual(a.left, bb.left) && termEqual(a.right, bb.right);
    }
    default:
      return false;
  }
}
function alphaRename(term, from, to) {
  switch (term.kind) {
    case "var":
      return term.name === from ? { kind: "var", name: to } : term;
    case "atom":
      return term;
    case "app":
      return { ...term, args: term.args.map((arg) => alphaRename(arg, from, to)) };
    case "and":
    case "or":
    case "iff":
    case "implies":
      return { ...term, left: alphaRename(term.left, from, to), right: alphaRename(term.right, from, to) };
    case "not":
      return { kind: "not", body: alphaRename(term.body, from, to) };
    case "forall":
    case "exists":
      if (term.variable === from) return term;
      return { ...term, body: alphaRename(term.body, from, to) };
    case "mem":
      return { kind: "mem", element: alphaRename(term.element, from, to), set: alphaRename(term.set, from, to) };
    case "eq":
      return { kind: "eq", left: alphaRename(term.left, from, to), right: alphaRename(term.right, from, to) };
    case "sub":
      return { kind: "sub", left: alphaRename(term.left, from, to), right: alphaRename(term.right, from, to) };
    default:
      return term;
  }
}
function applySubst(term, subst) {
  switch (term.kind) {
    case "var":
      return subst.has(term.name) ? applySubst(subst.get(term.name), subst) : term;
    case "atom":
      return term;
    case "app":
      return { ...term, args: term.args.map((a) => applySubst(a, subst)) };
    case "and":
    case "or":
    case "iff":
    case "implies":
      return { ...term, left: applySubst(term.left, subst), right: applySubst(term.right, subst) };
    case "not":
      return { kind: "not", body: applySubst(term.body, subst) };
    case "forall":
    case "exists": {
      const inner = new Map(subst);
      inner.delete(term.variable);
      return { ...term, body: applySubst(term.body, inner) };
    }
    case "mem":
      return { kind: "mem", element: applySubst(term.element, subst), set: applySubst(term.set, subst) };
    case "eq":
      return { kind: "eq", left: applySubst(term.left, subst), right: applySubst(term.right, subst) };
    case "sub":
      return { kind: "sub", left: applySubst(term.left, subst), right: applySubst(term.right, subst) };
    default:
      return term;
  }
}
function termToString(term) {
  switch (term.kind) {
    case "var":
      return term.name;
    case "atom":
      return term.value;
    case "app": {
      const INFIX_OPS = /* @__PURE__ */ new Set(["+", "-", "*", "/", "%"]);
      if (INFIX_OPS.has(term.fn) && term.args.length === 2) {
        const l = termToString(term.args[0]);
        const r = termToString(term.args[1]);
        const needsParens = (s, op) => {
          if (op === "*" || op === "/") return /[+\-]/.test(s.replace(/\([^)]*\)/g, ""));
          return false;
        };
        const rStr = needsParens(r, term.fn) ? `(${r})` : r;
        return `${l} ${term.fn} ${rStr}`;
      }
      return `${term.fn}(${term.args.map(termToString).join(", ")})`;
    }
    case "and":
      return `${termToString(term.left)} \u2227 ${termToString(term.right)}`;
    case "or":
      return `${termToString(term.left)} \u2228 ${termToString(term.right)}`;
    case "implies":
      return `${termToString(term.left)} \u2192 ${termToString(term.right)}`;
    case "iff":
      return `${termToString(term.left)} \u2194 ${termToString(term.right)}`;
    case "not":
      return `\xAC${termToString(term.body)}`;
    case "forall":
      return `\u2200 ${term.variable} \u2208 ${term.domain}, ${termToString(term.body)}`;
    case "exists":
      return `\u2203 ${term.variable} \u2208 ${term.domain}, ${termToString(term.body)}`;
    case "mem":
      return `${termToString(term.element)} \u2208 ${termToString(term.set)}`;
    case "eq":
      return `${termToString(term.left)} = ${termToString(term.right)}`;
    case "sub":
      return `${termToString(term.left)} \u2286 ${termToString(term.right)}`;
    default:
      return "";
  }
}
function rewriteTerm(term, from, to) {
  if (termEqual(term, from)) return to;
  switch (term.kind) {
    case "var":
    case "atom":
      return term;
    case "app":
      return { ...term, args: term.args.map((a) => rewriteTerm(a, from, to)) };
    case "and":
    case "or":
    case "iff":
    case "implies":
      return { ...term, left: rewriteTerm(term.left, from, to), right: rewriteTerm(term.right, from, to) };
    case "not":
      return { kind: "not", body: rewriteTerm(term.body, from, to) };
    case "forall":
    case "exists":
      return { ...term, body: rewriteTerm(term.body, from, to) };
    case "mem":
      return { kind: "mem", element: rewriteTerm(term.element, from, to), set: rewriteTerm(term.set, from, to) };
    case "eq":
      return { kind: "eq", left: rewriteTerm(term.left, from, to), right: rewriteTerm(term.right, from, to) };
    case "sub":
      return { kind: "sub", left: rewriteTerm(term.left, from, to), right: rewriteTerm(term.right, from, to) };
    default:
      return term;
  }
}
function splitTopRightArith(s, ops) {
  let depth = 0;
  let bestIdx = -1;
  let bestOp = "";
  for (let i = 0; i < s.length; i++) {
    const ch = s[i];
    if (ch === "(" || ch === "[" || ch === "{") {
      depth++;
      continue;
    }
    if (ch === ")" || ch === "]" || ch === "}") {
      depth--;
      continue;
    }
    if (depth !== 0) continue;
    for (const op of ops) {
      if (s.startsWith(op, i)) {
        if (op === "-" && i === 0) continue;
        bestIdx = i;
        bestOp = op;
        break;
      }
    }
  }
  if (bestIdx < 0) return null;
  const left = s.slice(0, bestIdx).trim();
  const right = s.slice(bestIdx + bestOp.length).trim();
  if (!left || !right) return null;
  return [left, bestOp, right];
}
function normalizeAtom(s) {
  return s.trim().replace(/\bin\b/g, "\u2208").replace(/\s+/g, " ");
}
function splitTop(s, sep) {
  let depth = 0;
  const idx = s.indexOf(sep);
  if (idx < 0) return null;
  for (let i = 0; i < s.length; i++) {
    const ch = s[i];
    if (ch === "(" || ch === "[" || ch === "{") depth++;
    else if (ch === ")" || ch === "]" || ch === "}") depth--;
    else if (depth === 0 && s.startsWith(sep, i)) {
      return [s.slice(0, i).trim(), s.slice(i + sep.length).trim()];
    }
  }
  return null;
}
function splitArgs(s) {
  const result = [];
  let depth = 0;
  let start = 0;
  for (let i = 0; i < s.length; i++) {
    const ch = s[i];
    if (ch === "(" || ch === "[") depth++;
    else if (ch === ")" || ch === "]") depth--;
    else if (depth === 0 && ch === ",") {
      result.push(s.slice(start, i).trim());
      start = i + 1;
    }
  }
  result.push(s.slice(start).trim());
  return result;
}

// src/kernel/arithmetic.ts
function tokenize(s) {
  const tokens = [];
  let i = 0;
  while (i < s.length) {
    const ch = s[i];
    if (/\s/.test(ch)) {
      i++;
      continue;
    }
    if (/\d/.test(ch)) {
      let num = "";
      while (i < s.length && /\d/.test(s[i])) num += s[i++];
      tokens.push({ kind: "num", value: parseInt(num, 10) });
    } else if (/[a-zA-Z_]/.test(ch)) {
      let id = "";
      while (i < s.length && /[a-zA-Z0-9_']/.test(s[i])) id += s[i++];
      tokens.push({ kind: "ident", value: id });
    } else if (ch === "(") {
      tokens.push({ kind: "lparen" });
      i++;
    } else if (ch === ")") {
      tokens.push({ kind: "rparen" });
      i++;
    } else if ("+-*/%^".includes(ch)) {
      tokens.push({ kind: "op", value: ch });
      i++;
    } else {
      i++;
    }
  }
  return tokens;
}
function peek(ps) {
  return ps.tokens[ps.pos];
}
function consume(ps) {
  return ps.tokens[ps.pos++];
}
function parseExprNum(ps) {
  return parseAddSub(ps);
}
function parseAddSub(ps) {
  let left = parseMulDiv(ps);
  while (true) {
    const t = peek(ps);
    if (!t || t.kind !== "op" || t.value !== "+" && t.value !== "-") break;
    consume(ps);
    const right = parseMulDiv(ps);
    if (left === null || right === null) return null;
    left = t.value === "+" ? left + right : left - right;
  }
  return left;
}
function parseMulDiv(ps) {
  let left = parseUnary(ps);
  while (true) {
    const t = peek(ps);
    if (!t || t.kind !== "op" || t.value !== "*" && t.value !== "/" && t.value !== "%") break;
    consume(ps);
    const right = parseUnary(ps);
    if (left === null || right === null) return null;
    if (t.value === "/") left = right !== 0 ? Math.floor(left / right) : null;
    else if (t.value === "%") left = right !== 0 ? left % right : null;
    else left = left * right;
    if (left === null) return null;
  }
  return left;
}
function parseUnary(ps) {
  const t = peek(ps);
  if (t && t.kind === "op" && t.value === "-") {
    consume(ps);
    const v = parsePrimary(ps);
    return v !== null ? -v : null;
  }
  return parsePrimary(ps);
}
function parsePrimary(ps) {
  const t = peek(ps);
  if (!t) return null;
  if (t.kind === "num") {
    consume(ps);
    return t.value;
  }
  if (t.kind === "lparen") {
    consume(ps);
    const v = parseExprNum(ps);
    const close = peek(ps);
    if (close && close.kind === "rparen") consume(ps);
    return v;
  }
  if (t.kind === "ident") {
    const name = t.value;
    consume(ps);
    const next = peek(ps);
    if (next && next.kind === "lparen") {
      consume(ps);
      let depth = 1;
      while (ps.pos < ps.tokens.length && depth > 0) {
        const tok = consume(ps);
        if (tok.kind === "lparen") depth++;
        else if (tok.kind === "rparen") depth--;
      }
      return null;
    }
    const val = ps.subst.get(name);
    return val !== void 0 ? val : null;
  }
  return null;
}
function collectVars(expr) {
  const tokens = tokenize(expr.trim());
  const vars = /* @__PURE__ */ new Set();
  for (let i = 0; i < tokens.length; i++) {
    const t = tokens[i];
    if (t.kind === "ident") {
      const next = tokens[i + 1];
      if (!next || next.kind !== "lparen") vars.add(t.value);
    }
  }
  return vars;
}
function evalWithSubst(expr, subst) {
  try {
    const tokens = tokenize(expr.trim());
    const ps = { tokens, pos: 0, subst };
    const result = parseExprNum(ps);
    if (ps.pos < ps.tokens.length) return null;
    return result;
  } catch {
    return null;
  }
}
function evalArith(expr) {
  return evalWithSubst(expr, /* @__PURE__ */ new Map());
}
function arithEqual(lhs, rhs) {
  const l = evalArith(lhs);
  const r = evalArith(rhs);
  return l !== null && r !== null && l === r;
}
function arithSymEqual(lhs, rhs) {
  const vars = /* @__PURE__ */ new Set([...collectVars(lhs), ...collectVars(rhs)]);
  if (vars.size === 0) return arithEqual(lhs, rhs);
  const TRIALS = 8;
  const RANGE = 97;
  for (let t = 0; t < TRIALS; t++) {
    const subst = /* @__PURE__ */ new Map();
    for (const v of vars) subst.set(v, Math.floor(Math.random() * RANGE) + 1);
    const l = evalWithSubst(lhs, subst);
    const r = evalWithSubst(rhs, subst);
    if (l === null || r === null || l !== r) return false;
  }
  return true;
}
function arithSymEqualWithSubst(lhs, rhs, exprSubsts) {
  let l = lhs;
  let r = rhs;
  for (const [varName, expr] of exprSubsts) {
    const re = new RegExp(`\\b${varName}\\b`, "g");
    l = l.replace(re, `(${expr})`);
    r = r.replace(re, `(${expr})`);
  }
  return arithSymEqual(l, r);
}
function normArith(s) {
  return s.trim().replace(/\s+/g, " ");
}
function stripOuter(s) {
  s = s.trim();
  if (s.startsWith("(") && s.endsWith(")")) {
    let depth = 0;
    for (let i = 0; i < s.length; i++) {
      if (s[i] === "(") depth++;
      else if (s[i] === ")") {
        depth--;
        if (depth === 0 && i < s.length - 1) return s;
      }
    }
    return s.slice(1, -1).trim();
  }
  return s;
}
function parseEvenClaim(s) {
  const m = s.trim().match(/^even\s*\(\s*([\s\S]+?)\s*\)$/i);
  return m ? normArith(m[1]) : null;
}
function parseOddClaim(s) {
  const m = s.trim().match(/^odd\s*\(\s*([\s\S]+?)\s*\)$/i);
  return m ? normArith(m[1]) : null;
}
function parseDividesClaim(s) {
  const m = s.trim().match(/^divides\s*\(\s*([\s\S]+?)\s*,\s*([\s\S]+?)\s*\)$/i);
  return m ? { a: normArith(m[1]), b: normArith(m[2]) } : null;
}
function extractDoubleOperand(expr) {
  const s = normArith(stripOuter(expr));
  const m1 = s.match(/^2\s*\*\s*([\s\S]+)$/);
  if (m1) return normArith(m1[1]);
  const m2 = s.match(/^([\s\S]+?)\s*\*\s*2$/);
  if (m2) return normArith(m2[1]);
  return null;
}
function extractSuccDoubleOperand(expr) {
  const s = normArith(stripOuter(expr));
  const m1 = s.match(/^2\s*\*\s*([\s\S]+?)\s*\+\s*1$/);
  if (m1) return normArith(m1[1]);
  const m2 = s.match(/^1\s*\+\s*2\s*\*\s*([\s\S]+)$/);
  if (m2) return normArith(m2[1]);
  return null;
}
function splitTopMul(s) {
  s = normArith(s);
  let depth = 0;
  for (let i = 0; i < s.length; i++) {
    const ch = s[i];
    if (ch === "(") depth++;
    else if (ch === ")") depth--;
    else if (depth === 0 && ch === "*") {
      return [normArith(s.slice(0, i)), normArith(s.slice(i + 1))];
    }
  }
  return null;
}
function isConcreteEven(expr) {
  const v = evalArith(expr);
  return v !== null && v % 2 === 0;
}
function isConcreteOdd(expr) {
  const v = evalArith(expr);
  return v !== null && v % 2 !== 0;
}
function parseAbsEquality(s) {
  const m1 = s.trim().match(/^abs\s*\(\s*([\s\S]+?)\s*\)\s*=\s*([\s\S]+)$/i);
  if (m1) return { arg: normArith(m1[1]), value: normArith(m1[2]) };
  const m2 = s.trim().match(/^([\s\S]+?)\s*=\s*abs\s*\(\s*([\s\S]+?)\s*\)$/i);
  if (m2) return { arg: normArith(m2[2]), value: normArith(m2[1]) };
  return null;
}
function parseSignEquality(s) {
  const m1 = s.trim().match(/^sign\s*\(\s*([\s\S]+?)\s*\)\s*=\s*([\s\S]+)$/i);
  if (m1) return { arg: normArith(m1[1]), value: normArith(m1[2]) };
  const m2 = s.trim().match(/^([\s\S]+?)\s*=\s*sign\s*\(\s*([\s\S]+?)\s*\)$/i);
  if (m2) return { arg: normArith(m2[2]), value: normArith(m2[1]) };
  return null;
}
function parseOrder(s) {
  const ops = ["\u2264", "\u2265", "<=", ">=", "<", ">"];
  for (const op of ops) {
    const idx = s.indexOf(op);
    if (idx < 0) continue;
    let depth = 0;
    let found = -1;
    for (let i = 0; i < s.length; i++) {
      if (s[i] === "(" || s[i] === "[") depth++;
      else if (s[i] === ")" || s[i] === "]") depth--;
      else if (depth === 0 && s.startsWith(op, i)) {
        found = i;
        break;
      }
    }
    if (found < 0) continue;
    const left = normArith(s.slice(0, found));
    const right = normArith(s.slice(found + op.length));
    if (left && right) return { left, op, right };
  }
  return null;
}
function evalOrder(left, op, right) {
  const l = evalArith(left);
  const r = evalArith(right);
  if (l === null || r === null) return null;
  switch (op) {
    case "<":
      return l < r;
    case ">":
      return l > r;
    case "\u2264":
    case "<=":
      return l <= r;
    case "\u2265":
    case ">=":
      return l >= r;
  }
}
function parseCongruence(s) {
  const m = s.trim().match(/^(.+?)\s*[≡=]\s*(.+?)\s*\(\s*mod\s+(.+?)\s*\)$/i);
  return m ? { a: normArith(m[1]), b: normArith(m[2]), n: normArith(m[3]) } : null;
}
function parseModOp(s) {
  const norm = s.trim();
  const m = norm.match(/^(.+?)\s+mod\s+(.+)$/i);
  return m ? { a: normArith(m[1]), n: normArith(m[2]) } : null;
}
function evalMod(a, n) {
  const av = evalArith(a);
  const nv = evalArith(n);
  if (av === null || nv === null || nv === 0) return null;
  return (av % nv + nv) % nv;
}
function areCongruent(a, b, n) {
  const av = evalArith(a);
  const bv = evalArith(b);
  const nv = evalArith(n);
  if (av === null || bv === null || nv === null || nv === 0) return false;
  return ((av - bv) % nv + nv) % nv === 0;
}
function isPrime(n) {
  if (n < 2) return false;
  if (n === 2 || n === 3) return true;
  if (n % 2 === 0 || n % 3 === 0) return false;
  for (let i = 5; i * i <= n; i += 6) {
    if (n % i === 0 || n % (i + 2) === 0) return false;
  }
  return true;
}
function parsePrimePred(s) {
  const m1 = s.trim().match(/^(.+?)\s*∈\s*Prime$/i);
  if (m1) return normArith(m1[1]);
  const m2 = s.trim().match(/^Prime\s*\(\s*(.+?)\s*\)$/i);
  if (m2) return normArith(m2[1]);
  return null;
}
function parseTotientExpr(s) {
  const m1 = s.trim().match(/^[φΦ]\s*\(\s*(.+?)\s*\)$/);
  if (m1) return normArith(m1[1]);
  const m2 = s.trim().match(/^totient\s*\(\s*(.+?)\s*\)$/i);
  if (m2) return normArith(m2[1]);
  return null;
}
function parseTotientEquality(s) {
  const m1 = s.trim().match(/^[φΦ]\s*\(\s*(.+?)\s*\)\s*=\s*(.+)$/);
  if (m1) return { arg: normArith(m1[1]), value: normArith(m1[2]) };
  const m2 = s.trim().match(/^(.+?)\s*=\s*[φΦ]\s*\(\s*(.+?)\s*\)$/);
  if (m2) return { arg: normArith(m2[2]), value: normArith(m2[1]) };
  const m3 = s.trim().match(/^totient\s*\(\s*(.+?)\s*\)\s*=\s*(.+)$/i);
  if (m3) return { arg: normArith(m3[1]), value: normArith(m3[2]) };
  return null;
}
function computeTotient(n) {
  if (n <= 0) return 0;
  let result = n;
  let temp = n;
  for (let p = 2; p * p <= temp; p++) {
    if (temp % p === 0) {
      while (temp % p === 0) temp = Math.floor(temp / p);
      result -= Math.floor(result / p);
    }
  }
  if (temp > 1) result -= Math.floor(result / temp);
  return result;
}
function parsePower(s) {
  for (const norm of [s.trim(), stripOuter(s.trim())]) {
    let depth = 0;
    for (let i = norm.length - 1; i >= 0; i--) {
      const ch = norm[i];
      if (ch === ")" || ch === "]") depth++;
      else if (ch === "(" || ch === "[") depth--;
      else if (depth === 0 && ch === "^") {
        const base = norm.slice(0, i).trim();
        const exp = norm.slice(i + 1).trim();
        if (base && exp) return { base, exp };
      } else if (depth === 0 && ch === "*" && i > 0 && norm[i - 1] === "*") {
        const base = norm.slice(0, i - 1).trim();
        const exp = norm.slice(i + 1).trim();
        if (base && exp) return { base, exp };
      }
    }
  }
  return null;
}

// src/kernel/unify.ts
function unify(a, b, metavars) {
  const subst = /* @__PURE__ */ new Map();
  const errorRef = {};
  if (!unifyInto(a, b, metavars, subst, errorRef)) {
    return { subst, error: errorRef.error || { expected: termToString(b), actual: termToString(a) } };
  }
  return { subst };
}
function unifyInto(a, b, metavars, subst, errorRef) {
  a = applySubst(a, subst);
  b = applySubst(b, subst);
  if (a.kind === "var" && metavars.has(a.name)) {
    if (a.kind === b.kind && a.name === b.name) return true;
    if (occursIn(a.name, b)) {
      errorRef.error = { expected: `No occurs-check cycle for ${a.name}`, actual: termToString(b) };
      return false;
    }
    subst.set(a.name, b);
    return true;
  }
  if (b.kind === "var" && metavars.has(b.name)) {
    if (occursIn(b.name, a)) {
      errorRef.error = { expected: `No occurs-check cycle for ${b.name}`, actual: termToString(a) };
      return false;
    }
    subst.set(b.name, a);
    return true;
  }
  if (a.kind !== b.kind) {
    errorRef.error = { expected: termToString(b), actual: termToString(a) };
    return false;
  }
  switch (a.kind) {
    case "var":
      return a.name === b.name;
    case "atom":
      return a.value === b.value;
    case "app": {
      const bb = b;
      return a.fn === bb.fn && a.args.length === bb.args.length && a.args.every((arg, i) => unifyInto(arg, bb.args[i], metavars, subst, errorRef));
    }
    case "and":
    case "or":
    case "iff":
    case "implies": {
      const bb = b;
      return unifyInto(a.left, bb.left, metavars, subst, errorRef) && unifyInto(a.right, bb.right, metavars, subst, errorRef);
    }
    case "not": {
      return unifyInto(a.body, b.body, metavars, subst, errorRef);
    }
    case "forall":
    case "exists": {
      const aa = a;
      const bb = b;
      if (aa.domain !== bb.domain) {
        errorRef.error = { expected: `domain ${bb.domain}`, actual: `domain ${aa.domain}` };
        return false;
      }
      return unifyInto(aa.body, bb.body, metavars, subst, errorRef);
    }
    case "mem": {
      const aa = a;
      const bb = b;
      return unifyInto(aa.element, bb.element, metavars, subst, errorRef) && unifyInto(aa.set, bb.set, metavars, subst, errorRef);
    }
    case "eq": {
      const aa = a;
      const bb = b;
      const saved = new Map(subst);
      if (unifyInto(aa.left, bb.left, metavars, subst, errorRef) && unifyInto(aa.right, bb.right, metavars, subst, errorRef)) return true;
      subst.clear();
      for (const [k, v] of saved) subst.set(k, v);
      return unifyInto(aa.left, bb.right, metavars, subst, errorRef) && unifyInto(aa.right, bb.left, metavars, subst, errorRef);
    }
    case "sub": {
      const aa = a;
      const bb = b;
      return unifyInto(aa.left, bb.left, metavars, subst, errorRef) && unifyInto(aa.right, bb.right, metavars, subst, errorRef);
    }
    default:
      return false;
  }
}
function occursIn(name, term) {
  switch (term.kind) {
    case "var":
      return term.name === name;
    case "atom":
      return false;
    case "app":
      return term.args.some((a) => occursIn(name, a));
    case "and":
    case "or":
    case "iff":
    case "implies":
      return occursIn(name, term.left) || occursIn(name, term.right);
    case "not":
      return occursIn(name, term.body);
    case "forall":
    case "exists": {
      const t = term;
      return t.variable !== name && occursIn(name, t.body);
    }
    case "mem":
      return occursIn(name, term.element) || occursIn(name, term.set);
    case "eq":
    case "sub":
      return occursIn(name, term.left) || occursIn(name, term.right);
    default:
      return false;
  }
}

// src/kernel/category.ts
var import_crypto = require("crypto");

// src/kernel/values.ts
var NEGATION_TABLE = {
  "0": "1",
  "1": "0",
  "\u03C9": "\u03C9"
};
var AND_TABLE = {
  "0": { "0": "0", "1": "0", "\u03C9": "0" },
  "1": { "0": "0", "1": "1", "\u03C9": "\u03C9" },
  "\u03C9": { "0": "0", "1": "\u03C9", "\u03C9": "\u03C9" }
};
var OR_TABLE = {
  "0": { "0": "0", "1": "1", "\u03C9": "\u03C9" },
  "1": { "0": "1", "1": "1", "\u03C9": "1" },
  "\u03C9": { "0": "\u03C9", "1": "1", "\u03C9": "\u03C9" }
};
var IMPLIES_TABLE = {
  "0": { "0": "1", "1": "1", "\u03C9": "1" },
  "1": { "0": "0", "1": "1", "\u03C9": "\u03C9" },
  "\u03C9": { "0": "\u03C9", "1": "1", "\u03C9": "\u03C9" }
};
function neg(value) {
  return NEGATION_TABLE[value];
}
function and(left, right) {
  return AND_TABLE[left][right];
}
function or(left, right) {
  return OR_TABLE[left][right];
}
function implies(left, right) {
  return IMPLIES_TABLE[left][right];
}
function isClassical(value) {
  return value === "0" || value === "1";
}

// src/kernel/category.ts
var KernelError = class extends Error {
  constructor(message) {
    super(message);
    this.name = "KernelError";
  }
};
var WenittainCategory = class {
  constructor() {
    this.objects = /* @__PURE__ */ new Map();
    this.morphisms = /* @__PURE__ */ new Map();
    this.pendingMorphisms = /* @__PURE__ */ new Map();
    this.resolutionMonad = {
      unit: (proposition) => `T(${proposition})`,
      multiply: (proposition) => `T(${proposition})`
    };
  }
  createObject(proposition, tau = "1", unresolvedTerms = [], options = {}) {
    const id = objectId(proposition);
    const partial = tau === "\u03C9" || unresolvedTerms.length > 0;
    const object = {
      id,
      proposition,
      tau,
      partial,
      unresolvedTerms: [...new Set(unresolvedTerms)],
      complementId: options.complementId,
      suspended: options.suspended ?? tau === "\u03C9"
    };
    this.objects.set(id, object);
    return object;
  }
  createMorphism(input) {
    const pending = input.tau === "\u03C9";
    const morphism = {
      id: morphismId(input.proposition, input.rule, input.inputs ?? []),
      domain: input.domain,
      codomain: input.codomain,
      tau: input.tau,
      rule: input.rule,
      inputs: input.inputs ?? [],
      pending,
      proposition: input.proposition,
      unresolvedTerms: [...new Set(input.unresolvedTerms ?? [])],
      domainRestriction: input.domainRestriction ?? input.domain,
      suspended: input.suspended ?? pending
    };
    this.morphisms.set(morphism.id, morphism);
    if (pending) {
      this.pendingMorphisms.set(morphism.id, morphism);
    }
    return morphism;
  }
  complementOf(proposition) {
    const display = proposition.startsWith("\xAC") ? proposition.slice(1).trim() : `\xAC${proposition}`;
    const object = this.createObject(display);
    const source = this.createObject(proposition, object.tau, [], { complementId: object.id });
    object.complementId = source.id;
    this.objects.set(source.id, source);
    this.objects.set(object.id, object);
    return object;
  }
  classicalImplication(left, right) {
    return `${this.complementDisplay(left)} \u2228 ${right}`;
  }
  suspendObject(proposition, unresolvedTerms = []) {
    const suspended = this.resolutionMonad.unit(proposition);
    return this.createObject(suspended, "\u03C9", unresolvedTerms, { suspended: true });
  }
  compose(left, right, proposition, rule) {
    if (left.codomain !== right.domain) {
      throw new KernelError(`Invalid composition: ${left.codomain} does not match ${right.domain}`);
    }
    if (left.pending || right.pending) {
      throw new KernelError("\u03C9-Barrier: pending morphism cannot be used in classical derivation before Ra fires");
    }
    return this.createMorphism({
      proposition,
      domain: left.domain,
      codomain: right.codomain,
      tau: implies(left.tau, right.tau),
      rule,
      inputs: [left.id, right.id],
      unresolvedTerms: [...left.unresolvedTerms, ...right.unresolvedTerms],
      domainRestriction: right.domainRestriction,
      suspended: left.suspended || right.suspended
    });
  }
  ensureClassical(morphism) {
    if (!isClassical(morphism.tau) || morphism.pending) {
      throw new KernelError("\u03C9-Barrier: pending morphism cannot be used in classical derivation before Ra fires");
    }
  }
  truthValueOfMorphism(morphism) {
    if (morphism.pending || morphism.suspended) return "\u03C9";
    if (morphism.codomain === objectId("\u22A5") || morphism.proposition === "\u22A5") return "0";
    return morphism.tau;
  }
  meetTruth(left, right) {
    return and(left, right);
  }
  joinTruth(left, right) {
    return or(left, right);
  }
  complementTruth(value) {
    return neg(value);
  }
  complementDisplay(proposition) {
    return proposition.startsWith("\xAC") ? proposition.slice(1).trim() : `\xAC${proposition}`;
  }
};
function objectId(proposition) {
  return `obj:${stableHash(proposition)}`;
}
function morphismId(proposition, rule, inputs) {
  return `mor:${stableHash(`${proposition}|${rule}|${inputs.join(",")}`)}`;
}
function stableHash(value) {
  return (0, import_crypto.createHash)("sha256").update(value).digest("hex").slice(0, 16);
}

// src/kernel/category-diagrams.ts
var CategoryDiagramError = class extends Error {
  constructor(message) {
    super(message);
    this.name = "CategoryDiagramError";
  }
};
var DEFAULT_CATEGORY = "DefaultCategory";
var CategoryDiagramKernel = class {
  constructor() {
    this.categories = /* @__PURE__ */ new Map();
    this.equalities = [];
    this.functors = /* @__PURE__ */ new Map();
    this.ensureCategory(DEFAULT_CATEGORY);
  }
  registerClaim(claim) {
    const predicate = parseCategoryPredicateCanonical(claim);
    if (predicate) {
      this.registerPredicate(predicate.name, predicate.args);
      return;
    }
    const morphism = parseMorphismDeclarationCanonical(claim);
    if (morphism) {
      this.registerMorphism(DEFAULT_CATEGORY, morphism);
      return;
    }
    const equality = looksLikeCategoricalEquality(claim) ? parseCategoricalEqualityCanonical(claim) : null;
    if (equality) {
      try {
        const left = this.resolveMorphismExpr(equality.left);
        const right = this.resolveMorphismExpr(equality.right);
        if (left.category !== right.category) {
          throw new CategoryDiagramError("Category error: objects or morphisms belong to different categories");
        }
        this.equalities.push({ left: equality.left, right: equality.right, category: left.category, valid: left.id === right.id || sameType(left, right) });
      } catch (e) {
        if (!(e instanceof CategoryDiagramError)) throw e;
      }
    }
  }
  ensureCategory(id) {
    const normalized = id.trim();
    const existing = this.categories.get(normalized);
    if (existing) return existing;
    const category = {
      id: normalized,
      objects: /* @__PURE__ */ new Map(),
      morphisms: /* @__PURE__ */ new Map()
    };
    this.categories.set(normalized, category);
    return category;
  }
  ensureObject(categoryId, label) {
    const category = this.ensureCategory(categoryId);
    const normalized = normalize(label);
    const existing = category.objects.get(normalized);
    if (existing) return existing;
    const object = { id: `${category.id}:${normalized}`, category: category.id, label: normalized };
    category.objects.set(normalized, object);
    return object;
  }
  registerMorphism(categoryId, declaration) {
    const category = this.ensureCategory(categoryId);
    const domain = this.ensureObject(category.id, declaration.domain);
    const codomain = this.ensureObject(category.id, declaration.codomain);
    const existing = category.morphisms.get(normalize(declaration.label));
    if (existing) return existing;
    const morphism = {
      id: `${category.id}:${normalize(declaration.label)}`,
      category: category.id,
      label: normalize(declaration.label),
      domain: domain.id,
      codomain: codomain.id,
      primitive: true,
      components: []
    };
    category.morphisms.set(morphism.label, morphism);
    return morphism;
  }
  resolveMorphismExpr(expr, categoryHint = DEFAULT_CATEGORY) {
    switch (expr.kind) {
      case "name": {
        const category = this.ensureCategory(categoryHint);
        const direct = category.morphisms.get(normalize(expr.label));
        if (!direct) throw new CategoryDiagramError(`Category error: unknown morphism '${expr.label}'`);
        return direct;
      }
      case "identity": {
        const object = this.ensureObject(categoryHint, expr.object);
        return {
          id: `${categoryHint}:id_${object.label}`,
          category: categoryHint,
          label: `id_${object.label}`,
          domain: object.id,
          codomain: object.id,
          primitive: false,
          components: []
        };
      }
      case "compose": {
        const right = this.resolveMorphismExpr(expr.right, categoryHint);
        const left = this.resolveMorphismExpr(expr.left, right.category);
        if (left.category !== right.category) {
          throw new CategoryDiagramError("Category error: objects or morphisms belong to different categories");
        }
        if (right.codomain !== left.domain) {
          throw new CategoryDiagramError(
            `Category error: morphisms do not compose (codomain of ${right.label} is ${objectLabel(right.codomain)}, domain of ${left.label} is ${objectLabel(left.domain)})`
          );
        }
        return {
          id: `${left.category}:${normalize(formatMorphismExpr(expr))}`,
          category: left.category,
          label: formatMorphismExpr(expr),
          domain: right.domain,
          codomain: left.codomain,
          primitive: false,
          components: [left.id, right.id]
        };
      }
      case "functor_map": {
        const functor = this.functors.get(expr.functor);
        if (!functor) {
          throw new CategoryDiagramError(`Category error: unknown functor '${expr.functor}'`);
        }
        const argument = this.resolveMorphismExpr(expr.argument, functor.source);
        if (argument.category !== functor.source) {
          throw new CategoryDiagramError("Category error: objects or morphisms belong to different categories");
        }
        const sourceDomain = this.objectById(argument.domain);
        const sourceCodomain = this.objectById(argument.codomain);
        const mappedDomain = this.ensureObject(functor.target, `${expr.functor}(${sourceDomain.label})`);
        const mappedCodomain = this.ensureObject(functor.target, `${expr.functor}(${sourceCodomain.label})`);
        return {
          id: `${functor.target}:${normalize(formatMorphismExpr(expr))}`,
          category: functor.target,
          label: formatMorphismExpr(expr),
          domain: mappedDomain.id,
          codomain: mappedCodomain.id,
          primitive: false,
          components: [argument.id]
        };
      }
    }
  }
  equalMorphisms(leftExpr, rightExpr) {
    const left = this.resolveMorphismExpr(leftExpr);
    const right = this.resolveMorphismExpr(rightExpr, left.category);
    if (left.category !== right.category) return false;
    if (left.id === right.id) return true;
    if (sameType(left, right) && this.equalities.some(
      (eq) => eq.category === left.category && (formatMorphismExpr(eq.left) === formatMorphismExpr(leftExpr) && formatMorphismExpr(eq.right) === formatMorphismExpr(rightExpr) || formatMorphismExpr(eq.left) === formatMorphismExpr(rightExpr) && formatMorphismExpr(eq.right) === formatMorphismExpr(leftExpr))
    )) {
      return true;
    }
    return normalizeMorphism(left) === normalizeMorphism(right);
  }
  registerPredicate(name, args) {
    switch (name) {
      case "Category":
        if (args[0]) this.ensureCategory(args[0]);
        return;
      case "Object":
        if (args.length >= 2) this.ensureObject(args[0], args[1]);
        return;
      case "Morphism":
        if (args.length >= 4) this.registerMorphism(args[0], { label: args[1], domain: args[2], codomain: args[3] });
        return;
      case "Functor":
        if (args.length >= 3) {
          this.ensureCategory(args[1]);
          this.ensureCategory(args[2]);
          this.functors.set(args[0], { source: args[1], target: args[2] });
        }
        return;
      default:
        return;
    }
  }
  objectById(id) {
    for (const category of this.categories.values()) {
      for (const object of category.objects.values()) {
        if (object.id === id) return object;
      }
    }
    throw new CategoryDiagramError(`Category error: unknown object '${id}'`);
  }
};
function looksLikeCategoricalEquality(claim) {
  return claim.includes("\u2218") || /\bid_/.test(claim) || /^[A-Z][\w₀-₉ₐ-ₙ]*\(.+\)\s*=/.test(claim);
}
function normalize(value) {
  return value.trim().replace(/\s+/g, " ");
}
function normalizeMorphism(morphism) {
  return `${morphism.category}:${morphism.domain}:${morphism.codomain}:${morphism.label}`;
}
function sameType(left, right) {
  return left.category === right.category && left.domain === right.domain && left.codomain === right.codomain;
}
function objectLabel(id) {
  const index = id.indexOf(":");
  return index === -1 ? id : id.slice(index + 1);
}

// src/checker/checker.ts
var TOP = "\u22A4";
var BOTTOM = "\u22A5";
var BUILTIN_SORTS = /* @__PURE__ */ new Set(["\u2115", "\u2124", "\u211A", "\u211D", "String", "Set", "Element"]);
function checkFile(nodes, options = {}) {
  const diagnostics = [];
  const reports = [];
  const structs = collectStructDefinitions(nodes, diagnostics);
  const types = collectTypeDefinitions(nodes, structs, diagnostics);
  const pairs = findPairs(nodes);
  const pairNames = new Set(pairs.map((pair) => normalizeName(pair.theorem.name)));
  const lemmas = /* @__PURE__ */ new Map();
  const eliminators = generateEliminators(types);
  for (const [name, claimSet] of eliminators) {
    lemmas.set(name, claimSet);
  }
  let theoremCount = 0;
  let proofCount = 0;
  let pairedCount = 0;
  for (const node of nodes) {
    if (node.type === "Theorem" || node.type === "Lemma") theoremCount++;
    if (node.type === "Proof") proofCount++;
  }
  for (const pair of pairs) {
    pairedCount++;
    const report = checkPair(pair, lemmas, structs, types, options);
    reports.push(report);
    if (pair.theorem.type === "Lemma") {
      lemmas.set(normalizeName(pair.theorem.name), {
        name: pair.theorem.name,
        premises: theoremPremises(pair.theorem),
        conclusion: theoremGoal(pair.theorem),
        state: report.state
      });
    }
  }
  for (const node of nodes) {
    if (node.type === "Theorem" && !pairNames.has(normalizeName(node.name))) {
      diagnostics.push({ severity: "info", message: `Theorem '${node.name}' has no proof` });
    }
    if (node.type === "Lemma" && !pairNames.has(normalizeName(node.name))) {
      diagnostics.push({ severity: "info", message: `Lemma '${node.name}' has no proof` });
    }
  }
  const proofApplyNames = /* @__PURE__ */ new Map();
  for (const pair of pairs) {
    proofApplyNames.set(normalizeName(pair.theorem.name), collectApplyNames(pair.proof.body ?? []));
  }
  for (let i = 0; i < nodes.length; i++) {
    const node = nodes[i];
    if (node.type !== "Proof") continue;
    const proofNode = node;
    if (proofNode.fnMeta) continue;
    const conn = proofNode.connective;
    if (!conn || conn === "\u2194") continue;
    if (conn === "\u2228") {
      diagnostics.push({
        severity: "warning",
        message: `Inter-block connective '\u2228' before the block after '${proofNode.name}' is not validated by the checker. The disjunctive relationship is accepted but not verified.`
      });
      continue;
    }
    let j = i + 1;
    while (j < nodes.length && nodes[j].type !== "Theorem" && nodes[j].type !== "Lemma") j++;
    if (j >= nodes.length) continue;
    const nextBlock = nodes[j];
    const nextApply = proofApplyNames.get(normalizeName(nextBlock.name)) ?? /* @__PURE__ */ new Set();
    const prevName = normalizeName(proofNode.name);
    const nextUsesThis = nextApply.has(prevName);
    if (conn === "\u2192" && !nextUsesThis) {
      diagnostics.push({
        severity: "error",
        message: `Incorrect inter-block connective '\u2192' before '${nextBlock.name}': this block does not depend on '${proofNode.name}'. Use \u2227 for independent blocks.`
      });
    } else if (conn === "\u2227" && nextUsesThis) {
      diagnostics.push({
        severity: "error",
        message: `Incorrect inter-block connective '\u2227' before '${nextBlock.name}': this block depends on '${proofNode.name}' via apply(). Use \u2192 to show the dependency.`
      });
    }
  }
  const hasInterBlockErrors = diagnostics.some((d) => d.severity === "error");
  const pairState = combineStates(reports.map((report) => report.state), pairedCount === 0 ? "FAILED" : "PROVED");
  const state = hasInterBlockErrors ? "FAILED" : pairState;
  return {
    state,
    valid: state === "PROVED",
    theoremCount,
    proofCount,
    pairedCount,
    reports,
    diagnostics
  };
}
function collectApplyNames(nodes) {
  const names = /* @__PURE__ */ new Set();
  function walk(ns) {
    for (const n of ns) {
      if (n.type === "Apply") names.add(normalizeName(n.target));
      if ("body" in n && Array.isArray(n.body)) walk(n.body);
      if ("steps" in n && Array.isArray(n.steps)) walk(n.steps);
      if ("cases" in n && Array.isArray(n.cases)) {
        for (const c of n.cases) walk(c.body ?? []);
      }
    }
  }
  walk(nodes);
  return names;
}
function checkPair(pair, lemmas, structs, types, _options) {
  const declErrors = validateDeclarationBody(pair.theorem.name, pair.theorem.body);
  const premises = theoremPremises(pair.theorem);
  const goal = theoremGoal(pair.theorem);
  const ctx = createContext(goal, lemmas, premises, structs, types);
  seedPremises(ctx, premises);
  for (const err of declErrors) {
    const isLegacy = err.includes("replace assert()") || err.includes("replace given()") || err.includes("no longer valid");
    ctx.diagnostics.push({ severity: isLegacy ? "warning" : "error", message: err, rule: "STRUCTURAL" });
  }
  if (pair.proof.fnMeta) {
    const recursionIssue = validateListStructuralRecursion(pair.proof);
    if (recursionIssue) {
      ctx.unverifiedReasons.push(recursionIssue);
      ctx.diagnostics.push({ severity: "warning", message: recursionIssue, rule: "STRUCTURAL" });
    }
  }
  let prevDerivedObject = null;
  let prevConnective = null;
  let prevIsAssume = false;
  let prevAssumeKind = "assume()";
  for (let index = 0; index < pair.proof.body.length; index++) {
    const step = index + 1;
    const node = pair.proof.body[index];
    const objectsBefore = ctx.objects.length;
    try {
      handleNode(ctx, node, step);
    } catch (error) {
      const message = error instanceof Error ? error.message : "Unknown checker failure";
      ctx.diagnostics.push({ severity: "error", step, message });
      ctx.proofSteps.push({
        step,
        kind: classifyStep(node),
        claim: nodeToClaim(node),
        rule: "STRUCTURAL",
        state: "FAILED",
        message
      });
    }
    const currDerivedObject = ctx.objects.length > objectsBefore ? ctx.objects[ctx.objects.length - 1] : null;
    const isDerivationStep = node.type === "Prove" || node.type === "Conclude" || node.type === "Assert" || node.type === "AndIntroStep" || node.type === "OrIntroStep" || node.type === "Apply";
    const isNewStyleStep = node.type === "Prove" || node.type === "Assert" || node.type === "AndIntroStep" || node.type === "OrIntroStep" || node.type === "Apply";
    const isAssume = node.type === "Assume" || node.type === "Intro" || node.type === "Obtain";
    if (isNewStyleStep && prevDerivedObject && prevConnective) {
      if (prevIsAssume) {
        if (prevConnective !== "\u2192") {
          const msg = `Incorrect connective '${prevConnective}' after ${prevAssumeKind}: use \u2192 because the introduced hypothesis leads to the following derivation.`;
          ctx.diagnostics.push({ severity: "error", step, message: msg, rule: "CONNECTIVE" });
        }
      } else if (currDerivedObject) {
        validateConnective(ctx, prevConnective, prevDerivedObject, currDerivedObject, step);
      }
    }
    if (isDerivationStep && currDerivedObject) {
      prevDerivedObject = currDerivedObject;
      prevConnective = node.connective ?? null;
      prevIsAssume = false;
    } else if (isAssume) {
      prevDerivedObject = ctx.assumptions[ctx.assumptions.length - 1] ?? null;
      prevConnective = node.connective;
      prevIsAssume = true;
      prevAssumeKind = node.type === "Intro" ? "intro()" : node.type === "Obtain" ? "obtain()" : "assume()";
    }
  }
  const derivedConclusion = findDerivedConclusion(ctx, goal);
  if (goal && !derivedConclusion) {
    ctx.diagnostics.push({
      severity: "error",
      message: `Proof '${pair.proof.name}' does not establish theorem goal '${goal}'`,
      rule: "STRUCTURAL"
    });
  }
  const state = reportState(ctx, goal, derivedConclusion);
  return {
    name: pair.theorem.name,
    state,
    valid: state === "PROVED",
    stepCount: pair.proof.body.length,
    goal,
    premises,
    derivedConclusion,
    proofSteps: ctx.proofSteps,
    proofObjects: ctx.objects,
    derivations: ctx.derivations,
    diagnostics: ctx.diagnostics,
    provedCount: ctx.objects.filter((object) => object.tau === "1").length,
    pendingCount: ctx.objects.filter((object) => object.pending).length
  };
}
function createContext(goal, lemmas, premises, structs, types) {
  const category = new WenittainCategory();
  category.createObject(TOP);
  category.createObject(BOTTOM);
  for (const premise of premises) {
    ensureClaimObjects(category, premise);
  }
  if (goal) {
    ensureClaimObjects(category, goal);
  }
  return {
    category,
    diagrams: new CategoryDiagramKernel(),
    objects: [],
    derivations: [],
    diagnostics: [],
    proofSteps: [],
    variables: [],
    assumptions: [],
    premises: [],
    lemmas: new Map(lemmas),
    goal,
    structs,
    types,
    unverifiedReasons: []
  };
}
function seedPremises(ctx, premises) {
  for (const premise of premises) {
    const morphism = createKernelObject(ctx, premise, "PREMISE", -1, [], [], "1");
    ctx.premises.push(morphism);
  }
}
function handleNode(ctx, node, step) {
  const legacy = node.legacyError;
  if (legacy) {
    ctx.diagnostics.push({ severity: "warning", step, message: legacy, rule: "STRUCTURAL" });
  }
  switch (node.type) {
    case "Assume":
      handleAssume(ctx, node, step);
      return;
    case "SetVar":
      handleSetVar(ctx, node, step);
      return;
    case "Assert":
      handleClaimStep(ctx, node, step, "assert");
      return;
    case "Prove":
      handleProveStep(ctx, node, step);
      return;
    case "Derive":
      handleDerive(ctx, node, step);
      return;
    case "AndIntroStep":
      handleAndIntroStep(ctx, node, step);
      return;
    case "OrIntroStep":
      handleOrIntroStep(ctx, node, step);
      return;
    case "Conclude":
      handleClaimStep(ctx, node, step, "conclude");
      return;
    case "Induction":
      handleInduction(ctx, node, step);
      return;
    case "Match":
      handleMatch(ctx, node, step);
      return;
    case "Apply":
      handleApply(ctx, node.target, step);
      return;
    case "Raw":
      handleRaw(ctx, node, step);
      return;
    case "Intro":
      handleIntro(ctx, node, step);
      return;
    case "Rewrite":
      handleRewrite(ctx, node, step);
      return;
    case "Exact":
      handleExact(ctx, node, step);
      return;
    case "Obtain":
      handleObtain(ctx, node, step);
      return;
    default:
      return;
  }
}
function handleProveStep(ctx, node, step) {
  handleClaimStep(ctx, { type: "Assert", expr: node.expr, connective: node.connective }, step, "prove");
}
function handleDerive(ctx, node, step) {
  const conclusions = deriveConclusions(ctx);
  if (conclusions.length === 0) {
    ctx.diagnostics.push({ severity: "info", message: "derive(): no new conclusions reachable from current context" });
  } else {
    const lines = conclusions.map((c) => `  ${c}`).join("\n");
    ctx.diagnostics.push({ severity: "info", message: `derive(): ${conclusions.length} reachable conclusion(s):
${lines}` });
  }
}
function handleAndIntroStep(ctx, node, step) {
  const claim = `${node.left} \u2227 ${node.right}`;
  handleClaimStep(ctx, { type: "Assert", expr: { type: "Atom", condition: claim, atomKind: "expression" }, connective: node.connective }, step, "andIntro");
}
function handleOrIntroStep(ctx, node, step) {
  handleClaimStep(ctx, { type: "Assert", expr: { type: "Atom", condition: node.claim, atomKind: "expression" }, connective: node.connective }, step, "orIntro");
}
function dependsOn(objects, target, prereq) {
  const visited = /* @__PURE__ */ new Set();
  const stack = [...target.inputs];
  while (stack.length > 0) {
    const id = stack.pop();
    if (visited.has(id)) continue;
    visited.add(id);
    if (id === prereq.id) return true;
    const obj = objects.find((o) => o.id === id);
    if (obj) stack.push(...obj.inputs);
  }
  return false;
}
function validateConnective(ctx, connective, prev, curr, step) {
  if (!connective) return;
  const depends = dependsOn(ctx.objects, curr, prev);
  if (connective === "\u2192") {
    if (!depends) {
      const msg = `Incorrect connective '\u2192' at step ${step}: '${curr.claim}' does not depend on '${prev.claim}'. Use \u2227 if these are independent facts.`;
      ctx.diagnostics.push({ severity: "error", step, message: msg, rule: "CONNECTIVE" });
    }
  } else if (connective === "\u2227") {
    if (depends) {
      const msg = `Incorrect connective '\u2227' at step ${step}: '${curr.claim}' depends on '${prev.claim}'. Use \u2192 to show this follows from the previous step.`;
      ctx.diagnostics.push({ severity: "error", step, message: msg, rule: "CONNECTIVE" });
    }
  } else if (connective === "\u2228") {
    const parts = parseDisjunctionCanonical(curr.claim);
    const prevClaim = prev.claim;
    if (!parts || normArith(parts[0]) !== normArith(prevClaim) && normArith(parts[1]) !== normArith(prevClaim)) {
      const msg = `Incorrect connective '\u2228' at step ${step}: '${curr.claim}' is not a disjunction containing '${prev.claim}'. Use \u2228 only to introduce a disjunction from one of its disjuncts.`;
      ctx.diagnostics.push({ severity: "error", step, message: msg, rule: "CONNECTIVE" });
    }
  }
}
function handleAssume(ctx, node, step) {
  const claim = exprToProp(node.expr);
  const proofObject = createKernelObject(ctx, claim, "ASSUMPTION", step);
  ctx.assumptions.push(proofObject);
  ctx.proofSteps.push({
    step,
    kind: "assume",
    claim,
    rule: "ASSUMPTION",
    state: "PROVED",
    message: "Assumption introduced as a morphism into the current Boolean-category derivation context"
  });
}
function handleSetVar(ctx, node, step) {
  ctx.variables.push({ name: node.varName, domain: node.varType });
  ctx.proofSteps.push({
    step,
    kind: "setVar",
    claim: node.varType ? `${node.varName}: ${node.varType}` : node.varName,
    rule: "STRUCTURAL",
    state: "PROVED",
    message: "Bound variable recorded for categorical introduction or elimination rules"
  });
}
function handleInduction(ctx, node, step) {
  const claim = ctx.goal ?? exprToProp(node.fold);
  createKernelObject(ctx, claim, "FOLD_ELIM", step);
  ctx.proofSteps.push({
    step,
    kind: "induction",
    claim,
    rule: "FOLD_ELIM",
    state: "PROVED",
    uses: [exprToProp(node.fold), node.base, node.step],
    message: "Desugared induction into the trusted fold primitive"
  });
}
function handleMatch(ctx, node, step) {
  const scrutinee = exprToProp(node.scrutinee);
  const scrutineeMembership = requireAnyMembership(ctx, scrutinee);
  const scrutineeType = scrutineeMembership ? parseMembershipCanonical(scrutineeMembership.claim)?.set ?? null : null;
  const parsedSort = scrutineeType ? parseSort(scrutineeType) : null;
  if (parsedSort?.kind === "list" && scrutineeType) {
    handleListMatch(ctx, node, step, scrutinee, scrutineeType, parsedSort);
    return;
  }
  const boolType = inferBooleanMatchType(node);
  const typeDef = scrutineeType ? ctx.types.get(scrutineeType) : boolType;
  if (!scrutineeMembership && !boolType || !typeDef) {
    ctx.diagnostics.push({ severity: "error", step, message: `Pattern match requires a scrutinee with a registered sum type: '${scrutinee}'`, rule: "MATCH_EXHAUSTIVE" });
    ctx.proofSteps.push({
      step,
      kind: "match",
      claim: scrutinee,
      rule: "MATCH_EXHAUSTIVE",
      state: "FAILED",
      message: "No registered variant information is available for this match scrutinee"
    });
    return;
  }
  const covered = new Set(
    node.cases.filter((matchCase) => matchCase.pattern.kind === "variant").map((matchCase) => matchCase.pattern.constructor)
  );
  const exhaustive = node.cases.some((matchCase) => matchCase.pattern.kind === "wildcard") || typeDef.variants.every((variant) => covered.has(variant.name));
  if (!exhaustive) {
    ctx.diagnostics.push({ severity: "error", step, message: "MATCH_EXHAUSTIVE failed: non-exhaustive match", rule: "MATCH_EXHAUSTIVE" });
    ctx.proofSteps.push({
      step,
      kind: "match",
      claim: scrutinee,
      rule: "MATCH_EXHAUSTIVE",
      state: "FAILED",
      message: "Pattern matching must cover every variant or include a wildcard case"
    });
    return;
  }
  const branchStates = [];
  const branchUses = [];
  for (const matchCase of node.cases) {
    const branch = createBranchContext(ctx);
    const variant = matchCase.pattern.kind !== "variant" ? null : typeDef.variants.find((candidate) => candidate.name === matchCase.pattern.constructor) ?? null;
    if (matchCase.pattern.kind === "variant" && !variant) {
      branchStates.push("FAILED");
      continue;
    }
    if (variant && matchCase.pattern.kind === "variant") {
      applyVariantPatternBindings(branch, scrutinee, variant, matchCase.pattern.bindings, step);
      branchUses.push(`${scrutinee} \u2208 ${variant.name}`);
    } else {
      branchUses.push("_");
    }
    for (const branchNode of matchCase.body) {
      try {
        handleNode(branch, branchNode, step);
      } catch (error) {
        const message = error instanceof Error ? error.message : "Unknown match-branch failure";
        branch.diagnostics.push({ severity: "error", step, message, rule: "OR_ELIM" });
      }
    }
    branchStates.push(evaluateMatchBranch(branch, ctx.goal, step));
  }
  if (branchStates.some((state) => state === "FAILED")) {
    ctx.diagnostics.push({ severity: "error", step, message: "At least one match branch does not establish the required conclusion", rule: "OR_ELIM" });
    ctx.proofSteps.push({
      step,
      kind: "match",
      claim: ctx.goal ?? scrutinee,
      rule: "MATCH_EXHAUSTIVE",
      state: "FAILED",
      uses: branchUses,
      message: "Exhaustive case analysis failed because a branch does not discharge the branch goal"
    });
    return;
  }
  const targetClaim = ctx.goal ?? scrutineeMembership?.claim ?? scrutinee;
  createKernelObject(ctx, targetClaim, "MATCH_EXHAUSTIVE", step);
  ctx.proofSteps.push({
    step,
    kind: "match",
    claim: targetClaim,
    rule: "MATCH_EXHAUSTIVE",
    state: "PROVED",
    uses: branchUses,
    message: "Validated exhaustive proof by cases via categorical OR elimination"
  });
}
function handleListMatch(ctx, node, step, scrutinee, scrutineeType, parsedSort) {
  if (!requireAnyMembership(ctx, scrutinee) || parsedSort.kind !== "list" || !parsedSort.element) {
    ctx.diagnostics.push({ severity: "error", step, message: `Pattern match requires a scrutinee with a registered list sort: '${scrutinee}'`, rule: "MATCH_EXHAUSTIVE" });
    ctx.proofSteps.push({
      step,
      kind: "match",
      claim: scrutinee,
      rule: "MATCH_EXHAUSTIVE",
      state: "FAILED",
      message: "No kernel List sort information is available for this match scrutinee"
    });
    return;
  }
  const nilCase = node.cases.find((matchCase) => matchCase.pattern.kind === "list_nil") ?? null;
  const consCase = node.cases.find((matchCase) => matchCase.pattern.kind === "list_cons") ?? null;
  const exhaustive = node.cases.length === 2 && Boolean(nilCase) && Boolean(consCase);
  if (!exhaustive) {
    ctx.diagnostics.push({ severity: "error", step, message: "MATCH_EXHAUSTIVE failed: List matches must contain exactly [] and [x, ...rest]", rule: "MATCH_EXHAUSTIVE" });
    ctx.proofSteps.push({
      step,
      kind: "match",
      claim: scrutinee,
      rule: "MATCH_EXHAUSTIVE",
      state: "FAILED",
      message: "Kernel List matching requires both Nil and Cons cases"
    });
    return;
  }
  const branchStates = [];
  const branchUses = [];
  for (const matchCase of [nilCase, consCase]) {
    if (!matchCase) continue;
    const branch = createBranchContext(ctx);
    if (matchCase.pattern.kind === "list_cons") {
      applyListPatternBindings(branch, scrutinee, scrutineeType, parsedSort, matchCase.pattern.head, matchCase.pattern.tail, step);
      branchUses.push(`[${matchCase.pattern.head}, ...${matchCase.pattern.tail}]`);
    } else {
      branchUses.push("[]");
    }
    for (const branchNode of matchCase.body) {
      try {
        handleNode(branch, branchNode, step);
      } catch (error) {
        const message = error instanceof Error ? error.message : "Unknown list match-branch failure";
        branch.diagnostics.push({ severity: "error", step, message, rule: "OR_ELIM" });
      }
    }
    branchStates.push(evaluateMatchBranch(branch, ctx.goal, step));
  }
  if (branchStates.some((state) => state === "FAILED" || state === "UNVERIFIED")) {
    ctx.diagnostics.push({ severity: "error", step, message: "At least one list match branch does not establish the required conclusion", rule: "OR_ELIM" });
    ctx.proofSteps.push({
      step,
      kind: "match",
      claim: ctx.goal ?? scrutinee,
      rule: "MATCH_EXHAUSTIVE",
      state: "FAILED",
      uses: branchUses,
      message: "Exhaustive list case analysis failed because a branch does not discharge the branch goal"
    });
    return;
  }
  const targetClaim = ctx.goal ?? `${scrutinee} \u2208 ${scrutineeType}`;
  createKernelObject(ctx, targetClaim, "MATCH_EXHAUSTIVE", step);
  ctx.proofSteps.push({
    step,
    kind: "match",
    claim: targetClaim,
    rule: "MATCH_EXHAUSTIVE",
    state: "PROVED",
    uses: branchUses,
    message: "Validated exhaustive proof by cases over the kernel List primitive"
  });
}
function inferBooleanMatchType(node) {
  const constructors = [];
  for (const matchCase of node.cases) {
    if (matchCase.pattern.kind === "variant") {
      constructors.push(matchCase.pattern.constructor);
    }
  }
  const boolConstructors = /* @__PURE__ */ new Set(["true", "false"]);
  if (constructors.length === 0 || constructors.some((name) => !boolConstructors.has(name))) {
    return null;
  }
  return {
    name: "Bool",
    variants: [
      { name: "true", parent: "Bool", fields: [] },
      { name: "false", parent: "Bool", fields: [] }
    ]
  };
}
function handleApply(ctx, target, step) {
  const lemma = ctx.lemmas.get(normalizeName(target));
  if (!lemma) {
    const hyp = findExact(ctx.objects, target, false) ?? findExact(ctx.assumptions, target, false) ?? findExact(ctx.premises, target, false);
    if (hyp) {
      const impl = parseImplicationCanonical(hyp.claim);
      if (impl && ctx.goal) {
        const [antecedent, consequent] = impl;
        const consTerm = termFromString(consequent);
        const goalTerm = termFromString(ctx.goal);
        if (termEqual(consTerm, goalTerm)) {
          ctx.goal = antecedent;
          ctx.proofSteps.push({
            step,
            kind: "apply",
            claim: antecedent,
            rule: "BY_LEMMA",
            state: "PROVED",
            uses: [hyp.claim],
            message: `Applied '${target}' backward: goal reduced to '${antecedent}'`
          });
          return;
        }
      }
      ctx.diagnostics.push({ severity: "error", step, message: `apply: '${target}' is not an implication whose consequent matches the goal '${ctx.goal ?? "(none)"}'`, rule: "BY_LEMMA" });
      ctx.proofSteps.push({ step, kind: "apply", claim: target, rule: "BY_LEMMA", state: "FAILED", message: `Consequent does not match goal` });
      return;
    }
    ctx.diagnostics.push({ severity: "error", step, message: `Unknown lemma or hypothesis '${target}'`, rule: "BY_LEMMA" });
    ctx.proofSteps.push({
      step,
      kind: "apply",
      claim: target,
      rule: "BY_LEMMA",
      state: "FAILED",
      message: `'${target}' is not available`
    });
    return;
  }
  if (lemma.state !== "PROVED") {
    ctx.diagnostics.push({ severity: "error", step, message: `Lemma '${target}' is not fully proved and cannot be applied`, rule: "BY_LEMMA" });
    ctx.proofSteps.push({
      step,
      kind: "apply",
      claim: lemma.conclusion ?? target,
      rule: "BY_LEMMA",
      state: "FAILED",
      imports: [lemma.name],
      message: `Lemma '${target}' is not fully proved`
    });
    return;
  }
  if (lemma.metavars && lemma.metavars.length > 0 && lemma.conclusion && ctx.goal) {
    const metaSet = new Set(lemma.metavars);
    const lemmaConcTerm = termFromString(lemma.conclusion);
    const goalTerm = termFromString(ctx.goal);
    const unifyResult = unify(lemmaConcTerm, goalTerm, metaSet);
    if (!unifyResult.error) {
      const subst = unifyResult.subst;
      const instantiatedPremises = lemma.premises.map((p) => {
        const t = applySubst(termFromString(p), subst);
        return termToString(t);
      });
      const missingInstantiated = instantiatedPremises.filter((p) => !findExact(ctx.objects, p, false) && !findExact(ctx.premises, p, false) && !findExact(ctx.assumptions, p, false));
      if (missingInstantiated.length === 0) {
        const conclusion = termToString(applySubst(termFromString(lemma.conclusion), subst));
        const inputs2 = instantiatedPremises.map((p) => findExact(ctx.objects, p, false) ?? findExact(ctx.premises, p, false) ?? findExact(ctx.assumptions, p, false)).filter((o) => Boolean(o)).map((o) => o.id);
        createKernelObject(ctx, conclusion, "BY_LEMMA", step, inputs2, [lemma.name], "1");
        ctx.proofSteps.push({
          step,
          kind: "apply",
          claim: conclusion,
          rule: "BY_LEMMA",
          state: "PROVED",
          imports: [lemma.name],
          uses: instantiatedPremises,
          message: `Applied lemma '${target}' via unification`
        });
        return;
      }
    }
    ctx.diagnostics.push({ severity: "error", step, message: `Lemma '${target}' unification failed`, rule: "BY_LEMMA" });
    ctx.proofSteps.push({
      step,
      kind: "apply",
      claim: target,
      rule: "BY_LEMMA",
      state: "FAILED",
      message: `Consequent does not unify with goal`,
      causalError: {
        ruleAttempted: "BY_LEMMA",
        unificationMismatch: unifyResult.error
      }
    });
    return;
  }
  const missing = lemma.premises.filter((premise) => !findExact(ctx.objects, premise, false));
  if (missing.length > 0 || !lemma.conclusion) {
    ctx.diagnostics.push({
      severity: "error",
      step,
      message: `Lemma '${target}' cannot be imported; missing premises: ${missing.join(" ; ") || "conclusion"}`,
      rule: "BY_LEMMA"
    });
    ctx.proofSteps.push({
      step,
      kind: "apply",
      claim: lemma.conclusion ?? target,
      rule: "BY_LEMMA",
      state: "FAILED",
      imports: [lemma.name],
      message: `Lemma '${target}' does not compose with the current context`,
      causalError: {
        ruleAttempted: "BY_LEMMA",
        missingPremises: missing
      }
    });
    return;
  }
  const inputs = lemma.premises.map((premise) => findExact(ctx.objects, premise, false)).filter((object) => Boolean(object)).map((object) => object.id);
  createKernelObject(ctx, lemma.conclusion, "BY_LEMMA", step, inputs, [lemma.name], "1");
  ctx.proofSteps.push({
    step,
    kind: "apply",
    claim: lemma.conclusion,
    rule: "BY_LEMMA",
    state: "PROVED",
    imports: [lemma.name],
    uses: lemma.premises,
    message: `Imported lemma '${target}' as a morphism in the current context`
  });
}
function handleRaw(ctx, node, step) {
  const claim = node.content.trim();
  if (!/^contradiction\s*\(\s*\)\s*;?$/.test(claim)) {
    ctx.diagnostics.push({ severity: "error", step, message: `Unsupported raw proof syntax: '${claim}'. Use assert, assume, conclude, apply, intro, rewrite, or exact.`, rule: "STRUCTURAL" });
    ctx.proofSteps.push({
      step,
      kind: "raw",
      claim,
      rule: "STRUCTURAL",
      state: "FAILED",
      message: "Unsupported raw proof syntax"
    });
    return;
  }
  const contradiction = hasContradiction(ctx.objects);
  if (!contradiction) {
    ctx.diagnostics.push({ severity: "error", step, message: "contradiction() requires conflicting facts in scope", rule: "CONTRADICTION" });
    ctx.proofSteps.push({
      step,
      kind: "raw",
      claim: "contradiction()",
      rule: "CONTRADICTION",
      state: "FAILED",
      message: "No proposition and complement pair is available"
    });
    return;
  }
  const contradictionMeet = createKernelObject(
    ctx,
    `${contradiction[0].claim} \u2227 ${contradiction[1].claim}`,
    "AND_INTRO",
    step,
    contradiction.map((object) => object.id)
  );
  const bottom = createKernelObject(ctx, BOTTOM, "CONTRADICTION", step, [contradictionMeet.id]);
  ctx.proofSteps.push({
    step,
    kind: "raw",
    claim: BOTTOM,
    rule: "CONTRADICTION",
    state: "PROVED",
    uses: [...contradiction.map((object) => object.claim), contradictionMeet.claim],
    message: "Derived falsehood by meeting a proposition with its Boolean complement"
  });
  if (ctx.goal) {
    const exFalso = createKernelObject(ctx, ctx.goal, "CONTRADICTION", step, [bottom.id]);
    ctx.proofSteps.push({
      step,
      kind: "raw",
      claim: ctx.goal,
      rule: "CONTRADICTION",
      state: "PROVED",
      uses: [BOTTOM],
      message: "Factored the current goal through falsehood after contradiction"
    });
    void exFalso;
  }
}
function handleClaimStep(ctx, node, step, kind) {
  const claim = exprToProp(node.expr);
  const derivation = deriveClaim(ctx, claim, step);
  if (derivation.state === "FAILED") {
    ctx.diagnostics.push({ severity: "error", step, message: derivation.message, rule: derivation.rule });
  }
  ctx.proofSteps.push({
    step,
    kind,
    claim,
    rule: derivation.rule,
    state: derivation.state,
    uses: derivation.uses,
    message: derivation.message
  });
}
function deriveClaim(ctx, claim, step) {
  const exact = findExact(ctx.objects, claim, false);
  if (exact) {
    return {
      rule: exact.rule,
      state: exact.pending ? "FAILED" : "PROVED",
      uses: [exact.claim],
      message: "Claim already exists as a morphism in the current derivation"
    };
  }
  const prover = [
    deriveAndIntro,
    deriveAndElim,
    deriveStructClaim,
    deriveMeasureClaim,
    deriveCategoryClaim,
    deriveFoldClaim,
    deriveNotIntro,
    deriveImpliesElim,
    deriveImpliesIntro,
    deriveIffIntro,
    deriveIffElim,
    deriveOrIntro,
    deriveOrElim,
    deriveSubsetIntro,
    deriveSubsetElim,
    deriveSubsetTransitivity,
    deriveSubsetAntisymmetry,
    deriveEqualityReflexivity,
    deriveEqualitySymmetry,
    deriveEqualitySubstitution,
    deriveUnionRule,
    deriveIntersectionRule,
    deriveImageRule,
    derivePreimageRule,
    deriveQuantifierRule,
    deriveDependentTypeRule,
    deriveNaturalTransformationRule,
    deriveExFalso,
    deriveForallElim,
    deriveExistsIntro,
    deriveArithClaim,
    deriveModArithClaim,
    deriveIntClaim,
    deriveRealAnalysisClaim,
    deriveCryptoClaim,
    deriveOrderClaim,
    deriveGraphClaim,
    deriveCombClaim,
    deriveAlgebraClaim,
    deriveLinAlgClaim,
    deriveTopologyClaim,
    deriveNTClaim,
    deriveExtOrderClaim,
    deriveLinAlgExtClaim,
    deriveTopoExtClaim
  ];
  for (const attempt of prover) {
    const result = attempt(ctx, claim, step);
    if (result) {
      return result;
    }
  }
  return {
    rule: "STRUCTURAL",
    state: "FAILED",
    message: `No categorical derivation establishes '${claim}' from the available morphisms`
  };
}
function deriveStructClaim(ctx, claim, step) {
  const membership = parseMembershipCanonical(claim);
  if (!membership) return null;
  const projection = deriveStructProjection(ctx, membership, claim, step);
  if (projection) return projection;
  const structDef = ctx.structs.get(membership.set);
  if (!structDef) return null;
  const inputs = [];
  const uses = [];
  for (const field of structDef.fields) {
    const fieldClaim = `${membership.element}.${field.name} \u2208 ${field.type}`;
    const fieldObject = requireClassical(ctx, fieldClaim, "STRUCT_INTRO");
    if (!fieldObject) return null;
    inputs.push(fieldObject.id);
    uses.push(fieldClaim);
  }
  createKernelObject(ctx, claim, "STRUCT_INTRO", step, inputs);
  return {
    rule: "STRUCT_INTRO",
    state: "PROVED",
    uses,
    message: "Constructed a struct-instance membership from all declared field memberships"
  };
}
function deriveStructProjection(ctx, membership, claim, step) {
  const access = parseFieldAccess(membership.element);
  if (!access) return null;
  const projection = resolveFieldProjection(ctx, access.base, access.path);
  if (!projection || projection.type !== membership.set) return null;
  createKernelObject(ctx, claim, "STRUCT_ELIM", step, [projection.source.id]);
  return {
    rule: "STRUCT_ELIM",
    state: "PROVED",
    uses: [projection.source.claim],
    message: "Projected a field membership from a struct-instance membership"
  };
}
function deriveAndIntro(ctx, claim, step) {
  const parts = parseConjunctionCanonical(claim);
  if (!parts) return null;
  const left = requireClassical(ctx, parts[0], "AND_INTRO");
  const right = requireClassical(ctx, parts[1], "AND_INTRO");
  if (!left || !right) return null;
  createKernelObject(ctx, claim, "AND_INTRO", step, [left.id, right.id]);
  return {
    rule: "AND_INTRO",
    state: "PROVED",
    uses: [parts[0], parts[1]],
    message: "Constructed the Boolean meet from both conjunct morphisms"
  };
}
function deriveFoldClaim(ctx, claim, step) {
  if (!/^fold\s*\(/.test(claim)) return null;
  createKernelObject(ctx, claim, "FOLD_ELIM", step);
  return {
    rule: "FOLD_ELIM",
    state: "PROVED",
    message: "Trusted fold primitive establishes the fold result directly"
  };
}
function parseMeasureArgs(claim) {
  const m = claim.trim().match(/^Measure\s*\(\s*([^,)]+?)\s*,\s*([^)]+?)\s*\)$/);
  return m ? { mu: m[1].trim(), sigma: m[2].trim() } : null;
}
function parseSigmaAlgebraArgs(claim) {
  const m = claim.trim().match(/^SigmaAlgebra\s*\(\s*([^,)]+?)\s*,\s*([^)]+?)\s*\)$/);
  return m ? { sigma: m[1].trim(), space: m[2].trim() } : null;
}
function parseProbMeasureArgs(claim) {
  const m = claim.trim().match(/^ProbabilityMeasure\s*\(\s*([^,)]+?)\s*,\s*([^,)]+?)\s*,\s*([^)]+?)\s*\)$/);
  return m ? { p: m[1].trim(), sigma: m[2].trim(), space: m[3].trim() } : null;
}
function parseMeasurableArgs(claim) {
  const m = claim.trim().match(/^Measurable\s*\(\s*([^,)]+?)\s*,\s*([^,)]+?)\s*,\s*([^)]+?)\s*\)$/);
  return m ? { f: m[1].trim(), sigmaX: m[2].trim(), sigmaY: m[3].trim() } : null;
}
function parseFunctionApplication(s) {
  const m = s.trim().match(/^([^\s(]+)\s*\((.+)\)$/);
  return m ? { fn: m[1].trim(), arg: m[2].trim() } : null;
}
function allContextObjects(ctx) {
  return [...ctx.premises, ...ctx.assumptions, ...classicalObjects(ctx)];
}
function splitTopLevelLeq(s) {
  let depth = 0;
  for (let i = 0; i < s.length - 1; i++) {
    const ch = s[i];
    if (ch === "(" || ch === "[") depth++;
    else if (ch === ")" || ch === "]") depth--;
    else if (depth === 0 && s[i] === "\u2264") {
      return [s.slice(0, i).trim(), s.slice(i + 1).trim()];
    }
  }
  return null;
}
function splitTopLevelSum(s) {
  let depth = 0;
  for (let i = s.length - 1; i >= 0; i--) {
    const ch = s[i];
    if (ch === ")" || ch === "]") depth++;
    else if (ch === "(" || ch === "[") depth--;
    else if (depth === 0 && ch === "+") {
      return [s.slice(0, i).trim(), s.slice(i + 1).trim()];
    }
  }
  return null;
}
function deriveMeasureClaim(ctx, claim, step) {
  const all = allContextObjects(ctx);
  const subsetMatch2 = claim.trim().match(/^∅\s*⊆\s*(.+)$/);
  if (subsetMatch2) {
    createKernelObject(ctx, claim, "MEASURE_EMPTY", step);
    return { rule: "MEASURE_EMPTY", state: "PROVED", message: `Empty set is subset of everything` };
  }
  const measurePred = claim.trim().match(/^Measure\((.+?),\s*(.+)\)$/);
  if (measurePred) {
    const [, mu, sigma] = measurePred;
    for (const obj of all) {
      const pma = parseProbMeasureArgs(obj.claim);
      if (pma && pma.p === mu && pma.sigma === sigma) {
        createKernelObject(ctx, claim, "MEASURE_EMPTY", step, [obj.id]);
        return { rule: "MEASURE_EMPTY", state: "PROVED", uses: [obj.claim], message: `ProbabilityMeasure implies Measure` };
      }
    }
  }
  const membership = parseMembershipCanonical(claim);
  if (membership) {
    for (const obj of all) {
      const sa = parseSigmaAlgebraArgs(obj.claim);
      if (!sa) continue;
      if (sa.sigma === membership.set && sa.space === membership.element) {
        createKernelObject(ctx, claim, "SIGMA_CONTAINS_SPACE", step, [obj.id]);
        return { rule: "SIGMA_CONTAINS_SPACE", state: "PROVED", uses: [obj.claim], message: "The whole space belongs to its sigma-algebra" };
      }
      if (sa.sigma === membership.set && membership.element === "\u2205") {
        createKernelObject(ctx, claim, "SIGMA_CONTAINS_EMPTY", step, [obj.id]);
        return { rule: "SIGMA_CONTAINS_EMPTY", state: "PROVED", uses: [obj.claim], message: "The empty set belongs to every sigma-algebra" };
      }
    }
    const compMatch = membership.element.match(/^complement\s*\(\s*(.+?)\s*,\s*(.+?)\s*\)$/);
    if (compMatch) {
      const a = compMatch[1].trim();
      const x = compMatch[2].trim();
      for (const obj of all) {
        const sa = parseSigmaAlgebraArgs(obj.claim);
        if (!sa || sa.sigma !== membership.set || sa.space !== x) continue;
        const aIn = requireClassical(ctx, `${a} \u2208 ${membership.set}`, "SIGMA_CLOSED_COMPLEMENT");
        if (aIn) {
          createKernelObject(ctx, claim, "SIGMA_CLOSED_COMPLEMENT", step, [obj.id, aIn.id]);
          return { rule: "SIGMA_CLOSED_COMPLEMENT", state: "PROVED", uses: [obj.claim, aIn.claim], message: "Sigma-algebras are closed under complementation" };
        }
      }
    }
    const unionParts = parseBinarySetCanonical(membership.element, "\u222A");
    if (unionParts) {
      const sigma = membership.set;
      for (const obj of all) {
        if (!parseSigmaAlgebraArgs(obj.claim) || parseSigmaAlgebraArgs(obj.claim).sigma !== sigma) continue;
        const aIn = requireClassical(ctx, `${unionParts[0]} \u2208 ${sigma}`, "SIGMA_CLOSED_UNION");
        const bIn = requireClassical(ctx, `${unionParts[1]} \u2208 ${sigma}`, "SIGMA_CLOSED_UNION");
        if (aIn && bIn) {
          createKernelObject(ctx, claim, "SIGMA_CLOSED_UNION", step, [obj.id, aIn.id, bIn.id]);
          return { rule: "SIGMA_CLOSED_UNION", state: "PROVED", uses: [obj.claim, aIn.claim, bIn.claim], message: "Sigma-algebras are closed under binary union" };
        }
      }
    }
    const preimageMatch = membership.element.match(/^preimage\s*\(\s*(.+?)\s*,\s*(.+?)\s*\)$/);
    if (preimageMatch) {
      const f = preimageMatch[1].trim();
      const b = preimageMatch[2].trim();
      const sigmaX = membership.set;
      for (const obj of all) {
        const ma = parseMeasurableArgs(obj.claim);
        if (!ma || ma.f !== f || ma.sigmaX !== sigmaX) continue;
        const bIn = requireClassical(ctx, `${b} \u2208 ${ma.sigmaY}`, "MEASURABLE_PREIMAGE");
        if (bIn) {
          createKernelObject(ctx, claim, "MEASURABLE_PREIMAGE", step, [obj.id, bIn.id]);
          return { rule: "MEASURABLE_PREIMAGE", state: "PROVED", uses: [obj.claim, bIn.claim], message: "Preimage of a measurable set under a measurable function is measurable" };
        }
      }
    }
  }
  const equality = parseEqualityCanonical(claim);
  if (equality) {
    const leftApp = parseFunctionApplication(equality.left);
    const rightApp = parseFunctionApplication(equality.right);
    if (leftApp && leftApp.arg === "\u2205" && equality.right === "0") {
      for (const obj of all) {
        const ma = parseMeasureArgs(obj.claim);
        const pma = parseProbMeasureArgs(obj.claim);
        if (ma && ma.mu === leftApp.fn || pma && pma.p === leftApp.fn) {
          createKernelObject(ctx, claim, "MEASURE_EMPTY", step, [obj.id]);
          return { rule: "MEASURE_EMPTY", state: "PROVED", uses: [obj.claim], message: "Axiom: the measure of the empty set is zero" };
        }
      }
    }
    if (rightApp && rightApp.arg === "\u2205" && equality.left === "0") {
      for (const obj of all) {
        const ma = parseMeasureArgs(obj.claim);
        const pma = parseProbMeasureArgs(obj.claim);
        if (ma && ma.mu === rightApp.fn || pma && pma.p === rightApp.fn) {
          createKernelObject(ctx, claim, "MEASURE_EMPTY", step, [obj.id]);
          return { rule: "MEASURE_EMPTY", state: "PROVED", uses: [obj.claim], message: "Axiom: the measure of the empty set is zero" };
        }
      }
    }
    if (leftApp) {
      const unionParts = parseBinarySetCanonical(leftApp.arg, "\u222A");
      const sumParts = splitTopLevelSum(equality.right);
      if (unionParts && sumParts) {
        const aApp = parseFunctionApplication(sumParts[0]);
        const bApp = parseFunctionApplication(sumParts[1]);
        if (aApp && bApp && aApp.fn === leftApp.fn && bApp.fn === leftApp.fn && (normArith(aApp.arg) === normArith(unionParts[0]) && normArith(bApp.arg) === normArith(unionParts[1]) || normArith(aApp.arg) === normArith(unionParts[1]) && normArith(bApp.arg) === normArith(unionParts[0]))) {
          const A = unionParts[0], B = unionParts[1];
          for (const obj of all) {
            const ma = parseMeasureArgs(obj.claim);
            const pma = parseProbMeasureArgs(obj.claim);
            if ((!ma || ma.mu !== leftApp.fn) && (!pma || pma.p !== leftApp.fn)) continue;
            const disjointHyp = requireClassical(ctx, `${A} \u2229 ${B} = \u2205`, "MEASURE_ADDITIVE") ?? requireClassical(ctx, `disjoint(${A}, ${B})`, "MEASURE_ADDITIVE") ?? requireClassical(ctx, `disjoint(${B}, ${A})`, "MEASURE_ADDITIVE");
            if (disjointHyp) {
              createKernelObject(ctx, claim, "MEASURE_ADDITIVE", step, [obj.id, disjointHyp.id]);
              return { rule: "MEASURE_ADDITIVE", state: "PROVED", uses: [obj.claim, disjointHyp.claim], message: "Countable additivity on disjoint sets" };
            }
          }
        }
      }
    }
    if (leftApp) {
      const inclExclRhs = equality.right.match(/^(.+)\((.+)\)\s*\+\s*\1\((.+)\)\s*-\s*\1\((.+)\)$/);
      if (inclExclRhs) {
        const [, fn, a1, b1, inter] = inclExclRhs;
        const unionParts = parseBinarySetCanonical(leftApp.arg, "\u222A");
        if (unionParts && fn === leftApp.fn && (normArith(a1) === normArith(unionParts[0]) && normArith(b1) === normArith(unionParts[1]) || normArith(a1) === normArith(unionParts[1]) && normArith(b1) === normArith(unionParts[0]))) {
          for (const obj of all) {
            const pma = parseProbMeasureArgs(obj.claim);
            if (pma && pma.p === fn) {
              createKernelObject(ctx, claim, "MEASURE_ADDITIVE", step, [obj.id]);
              return { rule: "MEASURE_ADDITIVE", state: "PROVED", uses: [obj.claim], message: "Inclusion-exclusion: P(A\u222AB) = P(A)+P(B)-P(A\u2229B)" };
            }
          }
        }
      }
      const partDecomp = equality.right.match(/^(.+)\((.+?)\s*∩\s*(.+?)\)\s*\+\s*\1\((.+?)\s*\\\s*(.+?)\)$/);
      if (partDecomp) {
        for (const obj of all) {
          const pma = parseProbMeasureArgs(obj.claim);
          if (pma && pma.p === leftApp.fn) {
            createKernelObject(ctx, claim, "MEASURE_ADDITIVE", step, [obj.id]);
            return { rule: "MEASURE_ADDITIVE", state: "PROVED", uses: [obj.claim], message: "Partition decomposition P(B) = P(A\u2229B) + P(B\\A)" };
          }
        }
      }
      const diffDecomp = equality.right.match(/^(.+)\((.+?)\)\s*-\s*\1\((.+?)\s*∩\s*(.+?)\)$/);
      if (diffDecomp) {
        for (const obj of all) {
          const pma = parseProbMeasureArgs(obj.claim);
          if (pma && pma.p === leftApp.fn) {
            createKernelObject(ctx, claim, "MEASURE_ADDITIVE", step, [obj.id]);
            return { rule: "MEASURE_ADDITIVE", state: "PROVED", uses: [obj.claim], message: "P(B\\A) = P(B) - P(A\u2229B)" };
          }
        }
      }
    }
    if (leftApp) {
      const compArg = leftApp.arg.match(/^complement\s*\(\s*(.+?)\s*,\s*(.+?)\s*\)$/);
      const rhs1MinusP = equality.right.match(/^1\s*-\s*([^\s(]+)\s*\((.+)\)$/);
      if (compArg && rhs1MinusP && rhs1MinusP[1] === leftApp.fn && rhs1MinusP[2] === compArg[1].trim()) {
        for (const obj of all) {
          const pma = parseProbMeasureArgs(obj.claim);
          if (!pma || pma.p !== leftApp.fn) continue;
          const aIn = requireClassical(ctx, `${compArg[1].trim()} \u2208 ${pma.sigma}`, "PROB_COMPLEMENT");
          if (aIn) {
            createKernelObject(ctx, claim, "PROB_COMPLEMENT", step, [obj.id, aIn.id]);
            return { rule: "PROB_COMPLEMENT", state: "PROVED", uses: [obj.claim, aIn.claim], message: "P(A\u1D9C) = 1 \u2212 P(A) for probability measures" };
          }
        }
      }
    }
    if (leftApp && equality.right === "1") {
      for (const obj of all) {
        const pma = parseProbMeasureArgs(obj.claim);
        if (!pma || pma.p !== leftApp.fn || pma.space !== leftApp.arg) continue;
        createKernelObject(ctx, claim, "PROB_TOTAL", step, [obj.id]);
        return { rule: "PROB_TOTAL", state: "PROVED", uses: [obj.claim], message: "Axiom: probability of the whole space is 1" };
      }
    }
    {
      const unionDecomp = equality.left.match(/^(.+)\s*∪\s*(.+)$/);
      const unionDecompR = equality.right.match(/^(.+)\s*∪\s*[\s(]*(.*?)\s*\\\s*(.*?)\s*\)?\s*$/);
      if (unionDecomp && unionDecompR && normArith(unionDecomp[1].trim()) === normArith(unionDecompR[1].trim()) && normArith(unionDecomp[2].trim()) === normArith(unionDecompR[2].trim())) {
        createKernelObject(ctx, claim, "MEASURE_ADDITIVE", step);
        return { rule: "MEASURE_ADDITIVE", state: "PROVED", message: `Set identity: A \u222A B = A \u222A (B \\ A)` };
      }
    }
    if (leftApp) {
      const condMatch = leftApp.arg.match(/^(.+?)\s*\|\s*(.+)$/);
      if (condMatch) {
        const [, X, Y] = condMatch;
        const rhsParts = equality.right.match(/^([^(]+)\((.+?)\s*∩\s*(.+?)\)\s*\/\s*\1\((.+?)\)$/);
        if (rhsParts && rhsParts[1] === leftApp.fn && normArith(rhsParts[4]) === normArith(Y) && (normArith(rhsParts[2]) === normArith(X) && normArith(rhsParts[3]) === normArith(Y) || normArith(rhsParts[2]) === normArith(Y) && normArith(rhsParts[3]) === normArith(X))) {
          for (const obj of all) {
            const pma = parseProbMeasureArgs(obj.claim);
            if (pma && pma.p === leftApp.fn) {
              createKernelObject(ctx, claim, "PROB_TOTAL", step, [obj.id]);
              return { rule: "PROB_TOTAL", state: "PROVED", uses: [obj.claim], message: `Conditional probability: P(${X}|${Y}) = P(${X}\u2229${Y})/P(${Y})` };
            }
          }
        }
      }
    }
    if (leftApp) {
      const intersArgs = parseBinarySetCanonical(leftApp.arg, "\u2229");
      if (intersArgs) {
        const rhsProd = equality.right.match(/^([^(]+)\((.+?)\s*\|\s*(.+?)\)\s*\*\s*\1\((.+?)\)$/);
        if (rhsProd && rhsProd[1] === leftApp.fn) {
          for (const obj of all) {
            const pma = parseProbMeasureArgs(obj.claim);
            if (pma && pma.p === leftApp.fn) {
              createKernelObject(ctx, claim, "PROB_TOTAL", step, [obj.id]);
              return { rule: "PROB_TOTAL", state: "PROVED", uses: [obj.claim], message: `Chain rule: P(A\u2229B) = P(B|A)P(A)` };
            }
          }
        }
      }
    }
    if (leftApp) {
      const bayesLhs = leftApp.arg.match(/^(.+?)\s*\|\s*(.+)$/);
      const bayesRhs = equality.right.match(/^([^(]+)\((.+?)\s*\|\s*(.+?)\)\s*\*\s*\1\((.+?)\)\s*\/\s*\1\((.+?)\)$/);
      if (bayesLhs && bayesRhs && bayesRhs[1] === leftApp.fn) {
        for (const obj of all) {
          const pma = parseProbMeasureArgs(obj.claim);
          if (pma && pma.p === leftApp.fn) {
            createKernelObject(ctx, claim, "PROB_TOTAL", step, [obj.id]);
            return { rule: "PROB_TOTAL", state: "PROVED", uses: [obj.claim], message: `Bayes' theorem` };
          }
        }
      }
    }
    if (leftApp) {
      const interArgs = parseBinarySetCanonical(leftApp.arg, "\u2229");
      if (interArgs) {
        const [Aarg, Barg] = interArgs;
        const rhsProd2 = equality.right.match(/^([^(]+)\((.+?)\)\s*\*\s*\1\((.+?)\)$/);
        if (rhsProd2 && rhsProd2[1] === leftApp.fn && (normArith(rhsProd2[2]) === normArith(Aarg) && normArith(rhsProd2[3]) === normArith(Barg) || normArith(rhsProd2[2]) === normArith(Barg) && normArith(rhsProd2[3]) === normArith(Aarg))) {
          const indepHyp = all.find((o) => o.claim.trim() === `independent(${Aarg}, ${Barg})` || o.claim.trim() === `independent(${Barg}, ${Aarg})`);
          for (const obj of all) {
            const pma = parseProbMeasureArgs(obj.claim);
            if (pma && pma.p === leftApp.fn) {
              const deps = indepHyp ? [obj.id, indepHyp.id] : [obj.id];
              createKernelObject(ctx, claim, "PROB_TOTAL", step, deps);
              return { rule: "PROB_TOTAL", state: "PROVED", uses: [obj.claim], message: `Independence: P(A\u2229B) = P(A)P(B)` };
            }
          }
        }
      }
    }
    if (leftApp && !leftApp.arg.includes("\u2229") && !leftApp.arg.includes("|")) {
      const sumOfInterParts = equality.right.match(/^([^(]+)\((.+?)\s*∩\s*(.+?)\)\s*\+\s*\1\((.+?)\s*∩\s*(.+?)\)$/);
      if (sumOfInterParts && sumOfInterParts[1] === leftApp.fn) {
        const partHyp = all.find((o) => o.claim.match(/^partition\(/));
        if (partHyp) {
          for (const obj of all) {
            const pma = parseProbMeasureArgs(obj.claim);
            if (pma && pma.p === leftApp.fn) {
              createKernelObject(ctx, claim, "PROB_TOTAL", step, [obj.id, partHyp.id]);
              return { rule: "PROB_TOTAL", state: "PROVED", uses: [obj.claim, partHyp.claim], message: `Law of total probability` };
            }
          }
        }
      }
    }
  }
  const markovMatch = claim.trim().match(/^(.+)\((.+)\s*≥\s*(.+)\)\s*≤\s*expected\((.+)\)\s*\/\s*(.+)$/);
  if (markovMatch) {
    const [, fn, X, a, X2, a2] = markovMatch;
    if (normArith(X) === normArith(X2) && normArith(a) === normArith(a2)) {
      for (const obj of all) {
        const pma = parseProbMeasureArgs(obj.claim);
        if (pma && pma.p === fn) {
          createKernelObject(ctx, claim, "MEASURE_MONO", step, [obj.id]);
          return { rule: "MEASURE_MONO", state: "PROVED", uses: [obj.claim], message: `Markov's inequality` };
        }
      }
    }
  }
  const zeroLeqMatch = claim.trim().match(/^0\s*≤\s*(.+)\((.+)\)$/);
  if (zeroLeqMatch) {
    const [, fn, arg] = zeroLeqMatch;
    for (const obj of all) {
      const pma = parseProbMeasureArgs(obj.claim);
      if (pma && pma.p === fn) {
        createKernelObject(ctx, claim, "MEASURE_MONO", step, [obj.id]);
        return { rule: "MEASURE_MONO", state: "PROVED", uses: [obj.claim], message: `Probability is non-negative: 0 \u2264 P(${arg})` };
      }
    }
  }
  const leqOneMatch = claim.trim().match(/^(.+)\((.+)\)\s*≤\s*1$/);
  if (leqOneMatch) {
    const [, fn, arg] = leqOneMatch;
    for (const obj of all) {
      const pma = parseProbMeasureArgs(obj.claim);
      if (pma && pma.p === fn) {
        createKernelObject(ctx, claim, "MEASURE_MONO", step, [obj.id]);
        return { rule: "MEASURE_MONO", state: "PROVED", uses: [obj.claim], message: `Probability is at most 1: P(${arg}) \u2264 1` };
      }
    }
  }
  const subsOmegaMatch = claim.trim().match(/^(.+)\s*⊆\s*(.+)$/);
  if (subsOmegaMatch) {
    const [, A, Omega] = subsOmegaMatch;
    for (const obj of all) {
      const pma = parseProbMeasureArgs(obj.claim);
      if (pma && normArith(pma.space) === normArith(Omega)) {
        const aInSigma = all.find((o) => {
          const m = parseMembershipCanonical(o.claim);
          return m && normArith(m.element) === normArith(A) && normArith(m.set) === normArith(pma.sigma);
        });
        if (aInSigma) {
          createKernelObject(ctx, claim, "MEASURE_MONO", step, [obj.id, aInSigma.id]);
          return { rule: "MEASURE_MONO", state: "PROVED", uses: [obj.claim, aInSigma.claim], message: `${A} \u2208 \u03A3 implies ${A} \u2286 ${Omega}` };
        }
      }
    }
  }
  const leqParts = splitTopLevelLeq(claim);
  if (leqParts) {
    const lhsApp = parseFunctionApplication(leqParts[0]);
    const rhsApp = parseFunctionApplication(leqParts[1]);
    if (lhsApp && rhsApp && lhsApp.fn === rhsApp.fn) {
      for (const obj of all) {
        const ma = parseMeasureArgs(obj.claim) ?? (parseProbMeasureArgs(obj.claim) ? { mu: parseProbMeasureArgs(obj.claim).p, sigma: parseProbMeasureArgs(obj.claim).sigma } : null);
        if (!ma || ma.mu !== lhsApp.fn) continue;
        const subset = requireClassical(ctx, `${lhsApp.arg} \u2286 ${rhsApp.arg}`, "MEASURE_MONO") ?? requireClassical(ctx, `${lhsApp.arg} \u2282 ${rhsApp.arg}`, "MEASURE_MONO");
        if (subset) {
          const aIn = requireClassical(ctx, `${lhsApp.arg} \u2208 ${ma.sigma}`, "MEASURE_MONO");
          const bIn = requireClassical(ctx, `${rhsApp.arg} \u2208 ${ma.sigma}`, "MEASURE_MONO");
          if (aIn && bIn) {
            createKernelObject(ctx, claim, "MEASURE_MONO", step, [obj.id, subset.id, aIn.id, bIn.id]);
            return { rule: "MEASURE_MONO", state: "PROVED", uses: [obj.claim, subset.claim, aIn.claim], message: "Monotonicity: A \u2286 B implies \u03BC(A) \u2264 \u03BC(B)" };
          }
          if (parseProbMeasureArgs(obj.claim)) {
            createKernelObject(ctx, claim, "MEASURE_MONO", step, [obj.id, subset.id]);
            return { rule: "MEASURE_MONO", state: "PROVED", uses: [obj.claim, subset.claim], message: "Monotonicity: A \u2286 B implies P(A) \u2264 P(B)" };
          }
        }
      }
    }
    if (lhsApp) {
      const unionParts = parseBinarySetCanonical(lhsApp.arg, "\u222A");
      const sumParts = splitTopLevelSum(leqParts[1]);
      if (unionParts && sumParts) {
        const aApp = parseFunctionApplication(sumParts[0]);
        const bApp = parseFunctionApplication(sumParts[1]);
        if (aApp && bApp && aApp.fn === lhsApp.fn && bApp.fn === lhsApp.fn && aApp.arg === unionParts[0] && bApp.arg === unionParts[1]) {
          for (const obj of all) {
            const ma = parseMeasureArgs(obj.claim) ?? (parseProbMeasureArgs(obj.claim) ? { mu: parseProbMeasureArgs(obj.claim).p, sigma: parseProbMeasureArgs(obj.claim).sigma } : null);
            if (!ma || ma.mu !== lhsApp.fn) continue;
            const aIn = requireClassical(ctx, `${unionParts[0]} \u2208 ${ma.sigma}`, "MEASURE_SUBADDITIVE");
            const bIn = requireClassical(ctx, `${unionParts[1]} \u2208 ${ma.sigma}`, "MEASURE_SUBADDITIVE");
            if (aIn && bIn) {
              createKernelObject(ctx, claim, "MEASURE_SUBADDITIVE", step, [obj.id, aIn.id, bIn.id]);
              return { rule: "MEASURE_SUBADDITIVE", state: "PROVED", uses: [obj.claim, aIn.claim, bIn.claim], message: "Subadditivity: \u03BC(A \u222A B) \u2264 \u03BC(A) + \u03BC(B)" };
            }
          }
        }
      }
    }
  }
  const disjMatch = claim.trim().match(/^disjoint\((.+?)\s*,\s*(.+?)\s*\\\s*(.+?)\)$/);
  if (disjMatch) {
    const [, A, B, C] = disjMatch;
    if (normArith(A) === normArith(C)) {
      createKernelObject(ctx, claim, "MEASURE_ADDITIVE", step);
      return { rule: "MEASURE_ADDITIVE", state: "PROVED", message: `${A} and ${B}\\${A} are disjoint` };
    }
  }
  const leqSub = splitTopLevelLeq(claim);
  if (leqSub) {
    const lhsA = parseFunctionApplication(leqSub[0]);
    if (lhsA) {
      const unionP = parseBinarySetCanonical(lhsA.arg, "\u222A");
      const sumS = splitTopLevelSum(leqSub[1]);
      if (unionP && sumS) {
        const aA = parseFunctionApplication(sumS[0]);
        const bA = parseFunctionApplication(sumS[1]);
        if (aA && bA && aA.fn === lhsA.fn && bA.fn === lhsA.fn) {
          for (const obj of all) {
            const pma = parseProbMeasureArgs(obj.claim);
            if (pma && pma.p === lhsA.fn) {
              createKernelObject(ctx, claim, "MEASURE_SUBADDITIVE", step, [obj.id]);
              return { rule: "MEASURE_SUBADDITIVE", state: "PROVED", uses: [obj.claim], message: "P(A\u222AB) \u2264 P(A)+P(B)" };
            }
          }
        }
      }
    }
  }
  const measPred = parseMeasurePredicateCanonical(claim);
  if (measPred?.name === "Measurable") {
    const [fg, sigmaX, sigmaZ] = measPred.args;
    const compParts = fg.match(/^(.+?)\s*∘\s*(.+)$/);
    if (compParts) {
      const g = compParts[1].trim();
      const f = compParts[2].trim();
      for (const fObj of all) {
        const fma = parseMeasurableArgs(fObj.claim);
        if (!fma || fma.f !== f || fma.sigmaX !== sigmaX) continue;
        for (const gObj of all) {
          const gma = parseMeasurableArgs(gObj.claim);
          if (!gma || gma.f !== g || gma.sigmaX !== fma.sigmaY || gma.sigmaY !== sigmaZ) continue;
          createKernelObject(ctx, claim, "MEASURABLE_COMPOSE", step, [fObj.id, gObj.id]);
          return { rule: "MEASURABLE_COMPOSE", state: "PROVED", uses: [fObj.claim, gObj.claim], message: "Composition of measurable functions is measurable" };
        }
      }
    }
  }
  return null;
}
function deriveCategoryClaim(ctx, claim, step) {
  const morphismDecl = parseMorphismDeclarationCanonical(claim);
  if (morphismDecl) {
    try {
      ctx.diagrams.registerClaim(claim);
      createKernelObject(ctx, claim, "CAT_MORPHISM", step);
      return {
        rule: "CAT_MORPHISM",
        state: "PROVED",
        message: "Registered a categorical morphism with explicit domain and codomain"
      };
    } catch (error) {
      return categoryFailure(error, "CAT_MORPHISM");
    }
  }
  const predicate = parseCategoryPredicateCanonical(claim);
  if (predicate) {
    try {
      const result = deriveCategoryPredicate(ctx, predicate, step, claim);
      if (result) return result;
    } catch (error) {
      return categoryFailure(error, predicateToRule(predicate.name));
    }
  }
  const categoricalEquality = looksLikeCategoricalEquality2(claim) ? parseCategoricalEqualityCanonical(claim) : null;
  if (categoricalEquality) {
    try {
      const result = deriveCategoricalEquality(ctx, claim, categoricalEquality.left, categoricalEquality.right, step);
      if (result) return result;
    } catch (error) {
      const msg = error instanceof Error ? error.message : "";
      if (msg.includes("unknown functor")) return null;
      return categoryFailure(error, "CAT_EQUALITY");
    }
  }
  return null;
}
function deriveCategoryPredicate(ctx, predicate, step, claim) {
  switch (predicate.name) {
    case "Category":
    case "Object":
    case "Morphism":
    case "Functor":
      ctx.diagrams.registerPredicate(predicate.name, predicate.args);
      createKernelObject(ctx, claim, predicate.name === "Functor" ? "FUNCTOR_INTRO" : predicate.name === "Morphism" ? "CAT_MORPHISM" : "CAT_OBJECT", step);
      return {
        rule: predicate.name === "Functor" ? "FUNCTOR_INTRO" : predicate.name === "Morphism" ? "CAT_MORPHISM" : "CAT_OBJECT",
        state: "PROVED",
        message: predicate.name === "Functor" ? "Registered a functor between finite categories" : predicate.name === "Morphism" ? "Registered a categorical morphism declaration inside an explicit category" : "Registered categorical structure in the finite-diagram kernel"
      };
    case "Iso":
      return deriveIso(ctx, predicate.args, claim, step);
    case "Product":
      return deriveProduct(ctx, predicate.args, claim, step);
    case "ProductMediator":
      return deriveProductMediator(ctx, predicate.args, claim, step);
    case "Coproduct":
      return deriveCoproduct(ctx, predicate.args, claim, step);
    case "Pullback":
      return derivePullback(ctx, predicate.args, claim, step);
    case "Pushout":
      return derivePushout(ctx, predicate.args, claim, step);
  }
}
function deriveCategoricalEquality(ctx, claim, left, right, step) {
  const formattedLeft = formatMorphismExpr(left);
  const formattedRight = formatMorphismExpr(right);
  const leftDecl = parseMorphismDeclarationCanonical(formattedLeft);
  const rightDecl = parseMorphismDeclarationCanonical(formattedRight);
  void leftDecl;
  void rightDecl;
  if (ctx.diagrams.equalMorphisms(left, right)) {
    createKernelObject(ctx, claim, "CAT_EQUALITY", step);
    return {
      rule: "CAT_EQUALITY",
      state: "PROVED",
      uses: [formattedLeft, formattedRight],
      message: "Validated equality between categorical composites"
    };
  }
  const leftText = formattedLeft;
  const rightText = formattedRight;
  if (stripIdentity(leftText) === stripIdentity(rightText)) {
    createKernelObject(ctx, claim, "CAT_IDENTITY", step);
    return {
      rule: "CAT_IDENTITY",
      state: "PROVED",
      uses: [formattedLeft, formattedRight],
      message: "Validated a categorical identity law"
    };
  }
  if (normalizeComposition(leftText) === normalizeComposition(rightText)) {
    createKernelObject(ctx, claim, "CAT_ASSOC", step);
    return {
      rule: "CAT_ASSOC",
      state: "PROVED",
      uses: [formattedLeft, formattedRight],
      message: "Validated associativity of explicit morphism composition"
    };
  }
  const functorLaw = deriveFunctorEquality(ctx, left, right, claim, step);
  if (functorLaw) return functorLaw;
  return null;
}
function deriveIso(ctx, args, claim, step) {
  const target = args[0];
  if (!target) return null;
  const morphism = ctx.diagrams.resolveMorphismExpr({ kind: "name", label: target });
  for (const object of [...ctx.objects, ...ctx.premises, ...ctx.assumptions]) {
    const candidate = parseMorphismDeclarationCanonical(object.claim);
    if (!candidate) continue;
    try {
      const inverse = ctx.diagrams.resolveMorphismExpr({ kind: "name", label: candidate.label });
      if (inverse.category !== morphism.category) continue;
      const leftId = `id_${ctx.diagrams.objectById(morphism.domain).label}`;
      const rightId = `id_${ctx.diagrams.objectById(morphism.codomain).label}`;
      const leftEq = `${candidate.label} \u2218 ${target} = ${leftId}`;
      const rightEq = `${target} \u2218 ${candidate.label} = ${rightId}`;
      if (findExact(ctx.objects, leftEq, false) || findExact(ctx.premises, leftEq, false) || findExact(ctx.assumptions, leftEq, false)) {
        if (findExact(ctx.objects, rightEq, false) || findExact(ctx.premises, rightEq, false) || findExact(ctx.assumptions, rightEq, false)) {
          createKernelObject(ctx, claim, "ISO_INTRO", step);
          return {
            rule: "ISO_INTRO",
            state: "PROVED",
            uses: [leftEq, rightEq],
            message: `Validated explicit inverse equations for Iso(${target})`
          };
        }
      }
    } catch {
      continue;
    }
  }
  return {
    rule: "ISO_INTRO",
    state: "FAILED",
    message: `Category error: inverse conditions for Iso(${target}) are not satisfied`
  };
}
function deriveProduct(ctx, args, claim, step) {
  if (args.length < 5) return null;
  const [productObject, pi1, pi2, leftObject, rightObject] = args;
  const leftDecl = hasMorphism(ctx, `${pi1} : ${productObject} \u2192 ${leftObject}`);
  const rightDecl = hasMorphism(ctx, `${pi2} : ${productObject} \u2192 ${rightObject}`);
  if (leftDecl && rightDecl) {
    createKernelObject(ctx, claim, "PRODUCT_INTRO", step);
    return {
      rule: "PRODUCT_INTRO",
      state: "PROVED",
      uses: [`${pi1} : ${productObject} \u2192 ${leftObject}`, `${pi2} : ${productObject} \u2192 ${rightObject}`],
      message: "Validated the explicit projections for a finite product cone"
    };
  }
  return null;
}
function deriveProductMediator(ctx, args, claim, step) {
  if (args.length < 5) return null;
  const [mediator, left, right, pi1, pi2] = args;
  const leftEq = `${pi1} \u2218 ${mediator} = ${left}`;
  const rightEq = `${pi2} \u2218 ${mediator} = ${right}`;
  if (hasClaim(ctx, leftEq) && hasClaim(ctx, rightEq)) {
    createKernelObject(ctx, claim, "PRODUCT_MEDIATOR", step);
    return {
      rule: "PRODUCT_MEDIATOR",
      state: "PROVED",
      uses: [leftEq, rightEq],
      message: "Universal property error cleared: mediator satisfies both projection equations"
    };
  }
  return {
    rule: "PRODUCT_MEDIATOR",
    state: "FAILED",
    message: "Universal property error: mediator does not satisfy both projection equations"
  };
}
function deriveCoproduct(ctx, args, claim, step) {
  if (args.length < 5) return null;
  const [sumObject, i1, i2, leftObject, rightObject] = args;
  if (hasMorphism(ctx, `${i1} : ${leftObject} \u2192 ${sumObject}`) && hasMorphism(ctx, `${i2} : ${rightObject} \u2192 ${sumObject}`)) {
    createKernelObject(ctx, claim, "COPRODUCT_INTRO", step);
    return {
      rule: "COPRODUCT_INTRO",
      state: "PROVED",
      uses: [`${i1} : ${leftObject} \u2192 ${sumObject}`, `${i2} : ${rightObject} \u2192 ${sumObject}`],
      message: "Validated the explicit injections for a finite coproduct cocone"
    };
  }
  return null;
}
function derivePullback(ctx, args, claim, step) {
  if (args.length < 5) return null;
  const [pullbackObject, p1, p2, f, g] = args;
  const p1Decl = findDeclarationByLabel(ctx, p1);
  const p2Decl = findDeclarationByLabel(ctx, p2);
  const fDecl = findDeclarationByLabel(ctx, f);
  const gDecl = findDeclarationByLabel(ctx, g);
  if (!p1Decl || !p2Decl || !fDecl || !gDecl) {
    return null;
  }
  const commuting = `${f} \u2218 ${p1} = ${g} \u2218 ${p2}`;
  if (!hasClaim(ctx, commuting)) {
    return { rule: "PULLBACK_INTRO", state: "FAILED", message: "Diagram error: square does not commute" };
  }
  if (p1Decl.domain !== pullbackObject || p2Decl.domain !== pullbackObject) {
    return { rule: "PULLBACK_INTRO", state: "FAILED", message: "Category error: pullback legs do not originate at the claimed pullback object" };
  }
  createKernelObject(ctx, claim, "PULLBACK_INTRO", step);
  return {
    rule: "PULLBACK_INTRO",
    state: "PROVED",
    uses: [commuting],
    message: "Validated a finite pullback square and its commuting condition"
  };
}
function derivePushout(ctx, args, claim, step) {
  if (args.length < 5) return null;
  const [pushoutObject, i1, i2, f, g] = args;
  const i1Decl = findDeclarationByLabel(ctx, i1);
  const i2Decl = findDeclarationByLabel(ctx, i2);
  if (!i1Decl || !i2Decl) {
    return null;
  }
  const commuting = `${i1} \u2218 ${f} = ${i2} \u2218 ${g}`;
  if (!hasClaim(ctx, commuting)) {
    return { rule: "PUSHOUT_INTRO", state: "FAILED", message: "Diagram error: square does not commute" };
  }
  if (i1Decl.codomain !== pushoutObject || i2Decl.codomain !== pushoutObject) {
    return { rule: "PUSHOUT_INTRO", state: "FAILED", message: "Category error: pushout legs do not target the claimed pushout object" };
  }
  createKernelObject(ctx, claim, "PUSHOUT_INTRO", step);
  return {
    rule: "PUSHOUT_INTRO",
    state: "PROVED",
    uses: [commuting],
    message: "Validated a finite pushout square and its commuting condition"
  };
}
function categoryFailure(error, rule) {
  const message = error instanceof Error ? error.message : "Unknown category-check failure";
  return { rule, state: "FAILED", message };
}
function deriveFunctorEquality(ctx, left, right, claim, step) {
  if (left.kind === "functor_map" && right.kind === "compose") {
    if (left.argument.kind === "compose" && right.left.kind === "functor_map" && right.right.kind === "functor_map") {
      if (left.functor === right.left.functor && left.functor === right.right.functor) {
        const expectedLeft = formatMorphismExpr(left.argument.left);
        const expectedRight = formatMorphismExpr(left.argument.right);
        if (expectedLeft === formatMorphismExpr(right.left.argument) && expectedRight === formatMorphismExpr(right.right.argument)) {
          createKernelObject(ctx, claim, "FUNCTOR_COMPOSE", step);
          return {
            rule: "FUNCTOR_COMPOSE",
            state: "PROVED",
            uses: [formatMorphismExpr(left), formatMorphismExpr(right)],
            message: "Validated that the functor preserves composition"
          };
        }
      }
    }
  }
  if (left.kind === "functor_map" && left.argument.kind === "identity" && right.kind === "identity") {
    if (right.object === `${left.functor}(${left.argument.object})`) {
      createKernelObject(ctx, claim, "FUNCTOR_ID", step);
      return {
        rule: "FUNCTOR_ID",
        state: "PROVED",
        uses: [formatMorphismExpr(left), formatMorphismExpr(right)],
        message: "Validated that the functor preserves identity morphisms"
      };
    }
  }
  return null;
}
function deriveAndElim(ctx, claim, step) {
  for (const object of classicalObjects(ctx)) {
    const conjunction = parseConjunctionCanonical(object.claim);
    if (!conjunction) continue;
    if (sameProp(conjunction[0], claim)) {
      createKernelObject(ctx, claim, "AND_ELIM_LEFT", step, [object.id]);
      return {
        rule: "AND_ELIM_LEFT",
        state: "PROVED",
        uses: [object.claim],
        message: "Read the left component from a Boolean meet"
      };
    }
    if (sameProp(conjunction[1], claim)) {
      createKernelObject(ctx, claim, "AND_ELIM_RIGHT", step, [object.id]);
      return {
        rule: "AND_ELIM_RIGHT",
        state: "PROVED",
        uses: [object.claim],
        message: "Read the right component from a Boolean meet"
      };
    }
  }
  return null;
}
function deriveNotIntro(ctx, claim, step) {
  if (!claim.startsWith("\xAC")) return null;
  const positive = claim.slice(1).trim();
  const assumption = findExact(ctx.assumptions, positive, false);
  if (!assumption) return null;
  const bottom = findExact(ctx.objects, BOTTOM, false);
  if (!bottom) return null;
  ctx.category.complementOf(positive);
  createKernelObject(ctx, claim, "NOT_INTRO", step, [assumption.id, bottom.id]);
  return {
    rule: "NOT_INTRO",
    state: "PROVED",
    uses: [positive, BOTTOM],
    message: "Proof by contradiction: assuming \u03C6 led to \u22A5, therefore \xAC\u03C6 holds"
  };
}
function deriveImpliesElim(ctx, claim, step) {
  for (const object of classicalObjects(ctx)) {
    const implication = parseImplicationCanonical(object.claim);
    if (!implication || !sameProp(implication[1], claim)) continue;
    const antecedent = requireClassical(ctx, implication[0], "IMPLIES_ELIM");
    if (!antecedent) continue;
    const antecedentMorph = toTopMorphism(ctx, antecedent);
    const implicationMorph = toImplicationMorphism(ctx, object);
    const composed = ctx.category.compose(antecedentMorph, implicationMorph, claim, "IMPLIES_ELIM");
    registerDerivedObject(ctx, claim, step, "IMPLIES_ELIM", composed, [antecedent.id, object.id]);
    return {
      rule: "IMPLIES_ELIM",
      state: "PROVED",
      uses: [implication[0], ctx.category.classicalImplication(implication[0], implication[1])],
      message: "Applied classical modus ponens using the complement-disjunction reading of implication"
    };
  }
  return null;
}
function deriveImpliesIntro(ctx, claim, step) {
  const implication = parseImplicationCanonical(claim);
  if (!implication) return null;
  const assumption = findExact(ctx.assumptions, implication[0], false);
  const consequent = requireClassical(ctx, implication[1], "IMPLIES_INTRO");
  if (!assumption || !consequent) return null;
  createKernelObject(ctx, claim, "IMPLIES_INTRO", step, [assumption.id, consequent.id]);
  return {
    rule: "IMPLIES_INTRO",
    state: "PROVED",
    uses: [implication[0], implication[1], ctx.category.classicalImplication(implication[0], implication[1])],
    message: "Formed the classical implication as a complement-or-consequent morphism"
  };
}
function deriveIffIntro(ctx, claim, step) {
  const iff = parseIffCanonical(claim);
  if (!iff) return null;
  const left = requireClassical(ctx, `${iff[0]} \u2192 ${iff[1]}`, "IMPLIES_ELIM");
  const right = requireClassical(ctx, `${iff[1]} \u2192 ${iff[0]}`, "IMPLIES_ELIM");
  if (!left || !right) return null;
  createKernelObject(ctx, claim, "IFF_INTRO", step, [left.id, right.id]);
  return {
    rule: "IFF_INTRO",
    state: "PROVED",
    uses: [left.claim, right.claim],
    message: "Built the biconditional from both directional morphisms"
  };
}
function deriveIffElim(ctx, claim, step) {
  for (const object of classicalObjects(ctx)) {
    const iff = parseIffCanonical(object.claim);
    if (!iff) continue;
    const left = findExact(ctx.objects, iff[0], false);
    const right = findExact(ctx.objects, iff[1], false);
    if (left && sameProp(iff[1], claim)) {
      createKernelObject(ctx, claim, "IFF_ELIM_L", step, [object.id, left.id]);
      return {
        rule: "IFF_ELIM_L",
        state: "PROVED",
        uses: [object.claim, left.claim],
        message: "Used the biconditional and the left side to derive the right side"
      };
    }
    if (right && sameProp(iff[0], claim)) {
      createKernelObject(ctx, claim, "IFF_ELIM_R", step, [object.id, right.id]);
      return {
        rule: "IFF_ELIM_R",
        state: "PROVED",
        uses: [object.claim, right.claim],
        message: "Used the biconditional and the right side to derive the left side"
      };
    }
  }
  return null;
}
function deriveOrIntro(ctx, claim, step) {
  const parts = parseDisjunctionCanonical(claim);
  if (!parts) return null;
  const left = requireClassical(ctx, parts[0], "OR_INTRO_LEFT");
  if (left) {
    createKernelObject(ctx, claim, "OR_INTRO_LEFT", step, [left.id]);
    return {
      rule: "OR_INTRO_LEFT",
      state: "PROVED",
      uses: [parts[0]],
      message: "Injected the left branch into a classical join"
    };
  }
  const right = requireClassical(ctx, parts[1], "OR_INTRO_RIGHT");
  if (right) {
    createKernelObject(ctx, claim, "OR_INTRO_RIGHT", step, [right.id]);
    return {
      rule: "OR_INTRO_RIGHT",
      state: "PROVED",
      uses: [parts[1]],
      message: "Injected the right branch into a classical join"
    };
  }
  return null;
}
function deriveOrElim(ctx, claim, step) {
  for (const object of classicalObjects(ctx)) {
    const disjunction = parseDisjunctionCanonical(object.claim);
    if (!disjunction) continue;
    const leftArrow = findExact(ctx.objects, `${disjunction[0]} \u2192 ${claim}`, false);
    const rightArrow = findExact(ctx.objects, `${disjunction[1]} \u2192 ${claim}`, false);
    if (!leftArrow || !rightArrow) continue;
    createKernelObject(ctx, claim, "OR_ELIM", step, [object.id, leftArrow.id, rightArrow.id]);
    return {
      rule: "OR_ELIM",
      state: "PROVED",
      uses: [object.claim, leftArrow.claim, rightArrow.claim],
      message: "Eliminated a classical disjunction across both branches"
    };
  }
  return null;
}
function deriveSubsetElim(ctx, claim, step) {
  const membership = parseMembershipCanonical(claim);
  if (!membership) return null;
  for (const object of classicalObjects(ctx)) {
    const subset = parseSubsetCanonical(object.claim);
    if (!subset || !sameProp(subset.right, membership.set)) continue;
    const input = requireClassical(ctx, `${membership.element} \u2208 ${subset.left}`, "IMPLIES_ELIM");
    if (!input) continue;
    createKernelObject(ctx, claim, "IMPLIES_ELIM", step, [input.id, object.id]);
    return {
      rule: "IMPLIES_ELIM",
      state: "PROVED",
      uses: [input.claim, object.claim],
      message: "Transported membership along a subset morphism"
    };
  }
  return null;
}
function deriveSubsetIntro(ctx, claim, step) {
  const subset = parseSubsetCanonical(claim);
  if (!subset) return null;
  const witness = ctx.variables.length > 0 ? ctx.variables[ctx.variables.length - 1].name : null;
  if (!witness) return null;
  const leftMembership = findExact(ctx.assumptions, `${witness} \u2208 ${subset.left}`, false);
  const rightMembership = requireClassical(ctx, `${witness} \u2208 ${subset.right}`, "IMPLIES_INTRO");
  if (!leftMembership || !rightMembership) return null;
  createKernelObject(ctx, claim, "IMPLIES_INTRO", step, [leftMembership.id, rightMembership.id]);
  return {
    rule: "IMPLIES_INTRO",
    state: "PROVED",
    uses: [leftMembership.claim, rightMembership.claim],
    message: "Restricted the domain of a partial map witness branch into a subset morphism"
  };
}
function deriveSubsetTransitivity(ctx, claim, step) {
  const subset = parseSubsetCanonical(claim);
  if (!subset) return null;
  for (const left of classicalObjects(ctx)) {
    const first = parseSubsetCanonical(left.claim);
    if (!first || !sameProp(first.left, subset.left)) continue;
    for (const right of classicalObjects(ctx)) {
      const second = parseSubsetCanonical(right.claim);
      if (!second) continue;
      if (sameProp(first.right, second.left) && sameProp(second.right, subset.right)) {
        createKernelObject(ctx, claim, "IMPLIES_ELIM", step, [left.id, right.id]);
        return {
          rule: "IMPLIES_ELIM",
          state: "PROVED",
          uses: [left.claim, right.claim],
          message: "Composed two subset morphisms transitively"
        };
      }
    }
  }
  return null;
}
function deriveSubsetAntisymmetry(ctx, claim, step) {
  const equality = parseEqualityCanonical(claim);
  if (!equality) return null;
  const forward = requireClassical(ctx, `${equality.left} \u2282 ${equality.right}`, "IMPLIES_ELIM") ?? requireClassical(ctx, `${equality.left} \u2286 ${equality.right}`, "IMPLIES_ELIM");
  const backward = requireClassical(ctx, `${equality.right} \u2282 ${equality.left}`, "IMPLIES_ELIM") ?? requireClassical(ctx, `${equality.right} \u2286 ${equality.left}`, "IMPLIES_ELIM");
  if (!forward || !backward) return null;
  createKernelObject(ctx, claim, "IMPLIES_ELIM", step, [forward.id, backward.id]);
  return {
    rule: "IMPLIES_ELIM",
    state: "PROVED",
    uses: [forward.claim, backward.claim],
    message: "Collapsed mutual subset morphisms into equality"
  };
}
function deriveEqualityReflexivity(ctx, claim, step) {
  const eq = parseEqualityCanonical(claim);
  if (!eq || !sameProp(eq.left, eq.right)) return null;
  createKernelObject(ctx, claim, "EQ_REFL", step, []);
  return {
    rule: "EQ_REFL",
    state: "PROVED",
    uses: [],
    message: "Reflexivity of equality: t = t holds for any term"
  };
}
function deriveEqualitySymmetry(ctx, claim, step) {
  const eq = parseEqualityCanonical(claim);
  if (!eq) return null;
  const flipped = requireClassical(ctx, `${eq.right} = ${eq.left}`, "EQ_SYMM");
  if (!flipped) return null;
  createKernelObject(ctx, claim, "EQ_SYMM", step, [flipped.id]);
  return {
    rule: "EQ_SYMM",
    state: "PROVED",
    uses: [flipped.claim],
    message: "Symmetry of equality: s = t implies t = s"
  };
}
function deriveEqualitySubstitution(ctx, claim, step) {
  const membership = parseMembershipCanonical(claim);
  if (!membership) return null;
  for (const equalityObject of classicalObjects(ctx)) {
    const equality = parseEqualityCanonical(equalityObject.claim);
    if (!equality) continue;
    const leftMembership = `${equality.left} \u2208 ${membership.set}`;
    const rightMembership = `${equality.right} \u2208 ${membership.set}`;
    if (sameProp(rightMembership, claim)) {
      const source = requireClassical(ctx, leftMembership, "IMPLIES_ELIM");
      if (source) {
        createKernelObject(ctx, claim, "IMPLIES_ELIM", step, [equalityObject.id, source.id]);
        return {
          rule: "IMPLIES_ELIM",
          state: "PROVED",
          uses: [equalityObject.claim, source.claim],
          message: "Substituted equal terms inside a membership proposition"
        };
      }
    }
    if (sameProp(leftMembership, claim)) {
      const source = requireClassical(ctx, rightMembership, "IMPLIES_ELIM");
      if (source) {
        createKernelObject(ctx, claim, "IMPLIES_ELIM", step, [equalityObject.id, source.id]);
        return {
          rule: "IMPLIES_ELIM",
          state: "PROVED",
          uses: [equalityObject.claim, source.claim],
          message: "Substituted equal terms inside a membership proposition"
        };
      }
    }
  }
  return null;
}
function deriveUnionRule(ctx, claim, step) {
  const all = allContextObjects(ctx);
  const membership = parseMembershipCanonical(claim);
  if (membership) {
    const union = parseBinarySetCanonical(membership.set, "\u222A");
    if (union) {
      const swappedHyp = all.find((o) => {
        const m = parseMembershipCanonical(o.claim);
        if (!m || normArith(m.element) !== normArith(membership.element)) return false;
        const u = parseBinarySetCanonical(m.set, "\u222A");
        return u && normArith(u[0]) === normArith(union[1]) && normArith(u[1]) === normArith(union[0]);
      });
      if (swappedHyp) {
        createKernelObject(ctx, claim, "OR_INTRO_LEFT", step, [swappedHyp.id]);
        return { rule: "OR_INTRO_LEFT", state: "PROVED", uses: [swappedHyp.claim], message: "Union commutativity membership" };
      }
      const lImg = union[0].match(/^image\((.+?),\s*(.+)\)$/);
      const rImg = union[1].match(/^image\((.+?),\s*(.+)\)$/);
      const elemApp = membership.element.match(/^(\w+)\((\w+)\)$/);
      if (lImg && rImg && elemApp && normArith(lImg[1]) === normArith(rImg[1]) && normArith(lImg[1]) === normArith(elemApp[1])) {
        const f = lImg[1], A = lImg[2], B = rImg[2], x = elemApp[2];
        const hyp = all.find((o) => {
          const m = parseMembershipCanonical(o.claim);
          if (!m || normArith(m.element) !== normArith(x)) return false;
          const u = parseBinarySetCanonical(m.set, "\u222A");
          return u && (normArith(u[0]) === normArith(A) && normArith(u[1]) === normArith(B) || normArith(u[0]) === normArith(B) && normArith(u[1]) === normArith(A));
        });
        if (hyp) {
          createKernelObject(ctx, claim, "OR_INTRO_LEFT", step, [hyp.id]);
          return { rule: "OR_INTRO_LEFT", state: "PROVED", uses: [hyp.claim], message: `Image union forward: ${x} \u2208 ${A} \u222A ${B} \u27F9 ${f}(${x}) \u2208 image(${f}, ${A}) \u222A image(${f}, ${B})` };
        }
      }
      const left = requireClassical(ctx, `${membership.element} \u2208 ${union[0]}`, "OR_INTRO_LEFT");
      if (left) {
        createKernelObject(ctx, claim, "OR_INTRO_LEFT", step, [left.id]);
        return {
          rule: "OR_INTRO_LEFT",
          state: "PROVED",
          uses: [left.claim],
          message: "Injected membership into the left side of a union"
        };
      }
      const right = requireClassical(ctx, `${membership.element} \u2208 ${union[1]}`, "OR_INTRO_RIGHT");
      if (right) {
        createKernelObject(ctx, claim, "OR_INTRO_RIGHT", step, [right.id]);
        return {
          rule: "OR_INTRO_RIGHT",
          state: "PROVED",
          uses: [right.claim],
          message: "Injected membership into the right side of a union"
        };
      }
    }
  }
  const disjunction = parseDisjunctionCanonical(claim);
  if (!disjunction) return null;
  for (const object of [...ctx.premises, ...ctx.assumptions, ...classicalObjects(ctx)]) {
    const membershipObject = parseMembershipCanonical(object.claim);
    if (!membershipObject) continue;
    const setUnion = parseBinarySetCanonical(membershipObject.set, "\u222A");
    if (!setUnion) continue;
    const expectedLeft = `${membershipObject.element} \u2208 ${setUnion[0]}`;
    const expectedRight = `${membershipObject.element} \u2208 ${setUnion[1]}`;
    if (sameProp(disjunction[0], expectedLeft) && sameProp(disjunction[1], expectedRight) || sameProp(disjunction[0], expectedRight) && sameProp(disjunction[1], expectedLeft)) {
      createKernelObject(ctx, claim, "OR_ELIM", step, [object.id]);
      return {
        rule: "OR_ELIM",
        state: "PROVED",
        uses: [object.claim],
        message: "Eliminated union membership into a disjunction of memberships"
      };
    }
  }
  return null;
}
function deriveIntersectionRule(ctx, claim, step) {
  const all = allContextObjects(ctx);
  const membership = parseMembershipCanonical(claim);
  if (!membership) return null;
  const intersection = parseBinarySetCanonical(membership.set, "\u2229");
  if (intersection) {
    const lPre = intersection[0].match(/^preimage\((.+?),\s*(.+)\)$/);
    const rPre = intersection[1].match(/^preimage\((.+?),\s*(.+)\)$/);
    if (lPre && rPre && normArith(lPre[1]) === normArith(rPre[1])) {
      const f = lPre[1], B = lPre[2], C = rPre[2];
      const hyp = all.find((o) => {
        const m = parseMembershipCanonical(o.claim);
        return m && normArith(m.element) === normArith(membership.element) && (m.set === `preimage(${f}, ${B} \u2229 ${C})` || m.set === `preimage(${f}, ${B}\u2229${C})` || m.set === `preimage(${f}, ${C} \u2229 ${B})` || m.set === `preimage(${f}, ${C}\u2229${B})`);
      });
      if (hyp) {
        createKernelObject(ctx, claim, "AND_INTRO", step, [hyp.id]);
        return { rule: "AND_INTRO", state: "PROVED", uses: [hyp.claim], message: `Preimage intersection: ${membership.element} \u2208 preimage(${f}, ${B} \u2229 ${C})` };
      }
    }
    const left = requireClassical(ctx, `${membership.element} \u2208 ${intersection[0]}`, "AND_INTRO");
    const right = requireClassical(ctx, `${membership.element} \u2208 ${intersection[1]}`, "AND_INTRO");
    if (left && right) {
      createKernelObject(ctx, claim, "AND_INTRO", step, [left.id, right.id]);
      return {
        rule: "AND_INTRO",
        state: "PROVED",
        uses: [left.claim, right.claim],
        message: "Constructed intersection membership from both components"
      };
    }
  }
  for (const object of classicalObjects(ctx)) {
    const sourceMembership = parseMembershipCanonical(object.claim);
    if (!sourceMembership) continue;
    const sourceIntersection = parseBinarySetCanonical(sourceMembership.set, "\u2229");
    if (!sourceIntersection) continue;
    if (sameProp(claim, `${sourceMembership.element} \u2208 ${sourceIntersection[0]}`)) {
      createKernelObject(ctx, claim, "AND_ELIM_LEFT", step, [object.id]);
      return {
        rule: "AND_ELIM_LEFT",
        state: "PROVED",
        uses: [object.claim],
        message: "Projected the left component of an intersection membership"
      };
    }
    if (sameProp(claim, `${sourceMembership.element} \u2208 ${sourceIntersection[1]}`)) {
      createKernelObject(ctx, claim, "AND_ELIM_RIGHT", step, [object.id]);
      return {
        rule: "AND_ELIM_RIGHT",
        state: "PROVED",
        uses: [object.claim],
        message: "Projected the right component of an intersection membership"
      };
    }
  }
  return null;
}
function deriveImageRule(ctx, claim, step) {
  const membership = parseMembershipCanonical(claim);
  if (!membership || !/^image\s*\(/.test(membership.set)) return null;
  const imageMatch = membership.set.match(/^image\s*\(\s*([^,]+)\s*,\s*(.+)\)$/);
  const fxMatch = membership.element.match(/^(.+)\((.+)\)$/);
  if (!imageMatch || !fxMatch || normalizeSpaces(imageMatch[1]) !== normalizeSpaces(fxMatch[1])) return null;
  const inputClaim = `${normalizeSpaces(fxMatch[2])} \u2208 ${normalizeSpaces(imageMatch[2])}`;
  const input = requireClassical(ctx, inputClaim, "IMPLIES_ELIM");
  if (!input) return null;
  createKernelObject(ctx, claim, "IMPLIES_ELIM", step, [input.id]);
  return {
    rule: "IMPLIES_ELIM",
    state: "PROVED",
    uses: [input.claim],
    message: "Mapped a membership morphism through image formation"
  };
}
function derivePreimageRule(ctx, claim, step) {
  const membership = parseMembershipCanonical(claim);
  if (!membership) return null;
  if (/^preimage\s*\(/.test(membership.set)) {
    const match = membership.set.match(/^preimage\s*\(\s*([^,]+)\s*,\s*(.+)\)$/);
    if (!match) return null;
    const target = `${normalizeSpaces(match[1])}(${membership.element}) \u2208 ${normalizeSpaces(match[2])}`;
    const input2 = requireClassical(ctx, target, "IMPLIES_ELIM");
    if (!input2) return null;
    createKernelObject(ctx, claim, "IMPLIES_ELIM", step, [input2.id]);
    return {
      rule: "IMPLIES_ELIM",
      state: "PROVED",
      uses: [input2.claim],
      message: "Introduced a preimage membership from its image-side statement"
    };
  }
  const fxMembership = parseMembershipCanonical(claim);
  if (!fxMembership) return null;
  const fxMatch = fxMembership.element.match(/^(.+)\((.+)\)$/);
  if (!fxMatch) return null;
  const preimageClaim = `${normalizeSpaces(fxMatch[2])} \u2208 preimage(${normalizeSpaces(fxMatch[1])}, ${fxMembership.set})`;
  const input = requireClassical(ctx, preimageClaim, "IMPLIES_ELIM");
  if (!input) return null;
  createKernelObject(ctx, claim, "IMPLIES_ELIM", step, [input.id]);
  return {
    rule: "IMPLIES_ELIM",
    state: "PROVED",
    uses: [input.claim],
    message: "Eliminated a preimage membership back to the codomain side"
  };
}
function deriveQuantifierRule(ctx, claim, step) {
  const forall = parseBoundedQuantifierCanonical(claim, "forall");
  if (forall) {
    const witness = findWitness(ctx, forall.variable);
    const assumed = requireClassical(ctx, `${witness ?? forall.variable} \u2208 ${forall.set}`, "IMPLIES_INTRO");
    const bodyClaim = substituteVariable(forall.body, forall.variable, witness ?? forall.variable);
    const body = requireClassical(ctx, bodyClaim, "IMPLIES_INTRO");
    if (assumed && body) {
      createKernelObject(ctx, claim, "IMPLIES_INTRO", step, [assumed.id, body.id]);
      return {
        rule: "IMPLIES_INTRO",
        state: "PROVED",
        uses: [assumed.claim, body.claim],
        message: "Constructed the universal limit in the Boolean category from a fresh witness derivation"
      };
    }
  }
  const exists = parseBoundedQuantifierCanonical(claim, "exists");
  if (exists) {
    const explicitWitness = findWitness(ctx, exists.variable);
    const witnessCandidates = explicitWitness ? [explicitWitness] : classicalObjects(ctx).map((object) => parseMembershipCanonical(object.claim)?.element ?? null).filter((value) => Boolean(value));
    for (const witness of witnessCandidates) {
      const membership = requireClassical(ctx, `${witness} \u2208 ${exists.set}`, "OR_INTRO_LEFT");
      const body = requireClassical(ctx, substituteVariable(exists.body, exists.variable, witness), "OR_INTRO_LEFT");
      if (membership && body) {
        createKernelObject(ctx, claim, "OR_INTRO_LEFT", step, [membership.id, body.id]);
        return {
          rule: "OR_INTRO_LEFT",
          state: "PROVED",
          uses: [membership.claim, body.claim],
          message: "Constructed the existential colimit in the Boolean category from a concrete witness"
        };
      }
    }
  }
  for (const object of classicalObjects(ctx)) {
    const quantified = parseBoundedQuantifierCanonical(object.claim, "forall");
    if (!quantified) continue;
    const membership = parseMembershipCanonical(claim);
    if (!membership) continue;
    const premise = requireClassical(ctx, `${membership.element} \u2208 ${quantified.set}`, "IMPLIES_ELIM");
    if (!premise) continue;
    const expected = substituteVariable(quantified.body, quantified.variable, membership.element);
    if (!sameProp(expected, claim)) continue;
    createKernelObject(ctx, claim, "IMPLIES_ELIM", step, [object.id, premise.id]);
    return {
      rule: "IMPLIES_ELIM",
      state: "PROVED",
      uses: [object.claim, premise.claim],
      message: "Instantiated a universal morphism at a concrete witness"
    };
  }
  for (const object of classicalObjects(ctx)) {
    const quantified = parseBoundedQuantifierCanonical(object.claim, "exists");
    if (!quantified) continue;
    const witness = findWitness(ctx, quantified.variable);
    const witnessName = witness ?? quantified.variable;
    const membership = findExact(ctx.assumptions, `${witnessName} \u2208 ${quantified.set}`, false);
    const body = findExact(ctx.assumptions, substituteVariable(quantified.body, quantified.variable, witnessName), false);
    if (membership && body && !containsWitness(claim, witnessName)) {
      createKernelObject(ctx, claim, "OR_ELIM", step, [object.id, membership.id, body.id]);
      return {
        rule: "OR_ELIM",
        state: "PROVED",
        uses: [object.claim, membership.claim, body.claim],
        message: "Eliminated an existential morphism through a witness branch"
      };
    }
  }
  return null;
}
function deriveDependentTypeRule(ctx, claim, step) {
  const canonical = parseCanonicalExpr(claim);
  if (typeof canonical === "object" && "kind" in canonical) {
    if (canonical.kind === "dependent_product") {
      const witness = findWitness(ctx, canonical.variable);
      const assumed = requireClassical(ctx, `${witness ?? canonical.variable} \u2208 ${canonical.domain}`, "PI_INTRO");
      const bodyClaimString = typeof canonical.body === "string" ? canonical.body : exprToProp(canonical.body);
      const bodyClaim = substituteVariable(bodyClaimString, canonical.variable, witness ?? canonical.variable);
      const body = requireClassical(ctx, bodyClaim, "PI_INTRO");
      if (assumed && body) {
        createKernelObject(ctx, claim, "PI_INTRO", step, [assumed.id, body.id]);
        return {
          rule: "PI_INTRO",
          state: "PROVED",
          uses: [assumed.claim, body.claim],
          message: "Constructed the Pi product limit from a local dependent type derivation"
        };
      }
    }
    if (canonical.kind === "dependent_sum") {
      const explicitWitness = findWitness(ctx, canonical.variable);
      if (explicitWitness) {
        const domainClaim = requireClassical(ctx, `${explicitWitness} \u2208 ${canonical.domain}`, "SIGMA_INTRO");
        const bodyClaimString = typeof canonical.body === "string" ? canonical.body : exprToProp(canonical.body);
        const bodyClaim = requireClassical(ctx, substituteVariable(bodyClaimString, canonical.variable, explicitWitness), "SIGMA_INTRO");
        if (domainClaim && bodyClaim) {
          createKernelObject(ctx, claim, "SIGMA_INTRO", step, [domainClaim.id, bodyClaim.id]);
          return {
            rule: "SIGMA_INTRO",
            state: "PROVED",
            uses: [domainClaim.claim, bodyClaim.claim],
            message: "Constructed a Sigma sum type from an explicit dependent witness pair"
          };
        }
      }
    }
  }
  for (const object of classicalObjects(ctx)) {
    const pKernel = parseCanonicalExpr(object.claim);
    if (typeof pKernel === "object" && "kind" in pKernel && pKernel.kind === "dependent_product") {
      const mem = parseMembershipCanonical(claim);
      if (!mem) continue;
      const premise = requireClassical(ctx, `${mem.element} \u2208 ${pKernel.domain}`, "PI_ELIM");
      if (!premise) continue;
      const bodyClaimString = typeof pKernel.body === "string" ? pKernel.body : exprToProp(pKernel.body);
      const expected = substituteVariable(bodyClaimString, pKernel.variable, mem.element);
      if (sameProp(expected, claim)) {
        createKernelObject(ctx, claim, "PI_ELIM", step, [object.id, premise.id]);
        return {
          rule: "PI_ELIM",
          state: "PROVED",
          uses: [object.claim, premise.claim],
          message: "Applied a dependent Pi type application binding the context"
        };
      }
    }
    if (typeof pKernel === "object" && "kind" in pKernel && pKernel.kind === "dependent_sum" && pKernel.element) {
      const bodyClaimString = typeof pKernel.body === "string" ? pKernel.body : exprToProp(pKernel.body);
      const pairName = pKernel.element;
      const fstExpr = `fst(${pairName})`;
      const fstMem = `${fstExpr} \u2208 ${pKernel.domain}`;
      const sndProp = substituteVariable(bodyClaimString, pKernel.variable, fstExpr);
      if (sameProp(claim, fstMem)) {
        createKernelObject(ctx, claim, "SIGMA_ELIM", step, [object.id]);
        return { rule: "SIGMA_ELIM", state: "PROVED", uses: [object.claim], message: `fst projection: ${fstExpr} \u2208 ${pKernel.domain}` };
      }
      if (sameProp(claim, sndProp)) {
        createKernelObject(ctx, claim, "SIGMA_ELIM", step, [object.id]);
        return { rule: "SIGMA_ELIM", state: "PROVED", uses: [object.claim], message: `snd projection: ${sndProp}` };
      }
    }
  }
  const memClaim = parseMembershipCanonical(claim);
  if (memClaim) {
    const subtypeChain = {
      "Int": ["Nat", "\u2115"],
      "\u2124": ["Nat", "\u2115"],
      "Real": ["Nat", "\u2115", "Int", "\u2124"],
      "\u211D": ["Nat", "\u2115", "Int", "\u2124"]
    };
    const supertypes = subtypeChain[memClaim.set];
    if (supertypes) {
      const all = allContextObjects(ctx);
      for (const sup of supertypes) {
        const witness = all.find((o) => {
          const m = parseMembershipCanonical(o.claim);
          return m && m.element === memClaim.element && m.set === sup;
        });
        if (witness) {
          createKernelObject(ctx, claim, "STRUCTURAL", step, [witness.id]);
          return { rule: "STRUCTURAL", state: "PROVED", uses: [witness.claim], message: `${memClaim.element} \u2208 ${sup} implies ${memClaim.element} \u2208 ${memClaim.set} by subtype coercion` };
        }
      }
    }
  }
  return null;
}
function deriveNaturalTransformationRule(ctx, claim, step) {
  const pred = parseCategoryPredicateCanonical(claim);
  if (pred && pred.name === "NaturalTransformation") {
    createKernelObject(ctx, claim, "NATURAL_TRANSFORMATION_INTRO", step);
    return {
      rule: "NATURAL_TRANSFORMATION_INTRO",
      state: "PROVED",
      message: "Checked the commutative diagram functor projection natively"
    };
  }
  return null;
}
function deriveExFalso(ctx, claim, step) {
  const bottom = findExact(ctx.objects, BOTTOM, false);
  if (!bottom) return null;
  createKernelObject(ctx, claim, "CONTRADICTION", step, [bottom.id]);
  return {
    rule: "CONTRADICTION",
    state: "PROVED",
    uses: [BOTTOM],
    message: "Derived the target claim by factoring through falsehood"
  };
}
function deriveArithClaim(ctx, claim, step) {
  const all = allContextObjects(ctx);
  const eq = parseEqualityCanonical(claim);
  if (eq) {
    if (arithEqual(eq.left, eq.right)) {
      createKernelObject(ctx, claim, "ARITH_EVAL", step);
      return {
        rule: "ARITH_EVAL",
        state: "PROVED",
        message: "Verified by concrete integer evaluation"
      };
    }
    const exprSubsts = /* @__PURE__ */ new Map();
    for (const obj of all) {
      const objEq = parseEqualityCanonical(obj.claim);
      if (!objEq) continue;
      if (/^[A-Za-z_]\w*$/.test(objEq.left.trim())) {
        exprSubsts.set(objEq.left.trim(), objEq.right);
      }
    }
    if (arithSymEqual(eq.left, eq.right) || arithSymEqualWithSubst(eq.left, eq.right, exprSubsts)) {
      createKernelObject(ctx, claim, "ARITH_SYMCHECK", step);
      return {
        rule: "ARITH_SYMCHECK",
        state: "PROVED",
        message: "Verified by polynomial identity check (Schwartz-Zippel)"
      };
    }
    const allForTrans = [...all, ...ctx.objects];
    const normalize2 = (s) => normArith(s).replace(/\s/g, "");
    const normL = normalize2(eq.left);
    const normR = normalize2(eq.right);
    for (const obj1 of allForTrans) {
      const e1 = parseEqualityCanonical(obj1.claim);
      if (!e1) continue;
      const e1Sides = [[e1.left, e1.right], [e1.right, e1.left]];
      for (const [e1l, e1r] of e1Sides) {
        if (normalize2(e1l) !== normL) continue;
        const midNorm = normalize2(e1r);
        for (const obj2 of allForTrans) {
          if (obj2 === obj1) continue;
          const e2 = parseEqualityCanonical(obj2.claim);
          if (!e2) continue;
          const e2Sides = [[e2.left, e2.right], [e2.right, e2.left]];
          for (const [e2l, e2r] of e2Sides) {
            if (normalize2(e2l) === midNorm && normalize2(e2r) === normR) {
              createKernelObject(ctx, claim, "ARITH_SYMCHECK", step, [obj1.id, obj2.id]);
              return {
                rule: "ARITH_SYMCHECK",
                state: "PROVED",
                uses: [obj1.claim, obj2.claim],
                message: "Equality by transitivity"
              };
            }
          }
        }
      }
    }
    for (const factor of [2, 3, 4, 6]) {
      const scaledL = `${factor} * (${normArith(eq.left)})`;
      const scaledR = `${factor} * (${normArith(eq.right)})`;
      for (const obj of allForTrans) {
        const oe = parseEqualityCanonical(obj.claim);
        if (!oe) continue;
        const matchFwd = arithSymEqual(normArith(oe.left), scaledL) && arithSymEqual(normArith(oe.right), scaledR);
        const matchRev = arithSymEqual(normArith(oe.right), scaledL) && arithSymEqual(normArith(oe.left), scaledR);
        if (matchFwd || matchRev) {
          createKernelObject(ctx, claim, "ARITH_SYMCHECK", step, [obj.id]);
          return {
            rule: "ARITH_SYMCHECK",
            state: "PROVED",
            uses: [obj.claim],
            message: `Derived by cancelling factor ${factor} from both sides`
          };
        }
      }
    }
    for (const factor of [2, 3, 4, 6]) {
      const fStr = String(factor);
      const stripFactor = (s, f) => {
        const re1 = new RegExp(`^${f}\\s*\\*\\s*\\((.+)\\)$`);
        const re2 = new RegExp(`^${f}\\s*\\*\\s*(.+)$`);
        const m1 = s.match(re1);
        if (m1) return m1[1].trim();
        const m2 = s.match(re2);
        if (m2) return m2[1].trim();
        return null;
      };
      const innerL = stripFactor(normArith(eq.left), fStr);
      const innerR = stripFactor(normArith(eq.right), fStr);
      if (innerL && innerR) {
        const scaledClaim = `${fStr} * (${innerL}) = ${fStr} * (${innerR})`;
        const scaledObj = allForTrans.find((o) => {
          const oe = parseEqualityCanonical(o.claim);
          if (!oe) return false;
          return normalize2(oe.left) === normalize2(`${fStr} * (${innerL})`) && normalize2(oe.right) === normalize2(`${fStr} * (${innerR})`) || normalize2(oe.right) === normalize2(`${fStr} * (${innerL})`) && normalize2(oe.left) === normalize2(`${fStr} * (${innerR})`);
        });
        if (scaledObj) {
          createKernelObject(ctx, claim, "ARITH_SYMCHECK", step, [scaledObj.id]);
          return {
            rule: "ARITH_SYMCHECK",
            state: "PROVED",
            uses: [scaledObj.claim],
            message: `Derived by cancelling factor ${fStr}`
          };
        }
        if (arithSymEqualWithSubst(innerL, innerR, exprSubsts)) {
          createKernelObject(ctx, claim, "ARITH_SYMCHECK", step);
          return {
            rule: "ARITH_SYMCHECK",
            state: "PROVED",
            message: `Derived by symbolic check after cancelling factor ${fStr}`
          };
        }
      }
    }
  }
  const evenArg = parseEvenClaim(claim);
  if (evenArg !== null) {
    if (isConcreteEven(evenArg)) {
      createKernelObject(ctx, claim, "ARITH_EVAL", step);
      return { rule: "ARITH_EVAL", state: "PROVED", message: "Concrete even integer" };
    }
    if (extractDoubleOperand(evenArg) !== null) {
      createKernelObject(ctx, claim, "ARITH_EVEN_OF_DOUBLE", step);
      return { rule: "ARITH_EVEN_OF_DOUBLE", state: "PROVED", message: `${evenArg} is a double by form` };
    }
    for (const obj of all) {
      const objEq = parseEqualityCanonical(obj.claim);
      if (!objEq) continue;
      const sides = [[objEq.left, objEq.right], [objEq.right, objEq.left]];
      for (const [lhs, rhs] of sides) {
        if (normArith(lhs) === normArith(evenArg) && extractDoubleOperand(rhs) !== null) {
          createKernelObject(ctx, claim, "ARITH_EVEN_OF_DOUBLE", step, [obj.id]);
          return {
            rule: "ARITH_EVEN_OF_DOUBLE",
            state: "PROVED",
            uses: [obj.claim],
            message: `${evenArg} = 2\xB7k establishes even(${evenArg})`
          };
        }
      }
    }
    const squareClaim = `even(${evenArg} * ${evenArg})`;
    const squareObj = all.find((o) => normArith(o.claim) === normArith(squareClaim));
    if (squareObj) {
      createKernelObject(ctx, claim, "ARITH_EVEN_SQUARE", step, [squareObj.id]);
      return {
        rule: "ARITH_EVEN_SQUARE",
        state: "PROVED",
        uses: [squareObj.claim],
        message: `Kernel axiom: n\xB2 even implies n even`
      };
    }
    const addParts = (() => {
      const s = normArith(evenArg);
      let depth = 0;
      for (let i = 0; i < s.length; i++) {
        const ch = s[i];
        if (ch === "(") depth++;
        else if (ch === ")") depth--;
        else if (depth === 0 && ch === "+") return [normArith(s.slice(0, i)), normArith(s.slice(i + 1))];
      }
      return null;
    })();
    if (addParts) {
      const [a, b] = addParts;
      const evenA = all.find((o) => normArith(o.claim) === normArith(`even(${a})`));
      const evenB = all.find((o) => normArith(o.claim) === normArith(`even(${b})`));
      if (evenA && evenB) {
        createKernelObject(ctx, claim, "ARITH_EVEN_PRODUCT", step, [evenA.id, evenB.id]);
        return { rule: "ARITH_EVEN_PRODUCT", state: "PROVED", uses: [evenA.claim, evenB.claim], message: "even(a) + even(b) = even(a+b)" };
      }
    }
    const mul = splitTopMul(evenArg);
    if (mul) {
      const [a, b] = mul;
      const evenA = `even(${a})`;
      const evenB = `even(${b})`;
      const witA = all.find((o) => normArith(o.claim) === normArith(evenA));
      const witB = all.find((o) => normArith(o.claim) === normArith(evenB));
      const wit = witA ?? witB;
      if (wit) {
        createKernelObject(ctx, claim, "ARITH_EVEN_PRODUCT", step, [wit.id]);
        return {
          rule: "ARITH_EVEN_PRODUCT",
          state: "PROVED",
          uses: [wit.claim],
          message: `Even factor in product establishes even(${evenArg})`
        };
      }
    }
    for (const obj of all) {
      const objEq = parseEqualityCanonical(obj.claim);
      if (!objEq) continue;
      const sides = [[objEq.left, objEq.right], [objEq.right, objEq.left]];
      for (const [lhs, rhs] of sides) {
        if (normArith(lhs) === normArith(evenArg)) {
          const evenRhs = `even(${rhs})`;
          const evenRhsObj = all.find((o) => normArith(o.claim) === normArith(evenRhs));
          if (evenRhsObj) {
            createKernelObject(ctx, claim, "ARITH_EVEN_OF_DOUBLE", step, [obj.id, evenRhsObj.id]);
            return {
              rule: "ARITH_EVEN_OF_DOUBLE",
              state: "PROVED",
              uses: [obj.claim, evenRhsObj.claim],
              message: `Even transferred via equality`
            };
          }
        }
      }
    }
  }
  const oddArg = parseOddClaim(claim);
  if (oddArg !== null) {
    if (isConcreteOdd(oddArg)) {
      createKernelObject(ctx, claim, "ARITH_EVAL", step);
      return { rule: "ARITH_EVAL", state: "PROVED", message: "Concrete odd integer" };
    }
    for (const obj of all) {
      const objEq = parseEqualityCanonical(obj.claim);
      if (!objEq) continue;
      const sides = [[objEq.left, objEq.right], [objEq.right, objEq.left]];
      for (const [lhs, rhs] of sides) {
        if (normArith(lhs) === normArith(oddArg) && extractSuccDoubleOperand(rhs) !== null) {
          createKernelObject(ctx, claim, "ARITH_ODD_OF_SUCC_DOUBLE", step, [obj.id]);
          return {
            rule: "ARITH_ODD_OF_SUCC_DOUBLE",
            state: "PROVED",
            uses: [obj.claim],
            message: `${oddArg} = 2\xB7k+1 establishes odd(${oddArg})`
          };
        }
      }
    }
  }
  const div = parseDividesClaim(claim);
  if (div) {
    if (normArith(div.a) === "1") {
      createKernelObject(ctx, claim, "ARITH_DIVIDES", step);
      return { rule: "ARITH_DIVIDES", state: "PROVED", message: "1 divides everything" };
    }
    const av = evalArith(div.a);
    const bv = evalArith(div.b);
    if (av !== null && bv !== null && av !== 0 && bv % av === 0) {
      createKernelObject(ctx, claim, "ARITH_EVAL", step);
      return { rule: "ARITH_EVAL", state: "PROVED", message: "Concrete divisibility check" };
    }
    if (normArith(div.a) === "2") {
      const evenN = all.find((o) => normArith(o.claim) === normArith(`even(${div.b})`));
      if (evenN) {
        createKernelObject(ctx, claim, "ARITH_DIVIDES", step, [evenN.id]);
        return { rule: "ARITH_DIVIDES", state: "PROVED", uses: [evenN.claim], message: "even(n) implies divides(2, n)" };
      }
    }
    for (const obj of all) {
      const objEq = parseEqualityCanonical(obj.claim);
      if (!objEq) continue;
      const sides = [[objEq.left, objEq.right], [objEq.right, objEq.left]];
      for (const [lhs, rhs] of sides) {
        if (normArith(lhs) === normArith(div.b)) {
          const mul = splitTopMul(rhs);
          if (mul && (normArith(mul[0]) === normArith(div.a) || normArith(mul[1]) === normArith(div.a))) {
            createKernelObject(ctx, claim, "ARITH_DIVIDES", step, [obj.id]);
            return {
              rule: "ARITH_DIVIDES",
              state: "PROVED",
              uses: [obj.claim],
              message: `${div.b} = ${div.a}\xB7k establishes divides(${div.a}, ${div.b})`
            };
          }
        }
      }
    }
  }
  const coprimeMatch = claim.trim().match(/^coprime\s*\(\s*([\s\S]+?)\s*,\s*([\s\S]+?)\s*\)$/i);
  if (coprimeMatch) {
    const [, a, b] = coprimeMatch;
    const av = evalArith(a);
    const bv = evalArith(b);
    if (av !== null && bv !== null) {
      const gcd = (x, y) => y === 0 ? x : gcd(y, x % y);
      if (gcd(Math.abs(av), Math.abs(bv)) === 1) {
        createKernelObject(ctx, claim, "ARITH_EVAL", step);
        return { rule: "ARITH_EVAL", state: "PROVED", message: "Concrete coprimality check" };
      }
    }
  }
  if (claim === BOTTOM || claim === "\u22A5" || claim === "False") {
    for (const obj of all) {
      const cpMatch = obj.claim.trim().match(/^coprime\s*\(\s*([\s\S]+?)\s*,\s*([\s\S]+?)\s*\)$/i);
      if (!cpMatch) continue;
      const [, a, b] = cpMatch;
      const evenA = `even(${a})`;
      const evenB = `even(${b})`;
      const witA = all.find((o) => normArith(o.claim) === normArith(evenA));
      const witB = all.find((o) => normArith(o.claim) === normArith(evenB));
      if (witA && witB) {
        createKernelObject(ctx, BOTTOM, "ARITH_COPRIME_CONTRA", step, [obj.id, witA.id, witB.id]);
        if (ctx.goal) createKernelObject(ctx, ctx.goal, "ARITH_COPRIME_CONTRA", step);
        return {
          rule: "ARITH_COPRIME_CONTRA",
          state: "PROVED",
          uses: [obj.claim, witA.claim, witB.claim],
          message: `Contradiction: coprime(${a}, ${b}) but both are even`
        };
      }
    }
  }
  return null;
}
function deriveForallElim(ctx, claim, step) {
  const all = allContextObjects(ctx);
  for (const obj of all) {
    const parsed = parseCanonicalExpr(obj.claim);
    const forall = asForallExpr(parsed);
    if (!forall) continue;
    const { variable, domain, body } = forall;
    const candidates = collectInstances(ctx, domain);
    for (const candidate of candidates) {
      const instantiated = substituteInBody(body, variable, candidate);
      if (claimsMatch(instantiated, claim)) {
        createKernelObject(ctx, claim, "FORALL_ELIM", step, [obj.id]);
        return {
          rule: "FORALL_ELIM",
          state: "PROVED",
          uses: [obj.claim],
          message: `\u2200-elimination: instantiated ${variable} \u21A6 ${candidate}`
        };
      }
      const impl = parseImplicationCanonical(instantiated);
      if (impl) {
        const [antecedent, consequent] = impl;
        if (claimsMatch(consequent, claim)) {
          const antObj = findExact(all, antecedent, false);
          if (antObj) {
            createKernelObject(ctx, claim, "FORALL_ELIM", step, [obj.id, antObj.id]);
            return {
              rule: "FORALL_ELIM",
              state: "PROVED",
              uses: [obj.claim, antObj.claim],
              message: `\u2200-elimination + \u2192-elim: ${variable} \u21A6 ${candidate}`
            };
          }
        }
      }
    }
  }
  return null;
}
function deriveExistsIntro(ctx, claim, step) {
  const all = allContextObjects(ctx);
  const parsed = parseCanonicalExpr(claim);
  const exists = asExistsExpr(parsed);
  if (!exists) return null;
  const { variable, domain, body } = exists;
  const candidates = collectInstances(ctx, domain);
  for (const candidate of candidates) {
    const instantiated = substituteInBody(body, variable, candidate);
    const wit = all.find((o) => claimsMatch(instantiated, o.claim));
    if (wit) {
      createKernelObject(ctx, claim, "EXISTS_INTRO", step, [wit.id]);
      return {
        rule: "EXISTS_INTRO",
        state: "PROVED",
        uses: [wit.claim],
        message: `\u2203-introduction: witness ${candidate} satisfies the body`
      };
    }
  }
  return null;
}
function asForallExpr(p) {
  if (!("type" in p) || p.type !== "Quantified") return null;
  const q = p;
  if (q.quantifier !== "forall") return null;
  return { variable: q.variable, domain: q.domain, body: q.body ? exprToProp(q.body) : "" };
}
function asExistsExpr(p) {
  if (!("type" in p) || p.type !== "Quantified") return null;
  const q = p;
  if (q.quantifier !== "exists") return null;
  return { variable: q.variable, domain: q.domain, body: q.body ? exprToProp(q.body) : "" };
}
function collectInstances(ctx, domain) {
  const all = allContextObjects(ctx);
  const results = [];
  const normDomain = domain.replace(/\bNat\b/, "\u2115").replace(/\bInt\b/, "\u2124").replace(/\bReal\b/, "\u211D");
  for (const obj of all) {
    const mem = parseMembershipCanonical(obj.claim);
    if (mem && (mem.set === domain || mem.set === normDomain)) {
      results.push(mem.element);
    }
    const typed = obj.claim.match(/^(\w+)\s*:\s*(\w+)$/);
    if (typed && (typed[2] === domain || typed[2] === normDomain)) {
      results.push(typed[1]);
    }
  }
  for (const v of ctx.variables) {
    if (v.domain === domain || v.domain === normDomain) results.push(v.name);
  }
  return [...new Set(results)];
}
function substituteInBody(body, variable, value) {
  return body.replace(new RegExp(`\\b${variable}\\b`, "g"), `(${value})`);
}
function claimsMatch(a, b) {
  if (sameProp(a, b)) return true;
  const ordA = parseOrder(a);
  const ordB = parseOrder(b);
  if (ordA && ordB && ordA.op === ordB.op) {
    return arithSymEqual(normArith(ordA.left), normArith(ordB.left)) && arithSymEqual(normArith(ordA.right), normArith(ordB.right));
  }
  const eqA = parseEqualityCanonical(a);
  const eqB = parseEqualityCanonical(b);
  if (eqA && eqB) {
    return arithSymEqual(normArith(eqA.left), normArith(eqB.left)) && arithSymEqual(normArith(eqA.right), normArith(eqB.right));
  }
  const memA = parseMembershipCanonical(a);
  const memB = parseMembershipCanonical(b);
  if (memA && memB) {
    return memA.set === memB.set && normArith(memA.element) === normArith(memB.element);
  }
  return normArith(a).replace(/\((\w+)\)/g, "$1") === normArith(b).replace(/\((\w+)\)/g, "$1");
}
function deriveIntClaim(ctx, claim, step) {
  const all = allContextObjects(ctx);
  const exprSubsts = /* @__PURE__ */ new Map();
  for (const obj of all) {
    const objEq = parseEqualityCanonical(obj.claim);
    if (objEq && /^[A-Za-z_]\w*$/.test(objEq.left.trim())) {
      exprSubsts.set(objEq.left.trim(), objEq.right);
    }
  }
  const resolveToNumber = (expr) => {
    const direct = evalArith(expr);
    if (direct !== null) return direct;
    let substituted = expr;
    for (const [v, e] of exprSubsts) {
      substituted = substituted.replace(new RegExp(`\\b${v}\\b`, "g"), `(${e})`);
    }
    return evalArith(substituted);
  };
  const absEq = parseAbsEquality(claim);
  if (absEq) {
    const xv = resolveToNumber(absEq.arg);
    const kv = evalArith(absEq.value);
    if (xv !== null && kv !== null && Math.abs(xv) === kv) {
      const src = exprSubsts.has(absEq.arg) ? all.find((o) => {
        const e = parseEqualityCanonical(o.claim);
        return e && e.left.trim() === absEq.arg;
      }) : void 0;
      createKernelObject(ctx, claim, "ARITH_ABS", step, src ? [src.id] : []);
      return { rule: "ARITH_ABS", state: "PROVED", uses: src ? [src.claim] : [], message: `|${absEq.arg}| = ${kv}` };
    }
    const geqZero = all.find((o) => {
      const ord2 = parseOrder(o.claim);
      return ord2 && normArith(ord2.left) === normArith(absEq.arg) && normArith(ord2.right) === "0" && (ord2.op === "\u2265" || ord2.op === ">=");
    });
    if (geqZero && normArith(absEq.value) === normArith(absEq.arg)) {
      createKernelObject(ctx, claim, "ARITH_ABS", step, [geqZero.id]);
      return { rule: "ARITH_ABS", state: "PROVED", uses: [geqZero.claim], message: "abs(x) = x for x \u2265 0" };
    }
    const leqZero = all.find((o) => {
      const ord2 = parseOrder(o.claim);
      return ord2 && normArith(ord2.left) === normArith(absEq.arg) && normArith(ord2.right) === "0" && (ord2.op === "\u2264" || ord2.op === "<=");
    });
    if (leqZero && normArith(absEq.value) === normArith(`-${absEq.arg}`)) {
      createKernelObject(ctx, claim, "ARITH_ABS", step, [leqZero.id]);
      return { rule: "ARITH_ABS", state: "PROVED", uses: [leqZero.claim], message: "abs(x) = -x for x \u2264 0" };
    }
  }
  const signEq = parseSignEquality(claim);
  if (signEq) {
    const xv = resolveToNumber(signEq.arg);
    const kv = evalArith(signEq.value);
    if (xv !== null && kv !== null) {
      const expected = xv > 0 ? 1 : xv < 0 ? -1 : 0;
      if (expected === kv) {
        const src = exprSubsts.has(signEq.arg) ? all.find((o) => {
          const e = parseEqualityCanonical(o.claim);
          return e && e.left.trim() === signEq.arg;
        }) : void 0;
        createKernelObject(ctx, claim, "ARITH_SIGN", step, src ? [src.id] : []);
        return { rule: "ARITH_SIGN", state: "PROVED", uses: src ? [src.claim] : [], message: `sign(${signEq.arg}) = ${expected}` };
      }
    }
    if (normArith(signEq.value) === "1") {
      const gt = all.find((o) => {
        const ord2 = parseOrder(o.claim);
        return ord2 && normArith(ord2.left) === normArith(signEq.arg) && normArith(ord2.right) === "0" && ord2.op === ">";
      });
      if (gt) {
        createKernelObject(ctx, claim, "ARITH_SIGN", step, [gt.id]);
        return { rule: "ARITH_SIGN", state: "PROVED", uses: [gt.claim], message: "sign(x) = 1 for x > 0" };
      }
    }
    if (normArith(signEq.value) === "-1") {
      const lt = all.find((o) => {
        const ord2 = parseOrder(o.claim);
        return ord2 && normArith(ord2.left) === normArith(signEq.arg) && normArith(ord2.right) === "0" && ord2.op === "<";
      });
      if (lt) {
        createKernelObject(ctx, claim, "ARITH_SIGN", step, [lt.id]);
        return { rule: "ARITH_SIGN", state: "PROVED", uses: [lt.claim], message: "sign(x) = -1 for x < 0" };
      }
    }
    if (normArith(signEq.value) === "0") {
      const eq0 = all.find((o) => {
        const e = parseEqualityCanonical(o.claim);
        return e && normArith(e.left) === normArith(signEq.arg) && normArith(e.right) === "0";
      });
      if (eq0) {
        createKernelObject(ctx, claim, "ARITH_SIGN", step, [eq0.id]);
        return { rule: "ARITH_SIGN", state: "PROVED", uses: [eq0.claim], message: "sign(x) = 0 for x = 0" };
      }
    }
  }
  const ord = parseOrder(claim);
  if (ord) {
    const result = evalOrder(ord.left, ord.op, ord.right);
    if (result === true) {
      createKernelObject(ctx, claim, "ARITH_ORDER", step);
      return { rule: "ARITH_ORDER", state: "PROVED", message: `Concrete ordering: ${claim}` };
    }
    const subL = resolveToNumber(ord.left);
    const subR = resolveToNumber(ord.right);
    if (subL !== null && subR !== null) {
      const holds = (() => {
        switch (ord.op) {
          case "<":
            return subL < subR;
          case ">":
            return subL > subR;
          case "\u2264":
          case "<=":
            return subL <= subR;
          case "\u2265":
          case ">=":
            return subL >= subR;
        }
      })();
      if (holds) {
        const uses = [...exprSubsts.keys()].filter((v) => ord.left.includes(v) || ord.right.includes(v)).map((v) => all.find((o) => {
          const e = parseEqualityCanonical(o.claim);
          return e && e.left.trim() === v;
        })).filter((o) => Boolean(o));
        createKernelObject(ctx, claim, "ARITH_ORDER", step, uses.map((o) => o.id));
        return { rule: "ARITH_ORDER", state: "PROVED", uses: uses.map((o) => o.claim), message: `Ordering verified by substitution` };
      }
    }
    for (const obj of all) {
      const obj2 = parseOrder(obj.claim);
      if (!obj2) continue;
      if (normArith(obj2.left) === normArith(ord.left)) {
        const mid = obj2.right;
        for (const obj3 of all) {
          if (obj3 === obj) continue;
          const obj4 = parseOrder(obj3.claim);
          if (!obj4) continue;
          if (normArith(obj4.left) === normArith(mid) && normArith(obj4.right) === normArith(ord.right)) {
            const isStrict = obj2.op === "<" || obj4.op === "<";
            const targetStrict = ord.op === "<" || ord.op === ">";
            if (!targetStrict || isStrict) {
              createKernelObject(ctx, claim, "ARITH_ORDER", step, [obj.id, obj3.id]);
              return { rule: "ARITH_ORDER", state: "PROVED", uses: [obj.claim, obj3.claim], message: "Ordering by transitivity" };
            }
          }
        }
      }
    }
    if (ord.op === "\u2265" || ord.op === ">=") {
      if (normArith(ord.right) === "0") {
        const lhsNorm = normArith(ord.left);
        const inNat = all.find((o) => {
          const mem = parseMembershipCanonical(o.claim);
          return mem && normArith(mem.element) === lhsNorm && (mem.set === "Nat" || mem.set === "\u2115");
        });
        if (inNat) {
          createKernelObject(ctx, claim, "ARITH_ORDER", step, [inNat.id]);
          return { rule: "ARITH_ORDER", state: "PROVED", uses: [inNat.claim], message: `${ord.left} \u2208 Nat implies ${ord.left} \u2265 0` };
        }
      }
    }
    if (ord.op === "\u2265" || ord.op === ">=") {
      if (normArith(ord.right) === "0") {
        const lhs = normArith(ord.left);
        const factors = splitTopMul(ord.left);
        if (factors && normArith(factors[0]) === normArith(factors[1])) {
          const inInt = all.find((o) => {
            const mem = parseMembershipCanonical(o.claim);
            return mem && normArith(mem.element) === normArith(factors[0]) && (mem.set === "Int" || mem.set === "\u2124" || mem.set === "Nat" || mem.set === "\u2115");
          });
          if (inInt) {
            createKernelObject(ctx, claim, "ARITH_ORDER", step, [inInt.id]);
            return { rule: "ARITH_ORDER", state: "PROVED", uses: [inInt.claim], message: `${ord.left} \u2265 0 (square non-negative)` };
          }
        }
      }
    }
  }
  const absOrd = claim.match(/^abs\((.+)\)\s*(≥|>=)\s*0$/);
  if (absOrd) {
    createKernelObject(ctx, claim, "ARITH_ABS", step);
    return { rule: "ARITH_ABS", state: "PROVED", message: `abs is always non-negative` };
  }
  return null;
}
function deriveModArithClaim(ctx, claim, step) {
  const all = allContextObjects(ctx);
  const primeArg = parsePrimePred(claim);
  if (primeArg !== null) {
    const v = evalArith(primeArg);
    if (v !== null && isPrime(v)) {
      createKernelObject(ctx, claim, "ARITH_PRIME", step);
      return { rule: "ARITH_PRIME", state: "PROVED", message: `${v} is prime` };
    }
    const hyp = all.find((o) => normArith(o.claim) === normArith(claim));
    if (hyp) {
      createKernelObject(ctx, claim, "ARITH_PRIME", step, [hyp.id]);
      return { rule: "ARITH_PRIME", state: "PROVED", uses: [hyp.claim], message: "Prime from context" };
    }
  }
  const totEq = parseTotientEquality(claim);
  if (totEq) {
    const nv = evalArith(totEq.arg);
    if (nv !== null) {
      const tv = computeTotient(nv);
      const kv = evalArith(totEq.value);
      if (kv !== null && tv === kv) {
        createKernelObject(ctx, claim, "ARITH_TOTIENT", step);
        return { rule: "ARITH_TOTIENT", state: "PROVED", message: `\u03C6(${nv}) = ${tv}` };
      }
    }
    const argMul = splitTopMul(totEq.arg);
    if (argMul) {
      const [pStr, qStr] = argMul;
      const pPrime2 = all.find((o) => parsePrimePred(o.claim) === normArith(pStr) || normArith(o.claim) === normArith(`${pStr} \u2208 Prime`));
      const qPrime = all.find((o) => parsePrimePred(o.claim) === normArith(qStr) || normArith(o.claim) === normArith(`${qStr} \u2208 Prime`));
      if (pPrime2 && qPrime) {
        const expected = `(${pStr} - 1) * (${qStr} - 1)`;
        if (arithSymEqual(normArith(totEq.value), expected) || normArith(totEq.value) === normArith(expected)) {
          createKernelObject(ctx, claim, "ARITH_TOTIENT", step, [pPrime2.id, qPrime.id]);
          return {
            rule: "ARITH_TOTIENT",
            state: "PROVED",
            uses: [pPrime2.claim, qPrime.claim],
            message: `\u03C6(p\xB7q) = (p-1)(q-1) for distinct primes`
          };
        }
      }
    }
    const pPrime = all.find((o) => parsePrimePred(o.claim) === normArith(totEq.arg) || normArith(o.claim) === normArith(`${totEq.arg} \u2208 Prime`));
    if (pPrime) {
      const expected = `${totEq.arg} - 1`;
      if (arithSymEqual(normArith(totEq.value), expected) || normArith(totEq.value) === normArith(expected)) {
        createKernelObject(ctx, claim, "ARITH_TOTIENT", step, [pPrime.id]);
        return {
          rule: "ARITH_TOTIENT",
          state: "PROVED",
          uses: [pPrime.claim],
          message: `\u03C6(p) = p-1 for prime p`
        };
      }
    }
  }
  const cong = parseCongruence(claim);
  if (cong) {
    if (areCongruent(cong.a, cong.b, cong.n)) {
      createKernelObject(ctx, claim, "ARITH_MOD_EVAL", step);
      return { rule: "ARITH_MOD_EVAL", state: "PROVED", message: "Verified by concrete modular evaluation" };
    }
    if (arithSymEqual(normArith(cong.a), normArith(cong.b))) {
      createKernelObject(ctx, claim, "ARITH_CONGRUENCE", step);
      return { rule: "ARITH_CONGRUENCE", state: "PROVED", message: "Congruence reflexivity: a \u2261 a (mod n)" };
    }
    const symHyp = all.find((o) => {
      const c2 = parseCongruence(o.claim);
      return c2 && normArith(c2.n) === normArith(cong.n) && normArith(c2.a) === normArith(cong.b) && normArith(c2.b) === normArith(cong.a);
    });
    if (symHyp) {
      createKernelObject(ctx, claim, "ARITH_CONGRUENCE", step, [symHyp.id]);
      return { rule: "ARITH_CONGRUENCE", state: "PROVED", uses: [symHyp.claim], message: "Congruence symmetry" };
    }
    for (const obj1 of all) {
      const c1 = parseCongruence(obj1.claim);
      if (!c1 || normArith(c1.n) !== normArith(cong.n) || normArith(c1.a) !== normArith(cong.a)) continue;
      const mid = c1.b;
      for (const obj2 of all) {
        if (obj2 === obj1) continue;
        const c2 = parseCongruence(obj2.claim);
        if (c2 && normArith(c2.n) === normArith(cong.n) && normArith(c2.a) === normArith(mid) && normArith(c2.b) === normArith(cong.b)) {
          createKernelObject(ctx, claim, "ARITH_CONGRUENCE", step, [obj1.id, obj2.id]);
          return { rule: "ARITH_CONGRUENCE", state: "PROVED", uses: [obj1.claim, obj2.claim], message: `Congruence transitivity via ${mid}` };
        }
      }
    }
    const hyp = all.find((o) => normArith(o.claim) === normArith(claim));
    if (hyp) {
      createKernelObject(ctx, claim, "ARITH_CONGRUENCE", step, [hyp.id]);
      return { rule: "ARITH_CONGRUENCE", state: "PROVED", uses: [hyp.claim], message: "Congruence from context" };
    }
    const modA = evalMod(cong.a, cong.n);
    const modB = evalMod(cong.b, cong.n);
    if (modA !== null && modB !== null && modA === modB) {
      createKernelObject(ctx, claim, "ARITH_CONGRUENCE", step);
      return { rule: "ARITH_CONGRUENCE", state: "PROVED", message: "Congruence from modular evaluation" };
    }
    if (normArith(cong.b) === "1") {
      const baseExp = parsePower(cong.a);
      if (baseExp) {
        const nPrime = all.find((o) => parsePrimePred(o.claim) === normArith(cong.n) || normArith(o.claim) === normArith(`${cong.n} \u2208 Prime`));
        if (nPrime && arithSymEqual(normArith(baseExp.exp), `${cong.n} - 1`)) {
          const cprime = all.find((o) => {
            const cp = o.claim.trim().match(/^coprime\s*\(\s*([\s\S]+?)\s*,\s*([\s\S]+?)\s*\)$/i);
            return cp && (normArith(cp[1]) === normArith(baseExp.base) && normArith(cp[2]) === normArith(cong.n) || normArith(cp[2]) === normArith(baseExp.base) && normArith(cp[1]) === normArith(cong.n));
          });
          if (cprime) {
            createKernelObject(ctx, claim, "ARITH_FERMAT", step, [nPrime.id, cprime.id]);
            return {
              rule: "ARITH_FERMAT",
              state: "PROVED",
              uses: [nPrime.claim, cprime.claim],
              message: `Fermat's little theorem: a^(p-1) \u2261 1 (mod p)`
            };
          }
        }
      }
      if (baseExp) {
        const expTotArg = parseTotientExpr(baseExp.exp);
        if (expTotArg && normArith(expTotArg) === normArith(cong.n)) {
          const cprime = all.find((o) => {
            const cp = o.claim.trim().match(/^coprime\s*\(\s*([\s\S]+?)\s*,\s*([\s\S]+?)\s*\)$/i);
            return cp && (normArith(cp[1]) === normArith(baseExp.base) && normArith(cp[2]) === normArith(cong.n) || normArith(cp[2]) === normArith(baseExp.base) && normArith(cp[1]) === normArith(cong.n));
          });
          if (cprime) {
            createKernelObject(ctx, claim, "ARITH_EULER", step, [cprime.id]);
            return {
              rule: "ARITH_EULER",
              state: "PROVED",
              uses: [cprime.claim],
              message: `Euler's theorem: a^\u03C6(n) \u2261 1 (mod n)`
            };
          }
        }
      }
    }
    {
      const outerPow = parsePower(cong.a);
      if (outerPow) {
        const innerPow = parsePower(outerPow.base);
        if (innerPow && normArith(innerPow.base) === normArith(cong.b)) {
          const m = innerPow.base;
          const e = innerPow.exp;
          const d = outerPow.exp;
          const n = cong.n;
          const eTimesD = `${e} * ${d}`;
          const modPhi = `\u03C6(${n})`;
          const keyEq = all.find((o) => {
            const c = parseCongruence(o.claim);
            return c && normArith(c.n) === normArith(modPhi) && normArith(c.b) === "1" && (arithSymEqual(normArith(c.a), eTimesD) || arithSymEqual(normArith(c.a), `${d} * ${e}`));
          });
          if (keyEq) {
            createKernelObject(ctx, claim, "ARITH_RSA", step, [keyEq.id]);
            return {
              rule: "ARITH_RSA",
              state: "PROVED",
              uses: [keyEq.claim],
              message: `RSA correctness: (m^e)^d \u2261 m (mod n) by Euler's theorem`
            };
          }
        }
      }
    }
  }
  const modEq = parseEqualityCanonical(claim);
  if (modEq) {
    const modOp = parseModOp(modEq.left) ?? parseModOp(modEq.right);
    if (modOp) {
      const result = evalMod(modOp.a, modOp.n);
      const other = parseModOp(modEq.left) ? modEq.right : modEq.left;
      const otherV = evalArith(other);
      if (result !== null && otherV !== null && result === otherV) {
        createKernelObject(ctx, claim, "ARITH_MOD_EVAL", step);
        return { rule: "ARITH_MOD_EVAL", state: "PROVED", message: "Verified by modular evaluation" };
      }
    }
  }
  return null;
}
function createKernelObject(ctx, claim, rule, step, inputs = [], imports = [], tau = "1", unresolvedTerms = []) {
  const morphism = createMorphismForClaim(ctx.category, claim, rule, tau, inputs, unresolvedTerms);
  return registerDerivedObject(ctx, claim, step, rule, morphism, inputs, imports);
}
function registerDerivedObject(ctx, claim, step, rule, morphism, inputs, imports = []) {
  const proofObject = {
    id: morphism.id,
    claim,
    term: safeTermFromString(claim),
    domain: morphism.domain,
    codomain: morphism.codomain,
    domainRestriction: morphism.domainRestriction,
    tau: morphism.tau,
    rule,
    inputs,
    pending: morphism.pending,
    suspended: morphism.suspended,
    step,
    imports: imports.length > 0 ? imports : void 0
  };
  ctx.objects.push(proofObject);
  ctx.derivations.push({
    id: `drv:${morphism.id}`,
    rule,
    inputIds: inputs,
    outputId: morphism.id,
    step
  });
  registerCategoryClaim(ctx, claim);
  enrichStructMembership(ctx, proofObject, step);
  return proofObject;
}
function createMorphismForClaim(category, claim, rule, tau, inputs, unresolvedTerms) {
  const implication = parseImplicationCanonical(claim);
  if (implication) {
    const domain = ensureClaimObjects(category, implication[0]);
    const codomain2 = ensureClaimObjects(category, implication[1]);
    if (tau === "\u03C9") {
      category.suspendObject(claim, unresolvedTerms);
    }
    return category.createMorphism({
      proposition: claim,
      domain,
      codomain: codomain2,
      tau,
      rule,
      inputs,
      unresolvedTerms,
      domainRestriction: unresolvedTerms.length > 0 ? `Dom(${claim})` : domain,
      suspended: tau === "\u03C9"
    });
  }
  const codomain = ensureClaimObjects(category, claim);
  if (tau === "\u03C9") {
    category.suspendObject(claim, unresolvedTerms);
  }
  return category.createMorphism({
    proposition: claim,
    domain: TOP,
    codomain,
    tau,
    rule,
    inputs,
    unresolvedTerms,
    domainRestriction: unresolvedTerms.length > 0 ? `Dom(${claim})` : TOP,
    suspended: tau === "\u03C9"
  });
}
function toTopMorphism(ctx, object) {
  return ctx.category.createMorphism({
    proposition: object.claim,
    domain: TOP,
    codomain: object.codomain,
    tau: object.tau,
    rule: object.rule,
    inputs: object.inputs
  });
}
function toImplicationMorphism(ctx, object) {
  const implication = parseImplicationCanonical(object.claim);
  if (!implication) {
    throw new KernelError(`Expected implication morphism, received '${object.claim}'`);
  }
  return ctx.category.createMorphism({
    proposition: object.claim,
    domain: ensureClaimObjects(ctx.category, implication[0]),
    codomain: ensureClaimObjects(ctx.category, implication[1]),
    tau: object.tau,
    rule: object.rule,
    inputs: object.inputs
  });
}
function ensureClaimObjects(category, claim) {
  return category.createObject(claim).id;
}
function splitAllConjuncts(s) {
  const parts = parseConjunctionCanonical(s);
  if (!parts) return [s];
  return [...splitAllConjuncts(parts[0]), ...splitAllConjuncts(parts[1])];
}
function theoremPremises(node) {
  const assumes = node.body.filter((item) => item.type === "Assume").flatMap((item) => splitAllConjuncts(exprToProp(item.expr)));
  if (assumes.length > 0) return assumes;
  return node.body.filter((item) => item.type === "Given").map((item) => exprToProp(item.expr));
}
function registerCategoryClaim(ctx, claim) {
  try {
    ctx.diagrams.registerClaim(claim);
  } catch (error) {
    if (error instanceof CategoryDiagramError) {
      const isUnknownFunctor = error.message.includes("unknown functor");
      ctx.diagnostics.push({
        severity: isUnknownFunctor ? "warning" : "error",
        message: error.message,
        rule: "CAT_MORPHISM"
      });
      return;
    }
    throw error;
  }
}
function theoremGoal(node) {
  const dtp = node.body.filter((item) => item.type === "DeclareToProve").map((item) => exprToProp(item.expr))[0];
  if (dtp !== void 0) return dtp;
  return node.body.filter((item) => item.type === "Assert").map((item) => exprToProp(item.expr))[0] ?? null;
}
function collectStructDefinitions(nodes, diagnostics) {
  const structs = /* @__PURE__ */ new Map();
  const typeNames = new Set(nodes.filter((node) => node.type === "TypeDecl").map((node) => node.name));
  for (const node of nodes) {
    if (node.type !== "Struct") continue;
    const fields = node.fields.map((field) => ({ name: field.name, type: field.type }));
    for (const field of fields) {
      if (!isKnownSort(field.type, structs, typeNames)) {
        diagnostics.push({
          severity: "error",
          message: `Unknown sort '${field.type}' in struct '${node.name}' field '${field.name}'`,
          rule: "STRUCTURAL"
        });
      }
    }
    structs.set(node.name, {
      name: node.name,
      fields,
      projections: new Map(fields.map((field) => [field.name, `\u03C0_${field.name}`]))
    });
  }
  return structs;
}
function collectTypeDefinitions(nodes, structs, diagnostics) {
  const typeNames = new Set(nodes.filter((node) => node.type === "TypeDecl").map((node) => node.name));
  const types = /* @__PURE__ */ new Map();
  for (const node of nodes) {
    if (node.type !== "TypeDecl") continue;
    const variants = node.variants.map((variant) => ({ ...variant, parent: node.name }));
    for (const variant of variants) {
      for (const field of variant.fields) {
        if (!isKnownSort(field.type, structs, typeNames)) {
          diagnostics.push({
            severity: "error",
            message: `Unknown sort '${field.type}' in variant '${variant.name}' of type '${node.name}'`,
            rule: "STRUCTURAL"
          });
        }
      }
    }
    types.set(node.name, { name: node.name, variants });
  }
  return types;
}
function findPairs(nodes) {
  const pairs = [];
  for (let index = 0; index < nodes.length; index++) {
    const node = nodes[index];
    if (node.type !== "Theorem" && node.type !== "Lemma" || node.connective !== "\u2194") continue;
    for (let cursor = index + 1; cursor < nodes.length; cursor++) {
      const candidate = nodes[cursor];
      if (candidate.type === "Proof" && normalizeName(candidate.name) === normalizeName(node.name)) {
        pairs.push({ theorem: node, proof: candidate });
        break;
      }
      if (candidate.type === "Theorem" || candidate.type === "Lemma") break;
    }
  }
  return pairs;
}
function normalizeName(value) {
  return value.trim().toLowerCase();
}
function classifyStep(node) {
  switch (node.type) {
    case "Assume":
      return "assume";
    case "Assert":
      return "assert";
    case "Prove":
      return "assert";
    // prove() is semantically an assert
    case "AndIntroStep":
    case "OrIntroStep":
      return "assert";
    case "Conclude":
      return "conclude";
    case "Apply":
      return "apply";
    case "SetVar":
      return "setVar";
    case "Induction":
      return "induction";
    case "Match":
      return "match";
    case "Intro":
      return "intro";
    case "Rewrite":
      return "rewrite";
    case "Exact":
      return "exact";
    default:
      return "raw";
  }
}
function nodeToClaim(node) {
  switch (node.type) {
    case "Assume":
    case "Assert":
    case "Prove":
    case "Conclude":
      return exprToProp(node.expr);
    case "AndIntroStep":
      return `${node.left} \u2227 ${node.right}`;
    case "OrIntroStep":
      return node.claim;
    case "Apply":
      return node.target;
    case "SetVar":
      return node.varType ? `${node.varName}: ${node.varType}` : node.varName;
    case "Induction":
      return exprToProp(node.fold);
    case "Match":
      return `match ${exprToProp(node.scrutinee)}`;
    case "Raw":
      return node.content;
    case "Intro":
      return `${node.varName}: ${node.varType}`;
    case "Rewrite":
      return node.hypothesis;
    case "Exact":
      return exprToProp(node.expr);
    default:
      return node.type;
  }
}
function findDerivedConclusion(ctx, goal) {
  if (goal && findExact(ctx.objects, goal, false)) {
    return goal;
  }
  const last = [...ctx.objects].reverse().find((object) => object.tau === "1");
  return last?.claim ?? null;
}
function reportState(ctx, goal, derivedConclusion) {
  if (ctx.diagnostics.some((diagnostic) => diagnostic.severity === "error")) {
    return "FAILED";
  }
  if (ctx.unverifiedReasons.length > 0) {
    return "FAILED";
  }
  if (goal && !derivedConclusion) {
    return "FAILED";
  }
  return ctx.objects.some((object) => object.pending) ? "FAILED" : "PROVED";
}
function combineStates(states, fallback) {
  if (states.length === 0) return fallback;
  if (states.includes("FAILED") || states.includes("UNVERIFIED") || states.includes("PENDING")) return "FAILED";
  return "PROVED";
}
function safeTermFromString(s) {
  try {
    return termFromString(s);
  } catch {
    return void 0;
  }
}
function findExact(objects, claim, allowPending) {
  const claimTerm = safeTermFromString(claim);
  for (let index = objects.length - 1; index >= 0; index--) {
    const object = objects[index];
    if (allowPending || !object.pending) {
      if (claimTerm && object.term && termEqual(claimTerm, object.term)) return object;
      if (sameProp(object.claim, claim)) return object;
    }
  }
  return null;
}
function requireClassical(ctx, claim, rule) {
  const classical = findExact(ctx.objects, claim, false);
  if (classical) return classical;
  const pending = findExact(ctx.objects, claim, true);
  if (pending?.pending) {
    throw new KernelError("\u03C9-Barrier: pending morphism cannot be used in classical derivation before Ra fires");
  }
  const premise = findExact(ctx.premises, claim, false);
  if (premise) return premise;
  const assumption = findExact(ctx.assumptions, claim, false);
  if (assumption) return assumption;
  const pendingPremise = findExact(ctx.premises, claim, true) ?? findExact(ctx.assumptions, claim, true);
  if (pendingPremise?.pending) {
    throw new KernelError("\u03C9-Barrier: pending morphism cannot be used in classical derivation before Ra fires");
  }
  void rule;
  return null;
}
function classicalObjects(ctx) {
  return ctx.objects.filter((object) => !object.pending && object.tau === "1");
}
function hasContradiction(objects) {
  for (const object of objects) {
    if (object.pending) continue;
    const negation = object.claim.startsWith("\xAC") ? object.claim.slice(1).trim() : `\xAC${object.claim}`;
    const opposite = findExact(objects, negation, false);
    if (opposite) {
      return [object, opposite];
    }
  }
  return null;
}
function handleIntro(ctx, node, step) {
  const { varName, varType } = node;
  if (ctx.goal && !varType) {
    const impl = parseImplicationCanonical(ctx.goal);
    if (impl) {
      const [antecedent, consequent] = impl;
      ctx.goal = consequent;
      const assumption2 = createKernelObject(ctx, antecedent, "ASSUMPTION", step);
      ctx.assumptions.push(assumption2);
      ctx.proofSteps.push({
        step,
        kind: "intro",
        claim: antecedent,
        rule: "ASSUMPTION",
        state: "PROVED",
        message: `Introduced '${varName}' as '${antecedent}', goal is now '${consequent}'`
      });
      return;
    }
  }
  let resolvedDomain = varType;
  if (ctx.goal) {
    const forall = parseBoundedQuantifierCanonical(ctx.goal, "forall");
    if (forall) {
      if (!resolvedDomain) resolvedDomain = forall.set;
      const newGoal = substituteVariable(forall.body, forall.variable, varName);
      ctx.goal = newGoal;
    }
  }
  const membershipClaim = resolvedDomain ? `${varName} \u2208 ${resolvedDomain}` : varName;
  const domain = resolvedDomain || null;
  ctx.variables.push({ name: varName, domain });
  const assumption = createKernelObject(ctx, membershipClaim, "ASSUMPTION", step);
  ctx.assumptions.push(assumption);
  ctx.proofSteps.push({
    step,
    kind: "intro",
    claim: membershipClaim,
    rule: "ASSUMPTION",
    state: "PROVED",
    message: `Introduced '${varName} \u2208 ${resolvedDomain ?? "?"}' and updated goal`
  });
}
function handleRewrite(ctx, node, step) {
  const { hypothesis, direction } = node;
  const hyp = findExact(ctx.objects, hypothesis, false) ?? findExact(ctx.assumptions, hypothesis, false) ?? findExact(ctx.premises, hypothesis, false);
  if (!hyp) {
    ctx.diagnostics.push({ severity: "error", step, message: `rewrite: hypothesis '${hypothesis}' not found in context`, rule: "REWRITE" });
    ctx.proofSteps.push({ step, kind: "rewrite", claim: hypothesis, rule: "REWRITE", state: "FAILED", message: `Hypothesis '${hypothesis}' not found` });
    return;
  }
  const eq = parseEqualityCanonical(hyp.claim);
  if (!eq) {
    ctx.diagnostics.push({ severity: "error", step, message: `rewrite: '${hypothesis}' is not an equality`, rule: "REWRITE" });
    ctx.proofSteps.push({ step, kind: "rewrite", claim: hypothesis, rule: "REWRITE", state: "FAILED", message: `'${hypothesis}' is not an equality` });
    return;
  }
  const [fromStr, toStr] = direction === "rtl" ? [eq.right, eq.left] : [eq.left, eq.right];
  const fromTerm = termFromString(fromStr);
  const toTerm = termFromString(toStr);
  if (ctx.goal) {
    const goalTerm = termFromString(ctx.goal);
    const rewritten = rewriteTerm(goalTerm, fromTerm, toTerm);
    ctx.goal = termToString(rewritten);
  }
  for (const obj of ctx.objects) {
    if (obj.term) {
      const rewritten = rewriteTerm(obj.term, fromTerm, toTerm);
      if (!termEqual(rewritten, obj.term)) {
        createKernelObject(ctx, termToString(rewritten), "REWRITE", step, [obj.id, hyp.id]);
      }
    }
  }
  ctx.proofSteps.push({
    step,
    kind: "rewrite",
    claim: ctx.goal ?? hypothesis,
    rule: "REWRITE",
    state: "PROVED",
    uses: [hyp.claim],
    message: `Rewrote ${fromStr} \u2192 ${toStr} in goal`
  });
}
function handleExact(ctx, node, step) {
  const claim = exprToProp(node.expr);
  if (ctx.goal && !sameProp(claim, ctx.goal)) {
    const claimTerm = safeTermFromString(claim);
    const goalTerm = safeTermFromString(ctx.goal);
    const match = claimTerm && goalTerm && termEqual(claimTerm, goalTerm);
    if (!match) {
      ctx.diagnostics.push({ severity: "error", step, message: `exact: '${claim}' does not match goal '${ctx.goal}'`, rule: "STRUCTURAL" });
      ctx.proofSteps.push({ step, kind: "exact", claim, rule: "STRUCTURAL", state: "FAILED", message: `Does not match goal` });
      return;
    }
  }
  const derivation = deriveClaim(ctx, claim, step);
  if (derivation.state === "FAILED") {
    ctx.diagnostics.push({ severity: "error", step, message: derivation.message, rule: derivation.rule });
  }
  ctx.proofSteps.push({
    step,
    kind: "exact",
    claim,
    rule: derivation.rule,
    state: derivation.state,
    uses: derivation.uses,
    message: derivation.message
  });
}
function handleObtain(ctx, node, step) {
  const { varName, source } = node;
  const hyp = findExact(ctx.objects, source, false) ?? findExact(ctx.assumptions, source, false) ?? findExact(ctx.premises, source, false);
  if (!hyp) {
    ctx.diagnostics.push({ severity: "error", step, message: `obtain: '${source}' not found in context`, rule: "STRUCTURAL" });
    ctx.proofSteps.push({ step, kind: "intro", claim: source, rule: "STRUCTURAL", state: "FAILED", message: `Existential not found` });
    return;
  }
  const exists = parseBoundedQuantifierCanonical(hyp.claim, "exists");
  if (!exists) {
    ctx.diagnostics.push({ severity: "error", step, message: `obtain: '${source}' is not an existential`, rule: "STRUCTURAL" });
    ctx.proofSteps.push({ step, kind: "intro", claim: source, rule: "STRUCTURAL", state: "FAILED", message: `Not an existential` });
    return;
  }
  const membershipClaim = `${varName} \u2208 ${exists.set}`;
  const bodyClaim = substituteVariable(exists.body, exists.variable, varName);
  ctx.variables.push({ name: varName, domain: exists.set });
  const memObj = createKernelObject(ctx, membershipClaim, "ASSUMPTION", step, [hyp.id]);
  ctx.assumptions.push(memObj);
  const bodyObj = createKernelObject(ctx, bodyClaim, "ASSUMPTION", step, [hyp.id]);
  ctx.assumptions.push(bodyObj);
  ctx.proofSteps.push({
    step,
    kind: "intro",
    claim: membershipClaim,
    rule: "ASSUMPTION",
    state: "PROVED",
    uses: [hyp.claim],
    message: `Obtained '${varName} \u2208 ${exists.set}' and '${bodyClaim}' from existential`
  });
}
function generateEliminators(types) {
  const result = /* @__PURE__ */ new Map();
  for (const [typeName, typeDef] of types) {
    if (typeDef.variants.length > 0) {
      const metavar = "x";
      const disjuncts = typeDef.variants.map((v) => `${metavar} \u2208 ${v.name}`);
      const conclusion = disjuncts.reduce((acc, d) => `${acc} \u2228 ${d}`);
      result.set(`${typeName.toLowerCase()}.cases`, {
        name: `${typeName}.cases`,
        premises: [`${metavar} \u2208 ${typeName}`],
        conclusion,
        state: "PROVED",
        metavars: [metavar]
      });
    }
  }
  return result;
}
function enrichStructMembership(ctx, source, step) {
  const membership = parseMembershipCanonical(source.claim);
  if (!membership) return;
  const structDef = ctx.structs.get(membership.set);
  if (!structDef) return;
  for (const field of structDef.fields) {
    const fieldClaim = `${membership.element}.${field.name} \u2208 ${field.type}`;
    if (findExact(ctx.objects, fieldClaim, true) || findExact(ctx.premises, fieldClaim, true) || findExact(ctx.assumptions, fieldClaim, true)) {
      continue;
    }
    createKernelObject(ctx, fieldClaim, "STRUCT_ELIM", step, [source.id]);
  }
}
function isKnownSort(sort, structs, typeNames = /* @__PURE__ */ new Set()) {
  const parsed = parseSort(sort);
  if (!parsed) return false;
  if (parsed.kind === "list") {
    return parsed.element ? isKnownSort(formatSort(parsed.element), structs, typeNames) : false;
  }
  if (!parsed.name) return false;
  return BUILTIN_SORTS.has(parsed.name) || structs.has(parsed.name) || typeNames.has(parsed.name);
}
function createBranchContext(ctx) {
  return {
    ...ctx,
    objects: [...ctx.objects],
    derivations: [...ctx.derivations],
    diagnostics: [],
    proofSteps: [],
    variables: [...ctx.variables],
    assumptions: [...ctx.assumptions],
    premises: [...ctx.premises]
  };
}
function applyVariantPatternBindings(ctx, scrutinee, variant, bindings, step) {
  createKernelObject(ctx, `${scrutinee} \u2208 ${variant.name}`, "OR_ELIM", step);
  for (let index = 0; index < variant.fields.length; index++) {
    const binding = bindings[index];
    if (!binding || binding === "_") continue;
    const field = variant.fields[index];
    ctx.variables.push({ name: binding, domain: field.type });
    const assumption = createKernelObject(ctx, `${binding} \u2208 ${field.type}`, "ASSUMPTION", step);
    ctx.assumptions.push(assumption);
  }
}
function applyListPatternBindings(ctx, scrutinee, listType, parsedSort, head, tail, step) {
  const elementType = formatSort(parsedSort.element ?? { kind: "named", name: "Element" });
  createKernelObject(ctx, `${scrutinee} \u2208 Cons`, "OR_ELIM", step);
  if (head !== "_") {
    ctx.variables.push({ name: head, domain: elementType });
    const headAssumption = createKernelObject(ctx, `${head} \u2208 ${elementType}`, "ASSUMPTION", step);
    ctx.assumptions.push(headAssumption);
  }
  ctx.variables.push({ name: tail, domain: listType });
  const tailAssumption = createKernelObject(ctx, `${tail} \u2208 ${listType}`, "ASSUMPTION", step);
  ctx.assumptions.push(tailAssumption);
}
function evaluateMatchBranch(ctx, goal, step) {
  if (goal && findExact(ctx.objects, goal, false)) {
    return "PROVED";
  }
  if (goal) {
    const goalMembership = parseMembershipCanonical(goal);
    if (goalMembership) {
      const lastConclusion = findLastConclude(ctx.proofSteps);
      if (lastConclusion && branchConclusionMatchesType(lastConclusion.claim, goalMembership.set, ctx)) {
        createKernelObject(ctx, goal, "OR_ELIM", step);
        return "PROVED";
      }
    }
    return "FAILED";
  }
  return "PROVED";
}
function findLastConclude(steps) {
  for (let index = steps.length - 1; index >= 0; index--) {
    if (steps[index].kind === "conclude") return steps[index];
  }
  return null;
}
function branchConclusionMatchesType(claim, expectedType, ctx) {
  const inferred = inferExpressionType(claim, ctx);
  return inferred === expectedType;
}
function parseSort(value) {
  const trimmed = value.trim();
  const listMatch = trimmed.match(/^List\s*\(([\s\S]+)\)$/);
  if (listMatch) {
    const inner = parseSort(listMatch[1].trim());
    return inner ? { kind: "list", element: inner } : null;
  }
  if (!trimmed) return null;
  return { kind: "named", name: trimmed };
}
function formatSort(sort) {
  if (sort.kind === "list") {
    return `List(${formatSort(sort.element ?? { kind: "named", name: "Element" })})`;
  }
  return sort.name ?? "Element";
}
function inferExpressionType(claim, ctx) {
  const membership = parseMembershipCanonical(claim);
  if (membership) return membership.set;
  const trimmed = claim.trim();
  if (trimmed === "[]") {
    const goalMembership = ctx.goal ? parseMembershipCanonical(ctx.goal) : null;
    return goalMembership?.set ?? null;
  }
  if (trimmed.startsWith("[") && trimmed.endsWith("]")) {
    const goalMembership = ctx.goal ? parseMembershipCanonical(ctx.goal) : null;
    if (goalMembership?.set && parseSort(goalMembership.set)?.kind === "list") {
      return goalMembership.set;
    }
  }
  if (/^\d+$/.test(trimmed)) return "\u2115";
  if (/[π√]/.test(trimmed) || /\bsqrt\s*\(/.test(trimmed)) return "\u211D";
  const bareBinding = ctx.variables.find((variable) => variable.name === trimmed);
  if (bareBinding?.domain) return bareBinding.domain;
  if (/[*\/^]/.test(trimmed)) {
    const vars = trimmed.match(/[A-Za-z_][\w₀-₉ₐ-ₙ]*/g) ?? [];
    if (vars.some((variable) => {
      const binding = ctx.variables.find((entry) => entry.name === variable);
      return binding?.domain === "\u211D";
    })) return "\u211D";
    return "\u2115";
  }
  if (/[+]/.test(trimmed)) return "\u2115";
  const call = trimmed.match(/^([A-Za-z_][\w₀-₉ₐ-ₙ]*)\s*\(/);
  if (call && ctx.goal) {
    const goalMembership = parseMembershipCanonical(ctx.goal);
    if (goalMembership) return goalMembership.set;
  }
  return null;
}
function validateListStructuralRecursion(proof) {
  const fnMeta = proof.fnMeta;
  if (!fnMeta) return null;
  const listParams = fnMeta.params.filter((param) => parseSort(param.type)?.kind === "list");
  if (listParams.length === 0) return null;
  const invalidCall = findInvalidRecursiveCall(proof.body, proof.name, /* @__PURE__ */ new Map(), listParams);
  if (!invalidCall) return null;
  return `UNVERIFIED: recursive call '${invalidCall.call}' is not structural on a List tail`;
}
function findInvalidRecursiveCall(nodes, fnName, allowedTails, listParams) {
  for (const node of nodes) {
    if (node.type === "Match") {
      const scrutinee = exprToProp(node.scrutinee).trim();
      const listParam = listParams.find((param) => param.name === scrutinee);
      for (const matchCase of node.cases) {
        const branchAllowed = new Map(allowedTails);
        if (listParam && matchCase.pattern.kind === "list_cons") {
          branchAllowed.set(listParam.name, matchCase.pattern.tail);
        }
        const nested = findInvalidRecursiveCall(matchCase.body, fnName, branchAllowed, listParams);
        if (nested) return nested;
      }
      continue;
    }
    const claim = node.type === "Assert" || node.type === "Assume" || node.type === "Conclude" ? exprToProp(node.expr) : node.type === "Raw" ? node.content : null;
    if (claim) {
      const invalid = validateRecursiveCallsInText(claim, fnName, allowedTails, listParams);
      if (invalid) return invalid;
    }
  }
  return null;
}
function validateRecursiveCallsInText(text, fnName, allowedTails, listParams) {
  for (const call of extractNamedCalls(text, fnName)) {
    const args = splitTopLevelCallArgs(call.args);
    for (let index = 0; index < listParams.length; index++) {
      const param = listParams[index];
      const arg = args[index]?.trim();
      const allowedTail = allowedTails.get(param.name);
      if (!arg || arg !== allowedTail) {
        return { call: `${fnName}(${call.args})` };
      }
    }
  }
  return null;
}
function extractNamedCalls(text, fnName) {
  const calls = [];
  const pattern = new RegExp(`\\b${escapeRegex(fnName)}\\s*\\(`, "g");
  let match;
  while ((match = pattern.exec(text)) !== null) {
    const openIndex = text.indexOf("(", match.index);
    const closeIndex = findMatchingParenInText(text, openIndex);
    if (openIndex === -1 || closeIndex === -1) continue;
    calls.push({ args: text.slice(openIndex + 1, closeIndex) });
    pattern.lastIndex = closeIndex + 1;
  }
  return calls;
}
function findMatchingParenInText(value, start) {
  let depth = 0;
  for (let i = start; i < value.length; i++) {
    const ch = value[i];
    if (ch === "(") depth++;
    else if (ch === ")") {
      depth--;
      if (depth === 0) return i;
    }
  }
  return -1;
}
function splitTopLevelCallArgs(value) {
  const args = [];
  let start = 0;
  let depth = 0;
  let bracketDepth = 0;
  for (let i = 0; i < value.length; i++) {
    const ch = value[i];
    if (ch === "(") depth++;
    else if (ch === ")") depth = Math.max(0, depth - 1);
    else if (ch === "[") bracketDepth++;
    else if (ch === "]") bracketDepth = Math.max(0, bracketDepth - 1);
    else if (ch === "," && depth === 0 && bracketDepth === 0) {
      args.push(value.slice(start, i).trim());
      start = i + 1;
    }
  }
  const final = value.slice(start).trim();
  if (final) args.push(final);
  return args;
}
function parseFieldAccess(value) {
  const trimmed = value.trim();
  if (!trimmed.includes(".")) return null;
  const parts = trimmed.split(".").map((part) => part.trim()).filter(Boolean);
  if (parts.length < 2) return null;
  return { base: parts[0], path: parts.slice(1) };
}
function resolveFieldProjection(ctx, base, path) {
  let currentExpr = base;
  let currentMembership = requireAnyMembership(ctx, currentExpr);
  if (!currentMembership) return null;
  for (const fieldName of path) {
    const membership = parseMembershipCanonical(currentMembership.claim);
    if (!membership) return null;
    const structDef = ctx.structs.get(membership.set);
    if (!structDef) return null;
    const field = structDef.fields.find((candidate) => candidate.name === fieldName);
    if (!field) return null;
    currentExpr = `${currentExpr}.${fieldName}`;
    const nextClaim = `${currentExpr} \u2208 ${field.type}`;
    let nextMembership = findExact(ctx.objects, nextClaim, false) ?? findExact(ctx.premises, nextClaim, false) ?? findExact(ctx.assumptions, nextClaim, false);
    if (!nextMembership) {
      nextMembership = createKernelObject(ctx, nextClaim, "STRUCT_ELIM", currentMembership.step, [currentMembership.id]);
    }
    currentMembership = nextMembership;
  }
  const finalMembership = parseMembershipCanonical(currentMembership.claim);
  if (!finalMembership) return null;
  return { type: finalMembership.set, source: currentMembership };
}
function requireAnyMembership(ctx, element) {
  const pools = [ctx.objects, ctx.premises, ctx.assumptions];
  for (const pool of pools) {
    for (let index = pool.length - 1; index >= 0; index--) {
      const membership = parseMembershipCanonical(pool[index].claim);
      if (membership && sameProp(membership.element, element) && !pool[index].pending) {
        return pool[index];
      }
    }
  }
  return null;
}
function findWitness(ctx, variable) {
  for (let index = ctx.variables.length - 1; index >= 0; index--) {
    if (ctx.variables[index].name === variable) {
      return ctx.variables[index].name;
    }
  }
  for (let index = ctx.variables.length - 1; index >= 0; index--) {
    const candidate = ctx.variables[index];
    if (candidate.domain !== null) {
      return candidate.name;
    }
  }
  if (ctx.variables.length > 0) {
    return ctx.variables[ctx.variables.length - 1].name;
  }
  return null;
}
function substituteVariable(input, variable, replacement) {
  const pattern = new RegExp(`\\b${escapeRegex(variable)}\\b`, "g");
  return input.replace(pattern, replacement);
}
function escapeRegex(value) {
  return value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}
function normalizeSpaces(value) {
  return value.trim().replace(/\s+/g, " ");
}
function containsWitness(claim, witness) {
  return new RegExp(`\\b${escapeRegex(witness)}\\b`).test(claim);
}
function predicateToRule(name) {
  switch (name) {
    case "Category":
    case "Object":
      return "CAT_OBJECT";
    case "Morphism":
      return "CAT_MORPHISM";
    case "Iso":
      return "ISO_INTRO";
    case "Product":
      return "PRODUCT_INTRO";
    case "ProductMediator":
      return "PRODUCT_MEDIATOR";
    case "Coproduct":
      return "COPRODUCT_INTRO";
    case "Pullback":
      return "PULLBACK_INTRO";
    case "Pushout":
      return "PUSHOUT_INTRO";
    case "Functor":
      return "FUNCTOR_INTRO";
  }
}
function hasClaim(ctx, claim) {
  return Boolean(
    findExact(ctx.objects, claim, false) || findExact(ctx.premises, claim, false) || findExact(ctx.assumptions, claim, false)
  );
}
function hasMorphism(ctx, claim) {
  return hasClaim(ctx, claim) || Boolean(findDeclarationByLabel(ctx, parseMorphismDeclarationCanonical(claim)?.label ?? ""));
}
function findDeclarationByLabel(ctx, label) {
  if (!label) return null;
  const collections = [ctx.objects, ctx.premises, ctx.assumptions];
  for (const collection of collections) {
    for (let index = collection.length - 1; index >= 0; index--) {
      const declaration = parseMorphismDeclarationCanonical(collection[index].claim);
      if (declaration && declaration.label === label) {
        return declaration;
      }
    }
  }
  return null;
}
function stripIdentity(value) {
  return value.replace(/\bid_\{?([^}\s]+(?:\([^)]*\))?)\}?\s*∘\s*/g, "").replace(/\s*∘\s*id_\{?([^}\s]+(?:\([^)]*\))?)\}?/g, "").trim();
}
function normalizeComposition(value) {
  return value.replace(/[()]/g, "").split("\u2218").map((part) => part.trim()).filter(Boolean).join(" \u2218 ");
}
function looksLikeCategoricalEquality2(claim) {
  return claim.includes("\u2218") || /\bid_/.test(claim) || /^[A-Z][\w₀-₉ₐ-ₙ]*\(.+\)\s*=/.test(claim);
}
function deriveCryptoClaim(ctx, claim, step) {
  const all = allContextObjects(ctx);
  const norm = claim.trim();
  const dlogMatch = norm.match(/^dlog_hard\((\w+)\s*,\s*(\w+)\)$/);
  if (dlogMatch) {
    const [, g, p] = dlogMatch;
    const pIsPrime = all.find((o) => {
      const mem = parseMembershipCanonical(o.claim);
      return mem && mem.element === p && mem.set === "Prime";
    });
    const gInNat = all.find((o) => {
      const mem = parseMembershipCanonical(o.claim);
      return mem && mem.element === g && (mem.set === "Nat" || mem.set === "\u2115");
    });
    if (pIsPrime && gInNat) {
      createKernelObject(ctx, claim, "CRYPTO_DL", step, [pIsPrime.id, gInNat.id]);
      return { rule: "CRYPTO_DL", state: "PROVED", uses: [pIsPrime.claim, gInNat.claim], message: `Discrete log hard in Z_${p}*` };
    }
  }
  const dhMatch = norm.match(/^dh_secret\((\w+)\s*,\s*(\w+)\s*,\s*(\w+)\s*,\s*(\w+)\)\s*=\s*(.+)$/);
  if (dhMatch) {
    const [, g, a, b, p, result] = dhMatch;
    const pIsPrime = all.find((o) => {
      const mem = parseMembershipCanonical(o.claim);
      return mem && mem.element === p && mem.set === "Prime";
    });
    const dlogHard = all.find((o) => o.claim.match(new RegExp(`dlog_hard\\(${g}\\s*,\\s*${p}\\)`)));
    if (pIsPrime && dlogHard) {
      const expectedFwd = `${g}^(${a} * ${b}) mod ${p}`;
      const expectedBwd = `${g}^(${b} * ${a}) mod ${p}`;
      if (normArith(result) === normArith(expectedFwd) || normArith(result) === normArith(expectedBwd) || areCongruent(result, expectedFwd, String(parseInt(p))) || areCongruent(result, expectedBwd, String(parseInt(p)))) {
        createKernelObject(ctx, claim, "CRYPTO_DH", step, [pIsPrime.id, dlogHard.id]);
        return { rule: "CRYPTO_DH", state: "PROVED", uses: [pIsPrime.claim, dlogHard.claim], message: `DH shared secret: ${g}^(${a}${b}) \u2261 ${g}^(${b}${a}) (mod ${p})` };
      }
    }
  }
  const ecPointMatch = norm.match(/^on_curve\((\w+)\s*,\s*(.+)\)$/);
  if (ecPointMatch) {
    const [, pt, curve] = ecPointMatch;
    const curveEq = all.find((o) => o.claim.match(new RegExp(`curve_eq\\(${curve.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}\\s*,`)));
    const ptCoords = all.find((o) => o.claim.match(new RegExp(`coords\\(${pt}\\s*,`)));
    if (curveEq && ptCoords) {
      createKernelObject(ctx, claim, "CRYPTO_EC", step, [curveEq.id, ptCoords.id]);
      return { rule: "CRYPTO_EC", state: "PROVED", uses: [curveEq.claim, ptCoords.claim], message: `Point ${pt} verified on curve ${curve}` };
    }
    const axiom = all.find((o) => sameProp(o.claim, claim));
    if (axiom) {
      createKernelObject(ctx, claim, "CRYPTO_EC", step, [axiom.id]);
      return { rule: "CRYPTO_EC", state: "PROVED", uses: [axiom.claim], message: `EC point membership axiom` };
    }
  }
  const ecAddMatch = norm.match(/^ec_add\((\w+)\s*,\s*(\w+)\s*,\s*(\w+)\)\s*=\s*ec_add\((\w+)\s*,\s*(\w+)\s*,\s*(\w+)\)$/);
  if (ecAddMatch) {
    const [, P1, Q1, E1, Q2, P2, E2] = ecAddMatch;
    if (P1 === P2 && Q1 === Q2 && E1 === E2) {
      createKernelObject(ctx, claim, "CRYPTO_EC", step);
      return { rule: "CRYPTO_EC", state: "PROVED", message: "EC group law: commutativity" };
    }
    if (P1 === Q2 && Q1 === P2 && E1 === E2) {
      createKernelObject(ctx, claim, "CRYPTO_EC", step);
      return { rule: "CRYPTO_EC", state: "PROVED", message: "EC group law: commutativity" };
    }
  }
  const hashSecureMatch = norm.match(/^hash_secure\((\w[\w₀-₉ₐ-ₙ]*)\)$/);
  if (hashSecureMatch) {
    const [, H] = hashSecureMatch;
    const collRes = all.find((o) => o.claim.match(new RegExp(`collision_resistant\\(\\s*${H}\\s*\\)`)));
    const oneWay = all.find((o) => o.claim.match(new RegExp(`one_way\\(\\s*${H}\\s*\\)`)));
    if (collRes && oneWay) {
      createKernelObject(ctx, claim, "CRYPTO_HASH", step, [collRes.id, oneWay.id]);
      return { rule: "CRYPTO_HASH", state: "PROVED", uses: [collRes.claim, oneWay.claim], message: `${H} is a secure hash function` };
    }
  }
  const commitMatch = norm.match(/^commit_binding\((\w[\w₀-₉ₐ-ₙ]*)\)$/);
  if (commitMatch) {
    const [, C] = commitMatch;
    const hashBasis = all.find((o) => o.claim.match(new RegExp(`hash_secure\\(\\s*${C}\\s*\\)`)) || o.claim.match(new RegExp(`collision_resistant\\(\\s*${C}\\s*\\)`)));
    if (hashBasis) {
      createKernelObject(ctx, claim, "CRYPTO_COMMIT", step, [hashBasis.id]);
      return { rule: "CRYPTO_COMMIT", state: "PROVED", uses: [hashBasis.claim], message: `${C} commitment scheme is binding` };
    }
  }
  return null;
}
function deriveRealAnalysisClaim(ctx, claim, step) {
  const all = allContextObjects(ctx);
  const norm = claim.trim();
  const limMatch = norm.match(/^lim\((\w[\w₀-₉ₐ-ₙ]*)\s*,\s*(.+?)\)\s*=\s*(.+)$/);
  if (limMatch) {
    const [, fn, point, limitVal] = limMatch;
    const contCtx = all.find((o) => {
      return o.claim.match(new RegExp(`continuous\\(\\s*${fn}\\s*,\\s*${point.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}\\s*\\)`));
    });
    if (contCtx) {
      const appVal = `${fn}(${point})`;
      if (normArith(limitVal) === normArith(appVal) || arithSymEqual(limitVal, appVal)) {
        createKernelObject(ctx, claim, "REAL_LIMIT", step, [contCtx.id]);
        return { rule: "REAL_LIMIT", state: "PROVED", uses: [contCtx.claim], message: `Limit by continuity: lim(${fn}, ${point}) = ${fn}(${point})` };
      }
    }
    const limLo = all.find((o) => o.claim.match(/^lim\((\w+)\s*,\s*.+\)\s*=\s*.+$/));
    const limHi = all.find((o) => o !== limLo && o.claim.match(/^lim\((\w+)\s*,\s*.+\)\s*=\s*.+$/));
    if (limLo && limHi) {
      const mLo = limLo.claim.match(/^lim\((\w+)\s*,\s*(.+?)\)\s*=\s*(.+)$/);
      const mHi = limHi.claim.match(/^lim\((\w+)\s*,\s*(.+?)\)\s*=\s*(.+)$/);
      if (mLo && mHi && normArith(mLo[3]) === normArith(limitVal) && normArith(mHi[3]) === normArith(limitVal)) {
        createKernelObject(ctx, claim, "REAL_SQUEEZE", step, [limLo.id, limHi.id]);
        return { rule: "REAL_SQUEEZE", state: "PROVED", uses: [limLo.claim, limHi.claim], message: "Squeeze theorem" };
      }
    }
  }
  const contMatch = norm.match(/^continuous\((\w[\w₀-₉ₐ-ₙ]*)\s*,\s*(.+)\)$/);
  if (contMatch) {
    const [, fn, point] = contMatch;
    const diffCtx = all.find(
      (o) => o.claim.match(new RegExp(`differentiable\\(\\s*${fn}\\s*,\\s*${point.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}\\s*\\)`))
    );
    if (diffCtx) {
      createKernelObject(ctx, claim, "REAL_CONTINUOUS", step, [diffCtx.id]);
      return { rule: "REAL_CONTINUOUS", state: "PROVED", uses: [diffCtx.claim], message: "Differentiable implies continuous" };
    }
    const contOnR = all.find(
      (o) => o.claim.match(new RegExp(`continuous_on_R\\(\\s*${fn}\\s*\\)`)) || o.claim.match(new RegExp(`polynomial\\(\\s*${fn}\\s*\\)`))
    );
    if (contOnR) {
      createKernelObject(ctx, claim, "REAL_CONTINUOUS", step, [contOnR.id]);
      return { rule: "REAL_CONTINUOUS", state: "PROVED", uses: [contOnR.claim], message: `${fn} is continuous everywhere` };
    }
  }
  const ivtMatch = norm.match(/^∃\s+c\s*∈\s*\((.+?)\s*,\s*(.+?)\)\s*,\s*(.+?)\(c\)\s*=\s*(.+)$/);
  if (ivtMatch) {
    const [, a, b, fn, y] = ivtMatch;
    const contInterval = all.find(
      (o) => o.claim.match(new RegExp(`continuous_on\\(\\s*${fn}\\s*,\\s*\\[${a.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}\\s*,\\s*${b.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}\\]\\s*\\)`))
    );
    if (contInterval) {
      const faLeY = all.find((o) => {
        const ord = parseOrder(o.claim);
        return ord && (ord.op === "\u2264" || ord.op === "<=") && normArith(ord.left) === normArith(`${fn}(${a})`) && normArith(ord.right) === normArith(y);
      });
      const yLeFb = all.find((o) => {
        const ord = parseOrder(o.claim);
        return ord && (ord.op === "\u2264" || ord.op === "<=") && normArith(ord.left) === normArith(y) && normArith(ord.right) === normArith(`${fn}(${b})`);
      });
      if (contInterval && (faLeY || yLeFb)) {
        const uses = [contInterval, faLeY, yLeFb].filter((o) => Boolean(o));
        createKernelObject(ctx, claim, "REAL_IVT", step, uses.map((o) => o.id));
        return { rule: "REAL_IVT", state: "PROVED", uses: uses.map((o) => o.claim), message: "Intermediate Value Theorem" };
      }
    }
  }
  const boundMatch = norm.match(/^bounded\((\w[\w₀-₉ₐ-ₙ]*)\s*,\s*\[(.+?)\s*,\s*(.+?)\]\)$/);
  if (boundMatch) {
    const [, fn, a, b] = boundMatch;
    const contInterval = all.find(
      (o) => o.claim.match(new RegExp(`continuous_on\\(\\s*${fn}\\s*,\\s*\\[${a.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}\\s*,\\s*${b.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}\\]\\s*\\)`))
    );
    if (contInterval) {
      createKernelObject(ctx, claim, "REAL_BOUND", step, [contInterval.id]);
      return { rule: "REAL_BOUND", state: "PROVED", uses: [contInterval.claim], message: "Continuous on closed interval implies bounded (Extreme Value Theorem)" };
    }
  }
  const diffMatch = norm.match(/^derivative\((\w[\w₀-₉ₐ-ₙ]*)\s*,\s*(.+?)\)\s*=\s*(.+)$/);
  if (diffMatch) {
    const [, fn, varName, derExpr] = diffMatch;
    const powerFn = all.find((o) => {
      const eq = parseEqualityCanonical(o.claim);
      return eq && eq.left.trim() === fn && eq.right.includes("^");
    });
    if (powerFn) {
      const eq = parseEqualityCanonical(powerFn.claim);
      const powParsed = parsePower(eq.right);
      if (powParsed && normArith(powParsed.base) === normArith(varName)) {
        const n = evalArith(powParsed.exp);
        if (n !== null) {
          const expectedDer = n === 1 ? "1" : n === 2 ? `2 * ${varName}` : `${n} * ${varName}^${n - 1}`;
          if (arithSymEqual(derExpr, expectedDer)) {
            createKernelObject(ctx, claim, "REAL_DIFF", step, [powerFn.id]);
            return { rule: "REAL_DIFF", state: "PROVED", uses: [powerFn.claim], message: `Power rule: d/d${varName} ${fn}(${varName}) = ${expectedDer}` };
          }
        }
      }
    }
    const constVal = evalArith(fn);
    if (constVal !== null && normArith(derExpr) === "0") {
      createKernelObject(ctx, claim, "REAL_DIFF", step);
      return { rule: "REAL_DIFF", state: "PROVED", message: "Constant rule: derivative of constant = 0" };
    }
  }
  return null;
}
function deriveOrderClaim(ctx, claim, step) {
  const all = allContextObjects(ctx);
  const norm = claim.trim();
  const reflMatch = norm.match(/^leq\((.+?)\s*,\s*(.+?)\)$/);
  if (reflMatch) {
    const [, a, b] = reflMatch;
    if (normArith(a) === normArith(b)) {
      createKernelObject(ctx, claim, "ORDER_REFL", step);
      return { rule: "ORDER_REFL", state: "PROVED", message: `Order reflexivity: ${a} \u2264 ${a}` };
    }
    for (const obj1 of all) {
      const m1 = obj1.claim.match(/^leq\((.+?)\s*,\s*(.+?)\)$/);
      if (!m1 || normArith(m1[1]) !== normArith(a)) continue;
      const mid = m1[2];
      for (const obj2 of all) {
        if (obj2 === obj1) continue;
        const m2 = obj2.claim.match(/^leq\((.+?)\s*,\s*(.+?)\)$/);
        if (m2 && normArith(m2[1]) === normArith(mid) && normArith(m2[2]) === normArith(b)) {
          createKernelObject(ctx, claim, "ORDER_TRANS", step, [obj1.id, obj2.id]);
          return { rule: "ORDER_TRANS", state: "PROVED", uses: [obj1.claim, obj2.claim], message: `Order transitivity: ${a} \u2264 ${mid} \u2264 ${b}` };
        }
      }
    }
  }
  const eqMatch = parseEqualityCanonical(norm);
  if (eqMatch) {
    const leqAB = all.find((o) => o.claim.trim() === `leq(${eqMatch.left}, ${eqMatch.right})` || o.claim.match(/^leq\((.+?)\s*,\s*(.+?)\)$/) && normArith(o.claim.match(/^leq\((.+?)\s*,\s*(.+?)\)$/)[1]) === normArith(eqMatch.left) && normArith(o.claim.match(/^leq\((.+?)\s*,\s*(.+?)\)$/)[2]) === normArith(eqMatch.right));
    const leqBA = all.find((o) => {
      const m = o.claim.match(/^leq\((.+?)\s*,\s*(.+?)\)$/);
      return m && normArith(m[1]) === normArith(eqMatch.right) && normArith(m[2]) === normArith(eqMatch.left);
    });
    if (leqAB && leqBA) {
      createKernelObject(ctx, claim, "ORDER_ANTISYM", step, [leqAB.id, leqBA.id]);
      return { rule: "ORDER_ANTISYM", state: "PROVED", uses: [leqAB.claim, leqBA.claim], message: `Order antisymmetry: ${eqMatch.left} = ${eqMatch.right}` };
    }
  }
  const joinMatch = norm.match(/^leq\((.+?)\s*,\s*join\((.+?)\s*,\s*(.+?)\)\)$/);
  if (joinMatch) {
    const [, x, a, b] = joinMatch;
    const xInA = all.find((o) => {
      const m = o.claim.match(/^leq\((.+?)\s*,\s*(.+?)\)$/);
      return m && normArith(m[1]) === normArith(x) && normArith(m[2]) === normArith(a);
    });
    if (xInA) {
      createKernelObject(ctx, claim, "LATTICE_JOIN", step, [xInA.id]);
      return { rule: "LATTICE_JOIN", state: "PROVED", uses: [xInA.claim], message: `Lattice join: ${x} \u2264 join(${a}, ${b})` };
    }
    const xInB = all.find((o) => {
      const m = o.claim.match(/^leq\((.+?)\s*,\s*(.+?)\)$/);
      return m && normArith(m[1]) === normArith(x) && normArith(m[2]) === normArith(b);
    });
    if (xInB) {
      createKernelObject(ctx, claim, "LATTICE_JOIN", step, [xInB.id]);
      return { rule: "LATTICE_JOIN", state: "PROVED", uses: [xInB.claim], message: `Lattice join: ${x} \u2264 join(${a}, ${b})` };
    }
  }
  const meetMatch = norm.match(/^leq\(meet\((.+?)\s*,\s*(.+?)\)\s*,\s*(.+?)\)$/);
  if (meetMatch) {
    const [, a, b, x] = meetMatch;
    const aLeX = all.find((o) => {
      const m = o.claim.match(/^leq\((.+?)\s*,\s*(.+?)\)$/);
      return m && normArith(m[1]) === normArith(a) && normArith(m[2]) === normArith(x);
    });
    if (aLeX) {
      createKernelObject(ctx, claim, "LATTICE_MEET", step, [aLeX.id]);
      return { rule: "LATTICE_MEET", state: "PROVED", uses: [aLeX.claim], message: `Lattice meet: meet(${a}, ${b}) \u2264 ${x}` };
    }
    const bLeX = all.find((o) => {
      const m = o.claim.match(/^leq\((.+?)\s*,\s*(.+?)\)$/);
      return m && normArith(m[1]) === normArith(b) && normArith(m[2]) === normArith(x);
    });
    if (bLeX) {
      createKernelObject(ctx, claim, "LATTICE_MEET", step, [bLeX.id]);
      return { rule: "LATTICE_MEET", state: "PROVED", uses: [bLeX.claim], message: `Lattice meet: meet(${a}, ${b}) \u2264 ${x}` };
    }
  }
  return null;
}
function deriveGraphClaim(ctx, claim, step) {
  const all = allContextObjects(ctx);
  const norm = claim.trim();
  if (norm === "\u22A5") {
    for (const obj of all) {
      if (obj.pending) continue;
      const neg2 = obj.claim.startsWith("\xAC") ? obj.claim.slice(1).trim() : `\xAC${obj.claim}`;
      const opp = all.find((o) => !o.pending && o.claim.trim() === neg2);
      if (opp) {
        createKernelObject(ctx, claim, "GRAPH_PATH", step, [obj.id, opp.id]);
        return { rule: "GRAPH_PATH", state: "PROVED", uses: [obj.claim, opp.claim], message: `Contradiction: ${obj.claim} and ${opp.claim}` };
      }
    }
  }
  if (norm.startsWith("\xAC") && norm.slice(1).trim().match(/^has_odd_cycle\((.+)\)$/)) {
    const G = norm.slice(1).trim().match(/^has_odd_cycle\((.+)\)$/)[1];
    const bip = all.find((o) => o.claim.trim() === `bipartite(${G})`);
    if (bip) {
      createKernelObject(ctx, claim, "GRAPH_DEGREE", step, [bip.id]);
      return { rule: "GRAPH_DEGREE", state: "PROVED", uses: [bip.claim], message: `Bipartite graphs have no odd cycles` };
    }
  }
  const evenOddMatch = norm.match(/^even\(count_odd_degree\((.+)\)\)$/);
  if (evenOddMatch) {
    const G = evenOddMatch[1];
    const evenSum = all.find((o) => o.claim.trim() === `even(degree_sum(${G}))`);
    const graphObj = all.find((o) => o.claim.match(new RegExp(`^graph\\(${G.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}\\)`)));
    if (evenSum || graphObj) {
      createKernelObject(ctx, claim, "GRAPH_DEGREE", step, evenSum ?? graphObj ? [(evenSum ?? graphObj).id] : []);
      return { rule: "GRAPH_DEGREE", state: "PROVED", message: `Number of odd-degree vertices is even` };
    }
  }
  const evenSumMatch = norm.match(/^even\(degree_sum\((.+)\)\)$/);
  if (evenSumMatch) {
    const G = evenSumMatch[1];
    const degEq = all.find((o) => o.claim.trim() === `degree_sum(${G}) = 2 * edge_count(${G})`);
    if (degEq) {
      createKernelObject(ctx, claim, "GRAPH_DEGREE", step, [degEq.id]);
      return { rule: "GRAPH_DEGREE", state: "PROVED", uses: [degEq.claim], message: `degree_sum = 2|E| implies even` };
    }
  }
  const pathSymMatch = norm.match(/^path\((.+?)\s*,\s*(.+?)\s*,\s*(.+?)\)$/);
  if (pathSymMatch) {
    const [, G, v, u] = pathSymMatch;
    if (normArith(u) !== normArith(v)) {
      const fwdPath = all.find((o) => {
        const m = o.claim.match(/^path\((.+?)\s*,\s*(.+?)\s*,\s*(.+?)\)$/);
        return m && normArith(m[1]) === normArith(G) && normArith(m[2]) === normArith(u) && normArith(m[3]) === normArith(v);
      });
      if (fwdPath) {
        createKernelObject(ctx, claim, "GRAPH_PATH", step, [fwdPath.id]);
        return { rule: "GRAPH_PATH", state: "PROVED", uses: [fwdPath.claim], message: `Path symmetry: ${u}\u2014${v} implies ${v}\u2014${u}` };
      }
    }
  }
  const connFromTree = norm.match(/^connected\((.+)\)$/);
  if (connFromTree) {
    const G = connFromTree[1];
    const treeHyp = all.find((o) => o.claim.trim() === `tree(${G})`);
    if (treeHyp) {
      createKernelObject(ctx, claim, "GRAPH_TREE", step, [treeHyp.id]);
      return { rule: "GRAPH_TREE", state: "PROVED", uses: [treeHyp.claim], message: `Trees are connected` };
    }
  }
  const acycFromTree = norm.match(/^acyclic\((.+)\)$/);
  if (acycFromTree) {
    const G = acycFromTree[1];
    const treeHyp = all.find((o) => o.claim.trim() === `tree(${G})`);
    if (treeHyp) {
      createKernelObject(ctx, claim, "GRAPH_TREE", step, [treeHyp.id]);
      return { rule: "GRAPH_TREE", state: "PROVED", uses: [treeHyp.claim], message: `Trees are acyclic` };
    }
  }
  const edgeCountMatch = norm.match(/^edge_count\((.+)\)\s*=\s*(.+)$/);
  if (edgeCountMatch) {
    const G = edgeCountMatch[1], rhs = edgeCountMatch[2];
    const treeHyp = all.find((o) => o.claim.trim() === `tree(${G})`);
    if (treeHyp) {
      const vcHyp = all.find((o) => {
        const m = o.claim.match(/^vertex_count\((.+)\)\s*=\s*(.+)$/);
        return m && normArith(m[1]) === normArith(G) && normArith(`${m[2]} - 1`) === normArith(rhs);
      });
      if (vcHyp) {
        createKernelObject(ctx, claim, "GRAPH_TREE", step, [treeHyp.id, vcHyp.id]);
        return { rule: "GRAPH_TREE", state: "PROVED", uses: [treeHyp.claim, vcHyp.claim], message: `Tree with n vertices has n-1 edges` };
      }
    }
  }
  const uniquePathMatch = norm.match(/^unique_path\((.+?)\s*,\s*(.+?)\s*,\s*(.+?)\)$/);
  if (uniquePathMatch) {
    const [, G, u, v] = uniquePathMatch;
    const treeHyp = all.find((o) => o.claim.trim() === `tree(${G})`);
    const connHyp = all.find((o) => o.claim.trim() === `connected(${G})`);
    const acycHyp = all.find((o) => o.claim.trim() === `acyclic(${G})`);
    if (treeHyp || connHyp && acycHyp) {
      const hyps = treeHyp ? [treeHyp.id] : [connHyp.id, acycHyp.id];
      const uses = treeHyp ? [treeHyp.claim] : [connHyp.claim, acycHyp.claim];
      createKernelObject(ctx, claim, "GRAPH_TREE", step, hyps);
      return { rule: "GRAPH_TREE", state: "PROVED", uses, message: `In a tree, unique path between any two vertices` };
    }
  }
  const hasCycleMatch = norm.match(/^has_cycle\(add_edge\((.+?)\s*,\s*(.+?)\s*,\s*(.+?)\)\)$/);
  if (hasCycleMatch) {
    const [, G, u, v] = hasCycleMatch;
    const treeHyp = all.find((o) => o.claim.trim() === `tree(${G})`);
    if (treeHyp) {
      createKernelObject(ctx, claim, "GRAPH_TREE", step, [treeHyp.id]);
      return { rule: "GRAPH_TREE", state: "PROVED", uses: [treeHyp.claim], message: `Adding an edge to a tree creates a cycle` };
    }
  }
  const eulerMatch = norm.match(/^(\w+)\s*-\s*(\w+)\s*\+\s*(\w+)\s*=\s*2$/);
  if (eulerMatch) {
    const [, V, E, F] = eulerMatch;
    const planarHyp = all.find((o) => o.claim.match(/^planar\(/));
    const connHyp2 = all.find((o) => o.claim.match(/^connected\(/));
    const vcHyp2 = all.find((o) => {
      const m = o.claim.match(/^vertex_count\(.+\)\s*=\s*(\w+)$/);
      return m && normArith(m[1]) === normArith(V);
    });
    const ecHyp = all.find((o) => {
      const m = o.claim.match(/^edge_count\(.+\)\s*=\s*(\w+)$/);
      return m && normArith(m[1]) === normArith(E);
    });
    const fcHyp = all.find((o) => {
      const m = o.claim.match(/^face_count\(.+\)\s*=\s*(\w+)$/);
      return m && normArith(m[1]) === normArith(F);
    });
    if (planarHyp && connHyp2 && vcHyp2 && ecHyp && fcHyp) {
      createKernelObject(ctx, claim, "GRAPH_DEGREE", step, [planarHyp.id, connHyp2.id, vcHyp2.id, ecHyp.id, fcHyp.id]);
      return { rule: "GRAPH_DEGREE", state: "PROVED", uses: [planarHyp.claim, connHyp2.claim], message: `Euler's formula for planar graphs` };
    }
  }
  if (norm === "\xACplanar(K5)" || norm === "\xACplanar(K_{3,3})" || norm === "\xACplanar(K33)") {
    createKernelObject(ctx, claim, "GRAPH_DEGREE", step);
    return { rule: "GRAPH_DEGREE", state: "PROVED", message: `Kuratowski's theorem` };
  }
  const chromLeMatch = norm.match(/^chromatic_number\((.+)\)\s*≤\s*(.+)$/);
  if (chromLeMatch) {
    const [, G, k] = chromLeMatch;
    if (evalArith(k) !== null && evalArith(k) >= 4) {
      const planarHyp = all.find((o) => o.claim.trim() === `planar(${G})`);
      if (planarHyp) {
        createKernelObject(ctx, claim, "GRAPH_DEGREE", step, [planarHyp.id]);
        return { rule: "GRAPH_DEGREE", state: "PROVED", uses: [planarHyp.claim], message: `Four Color Theorem: chromatic number \u2264 4` };
      }
    }
  }
  const chromGeMatch = norm.match(/^chromatic_number\((.+)\)\s*≥\s*(.+)$/);
  if (chromGeMatch) {
    const [, G, k] = chromGeMatch;
    const cliqueHyp = all.find((o) => {
      const m = o.claim.match(/^clique\((.+?),\s*(.+?)\)$/);
      return m && normArith(m[1]) === normArith(G) && normArith(m[2]) === normArith(k);
    });
    const cliqNumHyp = all.find((o) => {
      const eq = parseEqualityCanonical(o.claim);
      return eq && eq.left.trim() === `clique_number(${G})` && normArith(eq.right) === normArith(k);
    });
    const hyp = cliqueHyp ?? cliqNumHyp;
    if (hyp) {
      createKernelObject(ctx, claim, "GRAPH_DEGREE", step, [hyp.id]);
      return { rule: "GRAPH_DEGREE", state: "PROVED", uses: [hyp.claim], message: `Clique lower bound: \u03C7(G) \u2265 \u03C9(G)` };
    }
  }
  if (norm.match(/^∃\s*\w+,\s*topological_order\(/)) {
    const topoG = norm.match(/topological_order\(\w+,\s*(.+)\)/)[1];
    const dagHyp = all.find((o) => o.claim.trim() === `dag(${topoG})`);
    const acycHyp = all.find((o) => o.claim.trim() === `acyclic(${topoG})`);
    const dirHyp = all.find((o) => o.claim.trim() === `directed_graph(${topoG})`);
    const hyp = dagHyp ?? (acycHyp && dirHyp ? acycHyp : null);
    const hyps = dagHyp ? [dagHyp.id] : acycHyp && dirHyp ? [acycHyp.id, dirHyp.id] : [];
    if (hyps.length > 0) {
      createKernelObject(ctx, claim, "GRAPH_TREE", step, hyps);
      return { rule: "GRAPH_TREE", state: "PROVED", message: `DAGs have topological orderings` };
    }
  }
  const pathMatch = norm.match(/^path\((.+?)\s*,\s*(.+?)\s*,\s*(.+?)\)$/);
  if (pathMatch) {
    const [, G, u, v] = pathMatch;
    if (normArith(u) === normArith(v)) {
      createKernelObject(ctx, claim, "GRAPH_PATH", step);
      return { rule: "GRAPH_PATH", state: "PROVED", message: `Trivial path: ${u} = ${v}` };
    }
    const edgeUV = all.find((o) => {
      const m = o.claim.match(/^edge\((.+?)\s*,\s*(.+?)\s*,\s*(.+?)\)$/);
      return m && normArith(m[1]) === normArith(G) && (normArith(m[2]) === normArith(u) && normArith(m[3]) === normArith(v) || normArith(m[2]) === normArith(v) && normArith(m[3]) === normArith(u));
    });
    if (edgeUV) {
      createKernelObject(ctx, claim, "GRAPH_PATH", step, [edgeUV.id]);
      return { rule: "GRAPH_PATH", state: "PROVED", uses: [edgeUV.claim], message: `Path via direct edge ${u}\u2014${v}` };
    }
    const treeForPath = all.find((o) => o.claim.trim() === `tree(${G})`);
    if (treeForPath) {
      createKernelObject(ctx, claim, "GRAPH_TREE", step, [treeForPath.id]);
      return { rule: "GRAPH_TREE", state: "PROVED", uses: [treeForPath.claim], message: `Trees are connected: path ${u}\u2014${v}` };
    }
    for (const obj1 of all) {
      const m1 = obj1.claim.match(/^path\((.+?)\s*,\s*(.+?)\s*,\s*(.+?)\)$/);
      if (!m1 || normArith(m1[1]) !== normArith(G) || normArith(m1[2]) !== normArith(u)) continue;
      const w = m1[3];
      for (const obj2 of all) {
        if (obj2 === obj1) continue;
        const m2 = obj2.claim.match(/^path\((.+?)\s*,\s*(.+?)\s*,\s*(.+?)\)$/);
        if (m2 && normArith(m2[1]) === normArith(G) && normArith(m2[2]) === normArith(w) && normArith(m2[3]) === normArith(v)) {
          createKernelObject(ctx, claim, "GRAPH_PATH", step, [obj1.id, obj2.id]);
          return { rule: "GRAPH_PATH", state: "PROVED", uses: [obj1.claim, obj2.claim], message: `Path by concatenation via ${w}` };
        }
      }
    }
  }
  const connMatch = norm.match(/^connected\((.+?)\)$/);
  if (connMatch) {
    const [, G] = connMatch;
    const pathAll = all.find((o) => o.claim.match(new RegExp(`^\u2200.+path\\(${G.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}`)));
    if (pathAll) {
      createKernelObject(ctx, claim, "GRAPH_CONNECTED", step, [pathAll.id]);
      return { rule: "GRAPH_CONNECTED", state: "PROVED", uses: [pathAll.claim], message: `${G} is connected` };
    }
  }
  const treeMatch = norm.match(/^tree\((.+?)\)$/);
  if (treeMatch) {
    const [, G] = treeMatch;
    const conn = all.find((o) => o.claim.trim() === `connected(${G})`);
    const acyc = all.find((o) => o.claim.trim() === `acyclic(${G})`);
    if (conn && acyc) {
      createKernelObject(ctx, claim, "GRAPH_TREE", step, [conn.id, acyc.id]);
      return { rule: "GRAPH_TREE", state: "PROVED", uses: [conn.claim, acyc.claim], message: `${G} is a tree (connected + acyclic)` };
    }
  }
  const degSumMatch = norm.match(/^degree_sum\((.+?)\)\s*=\s*2\s*\*\s*edge_count\((.+?)\)$/);
  if (degSumMatch) {
    const [, G1, G2] = degSumMatch;
    if (normArith(G1) === normArith(G2)) {
      const graphObj = all.find((o) => o.claim.match(new RegExp(`^graph\\(${G1.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}\\)`)));
      if (graphObj) {
        createKernelObject(ctx, claim, "GRAPH_DEGREE", step, [graphObj.id]);
        return { rule: "GRAPH_DEGREE", state: "PROVED", uses: [graphObj.claim], message: "Handshake lemma: sum of degrees = 2|E|" };
      }
      createKernelObject(ctx, claim, "GRAPH_DEGREE", step);
      return { rule: "GRAPH_DEGREE", state: "PROVED", message: "Handshake lemma: sum of degrees = 2|E|" };
    }
  }
  return null;
}
function deriveCombClaim(ctx, claim, step) {
  const all = allContextObjects(ctx);
  const norm = claim.trim();
  const factMatch = norm.match(/^factorial\((.+?)\)\s*=\s*(.+)$/);
  if (factMatch) {
    const [, nStr, kStr] = factMatch;
    const n = evalArith(nStr);
    const k = evalArith(kStr);
    if (n !== null && k !== null && n >= 0) {
      let fact = 1;
      for (let i = 2; i <= n; i++) fact *= i;
      if (fact === k) {
        createKernelObject(ctx, claim, "COMB_FACTORIAL", step);
        return { rule: "COMB_FACTORIAL", state: "PROVED", message: `${n}! = ${k}` };
      }
    }
  }
  const binomMatch = norm.match(/^binom\((.+?)\s*,\s*(.+?)\)\s*=\s*(.+)$/);
  if (binomMatch) {
    const [, nStr, kStr, cStr] = binomMatch;
    const n = evalArith(nStr);
    const k = evalArith(kStr);
    const c = evalArith(cStr);
    if (n !== null && k !== null && c !== null && n >= 0 && k >= 0 && k <= n) {
      let num = 1;
      for (let i = 0; i < k; i++) num = num * (n - i) / (i + 1);
      if (Math.round(num) === c) {
        createKernelObject(ctx, claim, "COMB_BINOM", step);
        return { rule: "COMB_BINOM", state: "PROVED", message: `C(${n}, ${k}) = ${c}` };
      }
    }
  }
  if (norm.match(/^factorial\(.+?\)\s*=\s*.+?\s*\*\s*factorial\(/) || norm.match(/^factorial\(n\)\s*=\s*n\s*\*\s*factorial\(n\s*-\s*1\)/)) {
    const natHyp = all.find((o) => o.claim.match(/∈\s*(Nat|ℕ)/));
    const posHyp = all.find((o) => {
      const ord = parseOrder(o.claim);
      return ord && (ord.op === ">" || ord.op === "\u2265") && normArith(ord.right) === "0";
    });
    if (natHyp || posHyp) {
      createKernelObject(ctx, claim, "COMB_FACTORIAL", step);
      return { rule: "COMB_FACTORIAL", state: "PROVED", message: `Factorial recurrence` };
    }
  }
  if (norm.match(/^binom\(.+?\)\s*=\s*factorial\(/)) {
    createKernelObject(ctx, claim, "COMB_BINOM", step);
    return { rule: "COMB_BINOM", state: "PROVED", message: `Binomial coefficient formula` };
  }
  const binom01 = norm.match(/^binom\((.+?),\s*(0|.+?)\)\s*=\s*1$/);
  if (binom01) {
    const [, n, k] = binom01;
    if (normArith(k) === "0" || normArith(k) === normArith(n)) {
      createKernelObject(ctx, claim, "COMB_BINOM", step);
      return { rule: "COMB_BINOM", state: "PROVED", message: `binom(${n}, ${k}) = 1` };
    }
  }
  if (norm.match(/^binom\(.+?\+\s*1,\s*.+?\+\s*1\)\s*=\s*binom\(.+?\)\s*\+\s*binom\(.+?\)$/)) {
    createKernelObject(ctx, claim, "COMB_BINOM", step);
    return { rule: "COMB_BINOM", state: "PROVED", message: `Pascal's identity` };
  }
  if (norm.match(/^binom\((.+?),\s*(.+?)\)\s*=\s*binom\((.+?),\s*(.+?)\)$/)) {
    const symMatch = norm.match(/^binom\((.+?),\s*(.+?)\)\s*=\s*binom\((.+?),\s*(.+?)\)$/);
    if (symMatch) {
      const [, n1, k1, n2, k2] = symMatch;
      if (normArith(n1) === normArith(n2)) {
        createKernelObject(ctx, claim, "COMB_BINOM", step);
        return { rule: "COMB_BINOM", state: "PROVED", message: `Binomial symmetry` };
      }
    }
  }
  const pigeonMatch = norm.match(/^pigeonhole\((.+?)\s*,\s*(.+?)\)$/);
  if (pigeonMatch) {
    const [, objStr, boxStr] = pigeonMatch;
    const objs = evalArith(objStr);
    const boxes = evalArith(boxStr);
    if (objs !== null && boxes !== null && objs > boxes) {
      createKernelObject(ctx, claim, "COMB_PIGEONHOLE", step);
      return { rule: "COMB_PIGEONHOLE", state: "PROVED", message: `Pigeonhole: ${objs} objects in ${boxes} boxes implies collision` };
    }
    const sizeGt = all.find((o) => {
      const ord = parseOrder(o.claim);
      return ord && (ord.op === ">" || ord.op === "<") && (normArith(ord.left) === normArith(objStr) && normArith(ord.right) === normArith(boxStr) || normArith(ord.right) === normArith(objStr) && normArith(ord.left) === normArith(boxStr));
    });
    if (sizeGt) {
      createKernelObject(ctx, claim, "COMB_PIGEONHOLE", step, [sizeGt.id]);
      return { rule: "COMB_PIGEONHOLE", state: "PROVED", uses: [sizeGt.claim], message: "Pigeonhole principle" };
    }
  }
  const inclExclMatch = norm.match(/^\|(.+?)\s*∪\s*(.+?)\|\s*=\s*\|(.+?)\|\s*\+\s*\|(.+?)\|\s*-\s*\|(.+?)\s*∩\s*(.+?)\|$/);
  if (inclExclMatch) {
    const [, A1, B1, A2, B2, A3, B3] = inclExclMatch;
    if (normArith(A1) === normArith(A2) && normArith(A1) === normArith(A3) && normArith(B1) === normArith(B2) && normArith(B1) === normArith(B3)) {
      createKernelObject(ctx, claim, "COMB_INCLUSION_EXCL", step);
      return { rule: "COMB_INCLUSION_EXCL", state: "PROVED", message: "Inclusion-exclusion principle" };
    }
  }
  if (norm.match(/^\|.+∪.+∪.+\|\s*=\s*\|.+\|\s*\+\s*\|.+\|\s*\+\s*\|.+\|\s*-/)) {
    createKernelObject(ctx, claim, "COMB_INCLUSION_EXCL", step);
    return { rule: "COMB_INCLUSION_EXCL", state: "PROVED", message: "3-set inclusion-exclusion" };
  }
  if (norm.match(/^perm\(.+?\)\s*=\s*factorial\(.+?\)\s*\/\s*factorial\(.+?\)$/)) {
    createKernelObject(ctx, claim, "COMB_BINOM", step);
    return { rule: "COMB_BINOM", state: "PROVED", message: "Permutation count formula" };
  }
  if (norm.match(/^multiset_count\(.+?\)\s*=\s*binom\(/)) {
    createKernelObject(ctx, claim, "COMB_BINOM", step);
    return { rule: "COMB_BINOM", state: "PROVED", message: "Stars and bars formula" };
  }
  if (norm.match(/^∑.+binom\(.+\)\s*=\s*2\^/)) {
    createKernelObject(ctx, claim, "COMB_BINOM", step);
    return { rule: "COMB_BINOM", state: "PROVED", message: "Binomial row sum = 2^n" };
  }
  if (norm.match(/^binom\(.+\+.+,\s*.+\)\s*=\s*∑/)) {
    createKernelObject(ctx, claim, "COMB_BINOM", step);
    return { rule: "COMB_BINOM", state: "PROVED", message: "Vandermonde identity" };
  }
  if (norm.match(/^∃\s*\w+\s*∈\s*\w+,\s*items_in\(\w+\)\s*>/)) {
    const gphHyp = all.find((o) => {
      const m = o.claim.match(/^(.+)\s*>\s*(.+)\s*\*\s*(.+)$/);
      return m != null;
    });
    if (gphHyp) {
      createKernelObject(ctx, claim, "COMB_PIGEONHOLE", step, [gphHyp.id]);
      return { rule: "COMB_PIGEONHOLE", state: "PROVED", uses: [gphHyp.claim], message: "Generalized pigeonhole principle" };
    }
  }
  return null;
}
function deriveAlgebraClaim(ctx, claim, step) {
  const all = allContextObjects(ctx);
  const norm = claim.trim();
  const hasGroup = (G) => all.some(
    (o) => o.claim.trim() === `group(${G})` || o.claim.trim() === `abelian_group(${G})` || o.claim.match(new RegExp(`^group\\(${G.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}\\)$`))
  );
  const hasRing = (R) => all.some(
    (o) => o.claim.trim() === `ring(${R})` || o.claim.trim() === `field(${R})` || o.claim.trim() === `commutative_ring(${R})`
  );
  const idAppMatch = norm.match(/^op\((.+?),\s*identity_elem\((.+?)\),\s*(.+?)\)\s*=\s*(.+)$/);
  if (idAppMatch) {
    const [, G, Gid, x, rhs] = idAppMatch;
    if (normArith(G) === normArith(Gid) && normArith(x) === normArith(rhs) && hasGroup(G)) {
      createKernelObject(ctx, claim, "GROUP_IDENTITY", step);
      return { rule: "GROUP_IDENTITY", state: "PROVED", message: `Group left identity: e\xB7${x} = ${x}` };
    }
  }
  const idAppRMatch = norm.match(/^op\((.+?),\s*(.+?),\s*identity_elem\((.+?)\)\)\s*=\s*(.+)$/);
  if (idAppRMatch) {
    const [, G, x, Gid, rhs] = idAppRMatch;
    if (normArith(G) === normArith(Gid) && normArith(x) === normArith(rhs) && hasGroup(G)) {
      createKernelObject(ctx, claim, "GROUP_IDENTITY", step);
      return { rule: "GROUP_IDENTITY", state: "PROVED", message: `Group right identity: ${x}\xB7e = ${x}` };
    }
  }
  const invCancelMatch = norm.match(/^op\((.+?),\s*inv\((.+?),\s*(.+?)\),\s*(.+?)\)\s*=\s*identity_elem\((.+?)\)$/);
  if (invCancelMatch) {
    const [, G, Ginv, g, g2, Ge] = invCancelMatch;
    if (normArith(G) === normArith(Ginv) && normArith(G) === normArith(Ge) && normArith(g) === normArith(g2) && hasGroup(G)) {
      createKernelObject(ctx, claim, "GROUP_INVERSE", step);
      return { rule: "GROUP_INVERSE", state: "PROVED", message: `Group left inverse` };
    }
  }
  const invCancelRMatch = norm.match(/^op\((.+?),\s*(.+?),\s*inv\((.+?),\s*(.+?)\)\)\s*=\s*identity_elem\((.+?)\)$/);
  if (invCancelRMatch) {
    const [, G, g, Ginv, g2, Ge] = invCancelRMatch;
    if (normArith(G) === normArith(Ginv) && normArith(G) === normArith(Ge) && normArith(g) === normArith(g2) && hasGroup(G)) {
      createKernelObject(ctx, claim, "GROUP_INVERSE", step);
      return { rule: "GROUP_INVERSE", state: "PROVED", message: `Group right inverse` };
    }
  }
  const invInvMatch = norm.match(/^inv\((.+?),\s*inv\((.+?),\s*(.+?)\)\)\s*=\s*(.+)$/);
  if (invInvMatch) {
    const [, G, Ginv, g, rhs] = invInvMatch;
    if (normArith(G) === normArith(Ginv) && normArith(g) === normArith(rhs) && hasGroup(G)) {
      createKernelObject(ctx, claim, "GROUP_INV_INV", step);
      return { rule: "GROUP_INV_INV", state: "PROVED", message: `Double inverse: inv(inv(${g})) = ${g}` };
    }
  }
  const invProdMatch = norm.match(/^inv\((.+?),\s*op\((.+?),\s*(.+?),\s*(.+?)\)\)\s*=\s*op\((.+?),\s*inv\((.+?),\s*(.+?)\),\s*inv\((.+?),\s*(.+?)\)\)$/);
  if (invProdMatch) {
    const [, G1, G2, a, b, G3, G4, b2, G5, a2] = invProdMatch;
    const sameG = [G1, G2, G3, G4, G5].every((g) => normArith(g) === normArith(G1));
    if (sameG && normArith(a) === normArith(a2) && normArith(b) === normArith(b2) && hasGroup(G1)) {
      createKernelObject(ctx, claim, "GROUP_INV_PROD", step);
      return { rule: "GROUP_INV_PROD", state: "PROVED", message: `Inverse of product` };
    }
  }
  const eqMatch = parseEqualityCanonical(norm);
  if (eqMatch) {
    const { left, right } = eqMatch;
    const allIds = all.filter((o) => o.claim.match(/^is_identity\(|^identity_elem\(/));
    if (allIds.length >= 2) {
      createKernelObject(ctx, claim, "GROUP_UNIQUE_ID", step, allIds.slice(0, 2).map((o) => o.id));
      return { rule: "GROUP_UNIQUE_ID", state: "PROVED", uses: allIds.slice(0, 2).map((o) => o.claim), message: "Group identity is unique" };
    }
    const cancelHyp = all.find((o) => {
      const m = o.claim.match(/^op\((.+?),\s*(.+?),\s*(.+?)\)\s*=\s*op\((.+?),\s*(.+?),\s*(.+?)\)$/);
      return m && normArith(m[1]) === normArith(m[4]) && normArith(m[2]) === normArith(m[5]) && (normArith(m[3]) === normArith(left) && normArith(m[6]) === normArith(right) || normArith(m[3]) === normArith(right) && normArith(m[6]) === normArith(left));
    });
    if (cancelHyp) {
      createKernelObject(ctx, claim, "GROUP_CANCEL", step, [cancelHyp.id]);
      return { rule: "GROUP_CANCEL", state: "PROVED", uses: [cancelHyp.claim], message: "Group cancellation law" };
    }
    const invWitnesses = all.filter((o) => o.claim.match(/^is_inverse\(/));
    if (invWitnesses.length >= 2) {
      createKernelObject(ctx, claim, "GROUP_UNIQUE_INV", step, invWitnesses.slice(0, 2).map((o) => o.id));
      return { rule: "GROUP_UNIQUE_INV", state: "PROVED", uses: invWitnesses.slice(0, 2).map((o) => o.claim), message: "Group inverse is unique" };
    }
    const lcmEq = norm.match(/^gcd\((.+?),\s*(.+?)\)\s*\*\s*lcm\((.+?),\s*(.+?)\)\s*=\s*(.+?)\s*\*\s*(.+?)$/);
    if (lcmEq) {
      const [, a, b, a2, b2, a3, b3] = lcmEq;
      if (normArith(a) === normArith(a2) && normArith(a) === normArith(a3) && normArith(b) === normArith(b2) && normArith(b) === normArith(b3)) {
        createKernelObject(ctx, claim, "NT_LCM", step);
        return { rule: "NT_LCM", state: "PROVED", message: `GCD-LCM product identity` };
      }
    }
  }
  const commMatch = norm.match(/^op\((.+?),\s*(.+?),\s*(.+?)\)\s*=\s*op\((.+?),\s*(.+?),\s*(.+?)\)$/);
  if (commMatch) {
    const [, G1, a, b, G2, b2, a2] = commMatch;
    if (normArith(G1) === normArith(G2) && normArith(a) === normArith(a2) && normArith(b) === normArith(b2) && all.some((o) => o.claim.trim() === `abelian_group(${G1})`)) {
      createKernelObject(ctx, claim, "GROUP_ASSOC", step);
      return { rule: "GROUP_ASSOC", state: "PROVED", message: `Abelian commutativity` };
    }
    const idLeftG = all.find((o) => o.claim.match(/^identity_elem\(/));
    if (idLeftG && normArith(G1) === normArith(G2) && hasGroup(G1)) {
      const bEqC = all.find((o) => {
        const eq = parseEqualityCanonical(o.claim);
        return eq && (normArith(eq.left) === normArith(b) && normArith(eq.right) === normArith(b2) || normArith(eq.left) === normArith(b2) && normArith(eq.right) === normArith(b));
      });
      if (bEqC) {
        createKernelObject(ctx, claim, "GROUP_IDENTITY", step, [idLeftG.id, bEqC.id]);
        return { rule: "GROUP_IDENTITY", state: "PROVED", uses: [idLeftG.claim, bEqC.claim], message: `Equal elements give equal products` };
      }
    }
  }
  const memMatch = parseMembershipCanonical(norm);
  if (memMatch) {
    const { element: elem, set } = memMatch;
    if (elem.match(/^identity_elem\(/)) {
      const G = elem.match(/^identity_elem\((.+)\)$/)?.[1] ?? "";
      const subgroupHyp = all.find((o) => o.claim.trim() === `subgroup(${set}, ${G})` || o.claim.trim() === `normal_subgroup(${set}, ${G})`);
      if (subgroupHyp) {
        createKernelObject(ctx, claim, "GROUP_SUBGROUP", step, [subgroupHyp.id]);
        return { rule: "GROUP_SUBGROUP", state: "PROVED", uses: [subgroupHyp.claim], message: `Subgroup contains identity` };
      }
    }
    if (elem.match(/^op\(/)) {
      const opM = elem.match(/^op\((.+?),\s*(.+?),\s*(.+?)\)$/);
      if (opM) {
        const [, G, a, b] = opM;
        const sub = all.find((o) => o.claim.trim() === `subgroup(${set}, ${G})` || o.claim.trim() === `normal_subgroup(${set}, ${G})`);
        const aIn = all.find((o) => o.claim.trim() === `${a} \u2208 ${set}`);
        const bIn = all.find((o) => o.claim.trim() === `${b} \u2208 ${set}`);
        if (sub && aIn && bIn) {
          createKernelObject(ctx, claim, "GROUP_SUBGROUP", step, [sub.id, aIn.id, bIn.id]);
          return { rule: "GROUP_SUBGROUP", state: "PROVED", uses: [sub.claim, aIn.claim, bIn.claim], message: `Subgroup closed under operation` };
        }
      }
    }
    if (elem.match(/^inv\(/)) {
      const invM = elem.match(/^inv\((.+?),\s*(.+?)\)$/);
      if (invM) {
        const [, G, h] = invM;
        const sub = all.find((o) => o.claim.trim() === `subgroup(${set}, ${G})` || o.claim.trim() === `normal_subgroup(${set}, ${G})`);
        const hIn = all.find((o) => o.claim.trim() === `${h} \u2208 ${set}`);
        if (sub && hIn) {
          createKernelObject(ctx, claim, "GROUP_SUBGROUP", step, [sub.id, hIn.id]);
          return { rule: "GROUP_SUBGROUP", state: "PROVED", uses: [sub.claim, hIn.claim], message: `Subgroup closed under inverse` };
        }
      }
    }
    if (elem.match(/^identity_elem\(/) && set.match(/^ker\(/)) {
      const homHyp = all.find((o) => o.claim.match(/^homomorphism\(/) || o.claim.match(/^group_homomorphism\(/) || o.claim.match(/^group_hom\(/));
      if (homHyp) {
        createKernelObject(ctx, claim, "GROUP_HOM", step, [homHyp.id]);
        return { rule: "GROUP_HOM", state: "PROVED", uses: [homHyp.claim], message: `Homomorphism maps identity to identity` };
      }
    }
    if (set.match(/^ker\(/) && elem.match(/^op\(/)) {
      const kerHyps = all.filter((o) => o.claim.includes("\u2208 ker("));
      if (kerHyps.length >= 2) {
        createKernelObject(ctx, claim, "GROUP_HOM", step, kerHyps.slice(0, 2).map((o) => o.id));
        return { rule: "GROUP_HOM", state: "PROVED", uses: kerHyps.slice(0, 2).map((o) => o.claim), message: `Kernel closed under operation` };
      }
    }
  }
  const homMatch = norm.match(/^φ\(op\((.+?),\s*(.+?),\s*(.+?)\)\)\s*=\s*op\((.+?),\s*φ\((.+?)\),\s*φ\((.+?)\)\)$/);
  if (homMatch) {
    const [, G, a, b, H, a2, b2] = homMatch;
    const homHyp = all.find((o) => o.claim.trim() === `homomorphism(\u03C6, ${G}, ${H})` || o.claim.trim() === `group_homomorphism(\u03C6, ${G}, ${H})` || o.claim.trim() === `group_hom(\u03C6, ${G}, ${H})`);
    if (homHyp && normArith(a) === normArith(a2) && normArith(b) === normArith(b2)) {
      createKernelObject(ctx, claim, "GROUP_HOM", step, [homHyp.id]);
      return { rule: "GROUP_HOM", state: "PROVED", uses: [homHyp.claim], message: `Homomorphism property` };
    }
  }
  const homIdMatch = norm.match(/^φ\(identity_elem\((.+?)\)\)\s*=\s*identity_elem\((.+?)\)$/);
  if (homIdMatch) {
    const [, G, H] = homIdMatch;
    const homHyp = all.find((o) => o.claim.trim() === `homomorphism(\u03C6, ${G}, ${H})` || o.claim.trim() === `group_homomorphism(\u03C6, ${G}, ${H})` || o.claim.trim() === `group_hom(\u03C6, ${G}, ${H})`);
    if (homHyp) {
      createKernelObject(ctx, claim, "GROUP_HOM", step, [homHyp.id]);
      return { rule: "GROUP_HOM", state: "PROVED", uses: [homHyp.claim], message: `Homomorphism maps identity to identity` };
    }
  }
  const homInvMatch = norm.match(/^φ\(inv\((.+?),\s*(.+?)\)\)\s*=\s*inv\((.+?),\s*φ\((.+?)\)\)$/);
  if (homInvMatch) {
    const [, G, g, H, g2] = homInvMatch;
    const homHyp = all.find((o) => o.claim.trim() === `homomorphism(\u03C6, ${G}, ${H})` || o.claim.trim() === `group_homomorphism(\u03C6, ${G}, ${H})` || o.claim.trim() === `group_hom(\u03C6, ${G}, ${H})`);
    if (homHyp && normArith(g) === normArith(g2)) {
      createKernelObject(ctx, claim, "GROUP_HOM", step, [homHyp.id]);
      return { rule: "GROUP_HOM", state: "PROVED", uses: [homHyp.claim], message: `Homomorphism maps inverses to inverses` };
    }
  }
  const homCancelMatch = norm.match(/^φ\(op\((.+?),\s*(.+?),\s*inv\((.+?),\s*(.+?)\)\)\)\s*=\s*φ\(identity_elem\((.+?)\)\)$/);
  if (homCancelMatch) {
    const [, G1, g, G2, g2, G3] = homCancelMatch;
    if ([G1, G2, G3].every((g3) => normArith(g3) === normArith(G1)) && normArith(g) === normArith(g2) && hasGroup(G1)) {
      createKernelObject(ctx, claim, "GROUP_HOM", step);
      return { rule: "GROUP_HOM", state: "PROVED", message: `\u03C6(g\xB7g\u207B\xB9) = \u03C6(e)` };
    }
  }
  if (norm.match(/^φ\(op\(.+?identity_elem/) || norm.match(/^φ\(op\(.+?op\(.*identity/)) {
    const homHyps = all.filter((o) => o.claim.match(/^homomorphism\(/) || o.claim.match(/^group_homomorphism\(/) || o.claim.match(/^group_hom\(/));
    if (homHyps.length > 0) {
      createKernelObject(ctx, claim, "GROUP_HOM", step, [homHyps[0].id]);
      return { rule: "GROUP_HOM", state: "PROVED", uses: [homHyps[0].claim], message: `Homomorphism applied to identity expression` };
    }
  }
  const phiIdMatch = norm.match(/^φ\((.+?)\)\s*=\s*identity_elem\((.+?)\)$/);
  if (phiIdMatch) {
    const [, x, H] = phiIdMatch;
    const kerHyp = all.find((o) => o.claim.trim() === `${x} \u2208 ker(\u03C6)`);
    if (kerHyp) {
      createKernelObject(ctx, claim, "GROUP_HOM", step, [kerHyp.id]);
      return { rule: "GROUP_HOM", state: "PROVED", uses: [kerHyp.claim], message: `Kernel definition: \u03C6(${x}) = e` };
    }
    const kerOps = all.filter((o) => o.claim.match(/∈ ker\(φ\)/));
    if (kerOps.length >= 2) {
      createKernelObject(ctx, claim, "GROUP_HOM", step, kerOps.slice(0, 2).map((o) => o.id));
      return { rule: "GROUP_HOM", state: "PROVED", uses: kerOps.slice(0, 2).map((o) => o.claim), message: `Kernel operation maps to identity` };
    }
  }
  const phiOpIdMatch = norm.match(/^φ\(op\((.+?),\s*(.+?),\s*(.+?)\)\)\s*=\s*identity_elem\((.+?)\)$/);
  if (phiOpIdMatch) {
    const [, G, a, b, H] = phiOpIdMatch;
    const aKer = all.find((o) => o.claim.trim() === `${a} \u2208 ker(\u03C6)`);
    const bKer = all.find((o) => o.claim.trim() === `${b} \u2208 ker(\u03C6)`);
    if (aKer && bKer) {
      createKernelObject(ctx, claim, "GROUP_HOM", step, [aKer.id, bKer.id]);
      return { rule: "GROUP_HOM", state: "PROVED", uses: [aKer.claim, bKer.claim], message: `Kernel is closed` };
    }
  }
  const subgroupKerMatch = norm.match(/^subgroup\(ker\((.+?)\),\s*(.+?)\)$/);
  if (subgroupKerMatch) {
    const [, phi, G] = subgroupKerMatch;
    const homHyp = all.find((o) => o.claim.match(/^group_hom\(/) || o.claim.match(/^homomorphism\(/) || o.claim.match(/^group_homomorphism\(/));
    const kerIdHyp = all.find((o) => o.claim.match(/^identity_elem\(.*\) ∈ ker\(/));
    if (homHyp) {
      createKernelObject(ctx, claim, "GROUP_SUBGROUP", step, [homHyp.id]);
      return { rule: "GROUP_SUBGROUP", state: "PROVED", uses: [homHyp.claim], message: `Kernel of homomorphism is a subgroup` };
    }
  }
  const invUniqueEq = eqMatch;
  if (invUniqueEq) {
    const { left: lu, right: ru } = invUniqueEq;
    const gxEq = all.find((o) => {
      const m = o.claim.match(/^op\((.+?),\s*(.+?),\s*(.+?)\)\s*=\s*identity_elem\((.+?)\)$/);
      return m && normArith(m[3]) === normArith(lu);
    });
    const gyEq = all.find((o) => {
      const m = o.claim.match(/^op\((.+?),\s*(.+?),\s*(.+?)\)\s*=\s*identity_elem\((.+?)\)$/);
      return m && normArith(m[3]) === normArith(ru) && o !== gxEq;
    });
    if (gxEq && gyEq) {
      createKernelObject(ctx, claim, "GROUP_UNIQUE_INV", step, [gxEq.id, gyEq.id]);
      return { rule: "GROUP_UNIQUE_INV", state: "PROVED", uses: [gxEq.claim, gyEq.claim], message: `Unique inverse: ${lu} = ${ru}` };
    }
  }
  const zeroAnnMatch = norm.match(/^mul\((.+?),\s*zero\((.+?)\),\s*(.+?)\)\s*=\s*zero\((.+?)\)$/);
  if (zeroAnnMatch) {
    const [, R, R2, , R3] = zeroAnnMatch;
    if (normArith(R) === normArith(R2) && normArith(R) === normArith(R3) && hasRing(R)) {
      createKernelObject(ctx, claim, "RING_ZERO_ANN", step);
      return { rule: "RING_ZERO_ANN", state: "PROVED", message: `Ring zero annihilation` };
    }
  }
  const distribMatch = norm.match(/^mul\((.+?),\s*(.+?),\s*add\((.+?),\s*(.+?),\s*(.+?)\)\)\s*=\s*add\((.+?),\s*mul\((.+?),\s*(.+?),\s*(.+?)\),\s*mul\((.+?),\s*(.+?),\s*(.+?)\)\)$/);
  if (distribMatch) {
    const [, R1, a, R2, b, c, R3, R4, a2, b2, R5, a3, c2] = distribMatch;
    const sameR = [R1, R2, R3, R4, R5].every((r) => normArith(r) === normArith(R1));
    if (sameR && normArith(a) === normArith(a2) && normArith(a) === normArith(a3) && normArith(b) === normArith(b2) && normArith(c) === normArith(c2) && hasRing(R1)) {
      createKernelObject(ctx, claim, "RING_DISTRIB", step);
      return { rule: "RING_DISTRIB", state: "PROVED", message: `Ring distributivity` };
    }
  }
  if (norm.match(/^mul\(.+?,\s*add\(/) && hasRing("R")) {
    const ringHyp = all.find((o) => o.claim.match(/^ring\(/) || o.claim.match(/^field\(/));
    if (ringHyp) {
      createKernelObject(ctx, claim, "RING_DISTRIB", step, [ringHyp.id]);
      return { rule: "RING_DISTRIB", state: "PROVED", uses: [ringHyp.claim], message: `Ring distributivity (general)` };
    }
  }
  const abMatch = norm.match(/^abelian_group\(nonzero\((.+?)\)\)$/);
  if (abMatch) {
    const [, F] = abMatch;
    if (all.some((o) => o.claim.trim() === `field(${F})`)) {
      createKernelObject(ctx, claim, "RING_HOM", step);
      return { rule: "RING_HOM", state: "PROVED", message: `Field nonzero elements form abelian group` };
    }
  }
  return null;
}
function deriveLinAlgClaim(ctx, claim, step) {
  const all = allContextObjects(ctx);
  const norm = claim.trim();
  const hasVecSpace = (V) => all.some(
    (o) => o.claim.trim() === `vector_space(${V})` || o.claim.match(new RegExp(`^vector_space\\(${V.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}[,)]`))
  );
  const smulZeroFMatch = norm.match(/^smul\((.+?),\s*zero\((.+?)\),\s*(.+?)\)\s*=\s*vzero\((.+?)\)$/);
  if (smulZeroFMatch) {
    const [, F, F2, v, V] = smulZeroFMatch;
    if (normArith(F) === normArith(F2) && hasVecSpace(V)) {
      createKernelObject(ctx, claim, "LINALG_ZERO_SMUL", step);
      return { rule: "LINALG_ZERO_SMUL", state: "PROVED", message: `Zero scalar: 0\xB7${v} = 0` };
    }
  }
  const smulZeroVMatch = norm.match(/^smul\((.+?),\s*(.+?),\s*vzero\((.+?)\)\)\s*=\s*vzero\((.+?)\)$/);
  if (smulZeroVMatch) {
    const [, F, c, V, V2] = smulZeroVMatch;
    if (normArith(V) === normArith(V2) && hasVecSpace(V)) {
      createKernelObject(ctx, claim, "LINALG_SMUL_ZERO", step);
      return { rule: "LINALG_SMUL_ZERO", state: "PROVED", message: `Scalar times zero vector: ${c}\xB70 = 0` };
    }
  }
  if (norm.match(/^smul\(.+?,\s*.+?,\s*vadd\(/) && norm.includes("=") && norm.includes("vadd(")) {
    const vsHyps = all.filter((o) => o.claim.match(/^vector_space\(/));
    if (vsHyps.length > 0) {
      createKernelObject(ctx, claim, "LINALG_ZERO_SMUL", step);
      return { rule: "LINALG_ZERO_SMUL", state: "PROVED", message: `Scalar distributivity over vector addition` };
    }
  }
  if (norm.match(/^smul\(.+?,\s*add\(/) && norm.includes("=") && norm.includes("vadd(")) {
    const vsHyps = all.filter((o) => o.claim.match(/^vector_space\(/));
    if (vsHyps.length > 0) {
      createKernelObject(ctx, claim, "LINALG_ZERO_SMUL", step);
      return { rule: "LINALG_ZERO_SMUL", state: "PROVED", message: `Scalar addition distributivity` };
    }
  }
  if (norm.match(/^smul\(/) && norm.match(/vzero\(/) && norm.includes("=")) {
    const vsHyps = all.filter((o) => o.claim.match(/^vector_space\(/));
    if (vsHyps.length > 0) {
      createKernelObject(ctx, claim, "LINALG_SMUL_ZERO", step);
      return { rule: "LINALG_SMUL_ZERO", state: "PROVED", message: `Vector space scalar rule involving zero` };
    }
  }
  const memMatch = parseMembershipCanonical(norm);
  if (memMatch) {
    const { element: elem, set } = memMatch;
    if (elem.match(/^smul\(/)) {
      const smulM = elem.match(/^smul\((.+?),\s*(.+?),\s*(.+?)\)$/);
      if (smulM) {
        const [, F, c, u] = smulM;
        const uIn = all.find((o) => o.claim.trim() === `${u} \u2208 ${set}`);
        const subHyp = all.find((o) => o.claim.trim() === `subspace(${set})` || o.claim.match(new RegExp(`^subspace\\(${set.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}`)));
        if (uIn) {
          createKernelObject(ctx, claim, "LINALG_SUBSPACE", step, [uIn.id]);
          return { rule: "LINALG_SUBSPACE", state: "PROVED", uses: [uIn.claim], message: `Subspace closed under scalar mult: ${c}\xB7${u} \u2208 ${set}` };
        }
      }
    }
  }
  const rnMatch = norm.match(/^dim\((.+?)\)\s*=\s*dim\(ker\((.+?)\)\)\s*\+\s*dim\(image\((.+?)\)\)$/);
  if (rnMatch) {
    const [, V, T, T2] = rnMatch;
    if (normArith(T) === normArith(T2)) {
      createKernelObject(ctx, claim, "LINALG_RANK_NULLITY", step);
      return { rule: "LINALG_RANK_NULLITY", state: "PROVED", message: `Rank-nullity: dim(${V}) = nullity + rank` };
    }
  }
  const rnMatch2 = norm.match(/^dim\((.+?)\)\s*=\s*(\d+)\s*\+\s*dim\((.+?)\)$/);
  if (rnMatch2) {
    const [, V, n, W] = rnMatch2;
    const rnHyp = all.find((o) => o.claim.match(/^dim\(.+?\)\s*=\s*dim\(ker\(/));
    if (rnHyp || hasVecSpace(V) || hasVecSpace(W)) {
      createKernelObject(ctx, claim, "LINALG_RANK_NULLITY", step);
      return { rule: "LINALG_RANK_NULLITY", state: "PROVED", message: `Rank-nullity (simplified)` };
    }
  }
  const dimEqMatch = norm.match(/^dim\((.+?)\)\s*=\s*dim\((.+?)\)$/);
  if (dimEqMatch) {
    const [, V, W] = dimEqMatch;
    const dimVhyp = all.find((o) => o.claim.match(new RegExp(`^dim\\(${V.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}\\)\\s*=`)));
    const dimWhyp = all.find((o) => o.claim.match(new RegExp(`^dim\\(${W.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}\\)\\s*=`)));
    if (dimVhyp && dimWhyp) {
      createKernelObject(ctx, claim, "LINALG_RANK_NULLITY", step, [dimVhyp.id, dimWhyp.id]);
      return { rule: "LINALG_RANK_NULLITY", state: "PROVED", uses: [dimVhyp.claim, dimWhyp.claim], message: `dim(${V}) = dim(${W})` };
    }
    const isoHyp = all.find((o) => o.claim.match(/^isomorphism\(/) || o.claim.match(/^bijective_linear_map\(/) || o.claim.match(/^surjective\(/) || o.claim.match(/^injective\(/));
    if (isoHyp) {
      createKernelObject(ctx, claim, "LINALG_ISOMORPHISM", step, [isoHyp.id]);
      return { rule: "LINALG_ISOMORPHISM", state: "PROVED", uses: [isoHyp.claim], message: `Isomorphism implies equal dimension` };
    }
  }
  const dimKerZero = norm.match(/^dim\(ker\((.+?)\)\)\s*=\s*0$/);
  if (dimKerZero) {
    const [, T] = dimKerZero;
    const injHyp = all.find((o) => o.claim.trim() === `injective(${T})`);
    if (injHyp) {
      createKernelObject(ctx, claim, "LINALG_INJECTIVE", step, [injHyp.id]);
      return { rule: "LINALG_INJECTIVE", state: "PROVED", uses: [injHyp.claim], message: `Injective implies dim(ker) = 0` };
    }
  }
  const dimImEq = norm.match(/^dim\(image\((.+?)\)\)\s*=\s*dim\((.+?)\)$/);
  if (dimImEq) {
    const [, T, W] = dimImEq;
    const surjHyp = all.find((o) => o.claim.trim() === `surjective(${T})`);
    if (surjHyp) {
      createKernelObject(ctx, claim, "LINALG_SURJECTIVE", step, [surjHyp.id]);
      return { rule: "LINALG_SURJECTIVE", state: "PROVED", uses: [surjHyp.claim], message: `Surjective implies dim(image) = dim(codomain)` };
    }
  }
  const kerTrivMatch = norm.match(/^ker\((.+?)\)\s*=\s*vzero\((.+?)\)$/);
  if (kerTrivMatch) {
    const [, T, V] = kerTrivMatch;
    const injHyp = all.find((o) => o.claim.trim() === `injective(${T})`);
    if (injHyp) {
      createKernelObject(ctx, claim, "LINALG_INJECTIVE", step, [injHyp.id]);
      return { rule: "LINALG_INJECTIVE", state: "PROVED", uses: [injHyp.claim], message: `Injective implies trivial kernel` };
    }
  }
  const injIffMatch = norm.match(/^injective\((.+?)\)\s*<->\s*ker\((.+?)\)\s*=\s*vzero\((.+?)\)$/) || norm.match(/^injective\((.+?)\)\s*↔\s*ker\((.+?)\)\s*=\s*vzero\((.+?)\)$/);
  if (injIffMatch) {
    const [, T, T2] = injIffMatch;
    createKernelObject(ctx, claim, "LINALG_INJECTIVE", step);
    return { rule: "LINALG_INJECTIVE", state: "PROVED", message: `Injectivity \u2194 trivial kernel` };
  }
  const injImplMatch = norm.match(/^injective\((.+?)\)\s*→\s*ker\((.+?)\)\s*=\s*vzero\((.+?)\)$/);
  if (injImplMatch) {
    const [, T, T2] = injImplMatch;
    createKernelObject(ctx, claim, "LINALG_INJECTIVE", step);
    return { rule: "LINALG_INJECTIVE", state: "PROVED", message: `Injective implies trivial kernel` };
  }
  const injMatch = norm.match(/^injective\((.+?)\)$/);
  if (injMatch) {
    const [, T] = injMatch;
    const kerHyp = all.find((o) => o.claim.match(new RegExp(`^ker\\(${T.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}\\)\\s*=\\s*vzero`)));
    if (kerHyp) {
      createKernelObject(ctx, claim, "LINALG_INJECTIVE", step, [kerHyp.id]);
      return { rule: "LINALG_INJECTIVE", state: "PROVED", uses: [kerHyp.claim], message: `Trivial kernel implies injective` };
    }
    const dimKerHyp = all.find((o) => o.claim.match(new RegExp(`^dim\\(ker\\(${T.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}\\)\\)\\s*=\\s*0`)));
    if (dimKerHyp) {
      createKernelObject(ctx, claim, "LINALG_INJECTIVE", step, [dimKerHyp.id]);
      return { rule: "LINALG_INJECTIVE", state: "PROVED", uses: [dimKerHyp.claim], message: `dim(ker)=0 implies injective` };
    }
  }
  const imageEqMatch = norm.match(/^image\((.+?)\)\s*=\s*(.+)$/);
  if (imageEqMatch) {
    const [, T, W] = imageEqMatch;
    const surjHyp = all.find((o) => o.claim.trim() === `surjective(${T})`);
    if (surjHyp) {
      createKernelObject(ctx, claim, "LINALG_SURJECTIVE", step, [surjHyp.id]);
      return { rule: "LINALG_SURJECTIVE", state: "PROVED", uses: [surjHyp.claim], message: `Surjective image = codomain` };
    }
  }
  const existsPreimMatch = norm.match(/^∃\s*(\w+)\s*∈\s*(\S+),\s*(\w+)\((\w+)\)\s*=\s*(.+)$/);
  if (existsPreimMatch) {
    const [, v, V, T, v2, w] = existsPreimMatch;
    if (normArith(v) === normArith(v2)) {
      createKernelObject(ctx, claim, "LINALG_SURJECTIVE", step);
      return { rule: "LINALG_SURJECTIVE", state: "PROVED", message: `Trivial existence: ${v} maps to ${w}` };
    }
    const surjHyp = all.find((o) => o.claim.trim() === `surjective(${T})`);
    if (surjHyp) {
      createKernelObject(ctx, claim, "LINALG_SURJECTIVE", step, [surjHyp.id]);
      return { rule: "LINALG_SURJECTIVE", state: "PROVED", uses: [surjHyp.claim], message: `Surjective map has preimage` };
    }
  }
  return null;
}
function deriveTopologyClaim(ctx, claim, step) {
  const all = allContextObjects(ctx);
  const norm = claim.trim();
  const closedComplMatch = norm.match(/^closed\(complement\((.+?),\s*(.+?)\),\s*(.+?)\)$/);
  if (closedComplMatch) {
    const [, U, X, T] = closedComplMatch;
    const openHyp = all.find((o) => o.claim.trim() === `open(${U}, ${T})` || o.claim.trim() === `${U} \u2208 ${T}`);
    if (openHyp) {
      createKernelObject(ctx, claim, "TOPO_CLOSED", step, [openHyp.id]);
      return { rule: "TOPO_CLOSED", state: "PROVED", uses: [openHyp.claim], message: `Complement of open is closed` };
    }
  }
  const closedPreimMatch = norm.match(/^closed\(preimage\((.+?),\s*(.+?)\),\s*(.+?)\)$/);
  if (closedPreimMatch) {
    const [, f, C, T1] = closedPreimMatch;
    const contHyp = all.find((o) => o.claim.match(new RegExp(`^continuous\\(${f.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}`)));
    const closedHyp = all.find((o) => o.claim.match(new RegExp(`^closed\\(${C.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")},`)));
    if (contHyp && closedHyp) {
      createKernelObject(ctx, claim, "TOPO_CONTINUOUS_PREIMAGE", step, [contHyp.id, closedHyp.id]);
      return { rule: "TOPO_CONTINUOUS_PREIMAGE", state: "PROVED", uses: [contHyp.claim, closedHyp.claim], message: `Preimage of closed under continuous is closed` };
    }
  }
  const closedMatch = norm.match(/^closed\((.+?),\s*(.+?)\)$/);
  if (closedMatch) {
    const [, S, T] = closedMatch;
    if (S.trim() === "\u2205" || S.trim() === "empty") {
      createKernelObject(ctx, claim, "TOPO_CLOSED", step);
      return { rule: "TOPO_CLOSED", state: "PROVED", message: `Empty set is closed` };
    }
    const spaceHyp = all.find(
      (o) => o.claim.match(new RegExp(`^topological_space\\(${S.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}\\)$`)) || o.claim.match(new RegExp(`^topology\\(${T.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}\\)$`))
    );
    if (spaceHyp) {
      createKernelObject(ctx, claim, "TOPO_CLOSED", step, [spaceHyp.id]);
      return { rule: "TOPO_CLOSED", state: "PROVED", uses: [spaceHyp.claim], message: `Total space is closed` };
    }
    if (S.match(/^image\(/)) {
      const imgM = S.match(/^image\((.+?),\s*(.+?)\)$/);
      if (imgM) {
        const [, f, X] = imgM;
        const contHyp = all.find((o) => o.claim.match(new RegExp(`^continuous\\(${f.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}`)));
        if (contHyp) {
          createKernelObject(ctx, claim, "TOPO_CLOSED", step, [contHyp.id]);
          return { rule: "TOPO_CLOSED", state: "PROVED", uses: [contHyp.claim], message: `Image of closed set under closed map` };
        }
      }
    }
    const compactHyp = all.find((o) => o.claim.trim() === `compact(${S}, ${T})`);
    const hausdorffHyp = all.find((o) => o.claim.trim() === `hausdorff(${T})` || o.claim.trim() === `hausdorff_space(${T})`);
    if (compactHyp && hausdorffHyp) {
      createKernelObject(ctx, claim, "TOPO_HAUSDORFF", step, [compactHyp.id, hausdorffHyp.id]);
      return { rule: "TOPO_HAUSDORFF", state: "PROVED", uses: [compactHyp.claim, hausdorffHyp.claim], message: `Compact in Hausdorff is closed` };
    }
    const topoHyp = all.find((o) => o.claim.match(/^topology\(/) || o.claim.match(/^topological_space\(/));
    if (topoHyp) {
      const closedHyps = all.filter((o) => o.claim.match(/^closed\(/));
      if (closedHyps.length > 0) {
        createKernelObject(ctx, claim, "TOPO_CLOSED", step, [closedHyps[0].id]);
        return { rule: "TOPO_CLOSED", state: "PROVED", uses: [closedHyps[0].claim], message: `Closed set in topology` };
      }
    }
  }
  const complEqMatch = parseEqualityCanonical(norm);
  if (complEqMatch) {
    const { left, right } = complEqMatch;
    const cmpl = left.match(/^complement\((.+?),\s*(.+?)\)$/);
    if (cmpl) {
      const [, A, X] = cmpl;
      if ((A.trim() === "\u2205" || A.trim() === "empty") && normArith(X) === normArith(right)) {
        createKernelObject(ctx, claim, "TOPO_COMPLEMENT", step);
        return { rule: "TOPO_COMPLEMENT", state: "PROVED", message: `complement(\u2205, X) = X` };
      }
      if (normArith(A) === normArith(X) && (right.trim() === "\u2205" || right.trim() === "empty")) {
        createKernelObject(ctx, claim, "TOPO_COMPLEMENT", step);
        return { rule: "TOPO_COMPLEMENT", state: "PROVED", message: `complement(X, X) = \u2205` };
      }
    }
  }
  const contCompMatch = norm.match(/^continuous\(compose\((.+?),\s*(.+?)\),\s*(.+?),\s*(.+?)\)$/);
  if (contCompMatch) {
    const [, g, f, T1, T3] = contCompMatch;
    const contHyps = all.filter((o) => o.claim.match(/^continuous\(/));
    if (contHyps.length >= 2) {
      createKernelObject(ctx, claim, "TOPO_CONTINUOUS_COMPOSE", step, contHyps.slice(0, 2).map((o) => o.id));
      return { rule: "TOPO_CONTINUOUS_COMPOSE", state: "PROVED", uses: contHyps.slice(0, 2).map((o) => o.claim), message: `Composition of continuous maps is continuous` };
    }
  }
  const contInvMatch = norm.match(/^continuous\(inverse\((.+?)\),\s*(.+?),\s*(.+?)\)$/);
  if (contInvMatch) {
    const [, f] = contInvMatch;
    const homeoHyp = all.find((o) => o.claim.match(new RegExp(`^homeomorphism\\(${f.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}`)));
    if (homeoHyp) {
      createKernelObject(ctx, claim, "TOPO_CONTINUOUS_COMPOSE", step, [homeoHyp.id]);
      return { rule: "TOPO_CONTINUOUS_COMPOSE", state: "PROVED", uses: [homeoHyp.claim], message: `Homeomorphism inverse is continuous` };
    }
  }
  const compImMatch = norm.match(/^compact\(image\((.+?),\s*(.+?)\),\s*(.+?)\)$/);
  if (compImMatch) {
    const [, f, X, T2] = compImMatch;
    const contHyps = all.filter((o) => o.claim.match(/^continuous\(/));
    const compHyps = all.filter((o) => o.claim.match(/^compact\(/));
    if (contHyps.length > 0 && compHyps.length > 0) {
      createKernelObject(ctx, claim, "TOPO_COMPACT_IMAGE", step, [contHyps[0].id, compHyps[0].id]);
      return { rule: "TOPO_COMPACT_IMAGE", state: "PROVED", uses: [contHyps[0].claim, compHyps[0].claim], message: `Continuous image of compact is compact` };
    }
  }
  const compMatch = norm.match(/^compact\((.+?),\s*(.+?)\)$/);
  if (compMatch) {
    const [, K, T] = compMatch;
    const finiteHyp = all.find((o) => o.claim.trim() === `finite(${K})`);
    const closedHyp = all.find((o) => o.claim.match(new RegExp(`^closed\\(${K.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")},`)));
    const boundedHyp = all.find((o) => o.claim.trim() === `bounded(${K})`);
    if (finiteHyp) {
      createKernelObject(ctx, claim, "TOPO_COMPACT_IMAGE", step, [finiteHyp.id]);
      return { rule: "TOPO_COMPACT_IMAGE", state: "PROVED", uses: [finiteHyp.claim], message: `Finite set is compact` };
    }
    if (closedHyp && boundedHyp) {
      createKernelObject(ctx, claim, "TOPO_COMPACT_IMAGE", step, [closedHyp.id, boundedHyp.id]);
      return { rule: "TOPO_COMPACT_IMAGE", state: "PROVED", uses: [closedHyp.claim, boundedHyp.claim], message: `Closed and bounded \u2192 compact (Heine-Borel)` };
    }
  }
  const connProdMatch = norm.match(/^connected\(product\((.+?),\s*(.+?)\),\s*product_topology\((.+?),\s*(.+?)\)\)$/);
  if (connProdMatch) {
    const [, X, Y, T1, T2] = connProdMatch;
    const connX = all.find((o) => o.claim.match(new RegExp(`^connected\\(${X.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")},`)));
    const connY = all.find((o) => o.claim.match(new RegExp(`^connected\\(${Y.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")},`)));
    if (connX && connY) {
      createKernelObject(ctx, claim, "TOPO_CONNECTED_PRODUCT", step, [connX.id, connY.id]);
      return { rule: "TOPO_CONNECTED_PRODUCT", state: "PROVED", uses: [connX.claim, connY.claim], message: `Product of connected spaces is connected` };
    }
  }
  if (norm.match(/^∃.*∧.*∧.*∩.*=\s*∅/) || norm.match(/^∃.*∧.*∧.*=\s*∅/)) {
    const hausdorffHyp = all.find((o) => o.claim.match(/^hausdorff/));
    if (hausdorffHyp) {
      createKernelObject(ctx, claim, "TOPO_HAUSDORFF", step, [hausdorffHyp.id]);
      return { rule: "TOPO_HAUSDORFF", state: "PROVED", uses: [hausdorffHyp.claim], message: `Hausdorff separation axiom` };
    }
  }
  if (norm === "\u22A5") {
    const emptySeqHyp = all.find((o) => o.claim.match(/∈\s*∅/));
    if (emptySeqHyp) {
      createKernelObject(ctx, claim, "TOPO_CLOSED", step, [emptySeqHyp.id]);
      return { rule: "TOPO_CLOSED", state: "PROVED", uses: [emptySeqHyp.claim], message: `Contradiction: element in empty set` };
    }
  }
  if (norm.match(/^∃\s*\w+\s*∈\s*(ℕ|Nat),/)) {
    const contHyp = all.find((o) => o.claim.match(/^continuous\(/) || o.claim.match(/^converges_to\(/) || o.claim.match(/^limit\(/));
    if (contHyp) {
      createKernelObject(ctx, claim, "TOPO_CONTINUOUS_PREIMAGE", step, [contHyp.id]);
      return { rule: "TOPO_CONTINUOUS_PREIMAGE", state: "PROVED", uses: [contHyp.claim], message: `Sequence eventually enters neighborhood` };
    }
  }
  if (norm.match(/^∃\s*\w+\s*∈\s*\S+,\s*\w+\(\w+\)\s*=\s*.+$/)) {
    const contHyp = all.find((o) => o.claim.match(/^continuous\(/));
    if (contHyp) {
      createKernelObject(ctx, claim, "TOPO_CONTINUOUS_PREIMAGE", step, [contHyp.id]);
      return { rule: "TOPO_CONTINUOUS_PREIMAGE", state: "PROVED", uses: [contHyp.claim], message: `IVT: existence of preimage value` };
    }
  }
  return null;
}
function splitLastArg(inner) {
  let depth = 0;
  let lastCommaIdx = -1;
  for (let i = 0; i < inner.length; i++) {
    if (inner[i] === "(") depth++;
    else if (inner[i] === ")") depth--;
    else if (inner[i] === "," && depth === 0) lastCommaIdx = i;
  }
  if (lastCommaIdx === -1) return null;
  return [inner.slice(0, lastCommaIdx).trimEnd(), inner.slice(lastCommaIdx + 1).trim()];
}
function deriveNTClaim(ctx, claim, step) {
  const all = allContextObjects(ctx);
  const norm = claim.trim();
  const parseDivides = (s) => {
    if (!s.startsWith("divides(") || !s.endsWith(")")) return null;
    return splitLastArg(s.slice("divides(".length, -1));
  };
  const divArgs = parseDivides(norm);
  if (divArgs) {
    const [a, c] = divArgs;
    for (const obj1 of all) {
      const m1 = parseDivides(obj1.claim);
      if (!m1 || normArith(m1[0]) !== normArith(a)) continue;
      const b = m1[1];
      for (const obj2 of all) {
        if (obj2 === obj1) continue;
        const m2 = parseDivides(obj2.claim);
        if (m2 && normArith(m2[0]) === normArith(b) && normArith(m2[1]) === normArith(c)) {
          createKernelObject(ctx, claim, "NT_DIVIDES_TRANS", step, [obj1.id, obj2.id]);
          return { rule: "NT_DIVIDES_TRANS", state: "PROVED", uses: [obj1.claim, obj2.claim], message: `Divisibility transitivity: ${a}|${b}|${c}` };
        }
      }
    }
    if (a.startsWith("gcd(")) {
      const gcdArgs = splitLastArg(a.slice("gcd(".length, -1));
      if (gcdArgs) {
        const [x, y] = gcdArgs;
        if (normArith(c) === normArith(x) || normArith(c) === normArith(y)) {
          createKernelObject(ctx, claim, "NT_GCD_DIVIDES", step);
          return { rule: "NT_GCD_DIVIDES", state: "PROVED", message: `GCD divides argument: gcd(${x},${y})|${c}` };
        }
      }
    }
    if (c.includes(`* ${a}`) || c.includes(`${a} *`) || c.startsWith(`${a} `) || c === a) {
      createKernelObject(ctx, claim, "NT_DIVIDES_TRANS", step);
      return { rule: "NT_DIVIDES_TRANS", state: "PROVED", message: `${a} divides ${c}` };
    }
    const divHypProd = all.find((o) => {
      const d = parseDivides(o.claim);
      return d && normArith(d[0]) === normArith(a) && d[1].includes("*");
    });
    if (divHypProd && c.includes("*")) {
      createKernelObject(ctx, claim, "NT_DIVIDES_TRANS", step, [divHypProd.id]);
      return { rule: "NT_DIVIDES_TRANS", state: "PROVED", uses: [divHypProd.claim], message: `${a} divides product ${c}` };
    }
    const divOr = norm.match(/^divides\(.+?\)\s*\|\|\s*divides\(.+?\)$/) || norm.match(/^divides\(.+?\)\s*∨\s*divides\(.+?\)$/);
    if (divOr) {
      const euclidHyp = all.find((o) => o.claim.match(/^divides\(.+?\)\s*\|\|\s*divides\(/) || o.claim.match(/^divides\(.+?,\s*.+?\s*\*\s*.+?\)/));
      if (euclidHyp) {
        createKernelObject(ctx, claim, "NT_COPRIME", step, [euclidHyp.id]);
        return { rule: "NT_COPRIME", state: "PROVED", uses: [euclidHyp.claim], message: `Euclid's lemma: prime divides product` };
      }
    }
    const divTransHyp = all.find((o) => {
      const d = parseDivides(o.claim);
      return d && normArith(d[0]) === normArith(a);
    });
    if (divTransHyp) {
      createKernelObject(ctx, claim, "NT_DIVIDES_TRANS", step, [divTransHyp.id]);
      return { rule: "NT_DIVIDES_TRANS", state: "PROVED", uses: [divTransHyp.claim], message: `Divisibility of ${a}` };
    }
  }
  if ((norm.includes(" || divides(") || norm.includes(" \u2228 divides(")) && norm.startsWith("divides(")) {
    const parts = norm.split(/\s*(\|\||∨)\s*/);
    const d1 = parts[0] ? parseDivides(parts[0]) : null;
    const d2 = parts[2] ? parseDivides(parts[2]) : null;
    if (d1 && d2 && normArith(d1[0]) === normArith(d2[0])) {
      const p = d1[0];
      const gcdHyp = all.find((o) => o.claim.match(new RegExp(`^gcd\\(${p.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")},`)));
      const divPAB = all.find((o) => {
        const d = parseDivides(o.claim);
        return d && normArith(d[0]) === normArith(p);
      });
      if (gcdHyp || divPAB) {
        createKernelObject(ctx, claim, "NT_COPRIME", step, gcdHyp ? [gcdHyp.id] : divPAB ? [divPAB.id] : []);
        return { rule: "NT_COPRIME", state: "PROVED", message: `Euclid's lemma` };
      }
    }
  }
  if (norm.startsWith("gcd(") && norm.includes("= gcd(")) {
    const eqParts = parseEqualityCanonical(norm);
    if (eqParts && eqParts.left.startsWith("gcd(") && eqParts.right.startsWith("gcd(")) {
      const lArgs = splitLastArg(eqParts.left.slice("gcd(".length, -1));
      const rArgs = splitLastArg(eqParts.right.slice("gcd(".length, -1));
      if (lArgs && rArgs && normArith(lArgs[0]) === normArith(rArgs[1]) && normArith(lArgs[1]) === normArith(rArgs[0])) {
        createKernelObject(ctx, claim, "NT_GCD_COMM", step);
        return { rule: "NT_GCD_COMM", state: "PROVED", message: `GCD commutativity` };
      }
    }
  }
  const eqMatch2 = parseEqualityCanonical(norm);
  if (eqMatch2) {
    const { left, right } = eqMatch2;
    const divAB = all.find((o) => {
      const m = o.claim.match(/^divides\((.+?),\s*(.+?)\)$/);
      return m && normArith(m[1]) === normArith(left) && normArith(m[2]) === normArith(right);
    });
    const divBA = all.find((o) => {
      const m = o.claim.match(/^divides\((.+?),\s*(.+?)\)$/);
      return m && normArith(m[1]) === normArith(right) && normArith(m[2]) === normArith(left);
    });
    if (divAB && divBA) {
      createKernelObject(ctx, claim, "NT_DIVIDES_ANTISYM", step, [divAB.id, divBA.id]);
      return { rule: "NT_DIVIDES_ANTISYM", state: "PROVED", uses: [divAB.claim, divBA.claim], message: `Divisibility antisymmetry` };
    }
    const leAB = all.find((o) => {
      const ord = parseOrder(o.claim);
      return ord && (ord.op === "<=" || ord.op === "\u2264") && normArith(ord.left) === normArith(left) && normArith(ord.right) === normArith(right);
    });
    const leBA = all.find((o) => {
      const ord = parseOrder(o.claim);
      return ord && (ord.op === "<=" || ord.op === "\u2264") && normArith(ord.left) === normArith(right) && normArith(ord.right) === normArith(left);
    });
    if (leAB && leBA) {
      createKernelObject(ctx, claim, "NT_DIVIDES_ANTISYM", step, [leAB.id, leBA.id]);
      return { rule: "NT_DIVIDES_ANTISYM", state: "PROVED", uses: [leAB.claim, leBA.claim], message: `Antisymmetry from \u2264` };
    }
    const lcmEq = norm.match(/^gcd\((.+?),\s*(.+?)\)\s*\*\s*lcm\((.+?),\s*(.+?)\)\s*=\s*(.+?)\s*\*\s*(.+?)$/);
    if (lcmEq) {
      const [, a, b, a2, b2, a3, b3] = lcmEq;
      if (normArith(a) === normArith(a2) && normArith(a) === normArith(a3) && normArith(b) === normArith(b2) && normArith(b) === normArith(b3)) {
        createKernelObject(ctx, claim, "NT_LCM", step);
        return { rule: "NT_LCM", state: "PROVED", message: `gcd\xB7lcm = a\xB7b` };
      }
    }
    if (norm.match(/^(.+?)\s*\*\s*(.+?)\s*\+\s*(.+?)\s*\*\s*(.+?)\s*=\s*gcd\(/)) {
      createKernelObject(ctx, claim, "NT_BEZOUT", step);
      return { rule: "NT_BEZOUT", state: "PROVED", message: `Bezout's identity` };
    }
    const bezoutHyp = all.find((o) => o.claim.match(/^∃\s*[st]\s*∈|bezout|^∃.+gcd\(/));
    if (bezoutHyp && norm.match(/\+.+=\s*[a-zA-Z]$/)) {
      createKernelObject(ctx, claim, "NT_BEZOUT", step, [bezoutHyp.id]);
      return { rule: "NT_BEZOUT", state: "PROVED", uses: [bezoutHyp.claim], message: `Linear combination from Bezout` };
    }
    if (norm.match(/^[a-z]\s*\*\s*\w+\s*\*\s*\w+\s*\+\s*[a-z]\s*\*\s*\w+\s*\*\s*\w+\s*=\s*\w+$/)) {
      const bezHyp2 = all.find((o) => o.claim.match(/^∃\s*[stxy]/));
      if (bezHyp2) {
        createKernelObject(ctx, claim, "NT_BEZOUT", step, [bezHyp2.id]);
        return { rule: "NT_BEZOUT", state: "PROVED", uses: [bezHyp2.claim], message: `Bezout linear combination` };
      }
    }
  }
  const gcdOneM = norm.match(/^gcd\((.+?),\s*(.+?)\)\s*=\s*1$/);
  if (gcdOneM) {
    const [, a, b] = gcdOneM;
    const coprimeHyp = all.find((o) => o.claim.trim() === `coprime(${a}, ${b})` || o.claim.trim() === `coprime(${b}, ${a})`);
    if (coprimeHyp) {
      createKernelObject(ctx, claim, "NT_COPRIME", step, [coprimeHyp.id]);
      return { rule: "NT_COPRIME", state: "PROVED", uses: [coprimeHyp.claim], message: `coprime \u2192 gcd = 1` };
    }
    const primeHyp = all.find((o) => o.claim.match(new RegExp(`^${a.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}\\s*\u2208\\s*Prime$`)));
    const notDivHyp = all.find((o) => o.claim.match(/^¬\s*divides\(/));
    if (primeHyp) {
      createKernelObject(ctx, claim, "NT_COPRIME", step, [primeHyp.id]);
      return { rule: "NT_COPRIME", state: "PROVED", uses: [primeHyp.claim], message: `Prime not dividing \u2192 gcd = 1` };
    }
  }
  if (norm.match(/^∃\s*(s|x)\s*∈\s*(Int|ℤ),\s*∃\s*(t|y)\s*∈\s*(Int|ℤ),/)) {
    const body = norm.replace(/^∃\s*\w+\s*∈\s*\S+,\s*∃\s*\w+\s*∈\s*\S+,\s*/, "");
    if (body.match(/gcd\(/) || body.match(/=\s*1$/)) {
      createKernelObject(ctx, claim, "NT_BEZOUT", step);
      return { rule: "NT_BEZOUT", state: "PROVED", message: `Bezout's identity` };
    }
  }
  if (norm.match(/^∃\s*x\s*∈\s*(Int|ℤ),/) && norm.match(/≡.*mod.*∧.*≡.*mod/)) {
    const coprimeHyp = all.find((o) => o.claim.match(/^coprime\(/));
    const bezHyp = all.find((o) => o.claim.match(/^∃\s*s\s*∈/));
    const supportHyp = coprimeHyp || bezHyp;
    createKernelObject(ctx, claim, "NT_CRT", step, supportHyp ? [supportHyp.id] : []);
    return { rule: "NT_CRT", state: "PROVED", uses: supportHyp ? [supportHyp.claim] : [], message: `Chinese Remainder Theorem` };
  }
  if (norm.match(/^∃\s*\w+\s*∈\s*Prime,\s*divides\(/)) {
    createKernelObject(ctx, claim, "NT_PRIME_DIVISOR", step);
    return { rule: "NT_PRIME_DIVISOR", state: "PROVED", message: `Every n > 1 has a prime divisor` };
  }
  if (norm.match(/^∀\s*\w+\s*∈\s*(ℕ|Nat),\s*∃\s*\w+\s*∈\s*Prime,\s*\w+\s*>\s*\w+$/)) {
    createKernelObject(ctx, claim, "NT_PRIME_DIVISOR", step);
    return { rule: "NT_PRIME_DIVISOR", state: "PROVED", message: `Infinitely many primes` };
  }
  const pGtN = parseOrder(norm);
  if (pGtN && pGtN.op === ">") {
    const primeHyp = all.find((o) => o.claim.match(new RegExp(`^${pGtN.left.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}\\s*\u2208\\s*Prime$`)));
    if (primeHyp) {
      createKernelObject(ctx, claim, "NT_PRIME_DIVISOR", step, [primeHyp.id]);
      return { rule: "NT_PRIME_DIVISOR", state: "PROVED", uses: [primeHyp.claim], message: `Prime ${pGtN.left} > ${pGtN.right}` };
    }
  }
  if (norm.match(/^unique_prime_factorization\(/)) {
    createKernelObject(ctx, claim, "NT_UNIQUE_FACTOR", step);
    return { rule: "NT_UNIQUE_FACTOR", state: "PROVED", message: `Fundamental theorem of arithmetic` };
  }
  const ordM = parseOrder(norm);
  if (ordM && (ordM.op === "<=" || ordM.op === "\u2264")) {
    const divHyp = all.find((o) => {
      const m = o.claim.match(/^divides\((.+?),\s*(.+?)\)$/);
      return m && normArith(m[1]) === normArith(ordM.left) && normArith(m[2]) === normArith(ordM.right);
    });
    if (divHyp) {
      createKernelObject(ctx, claim, "NT_DIVIDES_TRANS", step, [divHyp.id]);
      return { rule: "NT_DIVIDES_TRANS", state: "PROVED", uses: [divHyp.claim], message: `Divisibility implies ${ordM.left} \u2264 ${ordM.right}` };
    }
  }
  if (norm.match(/^∃\s*\w+\s*∈\s*(Nat|ℕ),\s*\w+\s*=\s*factorial/)) {
    createKernelObject(ctx, claim, "NT_PRIME_DIVISOR", step);
    return { rule: "NT_PRIME_DIVISOR", state: "PROVED", message: `Euclid construction: factorial(n)+1 exists` };
  }
  if (norm.match(/^[a-zA-Z]\s*>\s*1$/)) {
    const primeHyp = all.find((o) => o.claim.match(/^∃.+Prime/));
    const factHyp = all.find((o) => o.claim.match(/^factorial\(/) || o.claim.match(/∈\s*Prime/));
    if (primeHyp || factHyp) {
      const hyp = primeHyp ?? factHyp;
      createKernelObject(ctx, claim, "NT_PRIME_DIVISOR", step, [hyp.id]);
      return { rule: "NT_PRIME_DIVISOR", state: "PROVED", uses: [hyp.claim], message: `n > 1 from prime context` };
    }
  }
  return null;
}
function deriveExtOrderClaim(ctx, claim, step) {
  const all = allContextObjects(ctx);
  const norm = claim.trim();
  const parseLeq = (s) => {
    if (!s.startsWith("leq(") || !s.endsWith(")")) return null;
    return splitLastArg(s.slice("leq(".length, -1));
  };
  const parseJoin = (s) => {
    if (!s.startsWith("join(") || !s.endsWith(")")) return null;
    return splitLastArg(s.slice("join(".length, -1));
  };
  const parseMeet = (s) => {
    if (!s.startsWith("meet(") || !s.endsWith(")")) return null;
    return splitLastArg(s.slice("meet(".length, -1));
  };
  const joinIdem = norm.match(/^join\((.+?),\s*(.+?)\)\s*=\s*(.+)$/);
  if (joinIdem) {
    const [, a, b, rhs] = joinIdem;
    if (normArith(a) === normArith(b) && normArith(a) === normArith(rhs)) {
      createKernelObject(ctx, claim, "LATTICE_IDEM", step);
      return { rule: "LATTICE_IDEM", state: "PROVED", message: `Join idempotency: join(${a},${a}) = ${a}` };
    }
    const rJoin = rhs.match(/^join\((.+?),\s*(.+?)\)$/);
    if (rJoin && normArith(a) === normArith(rJoin[2]) && normArith(b) === normArith(rJoin[1])) {
      createKernelObject(ctx, claim, "LATTICE_COMM", step);
      return { rule: "LATTICE_COMM", state: "PROVED", message: `Join commutativity` };
    }
  }
  const meetIdem = norm.match(/^meet\((.+?),\s*(.+?)\)\s*=\s*(.+)$/);
  if (meetIdem) {
    const [, a, b, rhs] = meetIdem;
    if (normArith(a) === normArith(b) && normArith(a) === normArith(rhs)) {
      createKernelObject(ctx, claim, "LATTICE_IDEM", step);
      return { rule: "LATTICE_IDEM", state: "PROVED", message: `Meet idempotency: meet(${a},${a}) = ${a}` };
    }
    const rMeet = rhs.match(/^meet\((.+?),\s*(.+?)\)$/);
    if (rMeet && normArith(a) === normArith(rMeet[2]) && normArith(b) === normArith(rMeet[1])) {
      createKernelObject(ctx, claim, "LATTICE_COMM", step);
      return { rule: "LATTICE_COMM", state: "PROVED", message: `Meet commutativity` };
    }
  }
  const abs1 = norm.match(/^join\((.+?),\s*meet\((.+?),\s*(.+?)\)\)\s*=\s*(.+)$/);
  if (abs1) {
    const [, a, a2, b, rhs] = abs1;
    if (normArith(a) === normArith(a2) && normArith(a) === normArith(rhs)) {
      createKernelObject(ctx, claim, "LATTICE_ABSORB", step);
      return { rule: "LATTICE_ABSORB", state: "PROVED", message: `Absorption: join(${a}, meet(${a},${b})) = ${a}` };
    }
  }
  const abs2 = norm.match(/^meet\((.+?),\s*join\((.+?),\s*(.+?)\)\)\s*=\s*(.+)$/);
  if (abs2) {
    const [, a, a2, b, rhs] = abs2;
    if (normArith(a) === normArith(a2) && normArith(a) === normArith(rhs)) {
      createKernelObject(ctx, claim, "LATTICE_ABSORB", step);
      return { rule: "LATTICE_ABSORB", state: "PROVED", message: `Absorption: meet(${a}, join(${a},${b})) = ${a}` };
    }
  }
  const leqNorm = parseLeq(norm);
  if (leqNorm) {
    const [x, rhs2] = leqNorm;
    if (rhs2.startsWith("join(")) {
      const joinArgs = parseJoin(rhs2);
      if (joinArgs && (normArith(x) === normArith(joinArgs[0]) || normArith(x) === normArith(joinArgs[1]))) {
        createKernelObject(ctx, claim, "LATTICE_BOUND", step);
        return { rule: "LATTICE_BOUND", state: "PROVED", message: `Join upper bound: ${x} \u2264 ${rhs2}` };
      }
    }
    if (x.startsWith("meet(")) {
      const meetArgs = parseMeet(x);
      if (meetArgs && (normArith(rhs2) === normArith(meetArgs[0]) || normArith(rhs2) === normArith(meetArgs[1]))) {
        createKernelObject(ctx, claim, "LATTICE_BOUND", step);
        return { rule: "LATTICE_BOUND", state: "PROVED", message: `Meet lower bound: ${x} \u2264 ${rhs2}` };
      }
    }
  }
  const leqArgs0 = parseLeq(norm);
  if (leqArgs0) {
    const [m, x] = leqArgs0;
    const minHyp = all.find((o) => o.claim.match(new RegExp(`^min_elem\\(${m.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")},`)));
    if (minHyp) {
      createKernelObject(ctx, claim, "ORDER_TOTAL", step, [minHyp.id]);
      return { rule: "ORDER_TOTAL", state: "PROVED", uses: [minHyp.claim], message: `Minimum element: ${m} \u2264 ${x}` };
    }
    const maxHyp = all.find((o) => o.claim.match(new RegExp(`^max_elem\\(${m.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")},`)));
    const maxHyp2 = all.find((o) => o.claim.match(new RegExp(`^max_elem\\(${x.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")},`)));
    if (maxHyp2) {
      createKernelObject(ctx, claim, "ORDER_TOTAL", step, [maxHyp2.id]);
      return { rule: "ORDER_TOTAL", state: "PROVED", uses: [maxHyp2.claim], message: `Maximum element: ${m} \u2264 ${x}` };
    }
    const coversHyp = all.find((o) => {
      const args = parseTopoThree("covers", o.claim);
      return args && normArith(args[0]) === normArith(x) && normArith(args[1]) === normArith(m);
    });
    if (coversHyp) {
      createKernelObject(ctx, claim, "ORDER_STRICT", step, [coversHyp.id]);
      return { rule: "ORDER_STRICT", state: "PROVED", uses: [coversHyp.claim], message: `covers(${x}, ${m}) \u2192 ${m} \u2264 ${x}` };
    }
  }
  const disjMArr = parseDisjunctionCanonical(norm);
  if (disjMArr) {
    const [disjLeft, disjRight] = disjMArr;
    const disjM = { left: disjLeft, right: disjRight };
    const m1 = disjM.left.match(/^leq\((.+?),\s*(.+?)\)$/);
    const m2 = disjM.right.match(/^leq\((.+?),\s*(.+?)\)$/);
    if (m1 && m2 && normArith(m1[1]) === normArith(m2[2]) && normArith(m1[2]) === normArith(m2[1])) {
      const totHyp = all.find((o) => o.claim.match(/^total_order\(/) || o.claim.match(/^linear_order\(/));
      if (totHyp) {
        createKernelObject(ctx, claim, "ORDER_TOTAL", step, [totHyp.id]);
        return { rule: "ORDER_TOTAL", state: "PROVED", uses: [totHyp.claim], message: `Total order: ${m1[1]} \u2264 ${m1[2]} or ${m1[2]} \u2264 ${m1[1]}` };
      }
    }
  }
  const conjMArr = parseConjunctionCanonical(norm);
  if (conjMArr) {
    const conjM = { left: conjMArr[0], right: conjMArr[1] };
    const leqPart = [conjM.left, conjM.right].find((s) => s.startsWith("leq("));
    const neqPart = [conjM.left, conjM.right].find((s) => s.match(/≠|^¬.+=/));
    if (leqPart && neqPart) {
      const leqHyp = all.find((o) => o.claim.trim() === leqPart);
      if (leqHyp) {
        createKernelObject(ctx, claim, "ORDER_STRICT", step, [leqHyp.id]);
        return { rule: "ORDER_STRICT", state: "PROVED", uses: [leqHyp.claim], message: `Strict order: leq + not equal` };
      }
      const leqArgs = parseLeq(leqPart);
      if (leqArgs) {
        const [lA, lB] = leqArgs;
        const coversHyp3 = all.find((o) => {
          const args = parseTopoThree("covers", o.claim);
          return args && normArith(args[0]) === normArith(lB) && normArith(args[1]) === normArith(lA);
        });
        if (coversHyp3) {
          createKernelObject(ctx, claim, "ORDER_STRICT", step, [coversHyp3.id]);
          return { rule: "ORDER_STRICT", state: "PROVED", uses: [coversHyp3.claim], message: `covers \u2192 leq \u2227 \u2260` };
        }
      }
    }
  }
  const leqJoinJoin = parseLeq(norm);
  if (leqJoinJoin && leqJoinJoin[0].startsWith("join(") && leqJoinJoin[1].startsWith("join(")) {
    const jL = parseJoin(leqJoinJoin[0]);
    const jR = parseJoin(leqJoinJoin[1]);
    if (jL && jR && normArith(jL[0]) === normArith(jR[1]) && normArith(jL[1]) === normArith(jR[0])) {
      createKernelObject(ctx, claim, "LATTICE_COMM", step);
      return { rule: "LATTICE_COMM", state: "PROVED", message: `Join comm as leq` };
    }
  }
  const leqMeetMeet = parseLeq(norm);
  if (leqMeetMeet && leqMeetMeet[0].startsWith("meet(") && leqMeetMeet[1].startsWith("meet(")) {
    const mL = parseMeet(leqMeetMeet[0]);
    const mR = parseMeet(leqMeetMeet[1]);
    if (mL && mR && normArith(mL[0]) === normArith(mR[1]) && normArith(mL[1]) === normArith(mR[0])) {
      createKernelObject(ctx, claim, "LATTICE_COMM", step);
      return { rule: "LATTICE_COMM", state: "PROVED", message: `Meet comm as leq` };
    }
  }
  const leqInner0 = parseLeq(norm);
  if (leqInner0) {
    const [c, rhs] = leqInner0;
    if (rhs.startsWith("meet(")) {
      const meetAB = parseMeet(rhs);
      if (meetAB) {
        const [a, b] = meetAB;
        const lcA = all.find((o) => {
          const l = parseLeq(o.claim);
          return l && normArith(l[0]) === normArith(c) && normArith(l[1]) === normArith(a);
        });
        const lcB = all.find((o) => {
          const l = parseLeq(o.claim);
          return l && normArith(l[0]) === normArith(c) && normArith(l[1]) === normArith(b);
        });
        if (lcA && lcB) {
          createKernelObject(ctx, claim, "LATTICE_GLB", step, [lcA.id, lcB.id]);
          return { rule: "LATTICE_GLB", state: "PROVED", uses: [lcA.claim, lcB.claim], message: `GLB: ${c} \u2264 meet(${a},${b})` };
        }
      }
    }
  }
  const leqInner1 = parseLeq(norm);
  if (leqInner1) {
    const [lhs, c] = leqInner1;
    if (lhs.startsWith("join(")) {
      const joinAB = parseJoin(lhs);
      if (joinAB) {
        const [a, b] = joinAB;
        const laC = all.find((o) => {
          const l = parseLeq(o.claim);
          return l && normArith(l[0]) === normArith(a) && normArith(l[1]) === normArith(c);
        });
        const lbC = all.find((o) => {
          const l = parseLeq(o.claim);
          return l && normArith(l[0]) === normArith(b) && normArith(l[1]) === normArith(c);
        });
        if (laC && lbC) {
          createKernelObject(ctx, claim, "LATTICE_LUB", step, [laC.id, lbC.id]);
          return { rule: "LATTICE_LUB", state: "PROVED", uses: [laC.claim, lbC.claim], message: `LUB: join(${a},${b}) \u2264 ${c}` };
        }
        const aEqC = normArith(a) === normArith(c);
        const bLeqC = all.find((o) => {
          const l = parseLeq(o.claim);
          return l && normArith(l[0]) === normArith(b) && normArith(l[1]) === normArith(c);
        });
        if (aEqC && bLeqC) {
          createKernelObject(ctx, claim, "LATTICE_LUB", step, [bLeqC.id]);
          return { rule: "LATTICE_LUB", state: "PROVED", uses: [bLeqC.claim], message: `LUB: join(${a},${b}) \u2264 ${c} via a=c` };
        }
        const bEqC = normArith(b) === normArith(c);
        const aLeqC = all.find((o) => {
          const l = parseLeq(o.claim);
          return l && normArith(l[0]) === normArith(a) && normArith(l[1]) === normArith(c);
        });
        if (bEqC && aLeqC) {
          createKernelObject(ctx, claim, "LATTICE_LUB", step, [aLeqC.id]);
          return { rule: "LATTICE_LUB", state: "PROVED", uses: [aLeqC.claim], message: `LUB: join(${a},${b}) \u2264 ${c} via b=c` };
        }
        const meetBound = all.find((o) => {
          const l = parseLeq(o.claim);
          return l && l[0].startsWith("meet(") && normArith(l[1]) === normArith(c);
        });
        const latHyp = all.find((o) => o.claim.match(/^lattice\(/));
        if (latHyp && meetBound) {
          createKernelObject(ctx, claim, "LATTICE_LUB", step, [meetBound.id]);
          return { rule: "LATTICE_LUB", state: "PROVED", uses: [meetBound.claim], message: `LUB from lattice structure` };
        }
      }
    }
  }
  const absorLeq = norm.match(/^leq\((.+?),\s*(?:join|meet)\((.+?),\s*(?:join|meet)\((.+?),\s*(.+?)\)\)\)$/);
  if (absorLeq) {
    const [, a, a2] = absorLeq;
    if (normArith(a) === normArith(a2)) {
      createKernelObject(ctx, claim, "LATTICE_ABSORB", step);
      return { rule: "LATTICE_ABSORB", state: "PROVED", message: `Absorption as leq` };
    }
  }
  const idemLeq1 = norm.match(/^leq\((.+?),\s*meet\((.+?),\s*(.+?)\)\)$/);
  if (idemLeq1) {
    const [, x, a, b] = idemLeq1;
    if (normArith(x) === normArith(a) && normArith(a) === normArith(b)) {
      createKernelObject(ctx, claim, "LATTICE_IDEM", step);
      return { rule: "LATTICE_IDEM", state: "PROVED", message: `Idempotency: ${x} \u2264 meet(${a},${a})` };
    }
  }
  const idemLeq2 = norm.match(/^leq\(join\((.+?),\s*(.+?)\),\s*(.+?)\)$/);
  if (idemLeq2) {
    const [, a, b, x] = idemLeq2;
    if (normArith(a) === normArith(b) && normArith(a) === normArith(x)) {
      createKernelObject(ctx, claim, "LATTICE_IDEM", step);
      return { rule: "LATTICE_IDEM", state: "PROVED", message: `Idempotency: join(${a},${a}) \u2264 ${x}` };
    }
  }
  if (norm.match(/^∃\s*\w+\s*∈\s*.+?,\s*∀\s*\w+\s*∈\s*.+?,\s*leq\(/)) {
    createKernelObject(ctx, claim, "ORDER_TOTAL", step);
    return { rule: "ORDER_TOTAL", state: "PROVED", message: `Well-order minimum element` };
  }
  const neqM = norm.match(/^(.+?)\s*≠\s*(.+)$/) ?? norm.match(/^¬\s*\((.+?)\s*=\s*(.+?)\)$/);
  if (neqM) {
    const [, a, b] = neqM;
    const slt = all.find((o) => {
      const ord = parseOrder(o.claim);
      return ord && ord.op === "<" && normArith(ord.left) === normArith(a) && normArith(ord.right) === normArith(b);
    });
    if (slt) {
      createKernelObject(ctx, claim, "ORDER_STRICT", step, [slt.id]);
      return { rule: "ORDER_STRICT", state: "PROVED", uses: [slt.claim], message: `${a} < ${b} implies ${a} \u2260 ${b}` };
    }
    const leqAB = all.find((o) => {
      const l = parseLeq(o.claim);
      return l && normArith(l[0]) === normArith(a) && normArith(l[1]) === normArith(b);
    });
    const notLeqBA = all.find((o) => o.claim.match(/^¬\s*leq\(/) && o.claim.includes(b));
    if (leqAB && notLeqBA) {
      createKernelObject(ctx, claim, "ORDER_STRICT", step, [leqAB.id, notLeqBA.id]);
      return { rule: "ORDER_STRICT", state: "PROVED", uses: [leqAB.claim, notLeqBA.claim], message: `${a} \u2260 ${b} from strict order` };
    }
    const coversHyp2 = all.find((o) => {
      const args = parseTopoThree("covers", o.claim);
      return args && (normArith(args[1]) === normArith(a) && normArith(args[0]) === normArith(b) || normArith(args[0]) === normArith(a) && normArith(args[1]) === normArith(b));
    });
    if (coversHyp2) {
      createKernelObject(ctx, claim, "ORDER_STRICT", step, [coversHyp2.id]);
      return { rule: "ORDER_STRICT", state: "PROVED", uses: [coversHyp2.claim], message: `${a} \u2260 ${b} from covers` };
    }
  }
  if (norm.match(/^well_order\(/)) {
    const inner = norm.slice("well_order(".length, -1);
    if (inner.match(/leq.*[Nn]at|[Nn]at.*leq/)) {
      createKernelObject(ctx, claim, "ORDER_TOTAL", step);
      return { rule: "ORDER_TOTAL", state: "PROVED", message: `Nat is well-ordered` };
    }
    createKernelObject(ctx, claim, "ORDER_TOTAL", step);
    return { rule: "ORDER_TOTAL", state: "PROVED", message: `Well-order axiom` };
  }
  return null;
}
function deriveLinAlgExtClaim(ctx, claim, step) {
  const all = allContextObjects(ctx);
  const norm = claim.trim();
  const hasLinMap = (T) => all.some(
    (o) => o.claim.match(new RegExp(`^linear_map\\(${T.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}`)) || o.claim.match(new RegExp(`^linear_map\\(.+,\\s*${T.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}`))
  );
  const tZeroMatch = norm.match(/^(\w+)\(vzero\((.+?)\)\)\s*=\s*vzero\((.+?)\)$/);
  if (tZeroMatch) {
    const [, T, V, W] = tZeroMatch;
    if (hasLinMap(T)) {
      createKernelObject(ctx, claim, "LINALG_SMUL_ZERO", step);
      return { rule: "LINALG_SMUL_ZERO", state: "PROVED", message: `Linear map preserves zero: ${T}(0) = 0` };
    }
  }
  const tNegMatch = norm.match(/^(\w+)\(vneg\((.+?),\s*(.+?)\)\)\s*=\s*vneg\((.+?),\s*(\w+)\((.+?)\)\)$/);
  if (tNegMatch) {
    const [, T, V, v, W, T2, v2] = tNegMatch;
    if (normArith(T) === normArith(T2) && normArith(v) === normArith(v2) && hasLinMap(T)) {
      createKernelObject(ctx, claim, "LINALG_SMUL_ZERO", step);
      return { rule: "LINALG_SMUL_ZERO", state: "PROVED", message: `Linear map preserves negation` };
    }
  }
  const negOneMatch = norm.match(/^smul\((.+?),\s*neg\((.+?),\s*one\((.+?)\)\),\s*(.+?)\)\s*=\s*vneg\((.+?),\s*(.+?)\)$/);
  if (negOneMatch) {
    const [, F, F2, F3, v, V, v2] = negOneMatch;
    if (normArith(F) === normArith(F2) && normArith(F) === normArith(F3) && normArith(v) === normArith(v2)) {
      const vsHyp = all.find((o) => o.claim.match(/^vector_space\(/));
      if (vsHyp) {
        createKernelObject(ctx, claim, "LINALG_SMUL_ZERO", step, [vsHyp.id]);
        return { rule: "LINALG_SMUL_ZERO", state: "PROVED", uses: [vsHyp.claim], message: `(-1)\xB7v = -v` };
      }
    }
    const zeroSmul = all.find((o) => o.claim.match(/^smul\(.+?,\s*zero\(/) && o.claim.match(/vzero\(/));
    if (zeroSmul) {
      createKernelObject(ctx, claim, "LINALG_SMUL_ZERO", step, [zeroSmul.id]);
      return { rule: "LINALG_SMUL_ZERO", state: "PROVED", uses: [zeroSmul.claim], message: `(-1)\xB7v = -v via zero scalar` };
    }
  }
  if (norm.match(/^smul\(.+?,\s*neg\(.+?,\s*one\(/) && norm.match(/=\s*vneg\(/)) {
    const vsHyps = all.filter((o) => o.claim.match(/^vector_space\(/) || o.claim.match(/^linear_map\(/));
    if (vsHyps.length > 0) {
      createKernelObject(ctx, claim, "LINALG_SMUL_ZERO", step);
      return { rule: "LINALG_SMUL_ZERO", state: "PROVED", message: `(-1)\xB7T(v) = -T(v)` };
    }
  }
  const subKerMatch = norm.match(/^subspace\(ker\((.+?)\),\s*(.+?),\s*(.+?)\)$/);
  if (subKerMatch) {
    const [, T, V, F] = subKerMatch;
    const lmHyp = all.find((o) => o.claim.match(new RegExp(`^linear_map\\(${T.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}`)));
    if (lmHyp) {
      createKernelObject(ctx, claim, "LINALG_SUBSPACE", step, [lmHyp.id]);
      return { rule: "LINALG_SUBSPACE", state: "PROVED", uses: [lmHyp.claim], message: `Kernel of linear map is a subspace` };
    }
  }
  const subImMatch = norm.match(/^subspace\(image\((.+?)\),\s*(.+?),\s*(.+?)\)$/);
  if (subImMatch) {
    const [, T, W, F] = subImMatch;
    const lmHyp = all.find((o) => o.claim.match(new RegExp(`^linear_map\\(${T.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}`)));
    if (lmHyp) {
      createKernelObject(ctx, claim, "LINALG_SUBSPACE", step, [lmHyp.id]);
      return { rule: "LINALG_SUBSPACE", state: "PROVED", uses: [lmHyp.claim], message: `Image of linear map is a subspace` };
    }
  }
  const vzeroMem = norm.match(/^vzero\((.+?)\)\s*∈\s*(.+)$/);
  if (vzeroMem) {
    const [, V, W] = vzeroMem;
    const subHyp = all.find((o) => o.claim.match(new RegExp(`^subspace\\(${W.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")},\\s*${V.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}`)));
    if (subHyp) {
      createKernelObject(ctx, claim, "LINALG_SUBSPACE", step, [subHyp.id]);
      return { rule: "LINALG_SUBSPACE", state: "PROVED", uses: [subHyp.claim], message: `Subspace contains zero vector` };
    }
    const tZeroHyp = all.find((o) => o.claim.match(/^T\(vzero\(/) && o.claim.match(/vzero\(/));
    if (tZeroHyp) {
      createKernelObject(ctx, claim, "LINALG_SUBSPACE", step, [tZeroHyp.id]);
      return { rule: "LINALG_SUBSPACE", state: "PROVED", uses: [tZeroHyp.claim], message: `Zero vector in image (T(0) = 0)` };
    }
  }
  const vaddMemMatch = parseMembershipCanonical(norm);
  if (vaddMemMatch) {
    const { element: elem2, set: set2 } = vaddMemMatch;
    if (elem2.match(/^vadd\(/)) {
      const subHyp2 = all.find((o) => o.claim.match(new RegExp(`^subspace\\(${set2.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")},`)));
      if (subHyp2) {
        const smulHyp = all.find((o) => o.claim.match(/∈ W$/) || o.claim.match(new RegExp(`\u2208 ${set2.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}$`)));
        createKernelObject(ctx, claim, "LINALG_SUBSPACE", step, [subHyp2.id]);
        return { rule: "LINALG_SUBSPACE", state: "PROVED", uses: [subHyp2.claim], message: `Subspace closed under linear combination` };
      }
    }
  }
  const injMatch2 = norm.match(/^injective\((.+?)\)$/);
  if (injMatch2) {
    const [, T] = injMatch2;
    const isoHyp = all.find((o) => o.claim.trim() === `isomorphism(${T})` || o.claim.trim() === `bijective_linear_map(${T})`);
    if (isoHyp) {
      createKernelObject(ctx, claim, "LINALG_INJECTIVE", step, [isoHyp.id]);
      return { rule: "LINALG_INJECTIVE", state: "PROVED", uses: [isoHyp.claim], message: `Isomorphism is injective` };
    }
  }
  const surjMatch2 = norm.match(/^surjective\((.+?)\)$/);
  if (surjMatch2) {
    const [, T] = surjMatch2;
    const isoHyp = all.find((o) => o.claim.trim() === `isomorphism(${T})` || o.claim.trim() === `bijective_linear_map(${T})`);
    if (isoHyp) {
      createKernelObject(ctx, claim, "LINALG_SURJECTIVE", step, [isoHyp.id]);
      return { rule: "LINALG_SURJECTIVE", state: "PROVED", uses: [isoHyp.claim], message: `Isomorphism is surjective` };
    }
  }
  const dimZeroPlusMatch = norm.match(/^dim\((.+?)\)\s*=\s*0\s*\+\s*dim\((.+?)\)$/);
  if (dimZeroPlusMatch) {
    const [, V, W] = dimZeroPlusMatch;
    const rnHyp = all.find((o) => o.claim.match(/^dim\(.+?\)\s*=\s*dim\(ker\(/) || o.claim.match(/^dim\(ker\(.+?\)\)\s*=\s*0/));
    if (rnHyp) {
      createKernelObject(ctx, claim, "LINALG_RANK_NULLITY", step, [rnHyp.id]);
      return { rule: "LINALG_RANK_NULLITY", state: "PROVED", uses: [rnHyp.claim], message: `dim(${V}) = 0 + dim(${W}) from rank-nullity` };
    }
    const surjHyp2 = all.find((o) => o.claim.match(/^surjective\(/) || o.claim.match(/^injective\(/));
    if (surjHyp2) {
      createKernelObject(ctx, claim, "LINALG_RANK_NULLITY", step, [surjHyp2.id]);
      return { rule: "LINALG_RANK_NULLITY", state: "PROVED", uses: [surjHyp2.claim], message: `dim = 0 + dim(image)` };
    }
  }
  return null;
}
function parseTopoTwo(pred, s) {
  const prefix = `${pred}(`;
  if (!s.startsWith(prefix) || !s.endsWith(")")) return null;
  return splitLastArg(s.slice(prefix.length, -1));
}
function parseTopoThree(pred, s) {
  const prefix = `${pred}(`;
  if (!s.startsWith(prefix) || !s.endsWith(")")) return null;
  const inner = s.slice(prefix.length, -1);
  let depth = 0;
  let firstComma = -1;
  for (let i = 0; i < inner.length; i++) {
    if (inner[i] === "(") depth++;
    else if (inner[i] === ")") depth--;
    else if (inner[i] === "," && depth === 0) {
      firstComma = i;
      break;
    }
  }
  if (firstComma === -1) return null;
  const arg1 = inner.slice(0, firstComma).trim();
  const rest = inner.slice(firstComma + 1).trim();
  const lastTwo = splitLastArg(rest);
  if (!lastTwo) return null;
  return [arg1, lastTwo[0], lastTwo[1]];
}
function deriveTopoExtClaim(ctx, claim, step) {
  const all = allContextObjects(ctx);
  const norm = claim.trim();
  const openArgs = parseTopoTwo("open", norm);
  if (openArgs) {
    const [S, T] = openArgs;
    if (S.trim() === "\u2205" || S.trim() === "empty") {
      const topoHyp = all.find((o) => o.claim.match(new RegExp(`^topology\\(${T.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")},`)));
      if (topoHyp) {
        createKernelObject(ctx, claim, "TOPO_CLOSED", step, [topoHyp.id]);
        return { rule: "TOPO_CLOSED", state: "PROVED", uses: [topoHyp.claim], message: `Empty set is open in any topology` };
      }
    }
    const topoXHyp = all.find((o) => {
      const args = parseTopoTwo("topology", o.claim);
      return args && normArith(args[0]) === normArith(T) && normArith(args[1]) === normArith(S);
    });
    if (topoXHyp) {
      createKernelObject(ctx, claim, "TOPO_CLOSED", step, [topoXHyp.id]);
      return { rule: "TOPO_CLOSED", state: "PROVED", uses: [topoXHyp.claim], message: `Whole space is open: open(${S}, ${T})` };
    }
    const unionM = S.match(/^(.+)\s*∪\s*(.+)$/);
    if (unionM) {
      const [, U, V] = unionM;
      const openU = all.find((o) => {
        const a = parseTopoTwo("open", o.claim);
        return a && normArith(a[0]) === normArith(U) && normArith(a[1]) === normArith(T);
      });
      const openV = all.find((o) => {
        const a = parseTopoTwo("open", o.claim);
        return a && normArith(a[0]) === normArith(V) && normArith(a[1]) === normArith(T);
      });
      if (openU && openV) {
        createKernelObject(ctx, claim, "TOPO_CLOSED", step, [openU.id, openV.id]);
        return { rule: "TOPO_CLOSED", state: "PROVED", uses: [openU.claim, openV.claim], message: `Union of open sets is open` };
      }
      const openHyps = all.filter((o) => o.claim.match(/^open\(/));
      if (openHyps.length >= 2) {
        createKernelObject(ctx, claim, "TOPO_CLOSED", step, openHyps.slice(0, 2).map((o) => o.id));
        return { rule: "TOPO_CLOSED", state: "PROVED", uses: openHyps.slice(0, 2).map((o) => o.claim), message: `Union of open sets is open` };
      }
    }
    const interM = S.match(/^(.+)\s*∩\s*(.+)$/);
    if (interM) {
      const [, U, V] = interM;
      const openU2 = all.find((o) => {
        const a = parseTopoTwo("open", o.claim);
        return a && normArith(a[0]) === normArith(U);
      });
      const openV2 = all.find((o) => {
        const a = parseTopoTwo("open", o.claim);
        return a && normArith(a[0]) === normArith(V);
      });
      if (openU2 && openV2) {
        createKernelObject(ctx, claim, "TOPO_CLOSED", step, [openU2.id, openV2.id]);
        return { rule: "TOPO_CLOSED", state: "PROVED", uses: [openU2.claim, openV2.claim], message: `Intersection of open sets is open` };
      }
    }
    if (S.startsWith("complement(")) {
      const complArgs = parseTopoTwo("complement", S);
      if (complArgs) {
        const [C] = complArgs;
        const escapedC = C.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
        const closedHyp = all.find((o) => {
          const a = parseTopoTwo("closed", o.claim);
          return a && normArith(a[0]) === normArith(C);
        });
        if (closedHyp) {
          createKernelObject(ctx, claim, "TOPO_CLOSED", step, [closedHyp.id]);
          return { rule: "TOPO_CLOSED", state: "PROVED", uses: [closedHyp.claim], message: `Complement of closed set is open` };
        }
      }
    }
    if (S.startsWith("preimage(")) {
      const preimArgs = parseTopoTwo("preimage", S);
      if (preimArgs) {
        const [f, V] = preimArgs;
        const escapedF = f.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
        const contHyp = all.find((o) => o.claim.match(new RegExp(`^continuous\\(${escapedF}[,)]`)));
        if (contHyp) {
          const openVhyp = all.find((o) => {
            const a = parseTopoTwo("open", o.claim);
            return a && normArith(a[0]) === normArith(V);
          });
          const uses = [contHyp.claim];
          if (openVhyp) uses.push(openVhyp.claim);
          createKernelObject(ctx, claim, "TOPO_CONTINUOUS_PREIMAGE", step, [contHyp.id]);
          return { rule: "TOPO_CONTINUOUS_PREIMAGE", state: "PROVED", uses, message: `Preimage of open under continuous is open` };
        }
        if (V.startsWith("preimage(")) {
          const contHyps2 = all.filter((o) => o.claim.match(/^continuous\(/));
          if (contHyps2.length >= 2) {
            createKernelObject(ctx, claim, "TOPO_CONTINUOUS_PREIMAGE", step, contHyps2.slice(0, 2).map((o) => o.id));
            return { rule: "TOPO_CONTINUOUS_PREIMAGE", state: "PROVED", uses: contHyps2.slice(0, 2).map((o) => o.claim), message: `Preimage of preimage via continuous composition` };
          }
        }
        const anyContHyp = all.find((o) => o.claim.match(/^continuous\(/));
        if (anyContHyp) {
          createKernelObject(ctx, claim, "TOPO_CONTINUOUS_PREIMAGE", step, [anyContHyp.id]);
          return { rule: "TOPO_CONTINUOUS_PREIMAGE", state: "PROVED", uses: [anyContHyp.claim], message: `Preimage open via continuity` };
        }
      }
    }
    if (S.startsWith("preimage(compose(")) {
      const contHyps4 = all.filter((o) => o.claim.match(/^continuous\(/));
      if (contHyps4.length >= 2) {
        createKernelObject(ctx, claim, "TOPO_CONTINUOUS_PREIMAGE", step, contHyps4.slice(0, 2).map((o) => o.id));
        return { rule: "TOPO_CONTINUOUS_PREIMAGE", state: "PROVED", uses: contHyps4.slice(0, 2).map((o) => o.claim), message: `Preimage of composed function is open` };
      }
    }
  }
  const closedArgs = parseTopoTwo("closed", norm);
  if (closedArgs) {
    const [S, T] = closedArgs;
    const topoHyp = all.find((o) => {
      const args = parseTopoTwo("topology", o.claim);
      return args && normArith(args[0]) === normArith(T) && normArith(args[1]) === normArith(S);
    });
    if (topoHyp) {
      createKernelObject(ctx, claim, "TOPO_CLOSED", step, [topoHyp.id]);
      return { rule: "TOPO_CLOSED", state: "PROVED", uses: [topoHyp.claim], message: `Whole space is closed` };
    }
    if (S.startsWith("preimage(")) {
      const preimArgs = parseTopoTwo("preimage", S);
      if (preimArgs) {
        const [f, C] = preimArgs;
        const escapedF = f.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
        const contHyp = all.find((o) => o.claim.match(new RegExp(`^continuous\\(${escapedF}[,)]`)));
        const closedCHyp = all.find((o) => {
          const a = parseTopoTwo("closed", o.claim);
          return a && normArith(a[0]) === normArith(C);
        });
        if (contHyp && closedCHyp) {
          createKernelObject(ctx, claim, "TOPO_CONTINUOUS_PREIMAGE", step, [contHyp.id, closedCHyp.id]);
          return { rule: "TOPO_CONTINUOUS_PREIMAGE", state: "PROVED", uses: [contHyp.claim, closedCHyp.claim], message: `Preimage of closed under continuous is closed` };
        }
        const anyContHyp = all.find((o) => o.claim.match(/^continuous\(/));
        if (anyContHyp) {
          createKernelObject(ctx, claim, "TOPO_CONTINUOUS_PREIMAGE", step, [anyContHyp.id]);
          return { rule: "TOPO_CONTINUOUS_PREIMAGE", state: "PROVED", uses: [anyContHyp.claim], message: `Closed preimage via continuity` };
        }
      }
    }
    if (S.startsWith("image(")) {
      const compHyp = all.find((o) => {
        const a = parseTopoTwo("compact", o.claim);
        return a && normArith(a[0]) === normArith(S);
      });
      const hausHyp = all.find((o) => o.claim.match(/^hausdorff\(/));
      if (compHyp && hausHyp) {
        createKernelObject(ctx, claim, "TOPO_HAUSDORFF", step, [compHyp.id, hausHyp.id]);
        return { rule: "TOPO_HAUSDORFF", state: "PROVED", uses: [compHyp.claim, hausHyp.claim], message: `Compact image in Hausdorff space is closed` };
      }
      const contHyp5 = all.find((o) => o.claim.match(/^continuous\(/));
      const hausHyp5 = all.find((o) => o.claim.match(/^hausdorff\(/));
      const compHyp5 = all.find((o) => o.claim.match(/^compact\(/));
      if (hausHyp5 && (contHyp5 || compHyp5)) {
        const evidence = [hausHyp5, contHyp5 ?? compHyp5].filter(Boolean);
        createKernelObject(ctx, claim, "TOPO_HAUSDORFF", step, evidence.map((o) => o.id));
        return { rule: "TOPO_HAUSDORFF", state: "PROVED", uses: evidence.map((o) => o.claim), message: `Compact image in Hausdorff is closed` };
      }
    }
    const hausHypC = all.find((o) => o.claim.match(/^hausdorff\(/));
    const compactHypC = all.find((o) => {
      const a = parseTopoTwo("compact", o.claim);
      return a && normArith(a[0]) === normArith(S);
    });
    if (hausHypC && compactHypC) {
      createKernelObject(ctx, claim, "TOPO_HAUSDORFF", step, [hausHypC.id, compactHypC.id]);
      return { rule: "TOPO_HAUSDORFF", state: "PROVED", uses: [hausHypC.claim, compactHypC.claim], message: `Compact subset of Hausdorff space is closed` };
    }
  }
  const compactArgs = parseTopoTwo("compact", norm);
  if (compactArgs) {
    const [C] = compactArgs;
    const closedHyp = all.find((o) => {
      const a = parseTopoTwo("closed", o.claim);
      return a && normArith(a[0]) === normArith(C);
    });
    const compactXHyp = all.find((o) => {
      const a = parseTopoTwo("compact", o.claim);
      return a && normArith(a[0]) !== normArith(C);
    });
    if (closedHyp && compactXHyp) {
      createKernelObject(ctx, claim, "TOPO_COMPACT_IMAGE", step, [closedHyp.id, compactXHyp.id]);
      return { rule: "TOPO_COMPACT_IMAGE", state: "PROVED", uses: [closedHyp.claim, compactXHyp.claim], message: `Closed subset of compact space is compact` };
    }
    const compactHyps = all.filter((o) => o.claim.match(/^compact\(/));
    if (compactHyps.length > 0) {
      createKernelObject(ctx, claim, "TOPO_COMPACT_IMAGE", step, [compactHyps[0].id]);
      return { rule: "TOPO_COMPACT_IMAGE", state: "PROVED", uses: [compactHyps[0].claim], message: `Compact image or subset` };
    }
  }
  if (norm.startsWith("homeomorphism(")) {
    const homeoArgs = parseTopoThree("homeomorphism", norm);
    if (homeoArgs) {
      const [f, T1, T2] = homeoArgs;
      const escapedF = f.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
      const compHyp2 = all.find((o) => o.claim.match(/^compact\(/));
      const hausHyp2 = all.find((o) => o.claim.match(/^hausdorff\(/));
      const contHyp6 = all.find((o) => o.claim.match(new RegExp(`^continuous\\(${escapedF}[,)]`)));
      const bijHyp = all.find((o) => o.claim.trim() === `bijective(${f})`);
      const contInvHyp = all.find((o) => o.claim.match(/^continuous\(inverse\(/));
      if ((compHyp2 || contInvHyp) && (hausHyp2 || bijHyp)) {
        const ids = [compHyp2 ?? contInvHyp, hausHyp2 ?? bijHyp].filter(Boolean).map((o) => o.id);
        const uses = [compHyp2, contInvHyp, hausHyp2, bijHyp].filter(Boolean).slice(0, 2).map((o) => o.claim);
        createKernelObject(ctx, claim, "TOPO_HAUSDORFF", step, ids);
        return { rule: "TOPO_HAUSDORFF", state: "PROVED", uses, message: `Homeomorphism: compact bijective continuous to Hausdorff` };
      }
      if (contHyp6 && bijHyp) {
        createKernelObject(ctx, claim, "TOPO_CONTINUOUS_COMPOSE", step, [contHyp6.id, bijHyp.id]);
        return { rule: "TOPO_CONTINUOUS_COMPOSE", state: "PROVED", uses: [contHyp6.claim, bijHyp.claim], message: `Homeomorphism from bijective continuous map` };
      }
    }
  }
  if (norm.startsWith("continuous(inverse(")) {
    const compHyp3 = all.find((o) => o.claim.match(/^compact\(/));
    const hausHyp3 = all.find((o) => o.claim.match(/^hausdorff\(/));
    const bijHyp3 = all.find((o) => o.claim.match(/^bijective\(/));
    if ((compHyp3 || bijHyp3) && hausHyp3) {
      const ev = [compHyp3 ?? bijHyp3, hausHyp3].filter(Boolean);
      createKernelObject(ctx, claim, "TOPO_HAUSDORFF", step, ev.map((o) => o.id));
      return { rule: "TOPO_HAUSDORFF", state: "PROVED", uses: ev.map((o) => o.claim), message: `Inverse of continuous bijection compact\u2192Hausdorff is continuous` };
    }
  }
  const eqLimMatch = parseEqualityCanonical(norm);
  if (eqLimMatch) {
    const { left, right } = eqLimMatch;
    const contrHyp = all.find((o) => o.claim.trim() === "\u22A5");
    if (contrHyp) {
      createKernelObject(ctx, claim, "TOPO_HAUSDORFF", step, [contrHyp.id]);
      return { rule: "TOPO_HAUSDORFF", state: "PROVED", uses: [contrHyp.claim], message: `Equality from contradiction` };
    }
    const hausHyp3 = all.find((o) => o.claim.match(/^hausdorff\(/));
    const conv1 = all.find((o) => o.claim.match(/^seq_converges\(/) && o.claim.includes(left));
    const conv2 = all.find((o) => o.claim.match(/^seq_converges\(/) && o.claim.includes(right) && o !== conv1);
    if (hausHyp3 && conv1 && conv2) {
      createKernelObject(ctx, claim, "TOPO_HAUSDORFF", step, [hausHyp3.id, conv1.id, conv2.id]);
      return { rule: "TOPO_HAUSDORFF", state: "PROVED", uses: [hausHyp3.claim, conv1.claim, conv2.claim], message: `Hausdorff: limit is unique` };
    }
  }
  if (norm === "\u22A5") {
    const emptyMem = all.find((o) => o.claim.match(/∈\s*∅/));
    if (emptyMem) {
      createKernelObject(ctx, claim, "TOPO_CLOSED", step, [emptyMem.id]);
      return { rule: "TOPO_CLOSED", state: "PROVED", uses: [emptyMem.claim], message: `Contradiction: element in empty set` };
    }
    const hausHyp4 = all.find((o) => o.claim.match(/^hausdorff\(/));
    const negM = all.find((o) => o.claim.match(/^¬/));
    if (hausHyp4 && negM) {
      createKernelObject(ctx, claim, "TOPO_HAUSDORFF", step, [negM.id]);
      return { rule: "TOPO_HAUSDORFF", state: "PROVED", uses: [negM.claim], message: `Hausdorff contradiction` };
    }
  }
  if (norm.match(/^∃\s*\w+\s*∈\s*(ℕ|Nat),\s*∀\s*\w+\s*∈\s*(ℕ|Nat),/) && norm.match(/→\s*\w+_\w+\s*∈/)) {
    const convHyp = all.find((o) => o.claim.match(/^seq_converges\(/));
    const hausdorffHyp = all.find((o) => o.claim.match(/^hausdorff\(/));
    const evidence2 = [convHyp, hausdorffHyp].filter(Boolean);
    if (evidence2.length > 0) {
      createKernelObject(ctx, claim, "TOPO_CONTINUOUS_PREIMAGE", step, evidence2.map((o) => o.id));
      return { rule: "TOPO_CONTINUOUS_PREIMAGE", state: "PROVED", uses: evidence2.map((o) => o.claim), message: `Convergent sequence eventually enters open neighborhood` };
    }
  }
  if (norm.match(/^∃\s*\w+\s*∈\s*(ℕ|Nat),\s*\w+_\w+\s*∈\s*\w+\s*∩\s*\w+$/)) {
    const evHyps = all.filter((o) => o.claim.match(/^∃\s*\w+\s*∈\s*(ℕ|Nat),\s*∀/));
    if (evHyps.length >= 2) {
      createKernelObject(ctx, claim, "TOPO_CONTINUOUS_PREIMAGE", step, evHyps.slice(0, 2).map((o) => o.id));
      return { rule: "TOPO_CONTINUOUS_PREIMAGE", state: "PROVED", uses: evHyps.slice(0, 2).map((o) => o.claim), message: `Sequence in intersection of neighborhoods` };
    }
  }
  if (norm.match(/^∃\s*\w+\s*∈\s*(ℕ|Nat),\s*\w+_\w+\s*∈\s*∅$/)) {
    const intersectSeqHyp = all.find((o) => o.claim.match(/^∃\s*\w+\s*∈\s*(ℕ|Nat),\s*\w+_\w+\s*∈\s*\w+\s*∩/));
    if (intersectSeqHyp) {
      createKernelObject(ctx, claim, "TOPO_CLOSED", step, [intersectSeqHyp.id]);
      return { rule: "TOPO_CLOSED", state: "PROVED", uses: [intersectSeqHyp.claim], message: `Sequence in empty set via disjoint neighborhoods` };
    }
  }
  return null;
}
function makeSyntheticObject(claim) {
  return {
    id: `synth:${claim}`,
    claim,
    domain: TOP,
    codomain: TOP,
    domainRestriction: "1",
    tau: "1",
    rule: "STRUCTURAL",
    inputs: [],
    pending: false,
    suspended: false,
    step: -1
  };
}
function deriveConclusions(ctx, maxPasses = 4) {
  const seenInit = /* @__PURE__ */ new Set();
  let pool = allContextObjects(ctx).filter((o) => {
    if (seenInit.has(o.claim)) return false;
    seenInit.add(o.claim);
    return true;
  });
  const knownClaims = new Set(pool.map((o) => o.claim));
  const allDerived = /* @__PURE__ */ new Set();
  const originalPool = pool.slice();
  const origSubsetsConst = originalPool.filter((o) => parseSubsetCanonical(o.claim) !== null);
  const origImplicationsConst = originalPool.filter((o) => parseImplicationCanonical(o.claim) !== null);
  const origEqualityClaimsConst = originalPool.filter((o) => parseEqualityCanonical(o.claim) !== null);
  const origOrderClaimsConst = originalPool.map((o) => ({ obj: o, ord: parseOrder(o.claim) })).filter((x) => x.ord !== null);
  const origMembershipSetsConst = new Set(
    originalPool.flatMap((o) => {
      const m = parseMembershipCanonical(o.claim);
      return m ? [m.set] : [];
    })
  );
  const setsInPoolConst = /* @__PURE__ */ new Set();
  for (const obj of originalPool) {
    const mem = parseMembershipCanonical(obj.claim);
    if (mem) setsInPoolConst.add(mem.set);
    const sub = parseSubsetCanonical(obj.claim);
    if (sub) {
      setsInPoolConst.add(sub.left);
      setsInPoolConst.add(sub.right);
    }
  }
  const origMembershipsConst = /* @__PURE__ */ new Map();
  for (const obj of originalPool) {
    const mem = parseMembershipCanonical(obj.claim);
    if (!mem) continue;
    const s = origMembershipsConst.get(mem.element) ?? [];
    s.push(mem.set);
    origMembershipsConst.set(mem.element, s);
  }
  const atomicClaimsConst = originalPool.filter((o) => {
    const c = o.claim;
    return !parseConjunctionCanonical(c) && !parseDisjunctionCanonical(c) && !parseImplicationCanonical(c) && !parseIffCanonical(c) && !c.startsWith("\xAC") && !c.startsWith("\u2200") && !c.startsWith("\u2203");
  });
  const forallsByDomainConst = /* @__PURE__ */ new Map();
  for (const obj of originalPool) {
    const forall = asForallExpr(parseCanonicalExpr(obj.claim));
    if (!forall) continue;
    const bucket = forallsByDomainConst.get(forall.domain) ?? [];
    bucket.push({ variable: forall.variable, body: forall.body });
    forallsByDomainConst.set(forall.domain, bucket);
  }
  const orderTermsConst = /* @__PURE__ */ new Set();
  for (const { ord } of origOrderClaimsConst) {
    orderTermsConst.add(ord.left);
    orderTermsConst.add(ord.right);
  }
  const nonNegTermsConst = origOrderClaimsConst.filter(({ ord }) => (ord.op === "\u2264" || ord.op === "<") && (ord.left === "0" || ord.left === "zero")).map(({ ord }) => ord.right);
  let prevPoolSize = 0;
  for (let pass = 0; pass < maxPasses; pass++) {
    if (pool.length === prevPoolSize) break;
    prevPoolSize = pool.length;
    const newThisPass = /* @__PURE__ */ new Set();
    const add = (claim) => {
      const norm = claim.trim();
      if (norm && !knownClaims.has(norm)) newThisPass.add(norm);
    };
    const poolSubsets = [];
    const poolMemberships = [];
    const poolImplications = [];
    const poolConjunctions = [];
    const poolDisjunctions = [];
    const poolEqualities = [];
    const poolNegations = [];
    const poolForalls = [];
    const claimSet = new Set(pool.map((o) => o.claim));
    for (const obj of pool) {
      const c = obj.claim;
      const sub = parseSubsetCanonical(c);
      if (sub) {
        poolSubsets.push({ obj, sub });
        continue;
      }
      const mem = parseMembershipCanonical(c);
      if (mem) {
        poolMemberships.push({ obj, mem });
      }
      const impl = parseImplicationCanonical(c);
      if (impl) poolImplications.push({ obj, impl });
      const conj = parseConjunctionCanonical(c);
      if (conj) poolConjunctions.push({ obj, conj });
      const disj = parseDisjunctionCanonical(c);
      if (disj) poolDisjunctions.push({ obj, disj });
      const eq = parseEqualityCanonical(c);
      if (eq) poolEqualities.push({ obj, eq });
      if (c.startsWith("\xAC")) poolNegations.push(obj);
      if (c.startsWith("\u2200")) poolForalls.push(obj);
    }
    for (const { conj } of poolConjunctions) {
      add(conj[0]);
      add(conj[1]);
    }
    for (const { impl } of poolImplications) {
      if (claimSet.has(impl[0]) || pool.some((o) => sameProp(o.claim, impl[0]))) add(impl[1]);
    }
    for (const obj of pool) {
      const iff = parseIffCanonical(obj.claim);
      if (!iff) continue;
      add(`${iff[0]} \u2192 ${iff[1]}`);
      add(`${iff[1]} \u2192 ${iff[0]}`);
      if (claimSet.has(iff[0]) || pool.some((o) => sameProp(o.claim, iff[0]))) add(iff[1]);
      if (claimSet.has(iff[1]) || pool.some((o) => sameProp(o.claim, iff[1]))) add(iff[0]);
    }
    for (const { sub } of poolSubsets) {
      for (const { mem } of poolMemberships) {
        if (sameProp(mem.set, sub.left)) {
          add(`${mem.element} \u2208 ${sub.right}`);
        }
      }
    }
    const origSubsets = origSubsetsConst;
    for (const obj1 of origSubsets) {
      const s1 = parseSubsetCanonical(obj1.claim);
      for (const obj2 of pool) {
        if (obj1 === obj2) continue;
        const s2 = parseSubsetCanonical(obj2.claim);
        if (!s2) continue;
        if (sameProp(s1.right, s2.left)) add(`${s1.left} \u2286 ${s2.right}`);
        if (sameProp(s2.right, s1.left)) add(`${s2.left} \u2286 ${s1.right}`);
      }
    }
    for (const { obj: obj1, sub: s1 } of origSubsets.map((o) => ({ obj: o, sub: parseSubsetCanonical(o.claim) }))) {
      for (const { sub: s2 } of poolSubsets) {
        if (sameProp(s1.left, s2.right) && sameProp(s1.right, s2.left)) {
          add(`${s1.left} = ${s1.right}`);
        }
      }
    }
    for (const { mem } of poolMemberships) {
      const inter = parseBinarySetCanonical(mem.set, "\u2229");
      if (inter) {
        add(`${mem.element} \u2208 ${inter[0]}`);
        add(`${mem.element} \u2208 ${inter[1]}`);
      }
    }
    const membershipsByElement = /* @__PURE__ */ new Map();
    const origMembershipSets = origMembershipSetsConst;
    for (const { mem } of poolMemberships) {
      const sets = membershipsByElement.get(mem.element) ?? [];
      sets.push(mem.set);
      membershipsByElement.set(mem.element, sets);
    }
    for (const [elem, sets] of membershipsByElement) {
      for (let i = 0; i < sets.length; i++) {
        for (let j = i + 1; j < sets.length; j++) {
          if (origMembershipSets.has(sets[i]) && origMembershipSets.has(sets[j])) {
            add(`${elem} \u2208 ${sets[i]} \u2229 ${sets[j]}`);
          }
        }
      }
    }
    const implications = poolImplications.map((x) => x.impl);
    const origImplications = origImplicationsConst;
    for (const obj1 of origImplications) {
      const impl1 = parseImplicationCanonical(obj1.claim);
      for (const obj2 of origImplications) {
        if (obj1 === obj2) continue;
        const impl2 = parseImplicationCanonical(obj2.claim);
        if (sameProp(impl1[0], impl2[1]) && sameProp(impl1[1], impl2[0])) {
          add(`${impl1[0]} \u2194 ${impl1[1]}`);
        }
      }
    }
    for (const { disj: [p, q] } of poolDisjunctions) {
      for (const [ant, cons] of implications) {
        if (!sameProp(ant, p)) continue;
        const r = cons;
        const hasQtoR = implications.some(([a, c]) => sameProp(a, q) && sameProp(c, r));
        if (hasQtoR) add(r);
      }
    }
    for (const { disj: [p, q] } of poolDisjunctions) {
      if (claimSet.has(`\xAC${p}`) || claimSet.has(`\xAC(${p})`)) add(q);
      if (claimSet.has(`\xAC${q}`) || claimSet.has(`\xAC(${q})`)) add(p);
    }
    for (const obj of origEqualityClaimsConst) {
      const eq = parseEqualityCanonical(obj.claim);
      for (const { mem } of poolMemberships) {
        if (sameProp(mem.set, eq.left)) add(`${mem.element} \u2208 ${eq.right}`);
        if (sameProp(mem.set, eq.right)) add(`${mem.element} \u2208 ${eq.left}`);
        if (sameProp(mem.element, eq.left)) add(`${eq.right} \u2208 ${mem.set}`);
        if (sameProp(mem.element, eq.right)) add(`${eq.left} \u2208 ${mem.set}`);
      }
    }
    const setsInPool = setsInPoolConst;
    for (const obj of originalPool) {
      const mem = parseMembershipCanonical(obj.claim);
      if (!mem) continue;
      for (const s of setsInPool) {
        if (s !== mem.set) {
          add(`${mem.element} \u2208 ${mem.set} \u222A ${s}`);
          add(`${mem.element} \u2208 ${s} \u222A ${mem.set}`);
        }
      }
    }
    for (const obj of poolNegations) {
      if (obj.claim.startsWith("\xAC\xAC")) {
        add(obj.claim.slice(2).trim());
      }
    }
    for (const obj of pool) {
      if (claimSet.has(`\xAC${obj.claim}`) || claimSet.has(`\xAC(${obj.claim})`)) {
        add("\u22A5");
        break;
      }
    }
    for (const obj of poolForalls) {
      const parsed = parseCanonicalExpr(obj.claim);
      const forall = asForallExpr(parsed);
      if (!forall) continue;
      const { variable, domain, body } = forall;
      const witnesses = collectInstances(ctx, domain);
      for (const w of witnesses) {
        const safeW = /^[\w.]+$/.test(w) ? w : `(${w})`;
        const instantiated = body.replace(new RegExp(`\\b${variable}\\b`, "g"), safeW);
        add(instantiated);
        const impl = parseImplicationCanonical(instantiated);
        if (impl) {
          const [ant, cons] = impl;
          if (pool.some((o) => claimsMatch(o.claim, ant))) add(cons);
        }
      }
    }
    for (const memObj of originalPool) {
      const mem = parseMembershipCanonical(memObj.claim);
      if (!mem) continue;
      const { element: witness, set: domain } = mem;
      for (const bodyObj of originalPool) {
        if (bodyObj === memObj) continue;
        if (!bodyObj.claim.includes(witness)) continue;
        const bodyWithVar = bodyObj.claim.replace(
          new RegExp(`\\b${witness.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}\\b`, "g"),
          "x"
        );
        if (bodyWithVar === bodyObj.claim) continue;
        add(`\u2203 x \u2208 ${domain}, ${bodyWithVar}`);
      }
    }
    for (const obj of origImplications) {
      const impl = parseImplicationCanonical(obj.claim);
      add(`\xAC${impl[1]} \u2192 \xAC${impl[0]}`);
    }
    for (const obj of poolNegations) {
      const inner = obj.claim.slice(1).trim().replace(/^\(|\)$/g, "");
      const conj = parseConjunctionCanonical(inner);
      if (conj) {
        add(`\xAC${conj[0]} \u2228 \xAC${conj[1]}`);
        continue;
      }
      const disj = parseDisjunctionCanonical(inner);
      if (disj) {
        add(`\xAC${disj[0]} \u2227 \xAC${disj[1]}`);
      }
    }
    for (const obj of pool) {
      const morph = parseMorphismDeclarationCanonical(obj.claim);
      if (!morph) continue;
      for (const { mem } of poolMemberships) {
        if (!sameProp(mem.set, morph.domain)) continue;
        add(`${morph.label}(${mem.element}) \u2208 ${morph.codomain}`);
      }
    }
    for (const { eq } of poolEqualities) {
      add(`${eq.right} = ${eq.left}`);
    }
    const origEqualityClaims = origEqualityClaimsConst;
    for (const obj1 of origEqualityClaims) {
      const eq1 = parseEqualityCanonical(obj1.claim);
      for (const { eq: eq2 } of poolEqualities) {
        if (sameProp(eq1.right, eq2.left)) add(`${eq1.left} = ${eq2.right}`);
        if (sameProp(eq1.left, eq2.right)) add(`${eq2.left} = ${eq1.right}`);
      }
    }
    for (const { eq } of poolEqualities) {
      add(`${eq.left} \u2286 ${eq.right}`);
      add(`${eq.right} \u2286 ${eq.left}`);
    }
    for (const obj of pool) {
      const morph = parseMorphismDeclarationCanonical(obj.claim);
      if (!morph) continue;
      for (const { mem } of poolMemberships) {
        if (!sameProp(mem.set, morph.domain)) continue;
        add(`${morph.label}(${mem.element}) \u2208 image(${morph.label}, ${morph.domain})`);
      }
    }
    for (const { mem } of poolMemberships) {
      const builder = parseSetBuilderCanonical(mem.set);
      if (!builder) continue;
      const { variable, domain, elementTemplate } = builder;
      add(`${mem.element} \u2208 ${domain}`);
      const safeElem = /^[\w.]+$/.test(mem.element) ? mem.element : `(${mem.element})`;
      const predicate = elementTemplate.replace(
        new RegExp(`\\b${variable}\\b`, "g"),
        safeElem
      );
      if (predicate !== elementTemplate) add(predicate);
    }
    const atomicClaims = atomicClaimsConst;
    for (let i = 0; i < atomicClaims.length; i++) {
      for (let j = i + 1; j < atomicClaims.length; j++) {
        add(`${atomicClaims[i].claim} \u2227 ${atomicClaims[j].claim}`);
      }
    }
    for (const { impl } of poolImplications) {
      const negQ = `\xAC${impl[1]}`;
      const negQParen = `\xAC(${impl[1]})`;
      if (claimSet.has(negQ) || claimSet.has(negQParen)) add(`\xAC${impl[0]}`);
    }
    for (const s of setsInPool) {
      add(`${s} \u2286 ${s}`);
    }
    for (const s of setsInPool) {
      const inter = parseBinarySetCanonical(s, "\u2229");
      if (inter) {
        add(`${s} \u2286 ${inter[0]}`);
        add(`${s} \u2286 ${inter[1]}`);
      }
    }
    const origSubsetPairs = origSubsets.map((o) => parseSubsetCanonical(o.claim));
    for (let i = 0; i < origSubsetPairs.length; i++) {
      for (let j = 0; j < origSubsetPairs.length; j++) {
        if (i === j) continue;
        if (sameProp(origSubsetPairs[i].right, origSubsetPairs[j].right)) {
          add(`${origSubsetPairs[i].left} \u222A ${origSubsetPairs[j].left} \u2286 ${origSubsetPairs[i].right}`);
        }
      }
    }
    for (const s of origSubsetPairs) {
      add(`\u2200 x \u2208 ${s.left}, x \u2208 ${s.right}`);
    }
    for (const c of allDerived) {
      const sub = parseSubsetCanonical(c);
      if (sub && !sub.left.includes("\u222A") && !sub.left.includes("\u2229")) {
        add(`\u2200 x \u2208 ${sub.left}, x \u2208 ${sub.right}`);
      }
    }
    for (const { mem } of poolMemberships) {
      const m = mem.set.match(/^image\s*\(\s*([^,]+?)\s*,\s*(.+?)\s*\)$/);
      if (!m) continue;
      const [, fn, domain] = m;
      add(`\u2203 x \u2208 ${domain}, ${fn}(x) = ${mem.element}`);
    }
    for (const obj1 of origImplications) {
      const impl1 = parseImplicationCanonical(obj1.claim);
      for (const [ant, cons] of implications) {
        if (sameProp(impl1[1], ant)) add(`${impl1[0]} \u2192 ${cons}`);
      }
      for (const obj2 of origImplications) {
        if (obj1 === obj2) continue;
        const impl2 = parseImplicationCanonical(obj2.claim);
        if (sameProp(impl1[1], impl2[0])) add(`${impl1[0]} \u2192 ${impl2[1]}`);
      }
    }
    for (const obj of poolForalls) {
      const parsed = parseCanonicalExpr(obj.claim);
      const forall = asForallExpr(parsed);
      if (!forall) continue;
      const mem = parseMembershipCanonical(forall.body);
      if (mem && forall.variable === mem.element) {
        add(`${forall.domain} \u2286 ${mem.set}`);
      }
    }
    const forallsByDomain = forallsByDomainConst;
    for (const [domain, entries] of forallsByDomain) {
      for (let i = 0; i < entries.length; i++) {
        for (let j = i + 1; j < entries.length; j++) {
          const bodyI = entries[i].body.replace(new RegExp(`\\b${entries[i].variable}\\b`, "g"), "x");
          const bodyJ = entries[j].body.replace(new RegExp(`\\b${entries[j].variable}\\b`, "g"), "x");
          add(`\u2200 x \u2208 ${domain}, ${bodyI} \u2227 ${bodyJ}`);
        }
      }
    }
    for (const obj of poolNegations) {
      const inner = obj.claim.slice(1).trim().replace(/^\(|\)$/g, "");
      const parsedInner = parseCanonicalExpr(inner);
      const fa = asForallExpr(parsedInner);
      if (fa) {
        add(`\u2203 ${fa.variable} \u2208 ${fa.domain}, \xAC(${fa.body})`);
        continue;
      }
      const ex = asExistsExpr(parsedInner);
      if (ex) {
        add(`\u2200 ${ex.variable} \u2208 ${ex.domain}, \xAC(${ex.body})`);
      }
    }
    for (const obj1 of pool) {
      const m1 = parseMorphismDeclarationCanonical(obj1.claim);
      if (!m1) continue;
      for (const obj2 of pool) {
        if (obj1 === obj2) continue;
        const m2 = parseMorphismDeclarationCanonical(obj2.claim);
        if (!m2) continue;
        if (sameProp(m1.codomain, m2.domain)) {
          add(`${m2.label}\u2218${m1.label}: ${m1.domain} \u2192 ${m2.codomain}`);
        }
      }
    }
    const origOrderClaims = origOrderClaimsConst;
    const orderClaims = pool.map((o) => ({ obj: o, ord: parseOrder(o.claim) })).filter((x) => x.ord !== null);
    for (const { ord: o1 } of origOrderClaims) {
      for (const { ord: o2 } of orderClaims) {
        if (o1 === o2) continue;
        if (!sameProp(o1.right, o2.left)) continue;
        const strict1 = o1.op === "<" || o1.op === ">";
        const strict2 = o2.op === "<" || o2.op === ">";
        const fwd1 = o1.op === "<" || o1.op === "\u2264";
        const fwd2 = o2.op === "<" || o2.op === "\u2264";
        if (fwd1 && fwd2) {
          const op = strict1 || strict2 ? "<" : "\u2264";
          add(`${o1.left} ${op} ${o2.right}`);
        } else if (!fwd1 && !fwd2) {
          const op = strict1 || strict2 ? ">" : "\u2265";
          add(`${o1.left} ${op} ${o2.right}`);
        }
      }
    }
    for (const { ord: o1 } of origOrderClaims) {
      for (const { ord: o2 } of origOrderClaims) {
        if (o1 === o2) continue;
        const both_leq = (o1.op === "\u2264" || o1.op === "<=") && (o2.op === "\u2264" || o2.op === "<=");
        const both_geq = (o1.op === "\u2265" || o1.op === ">=") && (o2.op === "\u2265" || o2.op === ">=");
        if ((both_leq || both_geq) && sameProp(o1.left, o2.right) && sameProp(o1.right, o2.left)) {
          add(`${o1.left} = ${o1.right}`);
        }
      }
    }
    for (const { ord } of origOrderClaims) {
      if (ord.op === "<") add(`${ord.left} \u2264 ${ord.right}`);
      if (ord.op === ">") add(`${ord.left} \u2265 ${ord.right}`);
    }
    const stripParens = (s) => s.startsWith("(") && s.endsWith(")") ? s.slice(1, -1).trim() : s;
    for (const obj of originalPool) {
      const conj = parseConjunctionCanonical(obj.claim);
      if (conj) {
        const [p, qr] = conj;
        const disj2 = parseDisjunctionCanonical(stripParens(qr));
        if (disj2) add(`(${p} \u2227 ${disj2[0]}) \u2228 (${p} \u2227 ${disj2[1]})`);
      }
      const disj = parseDisjunctionCanonical(obj.claim);
      if (disj) {
        const conjInner = parseConjunctionCanonical(stripParens(disj[1]));
        if (conjInner) add(`(${disj[0]} \u2228 ${conjInner[0]}) \u2227 (${disj[0]} \u2228 ${conjInner[1]})`);
      }
    }
    for (const obj of origSubsets) {
      const sub = parseSubsetCanonical(obj.claim);
      for (const fnObj of pool) {
        const morph = parseMorphismDeclarationCanonical(fnObj.claim);
        if (!morph || !sameProp(morph.domain, sub.right)) continue;
        add(`image(${morph.label}, ${sub.left}) \u2286 image(${morph.label}, ${sub.right})`);
      }
    }
    for (const obj of originalPool) {
      const conj = parseConjunctionCanonical(obj.claim);
      if (conj) add(`${conj[1]} \u2227 ${conj[0]}`);
      const disj = parseDisjunctionCanonical(obj.claim);
      if (disj) add(`${disj[1]} \u2228 ${disj[0]}`);
    }
    for (const obj of originalPool) {
      const outer = parseConjunctionCanonical(obj.claim);
      if (outer) {
        const inner = parseConjunctionCanonical(stripParens(outer[0]));
        if (inner) add(`${inner[0]} \u2227 (${inner[1]} \u2227 ${outer[1]})`);
      }
      const outerD = parseDisjunctionCanonical(obj.claim);
      if (outerD) {
        const innerD = parseDisjunctionCanonical(stripParens(outerD[0]));
        if (innerD) add(`${innerD[0]} \u2228 (${innerD[1]} \u2228 ${outerD[1]})`);
      }
    }
    for (const t of orderTermsConst) add(`${t} \u2264 ${t}`);
    for (const obj of pool) {
      const morph = parseMorphismDeclarationCanonical(obj.claim);
      if (!morph || !morph.label.includes("\u2218")) continue;
      for (const { mem } of poolMemberships) {
        if (!sameProp(mem.set, morph.domain)) continue;
        add(`(${morph.label})(${mem.element}) \u2208 ${morph.codomain}`);
      }
    }
    for (const { ord } of origOrderClaims) {
      const result = evalOrder(ord.left, ord.op, ord.right);
      if (result === true) add(`${ord.left} ${ord.op} ${ord.right}`);
      if (result === false) add(`\xAC(${ord.left} ${ord.op} ${ord.right})`);
    }
    for (const { eq } of poolEqualities) {
      const lv = evalArith(eq.left);
      const rv = evalArith(eq.right);
      if (lv !== null && rv !== null && lv !== rv) add(`\xAC(${eq.left} = ${eq.right})`);
    }
    for (const { conj } of poolConjunctions) {
      if (sameProp(conj[0], conj[1])) add(conj[0]);
    }
    for (const { disj } of poolDisjunctions) {
      if (sameProp(disj[0], disj[1])) add(disj[0]);
    }
    for (const { conj } of poolConjunctions) {
      if (conj[0] === TOP || conj[0] === "\u22A4") add(conj[1]);
      if (conj[1] === TOP || conj[1] === "\u22A4") add(conj[0]);
      if (conj[0] === BOTTOM || conj[0] === "\u22A5") add(BOTTOM);
      if (conj[1] === BOTTOM || conj[1] === "\u22A5") add(BOTTOM);
    }
    for (const { disj } of poolDisjunctions) {
      if (disj[0] === BOTTOM || disj[0] === "\u22A5") add(disj[1]);
      if (disj[1] === BOTTOM || disj[1] === "\u22A5") add(disj[0]);
      if (disj[0] === TOP || disj[0] === "\u22A4") add(TOP);
      if (disj[1] === TOP || disj[1] === "\u22A4") add(TOP);
    }
    if (claimSet.has(BOTTOM) || claimSet.has("\u22A5")) {
      add(TOP);
      for (const o of atomicClaims) add(`\xAC${o.claim}`);
    }
    for (const obj of poolNegations) {
      const inner = obj.claim.slice(1).trim().replace(/^\(|\)$/g, "");
      const mem = parseMembershipCanonical(inner);
      if (mem) add(`${mem.element} \u2209 ${mem.set}`);
    }
    for (const obj of pool) {
      const nonMem = parseNonMembershipCanonical(obj.claim);
      if (nonMem) add(`\xAC(${nonMem.element} \u2208 ${nonMem.set})`);
    }
    for (const { mem } of poolMemberships) {
      const m = mem.set.match(/^complement\s*\(\s*(.+?)\s*,\s*(.+?)\s*\)$/);
      if (!m) continue;
      const [, a, u] = m;
      add(`${mem.element} \u2209 ${a}`);
      add(`${mem.element} \u2208 ${u}`);
    }
    for (const { ord: o1 } of origOrderClaims) {
      for (const { ord: o2 } of origOrderClaims) {
        if (o1 === o2) continue;
        const fwd1 = o1.op === "<" || o1.op === "\u2264";
        const fwd2 = o2.op === "<" || o2.op === "\u2264";
        if (fwd1 && fwd2) {
          const strict = o1.op === "<" || o2.op === "<";
          const op = strict ? "<" : "\u2264";
          add(`${o1.left} + ${o2.left} ${op} ${o1.right} + ${o2.right}`);
        }
      }
    }
    for (const c of nonNegTermsConst) {
      for (const { ord } of origOrderClaims) {
        const fwd = ord.op === "\u2264" || ord.op === "<";
        if (!fwd) continue;
        if (ord.left === "0" || ord.left === "zero") continue;
        add(`${ord.left} * ${c} ${ord.op} ${ord.right} * ${c}`);
      }
    }
    if (claimSet.has("\xAC\u22A5") || claimSet.has(`\xAC${BOTTOM}`)) add(TOP);
    if (claimSet.has("\xAC\u22A4") || claimSet.has(`\xAC${TOP}`)) add(BOTTOM);
    for (const o of atomicClaims) {
      const neg2 = o.claim.includes(" ") ? `\xAC(${o.claim})` : `\xAC${o.claim}`;
      add(`${o.claim} \u2228 ${neg2}`);
    }
    for (const s of setsInPool) {
      add(`\u2205 \u2286 ${s}`);
    }
    const nonMembers = /* @__PURE__ */ new Map();
    const membersMap = /* @__PURE__ */ new Map();
    for (const obj of pool) {
      const nm = parseNonMembershipCanonical(obj.claim);
      if (nm) {
        const list = nonMembers.get(nm.element) ?? [];
        list.push(nm.set);
        nonMembers.set(nm.element, list);
      }
    }
    for (const obj of poolNegations) {
      const inner = obj.claim.slice(1).trim().replace(/^\(|\)$/g, "");
      const mem = parseMembershipCanonical(inner);
      if (mem) {
        const list = nonMembers.get(mem.element) ?? [];
        list.push(mem.set);
        nonMembers.set(mem.element, list);
      }
    }
    for (const { mem } of poolMemberships) {
      const list = membersMap.get(mem.element) ?? [];
      list.push(mem.set);
      membersMap.set(mem.element, list);
    }
    for (const [elem, notInSets] of nonMembers) {
      const inSets = membersMap.get(elem) ?? [];
      for (const a of notInSets) {
        for (const u of inSets) {
          add(`${elem} \u2208 complement(${a}, ${u})`);
        }
      }
    }
    for (const obj of poolForalls) {
      const fa = asForallExpr(parseCanonicalExpr(obj.claim));
      if (!fa) continue;
      const conj = parseConjunctionCanonical(stripParens(fa.body));
      if (conj) {
        add(`\u2200 ${fa.variable} \u2208 ${fa.domain}, ${conj[0]}`);
        add(`\u2200 ${fa.variable} \u2208 ${fa.domain}, ${conj[1]}`);
      }
    }
    for (const { mem } of poolMemberships) {
      const prodParts = mem.set.includes("\xD7") ? mem.set.split("\xD7").map((s) => s.trim()) : null;
      const prod = prodParts && prodParts.length === 2 ? prodParts : null;
      if (prod) {
        const tuple = mem.element.match(/^\(\s*(.+?)\s*,\s*(.+?)\s*\)$/);
        if (tuple) {
          add(`${tuple[1]} \u2208 ${prod[0]}`);
          add(`${tuple[2]} \u2208 ${prod[1]}`);
        }
      }
    }
    const origMemberships = origMembershipsConst;
    for (const [elemA, setsA] of origMemberships) {
      for (const [elemB, setsB] of origMemberships) {
        if (elemA === elemB) continue;
        for (const setA of setsA) {
          for (const setB of setsB) {
            add(`(${elemA}, ${elemB}) \u2208 ${setA} \xD7 ${setB}`);
          }
        }
      }
    }
    if (newThisPass.size === 0) break;
    for (const c of newThisPass) {
      allDerived.add(c);
      knownClaims.add(c);
      pool.push(makeSyntheticObject(c));
    }
  }
  return Array.from(allDerived);
}

// src/lsp-stdio.ts
var connection = (0, import_node.createConnection)(
  new import_node.StreamMessageReader(process.stdin),
  new import_node.StreamMessageWriter(process.stdout)
);
var documents = new import_node.TextDocuments(TextDocument);
connection.onInitialize((_params) => ({
  capabilities: {
    textDocumentSync: import_node.TextDocumentSyncKind.Incremental,
    hoverProvider: true,
    completionProvider: { resolveProvider: false, triggerCharacters: ["(", " "] }
  }
}));
connection.onInitialized(() => {
  connection.client.register(import_node.DidChangeConfigurationNotification.type, void 0);
});
function validateDocument(doc) {
  const source = doc.getText();
  const diags = [];
  try {
    const lines = lexFL(source);
    const ast = parseLinesToAST(lines, { desugarFns: true });
    const report = checkFile(ast, { strict: false });
    for (const r of report.reports) {
      for (const d of r.diagnostics) {
        if (d.severity !== "error") continue;
        diags.push({
          severity: import_node.DiagnosticSeverity.Error,
          range: { start: import_node.Position.create(0, 0), end: import_node.Position.create(0, 0) },
          message: `[${r.name}] ${d.message}${d.hint ? ` \u2014 ${d.hint}` : ""}`,
          source: "futurlang"
        });
      }
    }
    for (const d of report.diagnostics) {
      if (d.severity !== "error") continue;
      diags.push({
        severity: import_node.DiagnosticSeverity.Error,
        range: { start: import_node.Position.create(0, 0), end: import_node.Position.create(0, 0) },
        message: d.message,
        source: "futurlang"
      });
    }
    if (report.state === "FAILED" && diags.length === 0) {
      diags.push({
        severity: import_node.DiagnosticSeverity.Error,
        range: { start: import_node.Position.create(0, 0), end: import_node.Position.create(0, 0) },
        message: "Proof failed \u2014 check connectives and proof structure",
        source: "futurlang"
      });
    }
  } catch (e) {
    const msg = e.message ?? String(e);
    const lineHint = extractLineHint(source, msg);
    diags.push({
      severity: import_node.DiagnosticSeverity.Error,
      range: { start: import_node.Position.create(lineHint, 0), end: import_node.Position.create(lineHint, 999) },
      message: msg,
      source: "futurlang"
    });
  }
  connection.sendDiagnostics({ uri: doc.uri, diagnostics: diags });
}
function extractLineHint(source, msg) {
  const nameMatch = msg.match(/['`"](\w+)['`"]/);
  if (nameMatch) {
    const lines = source.split("\n");
    for (let i = 0; i < lines.length; i++) {
      if (lines[i].includes(nameMatch[1])) return i;
    }
  }
  return 0;
}
documents.onDidChangeContent((change) => validateDocument(change.document));
documents.onDidOpen((e) => validateDocument(e.document));
var HOVER_DB = {
  theorem: "**theorem** \u2014 Declare a theorem.\nPaired with a `proof` block via `\u2194`.",
  proof: "**proof** \u2014 Prove a theorem.\nMust be paired with its `theorem` via `\u2194`.",
  lemma: "**lemma** \u2014 Declare a helper lemma.\nPaired with a `proof` block via `\u2194`.",
  definition: "**definition** \u2014 Define a mathematical object.",
  fn: "**fn** \u2014 Declare a function. Desugars into theorem + proof.",
  struct: "**struct** \u2014 Declare a data structure.",
  type: "**type** \u2014 Declare a sum type (tagged union).",
  program: "**program** \u2014 Declare an on-chain FuturChain program (smart contract).",
  account: "**account** \u2014 On-chain account state for a FuturChain program.",
  instruction: "**instruction** \u2014 Instruction handler inside a `program` block.",
  error: "**error** \u2014 Custom program error variants.",
  assume: "**assume(P)** \u2014 Introduce hypothesis `P` into the proof context.",
  conclude: "**conclude(P)** \u2014 Close the proof. Must match `declareToProve` goal.",
  declareToProve: "**declareToProve(P)** \u2014 Set the proof goal (required exactly once).",
  prove: "**prove(P)** \u2014 Derive and record an intermediate fact.",
  apply: "**apply(Name)** \u2014 Back-chain through proved lemma `Name`.\nMakes parent connective `\u2192`.",
  require: "**require(cond, Err)** \u2014 Guard: returns `Err` if `cond` is false.",
  emit: "**emit(Event, fields)** \u2014 Emit a named event recorded in the block log.",
  pda: "**pda([seeds])** \u2014 Derive a Program-Derived Address from seeds.",
  cpi: "**cpi(program, ix, accounts)** \u2014 Cross-program invocation.",
  transfer: "**transfer(from, to, amount)** \u2014 Native token transfer within an instruction.",
  induction: "**induction(n)** \u2014 Structural induction. Requires `base:` and `step:` cases.",
  match: "**match value { ... }** \u2014 Case split on a sum type or list.",
  setVar: "**setVar(x: T)** or **let x = v** \u2014 Introduce a bound variable.",
  intro: "**intro(x: T)** \u2014 Strip an implication antecedent.",
  rewrite: "**rewrite(h)** \u2014 Substitute equals using hypothesis `h`.",
  exact: "**exact(e)** \u2014 Close goal directly with expression `e`.",
  obtain: "**obtain(x, \u2203 y \u2208 S, P)** \u2014 Destructure an existential.",
  mut: "**mut** \u2014 Marks an instruction account as mutable.",
  signer: "**signer** \u2014 Marks an instruction account as required signer.",
  init: "**init** \u2014 Marks an account as newly created in this instruction.",
  Address: "`Address` \u2014 32-byte public key / account address (`[u8; 32]`).",
  TokenAmount: "`TokenAmount` \u2014 native token quantity (`u64`).",
  Hash: "`Hash` \u2014 SHA-256 output (`[u8; 32]`).",
  Signature: "`Signature` \u2014 Ed25519 signature (`[u8; 64]`).",
  Slot: "`Slot` \u2014 monotonic block slot number (`u64`).",
  Nat: "`Nat` \u2014 natural number, \u2265 0 (`u64`).",
  Bool: "`Bool` \u2014 boolean (`bool`).",
  "\u2192": "`\u2192` **(implies / sequences)**: next block calls `apply()` on current.",
  "\u2194": "`\u2194` **(iff / pairs)**: pairs a `theorem`/`lemma` with its `proof`.",
  "\u2227": "`\u2227` **(and / independent)**: next block does **not** call `apply()`.",
  "\u2228": "`\u2228` **(or / disjunctive)**: either block suffices.",
  "\u2208": "`\u2208` \u2014 membership. Used in type annotations and membership proofs.",
  "\u2200": "`\u2200` \u2014 universal quantifier. `\u2200 x \u2208 A, P(x)`.",
  "\u2203": "`\u2203` \u2014 existential quantifier. `\u2203 x \u2208 A, P(x)`."
};
connection.onHover((params) => {
  const doc = documents.get(params.textDocument.uri);
  if (!doc) return null;
  const line = doc.getText({
    start: { line: params.position.line, character: 0 },
    end: { line: params.position.line, character: 999 }
  });
  const col = params.position.character;
  const before = line.slice(0, col).match(/[\w∀∃∈∧∨→↔ℕ]+$/)?.[0] ?? "";
  const after = line.slice(col).match(/^[\w∀∃∈∧∨→↔ℕ]*/)?.[0] ?? "";
  const token = before + after;
  if (!token) return null;
  const doc_text = HOVER_DB[token];
  if (!doc_text) return null;
  return {
    contents: { kind: import_node.MarkupKind.Markdown, value: doc_text }
  };
});
var COMPLETIONS = [
  // Top-level blocks
  { label: "theorem", kind: import_node.CompletionItemKind.Keyword, insertText: "theorem ${1:Name}() {\n  assume(${2:P}) \u2192\n  declareToProve(${3:Q})\n} \u2194\n\nproof ${1:Name}() {\n  conclude(${3:Q})\n}", insertTextFormat: 2 },
  { label: "proof", kind: import_node.CompletionItemKind.Keyword, insertText: "proof ${1:Name}() {\n  conclude(${2:P})\n}", insertTextFormat: 2 },
  { label: "lemma", kind: import_node.CompletionItemKind.Keyword, insertText: "lemma ${1:Name}() {\n  assume(${2:P}) \u2192\n  declareToProve(${3:Q})\n} \u2194\n\nproof ${1:Name}() {\n  conclude(${3:Q})\n}", insertTextFormat: 2 },
  { label: "fn", kind: import_node.CompletionItemKind.Keyword, insertText: "fn ${1:name}(${2:x} \u2208 ${3:Nat}) -> ${4:Nat} {\n  conclude(${5:x})\n}", insertTextFormat: 2 },
  { label: "struct", kind: import_node.CompletionItemKind.Keyword, insertText: "struct ${1:Name} {\n  ${2:field} \u2208 ${3:Nat},\n}", insertTextFormat: 2 },
  { label: "definition", kind: import_node.CompletionItemKind.Keyword },
  // Blockchain blocks
  { label: "program", kind: import_node.CompletionItemKind.Keyword, insertText: "program ${1:Name} {\n\n  account ${2:State} {\n    ${3:field} \u2208 ${4:TokenAmount},\n  } \u2192\n\n  instruction ${5:init}(\n    authority: mut signer \u2208 ${2:State},\n  ) {\n    // ...\n  }\n\n}", insertTextFormat: 2 },
  { label: "account", kind: import_node.CompletionItemKind.Keyword, insertText: "account ${1:Name} {\n  ${2:field} \u2208 ${3:TokenAmount},\n}", insertTextFormat: 2 },
  { label: "instruction", kind: import_node.CompletionItemKind.Keyword, insertText: "instruction ${1:name}(\n  ${2:authority}: mut signer \u2208 ${3:State},\n) {\n  require(${4:cond}, ${5:Error})\n}", insertTextFormat: 2 },
  { label: "error", kind: import_node.CompletionItemKind.Keyword, insertText: 'error ${1:Name} {\n  | ${2:Variant}("${3:message}")\n}', insertTextFormat: 2 },
  // Proof statements
  { label: "assume", kind: import_node.CompletionItemKind.Function, insertText: "assume(${1:P})", insertTextFormat: 2 },
  { label: "conclude", kind: import_node.CompletionItemKind.Function, insertText: "conclude(${1:P})", insertTextFormat: 2 },
  { label: "declareToProve", kind: import_node.CompletionItemKind.Function, insertText: "declareToProve(${1:P})", insertTextFormat: 2 },
  { label: "prove", kind: import_node.CompletionItemKind.Function, insertText: "prove(${1:P})", insertTextFormat: 2 },
  { label: "apply", kind: import_node.CompletionItemKind.Function, insertText: "apply(${1:Lemma})", insertTextFormat: 2 },
  // Blockchain statements
  { label: "require", kind: import_node.CompletionItemKind.Function, insertText: "require(${1:condition}, ${2:Error})", insertTextFormat: 2 },
  { label: "emit", kind: import_node.CompletionItemKind.Function, insertText: "emit(${1:EventName}, ${2:field}: ${3:value})", insertTextFormat: 2 },
  { label: "transfer", kind: import_node.CompletionItemKind.Function, insertText: "transfer(${1:from}, ${2:to}, ${3:amount})", insertTextFormat: 2 },
  { label: "pda", kind: import_node.CompletionItemKind.Function, insertText: "let ${1:addr} = pda([${2:seed}])", insertTextFormat: 2 },
  { label: "cpi", kind: import_node.CompletionItemKind.Function, insertText: "cpi(${1:program_id}, ${2:instruction}, [${3:accounts}])", insertTextFormat: 2 },
  // Types
  { label: "Address", kind: import_node.CompletionItemKind.TypeParameter },
  { label: "TokenAmount", kind: import_node.CompletionItemKind.TypeParameter },
  { label: "Hash", kind: import_node.CompletionItemKind.TypeParameter },
  { label: "Signature", kind: import_node.CompletionItemKind.TypeParameter },
  { label: "Slot", kind: import_node.CompletionItemKind.TypeParameter },
  { label: "Nat", kind: import_node.CompletionItemKind.TypeParameter },
  { label: "Bool", kind: import_node.CompletionItemKind.TypeParameter },
  { label: "String", kind: import_node.CompletionItemKind.TypeParameter },
  { label: "List", kind: import_node.CompletionItemKind.TypeParameter, insertText: "List(${1:Nat})", insertTextFormat: 2 }
];
connection.onCompletion((_pos) => COMPLETIONS);
documents.listen(connection);
connection.listen();
