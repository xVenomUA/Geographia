import { useDispatch, useSelector } from "react-redux";

import styles from "./DetailsCountry.module.css";

import { NotFound } from "../NotFound/NotFound";

import { selectCountryById } from "../../redux/Films/selector";
import { useNavigate } from "react-router-dom";
import { deleteCountry } from "../../redux/Films/operation";

export const DetailsCountry = () => {
  const data = useSelector(selectCountryById);
const Navigate = useNavigate(); 
const dispatch = useDispatch ();  
  const {
    AdministrativeUnits,
    Area,
    Capital,
    Continent,
    CountryCode,
    CountryName,
    Currency,
    EconomicDevelopment,
    IndependenceDate,
    Nationality,
    OfficialLanguage,
    Population,
    TimeZone,
    image,
  } = data;

  if (!data) {
    return <NotFound />;
  }
  const onClickDelete =  () =>{ 
     dispatch(deleteCountry(data.id));  
      Navigate("/"); 
  }

  return (
    <>
        <h1 className={styles.title}>Country Information</h1>
      <div className={styles.countryInfo}>
        <div className={styles.div}>
          <div className={styles.info}> 
            <div className={styles.field}>
              <label>Country Code:</label>
              <span>{CountryCode}</span>
            </div>

            <div className={styles.field}>
              <label>Country Name:</label>
              <span>{CountryName}</span>
            </div>

            <div className={styles.field}>
              <label>Capital:</label>
              <span>{Capital}</span>
            </div>

            <div className={styles.field}>
              <label>Area:</label>
              <span>{Area} km²</span>
            </div>

            <div className={styles.field}>
              <label>Population:</label>
              <span>{Population}</span>
            </div>

            <div className={styles.field}>
              <label>Nationality:</label>
              <span>{Nationality}</span>
            </div>

            <div className={styles.field}>
              <label>Independence Date:</label>
              <span>{IndependenceDate}</span>
            </div>
          </div>
          <div className={styles.info}>
            <div className={styles.field}>
              <label>Economic Development:</label>
              <span>{EconomicDevelopment}</span>
            </div>

            <div className={styles.field}>
              <label>Currency:</label>
              <span>{Currency}</span>
            </div>

            <div className={styles.field}>
              <label>Continent:</label>
              <span>{Continent}</span>
            </div>

            <div className={styles.field}>
              <label>Administrative Units:</label>
              <span>{AdministrativeUnits}</span>
            </div>
            <div className={styles.field}>
              <label>Time Zone:</label>
              <span>{TimeZone}</span>
            </div>

            <div className={styles.field}>
              <label>Official Language:</label>
              <span>{OfficialLanguage}</span>
            </div>
          </div>
        </div>
        <div className={styles.field}>
          <img src={image} alt="Flag of Canada" className={styles.flag} />
        </div>
      </div>

      <button type="button" onClick={onClickDelete} className={styles.btn}>Delete</button>
    </>
  );
};
