# **IPEX** QuickCall Chrome Extension

Powered by:  
![Powered by FA](https://user-images.githubusercontent.com/29258951/95994151-3841fd80-0e30-11eb-9c63-7dc4d0f731c8.png)

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
