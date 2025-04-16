function debounce(callback, delay, immediate = false) {
  let timeoutId = null;

  return function debouncedFunction(...args) {
    const context = this;

    const callLater = () => {
      timeoutId = null;
      if (!immediate) {
        callback.apply(context, args);
      }
    };

    const shouldCallNow = immediate && !timeoutId;

    clearTimeout(timeoutId);
    timeoutId = setTimeout(callLater, delay);

    if (shouldCallNow) {
      callback.apply(context, args);
    }
  };
}

module.exports = debounce;
