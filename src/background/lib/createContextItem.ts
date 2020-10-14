export const createContextItem = (
  createProperties: chrome.contextMenus.CreateProperties
): Promise<void> => new Promise((resolve) => chrome.contextMenus.create(createProperties, resolve))
