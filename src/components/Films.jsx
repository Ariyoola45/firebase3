import React, { useEffect, useState } from 'react'
import {getDocs ,collection ,addDoc , deleteDoc , doc ,updateDoc} from 'firebase/firestore'
import { db , auth} from '../config/firebase'

const Films = () => {

    const [Movies, setMovies] = useState([])

// new movie state
    const [newtitle, setNewtitle] = useState('')
    const [newdate, setNewdate] = useState(0)
    const [newOscar, setNewOscar] = useState(false)


    // update state

    const [Update, setUpdate] = useState('')


        const moviesRef = collection(db ,'movies')


        const getMovies = async () =>{
          const data = await getDocs( moviesRef)
          const filter = data.docs.map((doc) => ({...doc.data() , id:doc.id }))
          setMovies(filter)
      }

    useEffect(() => {
  
     getMovies()
    }, [])

    const submit = async () =>{
     try{
      await addDoc(moviesRef ,{
        title:newtitle,
        date:newdate,
        oscar : newOscar,
        userId: auth?.currentUser?.uid
      })
     }catch(err){
      console.log(err)
     }
      getMovies()
    }
    const deletemovie = async (id) =>{
      try{
        const moviedel = doc(db , 'movies', id)
      await deleteDoc(moviedel)
      }catch(err){
        console.log(err)
      }
    }
    const updatemovie = async (id) =>{
      try{
        const moviedel = doc(db , 'movies', id)
      await updateDoc(moviedel ,{title : Update})
      }catch(err){
        console.log(err)
      }
    }
   
  return (
    <div>
      <div>
        <input
         type="text"
         placeholder='title' 
         onChange={(e) => setNewtitle(e.target.value)}
         />
        <input
         type="number"
         placeholder='date' 
         onChange={(e) => setNewdate(Number(e.target.value))}
         />
        <input
         type="checkbox"
         checked={newOscar}
         onChange={(e) => setNewOscar(e.target.checked)}
         />
         <button onClick={submit}>submit movie</button>
      </div>
      {Movies.map((Movie) => (
        <div>
          <h1 style={{color : Movie.oscar ? 'green' :'red'}}>{Movie.title}</h1>
          <p>Date: {Movie.date}</p>
         
          <button onClick={() => deletemovie(Movie.id)} >delete</button>

        <input
         type="text" 
         placeholder='new title' 
         onChange={(e) => setUpdate(e.target.value)}
         />
        <button onClick={()=> updatemovie(Movie.id)}> Update Title </button>
        </div>
        
      ))}
    </div>
  )
}

export default Films