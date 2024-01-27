
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { BrandTitle } from '../../components/brandTitle/BrandTitle';
import { base } from '../../style';
import { TextInputComp } from '../../components/form/TextInputComp';
import { useState } from 'react';
import { SubmitBtnComp } from '../../components/form/SubmitBtnCmp';

export const VerifyEmail = ({navigation}) => {

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
            source={require("../../img/verify-email.png")}
            style={base.authImage}
            />
        </View>

        <View style={styles.containerRow}>
        <Text style={styles.pageTitle}>Verify your email ✉️</Text>
        <View>
          <Text style={base.titleText}>
            Account activation link sent to your email address:
            hello@pixinvent.com Please follow the link inside to continue.
          </Text>
          <SubmitBtnComp btnTitle={"Send reset link"} loading={loading} />

          <View style={base.createAccountLink}>
            <Text style={base.titleSubHeadingColor}>
              Didn't receive an email?{" "}
            </Text>
            <Text style={base.titleSubHeadingColor}> Resend </Text>
          </View>
        </View>
      </View>
        
        </View>
        </View>
        </View>
    )
}


const styles = StyleSheet.create({

  containerRow: {
    padding: 40,
    textAlign: 'center',
    backgroundColor: "#FFFFFF",
  },

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
  pageTitle: {
    fontSize: 16,
    color: "#697B8E",
    marginBottom: 20,
    fontWeight: "600",
    textAlign: "center",
  },

})