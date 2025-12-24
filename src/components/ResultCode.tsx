import { ParseResult } from '../types'

export const ResultCode = ({ result }: { result: ParseResult }) => {
  return (
    <div class="result-code">
      <div class="cjs-result-section">
        <h3>Exports ({result.exports.length})</h3>
        {result.exports.length > 0 ? (
          <ul class="cjs-result-list">
            {result.exports.map((exp) => (
              <li key={exp}>{exp}</li>
            ))}
          </ul>
        ) : (
          <p class="cjs-result-empty">No exports detected</p>
        )}
      </div>
      <div class="cjs-result-section">
        <h3>Re-exports ({result.reexports.length})</h3>
        {result.reexports.length > 0 ? (
          <ul class="cjs-result-list">
            {result.reexports.map((reexp) => (
              <li key={reexp}>{reexp}</li>
            ))}
          </ul>
        ) : (
          <p class="cjs-result-empty">No re-exports detected</p>
        )}
      </div>
    </div>
  )
}
