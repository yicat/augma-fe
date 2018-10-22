const path = require("path");
const rewireDevLess = require("./config/rewire-less.dev");

module.exports = {
  webpack: function(config, env) {
    config = rewireDevLess(config, env);

    return config;
  }
};
