import * as Yup from "yup";

const validationSchema = Yup.object().shape({
  CountryCode: Yup.string()
    .min(2, "Country Code must be at least 2 characters")
    .required("Country Code is required"),
  CountryName: Yup.string()
    .min(2, "Country Name must be at least 2 characters")
    .required("Country Name is required"),
  Capital: Yup.string()
    .min(2, "Capital must be at least 2 characters")
    .required("Capital is required"),
  Area: Yup.string()
    .min(2, "Area must be at least 2 characters")
    .required("Area is required"),
  Population: Yup.string()
    .min(2, "Population must be at least 2 characters")
    .required("Population is required"),
  Nationality: Yup.string()
    .min(2, "Nationality must be at least 2 characters")
    .required("Nationality is required"),
  IndependenceDate: Yup.string()
    .min(2, "Independence Date must be at least 2 characters")
    .required("Independence Date is required"),
  EconomicDevelopment: Yup.string()
    .min(2, "Economic Development must be at least 2 characters")
    .required("Economic Development is required"),
  Currency: Yup.string()
    .min(2, "Currency must be at least 2 characters")
    .required("Currency is required"),
  Continent: Yup.string()
    .min(2, "Continent must be at least 2 characters")
    .required("Continent is required"),
  AdministrativeUnits: Yup.string()
    .min(2, "Administrative Units must be at least 2 characters")
    .required("Administrative Units is required"),
  TimeZone: Yup.string()
    .min(2, "Time Zone must be at least 2 characters")
    .required("Time Zone is required"),
  OfficialLanguage: Yup.string()
    .min(2, "Official Language must be at least 2 characters")
    .required("Official Language is required"),
  image: Yup.string()
    .min(2, "Link to flag must be at least 2 characters")
    .required("Link to flag is required")
});

export default validationSchema;
