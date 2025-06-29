# My App

A super basic React Native for Web app using Expo.

## Getting Started

### Prerequisites

- Node.js (v14 or later)
- npm or yarn
- Expo CLI (optional, but recommended)

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm start
```

## Running the App

### Web
```bash
npm run web
```

### iOS Simulator
```bash
npm run ios
```
(Requires Xcode and iOS Simulator)

### Android Emulator
```bash
npm run android
```
(Requires Android Studio and Android Emulator)

## Project Structure

- `App.js` - Main application component
- `app.json` - Expo configuration
- `package.json` - Dependencies and scripts
- `babel.config.js` - Babel configuration

## Features

- ✅ Runs on Web, iOS, and Android
- ✅ Single codebase for all platforms
- ✅ Minimal setup with Expo
- ✅ Ready for extension with native modules 


## FAQ

Error: EMFILE: too many open files
Solution:
```
ulimit -n 10000
rm -rf .expo .expo-shared node_modules
npm install
npx expo start --clear
```