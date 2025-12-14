# repro-expo-gl-three

Minimal Expo project to isolate ExpoGL + Three/R3F issues.

## Run (dev)

```bash
cd repro-expo-gl-three
yarn install
yarn start
```

## Build Android release (recommended to reproduce release-only crashes)

```bash
cd repro-expo-gl-three
yarn install
yarn prebuild:android
yarn build:android:release
yarn install:android:release
```

Then open the app and watch `adb logcat`.

