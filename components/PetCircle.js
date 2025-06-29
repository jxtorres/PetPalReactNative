import React from 'react';
import { View, Image, Text, StyleSheet, Animated } from 'react-native';

export default class PetCircle extends React.Component {
    render() {
        const { imageUrl, name, petId, size = 120 } = this.props;
        
        // Handle both animated values and regular numbers
        const circleSize = size instanceof Animated.Value ? size : size;
        const borderRadius =  size._value / 2;
        
        return (
            <View style={styles.container}>
                <Animated.View style={[
                    styles.circle, 
                    {
                        width: circleSize, 
                        height: circleSize, 
                        borderRadius: borderRadius
                    }
                ]}>
                    <Image source={{ uri: imageUrl }} style={styles.image} />
                </Animated.View>
                {name && <Text style={styles.name}>{name}</Text>}
            </View>
            
        );
    }
}

const styles = StyleSheet.create({
    circle: {
        width: 120,
        height: 120,
        borderRadius: 60,
        backgroundColor: '#eee',
        overflow: 'hidden',
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: 'black',
        borderWidth: 4,
    },
    image: {
        width: '100%',
        height: '100%',
        resizeMode: 'cover',
    },
    name: {
        fontSize: 32,
        fontWeight: '500',
        marginTop: '20%',
    },
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: 20,
        marginRight: 20,
    },
});