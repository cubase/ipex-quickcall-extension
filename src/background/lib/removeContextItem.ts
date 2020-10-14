export const removeContextItem = (id: string) =>
  new Promise((resolve) => chrome.contextMenus.remove(id, resolve))
