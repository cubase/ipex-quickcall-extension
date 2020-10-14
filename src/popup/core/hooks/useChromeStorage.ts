import { useEffect, useState } from 'react'

type UseChromeStorageHook = <T>(
  key: string,
  defaultValue: T
) => [storage: T, setIntoStorage: (value: T) => void]

const useChromeStorage: UseChromeStorageHook = <T>(key: string, defaultValue: T) => {
  const [state, setState] = useState<T>(defaultValue)

  const setIntoStorage = (value: T) => chrome.storage.sync.set({ [key]: value })

  useEffect(() => {
    const handleStateChange = (changes: { [key: string]: chrome.storage.StorageChange }) =>
      setState(changes[key].newValue)

    chrome.storage.onChanged.addListener(handleStateChange)
    chrome.storage.sync.get([key], (value) =>
      setState(value[key] === undefined ? defaultValue : value[key])
    )

    return () => chrome.storage.onChanged.removeListener(handleStateChange)
  }, [key])

  return [state, setIntoStorage]
}

export default useChromeStorage
