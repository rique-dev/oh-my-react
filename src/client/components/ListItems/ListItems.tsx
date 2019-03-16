import { React } from '@lib'
import { List, ListItem, ListItemIcon, ListItemText } from '@lib/material-ui'
import { Icon, IconProps, Typography } from '..'

interface BaseProps {
  text: string
  color?: string
  icon?: IconProps
}

interface Props {
  list: BaseProps[]
}

export const ListItems = ({ list }: Props) => (
  <List component="nav">
    {list &&
      list.map((baseProps: BaseProps, index: number) => {
        const { color, text, icon } = baseProps

        const renderIcon = icon ? (
          <ListItemIcon>
            <Icon color={color} {...icon} />
          </ListItemIcon>
        ) : (
          ''
        )

        const Text = () => (
          <Typography variant="subheading" style={{ color }}>
            {text}
          </Typography>
        )

        const styleListItemText = {
          padding: 0,
        }

        return (
          <ListItem key={index} button>
            {renderIcon}
            <ListItemText style={styleListItemText} primary={<Text />} />
          </ListItem>
        )
      })}
  </List>
)
