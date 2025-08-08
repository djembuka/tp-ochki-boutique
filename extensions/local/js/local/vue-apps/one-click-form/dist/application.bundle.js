/* eslint-disable */
(function (exports,ui_vue3,local_vueComponents_controlChoice,local_vueComponents_buttonComponent,local_vueComponents_loaderCircle,local_vueComponents_messageComponent,local_vueComponents_modalAnyContent,ui_vue3_pinia) {
  'use strict';

  var CloseIcon = {
    template: "\n        <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"18\" height=\"18\" viewBox=\"0 0 18 18\" fill=\"none\">\n            <path d=\"M1.00025 1.00001L17 17M16.9997 1L1 17\" stroke=\"black\" stroke-width=\"2\" stroke-linecap=\"round\"/>\n        </svg>\n    "
  };

  var dataStore = ui_vue3_pinia.defineStore('data', {
    state: function state() {
      return {
        id: "id".concat(Math.floor(Math.random() * 1000)),
        data: {},
        lang: {},
        actions: []
      };
    }
  });

  function _regeneratorRuntime() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == babelHelpers["typeof"](value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) keys.push(key); return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
  var controlsStore = ui_vue3_pinia.defineStore('controls', {
    state: function state() {
      return {
        controls: []
      };
    },
    actions: {
      changeControls: function changeControls(controls) {
        this.controls = controls;
      },
      changeTextControlValue: function changeTextControlValue(_ref) {
        var control = _ref.control,
          value = _ref.value;
        control.value = value;
      },
      changeSelectRadioValue: function changeSelectRadioValue(_ref2) {
        var control = _ref2.control,
          value = _ref2.value;
        control.value = value;
      },
      changeSelectDropdownValue: function changeSelectDropdownValue(_ref3) {
        var control = _ref3.control,
          value = _ref3.value;
        control.value = value;
      },
      changeDateValue: function changeDateValue(_ref4) {
        var control = _ref4.control,
          value = _ref4.value;
        control.value = value;
      },
      changeFileValue: function changeFileValue(_ref5) {
        var control = _ref5.control,
          value = _ref5.value;
        control.value = value;
        if (control.type === 'upload') {
          this.uploadFile(control, value);
        }
      },
      changeControlValue: function changeControlValue(_ref6) {
        var control = _ref6.control,
          value = _ref6.value,
          checked = _ref6.checked;
        switch (control.property) {
          case 'text':
          case 'textarea':
          case 'hint':
          case 'tel':
          case 'email':
            this.changeTextControlValue({
              control: control,
              value: value
            });
            break;
          // case 'multiselect':
          //   commit('changeMultiselectValue', { control, value, checked });
          //   break;
          // case 'checkbox':
          //   commit('changeCheckboxValue', { control, checked });
          //   break;
          case 'select':
            this["changeSelect".concat(control.type.substring(0, 1).toUpperCase()).concat(control.type.substring(1).toLowerCase(), "Value")]({
              control: control,
              value: value
            });
            break;
          case 'file':
            this.changeFileValue({
              control: control,
              value: value
            });
            break;
          case 'date':
            this.changeDateValue({
              control: control,
              value: value
            });
            break;
          // case 'color':
          //   commit('changeColorValue', { control, value });
          //   break;
        }
      },
      runHints: function runHints(control, action) {
        var _this = this;
        return babelHelpers.asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
          var controller, timeoutId, response, result, _result$errors$;
          return _regeneratorRuntime().wrap(function _callee$(_context) {
            while (1) switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                // Создаем AbortController для возможности отмены запроса
                controller = new AbortController();
                timeoutId = setTimeout(function () {
                  return controller.abort();
                }, 20000); // 20 секунд таймаут
                _context.next = 5;
                return fetch(action, {
                  signal: controller.signal,
                  headers: {
                    'Content-Type': 'application/json'
                  }
                });
              case 5:
                response = _context.sent;
                clearTimeout(timeoutId);
                if (response.ok) {
                  _context.next = 9;
                  break;
                }
                throw new Error("HTTP error! status: ".concat(response.status));
              case 9:
                _context.next = 11;
                return response.json();
              case 11:
                result = _context.sent;
                if (result.status === 'success' && result.data) {
                  _this.setHints(control, result.data);
                } else if (result.errors) {
                  _this.error = (_result$errors$ = result.errors[0]) === null || _result$errors$ === void 0 ? void 0 : _result$errors$.message;
                } else {
                  _this.error = 'Invalid response format';
                }
                _context.next = 18;
                break;
              case 15:
                _context.prev = 15;
                _context.t0 = _context["catch"](0);
                _this.error = _context.t0 === null || _context.t0 === void 0 ? void 0 : _context.t0.message;
              case 18:
              case "end":
                return _context.stop();
            }
          }, _callee, null, [[0, 15]]);
        }))();
      },
      setHints: function setHints(control, value) {
        control.hints = value;
      }
    }
  });

  function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
  function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { babelHelpers.defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
  var formStore = ui_vue3_pinia.defineStore('form', {
    state: function state() {
      return {
        loading: false,
        productLoading: false,
        formLoading: false,
        stateWatcher: false,
        form: {},
        product: {},
        error: '',
        formError: '',
        productError: '',
        formMessage: '',
        height: 'auto',
        timeoutId: null
      };
    },
    actions: {
      changeStateWatcher: function changeStateWatcher() {
        this.stateWatcher = !this.stateWatcher;
      },
      changeHistoryItems: function changeHistoryItems(historyItems) {
        console.log(historyItems);
        this.historyItems = historyItems;
      },
      changeLoading: function changeLoading(value) {
        this.loading = value;
      },
      changeProductLoading: function changeProductLoading(value) {
        this.productLoading = value;
      },
      changeFormLoading: function changeFormLoading(value) {
        this.formLoading = value;
      },
      changeForm: function changeForm(data) {
        this.form.heading = data.heading;
        this.form.button = data.button;
        this.form.consent = data.consent;
      },
      changeProduct: function changeProduct(product) {
        this.product = product;
      },
      changeError: function changeError(error) {
        this.error = error;
      },
      changeFormError: function changeFormError(error) {
        this.formError = error;
      },
      changeProductError: function changeProductError(error) {
        this.productError = error;
      },
      changeFormMessage: function changeFormMessage(message) {
        this.formMessage = message;
      },
      setHeight: function setHeight() {
        this.height = document.querySelector("#".concat(dataStore().id, " .twpx-one-click-form__form")).clientHeight;
      },
      setTimeoutMethod: function setTimeoutMethod() {
        var _this = this;
        this.timeoutId = setTimeout(function () {
          _this.changeFormMessage('');
          _this.changeFormError('');
          _this.changeStateWatcher();
        }, 5000);
      },
      clearTimeoutMethod: function clearTimeoutMethod() {
        clearTimeout(this.timeoutId);
      },
      runGetForm: function runGetForm() {
        this.error = '';
        this.loading = true;
        var d = dataStore();

        // return new Promise((resolve, reject) => {
        // let response = {
        //   status: 'success',
        //   data: {
        //     heading: 'Заказ в 1 клик',
        //     controls: [
        //       {
        //         "id": "id1",
        //         "property": "text",
        //         "name": "NAME",
        //         "label": "Как вас зовут",
        //         "value": "",
        //         "required": true,
        //         "disabled": false
        //       },
        //       {
        //         "id": "id2",
        //         "property": "tel",
        //         "name": "PHONE",
        //         "label": "Ваш телефон",
        //         "value": "",
        //         "required": true,
        //         "disabled": false
        //       },
        //       {
        //         "id": "id1-1",
        //         "property": "textarea",
        //         "name": "MESSAGE",
        //         "label": "Сообщение",
        //         "value": "",
        //         "required": false,
        //         "disabled": false
        //       }
        //     ],
        //     button: 'Заказать',
        //     consent: 'Нажимая кнопку, вы соглашаетесь с <a href="">политикой конфиденциальности</a> и даете <a href="">согласие на обработку</a> персональных данных.'
        //   }
        // };

        //   // response = {
        //   //   status: 'error',
        //   //   data: {},
        //   //   errors: [
        //   //     {
        //   //       message: 'getForm error'
        //   //     }
        //   //   ]
        //   // };

        //   setTimeout(() => {
        //     resolve(response);
        //     // reject(response);
        //   }, 1000);
        // });

        return BX.ajax.runComponentAction(d.actions.getForm[0], d.actions.getForm[1], {
          mode: 'class',
          data: d.data
        });
      },
      runGetProduct: function runGetProduct(_ref) {
        var id = _ref.id;
        this.error = '';
        this.productLoading = true;
        var d = dataStore();

        // return new Promise((resolve, reject) => {
        //   let response = {};

        //   switch(id) {
        //     case '123':
        //       response = {
        //         status: 'success',
        //         data: {
        //           product: {
        //             id: '123',
        //             name: 'McQueen AM 0375s 001 53',
        //             price: '27 500 руб.',
        //             oldPrice: '27 500 руб.',
        //             img: '/upload/resize_cache/iblock/ffb/270_230_1/ffbbc1c997bd4a285a820a57cd40f047.jpg'
        //           }
        //         }
        //       };
        //       break;
        //     case '456':
        //       response = {
        //         status: 'success',
        //         data: {
        //           product: {
        //             name: 'AM 0467S 001 56',
        //             price: '37 200 руб.',
        //             img: '/upload/resize_cache/iblock/ec1/vis7nwb42a1scabzkmds8nnqww9dqybm/270_230_1/fcf3cf984f0211ef923c0050568900f8_843ba2927db511ef9c020050568900f8.jpg'
        //           }
        //         }
        //       };
        //       break;
        //     case '789':
        //       response = {
        //         status: 'success',
        //         data: {
        //           product: {
        //             name: 'RB 4387 710/73 56',
        //             price: '21 000 руб.',
        //             img: '/upload/resize_cache/iblock/35c/270_230_1/35ce5012c2ad478f6c9c73ce7dbcb2fa.jpg'
        //           }
        //         }
        //       };
        //       break;
        //     case '741':
        //       response = {
        //         status: 'success',
        //         data: {
        //           product: {
        //             name: 'FKSHMxPye Ghostriders Storm Black 53',
        //             price: '19 500 руб.',
        //             img: '/upload/resize_cache/iblock/005/8u6oagq9q32cmfzii10qv31j0jasforw/270_230_1/3a808b6ecf0e11ee95720050568900f8_2250e44ae6be11ee92420050568900f8.jpg'
        //           }
        //         }
        //       };
        //       break;
        //   }

        //   // response = {
        //   //   status: 'error',
        //   //   data: {},
        //   //   errors: [
        //   //     {
        //   //       message: 'getProduct error'
        //   //     }
        //   //   ]
        //   // };

        //   setTimeout(() => {
        //     resolve(response);
        //     // reject(response);
        //   }, 2000);
        // });
        return BX.ajax.runComponentAction(d.actions.getProduct[0], d.actions.getProduct[1], {
          mode: 'class',
          data: _objectSpread(_objectSpread({}, d.data), {}, {
            id: id
          })
        });
      },
      runSendForm: function runSendForm() {
        this.error = '';
        this.changeFormLoading(true);
        this.setHeight();
        var d = dataStore();
        var c = controlsStore();
        var formData = new FormData(document.querySelector("#".concat(d.id, " form")));
        Object.keys(d.data).forEach(function (key) {
          formData.append(key, d.data[key]);
        });
        formData.append('id', this.product.id);

        // return new Promise((resolve, reject) => {
        //   let response = {
        //     status: 'success',
        //     data: {
        //       message: 'Спасибо! Ваш запрос успешно отправлен. Наш специалист свяжется с вами в ближайшее время.',
        //     }
        //   };

        // let response = {
        //   status: 'error',
        //   data: {},
        //   errors: [
        //     {
        //       message: 'Что-то пошло не так. Пожалуйста, попробуйте отправить форму ещё раз!'
        //     }
        //   ]
        // };

        //   setTimeout(() => {
        //     resolve(response);
        //     // reject(response);
        //   }, 1000);
        // });

        return BX.ajax.runComponentAction(d.actions.sendForm[0], d.actions.sendForm[1], {
          mode: 'class',
          data: formData
        });
      }
    }
  });

  function ownKeys$1(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
  function _objectSpread$1(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys$1(Object(source), !0).forEach(function (key) { babelHelpers.defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys$1(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
  var Application = {
    data: function data() {
      return {};
    },
    components: {
      ControlChoice: local_vueComponents_controlChoice.ControlChoice,
      ButtonComponent: local_vueComponents_buttonComponent.ButtonComponent,
      LoaderCircle: local_vueComponents_loaderCircle.LoaderCircle,
      MessageComponent: local_vueComponents_messageComponent.MessageComponent,
      ModalAnyContent: local_vueComponents_modalAnyContent.ModalAnyContent,
      CloseIcon: CloseIcon
    },
    // language=Vue
    template: "\n  <div class=\"twpx-one-click-form\" :id=\"id\">\n\n    <ModalAnyContent :stateWatcher=\"stateWatcher\">\n\n      <LoaderCircle :show=\"loading\" />\n\n      <MessageComponent v-if=\"error\" type=\"error\" size=\"small\" :message=\"error\" />\n\n      <div class=\"twpx-one-click-form__grid\" v-if=\"!loading && !error\">\n        <div class=\"twpx-one-click-form__product\">\n\n          <LoaderCircle :show=\"productLoading\" />\n\n          <MessageComponent v-if=\"productError\" type=\"error\" size=\"small\" :message=\"productError\" />\n\n          <div class=\"twpx-one-click-form__product-wrapper\" v-if=\"!productLoading && !productError\"  >\n            <div v-if=\"product.img\" class=\"twpx-one-click-form__product-image\">\n              <img :src=\"product.img\" :alt=\"product.name\"\n            </div>\n            <div class=\"twpx-one-click-form__product-text\" v-if=\"product.name || product.price || product.oldPrice\">\n              <div v-if=\"product.name\" class=\"twpx-one-click-form__product-name\">{{ product.name }}</div>\n              <div v-if=\"product.price || product.oldPrice\" class=\"twpx-one-click-form__product-price\">\n                <span class=\"twpx-one-click-form__product-price__price\" v-if=\"product.price\" v-html=\"product.price\"></span>\n                <span class=\"twpx-one-click-form__product-price__old-price\" v-if=\"product.oldPrice\" v-html=\"product.oldPrice\"></span>\n              </div>\n            </div>\n          </div>\n\n        </div>\n\n        <div class=\"twpx-one-click-form__form\" :style=\"formStyle\">\n\n          <div class=\"twpx-one-click-form__close\"></div>\n\n          <LoaderCircle :show=\"formLoading\" />\n\n          <div v-if=\"!formLoading && !isMessage\" class=\"twpx-one-click-form__form__content\">\n            <h3 v-if=\"form.heading\">{{ form.heading }}</h3>\n            <form action=\"\">\n              <div class=\"twpx-one-click-form__form-wrapper\">\n                <ControlChoice  v-for=\"control in controls\" :key=\"control.id\" :control=\"control\" @input=\"input\"></ControlChoice>\n                <ButtonComponent v-if=\"form.button\" :text=\"form.button\" :props=\"buttonProps\" @clickButton=\"clickButton\" />\n              </div>\n            </form>\n            <div v-if=\"form.consent\" v-html=\"form.consent\" class=\"twpx-one-click-form__consent\"></div>\n          </div>\n\n          <div v-if=\"formError\" class=\"twpx-one-click-form__form-message\">\n            <h3 v-if=\"form.heading\">{{ form.heading }}</h3>\n            <MessageComponent type=\"error\" size=\"small\" :message=\"formError\" />\n            <ButtonComponent :text=\"lang.buttonError\" :props=\"['primary', 'medium', 'wide']\" @clickButton=\"clickButtonError\" />\n          </div>\n\n          <div v-if=\"formMessage\" class=\"twpx-one-click-form__form-message\">\n            <h3 v-if=\"form.heading\">{{ form.heading }}</h3>\n            <MessageComponent v-if=\"formMessage\" type=\"success\" size=\"small\" :message=\"formMessage\" />\n            <ButtonComponent :text=\"lang.buttonSuccess\" :props=\"['primary', 'medium', 'wide']\" @clickButton=\"clickButtonSuccess\" />\n          </div>\n\n        </div>\n      </div>\n    </ModalAnyContent>\n\n  </div>\n\t",
    computed: _objectSpread$1(_objectSpread$1(_objectSpread$1(_objectSpread$1({}, ui_vue3_pinia.mapState(dataStore, ['lang', 'id'])), ui_vue3_pinia.mapState(formStore, ['loading', 'productLoading', 'formLoading', 'form', 'product', 'stateWatcher', 'error', 'formError', 'productError', 'formMessage', 'height'])), ui_vue3_pinia.mapState(controlsStore, ['controls'])), {}, {
      buttonProps: function buttonProps() {
        var result = new Set();
        result.add('wide');
        result.add('primary');
        result.add('medium');
        if (babelHelpers["typeof"](this.controls) === 'object' && this.controls.forEach) {
          this.controls.forEach(function (c) {
            if (c.required && !c.value) {
              result.add('disabled');
            }
          });
        }
        return babelHelpers.toConsumableArray(result);
      },
      isMessage: function isMessage() {
        return this.formError || this.formMessage;
      },
      formStyle: function formStyle() {
        return "height: ".concat(this.height, "px;");
      }
    }),
    methods: _objectSpread$1(_objectSpread$1(_objectSpread$1({}, ui_vue3_pinia.mapActions(formStore, ['runGetForm', 'runGetProduct', 'runSendForm', 'changeStateWatcher', 'changeLoading', 'changeProductLoading', 'changeFormLoading', 'changeForm', 'changeProduct', 'changeError', 'changeFormError', 'changeProductError', 'changeFormMessage', 'setTimeoutMethod', 'clearTimeoutMethod'])), ui_vue3_pinia.mapActions(controlsStore, ['changeControls', 'changeControlValue'])), {}, {
      input: function input(args) {
        this.changeControlValue(args);
      },
      hints: function hints(_ref) {
        var control = _ref.control,
          type = _ref.type,
          action = _ref.action,
          value = _ref.value;
        if (type === 'get') {
          this.runHints(control, action);
        } else if (type === 'set') {
          this.setHints(control, value);
        }
      },
      clickButton: function clickButton() {
        var _this = this;
        this.runSendForm().then(function (response) {
          _this.changeFormLoading(false);
          _this.setTimeoutMethod();
          if ((response === null || response === void 0 ? void 0 : response.status) === 'success') {
            var _response$data;
            _this.changeFormError('');
            if (response !== null && response !== void 0 && (_response$data = response.data) !== null && _response$data !== void 0 && _response$data.message) {
              _this.changeFormMessage(response.data.message);
            }
          }
        }, function (response) {
          _this.changeFormLoading(false);
          _this.setTimeoutMethod();
          _this.changeFormMessage('');
          _this.changeFormError(response.errors[0].message);
        });
      },
      clickButtonSuccess: function clickButtonSuccess() {
        var _this2 = this;
        this.clearTimeoutMethod();
        this.changeStateWatcher();
        setTimeout(function () {
          _this2.changeFormMessage('');
        }, 1000);
      },
      clickButtonError: function clickButtonError() {
        this.clearTimeoutMethod();
        this.changeFormError('');
      }
    }),
    mounted: function mounted() {
      var _this3 = this;
      this.runGetForm().then(function (response) {
        _this3.changeLoading(false);
        _this3.changeError('');
        _this3.changeForm(response.data);
        _this3.changeControls(response.data.controls);
      }, function (response) {
        _this3.changeLoading(false);
        _this3.changeError(response.errors[0].message);
      });
    }
  };

  function ownKeys$2(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
  function _objectSpread$2(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys$2(Object(source), !0).forEach(function (key) { babelHelpers.defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys$2(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
  function _classPrivateFieldInitSpec(obj, privateMap, value) { _checkPrivateRedeclaration(obj, privateMap); privateMap.set(obj, value); }
  function _checkPrivateRedeclaration(obj, privateCollection) { if (privateCollection.has(obj)) { throw new TypeError("Cannot initialize the same private elements twice on an object"); } }
  var _store = /*#__PURE__*/new WeakMap();
  var _rootNode = /*#__PURE__*/new WeakMap();
  var _application = /*#__PURE__*/new WeakMap();
  var OneClickForm = /*#__PURE__*/function () {
    function OneClickForm(rootNode, options) {
      babelHelpers.classCallCheck(this, OneClickForm);
      _classPrivateFieldInitSpec(this, _store, {
        writable: true,
        value: void 0
      });
      _classPrivateFieldInitSpec(this, _rootNode, {
        writable: true,
        value: void 0
      });
      _classPrivateFieldInitSpec(this, _application, {
        writable: true,
        value: void 0
      });
      babelHelpers.classPrivateFieldSet(this, _store, ui_vue3_pinia.createPinia());
      babelHelpers.classPrivateFieldSet(this, _rootNode, document.querySelector(rootNode));
      this.options = options;
    }
    babelHelpers.createClass(OneClickForm, [{
      key: "run",
      value: function run() {
        var self = this;
        babelHelpers.classPrivateFieldSet(this, _application, ui_vue3.BitrixVue.createApp({
          name: 'OneClickForm',
          components: {
            Application: Application
          },
          template: '<Application/>',
          methods: _objectSpread$2({}, ui_vue3_pinia.mapActions(formStore, ['changeStateWatcher', 'runGetProduct'])),
          beforeMount: function beforeMount() {
            dataStore().data = self.options.data || {};
            dataStore().lang = self.options.lang || {};
            dataStore().actions = self.options.actions || [];
          }
        }));
        babelHelpers.classPrivateFieldGet(this, _application).use(babelHelpers.classPrivateFieldGet(this, _store));
        babelHelpers.classPrivateFieldGet(this, _application).mount(babelHelpers.classPrivateFieldGet(this, _rootNode));

        // this.#application.show = ({id}) => {

        // };
      }
    }, {
      key: "show",
      value: function show(_ref) {
        var id = _ref.id;
        var methods = babelHelpers.classPrivateFieldGet(this, _application)._component.components.Application.methods;
        methods.changeStateWatcher(true);
        methods.runGetProduct({
          id: id
        }).then(function (response) {
          methods.changeProductLoading(false);
          methods.changeProductError('');
          methods.changeProduct(response.data.product);
        }, function (response) {
          methods.changeProductLoading(false);
          methods.changeProductError(response.errors[0].message);
          methods.changeProduct({});
        });
      }
    }, {
      key: "initStorageBeforeStartApplication",
      value: function initStorageBeforeStartApplication() {
        ui_vue3_pinia.setActivePinia(babelHelpers.classPrivateFieldGet(this, _store));
      }
    }, {
      key: "getFormStore",
      value: function getFormStore() {
        return formStore;
      }
    }]);
    return OneClickForm;
  }();

  exports.OneClickForm = OneClickForm;

}((this.BX = this.BX || {}),BX.Vue3,BX.Controls,BX.AAS,BX.Loaders,BX.AAS,BX.Modals,BX.Vue3.Pinia));//# sourceMappingURL=application.bundle.js.map
