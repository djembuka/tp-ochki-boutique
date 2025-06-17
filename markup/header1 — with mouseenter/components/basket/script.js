(() => {
  const componentObj = {
    name: 'basket',
    event: 'slr2BasketLoaded',
    component: 'slr2BasketComponent',
    method: 'toggle',
  };

  class Slr2BasketComponent {
    constructor() {
      this.name = 'basket';
      this.count = 0;
    }

    updateCount() {
      if (!window.BX) return;

      const th = this;
      BX.ajax
        .runComponentAction('twinpx:small-basket', 'count', {
          mode: 'class',
          method: 'GET',
          data: {},
        })
        .then(
          (response) => {
            th.count = response.data.count;
            const basketEvent = new CustomEvent('slr2BasketCountUpdated', {
              detail: { count: th.count },
            });
            document.documentElement.dispatchEvent(basketEvent);
          },
          (error) => {
            //сюда будут приходить все ответы, у которых status !== 'success'
            console.log(error);
          }
        );

      return Promise;
    }
  }

  fetchComponent();

  function fetchComponent() {
    window.seller2 = window.seller2 || {};
    window.seller2[componentObj.component] = new Slr2BasketComponent();

    //вызываем событие при загрузке компонента,
    //теперь на кнопку можно нажать
    const event = new Event(componentObj.event);
    document.documentElement.dispatchEvent(event);
  }
})();
