import useFetch from "../hooks/useFetch";

export default function ProductsList() {

  const { data } = useFetch('/api/products', 'data')

  return(
        <>
        <h3 className="mt-3">Listado de Productos</h3>
<ul className="list-group col-12">
  {data && data.length > 0 && data.map((product , i) => {
    return (
      <li className="list-group-item d-flex justify-content-between align-items-center" key={i}>
      {product.name}
    </li>)
  })}
</ul>
</>
    )
}