




import React from 'react';
import { View, Text, FlatList, SafeAreaView, StyleSheet, TouchableOpacity } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import BookCard from '../components/BookCard';
import { useBooks } from '../navigation/AppNavigator';
import { useNavigation } from '@react-navigation/native';

export default function WishlistScreen() {
  const navigation = useNavigation();
  const { books } = useBooks();

  const wishlistBooks = books.filter((book) => book.inWishlist);

  const handleGoBack = () => {
    navigation.goBack();
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={handleGoBack} style={styles.headerLeft}>
          <Ionicons name="arrow-back" size={24} color="#D32F2F" style={styles.headerIcon} />
          <Text style={styles.headerTitle}>Bookstore</Text>
        </TouchableOpacity>
        <View style={styles.headerRight}>
          <Text style={styles.headerTitle}>Wishlist</Text>
        </View>
      </View>
      <Text style={styles.bookCount}>Wishlist ({wishlistBooks.length} Items)</Text>
      <FlatList
        data={wishlistBooks}
        keyExtractor={(item) => item.id}
        numColumns={2}
        renderItem={({ item }) => <BookCard item={item} />}
        contentContainerStyle={styles.listContainer}
        ListFooterComponent={
          <View style={styles.footerContainer}>
            <Text style={styles.footerText}>
              © 2020, Bookstore Private Limited. All rights reserved
            </Text>
          </View>
        }
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
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
    marginRight: 10,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
  },
  bookCount: {
    fontSize: 16,
    fontWeight: '600',
    margin: 10,
  },
  listContainer: {
    paddingHorizontal: 5,
  },
  footerContainer: {
    backgroundColor: '#f2f2f2',
    paddingVertical: 10,
    alignItems: 'center',
    marginTop: 10,
  },
  footerText: {
    fontSize: 12,
    color: '#777',
  },
});



