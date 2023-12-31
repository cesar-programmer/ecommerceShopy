import React, { useContext } from 'react'
import { COffcanvas, COffcanvasBody, COffcanvasHeader, COffcanvasTitle, CCloseButton, CImage } from '@coreui/react'
import CartContext from '../../context'

function Detalles () {
  const context = useContext(CartContext)
  const setVisible = context.setVisible
  const item = context.selectedItem

  // si la propiedad images no existe en el objeto item, retorna null para evitar errores
  // if (!item.images) {
  //   return null
  // }
  // esto es una salucion cunado no se tiene el objeto completo, pero en este caso si se tiene el objeto completo y esta propiedad no existe, por lo tanto se puede usar el operador de encadenamiento opcional
  // dentro de un array se puede usar el operador de encadenamiento opcional para evitar errores
  return (
    <COffcanvas placement="start" scroll={true} visible={context.visible} onHide={() => setVisible(false)}>
      <COffcanvasHeader className="bg-gray-200">
        <COffcanvasTitle className="text-lg font-semibold">{item.title}</COffcanvasTitle>
        <CCloseButton className="text-gray-500" onClick={() => setVisible(false)} />
      </COffcanvasHeader>
      <COffcanvasBody className=" items-center justify-center p-4">
        <CImage rounded src={item.image} style={{ height: '230px', width: '230px' }} className="mb-5 mx-auto" />
        <div className="text-center">
          <p className="text-gray-800 font-medium mb-2">${item.price}</p>
          <p className="text-gray-600">{item.description}</p>
        </div>
      </COffcanvasBody>
    </COffcanvas>
  )
}

export default Detalles
