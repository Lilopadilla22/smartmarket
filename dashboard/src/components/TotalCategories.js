import Card from "./Card"
import useFetch from '../hooks/useFetch'


export default function TotalCategories() {

        const {data} = useFetch('/api/products', 'categoriesByCount')

    
return (
        <>
            <Card
            title = "Total de categorias"
            total = {data?.length}
             />  
        </>
    
)
}
