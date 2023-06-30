import React from 'react'
import { CCard, CCardBody, CCardImage, CCardText, CButton } from '@coreui/react'

const ReactImg = 'https://images.pexels.com/photos/5081400/pexels-photo-5081400.jpeg'

function Card () {
  return (
    <CCard style={{ width: '14rem', height: '17rem' }}>
      <CCardImage orientation="top" src={ReactImg} style={{ height: '200px', objectFit: 'cover', cursor: 'pointer' }} />
      <CCardBody>
        <CCardText style={{ fontSize: '16px', fontWeight: 'bold' }}>
          Headphones
        </CCardText>
        <CCardText style={{ fontSize: '14px', marginBottom: '10px' }}>
          $300
        </CCardText>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <CButton color="secondary" variant="outline" size="sm">
            Add to Cart
          </CButton>
          <span style={{ fontSize: '14px', color: 'gray' }}>
          Electronics
          </span>
        </div>
      </CCardBody>
    </CCard>
  )
}

export default Card
