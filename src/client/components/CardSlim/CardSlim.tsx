import {
  Avatar,
  Grid,
  IconButton,
  IconButtonProps,
  Paper,
  Typography,
  Wrapper,
} from '@components'
import { isCssColor, isDefined, React } from '@lib'

import s from './CardSlim.scss'

interface Props extends IconButtonProps {
  color?: string
  bgColor?: string
  title: string
  subtitle: string
  src?: string
  alt?: string
  infos?: string[]
}

export const CardSlim = (props: Props) => {
  const { handleClick, nameIcon, color, bgColor, ...p } = props
  const { title, subtitle, infos, src, alt } = p

  const _color = isDefined(color) && isCssColor(color) ? color : 'inherit'
  const _bgColor =
    isDefined(bgColor) && isCssColor(bgColor) ? bgColor : 'inherit'

  return (
    <Paper className={s.scope}>
      <Grid container justify="center" alignItems="center">
        <Grid item xs={6} style={{ backgroundColor: _bgColor }}>
          <Wrapper padding={12}>
            <Grid container wrap="nowrap" spacing={8}>
              <Grid item>
                <Avatar withBorder className={s.avatar} src={src} alt={alt} />
              </Grid>
              <Grid item zeroMinWidth>
                <Typography style={{ color: '#fff' }} variant="body2" noWrap>
                  {title}
                </Typography>
                <Typography style={{ color: _color }} variant="caption" noWrap>
                  {subtitle}
                </Typography>
              </Grid>
            </Grid>
          </Wrapper>
        </Grid>
        <Grid item xs={6}>
          <Wrapper padding={12}>
            <Grid container justify="space-between" spacing={8}>
              <Grid item>
                {infos &&
                  infos.map((info: string, index: number) => (
                    <Typography
                      key={index}
                      style={{ color: '#4976ab' }}
                      variant="caption"
                    >
                      {info}
                    </Typography>
                  ))}
              </Grid>
              <Grid item>
                <IconButton handleClick={handleClick} nameIcon={nameIcon} />
              </Grid>
            </Grid>
          </Wrapper>
        </Grid>
      </Grid>
    </Paper>
  )
}
