import { motion, useReducedMotion } from 'framer-motion';
import { makeFadeUp } from '../../utils/motion';

const radiusClasses = {
  xl: 'rounded-xl',
  '2xl': 'rounded-2xl',
  droplet: 'droplet-corner',
};

function ImageCard({
  item,
  className = '',
  captionInside = false,
  aspect = 'h-[360px]',
  glassOverlay = true,
  radius = 'droplet',
}) {
  const reduceMotion = useReducedMotion();
  const fadeUp = makeFadeUp(reduceMotion);
  const radiusClass = radiusClasses[radius] ?? radiusClasses.droplet;

  return (
    <motion.article variants={fadeUp} className={`group overflow-hidden ${radiusClass} ${className}`}>
      <div className={`relative overflow-hidden ${aspect}`}>
        <img
          src={item.image}
          alt={item.title}
          className="h-full w-full object-cover transition-transform duration-500 ease-luxe group-hover:scale-[1.06]"
          loading="lazy"
        />

        {glassOverlay ? (
          <>
            <div
              className={`absolute inset-0 transition-opacity duration-500 group-hover:opacity-90 ${
                captionInside
                  ? 'bg-gradient-to-t from-black/62 via-black/24 to-transparent'
                  : 'bg-gradient-to-t from-[#1e170f]/42 via-[#1e170f]/14 to-transparent'
              }`}
            />
            <div className="pointer-events-none absolute -right-8 top-3 h-20 w-20 rounded-full border border-white/45 bg-white/25 blur-md" />
          </>
        ) : null}

        {captionInside ? (
          <div className="absolute inset-x-0 bottom-0 p-6 text-white">
            <h3 className="font-serif text-[26px] leading-[1] [text-shadow:0_3px_14px_rgba(0,0,0,0.5)] transition-transform duration-300 group-hover:-translate-y-1 sm:text-[30px]">
              {item.title}
            </h3>
            {item.subtitle ? <p className="mt-2 text-[12px] uppercase tracking-[0.17em] text-white/95 [text-shadow:0_2px_10px_rgba(0,0,0,0.45)]">{item.subtitle}</p> : null}
          </div>
        ) : null}
      </div>

      {!captionInside ? (
        <div className="px-1 pb-1 pt-4">
          <h3 className="font-serif text-[27px] leading-none text-inkStrong">{item.title}</h3>
          {item.subtitle ? <p className="mt-2.5 text-[14px] leading-[1.7] text-inkSoft">{item.subtitle}</p> : null}
        </div>
      ) : null}
    </motion.article>
  );
}

export default ImageCard;
