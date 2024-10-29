import CartProduct from './CartProduct';

const CartList = ({ cartProducts, onRemove }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
      {cartProducts.map((product) => (
        <CartProduct key={product.id} product={product} onRemove={onRemove} />
      ))}
    </div>
  );
};

export default CartList;