const { defineConfig } = require('@vue/cli-service');

module.exports = defineConfig({
  publicPath: process.env.NODE_ENV === 'production' ? '/connection-cables/' : '/',
  transpileDependencies: true,
  chainWebpack: config => {
    config.module.rules.delete('eslint');
  }
})
