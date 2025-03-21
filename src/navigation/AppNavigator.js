
import React, { useState, useEffect, createContext, useContext } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import WishlistScreen from '../screens/WishlistScreen';
import CartScreen from '../screens/CartScreen';
import booksData from '../config/books.json';
import OrderSuccessScreen from '../screens/OrderSuccessScreen';

const Stack = createNativeStackNavigator();
const BookContext = createContext();

export const useBooks = () => useContext(BookContext);

export default function AppNavigator() {

  const [books, setBooks] = useState([]);

  const [cart, setCart] = useState([]);

  useEffect(() => {
    setBooks(booksData);
  }, []);

  // Wishlist toggle
  const handleToggleWishlist = (id) => {
    setBooks((prev) =>
      prev.map((book) =>
        book.id === id ? { ...book, inWishlist: !book.inWishlist } : book
      )
    );
  };

  // "ADD TO BAG" का काम
  // 1) inBag = true कर दो
  // 2) cart में डाल दो (अगर पहले से है तो quantity++ वरना नई एंट्री)
  const handleAddToBag = (id) => {
    setBooks((prev) =>
      prev.map((book) =>
        book.id === id ? { ...book, inBag: true } : book
      )
    );
    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item.id === id);
      if (existingItem) {

        return prevCart.map((item) =>
          item.id === id ? { ...item, quantity: item.quantity + 1 } : item
        );
      } else {
 
        return [...prevCart, { id, quantity: 1 }];
      }
    });
  };


  const handleIncrementQty = (id) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };


  const handleDecrementQty = (id) => {
    setCart((prevCart) =>
      prevCart
        .map((item) =>
          item.id === id
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
        .filter((item) => item.quantity > 0) 
    );
  };

  const handleRemoveFromCart = (id) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== id));

    setBooks((prev) =>
      prev.map((book) =>
        book.id === id ? { ...book, inBag: false } : book
      )
    );
  };

  return (
    <BookContext.Provider
      value={{
        books,
        cart,
        handleToggleWishlist,
        handleAddToBag,
        handleIncrementQty,
        handleDecrementQty,
        handleRemoveFromCart
      }}
    >
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Home"
            component={HomeScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Wishlist"
            component={WishlistScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Cart"
            component={CartScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="OrderSuccess"
            component={OrderSuccessScreen}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </BookContext.Provider>
  );
}

