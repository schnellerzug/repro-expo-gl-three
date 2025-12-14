module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    // No reanimated plugin here on purpose: keep the repro minimal.
  };
};
