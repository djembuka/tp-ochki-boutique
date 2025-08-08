/* eslint-disable */
this.BX = this.BX || {};
(function (exports,local_vueComponents_buttonComponent) {
  'use strict';

  var IconClose = {
    template: "\n        <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"14\" height=\"14\" viewBox=\"0 0 14 14\" fill=\"none\">\n            <path d=\"M8.04995 6.98787L13.7795 1.25837C13.855 1.19193 13.9161 1.11073 13.959 1.01978C14.0019 0.928829 14.0258 0.830049 14.0291 0.729527C14.0324 0.629004 14.0151 0.528868 13.9783 0.435286C13.9414 0.341705 13.8858 0.25666 13.8148 0.185392C13.7438 0.114124 13.659 0.0581411 13.5656 0.0208929C13.4722 -0.0163553 13.3721 -0.0340802 13.2716 -0.0311898C13.1711 -0.0282994 13.0722 -0.00485496 12.981 0.0376992C12.8899 0.0802535 12.8085 0.141016 12.7417 0.216244L7.01132 5.95012L1.28183 0.216244C1.14363 0.0780497 0.956199 0.000412874 0.760763 0.000412874C0.565326 0.000412874 0.377895 0.0780497 0.2397 0.216244C0.101506 0.354438 0.0238691 0.54187 0.0238691 0.737307C0.0238691 0.932743 0.101506 1.12017 0.2397 1.25837L5.9692 6.98787L0.216075 12.7419C0.0778809 12.8801 0.000244141 13.0675 0.000244141 13.2629C0.000244141 13.4584 0.0778809 13.6458 0.216075 13.784C0.35427 13.9222 0.541701 13.9998 0.737138 13.9998C0.932574 13.9998 1.12001 13.9222 1.2582 13.784L7.01132 8.03087L12.7408 13.7612C12.879 13.8994 13.0665 13.9771 13.2619 13.9771C13.4573 13.9771 13.6448 13.8994 13.783 13.7612C13.9211 13.623 13.9988 13.4356 13.9988 13.2402C13.9988 13.0447 13.9211 12.8573 13.783 12.7191L8.04995 6.98787Z\" fill=\"#5F7696\"/>\n        </svg>\n    "
  };

  var _ModalYesNo;
  var ModalYesNo = (_ModalYesNo = {
    props: {
      'heading': {
        type: String,
        "default": 'Подтверждение'
      },
      'text': {
        type: String,
        "default": 'Вы действительно хотите удалить номер телефона?'
      },
      'yes': {
        type: String,
        "default": 'Да'
      },
      'no': {
        type: String,
        "default": 'Нет'
      },
      'buttons': {
        type: Object,
        "default": function _default() {
          return {
            yes: {
              props: ['secondary', 'large']
            },
            no: {
              props: ['gray-color', 'large']
            }
          };
        }
      },
      stateWatcher: {
        type: Boolean,
        "default": true
      }
    },
    emits: ['clickYes', 'clickNo'],
    data: function data() {
      return {
        isOpen: false,
        isAnimate: false
      };
    },
    components: {
      IconClose: IconClose,
      ButtonComponent: local_vueComponents_buttonComponent.ButtonComponent
    },
    // language=Vue
    template: "\n\t\t<div :class=\"{\n      'twpx-modal-yes-no': true,\n      'twpx-modal-yes-no--open': isOpen,\n      'twpx-modal-yes-no--animate': isAnimate\n    }\" @click=\"close\">\n\n      <div class=\"twpx-modal-yes-no-body\" @click.stop>\n        <div class=\"twpx-modal-yes-no-close\">\n          <IconClose @click.prevent=\"close\" />\n        </div>\n        <div class=\"twpx-modal-yes-no-heading\">{{ heading }}</div>\n        <div class=\"twpx-modal-yes-no-text\" v-html=\"text\"></div>\n        <div class=\"twpx-modal-yes-no-buttons\">\n          <ButtonComponent :text=\"no\" :props=\"buttons.no.props\" @clickButton=\"$emit('clickNo')\" />\n          <ButtonComponent :text=\"yes\" :props=\"buttons.yes.props\" @clickButton=\"$emit('clickYes')\" />\n        </div>\n      </div>\n    </div>\n\t"
  }, babelHelpers.defineProperty(_ModalYesNo, "emits", ['input', 'focus', 'blur', 'enter']), babelHelpers.defineProperty(_ModalYesNo, "watch", {
    stateWatcher: function stateWatcher() {
      if (this.isOpen) {
        this.close();
      } else {
        this.open();
      }
    }
  }), babelHelpers.defineProperty(_ModalYesNo, "methods", {
    open: function open() {
      var _this = this;
      this.isOpen = true;
      setTimeout(function () {
        _this.isAnimate = true;
      }, 0);
    },
    close: function close() {
      var _this2 = this;
      this.isAnimate = false;
      setTimeout(function () {
        _this2.isOpen = false;
      }, 300);
    }
  }), _ModalYesNo);

  exports.ModalYesNo = ModalYesNo;

}((this.BX.Modals = this.BX.Modals || {}),BX.AAS));
//# sourceMappingURL=component.bundle.js.map
