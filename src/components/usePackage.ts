import { useEffect, useState } from 'preact/hooks'
import type * as CjsModuleLexer from 'cjs-module-lexer'

export const usePackage = (version: string) => {
  const [cjsModuleLexer, setCjsModuleLexer] = useState<
    typeof CjsModuleLexer | undefined
  >()

  useEffect(() => {
    const abort = new AbortController()
    const url = `https://cdn.jsdelivr.net/npm/cjs-module-lexer@${version}/dist/lexer.mjs`

    ;(async () => {
      setCjsModuleLexer(undefined)
      const mod: typeof CjsModuleLexer = await import(/* @vite-ignore */ url)
      if (abort.signal.aborted) return
      await mod.init()
      if (abort.signal.aborted) return
      setCjsModuleLexer(mod)
    })()

    return () => {
      abort.abort()
    }
  }, [version])

  return cjsModuleLexer
}
