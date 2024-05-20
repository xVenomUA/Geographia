import { useEffect} from "react";

import { useDispatch } from "react-redux";


import { FilmList } from "../../components/CountryList/CountryList";
import { SearchBar } from "../../components/SearchBar/SearchBar";
import { getCountry } from "../../redux/Films/operation";

const Home = () => {
  const dispatch = useDispatch(); 

  useEffect(()=> { 
    dispatch(getCountry()); 
  }, [dispatch])

  return (
    <main className="">
      <div className="container">
        <SearchBar />
        <FilmList /></div>
    </main>
  );
};
export default Home;
