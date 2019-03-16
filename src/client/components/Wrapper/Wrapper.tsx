import { isNumber, React } from '@lib'

import s from './Wrapper.scss'

interface Props extends React.Props<{}> {
  marginX?: 'auto' | 0 | 8 | 12 | 16 | 24 | 32 | 40 | 72
  paddingX?: 'auto' | 0 | 8 | 12 | 16 | 24 | 32 | 40
  marginY?: 'auto' | 0 | 8 | 12 | 16 | 24 | 32 | 40 | 72
  paddingY?: 'auto' | 0 | 8 | 12 | 16 | 24 | 32 | 40
  margin?: string | 0 | 8 | 12 | 16 | 24 | 32 | 40
  padding?: string | 0 | 8 | 12 | 16 | 24 | 32 | 40
}

export const Wrapper = (props: Props) => {
  const {
    children,
    marginX,
    marginY,
    paddingX,
    paddingY,
    margin,
    padding,
  } = props

  let _marginX: string | number = 0
  let _marginY: string | number = 0
  let _margin: string | number = ''

  let _paddingX: string | number = 0
  let _paddingY: string | number = 0
  let _padding: string | number = ''

  // TODO: @henryqrm Refactory

  if (margin && typeof margin === 'string') {
    const numbers = margin.split(' ')
    const isNumbers = isNumber(numbers)
    if (isNumbers) {
      throw new Error('Values of prop margin are\'t Number type')
    }

    _marginY = parseInt(numbers[0], 10)
    _marginX = numbers[1] ? `${parseInt(numbers[1], 10)}px` : ''
    _margin = `${_marginY} ${_marginX}`.trim()
  }
  if (margin && isNumber(margin)) {
    _margin = margin
  } else {
    _marginY = marginY ? `${marginY}px` : 0
    _marginX = marginX ? `${marginX}px` : 0
    _margin = `${_marginY} ${_marginX}`.trim()
  }

  if (padding && typeof padding === 'string') {
    const numbers = padding.split(' ')
    const isNumbers = isNumber(numbers)
    if (isNumbers) {
      throw new Error('Values of prop padding are\'t Number type')
    }

    _paddingY = parseInt(numbers[0], 10)
    _paddingX = numbers[1] ? `${parseInt(numbers[1], 10)}px` : ''
    _padding = `${_paddingY} ${_paddingX}`.trim()
  }
  if (padding && isNumber(padding)) {
    _padding = padding
  } else {
    _paddingY = paddingY ? `${paddingY}px` : 0
    _paddingX = paddingX ? `${paddingX}px` : 0
    _padding = `${_paddingY} ${_paddingX}`.trim()
  }

  const style = {
    margin: _margin,
    padding: _padding,
  }

  return (
    <div style={style} className={s.scope}>
      {children}
    </div>
  )
}
