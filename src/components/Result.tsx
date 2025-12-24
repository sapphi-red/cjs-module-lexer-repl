import { useMemo } from 'preact/hooks'
import { ResultCode } from './ResultCode'
import { usePackage } from './usePackage'

export const Result = ({
  version,
  input,
}: {
  version: string
  input: string
}) => {
  const cjsModuleLexer = usePackage(version)

  const result = useMemo(() => {
    if (cjsModuleLexer === undefined) return { type: 'loading' } as const

    try {
      return { type: 'success', value: cjsModuleLexer.parse(input) } as const
    } catch (e) {
      return { type: 'error', value: e } as const
    }
  }, [cjsModuleLexer, input])

  return (
    <div class="result">
      {result.type === 'loading' ? 'loading...' : null}
      {result.type === 'success' ? <ResultCode result={result.value} /> : null}
      {result.type === 'error' ? (
        <div class="result-error">{`${result.value}`}</div>
      ) : null}
    </div>
  )
}
