import { FormattedMessage, React } from '@lib'
import { Button } from '@lib/material-ui'
import s from './ButtonSuccess.scss'

interface Props {
  message: FormattedMessage.MessageDescriptor
  handleClick: React.MouseEventHandler<HTMLElement>
}

export const ButtonSuccess = (props: Props) => {
  const { handleClick, message, ...base } = props

  return (
    <Button className={s.scope} onClick={handleClick} {...base}>
      <FormattedMessage {...message} />
    </Button>
  )
}
