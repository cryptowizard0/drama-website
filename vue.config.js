module.exports = {
  css: {
    loaderOptions: {
      postcss: {
        plugins: [
          require("postcss-pxtorem")({
            rootValue: 32,
            propList: ["*"],
          }),
        ],
      },
    },
  },
  configureWebpack: (config) => {
    if (process.env.NODE_ENV === "production") {
    } else {
    }
  },
};
