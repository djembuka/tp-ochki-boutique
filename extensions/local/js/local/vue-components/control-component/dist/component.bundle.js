/* eslint-disable */
this.BX = this.BX || {};
(function (exports,local_vueComponents_controlHidden,local_vueComponents_controlText,local_vueComponents_controlTextarea,local_vueComponents_controlPassword,local_vueComponents_controlTel,local_vueComponents_controlEmail,local_vueComponents_controlHint,local_vueComponents_controlSelectDropdown,local_vueComponents_controlSelectRadio,local_vueComponents_controlDatepicker,local_vueComponents_controlDateSingle,local_vueComponents_controlDateRange,local_vueComponents_controlTimeSingle,local_vueComponents_controlFile,local_vueComponents_controlFileUpload,local_vueComponents_controlCheckbox,local_vueComponents_controlCheckboxCheckbox,local_vueComponents_controlCheckboxSwitch,local_vueComponents_controlCheckboxBlock) {
  'use strict';

  var TabIcon = {
    template: "\n    <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"10\" viewBox=\"0 0 16 10\" fill=\"none\">\n      <path d=\"M16 6.44555L9.259 3.06855V5.80155H1.345V0.824553C1.33829 0.650682 1.26451 0.486167 1.13912 0.365524C1.01374 0.244882 0.8465 0.17749 0.6725 0.17749C0.4985 0.17749 0.331263 0.244882 0.205878 0.365524C0.0804928 0.486167 0.00670596 0.650682 0 0.824553V7.14755H9.259V9.82255L16 6.44555Z\" fill=\"#282828\"/>\n    </svg>\n  "
  };

  function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
  function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { babelHelpers.defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
  var ControlComponent = {
    data: function data() {
      return {
        id: this.id || this.control.id,
        name: this.name || this.control.name,
        componentType: "".concat(this.control.property).concat(this.control.type ? '-' + this.control.type : '')
      };
    },
    components: {
      TabIcon: TabIcon,
      ControlHidden: local_vueComponents_controlHidden.ControlHidden,
      ControlText: local_vueComponents_controlText.ControlText,
      ControlTextarea: local_vueComponents_controlTextarea.ControlTextarea,
      ControlPassword: local_vueComponents_controlPassword.ControlPassword,
      ControlTel: local_vueComponents_controlTel.ControlTel,
      ControlEmail: local_vueComponents_controlEmail.ControlEmail,
      ControlHint: local_vueComponents_controlHint.ControlHint,
      ControlSelectDropdown: local_vueComponents_controlSelectDropdown.ControlSelectDropdown,
      ControlSelectRadio: local_vueComponents_controlSelectRadio.ControlSelectRadio,
      ControlDatepicker: local_vueComponents_controlDatepicker.ControlDatepicker,
      ControlDateSingle: local_vueComponents_controlDateSingle.ControlDateSingle,
      ControlDateRange: local_vueComponents_controlDateRange.ControlDateRange,
      ControlTimeSingle: local_vueComponents_controlTimeSingle.ControlTimeSingle,
      ControlFile: local_vueComponents_controlFile.ControlFile,
      ControlFileUpload: local_vueComponents_controlFileUpload.ControlFileUpload,
      ControlCheckbox: local_vueComponents_controlCheckbox.ControlCheckbox,
      ControlCheckboxCheckbox: local_vueComponents_controlCheckboxCheckbox.ControlCheckboxCheckbox,
      ControlCheckboxSwitch: local_vueComponents_controlCheckboxSwitch.ControlCheckboxSwitch,
      ControlCheckboxBlock: local_vueComponents_controlCheckboxBlock.ControlCheckboxBlock
    },
    props: ['control', 'name', 'id'],
    // language=Vue
    template: "\n    <component v-if=\"control.property==='hidden'\"\n      :is=\"componentName()\"\n      :control=\"control\"\n      :id=\"id\"\n      :name=\"name\"\n      @input=\"inputAddControl\"\n    ></component>\n\n    <div class=\"twpx-control-component\" v-else>\n      <div class=\"twpx-control-tab\" v-if=\"control.tab\" :style=\"tabWidth(control.tab)\">\n        <TabIcon />\n      </div>\n      <component\n        :is=\"componentName()\"\n        :control=\"control\"\n        :id=\"id\"\n        :name=\"name\"\n        @input=\"inputAddControl\"\n        @focus=\"focusAddControl\"\n        @blur=\"blurAddControl\"\n        @enter=\"enterAddControl\"\n        @hints=\"hintsAddControl\"\n      ></component>\n    </div>\n\t",
    emits: ['input', 'focus', 'blur', 'hints'],
    methods: {
      tabWidth: function tabWidth(tab) {
        return "width: ".concat(48 * Number(tab) - 16, "px");
      },
      componentName: function componentName() {
        return "control-".concat(this.componentType);
      },
      inputAddControl: function inputAddControl(args) {
        this.$emit('input', _objectSpread(_objectSpread({}, args), {}, {
          control: this.control
        }));
      },
      focusAddControl: function focusAddControl() {
        this.$emit('focus', {
          control: this.control
        });
      },
      blurAddControl: function blurAddControl() {
        this.$emit('blur', {
          control: this.control
        });
      },
      enterAddControl: function enterAddControl() {
        this.$emit('enter', {
          control: this.control
        });
      },
      hintsAddControl: function hintsAddControl(args) {
        this.$emit('hints', _objectSpread(_objectSpread({}, args), {}, {
          control: this.control
        }));
      }
    }
  };

  exports.ControlComponent = ControlComponent;

}((this.BX.Controls = this.BX.Controls || {}),BX,BX.Controls,BX.Controls,BX,BX.Controls,BX.Controls,BX,BX,BX,BX,BX,BX,BX,BX,BX,BX,BX.Controls,BX,BX));
//# sourceMappingURL=component.bundle.js.map
