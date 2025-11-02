import { useState } from 'react';
import { X, ShoppingCart, Plus, Minus } from 'lucide-react';

export default function CartModal() {
  const [isOpen, setIsOpen] = useState(true);
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: 'XX99 MK II',
      price: 2999,
      quantity: 1,
      image: '🎧'
    },
    {
      id: 2,
      name: 'XX59',
      price: 899,
      quantity: 2,
      image: '🎧'
    },
    {
      id: 3,
      name: 'YX1',
      price: 599,
      quantity: 1,
      image: '🔵'
    }
  ]);

  const updateQuantity = (id, delta) => {
    setCartItems(items =>
      items.map(item =>
        item.id === id
          ? { ...item, quantity: Math.max(1, item.quantity + delta) }
          : item
      )
    );
  };

  const removeAll = () => {
    setCartItems([]);
  };

  const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-start justify-end p-4 z-50">
      <div className="bg-white rounded-lg w-full max-w-md mt-20 mr-4 shadow-2xl">
        <div className="p-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-lg font-bold tracking-wider">
              CART ({cartItems.length})
            </h2>
            <button
              onClick={removeAll}
              className="text-gray-500 hover:text-gray-700 text-sm underline"
            >
              Remove all
            </button>
          </div>

          <div className="space-y-6 mb-6">
            {cartItems.map(item => (
              <div key={item.id} className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-gray-100 rounded-lg flex items-center justify-center text-2xl">
                    {item.image}
                  </div>
                  <div>
                    <h3 className="font-bold text-sm">{item.name}</h3>
                    <p className="text-gray-500 text-sm">$ {item.price.toLocaleString()}</p>
                  </div>
                </div>

                <div className="flex items-center gap-3 bg-gray-100 px-3 py-2 rounded">
                  <button
                    onClick={() => updateQuantity(item.id, -1)}
                    className="text-gray-500 hover:text-orange-500 w-4 h-4 flex items-center justify-center"
                  >
                    <Minus size={12} />
                  </button>
                  <span className="font-bold text-sm w-4 text-center">{item.quantity}</span>
                  <button
                    onClick={() => updateQuantity(item.id, 1)}
                    className="text-gray-500 hover:text-orange-500 w-4 h-4 flex items-center justify-center"
                  >
                    <Plus size={12} />
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-between items-center mb-6">
            <span className="text-gray-500 text-sm font-medium">TOTAL</span>
            <span className="text-lg font-bold">$ {total.toLocaleString()}</span>
          </div>

          <button className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-4 rounded text-sm tracking-wider transition-colors">
            CHECKOUT
          </button>
        </div>
      </div>
    </div>
  );
}