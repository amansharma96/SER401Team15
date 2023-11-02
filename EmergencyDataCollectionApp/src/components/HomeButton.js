import React, { useState } from 'react';
import { Pressable, StyleSheet, Text} from 'react-native';


export default function HomeButton(props) {
    const { onpress, title = 'click' } = props;
    return (
        <Pressable style={styles.button}>
            <Text style={styles.text}>{title}</Text>
        </Pressable>
    );
}

const styles = StyleSheet.create({
    button: {
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        height: 200,
        width: 200,
        paddingVertical: 14,
        paddingHorizontal: 14,
        borderRadius: 12,
        elevation: 3,
        backgroundColor: '#ffcc00',
    },
    text: {
        color: '#1c1c1e',
        fontSize: 24,
        fontFamily: 'Arial',
        lineHeight: 24,
        fontWeight: 'bold',
        letterSpacing: 0.1,
    },
})