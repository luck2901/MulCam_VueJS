const plugins = {
  install: (app, options) => {
    console.log(app);
    app.config.globalProperties.$upper = (value) => {
      return value.toUpperCase();
    };

    app.config.globalProperties.$translate = (key) => {
      const data = key.split(".").reduce((option, index) => {
        if (option) return option[index];
      }, options.greet);

      return data;
    };

    // provide
    app.provide("options", options);

    // directive
    app.directive("addColor", (el, binding) => {
      if (options.color && options.color === "orange") {
        el.style.color = binding.value;
      } else {
        el.style.background = binding.value;
      }
    });
  },
};
export default plugins;
