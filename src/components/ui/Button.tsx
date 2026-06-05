import { Link } from 'react-router-dom'

type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'ghost'
type ButtonSize = 'sm' | 'md' | 'lg'

interface ButtonProps {
  children: React.ReactNode
  variant?: ButtonVariant
  size?: ButtonSize
  href?: string
  to?: string
  onClick?: () => void
  type?: 'button' | 'submit'
  className?: string
  external?: boolean
}

const variants: Record<ButtonVariant, string> = {
  primary:
    'bg-gold text-bg hover:bg-gold-light shadow-lg shadow-gold/20',
  secondary:
    'bg-brown-deep text-text border border-brown hover:border-gold hover:text-gold',
  outline:
    'border border-gold text-gold hover:bg-gold hover:text-bg',
  ghost: 'text-gold hover:text-gold-light',
}

const sizes: Record<ButtonSize, string> = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-6 py-3 text-sm',
  lg: 'px-8 py-4 text-base',
}

export function Button({
  children,
  variant = 'primary',
  size = 'md',
  href,
  to,
  onClick,
  type = 'button',
  className = '',
  external,
}: ButtonProps) {
  const base =
    'inline-flex items-center justify-center gap-2 font-medium tracking-wide transition-all duration-300 rounded-sm cursor-pointer'

  const classes = `${base} ${variants[variant]} ${sizes[size]} ${className}`

  if (to) {
    return (
      <Link to={to} className={classes}>
        {children}
      </Link>
    )
  }

  if (href) {
    return (
      <a
        href={href}
        className={classes}
        target={external ? '_blank' : undefined}
        rel={external ? 'noopener noreferrer' : undefined}
      >
        {children}
      </a>
    )
  }

  return (
    <button type={type} onClick={onClick} className={classes}>
      {children}
    </button>
  )
}
