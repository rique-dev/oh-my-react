import { React } from '@lib'
import { PasswordField as InputPassword } from '@lib/material-ui'
import { BaseField, BaseFieldProps } from '..'

interface Props extends BaseFieldProps {
  value?: [string] | [number] | string | number
  handleChange?: React.ChangeEventHandler<HTMLInputElement>
}

const PasswordField = (props: Props) => {
  const { value, handleChange, ...base } = props

  return (
    <BaseField {...base}>
      <InputPassword id={base.id} onChange={handleChange} value={value} />
    </BaseField>
  )
}

export { PasswordField }
