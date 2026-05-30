import FeatureStatusIcon from '@/features/subscription/components/FeatureStatusIcon'
import { SUBSCRIPTION_STRINGS, type FeatureComparisonRow } from '@/features/subscription/types'

interface ComparisonTableProps {
  rows: FeatureComparisonRow[]
}

export default function ComparisonTable({ rows }: ComparisonTableProps) {
  return (
    <section className="subscription-comparison">
      <h2 className="subscription-comparison__title">{SUBSCRIPTION_STRINGS.PAGE.COMPARISON_TITLE}</h2>

      <div className="subscription-comparison__table-wrapper">
        <table className="subscription-comparison__table">
          <thead>
            <tr>
              <th scope="col">{SUBSCRIPTION_STRINGS.TABLE.FEATURE_COLUMN}</th>
              <th scope="col">{SUBSCRIPTION_STRINGS.TABLE.FREE_COLUMN}</th>
              <th scope="col" className="subscription-comparison__premium-column">
                {SUBSCRIPTION_STRINGS.TABLE.PREMIUM_COLUMN}
              </th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row) => (
              <tr key={row.id}>
                <th scope="row">{row.feature}</th>
                <td>
                  <FeatureStatusIcon value={row.free} />
                </td>
                <td className="subscription-comparison__premium-cell">
                  <FeatureStatusIcon value={row.premium} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  )
}
