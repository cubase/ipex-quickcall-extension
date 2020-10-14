import { Prefix } from '../../models/prefix.model'

const STORAGE_KEY = 'ipex-quickcall-prefixes'

export const getActivePrefixes = (): Promise<Prefix[]> =>
  new Promise((resolve) =>
    chrome.storage.sync.get([STORAGE_KEY], (result) => {
      const prefixes: Prefix[] = Array.isArray(result[STORAGE_KEY]) ? result[STORAGE_KEY] : []
      resolve(prefixes.filter((prefix) => prefix.isActive !== false))
    })
  )
