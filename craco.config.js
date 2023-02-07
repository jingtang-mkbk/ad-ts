const {resolve} = require("path");
const CracoLessPlugin = require("craco-less");


module.exports = {
  plugins: [
    /* less */
    {
      plugin: CracoLessPlugin,
    },
  ],
  webpack: {
    /* 别名 */
    alias: {
      "@": resolve(__dirname, "src"),
    },
  },
  // devServer: {
  //   proxy: {
  //     "/": {
  //       target: "http://ihrm.itheima.net/prod-api/",
  //       changeOrigin: true
  //     }
  //   }
  // }
};