const { getLoader, loaderNameMatches } = require("react-app-rewired");
const autoprefixer = require("autoprefixer");

const lessExtension = /\.less$/;
const moduleLessExtension = /\.module\.less$/;

const postcssOptions = {
  ident: "postcss",
  plugins: () => [
    require("postcss-flexbugs-fixes"),
    autoprefixer({
      browsers: [
        ">1%",
        "last 4 versions",
        "Firefox ESR",
        "not ie < 9" // React doesn't support IE8 anyway
      ],
      flexbox: "no-2009"
    })
  ]
};
const lessOptions = {
  javascriptEnabled: true
};

const lessRules = {
  test: lessExtension,
  exclude: moduleLessExtension,
  use: [
    "style-loader",
    { loader: "css-loader", options: { importLoaders: 1 } },
    { loader: "postcss-loader", options: postcssOptions },
    { loader: "less-loader", options: lessOptions }
  ]
};

const moduleLessRules = {
  test: moduleLessExtension,
  use: [
    "style-loader",
    {
      loader: "css-loader",
      options: {
        importLoaders: 1,
        modules: true,
        camelCase: true,
        localIdentName: "[hash:base64:5][name]__[local]"
      }
    },
    { loader: "postcss-loader", options: postcssOptions },
    { loader: "less-loader", options: lessOptions }
  ]
};

module.exports = function rewireLess(config, env) {
  const fileLoader = getLoader(config.module.rules, rule =>
    loaderNameMatches(rule, "file-loader")
  );
  fileLoader.exclude.push(lessExtension, moduleLessExtension);

  const oneOfRule = config.module.rules.find(rule => rule.oneOf !== undefined);

  if (oneOfRule) {
    oneOfRule.oneOf.unshift(moduleLessRules);
    oneOfRule.oneOf.unshift(lessRules);
  } else {
    config.module.rules.push(lessRules);
    config.module.rules.push(moduleLessRules);
  }

  return config;
};
