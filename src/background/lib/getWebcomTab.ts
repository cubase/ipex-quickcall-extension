import { isWebcomUrl } from './isWebcomUrl'

export const getWebcomTab = (): Promise<chrome.tabs.Tab | null> =>
  new Promise((resolve) => {
    chrome.tabs.query({}, (tabs) =>
      resolve(tabs.find((tab) => tab.url && isWebcomUrl(tab.url)) || null)
    )
  })
