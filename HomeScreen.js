import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, ScrollView, Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { FontAwesome, MaterialIcons } from '@expo/vector-icons';
import DateTimePicker from '@react-native-community/datetimepicker';

export default function HomeScreen() {
  const [isAirConditioner, setIsAirConditioner] = useState(true);
  const [isFan, setIsFan] = useState(false);
  const [isHotel, setIsHotel] = useState(true);
  const [isDropdownVisible, setIsDropdownVisible] = useState(false); // State to show/hide dropdown
  const [selectedLocation, setSelectedLocation] = useState('Where do you want?'); // State for selected location
  
  const [checkinDate, setCheckinDate] = useState(null);
  const [showCheckinDatePicker, setShowCheckinDatePicker] = useState(false);
  const [showCheckinTimePicker, setShowCheckinTimePicker] = useState(false);

  const [checkoutDate, setCheckoutDate] = useState(null);
  const [showCheckoutDatePicker, setShowCheckoutDatePicker] = useState(false);
  const [showCheckoutTimePicker, setShowCheckoutTimePicker] = useState(false);
  
  const [adults, setAdults] = useState(0);
  const [children, setChildren] = useState(0);
  const [rooms, setRooms] = useState(0);
  
  const [isGuestsVisible, setIsGuestsVisible] = useState(false); // Toggle for showing the guest section

  const handleSearch = () => {
    alert('Bắt đầu tìm kiếm!');
  };

  const handleCheckBox = (type) => {
    if (type === 'air') {
      setIsAirConditioner(!isAirConditioner);
    } else if (type === 'fan') {
      setIsFan(!isFan);
    }
  };

  const handleCheckinDateChange = (event, selectedDate) => {
    const currentDate = selectedDate || checkinDate;
    setShowCheckinDatePicker(false); // Ẩn picker sau khi người dùng chọn ngày
    setCheckinDate(currentDate);  // Cập nhật giá trị ngày check-in
    setShowCheckinTimePicker(true);
  };
  // Xử lý khi chọn giờ check-in
  const handleCheckinTimeChange = (event, selectedTime) => {
    const currentDate = selectedTime || checkinDate;
    setShowCheckinTimePicker(false); // Ẩn picker giờ
    setCheckinDate(currentDate); // Cập nhật giờ vào biến checkinDate
  };
  
  const handleCheckoutDateChange = (event, selectedDate) => {
    const currentDate = selectedDate || checkoutDate;
    setShowCheckoutDatePicker(false); // Ẩn picker sau khi người dùng chọn ngày
    setCheckoutDate(currentDate);  // Cập nhật giá trị ngày check-in
    setShowCheckoutTimePicker(true);
  };
  const handleCheckoutTimeChange = (event, selectedTime) => {
    const currentDate = selectedTime || checkoutDate;
    setShowCheckoutTimePicker(false);
    setCheckoutDate(currentDate);
  };
  
  const handleIncrement = (type) => {
    if (type === 'adults') setAdults(adults + 1);
    if (type === 'children') setChildren(children + 1);
    if (type === 'rooms') setRooms(rooms + 1);
  };

  const handleDecrement = (type) => {
    if (type === 'adults' && adults > 0) setAdults(adults - 1);
    if (type === 'children' && children > 0) setChildren(children - 1);
    if (type === 'rooms' && rooms > 0) setRooms(rooms - 1);
  };

  const handleLocationSelect = (location) => {
    setSelectedLocation(location); // Update selected location
    setIsDropdownVisible(false); // Hide dropdown after selection
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Find Hotels</Text>
      {/* Tabs for Hotel and Villa */}
      <View style={styles.tabContainer}>
        <TouchableOpacity 
          style={[styles.tab, isHotel && styles.activeTab]} 
          onPress={() => setIsHotel(true)}>
          <Text style={[styles.tabText, isHotel && styles.activeTabText]}>Hotels</Text>
        </TouchableOpacity>
        <TouchableOpacity 
          style={[styles.tab, !isHotel && styles.activeTab]} 
          onPress={() => setIsHotel(false)}>
          <Text style={[styles.tabText, !isHotel && styles.activeTabText]}>Villas</Text>
        </TouchableOpacity>
      </View>
      {/* Location Input */}
      <View style={styles.inputContainer}>
        <MaterialIcons name="location-on" size={24} color="black" />
        <TouchableOpacity onPress={() => setIsDropdownVisible(!isDropdownVisible)}>
          <Text style={[styles.input, { textAlign: 'center' }]}>{selectedLocation}</Text>
        </TouchableOpacity>
      </View>     
      {/* Dropdown menu for locations */}
      {isDropdownVisible && (
        <View style={styles.dropdownContainer}>
          <TouchableOpacity onPress={() => handleLocationSelect('Abidjan, Côte d’Ivoire')}>
            <Text style={styles.dropdownItem}>Abidjan, Côte d’Ivoire</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handleLocationSelect('Abids, Hyderabad, India')}>
            <Text style={styles.dropdownItem}>Abids, Hyderabad, India</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handleLocationSelect('Abidos Hotel Apartment, Dubai Land')}>
            <Text style={styles.dropdownItem}>Abidos Hotel Apartment, Dubai Land</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handleLocationSelect('Hotel Abi d’Oru, Sardinia, Italy')}>
            <Text style={styles.dropdownItem}>Hotel Abi d’Oru, Sardinia, Italy</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handleLocationSelect('Abidos Hotel Apartment, Al Barsha')}>
            <Text style={styles.dropdownItem}>Abidos Hotel Apartment, Al Barsha</Text>
          </TouchableOpacity>
        </View>
      )}
      {/* Checkin Date & Time */}
      <View style={styles.inputContainer}>
        <FontAwesome name="calendar" size={20} color="black" />
        <TouchableOpacity onPress={() => setShowCheckinDatePicker(true)}>
          <Text style={styles.input}>
            {checkinDate 
              ? `${checkinDate.getDate()}/${checkinDate.getMonth() + 1}/${checkinDate.getFullYear()} - ${checkinDate.getHours()}:${checkinDate.getMinutes()}`
              : "Checkin date & time"}
          </Text>
        </TouchableOpacity>
        {showCheckinDatePicker && (
          <DateTimePicker
            value={checkinDate || new Date()} // If checkinDate is null, default to current date
            mode="date"
            display="default"
            onChange={handleCheckinDateChange}
          />
        )}
        {showCheckinTimePicker && (
          <DateTimePicker
            value={checkinDate || new Date()} // If checkinDate is null, default to current date
            mode="time"
            display="default"
            onChange={handleCheckinTimeChange}
          />
        )}
      </View>

      {/* Checkout Date & Time */}
      <View style={styles.inputContainer}>
        <FontAwesome name="calendar" size={20} color="black" />
        <TouchableOpacity onPress={() => setShowCheckoutDatePicker(true)}>
          <Text style={styles.input}>
            {checkoutDate 
              ? `${checkoutDate.getDate()}/${checkoutDate.getMonth() + 1}/${checkoutDate.getFullYear()} - ${checkoutDate.getHours()}:${checkoutDate.getMinutes()}`
              : "Checkout date & time"}
          </Text>
        </TouchableOpacity>
        {showCheckoutDatePicker && (
          <DateTimePicker
            value={checkoutDate || new Date()} // If checkoutDate is null, default to current date
            mode="date"
            display="default"
            onChange={handleCheckoutDateChange}
          />
        )}
        {showCheckoutTimePicker && (
          <DateTimePicker
            value={checkoutDate || new Date()} // If checkoutDate is null, default to current date
            mode="time"
            display="default"
            onChange={handleCheckoutTimeChange}
          />
        )}
      </View>
      {/* Guests and Rooms */}
      <View style={styles.inputContainer}>
        <FontAwesome name="users" size={20} color="black" />
        <TouchableOpacity onPress={() => setIsGuestsVisible(!isGuestsVisible)}>
          <Text style={styles.text}>{adults} Adults. {children} Children. {rooms} Room</Text>
        </TouchableOpacity>
      </View>

      {/* Guests Dropdown */}
      {isGuestsVisible && (
        <View style={styles.guestDropdownContainer}>
          <View style={styles.guestRow}>
            <Text style={styles.guestLabel}>Adults</Text>
            <TouchableOpacity onPress={() => handleDecrement('adults')}><Text style={styles.control}>-</Text></TouchableOpacity>
            <Text style={styles.guestCount}>{adults}</Text>
            <TouchableOpacity onPress={() => handleIncrement('adults')}><Text style={styles.control}>+</Text></TouchableOpacity>
          </View>
          <View style={styles.guestRow}>
            <Text style={styles.guestLabel}>Children</Text>
            <TouchableOpacity onPress={() => handleDecrement('children')}><Text style={styles.control}>-</Text></TouchableOpacity>
            <Text style={styles.guestCount}>{children}</Text>
            <TouchableOpacity onPress={() => handleIncrement('children')}><Text style={styles.control}>+</Text></TouchableOpacity>
          </View>
          <View style={styles.guestRow}>
            <Text style={styles.guestLabel}>Rooms</Text>
            <TouchableOpacity onPress={() => handleDecrement('rooms')}><Text style={styles.control}>-</Text></TouchableOpacity>
            <Text style={styles.guestCount}>{rooms}</Text>
            <TouchableOpacity onPress={() => handleIncrement('rooms')}><Text style={styles.control}>+</Text></TouchableOpacity>
          </View>
        </View>
      )}

      {/* Air Conditioner and Fan Checkbox */}
      <View style={styles.checkboxContainer}>
        <TouchableOpacity 
          style={[styles.checkbox, isAirConditioner && styles.checked]} 
          onPress={() => handleCheckBox('air')}>
          {!isAirConditioner && <View style={styles.uncheckedInnerCircle} />}
          {isAirConditioner && <View style={styles.checkedInnerCircle} />}
        </TouchableOpacity>
        <Text style={styles.checkboxLabel}>Air conditioned</Text>
        <TouchableOpacity 
          style={[styles.checkbox, isFan && styles.checked]} 
          onPress={() => handleCheckBox('fan')}>
          {!isFan && <View style={styles.uncheckedInnerCircle} />}
          {isFan && <View style={styles.checkedInnerCircle} />}
        </TouchableOpacity>
        <Text style={styles.checkboxLabel}>Fan</Text>
      </View>

      {/* Search Button */}
      <TouchableOpacity style={styles.button} onPress={handleSearch}>
        <LinearGradient
          colors={['#0090FF', '#00FF94']}
          start={{ x: 0.0, y: 0.0 }}
          end={{ x: 1.0, y: 1.0 }}
          style={styles.buttonGradient}>
          <Text style={styles.buttonText}>Search</Text>
        </LinearGradient>
      </TouchableOpacity>

      {/* Featured Locations */}
      <Text style={styles.subTitle}>BEST PLACES</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.scrollContainer}>
        <View style={styles.imageContainer}>
          <Image source={require('./images/Ivory Coast.jpg')} style={styles.image} />
          <Text style={styles.imageText}>Ivory Coast</Text>
        </View>
        <View style={styles.imageContainer}>
          <Image source={require('./images/Senegal.jpg')} style={styles.image} />
          <Text style={styles.imageText}>Senegal</Text>
        </View>
        <View style={styles.imageContainer}>
          <Image source={require('./images/Ville.jpg')} style={styles.image} />
          <Text style={styles.imageText}>Ville</Text>
        </View>
        <View style={styles.imageContainer}>
          <Image source={require('./images/Lagos.jpg')} style={styles.image} />
          <Text style={styles.imageText}>Lagos</Text>
        </View>
        <View style={styles.imageContainer}>
          <Image source={require('./images/India.jpg')} style={styles.image} />
          <Text style={styles.imageText}>India</Text>
        </View>
        <View style={styles.imageContainer}>
          <Image source={require('./images/Brazil.jpg')} style={styles.image} />
          <Text style={styles.imageText}>Brazil</Text>
        </View>
      </ScrollView>

      {/* Best Hotels */}
      <Text style={styles.subTitle}>BEST HOTELS</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.scrollContainer}>
        <View style={styles.imageContainer}>
          <Image source={require('./images/Heden golf.jpg')} style={styles.image} />
          <Text style={styles.imageText}>Heden Golf</Text>
        </View>
        <View style={styles.imageContainer}>
          <Image source={require('./images/Onomo.jpg')} style={styles.image} />
          <Text style={styles.imageText}>Onomo</Text>
        </View>
        <View style={styles.imageContainer}>
          <Image source={require('./images/Adagio.jpg')} style={styles.image} />
          <Text style={styles.imageText}>Adagio</Text>
        </View>
        <View style={styles.imageContainer}>
          <Image source={require('./images/Sofiltel.jpg')} style={styles.image} />
          <Text style={styles.imageText}>Sofiltel</Text>
        </View>
        <View style={styles.imageContainer}>
          <Image source={require('./images/San Francisco.jpg')} style={styles.image} />
          <Text style={styles.imageText}>San Francisco</Text>
        </View>
        <View style={styles.imageContainer}>
          <Image source={require('./images/Viet Nam.jpg')} style={styles.image} />
          <Text style={styles.imageText}>Viet Nam</Text>
        </View>
      </ScrollView>
      {/* Bottom Navigation */}
      <LinearGradient
        colors={['#0090FF','#00FF94']}
        start={{ x: 0.0, y: 0.0 }}
        end={{ x: 1.0, y: 1.0 }}
        style={styles.bottomBar}
      >
        <TouchableOpacity style={styles.bottomButton}>
          <FontAwesome name="building" size={24} color="white" />
          <Text style={styles.bottomButtonText}>Rooms</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.bottomButton}>
          <FontAwesome name="car" size={24} color="black" />
          <Text style={styles.bottomButtonText}>Car booking</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.bottomButton}>
          <FontAwesome name="tint" size={24} color="black" />
          <Text style={styles.bottomButtonText}>Car washing</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.bottomButton}>
          <FontAwesome name="user" size={24} color="black" />
          <Text style={styles.bottomButtonText}>My profile</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.bottomButton}>
          <FontAwesome name="sliders" size={24} color="black" />
          <Text style={styles.bottomButtonText}>Settings</Text>
        </TouchableOpacity>
      </LinearGradient>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: 'white',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  tabContainer: {
    flexDirection: 'row',
    marginBottom: 15,
  },
  tab: {
    flex: 1,
    paddingVertical: 10,
    alignItems: 'center',
    borderBottomWidth: 2,
    borderBottomColor: 'transparent',
  },
  activeTab: {
    borderBottomColor: '#00BFFF',
  },
  tabText: {
    fontSize: 16,
  },
  activeTabText: {
    color: '#00BFFF',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 15,
    height: 40,
  },
  input: {
    flex: 1,
    marginLeft: 10,    
  },
  text: {
    flex: 1,
    marginLeft: 10,
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    marginBottom: 10,
  },
  checkbox: {
    width: 24,
    height: 24,
    borderRadius: 12,
    borderWidth: 2,
    borderColor: '#00BFFF',
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 10,
  },
  uncheckedInnerCircle: {
    width: 12,
    height: 12,
    borderRadius: 6,
    backgroundColor: '#D3D3D3',
  },
  checkedInnerCircle: {
    width: 12,
    height: 12,
    borderRadius: 6,
    backgroundColor: '#00BFFF',
  },
  checkboxLabel: {
    fontSize: 16,
    marginLeft: -50,
  },
  button: {
    marginTop: 10,
  },
  buttonGradient: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
  dropdownContainer: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    marginBottom: 15,
  },
  dropdownItem: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  guestDropdownContainer: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
  },
  guestRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 5,
  },
  guestLabel: {
    fontSize: 16,
  },
  guestCount: {
    fontSize: 16,
  },
  control: {
    fontSize: 20,
    paddingHorizontal: 10,
  },
  subTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  scrollContainer: {
    marginBottom: 20,
  },
  imageContainer: {
    marginRight: 10,
    alignItems: 'center',
  }, 
  image: {
    width: 80, // Giảm kích thước hình ảnh
    height: 80,
    borderRadius: 10,
  }, 
  imageText: {
    textAlign: 'center',
    marginTop: 5, // Tăng khoảng cách từ hình ảnh đến văn bản
    color: 'black',
  },
  bottomBar: {
    flexDirection: 'row',
    paddingVertical: 10,
    justifyContent: 'space-around',
  },
  bottomButton: {
    alignItems: 'center',
  },
  bottomButtonText: {
    color: 'black',
    fontSize: 12,
  },
});
