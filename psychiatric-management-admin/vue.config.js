module.exports = {
  lintOnSave: false,
  css: {
    loaderOptions: {
      // 向 CSS 相关的 loader 传递选项
      less: {
        javascriptEnabled: true
      }
    }
  },
  proxy: {
    // 配置跨域
    "/api": {
      target: "http://10.10.10.76:8668",
      ws: true,
      changOrigin: true,
      pathRewrite: {
        "^/api": "/"
      }
    }
  }
};
