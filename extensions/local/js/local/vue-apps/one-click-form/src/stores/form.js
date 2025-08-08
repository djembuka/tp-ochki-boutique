import { defineStore } from 'ui.vue3.pinia';
import { dataStore } from './data';
import { controlsStore } from './controls';

export const formStore = defineStore('form', {
  state: () => ({
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
  }),
  actions: {
    changeStateWatcher() {
      this.stateWatcher = !this.stateWatcher;
    },
    changeHistoryItems(historyItems) {
      console.log(historyItems)
      this.historyItems = historyItems;
    },
    changeLoading(value) {
      this.loading = value;
    },
    changeProductLoading(value) {
      this.productLoading = value;
    },
    changeFormLoading(value) {
      this.formLoading = value;
    },
    changeForm(data) {
      this.form.heading = data.heading;
      this.form.button = data.button;
      this.form.consent = data.consent;
    },
    changeProduct(product) {
      this.product = product;
    },
    changeError(error) {
      this.error = error;
    },
    changeFormError(error) {
      this.formError = error;
    },
    changeProductError(error) {
      this.productError = error;
    },
    changeFormMessage(message) {
      this.formMessage = message;
    },
    setHeight() {
      this.height = document.querySelector(`#${dataStore().id} .twpx-one-click-form__form`).clientHeight;
    },
    setTimeoutMethod() {
      this.timeoutId = setTimeout(() => {
        this.changeFormMessage('');
        this.changeFormError('');
        this.changeStateWatcher();
      }, 5000);
    },
    clearTimeoutMethod() {
      clearTimeout(this.timeoutId);
    },
    runGetForm() {
      this.error = '';
      this.loading = true;
      const d = dataStore();

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
        data: d.data,
      });
    },
    runGetProduct({id}) {
      this.error = '';
      this.productLoading = true;
      const d = dataStore();

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
        data: {...d.data, id},
      });
    },
    runSendForm() {
      this.error = '';
      this.changeFormLoading(true);
      this.setHeight();


      const d = dataStore();
      const c = controlsStore();

      const formData = new FormData(document.querySelector(`#${d.id} form`));

      Object.keys(d.data).forEach(key => {
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
        data: formData,
      });
    },
  },
});
