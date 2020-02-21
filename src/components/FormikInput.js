import React from "react"
import PropTypes from "prop-types"
import Input from "./Input"

const FormikInput = ({ innerComponent: Component, field, ...props }) => (
  <Component {...field} {...props} />
)

FormikInput.propTypes = {
  innerComponent: PropTypes.object, // eslint-disable-line react/forbid-prop-types
  field: PropTypes.shape({
    onChange: PropTypes.func.isRequired,
  }).isRequired,
}

FormikInput.defaultProps = {
  innerComponent: Input,
}

export default FormikInput
