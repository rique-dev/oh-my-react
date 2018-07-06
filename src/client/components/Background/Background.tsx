import { classNames, React } from '@lib'
import s from './Background.scss'

interface Props extends React.Props<any> {
  type: 'Shape' // TODO: Alterar este nome
}

export const Background = ({ children, type }: Props) => {
  const styleBackground = classNames({
    [s.shape]: type === 'Shape',
  })

  return (
    <div className={s.fullContent}>
      <div className={styleBackground} />
      <div className={s.wrapperCenter}>{children}</div>
    </div>
  )
}
