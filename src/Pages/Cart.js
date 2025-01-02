import CartEmpty from '../Components/CartEmpty';
import CartList from '../Components/CartList';

const Cart = ({ cartProducts = [], onRemove,theme }) => {
  const headingClass=`text-4xl font-extrabold ${theme==='light'?'text-gray-800':'text-white'}`;
  return (
    <div className="min-h-screen flex flex-col mt-16">
      <div className="flex-grow container mx-auto py-12">
        <div className="text-center mb-8">
          <h2 className={headingClass} style={{ fontFamily: "'Serif', sans-serif" }}>
            Your Cart
          </h2>
        </div>

        {cartProducts.length === 0 ? (
          <CartEmpty theme={theme} />
        ) : (
          <CartList cartProducts={cartProducts} onRemove={onRemove} theme={theme} />
        )}
      </div>
    </div>
  );
};

export default Cart;
