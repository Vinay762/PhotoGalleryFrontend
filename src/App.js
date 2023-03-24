import React, {useState} from 'react'
import UploadImage from './components/UploadImage'
import ImageGrid from './components/ImageGrid'
import Model from './components/Model'


const App = () => {
  const [selectedImg, setSelectedImg] = useState('');
  const [reload, setReload] = useState(true);
  return (
    <div>
      <UploadImage setReload={setReload}/>
      <ImageGrid setReload={setReload} reload={reload} setSelectedImg={setSelectedImg}/>
      {selectedImg && <Model selectedImg={selectedImg}  setSelectedImg={setSelectedImg}/>}
    </div>
  )
}

export default App