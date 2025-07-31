import { IconLock } from './IconLock.js';

import './component.css';

export const ControlTextarea = {
  props: {
    control: {
      type: Object,
      required: true,
    },
    id: {
      type: String,
      default: null,
    },
    name: {
      type: String,
      default: null,
    },
  },
  data() {
    // Проверяем существование control и его свойств
    if (!this.control) {
      console.error('ControlTextarea: prop "control" is required');
      return {};
    }

    return {
      controlId: this.id || this.control.id || null,
      controlName: this.name || this.control.name || null,
      focused: false,
      blured: false,
      warning: '',
      hint: this.control?.hint_external || '',
    };
  },
  components: {
    IconLock,
  },
  // language=Vue
  template: `
		<div
      :class="{
        'twpx-form-control': true,
        'twpx-form-control--textarea': true,
        'twpx-form-control--active': active,
        'twpx-form-control--focused': focused,
        'twpx-form-control--invalid': invalid,
        'twpx-form-control--disabled': disabled,
      }"
    >
      <IconLock
        class="twpx-form-control__disabled-icon"
        v-if="disabled"
      />
      <div class="twpx-form-control__label">{{ control.label }}</div>
      <div class="twpx-form-control__textarea">
        <textarea
          :id="controlId"
          :name="controlName"
          v-model="value"
          @focus="focus"
          @blur="blur"
          :disabled="disabled"
          ref="textarea"
          contenteditable="true"
          class="twpx-form-control__textarea-content"
        ></textarea>
      </div>
      <div
        class="twpx-form-control__warning"
        v-html="warning"
        v-if="warning"
      ></div>
      <div class="twpx-form-control__hint" v-html="hint" v-if="hint"></div>
    </div>
	`,
  emits: ['input', 'focus', 'blur'],
  computed: {
    value: {
      get() {
        return this.control?.value || '';
      },
      set(value) {
        if (!this.control) return;
        this.control.setInvalidWatcher = false;
        this.$emit('input', { value });

        //autoheight
        this.$refs.textarea.style.height = 'auto';
        let height = this.$refs.textarea.scrollHeight;
        this.$refs.textarea.style.height = `${height > 100 ? height : 100}px`;
      },
    },
    placeholder() {
      if (this.focused && !this.value.trim()) {
        return this.control?.hint_internal || '';
      }
      return '';
    },
    active() {
      return this.focused || !!this.control?.value?.trim();
    },
    invalid() {
      return (this.blured && !this.validate()) || this.setInvalidWatcher;
    },
    disabled() {
      return !!this.control?.disabled;
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
      this.focused = true;
      this.blured = false;
      this.$emit('focus');
    },
    blur() {
      this.focused = false;
      this.blured = true;
      this.$emit('blur');
    },
    validate() {
      if (
        (this.control.required && this.value.trim()) ||
        !this.control.required
      ) {
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
        } else {
          return true;
        }
      } else if (this.control.required && !this.value) {
        return false;
      }
      return true;
    },
  },
  created() {
    // Проверка обязательных свойств control при создании компонента
    const requiredProps = ['value', 'label'];
    requiredProps.forEach((prop) => {
      if (!(prop in this.control)) {
        console.warn(
          `ControlTextarea: Missing required control property "${prop}"`
        );
      }
    });
  },
  mounted() {
    let height = this.$refs.textarea.scrollHeight;
    this.$refs.textarea.style.height = `${height > 100 ? height : 100}px`;
  },
};
