import { Grid, IconButton, IconButtonProps, Paper } from '@components'
import { React } from '@lib'

import s from './CardSlim.scss'

// interface Props extends IconProps { }

export const CardSlim = (props: IconButtonProps) => (
  <Paper className={s.scope}>
    <Grid container justify="center" alignItems="center">
      <Grid item xs={6}>
        asd
      </Grid>
      <Grid item xs={6}>
        <Grid />
        <Grid>
          <IconButton
            handleClick={props.handleClick}
            nameIcon={props.nameIcon}
          />
        </Grid>
      </Grid>
    </Grid>
  </Paper>
)
