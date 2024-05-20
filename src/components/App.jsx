import { Suspense, lazy } from "react";
import { Route, Routes } from "react-router-dom";

import { Layout } from "./Layout/Layout";
import { Loader } from "./Loader/Loader";
import { NotFound } from "./NotFound/NotFound";
import ReactAlarm from "./ReactAlarm/ReactAlarm";

const Home = lazy(() => import("../pages/Home/Home"));
const Favourite = lazy(() => import("../pages/Favourite/Favourite"));
const Share = lazy(() => import("../pages/Share/Share"));
const CountryDetails = lazy(() =>
  import("../pages/CountryDetails/CountryDetails")
);

export const App = () => {
  return (
    <>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/favourite" element={<Favourite />} />
            <Route path="/share" element={<Share />} />
            <Route path="country/:id" element={<CountryDetails />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </Suspense>

      <ReactAlarm />
    </>
  );
};
