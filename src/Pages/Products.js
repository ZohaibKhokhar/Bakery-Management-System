import ProductList from "../Components/ProductList";

const Products = ({onAddToCart,products,isPending,error}) => {
    
    return (
        <div className="container-fluid mx-auto mt-16">
            {isPending && <h4 className="text-2xl font-bold text-center">Loading...</h4>}
            {error && <div className="text-red-600 text-center">{error}</div>}
            {products&&<ProductList products={products} onAddToCart={onAddToCart} />}
        </div>
           
    );
};
 
export default Products;