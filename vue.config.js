const { defineConfig } = require('@vue/cli-service');

module.exports = defineConfig({
  publicPath: process.env.NODE_ENV === 'production' ? '/task-interview/' : '/',
  transpileDependencies: true,
  chainWebpack: config => {
    config.module.rules.delete('eslint');
  }
})
