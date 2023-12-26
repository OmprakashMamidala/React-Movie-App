import { useEffect, useState } from 'react'
const url='https://api.themoviedb.org/3/discover/movie?api_key=6cda7bd51a8e358bb040a4faa0672d54';
const imgurl = 'https://image.tmdb.org/t/p/w500';

export default function Component() {
   const[Movies,setMovies]= useState([]);
   
   const res = async()=>{
    const response = await fetch(url);
    const data = await response.json();
    
     setMovies(data.results); 
     
   }
   useEffect(()=>{
     res();
   },[])
   
  return (
    
    <div>
       {
       
       Movies.map((movie)=>{
          const{poster_path,id,title,overview,popularity,backdrop_path}=movie
          return(<><div key={id} style={{alignContent:'center', justifyContent:'center', alignItems:'flex-start',backgroundImage:`${imgurl}/${backdrop_path}`}}>
          <img src={`${imgurl}/${poster_path}`} alt={title}></img>
          <h3>{title}</h3>
          <h3>{overview}</h3>
          <h2>{popularity}</h2>
          </div></>)
        })
       }
    </div>
  )
}
