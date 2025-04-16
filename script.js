function debounce(callback, delay, immediate = false) {
  let timeoutId = null;
  let isCooldown = false;

  return function debouncedFunction(...args) {
    const context = this;

    const later = () => {
      timeoutId = null;
      if (!immediate) {
        callback.apply(context, args);
      }
      isCooldown = false; // allow future immediate calls after delay
    };

    const callNow = immediate && !isCooldown;

    clearTimeout(timeoutId);
    timeoutId = setTimeout(later, delay);

    if (callNow) {
      callback.apply(context, args);
      isCooldown = true;
    }
  };
}

module.exports = debounce;
