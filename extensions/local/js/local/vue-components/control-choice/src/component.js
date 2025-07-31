import { ControlSubcontrol } from 'local.vue-components.control-subcontrol';
import { ControlMulti } from 'local.vue-components.control-multi';
import { ControlMultiSub } from 'local.vue-components.control-multi-sub';
import { ControlComponent } from 'local.vue-components.control-component';

export const ControlChoice = {
  data() {},
  props: ['control'],
  components: {
    ControlSubcontrol,
    ControlMulti,
    ControlMultiSub,
    ControlComponent,
  },
  // language=Vue
  template: `
		<ControlSubcontrol v-if="control.sub && !control.multi" :control="control" @input="input" @focus="focus" @blur="blur" @enter="enter" @hints="hints" />
    <ControlMulti v-else-if="!control.sub && control.multi" :parent="control" @create="create" @add="add" @remove="remove" @input="input" @focus="focus" @blur="blur" @enter="enter" @hints="hints" />
    <ControlMultiSub v-else-if="control.sub && control.multi" :parent="control" @create="create" @add="add" @remove="remove" @input="input" @focus="focus" @blur="blur" @enter="enter" @hints="hints" />
    <ControlComponent v-else :control="control" @input="input" @focus="focus" @blur="blur" @enter="enter" @hints="hints" />
	`,
  emits: [
    'create',
    'add',
    'remove',
    'input',
    'focus',
    'blur',
    'enter',
    'hints',
  ],
  methods: {
    create(args) {
      this.$emit('create', args);
    },
    add(args) {
      this.$emit('add', args);
    },
    remove(args) {
      this.$emit('remove', args);
    },
    input(args) {
      this.$emit('input', args);
    },
    focus(args) {
      this.$emit('focus', args);
    },
    blur(args) {
      this.$emit('blur', args);
    },
    enter(args) {
      this.$emit('enter', args);
    },
    hints(args) {
      this.$emit('hints', args);
    },
  },
};
