import React,{Component} from "react";
import { View, Text, StyleSheet , TouchableOpacity ,Button, TextInput, AsyncStorage  } from 'react-native';
import axios from 'axios';

//const userInfo = { username: 'yasmin', password:'1234' }

class Register extends Component {

  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     username:'',
  //     email:'',
  //     password:'',
  //     age:'',
  //     gender:'',
  //   }
  // }
    state={
        username:'',
        email:'',
        password:'',
        age:'',
        gender:'',
    }
 
//     componentDidMount() {
//         //read from local storge
//         // this.setState
//         //this.render()
//     }

    saveData(userInfo){
      AsyncStorage.setItem('_id',(userInfo._id));
      AsyncStorage.setItem('username',(userInfo.username));
      AsyncStorage.setItem('email',(userInfo.email));
      AsyncStorage.setItem('password',(userInfo.password));
      AsyncStorage.setItem('age',(userInfo.age));
      AsyncStorage.setItem('gender',(userInfo.gender));
    }

    addRegistration = () => {
        var that=this;
        const { navigate } = this.props.navigation;
        axios
          .post("http://10.60.243.107:2000/registration", this.state)
          // .then(({ data }) => {
          //   console.log("REGISTAR:", data);
          //   this.setState({ user: data });
          // })
          .then(async function (response) {
            that.saveData(response.data);
            var role= await AsyncStorage.getItem('username');
          // console.log('Role :', role);
          // console.log('Uuuuuuuuuuuuu :', response.data._id);
       
          if(role){
            alert("registaration success")
            navigate('Login',response.data)
          }
        })
          .catch(error => {
            console.log(error);
          });
    
        console.log('State :', this.state);
      };

    // change = (e,name) =>{
    //     console.log('name :', name);
    //     this.setState({
    //         [name]:e.nativeEvent.text
    //     })
    //  }

   

   render() {
      
    return (
      <View style={styles.screen}>
        <TextInput onChangeText={(username) => this.setState({username})} type="text" placeholder="UserName"  style={styles.inputfield} />
        <TextInput onChangeText={(email) => this.setState({email})} autoCompleteType="email" placeholder="Email"  style={styles.inputfield} />
        <TextInput onChangeText={(password) => this.setState({password})} secureTextEntry={true} placeholder="Password"  style={styles.inputfield} />
        <TextInput onChangeText={(age) => this.setState({age})} type="number" placeholder="Age" style={styles.inputfield} />
        <TextInput onChangeText={(gender) => this.setState({gender})} type="text" placeholder="Gender" style={styles.inputfield} />
        <Button title="Submit" onPress={this.addRegistration }/>
        {/* <Text>Register screen </Text> */}

        <TouchableOpacity 
             onPress={()=> this.props.navigation.navigate('Login')}>
             <Text>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity 
              onPress={()=> this.props.navigation.replace('Register')}>
             <Text>Register</Text>
        </TouchableOpacity>
        <TouchableOpacity 
             onPress={()=> this.props.navigation.goBack()}>
             <Text>Go Back</Text>
        </TouchableOpacity>

      </View>
    );
  }
  // _login = async() => {
  //   if(userInfo.username === this.state.username && userInfo.password === this.state.password){
  //     //alert('Logged In');
  //     await AsyncStorage.setItem('is');
  //     this.props.navigation.navigate('Menu');
  //   } else {
  //     alert('Username or Password is incorrect');
  //   }
  // }
}

const styles = StyleSheet.create({
  screen: {},
  inputfield: {
    height: 40,
    width: 150,
    borderColor: "gray",
    padding: 10,
    borderWidth: 1,
    margin: 5
  }
});




export default Register;

//  in pakege.json  "@react-native-community/async-storage": "^1.6.2",

///////////////////////////////////////////////////////////////////////////
// import AsyncStorage from '@react-native-community/async-storage';


// readData = async (itemName) => {
//   console.log('readData');

//   try {
//     const value = await AsyncStorage.getItem(itemName);
//     if (value !== null) {
//       console.log('my data is :', JSON.parse(value))
//       this.setState({ itemName: JSON.parse(value) })
//     } else {
//       console.log('no data');
    
//     }

//   } catch (error) {
//     alert(error)
//   }
// }

// storeData = async (itemName,value) => {
//   console.log('storeData');
//   try {
//     await AsyncStorage.setItem(itemName, JSON.stringify(value))
//   } 
//   catch (error) {
//     alert(error)
//   }
// }

// this.storeData("itemName",[1,2,3,4])
// this.readData("itemName");