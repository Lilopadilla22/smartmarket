import React from "react";  

const useFetch = (callback, object) => {
const [state, setState] = React.useState({data:null})

const fetchData = () => {
    
    fetch(callback)
    .then(res => res.json())
    .then(data => {
        
        if(data[object]){
            console.log(data)
            setState({data: data[object]})
        } else {
            setState({data:null})
        }
    }).catch(error => {
        setState({ data: error})
        })
    }
    
    React.useEffect(()=>{
        fetchData()
    },[])

    return {...state, fetchData}
}

export default useFetch;