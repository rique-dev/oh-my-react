import { FormattedMessage, React } from '@lib'
import { scope } from './A.scss'

type Target = '_blank' | '_self' | '_parent' | '_top'

interface Props extends React.LinkHTMLAttributes<any> {
  message?: FormattedMessage.MessageDescriptor
  target?: Target
}

/**
 * Target
 * _blank: Load in a new window
 * _self:Load in the same frame as it was clicked
 * _parent: Load in the parent frameset
 * _top: Load in the full body of the window
 */
export const A = (props: Props) => {
  const { children, message, target, ...base } = props

  const formattedMessage = message ? (
    <FormattedMessage {...message} />
  ) : (
    children
  )

  return (
    <a className={scope} {...base} target={target}>
      {formattedMessage}
    </a>
  )
}
