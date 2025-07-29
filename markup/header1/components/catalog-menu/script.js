(() => {
  const componentObj = {
    name: 'menu',
    event: 'slr2CatalogMenuLoaded',
    component: 'slr2CatalogMenuComponent',
    method: 'toggle',
  };

  fetchComponent();

  class slr2CatalogMenuComponent {
    constructor(elem) {
      this.elem = elem;
      this.name = 'catalog-menu';
      this.wrapper = this.elem.querySelector('.slr2-catalog-menu__wrapper');
      this.flag = false;

      this.wrapper.addEventListener('mouseenter', (e) => {
        this.show(e);
      });

      this.wrapper.addEventListener('mouseleave', (e) => {
        this.hide(e);
      });
    }

    documentClick(event) {
      if (
        event.target.id === this.elem.id ||
        event.target.closest(`#${this.elem.id}`) ||
        event.target.getAttribute('data-slr2toggle') === this.name ||
        (event.target.closest(`[data-slr2toggle]`) &&
          event.target
            .closest(`[data-slr2toggle]`)
            .getAttribute('data-slr2toggle') === this.name)
      ) {
        return;
      }
    }

    toggle(e) {
      // click - link from collapse sub
      console.log(e.target)
      const elem = e.target;
      const type = elem.getAttribute('data-slr2type');// item

      if (type) {
        const content = this.wrapper.querySelector(`[data-slr2type="${type}"]`);
        if (!content.classList.contains('slr2-content--show')) {
          this.show(e);
        } else {
          this.hide(e);
        }
        
      }
    }

    show(e) {
      this.flag = true;
      this.styleContainer.removeAttribute('style');

      //let the site know, that the new component is going to be shown
      const event = new CustomEvent('slr2NewComponentIsShown', {
        detail: {
          name: 'catalog-menu',
        },
      });
      document.documentElement.dispatchEvent(event);

      const header = document.querySelector('header');

      this.wrapper.style.top = header.getBoundingClientRect().top + header.clientHeight + 'px';
      this.slideDown(this.wrapper);

      this.menuOverflow('add');
      
      const type = e.target.getAttribute('data-slr2type')
      const content = this.wrapper.querySelector(`[data-slr2type="${type}"]`);
      if (type && content) {

        const prev = this.wrapper.querySelector(`.slr2-content--animate`);
        if (prev) {
          prev.classList.remove('slr2-content--show', 'slr2-content--animate');
        }

        content.classList.add('slr2-content--show');
        setTimeout(() => {
          content.classList.add('slr2-content--animate');
        }, 0);
      }
    }

    hide() {
      this.flag = false;

      setTimeout(() => {
        if (!this.flag) {

          const prev = this.wrapper.querySelector(`.slr2-content--show`);
          if (prev) {
            prev.classList.remove('slr2-content--show', 'slr2-content--animate');
          }

          this.slideUp(this.wrapper);
          this.activeStyle();
          this.menuOverflow('remove');
        }
      }, 100);
    }

    showWhenOpen(elem) {
      this.activeStyle(elem);

      const height = this.wrapper.clientHeight + 'px';

      setTimeout(() => {
        this.wrapper.classList.remove('slr2-slide-toggle--show');
        this.wrapper.classList.remove('slr2-slide-toggle--animate');

        const header = document.querySelector('header');
        this.wrapper.style.top =
        header.getBoundingClientRect().top + header.clientHeight + 'px';
        this.slideDown(this.wrapper, height);
        this.menuOverflow('add');
      }, 0);
    }

    activeStyle(elem) {
      document.querySelectorAll('.slr2-header1__menu-item--active').forEach(a => {
        a.classList.remove('slr2-header1__menu-item--active')
      })

      if (elem && elem.classList.contains('slr2-header1__menu-item')) {
        elem.classList.add('slr2-header1__menu-item--active')
      }
    }

    menuOverflow(method) {
      switch(method) {
        case 'add':
          document.querySelector('.slr2-header1__menu menu').style.overflow = 'visible';
          break;
        case 'remove':
          document.querySelector('.slr2-header1__menu menu').removeAttribute('style');
          break;
      }
    }

    slideDown(block, h) {
      if (!block.classList.contains('slr2-slide-toggle')) {
        block.classList.add('slr2-slide-toggle');
      }
      if (!block.classList.contains('slr2-slide-toggle--show')) {
        block.classList.add('slr2-slide-toggle--show');
        block.style.height = 'auto';

        // var height = block.clientHeight + 'px';

        // block.style.height = h || '0px';

        // setTimeout(() => {
          // block.style.height = height;
        // }, 100);

        // setTimeout(() => {
          block.classList.add('slr2-slide-toggle--animate');
        // }, 500);
      }
    }

    slideUp(block) {
      if (!block.classList.contains('slr2-slide-toggle')) {
        block.classList.add('slr2-slide-toggle');
      }

      if (block.classList.contains('slr2-slide-toggle--show')) {
        if (block.style.height === '0px') {
          block.classList.remove('slr2-slide-toggle--show');
          block.classList.remove('slr2-slide-toggle--animate');
        } else {
          block.style.height = '0px';
          block.classList.remove('slr2-slide-toggle--animate');

          // block.addEventListener(
          //   'transitionend',
          //   () => {
              block.classList.remove('slr2-slide-toggle--show');
          //   },
          //   {
          //     once: true,
          //   }
          // );
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
          block.classList.remove('slr2-slide-toggle--animate');
        } else {
          block.style.height = '0px';
          block.classList.remove('slr2-slide-toggle--animate');

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

  async function fetchComponent() {
    const promiseArray = [];

    document
      .querySelectorAll(`[data-slr2toggle="catalog-menu"]`).forEach((elem) => {
        const url = elem.getAttribute('data-slr2url');
        const type = elem.getAttribute('data-slr2type');
        
        const promise = fetch(url)
          .then(response => response.text())
          .then(result => {
            const div = document.createElement('div');
            div.setAttribute('data-slr2type', type);
            div.className = 'slr2-catalog-menu-content';
            div.innerHTML = result;
            return { div, type };
          });
        
        promiseArray.push(promise);
      });

    try {
      //загружаем и добавляем на страницу html, css
      //обёртка, чтобы не было видно html до загрузки стилей
      const div = document.createElement('div');
      div.className = 'slr2-catalog-menu-component-container';
      div.style.position = 'absolute';
      div.style.top = '0';
      div.style.left = '0';
      div.style.width = '0';
      div.style.height = '0';
      div.style.overflow = 'hidden';
      div.style.opacity = '0';
      div.style.zIndex = '-1';

      const elem = document.createElement('div');
      elem.id = 'slr2CatalogMenuElem';

      const wrapper = document.createElement('div');
      wrapper.className = 'slr2-catalog-menu__wrapper';

      elem.append(wrapper);
      div.append(elem);
      document.querySelector('body').append(div);
      
      const results = await Promise.all(promiseArray);
      
      results.forEach(({ div, type }) => {
        wrapper.append(div);
      });

      //добавляем экземпляр класса в глобальное пространство
      window.seller2 = window.seller2 || {};
      window.seller2[componentObj.component] = new slr2CatalogMenuComponent(
        document.getElementById('slr2CatalogMenuElem')
      );

      window.seller2[componentObj.component].styleContainer = div;

      //вызываем событие при загрузке компонента,
      //теперь на кнопку можно нажать
      const event = new Event(componentObj.event);
      document.documentElement.dispatchEvent(event);
    } catch (error) {
      console.error('Error loading catalog menu components:', error);
    }
  }
})();