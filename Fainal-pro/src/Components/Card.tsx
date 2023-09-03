interface products {
    title:string,
    image:string
}
function Card(prop: products) {
  return (
    <div className="bg-white h-96 flex flex-col justify-evenly">
        <h1>{prop.title}</h1>
        <img className="h-60" src={""+prop.image} alt="" />
    </div>
  )
}

export default Card