import { React } from '@lib'
import { Input } from '@lib/material-ui'

import { BaseField, BaseFieldProps } from '..'

interface Props extends BaseFieldProps {
  value?: [string] | [number] | string | number
  handleChange?: React.ChangeEventHandler<HTMLInputElement>
}

const TextField = (props: Props) => {
  const { value, handleChange, ...base } = props

  return (
    <BaseField {...base}>
      <Input id={base.id} value={value} onChange={handleChange} />
    </BaseField>
  )
}

export { TextField }
