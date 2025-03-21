








// // Line 1: React और ज़रूरी hooks import कर रहे हैं
// import React, { useState, useEffect } from 'react';
// import { View, Text, FlatList, SafeAreaView, StyleSheet } from 'react-native';
// // Line 2: Ionicons import कर रहे हैं ताकि header में icons दिखा सकें
// import Ionicons from 'react-native-vector-icons/Ionicons';
// // Line 3: BookCard component import कर रहे हैं
// import BookCard from '../components/BookCard';
// // Line 4: लोकल JSON फाइल (books.json) import कर रहे हैं – यह src/config/books.json में है
// import booksData from '../config/books.json';

// // Line 5: HomeScreen component – यह हमारा landing page है
// const HomeScreen = () => {
//   // Line 6: books state बनाते हैं और JSON data set करेंगे
//   const [books, setBooks] = useState([]);

//   // Line 7: useEffect में booksData से state में डेटा लोड करते हैं
//   useEffect(() => {
//     setBooks(booksData);
//   }, []);

//   // Line 8: "ADD TO BAG" पर क्लिक होने पर संबंधित book की inBag property को true कर देते हैं
//   const handleAddToBag = (id) => {
//     setBooks((prevBooks) =>
//       prevBooks.map((book) =>
//         book.id === id ? { ...book, inBag: true } : book
//       )
//     );
//   };

//   // Line 9: UI रिटर्न करते हैं
//   return (
//     <SafeAreaView style={styles.container}>
//       {/* Header Section */}
//       <View style={styles.header}>
//         {/* Header Left: Book icon + "Bookstore" */}
//         <View style={styles.headerLeft}>
//           <Ionicons
//             name="book-outline"
//             size={24}
//             color="#D32F2F"
//             style={styles.headerIcon}
//           />
//           <Text style={styles.headerTitle}>Bookstore</Text>
//         </View>
//         {/* Header Right: search, heart, cart icons */}
//         <View style={styles.headerRight}>
//           <Ionicons name="search-outline" size={24} color="#D32F2F" style={styles.headerIcon} />
//           <Ionicons name="heart-outline" size={24} color="#D32F2F" style={styles.headerIcon} />
//           <Ionicons name="cart-outline" size={24} color="#D32F2F" style={styles.headerIcon} />
//         </View>
//       </View>
//       {/* Books count text */}
//       <Text style={styles.bookCount}>Books ({books.length} Items)</Text>
//       {/* FlatList to render books in 2-column grid */}
//       <FlatList
//         data={books}
//         keyExtractor={(item) => item.id}
//         numColumns={2}
//         renderItem={({ item }) => (
//           <BookCard item={item} onAddToBag={handleAddToBag} />
//         )}
//         contentContainerStyle={styles.listContainer}
//       />
//     </SafeAreaView>
//   );
// };

// // Line 10: Internal styling using StyleSheet
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//   },
//   header: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     justifyContent: 'space-between',
//     height: 50,
//     backgroundColor: '#f2f2f2',
//     paddingHorizontal: 10,
//   },
//   headerLeft: {
//     flexDirection: 'row',
//     alignItems: 'center',
//   },
//   headerRight: {
//     flexDirection: 'row',
//     alignItems: 'center',
//   },
//   headerIcon: {
//     marginRight: 15,
//   },
//   headerTitle: {
//     fontSize: 18,
//     fontWeight: 'bold',
//     color: '#000',
//   },
//   bookCount: {
//     fontSize: 16,
//     fontWeight: '600',
//     margin: 10,
//   },
//   listContainer: {
//     paddingHorizontal: 5,
//   },
// });

// export default HomeScreen;







// import React from 'react';
// import { View, Text, FlatList, SafeAreaView, StyleSheet, TouchableOpacity } from 'react-native';
// import Ionicons from 'react-native-vector-icons/Ionicons';
// import BookCard from '../components/BookCard';
// import { useBooks } from '../navigation/AppNavigator';
// import { useNavigation } from '@react-navigation/native';

// export default function HomeScreen() {
//   const navigation = useNavigation();
//   const { books } = useBooks();

//   const handleGoToWishlist = () => {
//     navigation.navigate('Wishlist');
//   };

