import React from 'react'

function Cogwheel(props) {
  const fill = props.fill || 'currentColor'
  const secondaryfill = props.secondaryfill || fill
  const strokewidth = props.strokewidth || 1
  const width = props.width || '100%'
  const height = props.height || '100%'
  const title = props.title || 'cogwheel'

  return (
    <svg
      className="svgicon"
      height={height}
      width={width}
      viewBox="0 0 64 64"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>{title}</title>
      <g fill={secondaryfill}>
        <path
          d="M62.124,27.008l-7.916-.989a22.814,22.814,0,0,0-2.275-5.493l4.9-6.3a1,1,0,0,0-.083-1.321L51.091,7.252A1,1,0,0,0,49.77,7.17l-6.3,4.9A22.825,22.825,0,0,0,37.982,9.8l-.99-7.921A1,1,0,0,0,36,1H28a1,1,0,0,0-.992.876L26.018,9.8a22.713,22.713,0,0,0-5.491,2.275l-6.3-4.9a1,1,0,0,0-1.321.082L7.252,12.909a1,1,0,0,0-.083,1.321l4.9,6.3A22.849,22.849,0,0,0,9.8,26.019l-7.921.989A1,1,0,0,0,1,28v8a1,1,0,0,0,.876.992l7.921.989a22.811,22.811,0,0,0,2.274,5.493l-4.9,6.3a1,1,0,0,0,.082,1.321l5.657,5.657a1,1,0,0,0,1.321.082l6.3-4.9a22.837,22.837,0,0,0,5.491,2.274l.99,7.917A1,1,0,0,0,28,63h8a1,1,0,0,0,.992-.876l.989-7.916a22.757,22.757,0,0,0,5.493-2.275l6.3,4.9a1,1,0,0,0,1.321-.082l5.657-5.657a1,1,0,0,0,.083-1.321l-4.9-6.3a22.844,22.844,0,0,0,2.274-5.493l7.917-.989A1,1,0,0,0,63,36V28A1,1,0,0,0,62.124,27.008ZM32,43A11,11,0,1,1,43,32,11,11,0,0,1,32,43Z"
          fill={fill}
        />
      </g>
    </svg>
  )
}

export default Cogwheel
