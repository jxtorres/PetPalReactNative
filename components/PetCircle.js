import React from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';

export default class PetCircle extends React.Component {
    render() {
        const { imageUrl, name, petId } = this.props;
        return (
            <View style={styles.container}>

                <View style={styles.circle}>
                    <Image source={{ uri: imageUrl }} style={styles.image} />
                </View>
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
    },
});