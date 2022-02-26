import React from "react";
import "./FormYupValidation.css";
import { Formik, ErrorMessage, Field } from "formik";
import * as Yup from "yup";
import { number } from "yup";

const FormSchema = Yup.object().shape({
  nomeCompleto: Yup.string().required("Required"),
  idade: Yup.number().required("Required").moreThan(16),
  cpf: Yup.string().required("Required"),
  matricula: Yup.number().required("Required").isType(number),
  curso: Yup.string().required("Required"),
  endereco: Yup.string().required("Required"),
  numero: Yup.number(),
  complemento: Yup.string(),
  bairro: Yup.string().required("Required"),
  cidade: Yup.string().required("Required"),
  estado: Yup.string().required("Required"),
  cep: Yup.string().required("Required"),
});

const FormYupValidation = () => {
  const handleSubmitting = (values, { setSubmitting, setStatus }) => {
    setStatus({ isValidating: true });
    setTimeout(() => {
      console.info(JSON.stringify(values, null, 16));
      setSubmitting(false);
      setStatus({ isValidating: false });
    }, 400);
  };

  return (
    <Formik
      validationSchema={FormSchema}
      initialValues={{
        nomeCompleto: "",
        idade: "",
        cpf: "",
        matricula: "",
        curso: "",
        endereco: "",
        numero: "",
        complemento: "",
        bairro: "",
        cidade: "",
        estado: "",
        cep: "",
      }}
      onSubmit={handleSubmitting}
    >
      {({ handleChange, handleBlur, handleSubmit, isSubmitting }) => (
        <form onSubmit={handleSubmit}>
          <div className="container">
            <div className="left-half">
              <div>
                <label>NOME COMPLETO*:</label>
                <Field
                  className="outline"
                  type="text"
                  name="nomeCompleto"
                  onBlur={handleBlur}
                  onChange={handleChange}
                />
                <ErrorMessage
                  name="nomeCompleto"
                  className="error"
                  component="span"
                />
              </div>
              <div>
                <label>IDADE*:</label>
                <Field
                  className="outline"
                  type="number"
                  name="idade"
                  onBlur={handleBlur}
                  onChange={handleChange}
                />
                <ErrorMessage name="idade" className="error" component="span" />
              </div>
              <div>
                <label>CPF*:</label>
                <Field
                  className="outline"
                  type="text"
                  name="cpf"
                  onBlur={handleBlur}
                  onChange={handleChange}
                />
                <ErrorMessage name="cpf" className="error" component="span" />
              </div>
              <div>
                <label>MATRÍCULA*:</label>
                <Field
                  className="outline"
                  type="number"
                  name="matricula"
                  onBlur={handleBlur}
                  onChange={handleChange}
                />
                <ErrorMessage
                  name="matricula"
                  className="error"
                  component="span"
                />
              </div>
              <div>
                <label>CURSO*:</label>
                <Field
                  className="outline"
                  type="text"
                  name="curso"
                  onBlur={handleBlur}
                  onChange={handleChange}
                />
                <ErrorMessage name="curso" className="error" component="span" />
              </div>
              <div>
                <label>ENDEREÇO*:</label>
                <Field
                  className="outline"
                  type="text"
                  name="endereco"
                  onBlur={handleBlur}
                  onChange={handleChange}
                />
                <ErrorMessage
                  name="endereco"
                  className="error"
                  component="span"
                />
              </div>
            </div>
            <div className="right-half">
              <div>
                <label>NÚMERO:</label>
                <Field
                  className="outline"
                  type="number"
                  name="numero"
                  onBlur={handleBlur}
                  onChange={handleChange}
                />
                <ErrorMessage
                  name="numero"
                  className="error"
                  component="span"
                />
              </div>
              <div>
                <label>COMPLEMENTO:</label>
                <Field
                  className="outline"
                  type="text"
                  name="complemento"
                  onBlur={handleBlur}
                  onChange={handleChange}
                />
                <ErrorMessage
                  name="complemento"
                  className="error"
                  component="span"
                />
              </div>
              <div>
                <label>BAIRRO*:</label>
                <Field
                  className="outline"
                  type="text"
                  name="bairro"
                  onBlur={handleBlur}
                  onChange={handleChange}
                />
                <ErrorMessage
                  name="bairro"
                  className="error"
                  component="span"
                />
              </div>
              <div>
                <label>CIDADE*:</label>
                <Field
                  className="outline"
                  type="text"
                  name="cidade"
                  onBlur={handleBlur}
                  onChange={handleChange}
                />
                <ErrorMessage
                  name="cidade"
                  className="error"
                  component="span"
                />
              </div>
              <div>
                <label>ESTADO*:</label>
                <Field
                  className="outline"
                  as="select"
                  name="estado"
                  type="text"
                  onBlur={handleBlur}
                  onChange={handleChange}
                >
                  <option value="RO">RO</option>
                  <option value="AC">AC</option>
                  <option value="AM">AM</option>
                  <option value="RR">RR</option>
                  <option value="PA">PA</option>
                  <option value="AP">AP</option>
                  <option value="TO">TO</option>
                  <option value="PI">PI</option>
                  <option value="CE">CE</option>
                  <option value="RN">RN</option>
                  <option value="PB">PB</option>
                  <option value="PE">PE</option>
                  <option value="AL">AL</option>
                  <option value="SE">SE</option>
                  <option value="BA">BA</option>
                  <option value="MG">MG</option>
                  <option value="RJ">RJ</option>
                  <option value="SP">SP</option>
                  <option value="PR">PR</option>
                  <option value="SC">SC</option>
                  <option value="RS">RS</option>
                  <option value="MS">MS</option>
                  <option value="MT">MT</option>
                  <option value="GO">GO</option>
                  <option value="DF">DF</option>
                </Field>
                <ErrorMessage
                  name="estado"
                  className="error"
                  component="span"
                />
              </div>
              <div>
                <label>CEP*:</label>
                <Field
                  className="outline"
                  type="text"
                  name="cep"
                  onBlur={handleBlur}
                  onChange={handleChange}
                />
                <ErrorMessage name="cep" className="error" component="span" />
              </div>
            </div>
          </div>
          <div className="button">
            <input
              type="submit"
              className="submit"
              value="CADASTRAR"
              disabled={isSubmitting}
            />
          </div>
        </form>
      )}
    </Formik>
  );
};

export default FormYupValidation;
