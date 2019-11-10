import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const HamburgerMenu = props => {
    return(
        <View style={styles.screen}>
            <Text>HamburgerMenu screen </Text>
            <Text>{props.email} </Text>

        </View>
    );
};

const styles = StyleSheet.create({
    screen:{

    }
})

export default HamburgerMenu;