import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, FlatList, StyleSheet, Animated } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { Swipeable, GestureHandlerRootView } from 'react-native-gesture-handler';

export default function BookingHistoryScreen() {
  const [search, setSearch] = useState('');
  const [bookings, setBookings] = useState([
    {
      id: '1',
      name: 'Heden golf',
      rating: 3.9,
      reviews: 200,
      bookedOn: '23 July 2019',
      discount: '25% OFF',
      price: '$127',
      image: require('./images/Heden golf.jpg'),
    },
    {
      id: '2',
      name: 'Onomo',
      rating: 4.3,
      reviews: 150,
      bookedOn: '18 March 2019',
      discount: '15% OFF',
      price: '$120',
      image: require('./images/Onomo.jpg'),
    },
    {
      id: '3',
      name: 'Heden golf',
      rating: 3.9,
      reviews: 200,
      bookedOn: '8 March 2019',
      discount: '25% OFF',
      price: '$127',
      image: require('./images/Heden golf.jpg'),
    },
  ]);

  // Function to delete a booking
  const deleteBooking = (id) => {
    setBookings(bookings.filter((booking) => booking.id !== id));
  };

  // Render the swipeable component for each booking
  const renderBooking = ({ item }) => {
    const fadeAnim = new Animated.Value(0);

    const fadeIn = () => {
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 300,
        useNativeDriver: true,
      }).start();
    };

    fadeIn();

    return (
      <Swipeable
        renderRightActions={() => (
          <TouchableOpacity onPress={() => deleteBooking(item.id)} style={styles.deleteButton}>
            <Animated.View style={{ opacity: fadeAnim }}>
              <FontAwesome name="trash" size={24} color="white" />
              <Text style={styles.deleteButtonText}>Delete</Text>
            </Animated.View>
          </TouchableOpacity>
        )}
      >
        <View style={styles.bookingContainer}>
          <Image source={item.image} style={styles.bookingImage} />
          <View style={styles.bookingDetails}>
            <Text style={styles.bookingName}>{item.name}</Text>
            <View style={styles.ratingContainer}>
              <FontAwesome name="star" size={16} color="#f1c40f" />
              <Text style={styles.ratingText}>{item.rating}</Text>
              <Text style={styles.reviewsText}>Reviews ({item.reviews})</Text>
            </View>
            <Text style={styles.bookedOn}>Booked on: {item.bookedOn}</Text>
            <View style={styles.priceContainer}>
              <Text style={styles.discountText}>{item.discount}</Text>
              <Text style={styles.priceText}>{item.price}</Text>
            </View>
          </View>
          <TouchableOpacity style={styles.bookAgainButton}>
            <Text style={styles.bookAgainText}>Book again</Text>
          </TouchableOpacity>
        </View>
      </Swipeable>
    );
  };

  return (
    <GestureHandlerRootView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity>
          <FontAwesome name="arrow-left" size={24} color="black" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Booking history</Text>
        <TouchableOpacity>
          <Text style={styles.clearAll}>CLEAR ALL</Text>
        </TouchableOpacity>
      </View>

      {/* Search Bar */}
      <View style={styles.searchContainer}>
        <FontAwesome name="search" size={20} color="#999" />
        <TextInput
          style={styles.searchInput}
          placeholder="Search"
          value={search}
          onChangeText={setSearch}
        />
      </View>

      {/* Booking List */}
      <FlatList
        data={bookings}
        renderItem={renderBooking}
        keyExtractor={(item) => item.id}
      />
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    paddingHorizontal: 10,
    paddingTop: 20,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 10,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  clearAll: {
    color: '#0090FF',
    fontSize: 16,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 10,
    marginVertical: 10,
  },
  searchInput: {
    flex: 1,
    marginLeft: 10,
    height: 40,
  },
  bookingContainer: {
    flexDirection: 'row',
    backgroundColor: 'white',
    borderRadius: 10,
    marginBottom: 15,
    padding: 10,
    alignItems: 'center',
    elevation: 3,
  },
  bookingImage: {
    width: 80,
    height: 80,
    borderRadius: 10,
    marginRight: 10,
  },
  bookingDetails: {
    flex: 1,
  },
  bookingName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 5,
  },
  ratingText: {
    fontSize: 14,
    marginLeft: 5,
    marginRight: 10,
  },
  reviewsText: {
    fontSize: 14,
    color: '#888',
  },
  bookedOn: {
    fontSize: 14,
    color: '#555',
    marginTop: 5,
  },
  priceContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 5,
  },
  discountText: {
    color: 'orange',
    fontWeight: 'bold',
    marginRight: 10,
  },
  priceText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  bookAgainButton: {
    backgroundColor: '#00BFFF',
    paddingVertical: 5,
    paddingHorizontal: 15,
    borderRadius: 5,
  },
  bookAgainText: {
    color: 'white',
    fontSize: 14,
  },
  deleteButton: {
    backgroundColor: 'red',
    justifyContent: 'center',
    alignItems: 'center',
    width: 80,
    height: '90%',
    borderTopRightRadius: 10, // Bo góc phía trên bên phải
    borderBottomRightRadius: 10,
  },
  deleteButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});
