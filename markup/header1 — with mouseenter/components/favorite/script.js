(() => {
  const componentObj = {
    name: 'favorite',
    event: 'slr2FavoriteLoaded',
    component: 'slr2FavoriteComponent',
    method: 'toggle',
  };

  class Slr2FavoriteComponent {
    constructor() {
      this.name = 'favorite';
      this.count = 0;
    }

    updateCount() {
      if (!window.BX) return;

      const th = this;
      BX.ajax
        .runComponentAction('twinpx:favorite', 'count', {
          mode: 'class',
          method: 'GET',
          data: {},
        })
        .then(
          (response) => {
            th.count = response.data.count;
            const favoriteEvent = new CustomEvent('slr2FavoriteCountUpdated', {
              detail: { count: th.count },
            });
            document.documentElement.dispatchEvent(favoriteEvent);
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
    window.seller2[componentObj.component] = new Slr2FavoriteComponent();

    //вызываем событие при загрузке компонента,
    //теперь на кнопку можно нажать
    const event = new Event(componentObj.event);
    document.documentElement.dispatchEvent(event);
  }
})();
