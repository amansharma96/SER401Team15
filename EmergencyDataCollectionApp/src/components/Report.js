import React, { useState } from 'react';
import { View, StyleSheet, Text} from 'react-native';

export default function HomeButton(props) {
    const { address = '123 Sesame Street Tempe, AZ 30204', title = 'Fire Incident' } = props;
    return (
        <View style={styles.container}>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.address}>{address}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'flex-start',
        justifyContent: 'center',
        width: '80%',
        paddingVertical: 14,
        paddingHorizontal: 14,
        borderRadius: 12,
        elevation: 3,
        backgroundColor: '#ffcc00',
    },
    title: {
        color: '#1c1c1e',
        fontSize: 18,
        fontFamily: 'Arial',
        lineHeight: 24,
        fontWeight: 'bold',
        letterSpacing: 0.1
    },
    address: {
        color: '#1c1c1e',
        fontSize: 14,
        fontFamily: 'Arial',
        lineHeight: 24,
        fontWeight: 'normal',
        letterSpacing: 0.1,
        marginLeft: 20
    },
})