import { classNames, React } from '@lib'

export interface IconProps extends React.Props<any> {
  size?: 'small'
  double?: boolean
  color?: string
  nameIcon: string
  className?: string
}

export const Icon = (props: IconProps) => {
  const { className, nameIcon = 'blank', double, color = '', size } = props
  const isSmall = size === 'small'
  const tagIconSmall = isSmall ? '--small' : ''

  const fontSize = (isSmall ? 18 : 24) * (double ? 2 : 1)

  const style = {
    color,
    fontSize,
  }

  const classes = classNames({
    [`icon-${nameIcon}${tagIconSmall}`]: true,
    [className || '']: true,
  })

  return <i style={style} className={classes} />
}
