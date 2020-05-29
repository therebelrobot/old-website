// import { Config } from "poi";

// const config: Config = {
module.exports = {
  entry: "src/index.tsx",
  plugins: [
    {
      resolve: "@poi/plugin-typescript",
      options: {},
    },
  ],
  devServer: {
    port: 4449,
    open: true,
  },
  configureWebpack: {
    resolve: {
      alias: {
        "react-dom": "@hot-loader/react-dom",
      },
    },
  },
  output: {
    dir: "dist",
  },
};

// export default config;
