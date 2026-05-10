import { defaultScheme, type Scheme } from '#/lib/scheme';
import { cn } from '@cnd.sh/design/utils';
import { createFileRoute } from '@tanstack/react-router'
import Color from 'color';
import { useState } from 'react';

export const Route = createFileRoute('/')({ component: Home })

function Home() {
  const [scheme, setScheme] = useState<Scheme>(defaultScheme);

  return (
    <div className="grid grid-rows-1 grid-cols-[24rem_auto]">
      <div className='grid grid-cols-2 gap-2 pr-(--layout-padding)'>
        {Object.entries(scheme).map(([name, color]) => (
          <div
            key={name}
            className='p-4 text-center'
            style={{ backgroundColor: color, color: Color(color).isLight() ? scheme.black : scheme.white }}
          >
            <div>
              {name}
            </div>
            <div className='text-sm'>
              {color}
            </div>
          </div>
        ))}
      </div>

      <div>
        {Object.entries(scheme).map(([name, color]) => {
          const hsl = Color(color).hsl();
          const isWhite = name === 'white' || name === 'brightWhite';
          const isBackground = name.startsWith('bright') && name !== 'brightBlack' && name !== 'brightWhite';

          const textColor = (isBackground || isWhite) ? scheme.black : color;
          const bgColor = isBackground ? color : 'transparent';

          const whiteContrast = hsl.contrast(Color(scheme.white));
          const blackContrast = hsl.contrast(Color(scheme.black));

          return (<div>
            <span style={{ color: textColor, backgroundColor: bgColor }} className='inline-block w-40'>
              {name}
            </span>
            <span style={{ color: textColor, backgroundColor: bgColor }} className='font-bold inline-block w-20'>
              {color}
            </span>
            <input type="range" min={0} max={360} value={hsl.hue()} className='w-60' onChange={(e) => {
              const newColor = hsl.hue(Number(e.target.value)).hex();
              setScheme((prev) => ({ ...prev, [name]: newColor }));
            }} />
            <span className='inline-block w-12 mr-2 text-right'>
              {hsl.hue().toFixed(0)}°
            </span>
            <input type="range" min={0} max={100} value={hsl.saturationl()} className='w-60' onChange={(e) => {
              const newColor = hsl.saturationl(Number(e.target.value)).hex();
              setScheme((prev) => ({ ...prev, [name]: newColor }));
            }} />
            <span className='inline-block w-10 mr-2 text-right'>
              {hsl.saturationl().toFixed(0)}%
            </span>
            <input type="range" min={0} max={100} value={hsl.lightness()} className='w-60' onChange={(e) => {
              const newColor = hsl.lightness(Number(e.target.value)).hex();
              setScheme((prev) => ({ ...prev, [name]: newColor }));
            }} />
            <span className='inline-block w-10 ml-2 text-right'>
              {hsl.lightness().toFixed(0)}%
            </span>

            <span className={cn('inline-block w-12 ml-2 text-right', whiteContrast < 3 ? 'text-red-700' : whiteContrast < 4.5 ? 'text-yellow-600' : '')}>
              {whiteContrast.toFixed(1)}
            </span>
            <span className={cn('inline-block w-12 ml-2 text-right', blackContrast < 3 ? 'text-red-700' : blackContrast < 4.5 ? 'text-yellow-600' : '')}>
              {blackContrast.toFixed(1)}
            </span>
          </div>)
        })}
      </div>
    </div>
  )
}
