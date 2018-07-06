import { React } from '@lib'

// tslint:disable
import './Icon.scss'
// tslint:enable

export interface IconProps extends React.Props<any> {
  size?: 'small'
  double?: boolean
  color?: string
  nameIcon: string
}

export const Icon = (props: IconProps) => {
  const { nameIcon = 'blank', double, color = '', size } = props
  const style = { color }
  const isSmall = size === 'small' ? '--small' : ''
  const isDouble = double ? ' .double' : ''

  const className = `icon-${nameIcon}${isSmall}${isDouble}`

  return <i style={style} className={className} />
}
