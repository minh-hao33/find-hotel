import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, FlatList } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { FontAwesome } from '@expo/vector-icons';

export default function BookingDetailsScreen() {
  const bookingDetails = [
    {
      id: '1',
      title: 'Room details',
      details: [
        { label: 'Checkin date & time', value: '23 July 2019, 10:00 AM' },
        { label: 'Checkout date & time', value: '25 July 2019, 10:00 AM' },
        { label: 'No. of Adults', value: '2' },
        { label: 'No. of Children', value: '2' },
        { label: 'No. of rooms', value: '1' },
        { label: 'Price', value: '$125' },
        { label: 'Tax', value: '$20' },
        { label: 'Total', value: '$145', total: true },
      ],
    },
    {
      id: '2',
      title: 'Food details',
      details: [
        { label: 'Bagels with turkey and bacon', value: '$10' },
        { label: 'Sandwich', value: '$5' },
        { label: 'Sub total', value: '$15' },
        { label: 'Service tax', value: '$2' },
        { label: 'Total', value: '$17', total: true },
      ],
    },
  ];

  const renderBookingSection = ({ item }) => (
    <View style={styles.section}>
      <Text style={styles.subHeading}>{item.title}</Text>
      {item.details.map((detail, index) => (
        <View key={index} style={styles.detailRow}>
          <Text style={detail.total ? styles.totalLabel : styles.label}>{detail.label}</Text>
          <Text style={detail.total ? styles.totalValue : styles.value}>{detail.value}</Text>
        </View>
      ))}
    </View>
  );

  return (
    <View style={styles.container}>
      {/* Header with back arrow */}
      <View style={styles.header}>
        <TouchableOpacity>
          <FontAwesome name="arrow-left" size={24} color="black" />
        </TouchableOpacity>
        <Text style={styles.heading}>Booking details</Text>
      </View>

      <FlatList
        data={bookingDetails}
        renderItem={renderBookingSection}
        keyExtractor={(item) => item.id}
      />

      {/* Book Again Button */}
      <TouchableOpacity style={styles.buttonContainer}>
        <LinearGradient
          colors={['#0090FF', '#00FF94']}
          start={{ x: 0.0, y: 0.5 }}
          end={{ x: 1.0, y: 0.5 }}  // Horizontal gradient
          style={styles.button}
        >
          <Text style={styles.buttonText}>Book again</Text>
        </LinearGradient>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
    paddingHorizontal: 20,
    paddingVertical: 10,
    paddingTop: 40,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  heading: {
    fontSize: 30, // Changed to 20 for body size
    fontWeight: 'bold',
    marginLeft: 10,
  },
  section: {
    marginBottom: 20,
  },
  subHeading: {
    fontSize: 14, // Changed to 20 for body size
    fontWeight: 'bold',
    color: '#007AFF',
    marginBottom: 10,
  },
  detailRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  label: {
    fontSize: 14, // Changed to 20 for body size
    color: '#333',
  },
  value: {
    fontSize: 14, // Changed to 20 for body size
    color: '#333',
  },
  totalLabel: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  totalValue: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#333',
  },
  buttonContainer: {
    marginTop: 20,
  },
  button: {
    paddingVertical: 15,
    alignItems: 'center',
    borderRadius: 25,
  },
  buttonText: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
