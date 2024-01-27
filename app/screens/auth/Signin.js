
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { BrandTitle } from '../../components/brandTitle/BrandTitle';
import { base } from '../../style';
import { TextInputComp } from '../../components/form/TextInputComp';
import { useState } from 'react';
import { SubmitBtnComp } from '../../components/form/SubmitBtnCmp';
import axios from 'axios';
import API from '../../API';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const Signin = ({ navigation }) => {

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState([])

  const handleNavigateToSignup = () => {
    navigation.navigate("Signup", {
      headerTitle: "Signup",
    });
  };

  const handleSubmit = async () => {
    try {
      setLoading(true)
      console.log('UserName :', username)
      console.log("Password :", password)

      const res = await axios.post(API.SIGNIN_URL, {
        username,
        password
      })
      if (res.data.errors) {
        setErrors(res.data.errors)
        setLoading(false)
      } else {
        await AsyncStorage.setItem('@auth', JSON.stringify(res.data))
        setUsername('')
        setPassword('')
        setErrors([])
        if (res.data.user.role == 'user') {
          navigation.navigate('UserDashboard')
        }
        else if (res.data.user.role == 'admin') {
          navigation.navigate('AdminDashboard')
        }
      }
    } catch (error) {
      setLoading(false)
      setErrors(errors)
    }
  }

  return (
    <View style={styles.container}>
      <View style={{
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center'
      }}>
        <View style={styles.pageImge} >
          <BrandTitle />
          <View
            style={{
              alignItems: 'center',
              paddingBottom: 20
            }}
          >
            <Image
              source={require("../../img/login-v2.png")}
              style={base.authImage}
            />
          </View>


          <TextInputComp
            label={true}
            labelTitle={"USERNAME"}
            placeholder="Enter your username"
            state={username}
            autoCorrect={false}
            setState={setUsername}
            fieldName={'username'}
            errorState={errors}
          />
          <TextInputComp
            label={true}
            labelTitle={"PASSWORD"}
            placeholder="Enter your password"
            state={password}
            autoCorrect={false}
            setState={setPassword}
            fieldName={'password'}
            errorState={errors}
          />
          <View style={base.privacyPolicyBox}>
            <Text style={base.titleSubHeading}>I agree to</Text>
            <Text style={base.privacyPolicyLink}>privacy policy & terms</Text>
          </View>
          <SubmitBtnComp
            btnTitle={"Submit"}
            loading={loading}
            handleSubmit={handleSubmit}
          />
          <View style={base.createAccountLink}>
            <Text style={base.titleSubHeadingColor}>
              Don't have any account?{" "}
            </Text>
            <TouchableOpacity onPress={handleNavigateToSignup}>
              <Text style={base.titleSubHeadingColor}> Signup</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#FFFFFF",
  },
  pageImge: {
    backgroundColor: '#FFF',
    height: '80%',
    paddingLeft: 30,
    paddingRight: 30
  },
})