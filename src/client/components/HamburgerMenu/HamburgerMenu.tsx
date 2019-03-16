import { classNames, React } from '@lib'
import { IconButton } from '@lib/material-ui'
import s from './HamburgerMenu.scss'

interface Props {
  isOpen: boolean
  handleClick(): void
}

export const HamburgerMenu = ({ isOpen, handleClick }: Props) => {
  const firstLine = classNames({
    [s.line]: true,
    [s.lineFirst]: true,
    [s.lineFirstOpened]: isOpen,
  })

  const firstSecond = classNames({
    [s.line]: true,
    [s.lineSecond]: true,
    [s.lineSecondOpened]: isOpen,
  })

  const firstThird = classNames({
    [s.line]: true,
    [s.lineThird]: true,
    [s.lineThirdOpened]: isOpen,
  })

  return (
    <IconButton onClick={handleClick}>
      <div className={s.scope}>
        <span className={firstLine} />
        <span className={firstSecond} />
        <span className={firstThird} />
      </div>
    </IconButton>
  )
}