//   return (
//     <SafeAreaView style={styles.container}>
//       <View style={styles.header}>
//         <View style={styles.headerLeft}>
//           <Ionicons name="book-outline" size={24} color="#D32F2F" style={styles.headerIcon} />
//           <Text style={styles.headerTitle}>Bookstore</Text>
//         </View>
//         <View style={styles.headerRight}>
//           <Ionicons name="search-outline" size={24} color="#D32F2F" style={styles.headerIcon} />
//           <TouchableOpacity onPress={handleGoToWishlist}>
//             <Ionicons name="heart-outline" size={24} color="#D32F2F" style={styles.headerIcon} />
//           </TouchableOpacity>
//           <Ionicons name="cart-outline" size={24} color="#D32F2F" style={styles.headerIcon} />
//         </View>
//       </View>
//       <Text style={styles.bookCount}>Books ({books.length} Items)</Text>
//       <FlatList
//         data={books}
//         keyExtractor={(item) => item.id}
//         numColumns={2}
//         renderItem={({ item }) => <BookCard item={item} />}
//         contentContainerStyle={styles.listContainer}
//         ListFooterComponent={
//           <View style={styles.footerContainer}>
//             <Text style={styles.footerText}>
//               © 2020, Bookstore Private Limited. All rights reserved
//             </Text>
//           </View>
//         }
//       />
//     </SafeAreaView>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//   },
//   header: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     justifyContent: 'space-between',
//     height: 50,
//     backgroundColor: '#f2f2f2',
//     paddingHorizontal: 10,
//   },
//   headerLeft: {
//     flexDirection: 'row',
//     alignItems: 'center',
//   },
//   headerRight: {
//     flexDirection: 'row',
//     alignItems: 'center',
//   },
//   headerIcon: {
//     marginRight: 15,
//   },
//   headerTitle: {
//     fontSize: 18,
//     fontWeight: 'bold',
//     color: '#000',
//   },
//   bookCount: {
//     fontSize: 16,
//     fontWeight: '600',
//     margin: 10,
//   },
//   listContainer: {
//     paddingHorizontal: 5,
//   },
//   footerContainer: {
//     backgroundColor: '#f2f2f2',
//     paddingVertical: 10,
//     alignItems: 'center',
//     marginTop: 10,
//   },
//   footerText: {
//     fontSize: 12,
//     color: '#777',
//   },
// });




















import React from 'react';
import {
  View,
  Text,
  FlatList,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import BookCard from '../components/BookCard';
import { useBooks } from '../navigation/AppNavigator';
import { useNavigation } from '@react-navigation/native';

export default function HomeScreen() {
  const navigation = useNavigation();
  const { books } = useBooks();

  const handleGoToWishlist = () => {
    navigation.navigate('Wishlist');
  };

  const handleGoToCart = () => {
    navigation.navigate('Cart');
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
          <Text style={styles.headerTitle}>Bookstore</Text>
        </View>
        <View style={styles.headerRight}>
          <Ionicons
            name="search-outline"
            size={24}
            color="#D32F2F"
            style={styles.headerIcon}
          />
          <TouchableOpacity onPress={handleGoToWishlist}>
            <Ionicons
              name="heart-outline"
              size={24}
              color="#D32F2F"
              style={styles.headerIcon}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={handleGoToCart}>
            <Ionicons
              name="cart-outline"
              size={24}
              color="#D32F2F"
              style={styles.headerIcon}
            />
          </TouchableOpacity>
        </View>
      </View>

      <Text style={styles.bookCount}>Books ({books.length} Items)</Text>

      <FlatList
        data={books}
        keyExtractor={(item) => item.id}
        numColumns={2}
        renderItem={({ item }) => <BookCard item={item} />}
        contentContainerStyle={styles.listContainer}
        // अभी HomeScreen में footer pinned नहीं है, 
        // अगर चाहें तो pinned footer भी लगा सकते हैं
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
  bookCount: { fontSize: 16, fontWeight: '600', margin: 10 },
  listContainer: { paddingHorizontal: 5 },
  footerContainer: {
    backgroundColor: '#f2f2f2',
    paddingVertical: 10,
    alignItems: 'center',
    marginTop: 10,
  },
  footerText: { fontSize: 12, color: '#777' },
});
