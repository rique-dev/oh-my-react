import { React } from '@lib'
import { Button } from '@lib/material-ui'

interface Props extends React.Props<any> {}

export const FloatButton = ({ children }: Props) => (
  <Button variant="fab"> {children} </Button>
)
