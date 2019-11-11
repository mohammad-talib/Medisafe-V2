import React,{Component} from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Button, TextInput, AsyncStorage } from 'react-native';
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
        password: "",
      }; 

    // logUser = (e, name) => {
    //   this.setState({
    //     [name]: e.nativeEvent.text
    //   });
    // };
    
    saveData(userInfo){
      AsyncStorage.setItem('username',(userInfo.email));
      AsyncStorage.setItem('email',(userInfo.password));
      AsyncStorage.setItem('_id',(userInfo._id));
    }

    userLogin = ()=>{
        // console.log('loginUser :', loginUser )
        var that=this;
        const { navigate } = this.props.navigation;
        axios
        .post("http://10.60.243.107:2000/login", this.state)
        // .then(({ data }) => {
        //   console.log("REGISTAR:", data);
        //   this.setState({ user: data });
        //   console.log('userrrrrrrrrrrrrrrrrrrrr :', this.state.user._id);
        // })
        .then(async function (response) {
          that.saveData(response.data);
          var role= await AsyncStorage.getItem('_id');
        // console.log('Role :', role);
        console.log('Uuuuuuuuuuuuu :', response.data._id);
     
        if(role){
         navigate('Menu',response.data)
        }
      })
        .catch(error => {
          console.log(error);
        });
    }
    //   getUser = () => {
    //     // console.log("State :", this.state);
    //     this.userLogin(this.state);
    //   };
    
      render() {
        return(
            <View style={styles.screen}>
                <Text>Login screen </Text>

                <TextInput
                    // onChange={event => this.logUser(event, "email")}
                    onChangeText={(email) => this.setState({email})}
                    autoCompleteType="email"
                    placeholder="Email"
                    style={styles.inputfieldlog}
                />
                <TextInput
                    // onChange={event => this.logUser(event, "password")}
                    onChangeText={(password) => this.setState({password})}
                    secureTextEntry={true}
                    placeholder="Password"
                    style={styles.inputfieldlog}
                />


{/* , ()=>{this.props.navigation.navigate('Menu', email=(this.state.email))} */}
                {/* <Button title="Login" onPress={this.userLogin , this.props.navigation.navigate('Menu', this.state.email)} /> */}
                <Button title="Login" onPress={this.userLogin} />
                {/* <Button title="Show" onPress={this.props.navigation.navigate('Menu', this.state.user._id)} /> */}
                
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