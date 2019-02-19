$.fn.buttonLoading = function(state) {
  if (state === 'loading') {
    this.data('original-text', this.html());
    this.html(this.data('loading-text') || 'loading...');
    this.prop('disabled', true);
  } else if (state === 'reset') {
    this.html(this.data('original-text'));
    this.prop('disabled', false);
  }
  return this;
};


