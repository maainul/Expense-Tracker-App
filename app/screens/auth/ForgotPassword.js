
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { BrandTitle } from '../../components/brandTitle/BrandTitle';
import { base } from '../../style';
import { TextInputComp } from '../../components/form/TextInputComp';
import { useState } from 'react';
import { SubmitBtnComp } from '../../components/form/SubmitBtnCmp';

export const ForgotPassword = ({navigation}) => {

    const [email, setEmail] = useState("");
    const [loading, setLoading] = useState(false);

    const handleNavigateToSignup = () => {
        navigation.navigate("Signup", {
          headerTitle: "Signup",
        });
      };
    return (
      <View style={styles.container}>
        <View style={{flexDirection:'column',
        alignItems:'center',
        justifyContent:'center'
      }}>
        <View style={styles.pageImge} >
          <BrandTitle/>
          <View
          style={{
            alignItems: 'center',
            paddingBottom: 20
        }}
          >
          <Image
            source={require("../../img/forgot-password-v2.png")}
            style={base.authImage}
            />
            </View>

            
<TextInputComp
            label={true}
            labelTitle={"EMAIL"}
            placeholder="Enter your email"
            value={email}
            autoCorrect={false}
            setValue={setEmail}
          />
        <SubmitBtnComp  btnTitle={"Send reset link"} loading={loading} />
        
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

  pageImge:{
    backgroundColor:'#FFF',
    height:'90%',
    paddingLeft:30,
    paddingRight:30
  },

})