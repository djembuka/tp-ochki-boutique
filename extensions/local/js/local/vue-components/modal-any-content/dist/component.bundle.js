/* eslint-disable */
this.BX = this.BX || {};
(function (exports) {
  'use strict';

  var IconClose = {
    template: "\n        <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"18\" height=\"18\" viewBox=\"0 0 18 18\" fill=\"none\">\n            <path d=\"M1.00025 1.00001L17 17M16.9997 1L1 17\" stroke=\"black\" stroke-width=\"2\" stroke-linecap=\"round\"/>\n        </svg>\n    "
  };

  var ModalAnyContent = {
    props: {
      stateWatcher: {
        type: Boolean,
        "default": true
      }
    },
    data: function data() {
      return {
        isOpen: false,
        isAnimate: false
      };
    },
    components: {
      IconClose: IconClose
    },
    // language=Vue
    template: "\n\t\t<div :class=\"{\n      'twpx-modal-any-content': true,\n      'twpx-modal-any-content--open': isOpen,\n      'twpx-modal-any-content--animate': isAnimate\n    }\" @click=\"close\">\n\n      <div class=\"twpx-modal-any-content-body\" @click.stop>\n        <div class=\"twpx-modal-any-content-close\">\n          <IconClose @click.prevent=\"close\" />\n        </div>\n\n        <div class=\"twpx-modal-any-content-container\">\n          <slot></slot>\n        </div>\n      </div>\n    </div>\n\t",
    watch: {
      stateWatcher: function stateWatcher() {
        if (this.isOpen) {
          this.close();
        } else {
          this.open();
        }
      }
    },
    methods: {
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
    }
  };

  exports.ModalAnyContent = ModalAnyContent;

}((this.BX.Modals = this.BX.Modals || {})));
//# sourceMappingURL=component.bundle.js.map
