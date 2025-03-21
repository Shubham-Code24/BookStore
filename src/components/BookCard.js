



import React, {useState} from 'react';

import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  Modal
} from 'react-native';

import Ionicons from 'react-native-vector-icons/Ionicons';

import { useBooks } from '../navigation/AppNavigator';

export default function BookCard({ item }) {
  const {
    handleAddToBag,
    handleToggleWishlist
  } = useBooks();

  // Modal visibility state
  const [isModalVisible, setModalVisible] = useState(false);

  // Open modal
  const openModal = () => {
    setModalVisible(true);
  };

  // Close modal
  const closeModal = () => {
    setModalVisible(false);
  };

  return (
    <View style={styles.cardWrapper}>
      {/* Card Container - onPress to open modal */}
      <TouchableOpacity
        style={styles.cardContainer}
        activeOpacity={0.9}
        onPress={openModal}
      >
        <Image source={{ uri: item.image }} style={styles.bookImage} />
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.author}>by {item.author}</Text>
        <View style={styles.priceRow}>
          <Text style={styles.newPrice}>Rs. {item.price}</Text>
          <Text style={styles.oldPrice}>Rs. {item.oldPrice}</Text>
        </View>

        {!item.inBag ? (
          <View style={styles.buttonRow}>
            <TouchableOpacity
              style={styles.heartBox}
              onPress={() => {
                handleToggleWishlist(item.id);
              }}
            >
              <Ionicons
                name={item.inWishlist ? 'heart' : 'heart-outline'}
                size={20}
                color="#D32F2F"
              />
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.addButton}
              onPress={() => {
                handleAddToBag(item.id);
              }}
            >
              <Text style={styles.addButtonText}>ADD TO BAG</Text>
            </TouchableOpacity>
          </View>
        ) : (
          <TouchableOpacity style={[styles.addButton, styles.addedButton]}>
            <Text style={styles.addButtonText}>ADDED TO BAG</Text>
          </TouchableOpacity>
        )}
      </TouchableOpacity>

      {/* Bottom Sheet Modal */}
      <Modal
        transparent
        visible={isModalVisible}
        animationType="slide"
        onRequestClose={closeModal}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContainer}>
            {/* Close Button */}
            <TouchableOpacity style={styles.closeIcon} onPress={closeModal}>
              <Ionicons name="close" size={24} color="#000" />
            </TouchableOpacity>

            {/* Book Image and Info */}
            <View style={styles.modalHeader}>
              <Image source={{ uri: item.image }} style={styles.modalImage} />
              <View style={{ flex: 1 }}>
                <Text style={styles.modalTitle}>{item.title}</Text>
                <Text style={styles.modalAuthor}>by {item.author}</Text>
              </View>
            </View>

            {/* Description or any random text */}
            <Text style={styles.modalDescription}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
              Sed non risus. Suspendisse lectus tortor, dignissim sit amet, 
              adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. 
              Maecenas ligula massa, varius a, semper congue, euismod non, mi.
            </Text>
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  cardWrapper: {
    flex: 1,
  },
  cardContainer: {
    flex: 1,
    backgroundColor: '#fff',
    margin: 5,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 5,
    padding: 10,
    alignItems: 'center',
  },
  bookImage: {
    width: 100,
    height: 130,
    resizeMode: 'cover',
    marginBottom: 10,
  },
  title: {
    fontSize: 14,
    fontWeight: 'bold',
    marginBottom: 2,
    textAlign: 'center',
  },
  author: {
    fontSize: 12,
    color: '#555',
    marginBottom: 5,
  },
  priceRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 5,
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
  buttonRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },
  heartBox: {
    width: 40,
    height: 40,
    borderWidth: 1,
    borderColor: '#D32F2F',
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 5,
  },
  addButton: {
    backgroundColor: '#D32F2F',
    borderRadius: 5,
    paddingVertical: 8,
    paddingHorizontal: 10,
    alignItems: 'center',
    minWidth: 100,
  },
  addedButton: {
    alignSelf: 'center',
    marginTop: 10,
  },
  addButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 14,
  },

  /* Modal Styles */
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.4)', // semi-transparent dark overlay
    justifyContent: 'flex-end', // push content to bottom
  },
  modalContainer: {
    backgroundColor: '#fff',
    borderTopRightRadius: 12,
    borderTopLeftRadius: 12,
    padding: 15,
    maxHeight: '60%', // adjust as needed
  },
  closeIcon: {
    alignSelf: 'flex-end',
    marginBottom: 5,
  },
  modalHeader: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  modalImage: {
    width: 80,
    height: 100,
    marginRight: 10,
    resizeMode: 'cover',
  },
  modalTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  modalAuthor: {
    fontSize: 14,
    color: '#555',
  },
  modalDescription: {
    fontSize: 14,
    color: '#333',
    marginTop: 10,
    lineHeight: 20,
  },
});
