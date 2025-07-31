import { BitrixVue } from 'ui.vue3';
import { Application } from './components/application';
import { createPinia, setActivePinia, mapState, mapActions } from 'ui.vue3.pinia';
import { dataStore } from './stores/data.js';
import { formStore } from './stores/form.js';

export class OneClickForm {
  #store;
  #rootNode;
  #application;

  constructor(rootNode, options): void {
    this.#store = createPinia();
    this.#rootNode = document.querySelector(rootNode);
    this.options = options;
  }

  run(): void {
    const self = this;

    this.#application = BitrixVue.createApp({
      name: 'OneClickForm',
      components: {
        Application,
      },
      template: '<Application/>',
      methods: {
        ...mapActions(formStore, [
          'changeStateWatcher',
          'runGetProduct',
        ])
      },
      beforeMount() {
        dataStore().data = self.options.data || {};
        dataStore().lang = self.options.lang || {};
        dataStore().actions = self.options.actions || [];
      },
    });

    this.#application.use(this.#store);
    this.#application.mount(this.#rootNode);

    // this.#application.show = ({id}) => {

    // };
  }

  show({id}) {
    const methods = this.#application._component.components.Application.methods;
    methods.changeStateWatcher(true);

    methods.runGetProduct({id})
      .then(
        (response) => {
          methods.changeProductLoading(false);
          methods.changeProductError('');
          methods.changeProduct(response.data.product);
        },
        (response) => {
          methods.changeProductLoading(false);
          methods.changeProductError(response.errors[0].message);
          methods.changeProduct({});
        }
      );
  }

  initStorageBeforeStartApplication(): void {
    setActivePinia(this.#store);
  }

  getFormStore(): Object {
    return formStore;
  }
}
