const { defineConfig } = require("@vue/cli-service");

module.exports = {
  filenameHashing: false,
  chainWebpack: (config) => {
    config.optimization.delete("splitChunks");
  },
  configureWebpack: {
    optimization: {
      splitChunks: {
        minSize: 300000,
        maxSize: 450000,
      },
    },
  },
};
