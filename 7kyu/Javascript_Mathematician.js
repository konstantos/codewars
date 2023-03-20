function calculate(...a) {
    return function (...b) {
      return [...a, ...b].reduce((sum, n) => sum + n)
    };
  }