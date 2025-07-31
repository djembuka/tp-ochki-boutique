/* eslint-disable */
this.BX = this.BX || {};
(function (exports) {
  'use strict';

  var DeleteIcon = {
    template: "\n    <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"18\" viewBox=\"0 0 16 18\" fill=\"none\">\n      <path d=\"M0.799927 3.82353H14.7999M5.17493 1H10.4249M6.04993 13.2353V7.58824M9.54993 13.2353V7.58824M10.8624 17H4.73743C3.77093 17 2.98743 16.1572 2.98743 15.1176L2.5879 4.80389C2.56719 4.26918 2.9646 3.82353 3.46214 3.82353H12.1377C12.6353 3.82353 13.0327 4.26918 13.012 4.80389L12.6124 15.1176C12.6124 16.1572 11.8289 17 10.8624 17Z\" stroke=\"#FF0000\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/>\n    </svg>\n  "
  };

  var DeleteWhiteIcon = {
    template: "\n    <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"17\" height=\"18\" viewBox=\"0 0 17 18\" fill=\"none\">\n      <path d=\"M1.5 3.82353H15.5M5.875 1H11.125M6.75 13.2353V7.58824M10.25 13.2353V7.58824M11.5625 17H5.4375C4.471 17 3.6875 16.1572 3.6875 15.1176L3.28798 4.80389C3.26726 4.26918 3.66468 3.82353 4.16222 3.82353H12.8378C13.3353 3.82353 13.7327 4.26918 13.712 4.80389L13.3125 15.1176C13.3125 16.1572 12.529 17 11.5625 17Z\" stroke=\"white\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/>\n    </svg>\n  "
  };

  var EditIcon = {
    template: "\n    <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"17\" height=\"16\" viewBox=\"0 0 17 16\" fill=\"none\">\n      <path d=\"M12.5148 0.763672C13.0626 0.696373 13.7633 0.861252 14.67 1.62695L14.8546 1.78809C15.8601 2.70477 16.0846 3.41169 16.046 3.94336C16.0042 4.51799 15.6431 5.12918 14.9738 5.81055L14.9728 5.81152L6.78333 14.1631C6.50341 14.4244 6.15096 14.6076 5.76379 14.6904L2.57434 15.2158L2.52063 15.2266C2.39001 15.258 2.25237 15.2575 2.12219 15.2246C1.99228 15.1917 1.87574 15.1281 1.78235 15.043C1.6891 14.9579 1.6224 14.8539 1.58508 14.7422C1.54783 14.6306 1.5398 14.5127 1.56262 14.3984C1.5665 14.379 1.57006 14.3595 1.57239 14.3398L1.93665 11.2539C2.00656 10.8887 2.17408 10.5445 2.42493 10.2549L10.6066 1.91016C11.2714 1.23355 11.8952 0.83993 12.5148 0.763672Z\" stroke=\"#5F7696\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/>\n    </svg>\n  "
  };

  var ButtonComponent = {
    data: function data() {
      return {};
    },
    props: ['text', 'props', 'disabled'],
    emits: ['clickButton'],
    components: {
      DeleteIcon: DeleteIcon,
      DeleteWhiteIcon: DeleteWhiteIcon,
      EditIcon: EditIcon
    },
    // language=Vue
    template: "\n    <button v-if=\"props.find(e => e === 'icon')\" :class=\"propsClass\" @click.prevent=\"clickButton\" :title=\"text\">\n      <DeleteIcon v-if=\"props.find(e => e === 'delete')\" />\n      <EditIcon v-else-if=\"props.find(e => e === 'edit')\" />\n    </button>\n\n\t\t<button v-else class=\"vue-button\" :class=\"propsClass\" @click.prevent=\"clickButton\">\n      <DeleteWhiteIcon v-if=\"props.find(e => e === 'icon-delete')\" />\n      {{ text }}\n    </button>\n\t",
    computed: {
      propsClass: function propsClass() {
        var result = {};
        if (this.props) {
          this.props.forEach(function (p) {
            if (!p.startsWith('icon-')) {
              result["vue-button--".concat(p)] = true;
            }
          });
        }
        if (this.disabled) {
          result["vue-button--disabled"] = true;
        }
        return result;
      }
    },
    methods: {
      clickButton: function clickButton() {
        this.$emit('clickButton');
      }
    }
  };

  exports.ButtonComponent = ButtonComponent;

}((this.BX.AAS = this.BX.AAS || {})));
//# sourceMappingURL=component.bundle.js.map
