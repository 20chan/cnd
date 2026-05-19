import { darkScheme, defaultScheme, type Scheme } from '#/lib/scheme'
import { cn } from '@cnd.sh/design/utils'
import { createFileRoute } from '@tanstack/react-router'
import Color from 'color'
import { useEffect, useState } from 'react'

export const Route = createFileRoute('/')({ component: Home })

function Home() {
  const [scheme, setScheme] = useState<Scheme>(darkScheme);

  useEffect(() => {
    const current = window.document.documentElement.getAttribute('data-theme') === 'dark' ? darkScheme : defaultScheme;
    setScheme(current);
  }, []);

  const desc = (name: string) => {
    if (name === 'white') {
      return ' (bg)'
    } else if (name === 'brightWhite') {
      return ' (bg)'
    } else if (name === 'black') {
      return ' (fg)'
    } else if (name === 'brightBlack') {
      return ' (fg)'
    }
  }

  const whiteLike = scheme.black === defaultScheme.black ? scheme.white : scheme.black
  const blackLike = scheme.white === defaultScheme.white ? scheme.black : scheme.white

  return (
    <div className="grid grid-rows-1 grid-cols-[26rem_auto]">
      <div className="grid grid-cols-2 gap-2 pr-(--layout-padding)">
        {Object.entries(scheme).map(([name, color]) => (
          <div
            key={name}
            className="p-4 text-center"
            style={{
              backgroundColor: color,
              color: Color(color).isLight() ? blackLike : whiteLike,
            }}
          >
            <div>{name}{desc(name)}</div>
            <div className="text-sm">{color}</div>
          </div>
        ))}
      </div>

      <div>
        {Object.entries(scheme).map(([name, color]) => {
          const hsl = Color(color).hsl()
          const isWhite = name === 'white' || name === 'brightWhite'
          const isBackground =
            name.startsWith('bright') &&
            name !== 'brightBlack' &&
            name !== 'brightWhite'

          const textColor = (isBackground || isWhite) ? whiteLike : color;
          // const textColor = isBackground || isWhite ? scheme.white : color
          const bgColor = isBackground ? color : 'transparent'

          const whiteContrast = hsl.contrast(Color(whiteLike))
          const blackContrast = hsl.contrast(Color(blackLike))

          return (
            <div key={name}>
              <span
                style={{ color: textColor, backgroundColor: bgColor }}
                className="inline-block w-40"
              >
                {name}{desc(name)}
              </span>
              <span
                style={{ color: textColor, backgroundColor: bgColor }}
                className="font-bold inline-block w-20"
              >
                {color}
              </span>
              <input
                type="range"
                min={0}
                max={360}
                value={hsl.hue()}
                className="w-60"
                onChange={(e) => {
                  const newColor = hsl.hue(Number(e.target.value)).hex()
                  setScheme((prev) => ({ ...prev, [name]: newColor }))
                }}
              />
              <span className="inline-block w-12 mr-2 text-right">
                {hsl.hue().toFixed(0)}°
              </span>
              <input
                type="range"
                min={0}
                max={100}
                value={hsl.saturationl()}
                className="w-60"
                onChange={(e) => {
                  const newColor = hsl.saturationl(Number(e.target.value)).hex()
                  setScheme((prev) => ({ ...prev, [name]: newColor }))
                }}
              />
              <span className="inline-block w-10 mr-2 text-right">
                {hsl.saturationl().toFixed(0)}%
              </span>
              <input
                type="range"
                min={0}
                max={100}
                value={hsl.lightness()}
                className="w-60"
                onChange={(e) => {
                  const newColor = hsl.lightness(Number(e.target.value)).hex()
                  setScheme((prev) => ({ ...prev, [name]: newColor }))
                }}
              />
              <span className="inline-block w-10 ml-2 text-right">
                {hsl.lightness().toFixed(0)}%
              </span>

              <span
                className={cn(
                  'inline-block w-12 ml-2 text-right',
                  whiteContrast < 3
                    ? 'text-red-700'
                    : whiteContrast < 4.5
                      ? 'text-yellow-600'
                      : '',
                )}
              >
                {whiteContrast.toFixed(1)}
              </span>
              <span
                className={cn(
                  'inline-block w-12 ml-2 text-right',
                  blackContrast < 3
                    ? 'text-red-700'
                    : blackContrast < 4.5
                      ? 'text-yellow-600'
                      : '',
                )}
              >
                {blackContrast.toFixed(1)}
              </span>
            </div>
          )
        })}
      </div>
    </div>
  )
}
