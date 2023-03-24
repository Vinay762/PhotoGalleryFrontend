import React, {useEffect} from 'react'
import CircularProgress from '@material-ui/core/CircularProgress'
import { uploadData } from '../apicalls'
import './myStyles.css'

const ProgressBar = ({values, setValues, setReload}) => {

    useEffect(()  => {
        uploadData(values.formData).then(response => {
            if(response.error){
                setValues({...values, error : response.error, file:""})
            }else{
                setValues({...values, error : "", file:""})
                setReload(true)
            }
        })
    },[])
  return (
    <div>
        <CircularProgress color='secondary' />
    </div>
  )
}

export default ProgressBar