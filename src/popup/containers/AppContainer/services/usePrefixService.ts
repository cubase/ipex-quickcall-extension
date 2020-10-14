import { Prefix } from '../../../../models/prefix.model'
import { useChromeStorage } from '../../../core/hooks'

type UsePrefixServiceHook = () => {
  operations: {
    handlePrefixAdd: (prefix: Prefix) => void
    handlePrefixUpdate: (id: string, prefix: Prefix) => void
    handlePrefixDelete: (id: string) => void
    handlePrefixToggleActive: (id: string) => void
  }
  models: {
    prefixes: Prefix[]
  }
}
const usePrefixService: UsePrefixServiceHook = () => {
  const [prefixes, setPrefixes] = useChromeStorage<Prefix[]>('ipex-quickcall-prefixes', [])

  const handlePrefixAdd = (newPrefix: Prefix) => setPrefixes([...prefixes, newPrefix])

  const handlePrefixUpdate = (id: string, newPrefix: Prefix) =>
    setPrefixes(prefixes.map((oldPrefix) => (oldPrefix.id === id ? newPrefix : oldPrefix)))

  const handlePrefixDelete = (id: string) =>
    setPrefixes(prefixes.filter((prefix) => prefix.id !== id))

  const handlePrefixToggleActive = (id: string) =>
    setPrefixes(
      prefixes.map((prefix) =>
        prefix.id === id ? { ...prefix, isActive: !prefix.isActive } : prefix
      )
    )
  return {
    operations: {
      handlePrefixAdd,
      handlePrefixUpdate,
      handlePrefixDelete,
      handlePrefixToggleActive,
    },
    models: {
      prefixes,
    },
  }
}

export default usePrefixService
