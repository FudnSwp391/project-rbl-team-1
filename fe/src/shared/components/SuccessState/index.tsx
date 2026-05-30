import type { ReactNode } from 'react'
import SuccessIcon from '@/shared/components/SuccessIcon'
import './success-state.css'

interface SuccessStateProps {
  title: string
  description: ReactNode
  action?: ReactNode
}

export default function SuccessState({ title, description, action }: SuccessStateProps) {
  return (
    <div className="success-state">
      <SuccessIcon />
      <h1 className="success-state__title">{title}</h1>
      <div className="success-state__description">{description}</div>
      {action ? <div className="success-state__action">{action}</div> : null}
    </div>
  )
}
