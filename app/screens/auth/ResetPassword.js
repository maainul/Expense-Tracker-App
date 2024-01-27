
import { Image, StyleSheet, Text, View } from 'react-native';
import { BrandTitle } from '../../components/brandTitle/BrandTitle';
import { base } from '../../style';
import { TextInputComp } from '../../components/form/TextInputComp';
import { useState } from 'react';
import { SubmitBtnComp } from '../../components/form/SubmitBtnCmp';

export const ResetPassword = ({navigation}) => {

    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);

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
            source={require("../../img/reset-password-v2.png")}
            style={base.authImage}
            />
            </View>
   
<TextInputComp
            label={true}
            labelTitle={"NEW PASSWORD"}
            placeholder="Enter your password"
            value={password}
            autoCorrect={false}
            setValue={setPassword}
          />
          <TextInputComp
            label={true}
            labelTitle={"CONFIRM PASSWORD"}
            placeholder="Enter your password"
            value={password}
            autoCorrect={false}
            setValue={setPassword}
          />
        <SubmitBtnComp  btnTitle={"Submit"} loading={loading} />
        
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