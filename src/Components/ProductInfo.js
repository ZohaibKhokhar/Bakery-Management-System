import React from 'react';

const ProductInfo = ({ product, theme }) => {
  const descClass = `text-lg mt-4 font-semibold ${
    theme === 'light' ? 'text-gray-700' : 'text-gray-200'
  }`;

  const catClass = `text-lg mt-4 font-semibold ${
    theme === 'light' ? 'text-gray-700' : 'text-gray-200'
  }`;

  const priceClass = `text-lg mt-4 font-semibold ${
    theme === 'light' ? 'text-gray-700' : 'text-gray-200'
  }`;

  const quantityClass = `text-lg mt-4 font-semibold ${
    theme === 'light' ? 'text-gray-700' : 'text-gray-200'
  }`;

  return (
    <div className="flex-1">
      <h1
        className={`text-3xl font-bold ${
          theme === 'light' ? 'text-blue-600' : 'text-blue-400'
        }`}
        style={{ fontFamily: "'Poppins', sans-serif" }}
      >
        {product.name}
      </h1>
      <p className={descClass}>{product.description}</p>
      <p className={catClass}>
        Ingredients:{' '}
        <span
          className={`font-normal ${
            theme === 'light' ? 'text-gray-500' : 'text-gray-400'
          }`}
        >
          {product.ingredients}
        </span>
      </p>
      <p className={catClass}>
        Category:{' '}
        <span
          className={`font-normal ${
            theme === 'light' ? 'text-gray-500' : 'text-gray-400'
          }`}
        >
          {product.category}
        </span>
      </p>
      <p className={priceClass}>
        Price:{' '}
        <span
          className={`text-green-500 font-normal ${
            theme === 'light' ? 'text-gray-500' : 'text-gray-400'
          }`}
        >
          ${product.price}{' '}
          <span
            className={`font-normal ${
              theme === 'light' ? 'text-gray-500' : 'text-gray-400'
            }`}
          >
            per {product.unit}
          </span>
        </span>
      </p>
      <p className={quantityClass}>
        Quantity Available:{' '}
        <span
          className={`text-gray-500 font-normal ${
            theme === 'light' ? 'text-gray-500' : 'text-gray-400'
          }`}
        >
          {product.quantity}
        </span>
      </p>
    </div>
  );
};

export default ProductInfo;
