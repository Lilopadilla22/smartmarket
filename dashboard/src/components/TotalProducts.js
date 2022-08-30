import useFetch from "../hooks/useFetch"
import Card from "./Card"


export default function TotalProducts() {
    const {data} = useFetch('/api/products', 'count')
    
return (
        <>
            <Card
            title = "Total de productos"
            total = {data}
             />
            
        </>
    
)
}
