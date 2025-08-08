import './application.css';

import { ControlChoice } from 'local.vue-components.control-choice';
import { ButtonComponent } from 'local.vue-components.button-component';
import { LoaderCircle } from 'local.vue-components.loader-circle';
import { MessageComponent } from 'local.vue-components.message-component';
import { ModalAnyContent } from 'local.vue-components.modal-any-content';

import { CloseIcon } from './closeIcon.js';

import { mapState, mapActions } from 'ui.vue3.pinia';
import { dataStore } from '../stores/data.js';
import { formStore } from '../stores/form.js';
import { controlsStore } from '../stores/controls.js';

export const Application = {
  data() {
    return {};
  },
  components: {
    ControlChoice,
    ButtonComponent,
    LoaderCircle,
    MessageComponent,
    ModalAnyContent,
    CloseIcon
  },
  // language=Vue
  template: `
  <div class="twpx-one-click-form" :id="id">

    <ModalAnyContent :stateWatcher="stateWatcher">

      <LoaderCircle :show="loading" />

      <MessageComponent v-if="error" type="error" size="small" :message="error" />

      <div class="twpx-one-click-form__grid" v-if="!loading && !error">
        <div class="twpx-one-click-form__product">

          <LoaderCircle :show="productLoading" />

          <MessageComponent v-if="productError" type="error" size="small" :message="productError" />

          <div class="twpx-one-click-form__product-wrapper" v-if="!productLoading && !productError"  >
            <div v-if="product.img" class="twpx-one-click-form__product-image">
              <img :src="product.img" :alt="product.name"
            </div>
            <div class="twpx-one-click-form__product-text" v-if="product.name || product.price || product.oldPrice">
              <div v-if="product.name" class="twpx-one-click-form__product-name">{{ product.name }}</div>
              <div v-if="product.price || product.oldPrice" class="twpx-one-click-form__product-price">
                <span class="twpx-one-click-form__product-price__price" v-if="product.price" v-html="product.price"></span>
                <span class="twpx-one-click-form__product-price__old-price" v-if="product.oldPrice" v-html="product.oldPrice"></span>
              </div>
            </div>
          </div>

        </div>

        <div class="twpx-one-click-form__form" :style="formStyle">

          <div class="twpx-one-click-form__close"></div>

          <LoaderCircle :show="formLoading" />

          <div v-if="!formLoading && !isMessage" class="twpx-one-click-form__form__content">
            <h3 v-if="form.heading">{{ form.heading }}</h3>
            <form action="">
              <div class="twpx-one-click-form__form-wrapper">
                <ControlChoice  v-for="control in controls" :key="control.id" :control="control" @input="input"></ControlChoice>
                <ButtonComponent v-if="form.button" :text="form.button" :props="buttonProps" @clickButton="clickButton" />
              </div>
            </form>
            <div v-if="form.consent" v-html="form.consent" class="twpx-one-click-form__consent"></div>
          </div>

          <div v-if="formError" class="twpx-one-click-form__form-message">
            <h3 v-if="form.heading">{{ form.heading }}</h3>
            <MessageComponent type="error" size="small" :message="formError" />
            <ButtonComponent :text="lang.buttonError" :props="['primary', 'medium', 'wide']" @clickButton="clickButtonError" />
          </div>

          <div v-if="formMessage" class="twpx-one-click-form__form-message">
            <h3 v-if="form.heading">{{ form.heading }}</h3>
            <MessageComponent v-if="formMessage" type="success" size="small" :message="formMessage" />
            <ButtonComponent :text="lang.buttonSuccess" :props="['primary', 'medium', 'wide']" @clickButton="clickButtonSuccess" />
          </div>

        </div>
      </div>
    </ModalAnyContent>

  </div>
	`,
  computed: {
    ...mapState(dataStore, ['lang', 'id']),
    ...mapState(formStore, [
      'loading',
      'productLoading',
      'formLoading',
      'form',
      'product',
      'stateWatcher',
      'error',
      'formError',
      'productError',
      'formMessage',
      'height'
    ]),
    ...mapState(controlsStore, ['controls']),
    buttonProps() {
      const result = new Set();
      result.add('wide');
      result.add('primary');
      result.add('medium');

      if (typeof this.controls === 'object' && this.controls.forEach) {
        this.controls.forEach(c => {
          if (c.required && !c.value) {
            result.add('disabled');
          }
        })
      }
      return [...result];
    },
    isMessage() {
      return this.formError || this.formMessage;
    },
    formStyle() {
      return `height: ${this.height}px;`
    }
  },
  methods: {
    ...mapActions(formStore, [
      'runGetForm',
      'runGetProduct',
      'runSendForm',
      'changeStateWatcher',
      'changeLoading',
      'changeProductLoading',
      'changeFormLoading',
      'changeForm',
      'changeProduct',
      'changeError',
      'changeFormError',
      'changeProductError',
      'changeFormMessage',
      'setTimeoutMethod',
      'clearTimeoutMethod'
    ]),
    ...mapActions(controlsStore, [
      'changeControls',
      'changeControlValue',
    ]),
    input(args) {
      this.changeControlValue(args);
    },
    hints({ control, type, action, value }) {
      if (type === 'get') {
        this.runHints(control, action);
      } else if (type === 'set') {
        this.setHints(control, value);
      }
    },
    clickButton() {
      this.runSendForm()
        .then(
          response => {
            this.changeFormLoading(false);
            this.setTimeoutMethod();
            if (response?.status === 'success') {
              this.changeFormError('');
              if (response?.data?.message) {
                this.changeFormMessage(response.data.message);
              }
            }
          },
          response => {
            this.changeFormLoading(false);
            this.setTimeoutMethod();
            this.changeFormMessage('');
            this.changeFormError(response.errors[0].message);
          }
        )
    },
    clickButtonSuccess() {
      this.clearTimeoutMethod();
      this.changeStateWatcher();
      setTimeout(() => {
        this.changeFormMessage('');
      }, 1000);
    },
    clickButtonError() {
      this.clearTimeoutMethod();
      this.changeFormError('');
    }
  },
  mounted() {
    this.runGetForm()
      .then(
        (response) => {
          this.changeLoading(false);
          this.changeError('');
          this.changeForm(response.data);
          this.changeControls(response.data.controls);
        },
        (response) => {
          this.changeLoading(false);
          this.changeError(response.errors[0].message);
        });
  },
};
