(() => {
  const componentObj = {
    name: 'profile',
    event: 'slr2ProfileLoaded',
    component: 'slr2ProfileComponent',
    method: 'toggle',
  };

  fetchComponent();

  class Slr2ProfileComponent {
    constructor(elem) {
      this.elem = elem;
      this.name = 'profile';
      this.wrapper = this.elem.querySelector('.slr2-profile-wrapper');
    }

    documentClick(event) {
      if (
        event.target.id === this.id ||
        event.target.closest(`#${this.elem.id}`) ||
        event.target.getAttribute('data-slr2toggle') === this.name ||
        (event.target.closest(`[data-slr2toggle]`) &&
          event.target
            .closest(`[data-slr2toggle]`)
            .getAttribute('data-slr2toggle') === this.name)
      ) {
        return;
      }
      this.hide();
    }

    toggle() {
      !this.wrapper.classList.contains('slr2-slide-toggle--show')
        ? this.show()
        : this.hide();
    }

    show() {
      this.styleContainer.removeAttribute('style');

      //let the site know, that the new component is going to be shown
      const event = new CustomEvent('slr2NewComponentIsShown', {
        detail: {
          name: 'profile',
        },
      });
      document.documentElement.dispatchEvent(event);

      const header = document.querySelector('header');
      this.wrapper.style.top =
        header.getBoundingClientRect().top + header.clientHeight + 10 + 'px';
      this.slideDown(this.wrapper);
    }

    hide() {
      this.slideUp(this.wrapper);
    }

    slideDown(block) {
      if (!block.classList.contains('slr2-slide-toggle')) {
        block.classList.add('slr2-slide-toggle');
      }
      if (!block.classList.contains('slr2-slide-toggle--show')) {
        block.classList.add('slr2-slide-toggle--show');
        block.style.height = 'auto';

        var height = block.clientHeight + 'px';

        block.style.height = '0px';

        setTimeout(() => {
          block.style.height = height;
        }, 0);
      }
    }

    slideUp(block) {
      if (!block.classList.contains('slr2-slide-toggle')) {
        block.classList.add('slr2-slide-toggle');
      }

      if (block.classList.contains('slr2-slide-toggle--show')) {
        if (block.style.height === '0px') {
          block.classList.remove('slr2-slide-toggle--show');
        } else {
          block.style.height = '0px';

          block.addEventListener(
            'transitionend',
            () => {
              block.classList.remove('slr2-slide-toggle--show');
            },
            {
              once: true,
            }
          );
        }
      }
    }

    slideToggle(block) {
      if (!block.classList.contains('slr2-slide-toggle')) {
        block.classList.add('slr2-slide-toggle');
      }
      if (!block.classList.contains('slr2-slide-toggle--show')) {
        block.classList.add('slr2-slide-toggle--show');
        block.style.height = 'auto';

        let height = block.clientHeight + 'px';

        block.style.height = '0px';

        setTimeout(() => {
          block.style.height = height;
        }, 0);
      } else {
        if (block.style.height === '0px') {
          block.classList.remove('slr2-slide-toggle--show');
        } else {
          block.style.height = '0px';

          block.addEventListener(
            'transitionend',
            () => {
              block.classList.remove('slr2-slide-toggle--show');
            },
            {
              once: true,
            }
          );
        }
      }
    }
  }

  function fetchComponent() {
    //загружаем и добавляем на страницу html, css
    //обёртка, чтобы не было видно html до загрузки стилей

    if (!window.BX) return;

    BX.ajax
      .runComponentAction('twinpx:user-profile', 'init', {
        mode: 'class',
        method: 'GET',
        data: {},
      })
      .then(
        (response) => {
          const result = response.data.html;

          const div = document.createElement('div');
          div.className = 'slr2-profile-component-container';
          div.style.position = 'absolute';
          div.style.top = '0';
          div.style.left = '0';
          div.style.width = '0';
          div.style.height = '0';
          div.style.overflow = 'hidden';
          div.style.opacity = '0';
          div.style.zIndex = '-1';

          const elem = document.createElement('div');
          elem.id = 'slr2ProfileElem';
          elem.innerHTML = result;

          div.append(elem);
          document.querySelector('body').append(div);

          //добавляем экземпляр класса в глобальное пространство
          window.seller2 = window.seller2 || {};
          window.seller2[componentObj.component] = new Slr2ProfileComponent(
            document.getElementById('slr2ProfileElem')
          );

          window.seller2[componentObj.component].styleContainer = div;

          //вызываем событие при загрузке компонента,
          //теперь на кнопку можно нажать
          const event = new Event(componentObj.event);
          document.documentElement.dispatchEvent(event);
        },
        (error) => {
          //сюда будут приходить все ответы, у которых status !== 'success'
          console.log(error);
        }
      );
  }
})();