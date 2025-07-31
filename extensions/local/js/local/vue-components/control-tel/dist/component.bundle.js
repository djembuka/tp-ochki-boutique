/* eslint-disable */
this.BX = this.BX || {};
(function (exports) {
  'use strict';

  var IconLock = {
    template: "\n    <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"12\" height=\"16\" viewBox=\"0 0 12 16\" fill=\"none\">\n      <path d=\"M2.25 5.66667V5C2.25 2.78413 3.92262 1 6 1C8.07738 1 9.75 2.78413 9.75 5V5.66667M2.25 5.66667C1.5625 5.66667 1 6.26667 1 7V13.6667C1 14.4 1.5625 15 2.25 15H9.75C10.4375 15 11 14.4 11 13.6667V7C11 6.26667 10.4375 5.66667 9.75 5.66667M2.25 5.66667H9.75\" stroke=\"#9B9B9B\" stroke-width=\"1.5\" stroke-linecap=\"round\"/>\n    </svg>\n  "
  };

  var ControlTel = {
    data: function data() {
      return {
        controlId: this.id || this.control.id || null,
        controlName: this.name || this.control.name || null,
        focused: false,
        blured: false,
        warning: '',
        hint: this.control.hint_external
      };
    },
    props: ['control', 'id', 'name'],
    // language=Vue
    components: {
      IconLock: IconLock
    },
    template: "\n\t\t<div\n      :class=\"{\n        'twpx-form-control': true,\n        'twpx-form-control--tel': true,\n        'twpx-form-control--active': active,\n        'twpx-form-control--invalid': invalid,\n        'twpx-form-control--disabled': disabled,\n      }\"\n    >\n      <IconLock\n        class=\"twpx-form-control__disabled-icon\"\n        v-if=\"disabled\"\n      />\n      <div class=\"twpx-form-control__label\">{{ control.label }}</div>\n      <input\n        type=\"tel\"\n        :id=\"controlId\"\n        :name=\"controlName\"\n        v-model=\"value\"\n        @focus=\"focus\"\n        @blur=\"blur\"\n        @keyup.enter=\"enter\"\n        @keydown=\"keydown\"\n        :disabled=\"disabled\"\n        ref=\"input\"\n        autocomplete=\"off\"\n        :placeholder=\"placeholder\"\n        class=\"twpx-form-control__input\"\n      />\n      <div\n        class=\"twpx-form-control__warning\"\n        v-html=\"warning\"\n        v-if=\"warning\"\n      ></div>\n      <div class=\"twpx-form-control__hint\" v-html=\"hint\" v-if=\"hint\"></div>\n    </div>\n\t",
    emits: ['input', 'focus', 'blur', 'enter'],
    computed: {
      value: {
        get: function get() {
          return this.control.value;
        },
        set: function set(value) {
          this.$emit('input', {
            value: value
          });
        }
      },
      placeholder: function placeholder() {
        if (this.focused && !this.value.trim()) {
          return this.control.hint_internal;
        } else {
          return '';
        }
      },
      active: function active() {
        return this.focused || !!this.control.value.trim();
      },
      invalid: function invalid() {
        return this.blured && !this.validate() || this.setInvalidWatcher;
      },
      disabled: function disabled() {
        return this.control.disabled;
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
        var _this = this;
        setTimeout(function () {
          if (_this.value === '') {
            _this.value = '+7 ';
          }
          _this.focused = true;
          _this.blured = false;
          _this.$emit('focus');
        }, 0);
      },
      blur: function blur() {
        if (this.value === '+7 (') {
          this.value = '';
        }
        this.focused = false;
        this.blured = true;
        this.$emit('blur');
      },
      enter: function enter() {
        this.$emit('enter');
      },
      keydown: function keydown($event) {
        this.inputphone($event);
      },
      inputphone: function inputphone(e) {
        var key = e.key;
        var not = key.replace(/([0-9])/, 1);
        if (not == 1) {
          if (this.value.length < 4 || this.value === '') {
            this.value = '+7 (';
          }
          if (this.value.length === 7) {
            this.value = this.value + ') ';
          }
          if (this.value.length === 12) {
            this.value = this.value + '-';
          }
          if (this.value.length === 15) {
            this.value = this.value + '-';
          }
          if (this.value.length >= 18) {
            this.value = this.value.substring(0, 17);
          }
        } else if ('Backspace' !== not && 'Tab' !== not) {
          e.preventDefault();
        }
      },
      validate: function validate() {
        if (!this.control.required) {
          if (!this.value.trim()) {
            return true;
          } else if (this.value.length >= 11) {
            return true;
          }
          return false;
        } else if (this.control.required && this.value.trim()) {
          if (this.control.regexp) {
            var match = String(this.value.trim()).match(RegExp(this.control.regexp));
            if (!match) {
              this.warning = this.control.regexp_description;
            } else {
              this.warning = '';
            }
            return match;
          } else if (this.value.length >= 11) {
            return true;
          } else {
            return false;
          }
        } else if (this.control.required && !this.value.trim()) {
          return false;
        }
        return true;
      }
    }
  };

  exports.ControlTel = ControlTel;

}((this.BX.Controls = this.BX.Controls || {})));
//# sourceMappingURL=component.bundle.js.map
