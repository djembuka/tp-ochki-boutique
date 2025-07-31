/* eslint-disable */
this.BX = this.BX || {};
(function (exports,local_vueComponents_controlSubcontrol,local_vueComponents_controlMulti,local_vueComponents_controlMultiSub,local_vueComponents_controlComponent) {
  'use strict';

  var ControlChoice = {
    data: function data() {},
    props: ['control'],
    components: {
      ControlSubcontrol: local_vueComponents_controlSubcontrol.ControlSubcontrol,
      ControlMulti: local_vueComponents_controlMulti.ControlMulti,
      ControlMultiSub: local_vueComponents_controlMultiSub.ControlMultiSub,
      ControlComponent: local_vueComponents_controlComponent.ControlComponent
    },
    // language=Vue
    template: "\n\t\t<ControlSubcontrol v-if=\"control.sub && !control.multi\" :control=\"control\" @input=\"input\" @focus=\"focus\" @blur=\"blur\" @enter=\"enter\" @hints=\"hints\" />\n    <ControlMulti v-else-if=\"!control.sub && control.multi\" :parent=\"control\" @create=\"create\" @add=\"add\" @remove=\"remove\" @input=\"input\" @focus=\"focus\" @blur=\"blur\" @enter=\"enter\" @hints=\"hints\" />\n    <ControlMultiSub v-else-if=\"control.sub && control.multi\" :parent=\"control\" @create=\"create\" @add=\"add\" @remove=\"remove\" @input=\"input\" @focus=\"focus\" @blur=\"blur\" @enter=\"enter\" @hints=\"hints\" />\n    <ControlComponent v-else :control=\"control\" @input=\"input\" @focus=\"focus\" @blur=\"blur\" @enter=\"enter\" @hints=\"hints\" />\n\t",
    emits: ['create', 'add', 'remove', 'input', 'focus', 'blur', 'enter', 'hints'],
    methods: {
      create: function create(args) {
        this.$emit('create', args);
      },
      add: function add(args) {
        this.$emit('add', args);
      },
      remove: function remove(args) {
        this.$emit('remove', args);
      },
      input: function input(args) {
        this.$emit('input', args);
      },
      focus: function focus(args) {
        this.$emit('focus', args);
      },
      blur: function blur(args) {
        this.$emit('blur', args);
      },
      enter: function enter(args) {
        this.$emit('enter', args);
      },
      hints: function hints(args) {
        this.$emit('hints', args);
      }
    }
  };

  exports.ControlChoice = ControlChoice;

}((this.BX.Controls = this.BX.Controls || {}),BX,BX,BX,BX.Controls));
//# sourceMappingURL=component.bundle.js.map
