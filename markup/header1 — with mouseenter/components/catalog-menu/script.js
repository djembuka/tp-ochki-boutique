(() => {
  const componentObj = {
    name: 'menu',
    event: 'slr2CatalogMenuLoaded',
    component: 'slr2CatalogMenuComponent',
    method: 'toggle',
  };

  setTimeout(() => {
    fetchComponent();
  }, 2000);

  class slr2CatalogMenuComponent {
    constructor(elem) {
      this.elem = elem;
      this.name = 'catalog-menu';
      this.wrapper = this.elem.querySelector('.slr2-catalog-menu-wrapper');

      this.flag = {};
      document.querySelectorAll(`[data-slr2toggle="${this.name}"]`).forEach(item => {
        this.flag[item.getAttribute('data-slr2type')] = false;
      })

      this.elem.querySelectorAll('.slr2-catalog-menu-wrapper').forEach(w => {
        w.addEventListener('mouseenter', (e) => {
          console.log('mouseenter w', this.flag[w.getAttribute('data-slr2type')])
          this.flag[w.getAttribute('data-slr2type')] = true;
          this.toggle(e);
        });
        w.addEventListener('mouseleave', (e) => {
          console.log('mouseleave w', this.flag[w.getAttribute('data-slr2type')])
          this.flag[w.getAttribute('data-slr2type')] = false;
          this.toggle(e);
        });
      })
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

    toggle(e) {
      let menuItem, wrapper, type = e.target.getAttribute('data-slr2type');

      if (e.target.classList.contains('slr2-header1__menu-item')) {
        menuItem = e.target;
        wrapper = document.querySelector(`.slr2-catalog-menu-wrapper[data-slr2type="${type}"]`);
      } else if (e.target.classList.contains('slr2-catalog-menu-wrapper')) {
        wrapper = e.target;
        menuItem = document.querySelector(`.slr2-header1__menu-item[data-slr2type="${type}"]`);
      }

      this.wrapper = this.elem.querySelector('.slr2-slide-toggle--show');
      console.log('toggle wrapper', this.wrapper)
      
      if (!this.flag[type]) {
        this.hide(menuItem, wrapper);
      } else if (!this.wrapper || this.wrapper === wrapper) {
        this.show(menuItem, wrapper)
      } else {
        this.showWhenOpen(menuItem, wrapper)
      }

      // if (this.wrapper) {
      //   if (type && type !== this.wrapper.getAttribute('data-slr2type')) {
      //     this.showWhenOpen(menuItem, wrapper)
      //   } else {
      //     this.hide(menuItem, wrapper);
      //   }
      // } else {
      //   this.show(menuItem, wrapper)
      // }
    }

    show(menuItem, wrapper) {
      console.log('show')
      this.wrapper = wrapper || this.elem.querySelector(`[data-slr2type="${menuItem.getAttribute('data-slr2type')}"]`);
      this.styleContainer.removeAttribute('style');

      //let the site know, that the new component is going to be shown
      const event = new CustomEvent('slr2NewComponentIsShown', {
        detail: {
          name: 'catalog-menu',
        },
      });
      document.documentElement.dispatchEvent(event);

      const header = document.querySelector('header');

      this.wrapper.style.top =
        header.getBoundingClientRect().top + header.clientHeight + 'px';
      this.slideDown(this.wrapper);
      this.activeStyle(menuItem, 'add');
      this.menuOverflow('add');
    }

    hide(menuItem, wrapper) {
      console.log('hide')
      if (menuItem && wrapper) {
        this.menuOverflow('remove');
        setTimeout(() => {
          if (!this.flag[wrapper.getAttribute('data-slr2type')]) {
            this.slideUp(wrapper);
            this.activeStyle(menuItem, 'remove');
          }
        }, 100);
      } else {
        // click document
        this.menuOverflow('remove');
        this.elem.querySelectorAll('.slr2-catalog-menu-wrapper.slr2-slide-toggle--show').forEach(w => {
          this.slideUp(w);
        });
        document.querySelectorAll('.slr2-header1__menu-item--active').forEach(i => {
          this.activeStyle(i, 'remove');
        })
      }
      
    }

    showWhenOpen(menuItem, wrapper) {
      console.log('showWhenOpen', this.wrapper === wrapper)

      const height = this.wrapper.clientHeight + 'px';

      setTimeout(() => {
        this.wrapper.classList.remove('slr2-slide-toggle--show');
        this.wrapper.classList.remove('slr2-slide-toggle--animate');

        this.wrapper = wrapper;
        const header = document.querySelector('header');

        this.wrapper.style.top = header.getBoundingClientRect().top + header.clientHeight + 'px';

        this.slideDown(this.wrapper, height);
        this.activeStyle(menuItem, 'add');
        this.menuOverflow('add');
      }, 0);
    }

    activeStyle(menuItem, method) {
      if (menuItem && menuItem.classList.contains('slr2-header1__menu-item')) {
        menuItem.classList[method]('slr2-header1__menu-item--active', 'slr2--show');
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
      console.log('slideDown')
      if (!block.classList.contains('slr2-slide-toggle')) {
        console.log('slideDown add slr2-slide-toggle')
        block.classList.add('slr2-slide-toggle');
      }
      console.log('slideDown block.classList.contains', block.classList.contains('slr2-slide-toggle--show'), this.flag[block.getAttribute('data-slr2type')])
      //if (!block.classList.contains('slr2-slide-toggle--show')) {
        block.classList.add('slr2-slide-toggle--show');
        console.log('slideDown add slr2-slide-toggle--show')
        block.style.height = 'auto';
        console.log('slideDown height auto')

        var height = block.clientHeight + 'px';
        console.log('slideDown height px')

        block.style.height = h || '0px';
        console.log('slideDown block.style.height')

        setTimeout(() => {
          console.log('slideDown set timeout 100')
          if (this.flag[block.getAttribute('data-slr2type')]) {
            console.log('slideDown set timeout 100 if')
            block.style.height = height;
          }
        }, 100);

        setTimeout(() => {
          console.log('slideDown set timeout 300')
          if (this.flag[block.getAttribute('data-slr2type')]) {
            console.log('slideDown set timeout 300 if')
            block.classList.add('slr2-slide-toggle--animate');
          }
        }, 300);
      //}
    }

    slideUp(block) {
      console.log('slideUp')
      if (!block.classList.contains('slr2-slide-toggle')) {
        console.log('slideUp add slr2-slide-toggle')
        block.classList.add('slr2-slide-toggle');
      }

      //if (block.classList.contains('slr2-slide-toggle--show')) {
        console.log('slideUp contains slr2-slide-toggle--show')
        if (block.style.height === '0px') {
          console.log('slideUp remove --show --animate')
          block.classList.remove('slr2-slide-toggle--show');
          block.classList.remove('slr2-slide-toggle--animate');
        } else {
          console.log('slideUp height 0')
          block.style.height = '0px';
          block.classList.remove('slr2-slide-toggle--animate');

          block.addEventListener(
            'transitionend',
            () => {
              console.log('slideUp transitionend')
              if (!this.flag[block.getAttribute('data-slr2type')]) {
                console.log('slideUp transitionend if')
                block.classList.remove('slr2-slide-toggle--show');
              }
            },
            {
              once: true,
            }
          );
        }
      //}
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
            div.className = 'slr2-catalog-menu-wrapper';
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

      div.append(elem);
      document.querySelector('body').append(div);
      
      const results = await Promise.all(promiseArray);
      
      results.forEach(({ div, type }) => {
        document.getElementById('slr2CatalogMenuElem').append(div);
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
