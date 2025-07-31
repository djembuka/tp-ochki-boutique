import './component.css';
import { DeleteIcon } from './icons/delete.js';
import { DeleteWhiteIcon } from './icons/delete-white.js';
import { EditIcon } from './icons/edit.js';

export const ButtonComponent = {
  data() {
    return {};
  },
  props: ['text', 'props', 'disabled'],
  emits: ['clickButton'],
  components: {
    DeleteIcon,
    DeleteWhiteIcon,
    EditIcon
  },
  // language=Vue
  template: `
    <button v-if="props.find(e => e === 'icon')" :class="propsClass" @click.prevent="clickButton" :title="text">
      <DeleteIcon v-if="props.find(e => e === 'delete')" />
      <EditIcon v-else-if="props.find(e => e === 'edit')" />
    </button>

		<button v-else class="vue-button" :class="propsClass" @click.prevent="clickButton">
      <DeleteWhiteIcon v-if="props.find(e => e === 'icon-delete')" />
      {{ text }}
    </button>
	`,
  computed: {
    propsClass() {
      const result = {};
      if (this.props) {
        this.props.forEach((p) => {
          if (!p.startsWith('icon-')) {
            result[`vue-button--${p}`] = true;
          }
        });
      }

      if (this.disabled) {
        result[`vue-button--disabled`] = true;
      }
      return result;
    },
  },
  methods: {
    clickButton() {
      this.$emit('clickButton');
    },
  },
};
