import { classNames, React } from '@lib'
import s from './Image.scss'

export interface Props extends React.ImgHTMLAttributes<React.Props<any>> {
  width?: number
  height?: number
  className?: string
}

export const Image = (props: Props) => {
  const { width, height, className = '', ...base } = props

  /* stylelint-disable */
  const style = {
    width,
    height,
  }
  /* stylelint-enable */

  const classes = classNames(s.wrapperImg, className)

  return (
    <div style={style} className={classes.trim()}>
      <img className={s.img} {...base} />
    </div>
  )
}
