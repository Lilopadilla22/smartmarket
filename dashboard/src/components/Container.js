import Card from "./Card"
import CardProduct from "./CardProduct"
import CategoryList from "./CategoryList"
import ProductsList from "./ProductsList"

const variable = [{title:"total de productos", total:20}, {title:"total de usuarios", total:28}, {title:"Total de categorías", total:8}]
export default function Container() {
return (
        <>
    <div className="container text-center d-flex flex-wrap w-100 h-90 p-3 shadow mt-5">
    
       {variable.map((e, index)=>{
        return(
        <div className="col-4">
            <Card
            title = {e.title}
            total = {e.total}
            key={index}/>
        </div>
        )
        })}
        <CardProduct/>
        <CategoryList/>
        <ProductsList/>
    </div>
        </>
    
)
}

