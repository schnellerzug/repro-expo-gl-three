const { getDefaultConfig } = require('expo/metro-config');

// IMPORTANT: This repo has a top-level metro.config.js for the main app.
// When running this minimal repro, we want a clean Metro config that doesn't
// depend on NativeWind/Reanimated/Sentry wrappers from the main app.
module.exports = getDefaultConfig(__dirname);
