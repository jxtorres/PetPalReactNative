import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; // Expo's icon library

export default class HeaderBar extends React.Component {
  render() {
    const { onMenuPress, logoSource } = this.props;

    return (
      <View style={styles.container}>
        <Ionicons name="menu" size={28} color="black" />
        <View style={styles.titleContainer}>
            <Text style={styles.titleText}>PetPals</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#E3AFC3', // light pink
    height: 60,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    borderBottomWidth: 1,
    borderColor: '#ccc',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 1000,
    width: '96%',
    borderWidth: 3,              // Thicker border like in the image
    borderColor: 'black',
    borderRadius: 2,
    marginHorizontal: 32,        // Creates left/right margin
    marginTop: 32, 
    marginLeft: 64,
    marginRight: 64,
    paddingHorizontal: 32, 
    borderBottomWidth: 3,
  },
  menuButton: {
    padding: 8,
  },
  titleContainer: {
    flex: 1,
    alignItems: 'center',
    position: 'absolute',
    left: 0,
    right: 0,
  },
  titleText: {
    fontSize: 24,
    fontWeight: 'bold',
    fontFamily: 'Pacifico_400Regular', // You can replace with any available font
  },
  logo: {
    height: 35,
    width: 100,
  },
  rightSpace: {
    width: 36, // Same as menu icon width to balance center alignment
  },
});
