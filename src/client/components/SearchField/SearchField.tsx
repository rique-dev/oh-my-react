import { BaseField, BaseFieldProps, IconButton } from '@components'
import { KeyMap } from '@constants'
import { Fragment, noop, React } from '@lib'
import { Input, InputAdornment } from '@lib/material-ui'

interface Props extends BaseFieldProps {
  value?: [string] | [number] | string | number
  handleChange?: React.ChangeEventHandler<HTMLInputElement>
  onRequest?():
    | React.MouseEventHandler<HTMLInputElement>
    | React.KeyboardEventHandler<HTMLInputElement>
}

export const SearchField = (props: Props) => {
  const { handleChange, onRequest, value, ...base } = props

  const handleKeyUp = (e: React.KeyboardEvent) => {
    if ((e.charCode === KeyMap.ENTER || e.key === 'Enter') && onRequest) {
      onRequest()
    }
  }

  return (
    <Fragment>
      <BaseField {...base}>
        <Input
          id={base.id}
          value={value}
          onKeyUp={handleKeyUp}
          onChange={handleChange}
          endAdornment={
            <InputAdornment position="end">
              <IconButton
                handleClick={() => noop}
                nameIcon="search"
                size="small"
              />
              {/* <IconButton
                  handleClick={() => noop}
                  nameIcon="cross"
                  size="small"
                /> */}
            </InputAdornment>
          }
        />
      </BaseField>
    </Fragment>
  )
}
