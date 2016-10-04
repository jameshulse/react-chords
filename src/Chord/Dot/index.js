import React from 'react'
import './styles.css'

const stringXYPosition = [ 50, 40, 30, 20, 10, 0 ]
const fretXYPosition = [ -4, 6, 18, 30, 42, 54 ]
const fingerXYPosition = [ -3, 7.75, 19, 31.75, 43, 55 ]

const radius = {
  open: 2,
  fret: 4
}

const Dot = ({ string, fret, finger }) =>
  fret === -1
    ? <text
      className='Muted'
      x={stringXYPosition[string - 1]}
      y='-2'
      >x</text>
    : (<g>
      <circle
        className={fret === 0 ? 'Open' : 'Fret'}
        cx={stringXYPosition[string - 1]}
        cy={fretXYPosition[fret]}
        r={fret === 0 ? radius['open'] : radius['fret']}
      />
      { finger > 0 &&
        <text className='Finger' x={stringXYPosition[string - 1]} y={fingerXYPosition[fret]}>{ finger }</text>}
    </g>)

Dot.propTypes = {
  string: React.PropTypes.number,
  fret: React.PropTypes.oneOf([ -1 ].concat([...Array(fretXYPosition.length).keys()])),
  finger: React.PropTypes.oneOf([ 0, 1, 2, 3, 4, 5 ])
}

Dot.defaultProps = {
  fret: 0
}

export default Dot
