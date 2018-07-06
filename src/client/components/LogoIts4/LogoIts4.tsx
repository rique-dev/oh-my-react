import { its4, itsLogo } from '@images'
import { classNames, React } from '@lib'
import { Grid } from '@lib/material-ui'
import { Image } from '..'
import s from './LogoIts4.scss'

interface Props {
  color?: 'white'
}

export const LogoIts4 = ({ color }: Props) => {
  const classes = classNames({
    [s.svgWhite]: color === 'white',
  })

  return (
    <Grid container wrap="nowrap">
      <Image src={its4} width={24} className={s.marginSafeLogo} />
      <Image className={classes} src={itsLogo} width={99} />
    </Grid>
  )
}
