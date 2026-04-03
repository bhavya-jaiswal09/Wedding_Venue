import { Link } from 'react-router-dom';

const legacyToneByVariant = {
  solid: 'primary',
  outline: 'frosted',
  ghost: 'ghost',
};

const toneClasses = {
  primary:
    'border border-gold bg-gold text-white shadow-[0_10px_26px_rgba(176,141,109,0.22)] hover:border-goldDeep hover:bg-goldDeep',
  frosted:
    'border border-strokeSoft/80 bg-white/62 text-inkStrong shadow-glass backdrop-blur-md hover:border-gold/65 hover:bg-white/78 hover:text-gold',
  ghost: 'border border-transparent bg-white/20 text-inkStrong/85 backdrop-blur-sm hover:border-gold/45 hover:text-gold',
};

const sizeClasses = {
  sm: 'min-h-11 px-5 py-2 text-[10px] tracking-[0.2em]',
  md: 'min-h-12 px-8 py-3 text-[11px] tracking-[0.2em]',
  lg: 'min-h-[52px] px-10 py-3 text-[12px] tracking-[0.22em]',
};

function CTAButton({ to, href, tone, variant = 'outline', size = 'md', className = '', children, ariaLabel }) {
  const resolvedTone = tone ?? legacyToneByVariant[variant] ?? 'frosted';
  const resolvedSize = sizeClasses[size] ? size : 'md';

  const classes = `inline-flex items-center justify-center whitespace-nowrap rounded-full font-medium uppercase transition-all duration-300 ease-luxe ${sizeClasses[resolvedSize]} ${toneClasses[resolvedTone]} ${className}`;

  if (to) {
    return (
      <Link to={to} className={classes} aria-label={ariaLabel}>
        {children}
      </Link>
    );
  }

  return (
    <a href={href} className={classes} aria-label={ariaLabel}>
      {children}
    </a>
  );
}

export default CTAButton;
