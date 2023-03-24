import React from 'react'
import { getImageUrl } from '../apicalls'
import './myStyles.css'

const Model = ({selectedImg, setSelectedImg}) => {
  return (
    <div className='model' onClick={(e) => {
        if(e.target.classList.contains('model')){
            setSelectedImg('')
        }
    }}>
        <img src={getImageUrl(selectedImg)}/>
    </div>
  )
}

export default Model