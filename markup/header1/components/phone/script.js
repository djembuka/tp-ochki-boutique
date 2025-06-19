(() => {
  const componentObj = {
    name: 'phone',
    event: 'slr2PhoneLoaded',
    component: 'slr2PhoneComponent',
    method: 'toggle',
  };

  fetchComponent();

  class TwpxControlTel {
    constructor(input) {
      this.input = input;
      this.control = this.input.closest('.slr2-phone-form__control');
      this.form = this.input.closest('.slr2-phone-form');
      this.container = this.input.closest('.slr2-phone-form-container');
      this.label = this.control.querySelector('.slr2-phone-form__label');
      this.clear = this.control.querySelector('.slr2-phone-form__clear');
      this.button = this.form.querySelector('.slr2-phone-form__button');

      this.messageContainer = this.container.querySelector('.slr2-phone-form__message-container');
      this.message = this.messageContainer.querySelector('.slr2-phone-form__message');
      this.messageButton = this.messageContainer.querySelector('.slr2-phone-form__message-button');

      this.successText = 'Спасибо! Ваш запрос успешно отправлен. Наш специалист свяжется с вами в ближайшее время.';
      this.errorText = 'Что-то пошло не так. Пожалуйста, попробуйте отправить форму ещё раз!';

      this.successIcon = `<svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25" fill="none">
        <path d="M8.93457 15.7376C9.73658 17.0333 11.1448 17.8927 12.748 17.8927C14.3512 17.8927 15.7593 17.0333 16.5613 15.7376M10.2255 9.09277H7.93555M23.748 12.5303C23.748 18.6054 18.8232 23.5303 12.748 23.5303C6.67291 23.5303 1.74805 18.6054 1.74805 12.5303C1.74805 6.45514 6.67291 1.53027 12.748 1.53027C18.8232 1.53027 23.748 6.45514 23.748 12.5303ZM16.048 9.09277H16.1455V9.18086H16.048V9.09277Z" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>`;
      this.errorIcon = `<svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25" fill="none">
        <path d="M12.748 12.6477V7.14771M12.748 16.7244V16.7727M23.748 12.6477C23.748 18.7228 18.8232 23.6477 12.748 23.6477C6.67291 23.6477 1.74805 18.7228 1.74805 12.6477C1.74805 6.57257 6.67291 1.64771 12.748 1.64771C18.8232 1.64771 23.748 6.57257 23.748 12.6477Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>`;

      this.init();
    }

    init() {  
      this.input.addEventListener('keydown', (e) => {
        this.keydown(e)
      });
      
      this.input.addEventListener('keyup', (e) => {
        this.keyup(e)
      });

      this.input.addEventListener('focus', (e) => {
        this.focus(e)
      });

      this.input.addEventListener('blur', (e) => {
        this.blur(e)
      });

      this.clear.addEventListener('click', (e) => {
        e.preventDefault();
        this.clearInput();
      });

      this.button.classList.add('slr2-phone-form__button--disabled');

      this.button.addEventListener('click', (e) => {
        e.preventDefault();
        this.submit();
      });
      
      this.form.addEventListener('submit', (e) => {
        e.preventDefault();
        this.submit();
      });

      this.messageButton.addEventListener('click', (e) => {
        e.preventDefault();
        this.hideMessage();
      })
    }

    submit() {
      if (!this.validate()) {
        this.input.classList.add('slr2-phone-form__control--invalid');
        return;
      } else {
        this.input.classList.remove('slr2-phone-form__control--invalid');
      }
      
      const url = this.form.getAttribute('action');
      const method = this.form.getAttribute('method');

      this.button.classList.add('slr2-phone-form__button--load-circle');

      fetch(url, {
        method,
        body: new FormData(this.form)
      }).then((res) => {
        if (res.ok) {
          return res.json();
        }
      }).then((result) => {
        this.button.classList.remove('slr2-phone-form__button--load-circle');
        if (result && result.SUCCESS && result.SUCCESS === 'Y') {
          this.showMessage('success');
        } else {
          this.showMessage('error');
        }
        setTimeout(() => {
          this.hideMessage();
        }, 3000);
      }).catch(error => {
        console.log(error)
      });
    }

    showMessage(type) {
      this.message.className = `slr2-phone-form__message slr2-phone-form__message--${type}`;
      this.message.innerHTML = `
          ${this[type + 'Icon']}
          <div class="slr2-phone-form__message-text">${this[type + 'Text']}</div>
      `;

      this.container.classList.add('slr2-phone-form-container--message');
    }

    hideMessage() {
      this.container.classList.remove('slr2-phone-form-container--message');
    }

    clearInput() {
      this.input.value = '';
      this.input.focus();
      this.control.classList.remove('slr2-phone-form__control--clearable');
    }
  
    keydown(e) {
      this.input.classList.remove('slr2-phone-form__control--invalid');
      this.inputphone(e);
    }

    keyup() {
      // show clear
      if (this.input.value.length > 3) {
        this.control.classList.add('slr2-phone-form__control--clearable');
      } else {
        this.control.classList.remove('slr2-phone-form__control--clearable');
      }

      // enable the button
      if (this.validate()) {
        this.button.classList.remove('slr2-phone-form__button--disabled');
      } else {
        this.button.classList.add('slr2-phone-form__button--disabled');
      }
    }

    focus() {
      if (this.input.value === '') {
        this.input.value = '+7 ';
      }
      this.control.classList.add('slr2-phone-form__control--active')
    }

    blur() {
      if (this.input.value === '+7 ') {
        this.input.value = '';
      }
      if (this.input.value === '') {
        this.control.classList.remove('slr2-phone-form__control--active')
      }
    }
  
    inputphone(e) {
      let key = e.key;
      let not = key.replace(/([0-9])/, 1);
  
      if (not == 1) {
        if (this.input.value.length < 3 || this.input.value === '') {
          this.input.value = '+7 ';
        }
        if (this.input.value.length === 6) {
          this.input.value = this.input.value + ' ';
        }
        if (this.input.value.length === 10) {
          this.input.value = this.input.value + ' ';
        }
        if (this.input.value.length === 13) {
          this.input.value = this.input.value + ' ';
        }
        if (this.input.value.length >= 16) {
          this.input.value = this.input.value.substring(0, 15);
        }
      } else if ('Backspace' !== not && 'Tab' !== not && 'Enter' !== not) {
        e.preventDefault();
      }
    }
  
    validate() {
      const regexp = /^\+7\s?\d{3}\s?\d{3}\s?\d{2}\s?\d{2}$/;

      if (this.input.value.trim() && regexp.test(this.input.value)) {
        return true;
      } else {
        return false;
      }
    }
  }

  class Slr2PhoneComponent {
    constructor(elem) {
      this.elem = elem;
      this.wrapper = this.elem.querySelector('.slr2-phone-wrapper');
      this.clear = this.elem.querySelector('.slr2-phone-clear');
      this.init();
    }

    init() {
      this.wrapper.addEventListener('click', (e) => {
        e.preventDefault();
        if (e.target.classList.contains('slr2-phone-wrapper')) {
          this.hide();
        }
      });

      this.clear.addEventListener('click', (e) => {
        e.preventDefault();
        this.hide();
      });
    }

    documentClick(event) {}

    toggle() {
      !this.elem.classList.contains('slr2-phone--show')
        ? this.show()
        : this.hide();
    }

    show() {
      this.styleContainer.removeAttribute('style');

      //let the site know, that the new component is going to be shown
      const event = new CustomEvent('slr2NewComponentIsShown', {
        detail: {
          name: 'phone',
        },
      });
      document.documentElement.dispatchEvent(event);

      this.elem.classList.add('slr2-phone--show');
    }

    hide() {
      this.elem.classList.remove('slr2-phone--show');
    }
  }

  async function fetchComponent() {
    const url = document
      .querySelector(`[data-slr2toggle="${componentObj.name}"]`)
      .getAttribute('data-slr2url');
    const response = await fetch(url);
    const result = await response.text();

    //загружаем и добавляем на страницу html, css
    //обёртка, чтобы не было видно html до загрузки стилей
    const div = document.createElement('div');
    div.className = 'slr2-phone-component-container';
    div.style.position = 'absolute';
    div.style.top = '0';
    div.style.left = '0';
    div.style.width = '0';
    div.style.height = '0';
    div.style.overflow = 'hidden';
    div.style.opacity = '0';
    div.style.zIndex = '-1';

    const elem = document.createElement('div');
    elem.id = 'slr2PhoneElem';
    elem.innerHTML = result;
    
    elem.querySelectorAll('.twpx-control-tel').forEach(c => {
      new TwpxControlTel(c);
    });

    div.append(elem);
    document.querySelector('body').append(div);

    //добавляем экземпляр класса в глобальное пространство
    window.seller2 = window.seller2 || {};
    window.seller2[componentObj.component] = new Slr2PhoneComponent(
      document.getElementById('slr2PhoneElem')
    );

    window.seller2[componentObj.component].styleContainer = div;

    //вызываем событие при загрузке компонента,
    //теперь на кнопку можно нажать
    const event = new Event(componentObj.event);
    document.documentElement.dispatchEvent(event);
  }
})();
