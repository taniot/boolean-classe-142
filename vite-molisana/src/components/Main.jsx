import ProductsList from "./products/ProductsList"

const Main = ({ products }) => {




  return (
    <main>
      <ProductsList products={products} title="Tutte le paste" />

      <ProductsList products={products.filter(product => product.type === "corta")} title="Pasta Corta" />
      <ProductsList products={products.filter(product => product.type === "lunga")} title="Pasta Lunga" />
      <ProductsList products={products.filter(product => product.type === "cortissima")} title="Pasta Cortissima" />
      <ProductsList products={products.filter(product => product.time < 10)} title="Cottura Veloce" showTime={true} />
    </main>
  )
}

export default Main
