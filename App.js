import { Text, View } from 'react-native';
import PetCircle from './components/PetCircle';
import NewPetCircle from './components/NewPetCircle';
import Svg, { Line } from 'react-native-svg';

export default function App() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', flexDirection: 'row' }}>
      <PetCircle imageUrl="https://cdn2.thecatapi.com/images/HksHrR8-9.jpg" name="Whiskers" petId="1" />
      <NewPetCircle />
    </View>
  );
} 