import { Grid, Icon, Paper, Typography, Wrapper } from '@components'
import { React } from '@lib'

interface Props {
  nameIcon: string
  text: string
  colorIcon?: string
}

export const CardLive = (props: Props) => {
  const { nameIcon, colorIcon, text } = props

  return (
    <Paper>
      <Wrapper padding={24}>
        <Grid container direction="column" alignItems="center" justify="center">
          <Grid item>
            <Wrapper padding={8}>
              <Icon nameIcon={nameIcon} double color={colorIcon} />
            </Wrapper>
          </Grid>
          <Grid item xs zeroMinWidth>
            <Typography height={50} variant="caption" align="center">
              {text}
            </Typography>
          </Grid>
        </Grid>
      </Wrapper>
    </Paper>
  )
}
