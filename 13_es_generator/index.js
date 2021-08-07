var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __values = (this && this.__values) || function(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
var _a, _b;
function gen() {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, 11];
            case 1:
                _a.sent();
                return [4 /*yield*/, 22];
            case 2:
                _a.sent();
                return [4 /*yield*/, 33];
            case 3:
                _a.sent();
                return [2 /*return*/];
        }
    });
}
var iter = gen();
console.log("typeof iter - " + typeof iter);
console.log("iter - " + iter);
console.log(iter.next());
console.log(iter.next());
console.log(iter.next());
console.log(iter.next());
console.log("____");
function gen2() {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, 1];
            case 1:
                _a.sent();
                return [5 /*yield**/, __values(gen3())];
            case 2:
                _a.sent();
                return [4 /*yield*/, 4];
            case 3:
                _a.sent();
                return [2 /*return*/];
        }
    });
}
function gen3() {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, 2];
            case 1:
                _a.sent();
                return [4 /*yield*/, 3];
            case 2:
                _a.sent();
                return [2 /*return*/];
        }
    });
}
var iter2 = gen2();
console.log(iter2.next());
console.log(iter2.next());
console.log(iter2.next());
console.log(iter2.next());
console.log(iter2.next());
console.log("____");
function gen5() {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [5 /*yield**/, __values([111111, 222222, 333333])];
            case 1:
                _a.sent();
                return [2 /*return*/];
        }
    });
}
var iter5 = gen5();
console.log(iter5.next());
console.log(iter5.next());
console.log(iter5.next());
console.log(iter5.next());
console.log("____");
//============================================
function getRange(start, end, step) {
    if (start === void 0) { start = 0; }
    if (end === void 0) { end = 100; }
    if (step === void 0) { step = 10; }
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (!(start < end)) return [3 /*break*/, 2];
                return [4 /*yield*/, start];
            case 1:
                _a.sent();
                start += step;
                return [3 /*break*/, 0];
            case 2: return [2 /*return*/];
        }
    });
}
for (var _i = 0, _c = getRange(10, 50); _i < _c.length; _i++) {
    var n = _c[_i];
    console.log(n);
}
console.log("____");
var fib = (_a = {},
    _a[Symbol.iterator] = function () {
        var pre = 0, cur = 1;
        return {
            next: function () {
                var _a;
                _a = [cur, pre + cur], pre = _a[0], cur = _a[1];
                return { value: cur, done: false };
            }
        };
    },
    _a);
for (var _d = 0, fib_1 = fib; _d < fib_1.length; _d++) {
    var n = fib_1[_d];
    if (n > 1500)
        break;
    console.log(n);
}
console.log("____");
var fib2 = (_b = {},
    _b[Symbol.iterator] = function () {
        var pre, cur;
        var _a;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    pre = 0, cur = 1;
                    _b.label = 1;
                case 1:
                    _a = [cur, pre + cur], pre = _a[0], cur = _a[1];
                    return [4 /*yield*/, cur];
                case 2:
                    _b.sent();
                    _b.label = 3;
                case 3: return [3 /*break*/, 1];
                case 4: return [2 /*return*/];
            }
        });
    },
    _b);
for (var _e = 0, fib2_1 = fib2; _e < fib2_1.length; _e++) {
    var n = fib2_1[_e];
    if (n > 500)
        break;
    console.log(n);
}
