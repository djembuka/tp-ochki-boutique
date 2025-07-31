import './component.css';
import { TabIcon } from './TabIcon.js';

import { ControlHidden } from 'local.vue-components.control-hidden';
import { ControlText } from 'local.vue-components.control-text';
import { ControlTextarea } from 'local.vue-components.control-textarea';
import { ControlPassword } from 'local.vue-components.control-password';
import { ControlTel } from 'local.vue-components.control-tel';
import { ControlEmail } from 'local.vue-components.control-email';
import { ControlHint } from 'local.vue-components.control-hint';
import { ControlSelectDropdown } from 'local.vue-components.control-select-dropdown';
import { ControlSelectRadio } from 'local.vue-components.control-select-radio';
import { ControlDatepicker } from 'local.vue-components.control-datepicker';
import { ControlDateSingle } from 'local.vue-components.control-date-single';
import { ControlDateRange } from 'local.vue-components.control-date-range';
import { ControlTimeSingle } from 'local.vue-components.control-time-single';
import { ControlFile } from 'local.vue-components.control-file';
import { ControlFileUpload } from 'local.vue-components.control-file-upload';
import { ControlCheckbox } from 'local.vue-components.control-checkbox';
import { ControlCheckboxCheckbox } from 'local.vue-components.control-checkbox-checkbox';
import { ControlCheckboxSwitch } from 'local.vue-components.control-checkbox-switch';
import { ControlCheckboxBlock } from 'local.vue-components.control-checkbox-block';

export const ControlComponent = {
  data() {
    return {
      id: this.id || this.control.id,
      name: this.name || this.control.name,
      componentType: `${this.control.property}${
        this.control.type ? '-' + this.control.type : ''
      }`,
    };
  },
  components: {
    TabIcon,
    ControlHidden,
    ControlText,
    ControlTextarea,
    ControlPassword,
    ControlTel,
    ControlEmail,
    ControlHint,
    ControlSelectDropdown,
    ControlSelectRadio,
    ControlDatepicker,
    ControlDateSingle,
    ControlDateRange,
    ControlTimeSingle,
    ControlFile,
    ControlFileUpload,
    ControlCheckbox,
    ControlCheckboxCheckbox,
    ControlCheckboxSwitch,
    ControlCheckboxBlock,
  },
  props: ['control', 'name', 'id'],
  // language=Vue
  template: `
    <component v-if="control.property==='hidden'"
      :is="componentName()"
      :control="control"
      :id="id"
      :name="name"
      @input="inputAddControl"
    ></component>

    <div class="twpx-control-component" v-else>
      <div class="twpx-control-tab" v-if="control.tab" :style="tabWidth(control.tab)">
        <TabIcon />
      </div>
      <component
        :is="componentName()"
        :control="control"
        :id="id"
        :name="name"
        @input="inputAddControl"
        @focus="focusAddControl"
        @blur="blurAddControl"
        @enter="enterAddControl"
        @hints="hintsAddControl"
      ></component>
    </div>
	`,
  emits: ['input', 'focus', 'blur', 'hints'],
  methods: {
    tabWidth(tab) {
      return `width: ${48 * Number(tab) - 16}px`;
    },
    componentName() {
      return `control-${this.componentType}`;
    },
    inputAddControl(args) {
      this.$emit('input', {
        ...args,
        control: this.control,
      });
    },
    focusAddControl() {
      this.$emit('focus', {
        control: this.control,
      });
    },
    blurAddControl() {
      this.$emit('blur', {
        control: this.control,
      });
    },
    enterAddControl() {
      this.$emit('enter', {
        control: this.control,
      });
    },
    hintsAddControl(args) {
      this.$emit('hints', {
        ...args,
        control: this.control,
      });
    },
  },
};
