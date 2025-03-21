





import React from 'react';
import { View, Text, SafeAreaView, StyleSheet, TouchableOpacity } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';

export default function OrderSuccessScreen() {
  const navigation = useNavigation();

  const handleContinueShopping = () => {
    // Option A: go back to HomeScreen
    navigation.navigate('Home');
    // Option B: pop to top of stack or something else
    // navigation.popToTop();
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <View style={styles.headerLeft}>
          <Ionicons
            name="book-outline"
            size={24}
            color="#D32F2F"
            style={styles.headerIcon}
          />
          <Text style={styles.headerTitle}>Bookstore</Text>
        </View>
        <View style={styles.headerRight}>
          <Ionicons name="search-outline" size={24} color="#D32F2F" style={styles.headerIcon} />
          <Ionicons name="heart-outline" size={24} color="#D32F2F" style={styles.headerIcon} />
          <Ionicons name="cart-outline" size={24} color="#D32F2F" style={styles.headerIcon} />
        </View>
      </View>

      {/* Body */}
      <View style={styles.body}>
        {/* Confetti or success icon */}
        <Ionicons
          name="sparkles"
          size={64}
          color="#D32F2F"
          style={styles.successIcon}
        />
        <Text style={styles.successTitle}>Order Placed Successfully</Text>
        <Text style={styles.successMessage}>
          hurray!!! your order is confirmed 
          the order id is #123456 save the order id 
          for further communication...
        </Text>

        <TouchableOpacity style={styles.continueButton} onPress={handleContinueShopping}>
          <Text style={styles.continueButtonText}>CONTINUE SHOPPING</Text>
        </TouchableOpacity>
      </View>

      {/* Footer with contact info */}
      <View style={styles.footer}>
        <View style={styles.footerRow}>
          <Ionicons name="mail-outline" size={20} color="#000" style={styles.footerIcon} />
          <Text style={styles.footerText}>admin@bookstore.com</Text>
          <Ionicons name="call-outline" size={20} color="#000" style={styles.footerIcon} />
          <Text style={styles.footerText}>+91 8163475881</Text>
        </View>
        <Text style={styles.addressText}>
          42, 14th Main, 15th Cross, Sector 4 
          opp to BDA complex, near Kumarakom restaurant,
          HSR Layout, Bangalore 560034
        </Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  // Header
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: 50,
    backgroundColor: '#f2f2f2',
    paddingHorizontal: 10,
  },
  headerLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  headerRight: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  headerIcon: {
    marginRight: 15,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
  },
  // Body
  body: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  successIcon: {
    marginBottom: 20,
  },
  successTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#000',
  },
  successMessage: {
    fontSize: 14,
    color: '#333',
    textAlign: 'center',
    lineHeight: 20,
    marginHorizontal: 20,
    marginBottom: 30,
  },
  continueButton: {
    backgroundColor: '#D32F2F',
    borderRadius: 5,
    paddingVertical: 12,
    paddingHorizontal: 25,
  },
  continueButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
  // Footer
  footer: {
    borderTopWidth: 1,
    borderColor: '#ccc',
    padding: 10,
  },
  footerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 5,
    justifyContent: 'center',
    flexWrap: 'wrap',
  },
  footerIcon: {
    marginHorizontal: 5,
  },
  footerText: {
    fontSize: 14,
    color: '#000',
    marginRight: 10,
  },
  addressText: {
    fontSize: 12,
    color: '#555',
    textAlign: 'center',
    lineHeight: 18,
  },
});