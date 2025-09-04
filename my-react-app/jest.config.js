export default {
  testEnvironment: "jsdom",
  transform: {
    "^.+\\.(js|jsx)$": [
      "babel-jest",
      { babelrc: false, configFile: "./babel.config.js" },
    ],
  },
  moduleNameMapper: {
    "\\.(css|less|sass|scss)$": "identity-obj-proxy",
  },
  transformIgnorePatterns: [
    "node_modules/(?!(react-dom|@testing-library/react)/)",
  ],
};
