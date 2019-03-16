import { React } from '@lib'
import { Typography as _Typography, TypographyProps } from '@lib/material-ui'

interface Props extends TypographyProps {
  height?: number
}

export const Typography = ({ children, height, ...base }: Props) => (
  <_Typography style={{ height }} {...base}>
    {children}
  </_Typography>
)
