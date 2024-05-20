import { createSelector } from "@reduxjs/toolkit";

export const selectCountry = (state) => state.country.items;
export const selectCountryById = (state) => state.country.itemsById;
export const selectFavourite = (state) => state.favouriteId.id;
export const selectFilter = (state) => state.filter;

export const selectDataFilter = createSelector(
  [selectCountry, selectFilter],
  (country, filter) => {
    if (filter === "") {
      return country;
    }
    const filterData = country.filter((data) =>
      data.CountryName.toLowerCase().includes(filter.trim().toLowerCase())
    );
    return filterData;
  }
);
