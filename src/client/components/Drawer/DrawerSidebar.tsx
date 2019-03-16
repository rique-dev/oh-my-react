import { React } from '@lib'
import {
  createMuiTheme,
  Drawer,
  DrawerProps,
  MuiThemeProvider,
  withStyles,
} from '@lib/material-ui'

export const styles = () => ({
  modal: {
    top: '72px',
    left: '72px',
  },
  paper: {
    top: '72px',
    left: '72px',
  },
})

const theme = createMuiTheme({
  overrides: {
    MuiBackdrop: {
      root: {
        top: '72px',
        left: '72px',
      },
    },
  },
})

export const DrawerSidebar = withStyles(styles)<any>((props: DrawerProps) => (
  <MuiThemeProvider theme={theme}>
    <Drawer {...props} />
  </MuiThemeProvider>
))
