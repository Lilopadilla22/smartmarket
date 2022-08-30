import useFetch  from "../hooks/useFetch";


export default function CardProduct(){

  const {data} = useFetch ('/api/product/ultimateProduct', 'data')

    return(
<div className="card col-3">
  <h5>ULTIMO PRODUCTO CREADO</h5>
  <img src={data?.image} class="card-img-top" alt="..."/>
  <div className="card-body">
    <p className="card-text">{data?.name}</p>
  </div>
</div>
    )
}