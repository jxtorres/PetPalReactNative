import React from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';
import Svg, { Line } from 'react-native-svg';

export default class NewPetCircle extends React.Component {
    render() {
        const { imageUrl, name, petId } = this.props;
        return (
            <View style={styles.container}>

                <View style={styles.circle}>
                    <Svg width="40" height="40" viewBox="0 0 40 40">
                        <Line
                        x1="20"
                        y1="10"
                        x2="20"
                        y2="30"
                        stroke="black"
                        strokeWidth="4"
                        strokeLinecap="round"
                        />
                        <Line
                        x1="10"
                        y1="20"
                        x2="30"
                        y2="20"
                        stroke="black"
                        strokeWidth="4"
                        strokeLinecap="round"
                        />
                    </Svg>
                </View>
                { <Text style={styles.name}>Add Pet</Text>}
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