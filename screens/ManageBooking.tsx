
import Colors from "../constants/Colors";
import Spacing from "../constants/Spacing";
import FontSize from "../constants/FontSize";
import Font from "../constants/Font";
import AppTextInput from "../components/AppTextInput";

import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const ManageBooking = () => {
  const [bookings, setBookings] = useState([
    { id: '1', date: '2022-05-01', location: 'Parking Lot A', status: 'Confirmed' },
    { id: '2', date: '2022-05-05', location: 'Parking Lot B', status: 'Pending' },
    { id: '3', date: '2022-05-10', location: 'Parking Lot C', status: 'Cancelled' },
  ]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Manage Bookings</Text>
      {bookings.map((booking) => (
        <TouchableOpacity key={booking.id} style={styles.booking}>
          <View style={styles.bookingInfo}>
            <Text style={styles.bookingDate}>{booking.date}</Text>
            <Text style={styles.bookingLocation}>{booking.location}</Text>
          </View>
          <View style={[styles.bookingStatus, booking.status === 'Confirmed' ? styles.confirmed : booking.status === 'Pending' ? styles.pending : styles.cancelled]}>
            <Text style={styles.bookingStatusText}>{booking.status}</Text>
          </View>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333',
  },
  booking: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 15,
    paddingHorizontal: 20,
    backgroundColor: '#fff',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 5,
    marginBottom: 20,
  },
  bookingInfo: {
    flex: 1,
  },
  bookingDate: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
    color: '#333',
  },
  bookingLocation: {
    fontSize: 16,
    color: '#555',
  },
  bookingStatus: {
    backgroundColor: 'green',
    borderRadius: 5,
    paddingVertical: 5,
    paddingHorizontal: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 5,
  },
  bookingStatusText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',
  },
  confirmed: {
    backgroundColor: '#61C64D',
  },
  pending: {
    backgroundColor: '#FFC107',
  },
  cancelled: {
    backgroundColor: '#FF5252',
  },
});

export default ManageBooking;
