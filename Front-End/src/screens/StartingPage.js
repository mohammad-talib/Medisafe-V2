import React,{Component} from "react";
import { View, Text, StyleSheet , Button } from 'react-native';

const StartingPage = props => {
    console.log('StartingPage: ',props);
    return(
        <View style={styles.screen}>
            <Text>Starting Page screen </Text>
            <Button title="Start" onPress={()=>{
                props.navigation.navigate({routeName: 'Register'});
            }} />
        </View>
    );
};

const styles = StyleSheet.create({
    screen:{

    }
})

export default StartingPage;