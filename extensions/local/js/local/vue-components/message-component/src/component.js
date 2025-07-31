import './component.css';
import { ButtonComponent } from 'local.vue-components.button-component';

export const MessageComponent = {
  data() {
    return {};
  },
  components: {
    ButtonComponent,
  },
  props: {
    type: {
      type: String,
      default: 'success',
      validator(value) {
        return ['success', 'error'].includes(value);
      },
    },
    size: {
      type: String,
      default: 'big',
      validator(value) {
        return ['big', 'small'].includes(value);
      },
    },
    message: {
      type: String,
      default: 'Text',
    },
    button: {
      type: Boolean,
      default: false,
    },
  },
  emits: ['clickButton'],
  // language=Vue
  template: `
		<div class="vue-message" :class="classObject">
      <div class="vue-message__icon">

        <svg v-if="type === 'success'" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path d="M8.18652 15.2073C8.98854 16.503 10.3967 17.3624 11.9999 17.3624C13.6031 17.3624 15.0113 16.503 15.8133 15.2073M9.47746 8.5625H7.1875M23 12C23 18.0751 18.0751 23 12 23C5.92487 23 1 18.0751 1 12C1 5.92487 5.92487 1 12 1C18.0751 1 23 5.92487 23 12ZM15.3 8.5625H15.3974V8.65059H15.3V8.5625Z" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>

        <svg v-else-if="type === 'error'" xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
          <path d="M12 12.5V7M12 16.5767V16.625M23 12.5C23 18.5751 18.0751 23.5 12 23.5C5.92487 23.5 1 18.5751 1 12.5C1 6.42487 5.92487 1.5 12 1.5C18.0751 1.5 23 6.42487 23 12.5Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>

      </div>
      <div class="vue-message__message" v-html="message"></div>
      <div v-if="button" class="vue-message__button">
        <ButtonComponent :text="button" :props="['small', 'secondary', 'wide-mobile']" @clickButton="clickButton" />
      </div>
    </div>
	`,
  computed: {
    classObject() {
      const result = {};
      result[`vue-message--${this.type}`] = true;
      result[`vue-message--${this.size}`] = true;
      // result['anim'] = !this.message;
      return result;
    },
  },
  methods: {
    clickButton() {
      this.$emit('clickButton');
    },
  },
};
