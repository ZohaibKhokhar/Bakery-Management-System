import { useEffect,useState } from "react";
const useFetch=(url)=>{
    const [data,setData]=useState(null);   
    const [isPending,setIsPending]=useState(true);
    const [error,setError]=useState(null);

    useEffect(()=>{
      const abortCont=new AbortController();
        setTimeout(() => {
          fetch(url,{signal:abortCont.signal})
          .then(response=>{
            console.log(response);
              if(!response.ok){
                  throw Error('could not fetch data from that resourse');
              }
              return response.json();
          }).then(data=>{
              setIsPending(false);
              setError(null)
              setData(data);
          })
          .catch(err=>{
            if(err.name==='AbortError'){
              console.log('Fetch Aborted');
            }
            else{
              setIsPending(false);
              setError(err.message);
            }
             
          })
        },1000);
        return ()=> abortCont.abort();
      },[url]);
      return {
        data,isPending,error
      };
}

export default useFetch;