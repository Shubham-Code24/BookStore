
import React, {useState} from 'react';

import {
  View,
  Text,
  FlatList,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  Image
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useBooks } from '../navigation/AppNavigator';
import { useNavigation } from '@react-navigation/native';
import CustomerDetailsForm from '../components/CustomerDetailsForm';


export default function CartScreen() {
  const navigation = useNavigation();
  const {
    books,
    cart,
    handleIncrementQty,
    handleDecrementQty,
    handleRemoveFromCart
  } = useBooks();

  const [isCustomerModalVisible, setCustomerModalVisible] = useState(false);
  const [customerInfo, setCustomerInfo] = useState(null);

  const cartItems = cart.map((cartItem) => {
    const bookDetail = books.find((b) => b.id === cartItem.id);
    return {
      ...bookDetail,
      quantity: cartItem.quantity,
    };
  });

  const totalItems = cartItems.reduce((acc, item) => acc + item.quantity, 0);
  const totalPrice = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  const handleGoBackHome = () => {
    navigation.navigate('Home');
  };

  // DEBUG: just to confirm if user taps the plus icon
  const openCustomerModal = () => {
    console.log('Plus icon tapped -> Opening modal...');
    setCustomerModalVisible(true);
  };

  const handleSubmitCustomer = (data) => {
    console.log('Customer form submitted:', data);
    setCustomerInfo(data);
    setCustomerModalVisible(false);
  };

  const renderCartItem = ({ item }) => {
    return (
      <View style={styles.cartItemContainer}>
        <View style={styles.leftSection}>
          <Image source={{ uri: item.image }} style={styles.bookImage} />
          <View style={styles.bookInfo}>
            <Text style={styles.bookTitle}>{item.title}</Text>
            <Text style={styles.bookAuthor}>by {item.author}</Text>
            <View style={styles.priceRow}>
              <Text style={styles.newPrice}>Rs. {item.price}</Text>
              <Text style={styles.oldPrice}>Rs. {item.oldPrice}</Text>
            </View>
          </View>
        </View>

        <TouchableOpacity
          style={styles.removeButton}
          onPress={() => handleRemoveFromCart(item.id)}
        >
          <Ionicons name="close" size={20} color="#000" />
        </TouchableOpacity>

        <View style={styles.quantityRow}>
          <TouchableOpacity
            style={styles.quantityButton}
            onPress={() => handleDecrementQty(item.id)}
          >
            <Ionicons name="remove" size={18} color="#fff" />
          </TouchableOpacity>
          <Text style={styles.quantityText}>{item.quantity}</Text>
          <TouchableOpacity
            style={styles.quantityButton}
            onPress={() => handleIncrementQty(item.id)}
          >
            <Ionicons name="add" size={18} color="#fff" />
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <View style={styles.headerLeft}>
          <Ionicons
            name="book-outline"
            size={24}
            color="#D32F2F"
            style={styles.headerIcon}
          />
          <TouchableOpacity onPress={handleGoBackHome}>
            <Text style={styles.headerTitle}>Bookstore</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.headerRight}>
          <Ionicons
            name="search-outline"
            size={24}
            color="#D32F2F"
            style={styles.headerIcon}
          />
          <Ionicons
            name="heart-outline"
            size={24}
            color="#D32F2F"
            style={styles.headerIcon}
          />
          <Ionicons
            name="cart"
            size={24}
            color="#D32F2F"
            style={styles.headerIcon}
          />
        </View>
      </View>

      <Text style={styles.bagCount}>My Bag ({totalItems} Items)</Text>

      <FlatList
        data={cartItems}
        keyExtractor={(item) => item.id}
        renderItem={renderCartItem}
        contentContainerStyle={styles.listContainer}
      />

      {/* Customer Details Row */}
      <View style={styles.customerDetailsRow}>
        <Text style={styles.customerDetailsText}>Customer Details</Text>
        <TouchableOpacity onPress={openCustomerModal}>
          <Ionicons name="add" size={20} color="#000" />
        </TouchableOpacity>
      </View>

      {/* If user filled form, show below */}
      {customerInfo && (
        <View style={styles.customerInfoContainer}>
          <Text style={styles.infoLine}>
            <Text style={styles.infoLabel}>Name: </Text>
            {customerInfo.name}
          </Text>
          <Text style={styles.infoLine}>
            <Text style={styles.infoLabel}>Phone: </Text>
            {customerInfo.phone}
          </Text>
          <Text style={styles.infoLine}>
            <Text style={styles.infoLabel}>Email: </Text>
            {customerInfo.email}
          </Text>
          <Text style={styles.infoLine}>
            <Text style={styles.infoLabel}>Address: </Text>
            {customerInfo.address}
          </Text>
          <Text style={styles.infoLine}>
            <Text style={styles.infoLabel}>City: </Text>
            {customerInfo.city}
          </Text>
          <Text style={styles.infoLine}>
            <Text style={styles.infoLabel}>Pincode: </Text>
            {customerInfo.pincode}
          </Text>
        </View>
      )}

      {/* Footer pinned */}
      <View style={styles.footerContainer}>
        <Text style={styles.totalText}>Total Rs. {totalPrice}</Text>
        <TouchableOpacity
  style={styles.placeOrderButton}
  onPress={() => navigation.navigate('OrderSuccess')} 
>
  <Text style={styles.placeOrderButtonText}>PLACE ORDER</Text>
</TouchableOpacity>
      </View>

      {/* Modal for Customer Details */}
      <CustomerDetailsForm
        visible={isCustomerModalVisible}
        onClose={() => setCustomerModalVisible(false)}
        onSubmit={handleSubmitCustomer}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: 50,
    backgroundColor: '#f2f2f2',
    paddingHorizontal: 10,
  },
  headerLeft: { flexDirection: 'row', alignItems: 'center' },
  headerRight: { flexDirection: 'row', alignItems: 'center' },
  headerIcon: { marginRight: 15 },
  headerTitle: { fontSize: 18, fontWeight: 'bold', color: '#000' },
  bagCount: {
    fontSize: 16,
    fontWeight: '600',
    margin: 10,
  },
  listContainer: {
    paddingHorizontal: 10,
    paddingBottom: 10,
  },
  cartItemContainer: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
    position: 'relative',
  },
  leftSection: {
    flexDirection: 'row',
    flex: 1,
  },
  bookImage: {
    width: 60,
    height: 80,
    resizeMode: 'cover',
    marginRight: 10,
  },
  bookInfo: {
    justifyContent: 'space-between',
  },
  bookTitle: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  bookAuthor: {
    fontSize: 12,
    color: '#555',
  },
  priceRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  newPrice: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#000',
    marginRight: 8,
  },
  oldPrice: {
    fontSize: 12,
    color: '#888',
    textDecorationLine: 'line-through',
  },
  removeButton: {
    position: 'absolute',
    top: 5,
    right: 5,
  },
  quantityRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 5,
    marginLeft: 65,
  },
  quantityButton: {
    backgroundColor: '#D32F2F',
    borderRadius: 5,
    padding: 5,
    marginHorizontal: 5,
  },
  quantityText: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  customerDetailsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#f7f7f7',
    padding: 10,
    marginHorizontal: 10,
    borderRadius: 5,
    marginBottom: 10,
  },
  customerDetailsText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  customerInfoContainer: {
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 5,
    padding: 10,
    marginHorizontal: 10,
    marginBottom: 10,
  },
  infoLine: {
    marginBottom: 5,
  },
  infoLabel: {
    fontWeight: 'bold',
  },
  footerContainer: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderTopWidth: 1,
    borderColor: '#ddd',
  },
  totalText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  placeOrderButton: {
    backgroundColor: '#D32F2F',
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 15,
  },
  placeOrderButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});
