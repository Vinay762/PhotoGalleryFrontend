import { CircularProgress } from '@material-ui/core';
import React, {useState, useEffect} from 'react'
import { getImages,getImageUrl } from '../apicalls'
import './myStyles.css';

const ImageGrid = ({setSelectedImg, reload, setReload}) => {
    const [values, setValues] = useState({
        images : [],
        error : ""
    })

    const {images, error} = values;

    useEffect(() => {
        if(reload){
        getImages().then(response => {
            if(response.error){
                setValues({...values, error:response.error})
            }else{
                setValues({...values, images : response, error : ""})
            }
            setReload(false);
        })
    }
    })
  return (
    <div className='images'>
        
            {error && <h1 className='error'>{error}</h1>}
            {images.length > 0 && images.map((data,index) => (
                <div key={data?._id} className='img-wrap' onClick={()=>setSelectedImg(data?._id)}>
                    <img src={getImageUrl(data?._id)} />
                </div>
            ))}
            {images.length == 0 && !error && (<CircularProgress color="secondary"/>)}
        
    </div>
  )
}

export default ImageGrid