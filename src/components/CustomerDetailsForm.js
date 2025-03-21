

import React, { useState } from 'react';


import {
    View,
    Text,
    TouchableOpacity,
    TextInput,
    StyleSheet,
    Modal,
    ScrollView
  } from 'react-native';
  import Ionicons from 'react-native-vector-icons/Ionicons';
  
  export default function CustomerDetailsForm({ visible, onClose, onSubmit }) {
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [address, setAddress] = useState('');
    const [city, setCity] = useState('');
    const [pincode, setPincode] = useState('');
  
    const handleAdd = () => {
      const data = { name, phone, email, address, city, pincode };
      onSubmit(data);
    };
  
    return (
      <Modal
        visible={visible}
        transparent
        animationType="slide"
        onRequestClose={onClose}
      >
        <View style={styles.overlay}>
          <View style={styles.container}>
            <View style={styles.closeButtonWrapper}>
              <TouchableOpacity onPress={onClose} style={styles.closeCircle}>
                <Ionicons name="close" size={20} color="#fff" />
              </TouchableOpacity>
            </View>
            <ScrollView style={styles.scrollArea}>
              <Text style={styles.title}>Customer Details</Text>
              <TextInput
                style={styles.input}
                placeholder="Name"
                value={name}
                onChangeText={setName}
              />
              <TextInput
                style={styles.input}
                placeholder="Phone"
                keyboardType="phone-pad"
                value={phone}
                onChangeText={setPhone}
              />
              <TextInput
                style={styles.input}
                placeholder="Email"
                keyboardType="email-address"
                value={email}
                onChangeText={setEmail}
              />
              <TextInput
                style={styles.input}
                placeholder="Address"
                value={address}
                onChangeText={setAddress}
              />
              <TextInput
                style={styles.input}
                placeholder="City"
                value={city}
                onChangeText={setCity}
              />
              <TextInput
                style={styles.input}
                placeholder="Pincode"
                keyboardType="numeric"
                value={pincode}
                onChangeText={setPincode}
              />
              <TouchableOpacity style={styles.addButton} onPress={handleAdd}>
                <Text style={styles.addButtonText}>ADD</Text>
              </TouchableOpacity>
            </ScrollView>
          </View>
        </View>
      </Modal>
    );
  }
  
  const styles = StyleSheet.create({
    overlay: {
      flex: 1,
      // This ensures taps go to the modal, not behind it
      backgroundColor: 'rgba(0,0,0,0.4)',
      justifyContent: 'flex-end',
      zIndex: 9999,
    },
    container: {
      backgroundColor: '#fff',
      borderTopLeftRadius: 12,
      borderTopRightRadius: 12,
      paddingTop: 40,
      paddingHorizontal: 20,
      paddingBottom: 20,
      maxHeight: '80%',
      position: 'relative',
      zIndex: 10000,
    },
    closeButtonWrapper: {
      position: 'absolute',
      width: '100%',
      alignItems: 'center',
      top: -20,
    },
    closeCircle: {
      backgroundColor: '#D32F2F',
      borderRadius: 25,
      width: 40,
      height: 40,
      alignItems: 'center',
      justifyContent: 'center',
    },
    scrollArea: {
      flex: 1,
    },
    title: {
      fontSize: 18,
      fontWeight: 'bold',
      marginBottom: 10,
    },
    input: {
      borderWidth: 1,
      borderColor: '#ccc',
      borderRadius: 5,
      padding: 10,
      marginBottom: 10,
    },
    addButton: {
      backgroundColor: '#D32F2F',
      borderRadius: 5,
      paddingVertical: 12,
      alignItems: 'center',
      marginTop: 10,
    },
    addButtonText: {
      color: '#fff',
      fontWeight: 'bold',
      fontSize: 16,
    },
  });
  












