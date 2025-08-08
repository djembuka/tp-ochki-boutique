export const ControlHidden = {
  data() {
    return {
      controlId: this.id || this.control.id || null,
      controlName: this.name || this.control.name || null,
    };
  },
  props: ['control', 'id', 'name'],
  // language=Vue
  template: `
		<input
      type="hidden"
      :id="controlId"
      :name="controlName"
      v-model="value"
      :disabled="disabled"
      ref="input"
    />
	`,
  emits: ['input'],
  computed: {
    value: {
      get() {
        return this.control.value;
      },
      set(value) {
        this.$emit('input', { value });
      },
    },
  },
};
