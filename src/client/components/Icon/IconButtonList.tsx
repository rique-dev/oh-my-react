import { Fragment, React } from '@lib'
import { IconButton, IconButtonProps } from './IconButton'

export interface IconButtonListProps {
  list: IconButtonProps[]
}

export const IconButtonList = ({ list }: IconButtonListProps) => (
  <Fragment>
    {list.map((props: IconButtonProps, index: number) => (
      <IconButton key={index} {...props} />
    ))}
  </Fragment>
)
