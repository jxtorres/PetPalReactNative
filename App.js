import { Text, View } from 'react-native';
import PetCircle from './components/PetCircle';

export default function App() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <PetCircle imageUrl="https://cdn2.thecatapi.com/images/HksHrR8-9.jpg" name="Whiskers" petId="1" />
    </View>
  );
} 