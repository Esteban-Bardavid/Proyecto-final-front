import React, { useState } from "react";
import { useEffect } from "react";
//import products from "../assets/data/ProductsData";
import UseAdminProducts from '../utils/useAdminProducts';


function useProducts() {

  const { products } = UseAdminProducts();


  //const productos = products;
  const [Filter, SetFilter] = useState(products);
  const [Search, SetSearch] = useState('');

  console.log (Filter)

  const handleFilter = (e) => {
    const filterValue = e.target.value;
    SetSearch(filterValue);


    if (filterValue !== Search) {

      if (filterValue === 'Nike') {
        const filteredProducts = products.filter(
          (item) => item.marca === 'Nike');

        SetFilter(filteredProducts)
      }
      else if (filterValue === 'Adidas') {
        const filteredProducts = products.filter(
          (item) => item.marca === 'Adidas');

        SetFilter(filteredProducts)
      }
      else if (filterValue === 'Fila') {
        const filteredProducts = products.filter(
          (item) => item.marca === 'Fila');

        SetFilter(filteredProducts)
      }
      else if (filterValue === 'Reebok') {
        const filteredProducts = products.filter(
          (item) => item.marca === 'Reebok');

        SetFilter(filteredProducts)
      }
      else if (filterValue === 'Todas las marcas') {
        SetFilter(products)
      }
      else if (filterValue === 'Running') {
        const filteredProducts = products.filter(
          (item) => item.categoria === 'Running');

        SetFilter(filteredProducts)
      }
      else if (filterValue === 'Footbal') {
        const filteredProducts = products.filter(
          (item) => item.categoria === 'Footbal');

        SetFilter(filteredProducts)
      }
      else if (filterValue === 'Trainning') {
        const filteredProducts = products.filter(
          (item) => item.categoria === 'Trainning');

        SetFilter(filteredProducts)
      }
      else if (filterValue === 'Outdoor') {
        const filteredProducts = products.filter(
          (item) => item.categoria === 'Trainning');

        SetFilter(filteredProducts)
      }
      else if (filterValue === 'Clasicas') {
        const filteredProducts = products.filter(
          (item) => item.categoria === 'Clasicas');

        SetFilter(filteredProducts)
      }
      else if (filterValue === 'Ojotas') {
        const filteredProducts = products.filter(
          (item) => item.categoria === 'Ojotas');

        SetFilter(filteredProducts)
      }
      else if (filterValue === 'Todas las marcas') {

        SetFilter(products)
      }
      else (
        SetFilter(products)
      )
    }
    else (
      SetFilter(products)
    )
  };

  // console.log(products)
  // console.log(Filter)

  return {
    handleFilter,
    // productos,
    Filter,
  }
}
export default useProducts;