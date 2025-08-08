import './component.css';

import { ButtonComponent } from 'local.vue-components.button-component';
import { IconClose } from './IconClose.js';

export const ModalYesNo = {
  props: {
    'heading': {
      type: String,
      default: 'Подтверждение'
    },
    'text': {
      type: String,
      default: 'Вы действительно хотите удалить номер телефона?'
    },
    'yes':{
      type: String,
      default: 'Да'
    },
    'no':{
      type: String,
      default: 'Нет'
    },
    'buttons': {
      type: Object,
      default: () => ({
        yes: {
          props: ['secondary', 'large']
        },
        no: {
          props: ['gray-color', 'large']
        }
      })
    },
    stateWatcher: {
      type: Boolean,
      default: true
    }
  },
  emits: ['clickYes', 'clickNo'],
  data() {
    return {
      isOpen: false,
      isAnimate: false,
    }
  },
  components: {
    IconClose,
    ButtonComponent
  },
  // language=Vue
  template: `
		<div :class="{
      'twpx-modal-yes-no': true,
      'twpx-modal-yes-no--open': isOpen,
      'twpx-modal-yes-no--animate': isAnimate
    }" @click="close">

      <div class="twpx-modal-yes-no-body" @click.stop>
        <div class="twpx-modal-yes-no-close">
          <IconClose @click.prevent="close" />
        </div>
        <div class="twpx-modal-yes-no-heading">{{ heading }}</div>
        <div class="twpx-modal-yes-no-text" v-html="text"></div>
        <div class="twpx-modal-yes-no-buttons">
          <ButtonComponent :text="no" :props="buttons.no.props" @clickButton="$emit('clickNo')" />
          <ButtonComponent :text="yes" :props="buttons.yes.props" @clickButton="$emit('clickYes')" />
        </div>
      </div>
    </div>
	`,
  emits: ['input', 'focus', 'blur', 'enter'],
  watch: {
    stateWatcher() {
      if (this.isOpen) {
        this.close();
      } else {
        this.open();
      }
    }
  },
  methods: {
    open() {
      this.isOpen = true;
      setTimeout(() => {
        this.isAnimate = true;
      }, 0)
    },
    close() {
      this.isAnimate = false;
      setTimeout(() => {
        this.isOpen = false;
      }, 300)
    }
  },
};
