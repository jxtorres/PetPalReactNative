import { Text, View } from 'react-native';
import PetCircle from './components/PetCircle';
import NewPetCircle from './components/NewPetCircle';
import Svg, { Line } from 'react-native-svg';
import PetCarousel from './components/PetCarousel';
import { useState } from 'react';

export default function App() {

  const pets = [
    { id: 1, imageUrl: 'https://cdn2.thecatapi.com/images/HksHrR8-9.jpg', name: 'Whiskers' },
    { id: 2, imageUrl: 'https://cdn2.thecatapi.com/images/HksHrR8-9.jpg', name: 'Fluffy' },
    { id: 3, imageUrl: 'https://cdn2.thecatapi.com/images/HksHrR8-9.jpg', name: 'Emily' },
  ];

  const handleAddPet = () => {
    console.log('add pet');
  };

  return (
    
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', flexDirection: 'row' }}>
      <PetCarousel pets={pets} onAddPet={handleAddPet} />
  </View>
  );
} 