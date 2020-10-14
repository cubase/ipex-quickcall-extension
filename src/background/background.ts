import {
  isValidNumber,
  isWebcomUrl,
  createContextItem,
  removeContextItem,
  getActivePrefixes,
  getWebcomTab,
  highlightTab,
  createCall,
  log,
} from './lib'

const MENU_ITEM_ID = 'ipex-quickcall'
let currentWebcomTab: chrome.tabs.Tab | null = null

const handleRemoteCall = async (tabId: number, callNumber: string) => {
  if (!isValidNumber(callNumber)) {
    return
  }

  await highlightTab(tabId)
  return createCall(tabId, callNumber)
}

const handleOptionClick = (
  data: chrome.contextMenus.OnClickData,
  tabId: number,
  prefix?: string
) => {
  const { selectionText: callNumber } = data

  if (!callNumber) {
    return
  }

  handleRemoteCall(tabId, prefix ? prefix + callNumber : callNumber)
}

const generateContextItems = async (tabId: number) => {
  const savedPrefixes = await getActivePrefixes()

  log('Loaded prefixes:', savedPrefixes)

  await createContextItem({
    id: MENU_ITEM_ID,
    contexts: ['selection'],
    title: "IPEX - Volat '%s'",
    onclick: (data) => handleOptionClick(data, tabId),
  })

  if (savedPrefixes.length > 0) {
    await Promise.all(
      savedPrefixes.map((prefix) =>
        createContextItem({
          parentId: MENU_ITEM_ID,
          contexts: ['selection'],
          title: `${prefix.name} (${prefix.prefix})`,
          onclick: (data) => handleOptionClick(data, tabId, prefix.prefix),
        })
      )
    )
    await createContextItem({
      parentId: MENU_ITEM_ID,
      contexts: ['selection'],
      title: '- Bez prefixu -',
      onclick: (data) => handleOptionClick(data, tabId),
    })
  }
}

const handleTabRemove = async (tabId: number) => {
  log('Remove tab on event', { currentWebcomTab, tabId })
  if (currentWebcomTab && currentWebcomTab.id === tabId) {
    await removeContextItem(MENU_ITEM_ID)

    const foundWebcomTab = await getWebcomTab()
    if (foundWebcomTab && foundWebcomTab.id) {
      log('Recreating context items after tab remove', { currentWebcomTab, tabId })
      await generateContextItems(foundWebcomTab.id)
    }

    currentWebcomTab = foundWebcomTab
  }
}

const handleTabUpdate = async (
  tabId: number,
  changeInfo: chrome.tabs.TabChangeInfo,
  tab: chrome.tabs.Tab
) => {
  if (changeInfo.status !== 'complete' || !tab.url || !tab.id) {
    return
  }

  if (currentWebcomTab && currentWebcomTab.id === tab.id) {
    if (!isWebcomUrl(tab.url)) {
      log('Removing context items after update', { currentWebcomTab, tabId })
      await removeContextItem(MENU_ITEM_ID)

      const foundWebcomTab = await getWebcomTab()
      if (foundWebcomTab && foundWebcomTab.id) {
        log('Recreating context items after remove in update', { currentWebcomTab, tabId })
        await generateContextItems(foundWebcomTab.id)
      }

      currentWebcomTab = foundWebcomTab
    }
  } else {
    if (isWebcomUrl(tab.url) && !currentWebcomTab) {
      log('Creating context items after update', { currentWebcomTab })
      currentWebcomTab = tab
      return generateContextItems(tab.id)
    }
  }
}

const handleStorageChange = async () => {
  if (currentWebcomTab && currentWebcomTab.id) {
    log('Recreating context items after storage change', { currentWebcomTab })
    await removeContextItem(MENU_ITEM_ID)
    await generateContextItems(currentWebcomTab.id)
  }
}

const startup = async () => {
  try {
    currentWebcomTab = await getWebcomTab()
    if (currentWebcomTab && currentWebcomTab.id) {
      generateContextItems(currentWebcomTab.id)
    }

    chrome.tabs.onUpdated.addListener(handleTabUpdate)
    chrome.tabs.onRemoved.addListener(handleTabRemove)
    chrome.storage.onChanged.addListener(handleStorageChange)
  } catch (error) {
    console.error('[IpexQuickCall] Error occured:', error)
  }
}

startup()
