import { Text, View } from 'react-native';
import PetCircle from './components/PetCircle';
import NewPetCircle from './components/NewPetCircle';
import Svg, { Line } from 'react-native-svg';
import PetCarousel from './components/PetCarousel';
import { useState } from 'react';
import { useFonts } from 'expo-font';
import { Pacifico_400Regular } from '@expo-google-fonts/pacifico';
import HeaderBar from './components/HeaderBar';

export default function App() {
  let [fontsLoaded] = useFonts({
    Pacifico_400Regular,
  });

  if (!fontsLoaded) {
    return null;
  }

  const pets = [
    { id: 1, imageUrl: 'https://cdn2.thecatapi.com/images/HksHrR8-9.jpg', name: 'Whiskers' },
    { id: 2, imageUrl: 'https://images.unsplash.com/photo-1561948955-570b270e7c36?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGNhdHxlbnwwfHwwfHx8MA%3D%3D', name: 'Fluffy' },
    { id: 3, imageUrl: 'https://images.unsplash.com/photo-1571566882372-1598d88abd90?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGNhdHxlbnwwfHwwfHx8MA%3D%3D', name: 'Emily' },
  ];

  const handleAddPet = () => {
    console.log('add pet');
  };

  return (
    
    <View style={{ justifyContent: 'center', alignItems: 'center' , backgroundColor: 'mintcream'}}>
       <HeaderBar />
      <PetCarousel pets={pets} onAddPet={handleAddPet} />
  </View>
  );
} 