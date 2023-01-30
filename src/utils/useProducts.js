import { useState } from "react";
import { useEffect } from "react";
//import products from "../assets/data/ProductsData";
import UseAdminProducts from '../utils/useAdminProducts';
import axios from "axios";


function useProducts() {

// Enlace con Pagina adminProducts:
  const { url } = UseAdminProducts();
  const [products, setproducts] = useState([]);

  useEffect(() => {
    GetProducts()
  }, []);

  async function GetProducts() {
    let getProducts = await axios.get(`${url}/adminProducts`);
    setproducts(getProducts.data);
    SetFilter(getProducts.data.filter((item, i) => (item.publicado > 0 && item.sex == 'Mujer'))
    );
  }

  const productsWoman = products.filter((item, i) => (item.publicado > 0 && item.sex == 'Mujer'))

//const productos = products; (se reemplaza => productos, por => productsWoman)
  const [Filter, SetFilter] = useState([]);
  const [Search, SetSearch] = useState('');


// Aplico los filtros a productsWoman:
  const handleFilter = (e) => {

    const filterValue = e.target.value;
    SetSearch(filterValue);


    if (filterValue !== Search) {

      if (filterValue === 'Nike') {
        const filteredProducts = productsWoman.filter(
          (item) => item.marca === 'Nike');

        SetFilter(filteredProducts)
      }
      else if (filterValue === 'Adidas') {
        const filteredProducts = productsWoman.filter(
          (item) => item.marca === 'Adidas');

        SetFilter(filteredProducts)
      }
      else if (filterValue === 'Fila') {
        const filteredProducts = productsWoman.filter(
          (item) => item.marca === 'Fila');

        SetFilter(filteredProducts)
      }
      else if (filterValue === 'Reebok') {
        const filteredProducts = productsWoman.filter(
          (item) => item.marca === 'Reebok');

        SetFilter(filteredProducts)
      }
      else if (filterValue === 'Todas las marcas') {
        SetFilter(productsWoman)
      }
      else if (filterValue === 'Running') {
        const filteredProducts = productsWoman.filter(
          (item) => item.categoria === 'Running');

        SetFilter(filteredProducts)
      }
      else if (filterValue === 'Footbal') {
        const filteredProducts = productsWoman.filter(
          (item) => item.categoria === 'Footbal');

        SetFilter(filteredProducts)
      }
      else if (filterValue === 'Trainning') {
        const filteredProducts = productsWoman.filter(
          (item) => item.categoria === 'Trainning');

        SetFilter(filteredProducts)
      }
      else if (filterValue === 'Outdoor') {
        const filteredProducts = productsWoman.filter(
          (item) => item.categoria === 'Outdoor');

        SetFilter(filteredProducts)
      }
      else if (filterValue === 'Clasicas') {
        const filteredProducts = productsWoman.filter(
          (item) => item.categoria === 'Clasicas');

        SetFilter(filteredProducts)
      }
      else if (filterValue === 'Ojotas') {
        const filteredProducts = productsWoman.filter(
          (item) => item.categoria === 'Ojotas');

        SetFilter(filteredProducts)
      }
      else if (filterValue === 'Todas las categorias') {

        SetFilter(productsWoman)
      }
      else (
        SetFilter(productsWoman)
      )
    }
    else (
      SetFilter(productsWoman)
    )
  };

  return {
    handleFilter,
    //productos,
    Filter,
    productsWoman
  }
}
export default useProducts;