import useFetch  from "../hooks/useFetch";


export default function CategoryList(){

  const {data} = useFetch ('/api/products', 'categoriesByCount')
  
return(
  <>
  
  <ul className="list-group col-6">
  <h3>Listado de Categorías</h3>
{data && data.length > 0 && data.map((category , i) => {
return (
<li className="list-group-item d-flex justify-content-between align-items-center" key= {i}>
    {category.categories.name}
    <span className="badge bg-primary rounded-pill"> {category.countByCategorie} </span>
  </li>)
})}
</ul>
</>)
}
