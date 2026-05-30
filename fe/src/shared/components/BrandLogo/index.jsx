import { Link } from 'react-router-dom'
import brandLogo from '@/assets/logos/sehub-brand-logo.png'
import './brand-logo.css'

export default function BrandLogo({
  to = '/',
  className = '',
  imageClassName = '',
  onClick,
}) {
  const image = (
    <img
      src={brandLogo}
      alt="SEHub"
      className={`brand-logo__image${imageClassName ? ` ${imageClassName}` : ''}`}
    />
  )

  if (to) {
    return (
      <Link to={to} className={`brand-logo${className ? ` ${className}` : ''}`} onClick={onClick}>
        {image}
      </Link>
    )
  }

  return <div className={`brand-logo${className ? ` ${className}` : ''}`}>{image}</div>
}
