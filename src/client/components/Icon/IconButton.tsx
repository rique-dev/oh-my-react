import { React } from '@lib'
import { IconButton as IB } from '@lib/material-ui'

import { Icon, IconProps } from '..'

export interface IconButtonProps extends IconProps {
  handleClick: React.MouseEventHandler<HTMLElement>
}

export const IconButton = (props: IconButtonProps) => {
  const { handleClick, ...base } = props

  return (
    <IB onClick={handleClick}>
      <Icon {...base} />
    </IB>
  )
}
