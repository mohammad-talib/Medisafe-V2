import React,{Component} from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Button, TextInput } from 'react-native';
import axios from 'axios';

// const Login = props => {
//     return(
//         <View style={styles.screen}>
//             <Text>Login screen </Text>
//             <TouchableOpacity 
//             onPress={()=> props.navigation.goBack()}>
//             <Text>Go Back</Text>
//             </TouchableOpacity>
//         </View>
//     );
// };



class Login extends Component {

    state = {
        email: "",
        password: ""
      }; 

    userLogin = ()=>{

        // console.log('loginUser :', loginUser )
        axios
        .post("http://10.60.95.169:2000/login", this.state)
        .then(({ data }) => {
          console.log("REGISTAR:", data);
          this.setState({ user: data });
        })
        .catch(error => {
          console.log(error);
        });
    
    
      }

      logUser = (e, name) => {
        this.setState({
          [name]: e.nativeEvent.text
        });
      };
    
    //   getUser = () => {
    //     // console.log("State :", this.state);
    //     this.userLogin(this.state);
    //   };
    
      render() {
        return(
            <View style={styles.screen}>
                <Text>Login screen </Text>

                <TextInput
                    onChange={event => this.logUser(event, "email")}
                    autoCompleteType="email"
                    placeholder="Email"
                    style={styles.inputfieldlog}
                />
                <TextInput
                    onChange={event => this.logUser(event, "password")}
                    secureTextEntry={true}
                    placeholder="Password"
                    style={styles.inputfieldlog}
                />


{/* , ()=>{this.props.navigation.navigate('Menu', email=(this.state.email))} */}
                {/* <Button title="Login" onPress={this.userLogin , this.props.navigation.navigate('Menu', this.state.email)} /> */}
                <Button title="Login" onPress={this.userLogin } />

                {/* // onPress={()=>{
                // props.navigation.navigate({routeName: 'Register'}) */}

                <TouchableOpacity 
                    onPress={()=> props.navigation.goBack()}>
                    <Text>Go Back</Text>
                </TouchableOpacity>

            </View>
        );
      }
}

const styles = StyleSheet.create({
    screen:{

    }
})

export default Login ;