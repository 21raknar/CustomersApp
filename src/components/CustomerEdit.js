import React from "react";
import PropTypes from "prop-types";
import { reduxForm, Field } from "redux-form";
import { setPropsAsInitial } from "../helpers/setPropsAsInitial";
import CustomerActions from "./CustomerActions";

const isNumber = (value) =>
  isNaN(Number(value)) && "El campo debe ser un numero";

const validate = (values) => {
  const error = {};

  if (!values.name) {
    error.name = "El campo nombre es requerido";
  }

  if (!values.dni) {
    error.dni = "El dni es un campo requerido";
  }

  return error;
};

const MyField = ({ input, meta, type, label, name }) => (
  <div>
    <label htmlFor={name}>{label}</label>
    <input {...input} type={!type ? "text" : type} />
    {meta.touched && meta.error && <span>{meta.error}</span>}
  </div>
);

const CustomerEdit = ({ name, age, dni, handleSubmit, submitting, onBack }) => {
  return (
    <div>
      <h2>Edición del cliente</h2>
      <form onSubmit={handleSubmit}>
        <Field
          name="name"
          component={MyField}
          type="text"
          label="Nombre"
        ></Field>
        <Field
          name="dni"
          component={MyField}
          type="text"
          validate={isNumber}
          label="Dni"
        ></Field>
        <Field
          name="age"
          component={MyField}
          type="number"
          validate={isNumber}
          label="Edad"
        ></Field>

        <CustomerActions>
          <button type="submit" disabled={submitting}>
            Aceptar
          </button>
          <button onClick={onBack}>Cancelar</button>
        </CustomerActions>
      </form>
    </div>
  );
};

CustomerEdit.propTypes = {
  name: PropTypes.string,
  dni: PropTypes.string,
  age: PropTypes.number,
  onBack: PropTypes.func.isRequired,
};

export default setPropsAsInitial(
  reduxForm({ form: "CustomerEdit", validate })(CustomerEdit)
);
