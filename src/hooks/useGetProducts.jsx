/* eslint-disable no-undef */
import { useEffect, useState } from 'react'

const useGetProducts = (API) => {
// uesState lo que hace es que nos permite crear un estado inicial y luego nos permite modificarlo
// aui estamos creando un estado inicial vacio y luego lo modificamos con setProducts que es la funcion que nos permite modificarlo
  const [products, setProducts] = useState([])

  // useEffect nos permite ejecutar codigo cuando el componente se monta o se actualiza o se desmonta
  // en este caso lo que estamos haciendo es que cuando el componente se monte se ejecute el codigo que esta dentro de useEffect
  try {
    useEffect(() => {
      async function fetchData () {
        const response = await fetch(API)
        const data = await response.json()
        setProducts(data)
      }
      fetchData()
    }, [])

    return products
  } catch (error) {
    console.log(error)
  }
}

export default useGetProducts
