import ProductCard from "./ProductCard";

const ProductsList = (props) => {

  const products = props.products;
  const title = props.title;

  const renderProduct = () => {
    return products.map(product => <ProductCard key={product.id} img={product.src} title={product.title} time={product.time} showTime={props.showTime ? true : false} />)
  }



  return (
    <section id="products">
      <h2>{title}</h2>
      <div className="container card-container">
        {products.map(product => <ProductCard key={product.id} img={product.src} title={product.title} time={product.time} showTime={props.showTime ? true : false} />
        )}
      </div>
    </section>
  )
}

export default ProductsList