import { IconLock } from './IconLock.js';

import './component.css';

export const ControlTel = {
  data() {
    return {
      controlId: this.id || this.control.id || null,
      controlName: this.name || this.control.name || null,
      focused: false,
      blured: false,
      warning: '',
      hint: this.control.hint_external,
    };
  },
  props: ['control', 'id', 'name'],
  // language=Vue
  components: {
    IconLock,
  },
  template: `
		<div
      :class="{
        'twpx-form-control': true,
        'twpx-form-control--tel': true,
        'twpx-form-control--active': active,
        'twpx-form-control--invalid': invalid,
        'twpx-form-control--disabled': disabled,
      }"
    >
      <IconLock
        class="twpx-form-control__disabled-icon"
        v-if="disabled"
      />
      <div class="twpx-form-control__label">{{ control.label }}</div>
      <input
        type="tel"
        :id="controlId"
        :name="controlName"
        v-model="value"
        @focus="focus"
        @blur="blur"
        @keyup.enter="enter"
        @keydown="keydown"
        :disabled="disabled"
        ref="input"
        autocomplete="off"
        :placeholder="placeholder"
        class="twpx-form-control__input"
      />
      <div
        class="twpx-form-control__warning"
        v-html="warning"
        v-if="warning"
      ></div>
      <div class="twpx-form-control__hint" v-html="hint" v-if="hint"></div>
    </div>
	`,
  emits: ['input', 'focus', 'blur', 'enter'],
  computed: {
    value: {
      get() {
        return this.control.value;
      },
      set(value) {
        this.$emit('input', { value });
      },
    },
    placeholder() {
      if (this.focused && !this.value.trim()) {
        return this.control.hint_internal;
      } else {
        return '';
      }
    },
    active() {
      return this.focused || !!this.control.value.trim();
    },
    invalid() {
      return (this.blured && !this.validate()) || this.setInvalidWatcher;
    },
    disabled() {
      return this.control.disabled;
    },
    validateWatcher() {
      return this.control.validateWatcher;
    },
    focusWatcher() {
      return this.control.focusWatcher;
    },
    setInvalidWatcher() {
      return this.control.setInvalidWatcher;
    },
  },
  watch: {
    validateWatcher() {
      this.blured = true;
    },
    focusWatcher() {
      this.$refs.input.focus();
    },
    setInvalidWatcher(val) {
      this.warning = val ? this.control.regexp_description : '';
    },
  },
  methods: {
    focus() {
	    setTimeout(() => {
        if (this.value === '') {
          this.value = '+7 ';
        }
        this.focused = true;
        this.blured = false;
        this.$emit('focus');
      }, 0);
    },
    blur() {
      if (this.value === '+7 (') {
        this.value = '';
      }
      this.focused = false;
      this.blured = true;
      this.$emit('blur');
    },
    enter() {
      this.$emit('enter');
    },
    keydown($event) {
      this.inputphone($event);
    },
    inputphone(e) {
      let key = e.key;
      let not = key.replace(/([0-9])/, 1);

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
    validate() {
      if (!this.control.required) {
        if (!this.value.trim()) {
          return true;
        } else if (this.value.length >= 11) {
          return true;
        }
        return false;
      } else if (this.control.required && this.value.trim()) {
        if (this.control.regexp) {
          const match = String(this.value.trim()).match(
            RegExp(this.control.regexp)
          );
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
    },
  },
};
