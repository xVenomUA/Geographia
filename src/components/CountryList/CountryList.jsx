import { useSelector } from "react-redux";

// import { selectDataFilter } from "../../redux/Films/selector";


import css from "./CountryList.module.css"; 
import { selectDataFilter } from "../../redux/Films/selector";
import { CountryContainer } from "../CountryContainer/CountryContainer";

export const FilmList = () => {
  const data = useSelector(selectDataFilter);
  return (
    <ul className={css.list}>
      {data.length > 0 &&
        data.map((country) => {
          return (
            <li key={country.id} className={css.li}>
              <CountryContainer key={country.id} dataCountry={country} />
            </li>
          );
        })}
    </ul>
  );
};
