import { useEffect, useRef, useState } from "react"

export const useFetch = (url) => {
   const isMounted = useRef(true);
   const [state, setstate] = useState({data:null,loading:true,error:null});
   useEffect(() => {
     
      return () => {
        isMounted.current=false;
      }
   }, [])
   useEffect(() => {
       setstate({data:null,loading:true,error:null})
      fetch(url)
      .then(resp=>resp.json())
      .then(data =>{

         if(isMounted.current){
            setstate({
               loading:false,
               error:null,
               data
           
           });
         }else{
            console.log("No hacer nada");
         }
        
      })
      .catch((err)=>{
         setstate({
            data:null,
            loading:true,
            error:'No se pudo cargar la data'
         })
      })
   }, [url]);

   return state;
}
