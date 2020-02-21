import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import { Field } from "formik"
import FieldWrapper from "./FieldWrapper"
import Input from "./Input"

const required = value => {
  if (!value || !value.length) return "Required"
  return null
}

const FormattedError = styled.span`
  color: red;
  font-size: 0.75rem;
`

const ErrorMessage = ({ form, field: { name } }) => {
  if (!form.submitCount) return null
  if (!form.errors[name]) return null

  return <FormattedError> * {form.errors[name]}</FormattedError>
}

const FormField = ({
  name,
  label,
  validate,
  component: Component,
  ...props
}) => (
  <Field
    name={name}
    validate={validate}
    render={({ form, field }) => (
      <FieldWrapper>
        <label htmlFor={name}>
          {label}
          <ErrorMessage form={form} field={field} />
        </label>
        <Component {...field} placeholder={label} {...props} />
      </FieldWrapper>
    )}
  />
)

FormField.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  component: PropTypes.object,
  validate: PropTypes.func,
}

FormField.defaultProps = {
  component: Input,
  validate: required,
}

export default FormField
