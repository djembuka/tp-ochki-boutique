class TwpxControlTel {
  constructor(input) {
    this.input = input;

    this.input.addEventListener('keydown', (e) => {
      this.keydown(e)
    })
  }

  keydown(e) {
    console.log('keydown')
    this.inputphone(e);
  }

  inputphone(e) {
    let key = e.key;
    let not = key.replace(/([0-9])/, 1);

    if (not == 1) {
      if (this.input.value.length < 4 || this.input.value === '') {
        this.input.value = '+7 (';
      }
      if (this.input.value.length === 7) {
        this.input.value = this.input.value + ') ';
      }
      if (this.input.value.length === 12) {
        this.input.value = this.input.value + '-';
      }
      if (this.input.value.length === 15) {
        this.input.value = this.input.value + '-';
      }
      if (this.input.value.length >= 18) {
        this.input.value = this.input.value.substring(0, 17);
      }
    } else if ('Backspace' !== not && 'Tab' !== not) {
      e.preventDefault();
    }
  }

  validate() {
    if (!this.control.required) {
      if (!this.input.value.trim()) {
        return true;
      } else if (this.input.value.length >= 11) {
        return true;
      }
      return false;
    } else if (this.control.required && this.input.value.trim()) {
      if (this.control.regexp) {
        const match = String(this.input.value.trim()).match(
          RegExp(this.control.regexp)
        );
        if (!match) {
          this.warning = this.control.regexp_description;
        } else {
          this.warning = '';
        }
        return match;
      } else if (this.input.value.length >= 11) {
        return true;
      } else {
        return false;
      }
    } else if (this.control.required && !this.input.value.trim()) {
      return false;
    }
    return true;
  }
}

document.querySelectorAll('.twpx-control-tel').forEach(c => {
  new TwpxControlTel(c);
})
