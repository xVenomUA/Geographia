import { useSelector } from "react-redux";

import css from "./Favourite.module.css";
import clsx from "clsx";

import { selectCountry, selectFavourite } from "../../redux/Films/selector";

import { CountryContainer } from "../../components/CountryContainer/CountryContainer";


const Favourite = () => {
  const listCountry = useSelector(selectCountry);
  const idFavourite = useSelector(selectFavourite);
  const data = listCountry.filter((country) => idFavourite.includes(country.id));
  return (
    <main
      className={clsx({
        [css.main]: data.length === 0,
      })}
    >
      <div className="container">
        <ul className={css.list}>
          {data.length > 0 ? (
            data.map((country) => {
              return (
                <li key={country.id} className={css.li}>
                  <CountryContainer key={country.id} dataCountry={country} />
                </li>
              );
            })
          ) : (
            <h1 className={css.text}>No favorite movies</h1>
          )}
        </ul>
      </div>
    </main>
  );
};
export default Favourite;
