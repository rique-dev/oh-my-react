import { React } from '@lib'
import { FormControl, FormHelperText, InputLabel } from '@lib/material-ui'
import s from './BaseField.scss'

export interface BaseFieldProps extends React.Props<any> {
  id: string
  label: string
  hasError?: boolean
  helperText?: string
  isDisabled?: boolean
}

export const BaseField = ({
  id,
  helperText,
  hasError,
  isDisabled,
  label,
  children,
}: BaseFieldProps) => {
  const helper = helperText ? <FormHelperText>{helperText}</FormHelperText> : ''

  return (
    <FormControl className={s.scope} error={hasError} disabled={isDisabled}>
      <InputLabel htmlFor={id}>{label}</InputLabel>
      {children}
      {helper}
    </FormControl>
  )
}
