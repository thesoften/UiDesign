import {
    View, 
    Text,
    ImageBackground,
    StyleSheet,
    TextInput,
    TouchableOpacity,
    Image,
  } from 'react-native'
  import React,{useState} from 'react'
  import * as Animatable from 'react-native-animatable';
  import AsyncStorage from '@react-native-async-storage/async-storage';
  
  
  const Login: React.FC = () => {
    
         const [username, SetUsername] = useState('');
         const [email, setEmail] = useState('');
         const [password, setPassword] = useState('');
  
  
         const handleLogin = async () => {
          // check if email and password are not empty
          if (!username || !email || !password ) {
            alert('Please enter email and password');
            return;
          }
      
          try {
            // save email and password to AsyncStorage
            await AsyncStorage.setItem('username', username);
            await AsyncStorage.setItem('email', email);
            await AsyncStorage.setItem('password', password);
            
      
            // retrieve email and password from AsyncStorage
            const storedUsername = await AsyncStorage.getItem('username');
            const storedEmail = await AsyncStorage.getItem('email');
            const storedPassword = await AsyncStorage.getItem('password');
            if(username === storedUsername && email === storedEmail && password === storedPassword){
              alert('login')
            }else{
              alert('wrong')
            }
      
            console.warn(storedUsername);
            console.warn(storedEmail);
            console.warn(storedPassword);
      
          } catch (error) {
            console.log(error);
          }
        };
  
  
    return (
          <ImageBackground  source={require('../assets/background.png')} resizeMode='cover' style={styles.imagebackgroundwrapper} >
           <Animatable.View animation='bounceInDown' style={styles.loginWrapper}>
           <Text style={styles.loginText}>Login</Text>
           </Animatable.View>
           <Animatable.View animation='slideInLeft' style={styles.inputTextWrapper}>
            <TextInput
             placeholder='Username'
             placeholderTextColor='rgb(239, 239, 239)'
             style={styles.inputText}
             value={username}
             onChangeText={(val) => SetUsername(val)}/>
            <TextInput 
            placeholder='Email'
            placeholderTextColor='rgb(239, 239, 239)'
            style={styles.inputText}
            value={email}
             onChangeText={(val) => setEmail(val)}/>
            <TextInput 
            placeholder='Password'
            placeholderTextColor='rgb(239, 239, 239)'
            style={styles.inputText}
            secureTextEntry={true}
            value={password}
             onChangeText={(val) => setPassword(val)}/>
           </Animatable.View>
           <Animatable.View animation='bounceInUp' style={styles.btnmainWrapper}>
            <TouchableOpacity 
            style={styles.btnWrapper}
            onPress={handleLogin}>
            <Text style={styles.btnText}>Login</Text>
            </TouchableOpacity>
           </Animatable.View>
           <Animatable.View animation='bounceIn' style={styles.iconWrapper}>
            <TouchableOpacity>
            <View style={styles.imgWrapper}>
              <Image source={require('../assets/google.png')}/>
            </View>
            </TouchableOpacity>
            <TouchableOpacity>
            <View style={styles.imgWrapper}>
              <Image source={require('../assets/twitter.png')}/>
            </View>
            </TouchableOpacity>
            <TouchableOpacity>
            <View style={styles.imgWrapper}>
              <Image source={require('../assets/facebook.png')}/>
            </View>
            </TouchableOpacity>
           </Animatable.View>
           <View style={styles.lastWrapper}>
            <Text style={styles.lastWrapperText}>Already have an account? <Text style={{fontWeight:'800'}}>Login</Text></Text>
           </View>
          </ImageBackground>
    )
  }
  
  
  export default Login
  let styles = StyleSheet.create({
      imagebackgroundwrapper:{
      height:'100%',
      },
    loginWrapper:{
      alignItems:'center',
      marginTop:100
    },
    loginText:{
      fontSize:40,
      fontWeight:'600',
      color:'rgb(239, 239, 239)'
    },
    inputTextWrapper:{
      flexDirection:'column',
      alignItems:'center',
      // marginTop:20
      
    },
    inputText:{
      fontSize:20,
      borderBottomWidth:1,
      borderBottomColor:'rgb(239, 239, 239)',
      width:340,
      marginTop:50,
      paddingVertical:10,
      color:'rgb(239, 239, 239)'
    },
    btnmainWrapper:{
      alignItems:'center',
      marginTop:50
    },
    btnWrapper:{
      backgroundColor:'rgb(191, 189, 189)',
      borderColor:'rgb(239, 239, 239)',
      borderWidth:3,
      alignItems:'center',
      justifyContent:'center',
      width:350,
      height:60,
      borderRadius:50
    },
    btnText:{
      fontSize:23,
      fontWeight:'900',
      color:'rgb(239, 239, 239)'
    },
    iconWrapper:{
      flexDirection:'row',
      // alignItems:'center',
      // justifyContent:'center',
      marginTop:30,
      width:350,
      // backgroundColor:'red',
      alignItems:'center',
      marginLeft:30,
      justifyContent:'space-between'
    },
    imgWrapper:{
      borderWidth:1,
      height:45,
      width:110,
      // marginLeft:30,
      justifyContent:'center',
      alignItems:'center',
      borderRadius:50,
      borderColor:'rgb(239, 239, 239)'
    },
    lastWrapper:{
      alignItems:'center',
      marginTop:50
    },
    lastWrapperText:{
      fontSize:17,
      color:'rgb(239, 239, 239)',
      fontWeight:'600'
    }
  })