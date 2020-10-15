# **IPEX** QuickCall Chrome Extension

###### Powered by:  
<img src="https://user-images.githubusercontent.com/29258951/96114364-cd52fe00-0ee5-11eb-8244-95b3275a1c6a.png" width="250" />

## About
This extension implements "highlight-and-call" based feature into Chrome browser in cooperation with webcom.ipex.cz.

## Develop
After installing npm modules type:
```
npm run watch
```
Webpack should take care of automatic TS rebuild.

## Build
```
npm run build
```

## How to test
When build process is done, the `dist` folder appears in root of the project. After that, navigate to `chrome://extensions` in your browser and click on `Load unpacked` button. You will be asked to select the extension directory which is our `dist` folder.
