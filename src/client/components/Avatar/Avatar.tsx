import { classNames, React } from '@lib'
import { Avatar as _Avatar, AvatarProps } from '@lib/material-ui'
import s from './Avatar.scss'

interface Props extends AvatarProps {
  withBorder?: boolean
}

export const Avatar = ({ withBorder, ...base }: Props): JSX.Element => {
  const classes = classNames({
    [s.border]: withBorder,
  })

  return <_Avatar className={classes} {...base} />
}
