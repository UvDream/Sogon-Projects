module.exports = {
  devServer: {
    port: "8080",
    proxy: {
      // 配置跨域
      "/api": {
        target: "http://10.10.10.23:8089",
        ws: true,
        changOrigin: true,
        pathRewrite: {
          "^/api": "/"
        }
      }
    }
  }
};
