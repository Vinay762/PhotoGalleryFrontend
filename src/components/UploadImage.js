import React, {useState} from 'react'
import ProgressBar from './ProgressBar.js'
import './myStyles.css'


const UploadImage = ({setReload}) => {
    const type = ['image/jpeg', 'image/png']
    const [values, setValues] = useState({
        file:"",
        formData: new FormData(),
        error:""
    })

    const {file, formData, error} = values;

    const handleChange = (e) => {
        const value = e.target.files[0];
        if(value && type.includes(value.type)){
            setValues({...values, file : value})
            formData.set("image", value)
        }
    }

  return (
    <form>
        <h1>Photo Gallery</h1>
        <label>
            <input onChange={(e) =>  handleChange(e)} type="file" placeholder= "choose File"/>
            <span>Add</span>
        </label>

        {file && <ProgressBar setReload={setReload} values = {values} setValues={setValues}/>}
        {error && <h1 className='error'>{error}</h1>}
    </form>
  )
}

export default UploadImage