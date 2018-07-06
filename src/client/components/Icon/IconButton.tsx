import { React } from '@lib'
import { Badge, IconButton as IB } from '@lib/material-ui'

import { Icon, IconProps } from '..'

export interface IconButtonProps extends IconProps {
  badgeContent?: string | number
  handleClick: React.MouseEventHandler<HTMLElement>
}

export const IconButton = (props: IconButtonProps) => {
  const { handleClick, badgeContent, ...base } = props
  const ComponentBadge = badgeContent ? (
    <Badge badgeContent={badgeContent} color="error">
      <Icon {...base} />
    </Badge>
  ) : (
    <Icon {...base} />
  )

  return <IB onClick={handleClick}>{ComponentBadge}</IB>
}
