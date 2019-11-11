import React,{Component} from 'react';
import { View, Text, StyleSheet,AsyncStorage } from 'react-native';

// const HamburgerMenu = props => {
//     return(
//         <View style={styles.screen}>
//             <Text>HamburgerMenu screen </Text>
//             <Text>{props.navigation.state.params.email}</Text>

//         </View>
//     );
// };

class HamburgerMenu extends Component {
   
    render() { 
        const {username, email, age, gender}=this.props.navigation.state.params
        return ( 
            <View>
                <Text>HamburgerMenu screen </Text>
                <Text>{username}</Text>
                <Text>{email}</Text>
                <Text>{age}</Text>
                <Text>{gender}</Text>
            </View>
         );
    }
}
 


const styles = StyleSheet.create({
    screen:{

    }
})

export default HamburgerMenu;