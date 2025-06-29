import React from 'react';
import { ScrollView, View, StyleSheet, Animated } from 'react-native';
import PetCircle from './PetCircle';
import NewPetCircle from './NewPetCircle';
import { useState } from 'react';
import { TouchableOpacity } from 'react-native';

export default class PetCarousel extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            selectedId: null,
        };
        // Create animated values for each pet
        this.animatedSizes = {};
        this.props.pets.forEach(pet => {
            this.animatedSizes[pet.id] = new Animated.Value(120); // Start with default size
        });
    }

    handleSelect = (id) => {
        this.setState({ selectedId: id });
        console.log(id);
        
        // Animate all pets
        this.props.pets.forEach(pet => {
            const targetSize = pet.id === id ? 200 : 120;
            Animated.spring(this.animatedSizes[pet.id], {
                toValue: targetSize,
                useNativeDriver: false,
                tension: 160,
                friction: 50,
            }).start();
        });
    }

    render() {
        const { pets, onAddPet } = this.props;

        return (
            <View style={styles.wrapper}>


                <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.scrollContainer}>
                    {
                        pets.map((pet) => (
                            <TouchableOpacity key={pet.id} onPress={() => this.handleSelect(pet.id)} activeOpacity={0.8} style={{marginHorizontal: 10, justifyContent: 'center', alignItems: 'center', marginTop: -60}}>
                                <Animated.View style={{ width: this.animatedSizes[pet.id], height: this.animatedSizes[pet.id] }}>
                                    <PetCircle key={pet.id} imageUrl={pet.imageUrl} name={pet.name} petId={pet.id} size={this.animatedSizes[pet.id]}  />
                                </Animated.View>
                            </TouchableOpacity>
                        ))
                    }
                    <NewPetCircle onPress={onAddPet} />
                    
                    
                </ScrollView>

            </View>
            
        );
    }
}

const styles = StyleSheet.create({
    wrapper: {
        justifyContent: 'center',
        alignItems: 'center',
        height: 500,
    },
    scrollContainer: {
        flexDirection: 'row',
        paddingHorizontal: 20,
        paddingVertical: 10,
        alignItems: 'center',
        justifyContent: 'center',
        height: 500,
    },
});