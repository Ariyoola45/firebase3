import React, { useState } from 'react'
import {storage} from '../config/firebase'
import { ref , uploadBytes } from 'firebase/storage'


const Thing = () => {

    const [File, setFile] = useState(null)
    
    const fileupload = async () =>{
        if(!File) return
        const filefolder = ref(storage, `file/${File.name}`)
        try{
            await uploadBytes(filefolder ,File)
        }catch(err){
            console.log(err)
        }
    }

  return (
    <div>
        <input
         type="file" 
         onChange={(e) => setFile(e.target.files[0])}
         />
        <button onClick={fileupload}>upload file</button>
    </div>
  )
}

export default Thing