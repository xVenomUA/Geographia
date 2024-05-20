import { Formik, Form, Field, ErrorMessage } from "formik";
import { nanoid } from "nanoid";

import { useDispatch } from "react-redux";

import css from "./FormCountry.module.css";
import toast from "react-hot-toast";
import photo from "../../img/film.jpg";

import validationSchema from "../../helpers/validationSchema";
import { useNavigate } from "react-router-dom";
import { addCountry } from "../../redux/Films/operation";

const initialValues = {
  CountryCode: '',
  CountryName: '',
  Capital: '',
  Area: '',
  Population: '',
  Nationality: '',
  IndependenceDate: '',
  EconomicDevelopment: '',
  Currency: '',
  Continent: '',
  AdministrativeUnits: '',
  TimeZone: '',
  OfficialLanguage: '',
  image: ''
};

export const FormCountry = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleSubmit = (values, actions) => {
    const newFilm = {
      id: nanoid(),
      ...values,
    };
    dispatch(addCountry(newFilm))
      .unwrap()
      .then(() => {
        toast.success("Film added");
        setTimeout(() => {  
          navigate("/");
        }, 500); 
      })
      .catch((error) => {
        toast.error(`Error: ${error.message}......Sorry, try again`);
      });
    actions.resetForm();
  };
  return (
    <div className={css.formdiv}>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
      >
        <Form className={css.form}>
          <h1 className={css.title}>Add new country</h1>
          <div className={css.firstcont}>
            <div className={css.contFil}>
              <label htmlFor="coutrycode">Country Code</label>
              <Field
                id="coutrycode"
                name="CountryCode"
                type="text"
                className={css.input}
              />
              <ErrorMessage
                name="CountryCode"
                component="span"
                className={css.error}
              />
            </div>
            <div className={css.contFil}>
              <label htmlFor="CountryName">Country: </label>
              <Field
                id="CountryName"
                name="CountryName"
                type="text"
                className={css.input}
              />
              <ErrorMessage
                name="CountryName"
                component="span"
                className={css.error}
              />
            </div>
          </div>
          <div className={css.firstcont}>
            <div className={css.contFil}>
              <label htmlFor="Capital">Capital</label>
              <Field
                id="Capital"
                name="Capital"
                type="text"
                className={css.input}
              />
              <ErrorMessage
                name="Capital"
                component="span"
                className={css.error}
              />
            </div>
            <div className={css.contFil}>
              <label htmlFor="Area">Area</label>
              <Field
                id="Area"
                name="Area"
                type="text"
                className={css.input}
              />
              <ErrorMessage
                name="Area"
                component="span"
                className={css.error}
              />
            </div>
          </div>
          <div className={css.firstcont}>
            <div className={css.contFil}>
              <label htmlFor="Population">Population</label>
              <Field
                id="Population"
                name="Population"
                type="text"
                className={css.input}
              />
              <ErrorMessage
                name="Population"
                component="span"
                className={css.error}
              />
            </div>
            <div className={css.contFil}>
              <label htmlFor="Nationality">Nationality: </label>
              <Field
                id="Nationality"
                name="Nationality"
                type="text"
                className={css.input}
              />
              <ErrorMessage
                name="Nationality"
                component="span"
                className={css.error}
              />
            </div>
          </div>
          <div className={css.firstcont}>
            <div className={css.contFil}>
              <label htmlFor="IndependenceDate">Independence Date</label>
              <Field
                id="IndependenceDate"
                name="IndependenceDate"
                type="text"
                className={css.input}
              />
              <ErrorMessage
                name="IndependenceDate"
                component="span"
                className={css.error}
              />
            </div>
            <div className={css.contFil}>
              <label htmlFor= "EconomicDevelopment">Economic Development</label>
              <Field
                id= "EconomicDevelopment"
                name="EconomicDevelopment"
                type="text"
                className={css.input}
              />
              <ErrorMessage
                name="EconomicDevelopment"
                component="span"
                className={css.error}
              />
            </div>
          </div>
          <div className={css.firstcont}>
            <div className={css.contFil}>
              <label htmlFor="Currency">Currency</label>
              <Field
                id="Currency"
                name="Currency"
                type="text"
                className={css.input}
              />
              <ErrorMessage
                name="Currency"
                component="span"
                className={css.error}
              />
            </div>
            <div className={css.contFil}>
              <label htmlFor="Continent">Continent</label>
              <Field
                id="Continent"
                name="Continent"
                type="text"
                className={css.input}
              />
              <ErrorMessage
                name="Continent"
                component="span"
                className={css.error}
              />
            </div>
          </div>
          <div className={css.firstcont}>
            <div className={css.contFil}>
              <label htmlFor="AdministrativeUnits">Administrative Units</label>
              <Field
                id="AdministrativeUnits"
                name="AdministrativeUnits"
                type="text"
                className={css.input}
              />
              <ErrorMessage
                name="AdministrativeUnits"
                component="span"
                className={css.error}
              />
            </div>
            <div className={css.contFil}>
              <label htmlFor= "TimeZone">TimeZone</label>
              <Field
                id= "TimeZone"
                name="TimeZone"
                type="text"
                className={css.input}
              />
              <ErrorMessage
                name="TimeZone"
                component="span"
                className={css.error}
              />
            </div>
          </div>
          <div className={css.contFil}>
            <label htmlFor="OfficialLanguage">Official Language</label>
            <Field
              id="OfficialLanguage"
              name="OfficialLanguage"
              type="text"
              className={css.input}
            />
            <ErrorMessage name="OfficialLanguage" component="span" className={css.error} />
          </div>
          <div className={css.contFil}>
            <label htmlFor="image">Link to flag</label>
            <Field
              id="image"
              name="image"
              type="text"
              className={css.input}
            />
            <ErrorMessage name="image" component="span" className={css.error} />
          </div>
          <button type="submit" className={css.btn}>
            Submit
          </button>
        </Form>
      </Formik>
      <img src={photo} alt="film" className={css.photo} />
    </div>
  );
};
