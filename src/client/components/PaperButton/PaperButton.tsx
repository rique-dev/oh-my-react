import { Typography } from '@components'
import { classNames, React } from '@lib'
import { Icon, Paper } from '..'

import s from './PaperButton.scss'

export const PaperButton = ({ isOpen, ...props }: any) => {
  const classesWrapper = classNames({
    [s.scope]: true,
    [s.scopeOpened]: isOpen,
  })

  const classesText = classNames({
    [s.text]: true,
    [s.textOpened]: isOpen,
  })

  return (
    <div className={classesWrapper}>
      <div>
        <Paper {...props}>
          <Icon className={s.paperIcon} nameIcon="chat" color="#3f51b5" />
        </Paper>
        <Paper {...props}>
          <Icon className={s.paperIcon} nameIcon="megaphone" color="#d43156" />
        </Paper>
        <Paper {...props}>
          <Icon className={s.paperIcon} nameIcon="charts" color="#f99000" />
        </Paper>
        <Paper {...props}>
          <Icon
            className={s.paperIcon}
            nameIcon="bell-ringing"
            color="#f99000"
          />
        </Paper>
      </div>
      <Typography className={classesText} variant="caption" gutterBottom>
        shortcut bar
      </Typography>
    </div>
  )
}
