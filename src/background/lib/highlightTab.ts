export const highlightTab = (tabId: number): Promise<void> =>
  new Promise((resolve) => {
    chrome.tabs.get(tabId, (tab) =>
      chrome.tabs.highlight({ windowId: tab.windowId, tabs: tab.index }, () => resolve())
    )
  })
