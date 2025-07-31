import { defineStore } from 'ui.vue3.pinia';

export const controlsStore = defineStore('controls', {
  state: () => ({
    controls: []
  }),
  actions: {
    changeControls(controls) {
      this.controls = controls;
    },
    changeTextControlValue({ control, value }) {
        control.value = value;
    },
    changeSelectRadioValue({ control, value }) {
        control.value = value;
    },
    changeSelectDropdownValue({ control, value }) {
        control.value = value;
    },
    changeDateValue({ control, value }) {
        control.value = value;
    },
    changeFileValue({ control, value }) {
        control.value = value;
        if (control.type === 'upload') {
        this.uploadFile(control, value);
        }
    },
    changeControlValue({ control, value, checked }) {
        switch (control.property) {
        case 'text':
        case 'textarea':
        case 'hint':
        case 'tel':
        case 'email':
            this.changeTextControlValue({ control, value });
            break;
        // case 'multiselect':
        //   commit('changeMultiselectValue', { control, value, checked });
        //   break;
        // case 'checkbox':
        //   commit('changeCheckboxValue', { control, checked });
        //   break;
        case 'select':
            this[
            `changeSelect${control.type
                .substring(0, 1)
                .toUpperCase()}${control.type.substring(1).toLowerCase()}Value`
            ]({ control, value });
            break;
        case 'file':
            this.changeFileValue({ control, value });
            break;
        case 'date':
            this.changeDateValue({ control, value });
            break;
        // case 'color':
        //   commit('changeColorValue', { control, value });
        //   break;
        }
    },
    async runHints(control, action) {
        try {
        // Создаем AbortController для возможности отмены запроса
        const controller = new AbortController();
        const timeoutId = setTimeout(() => controller.abort(), 20000); // 20 секунд таймаут

        const response = await fetch(action, {
            signal: controller.signal,
            headers: {
            'Content-Type': 'application/json',
            },
        });

        clearTimeout(timeoutId);

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const result = await response.json();

        if (result.status === 'success' && result.data) {
            this.setHints(control, result.data);
        } else if (result.errors) {
            this.error = result.errors[0]?.message
        } else {
            this.error = 'Invalid response format';
        }
        } catch (error) {
        this.error = error?.message
        }
    },
    setHints(control, value) {
        control.hints = value;
    },
  }
});