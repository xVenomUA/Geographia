import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { DetailsCountry } from "../../components/DetailsCountry/DetailsCountry";
import { getCountryById } from "../../redux/Films/operation";

import css from './CountryDetails.module.css'
const FilmDetails = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCountryById(id));
  }, [id, dispatch]);
  return (
    <main className={css.main}>
      <div className="container">
        <DetailsCountry />
      </div>
    </main>
  );
};
export default FilmDetails;
