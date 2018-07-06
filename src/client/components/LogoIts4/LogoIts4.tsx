import { its4, itsLogo, itsLogoWhite } from '@images'
import { React } from '@lib'
import { Grid } from '@lib/material-ui'
import { Image } from '..'
import s from './LogoIts4.scss'

interface Props {
  color?: 'white'
}

export const LogoIts4 = ({ color }: Props) => (
  <Grid container wrap="nowrap">
    <Image src={its4} width={24} className={s.marginSafeLogo} />
    <Image src={color === 'white' ? itsLogoWhite : itsLogo} width={99} />
  </Grid>
)
