import { isDefined, React } from '@lib'
import { Badge, IconButton as _IconButton } from '@lib/material-ui'

import { Icon, IconProps } from '..'

export interface IconButtonProps extends IconProps {
  badgeContent?: string | number
  handleClick: React.MouseEventHandler<HTMLButtonElement>
}

export const IconButton = (props: IconButtonProps) => {
  const { handleClick, badgeContent, ...base } = props

  const _badgeContent =
    isDefined(badgeContent) && badgeContent < 99 ? badgeContent : '99+'

  const ComponentBadge = badgeContent ? (
    <Badge badgeContent={_badgeContent} color="error">
      <Icon {...base} />
    </Badge>
  ) : (
    <Icon {...base} />
  )

  return <_IconButton onClick={handleClick}>{ComponentBadge}</_IconButton>
}
