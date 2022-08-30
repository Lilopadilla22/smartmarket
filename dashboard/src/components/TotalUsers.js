import useFetch from "../hooks/useFetch"
import Card from "./Card"


export default function TotalUsers() {
    const {data} = useFetch('/api/list-users', 'count')
    
return (
        <>
            <Card
            title = "Total de usuarios"
            total = {data}
             />
            
        </>
    
)
}
