import CartEmpty from '../Components/CartEmpty';
import CartList from '../Components/CartList';

const Cart = ({ cartProducts = [], onRemove }) => {
  return (
    <div className="min-h-screen flex flex-col mt-16">
      <div className="flex-grow container mx-auto py-12">
        <div className="text-center mb-8">
          <h2 className="text-4xl font-extrabold text-gray-800" style={{ fontFamily: "'Serif', sans-serif" }}>
            Your Cart
          </h2>
        </div>

        {cartProducts.length === 0 ? (
          <CartEmpty />
        ) : (
          <CartList cartProducts={cartProducts} onRemove={onRemove} />
        )}
      </div>
    </div>
  );
};

export default Cart;
