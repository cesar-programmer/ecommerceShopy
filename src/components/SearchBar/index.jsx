import React, { useContext } from 'react'
import CartContext from '../../context'
import { CForm, CFormInput } from '@coreui/react'

function SearchBar () {
  const context = useContext(CartContext)

  return (
    <CForm>
      <CFormInput
        id="exampleFormControlInput1"
        placeholder="🔎 Search"
        onChange={(e) => context.handleSearch(e)}
        value={context.search}
      />
    </CForm>
  )
}

export default SearchBar
