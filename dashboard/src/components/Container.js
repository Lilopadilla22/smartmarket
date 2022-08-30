import useFetch from "../hooks/useFetch"
import TotalUsers from "./TotalUsers"
import CardProduct from "./CardProduct"
import CategoryList from "./CategoryList"
import ProductsList from "./ProductsList"
import TotalProducts from "./TotalProducts"
import TotalCategories from "./TotalCategories"

export default function Container() {

    
return (
        <>
    <div className="container text-center d-flex flex-wrap w-100 h-90 p-3 shadow mt-5">
    
        <div className="col-4">
            <TotalProducts />
        </div>
        <div className="col-4">
            <TotalUsers />
        </div>
        <div className="col-4">
            <TotalCategories />
        </div>
       
        <CardProduct/>
        <CategoryList/>
        <ProductsList/>
    </div>
        </>
    
)
}
      
        

