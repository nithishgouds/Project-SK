import React,{useState} from 'react';
import {Plus,Minus,ShoppingCart,LogOut} from 'lucide-react';

const FoodDeliveryMenu=()=>{
  const [activeFilter,setActiveFilter]=useState('ALL');
  const [cart,setCart]=useState({
    'MUTTON CURRY':{quantity:1,price:220},
    'PANEER BUTTER MASALA':{quantity:3,price:140}
  });

  const menuItems=[
    {id:1,name:'MUTTON CURRY',price:220,category:'NON VEG',color:'red'},
    {id:2,name:'FISH FRY',price:180,category:'NON VEG',color:'red'},
    {id:3,name:'CHICKEN TIKKA',price:160,category:'NON VEG',color:'red'},
    {id:4,name:'PRAWN MASALA',price:250,category:'NON VEG',color:'red'},
    {id:5,name:'PANEER BUTTER MASALA',price:140,category:'VEG',color:'green'},
    {id:6,name:'DAL TADKA',price:80,category:'VEG',color:'green'},
    {id:7,name:'VEG PULAO',price:120,category:'VEG',color:'green'},
    {id:8,name:'PALAK PANEER',price:150,category:'VEG',color:'green'}
  ];

  const filteredItems=menuItems.filter(item=>{
    if(activeFilter==='ALL') return true;
    return item.category===activeFilter;
  });

  const addToCart=(itemName,price)=>{
    setCart(prev=>({
      ...prev,
      [itemName]:{
        quantity:(prev[itemName]?.quantity||0)+1,
        price:price
      }
    }));
  };

  const removeFromCart=(itemName)=>{
    setCart(prev=>{
      const newCart={...prev};
      if(newCart[itemName]&&newCart[itemName].quantity>1){
        newCart[itemName].quantity-=1;
      }else{
        delete newCart[itemName];
      }
      return newCart;
    });
  };

  const getTotalPrice=()=>{
    return Object.values(cart).reduce((total,item)=>total+(item.price*item.quantity),0);
  };

  const getTotalItems=()=>{
    return Object.values(cart).reduce((total,item)=>total+item.quantity,0);
  };

  const getItemQuantity=(itemName)=>{
    return cart[itemName]?.quantity||0;
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation Bar */}
      <nav className="bg-orange-400 text-white px-4 py-4 flex justify-between items-center">
        <h1 className="text-xl md:text-2xl font-bold tracking-wide">FOOD DELIVERY</h1>
        <div className="flex items-center space-x-4 md:space-x-8">
          <span className="text-green-300 font-medium cursor-pointer hover:text-green-200 transition-colors">MENU</span>
          <span className="font-medium cursor-pointer hover:text-gray-200 transition-colors">ORDERS</span>
          <div className="flex items-center space-x-2 cursor-pointer hover:text-gray-200 transition-colors">
            <LogOut size={18} />
            <span className="font-medium">LOGOUT</span>
          </div>
        </div>
      </nav>

      <div className="container mx-auto px-4 py-6">
        <div className="flex flex-col lg:flex-row gap-6">
          {/* Menu Section */}
          <div className="flex-1">
            {/* Filter Buttons */}
            <div className="flex flex-wrap gap-3 mb-6">
              {['ALL', 'NON VEG', 'VEG'].map((filter) => (
                <button
                  key={filter}
                  onClick={() => setActiveFilter(filter)}
                  className={`px-6 py-2 rounded-full font-medium transition-all duration-200 ${
                    activeFilter === filter
                      ? 'bg-orange-400 text-white shadow-md'
                      : 'bg-white text-gray-700 border border-gray-300 hover:border-orange-400 hover:text-orange-400'
                  }`}
                >
                  {filter}
                </button>
              ))}
            </div>

            {/* Menu Items */}
            <div className="space-y-4">
              {filteredItems.map((item) => (
                <div
                  key={item.id}
                  className="bg-white rounded-lg border-2 border-orange-300 p-4 hover:shadow-md transition-shadow duration-200"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div
                        className={`w-4 h-4 rounded-full ${
                          item.color === 'red' ? 'bg-red-500' : 'bg-green-500'
                        }`}
                      ></div>
                      <h3 className="font-semibold text-gray-800 text-sm md:text-base">{item.name}</h3>
                    </div>
                    <div className="flex items-center space-x-3">
                      <span className="font-bold text-gray-800">₹{item.price}</span>
                      <div className="flex items-center space-x-2">
                        <button
                          onClick={() => removeFromCart(item.name)}
                          className="w-8 h-8 border border-gray-300 rounded flex items-center justify-center hover:bg-gray-100 transition-colors"
                          disabled={getItemQuantity(item.name) === 0}
                        >
                          <Minus size={16} className={getItemQuantity(item.name) === 0 ? 'text-gray-300' : 'text-gray-600'} />
                        </button>
                        <button
                          onClick={() => addToCart(item.name, item.price)}
                          className="w-8 h-8 border border-gray-300 rounded flex items-center justify-center hover:bg-gray-100 transition-colors"
                        >
                          <Plus size={16} className="text-gray-600" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Cart Section */}
          <div className="w-full lg:w-80">
            <div className="bg-white rounded-lg border-2 border-orange-300 p-4 sticky top-4">
              <h2 className="text-xl font-bold text-center mb-4 text-gray-800">MY CART</h2>
              
              {Object.keys(cart).length === 0 ? (
                <div className="text-center py-8">
                  <ShoppingCart size={48} className="mx-auto text-gray-300 mb-4" />
                  <p className="text-gray-500">Your cart is empty</p>
                </div>
              ) : (
                <>
                  <div className="space-y-3 mb-4">
                    {Object.entries(cart).map(([itemName, details]) => (
                      <div
                        key={itemName}
                        className="bg-orange-100 rounded-full px-4 py-2 flex items-center justify-between text-sm"
                      >
                        <span className="font-medium text-gray-800 flex-1 truncate">{itemName}</span>
                        <span className="font-bold text-gray-800 mx-2">₹{details.price*details.quantity}</span>
                        <span className="font-bold text-gray-800 min-w-[20px] text-center">{details.quantity}</span>
                      </div>
                    ))}
                  </div>

                  <div className="bg-orange-100 rounded-full px-4 py-2 flex items-center justify-between font-bold text-gray-800 mb-4">
                    <span>TOTAL</span>
                    <span>₹{getTotalPrice()}</span>
                    <span>{getTotalItems()}</span>
                  </div>

                  <button className="w-full bg-orange-400 text-white py-3 rounded-lg font-bold hover:bg-orange-500 transition-colors duration-200">
                    PLACE ORDER
                  </button>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoodDeliveryMenu;