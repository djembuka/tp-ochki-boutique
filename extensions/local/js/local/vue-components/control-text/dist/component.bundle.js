/* eslint-disable */
this.BX = this.BX || {};
(function (exports) {
  'use strict';

  var IconLock = {
    template: "\n    <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"12\" height=\"16\" viewBox=\"0 0 12 16\" fill=\"none\">\n      <path d=\"M2.25 5.66667V5C2.25 2.78413 3.92262 1 6 1C8.07738 1 9.75 2.78413 9.75 5V5.66667M2.25 5.66667C1.5625 5.66667 1 6.26667 1 7V13.6667C1 14.4 1.5625 15 2.25 15H9.75C10.4375 15 11 14.4 11 13.6667V7C11 6.26667 10.4375 5.66667 9.75 5.66667M2.25 5.66667H9.75\" stroke=\"#9B9B9B\" stroke-width=\"1.5\" stroke-linecap=\"round\"/>\n    </svg>\n  "
  };

  var ControlText = {
    props: {
      control: {
        type: Object,
        required: true
      },
      id: {
        type: String,
        "default": null
      },
      name: {
        type: String,
        "default": null
      }
    },
    data: function data() {
      var _this$control;
      // Проверяем существование control и его свойств
      if (!this.control) {
        console.error('ControlText: prop "control" is required');
        return {};
      }
      return {
        controlId: this.id || this.control.id || null,
        controlName: this.name || this.control.name || null,
        focused: false,
        blured: false,
        warning: '',
        hint: ((_this$control = this.control) === null || _this$control === void 0 ? void 0 : _this$control.hint_external) || ''
      };
    },
    components: {
      IconLock: IconLock
    },
    // language=Vue
    template: "\n\t\t<div\n      :class=\"{\n        'twpx-form-control': true,\n        'twpx-form-control--text': true,\n        'twpx-form-control--active': active,\n        'twpx-form-control--invalid': invalid,\n        'twpx-form-control--disabled': disabled,\n      }\"\n    >\n      <IconLock\n        class=\"twpx-form-control__disabled-icon\"\n        v-if=\"disabled\"\n      />\n      <div class=\"twpx-form-control__label\">{{ control.label }}</div>\n      <input\n        type=\"text\"\n        :id=\"controlId\"\n        :name=\"controlName\"\n        v-model=\"value\"\n        @focus=\"focus\"\n        @blur=\"blur\"\n        @keyup.enter=\"enter\"\n        :disabled=\"disabled\"\n        ref=\"input\"\n        autocomplete=\"off\"\n        :placeholder=\"placeholder\"\n        :aria-label=\"control.label\"\n        :aria-invalid=\"invalid\"\n        class=\"twpx-form-control__input\"\n      />\n      <div\n        class=\"twpx-form-control__warning\"\n        v-html=\"warning\"\n        v-if=\"warning\"\n      ></div>\n      <div class=\"twpx-form-control__hint\" v-html=\"hint\" v-if=\"hint\"></div>\n    </div>\n\t",
    emits: ['input', 'focus', 'blur', 'enter'],
    computed: {
      value: {
        get: function get() {
          var _this$control2;
          return ((_this$control2 = this.control) === null || _this$control2 === void 0 ? void 0 : _this$control2.value) || '';
        },
        set: function set(value) {
          if (!this.control) return;
          this.control.setInvalidWatcher = false;
          this.$emit('input', {
            value: value
          });
        }
      },
      placeholder: function placeholder() {
        if (this.focused && !this.value.trim()) {
          var _this$control3;
          return ((_this$control3 = this.control) === null || _this$control3 === void 0 ? void 0 : _this$control3.hint_internal) || '';
        }
        return '';
      },
      active: function active() {
        var _this$control4, _this$control4$value;
        return this.focused || !!((_this$control4 = this.control) !== null && _this$control4 !== void 0 && (_this$control4$value = _this$control4.value) !== null && _this$control4$value !== void 0 && _this$control4$value.trim());
      },
      invalid: function invalid() {
        return this.blured && !this.validate() || this.setInvalidWatcher;
      },
      disabled: function disabled() {
        var _this$control5;
        return !!((_this$control5 = this.control) !== null && _this$control5 !== void 0 && _this$control5.disabled);
      },
      validateWatcher: function validateWatcher() {
        return this.control.validateWatcher;
      },
      focusWatcher: function focusWatcher() {
        return this.control.focusWatcher;
      },
      setInvalidWatcher: function setInvalidWatcher() {
        return this.control.setInvalidWatcher;
      }
    },
    watch: {
      validateWatcher: function validateWatcher() {
        this.blured = true;
      },
      focusWatcher: function focusWatcher() {
        this.$refs.input.focus();
      },
      setInvalidWatcher: function setInvalidWatcher(val) {
        this.warning = val ? this.control.regexp_description : '';
      }
    },
    methods: {
      focus: function focus() {
        this.focused = true;
        this.blured = false;
        this.$emit('focus');
      },
      blur: function blur() {
        this.focused = false;
        this.blured = true;
        this.$emit('blur');
      },
      enter: function enter() {
        this.$emit('enter');
      },
      validate: function validate() {
        if (this.control.required && this.value.trim() || !this.control.required) {
          if (this.control.regexp) {
            var match = String(this.value.trim()).match(RegExp(this.control.regexp));
            if (!match) {
              this.warning = this.control.regexp_description;
            } else {
              this.warning = '';
            }
            return match;
          } else {
            return true;
          }
        } else if (this.control.required && !this.value) {
          return false;
        }
        return true;
      }
    },
    created: function created() {
      var _this = this;
      // Проверка обязательных свойств control при создании компонента
      var requiredProps = ['value', 'label'];
      requiredProps.forEach(function (prop) {
        if (!(prop in _this.control)) {
          console.warn("ControlText: Missing required control property \"".concat(prop, "\""));
        }
      });
    }
  };

  exports.ControlText = ControlText;

}((this.BX.Controls = this.BX.Controls || {})));
//# sourceMappingURL=component.bundle.js.map
