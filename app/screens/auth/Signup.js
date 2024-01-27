
import { Alert, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { BrandTitle } from '../../components/brandTitle/BrandTitle';
import { base } from '../../style';
import { TextInputComp } from '../../components/form/TextInputComp';
import { useState } from 'react';
import { SubmitBtnComp } from '../../components/form/SubmitBtnCmp';
import axios from 'axios';
import API from '../../API';

export const Signup = ({ navigation }) => {

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState([])
  const [loading, setLoading] = useState(false);

  const handleNavigateToSignin = () => {
    navigation.navigate("Signin", {
      headerTitle: "Signin",
    });
  };

  const handleSubmit = async () => {
    try {
      setLoading(true)
      const res = await axios.post(API.SIGNUP_URL, {
        email,
        username,
        password
      })
      if (res.data.errors) {
        setErrors(res.data.errors)
      } else {
        setEmail('')
        setPassword('')
        setUsername('')
        setErrors([])
        navigation.navigate('Signin')

      }

    } catch (error) {
      setLoading(false)
      console.log(error)
    } finally {
      setLoading(false)
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
            labelTitle={"EMAIL"}
            placeholder="Enter your email"
            state={email}
            autoComplete="email"
            keyboardType="email-address"
            autoCorrect={false}
            setState={setEmail}
            fieldName={'email'}
            errorState={errors}
          />
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
              Already have an account?{" "}
            </Text>
            <TouchableOpacity onPress={handleNavigateToSignin}>
              <Text style={base.titleSubHeadingColor}> Signin</Text>
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
    height: '90%',
    paddingLeft: 30,
    paddingRight: 30
  },
})
