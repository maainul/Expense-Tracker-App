import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { Copyright } from '../../components/copyright/Copyright';
import { BrandTitle } from '../../components/brandTitle/BrandTitle';
import { base } from './../../style';

export const LandingPage = ({ navigation }) => {

    // Go to Home Page
    const handleNavigateToSignup = () => {
        navigation.navigate("Signup", {
            headerTitle: "Signup",
        });
    };

    const handleNavigateToSignin = () => {
        navigation.navigate("Signin", {
            headerTitle: "Signin",
        });
    };

    const handleNavigateToUserDashboard = () => {
        navigation.navigate("UserDashboard", {
            headerTitle: "Home",
        });
    };
    const handleNavigateToAdminDashboard = () => {
        navigation.navigate("AdminDashboard", {
            headerTitle: "Admin",
        });
    };

    const handleNavigateToForgotPassword = () => {
        navigation.navigate("ForgotPassword", {
            headerTitle: "ForgotPassword",
        });
    };

    const handleNavigateToResetPassword = () => {
        navigation.navigate("ResetPassword", {
            headerTitle: "ResetPassword",
        });
    };

    const handleNavigateToVerifyEmail = () => {
        navigation.navigate("VerifyEmail", {
            headerTitle: "VerifyEmail",
        });
    };
    
    return (
        <View style={{ flexDirection: 'column' }}>
            <View style={styles.landingPageHeader}>
                <BrandTitle />
            </View>
            <View style={styles.middleSection}>
                <View style={styles.middleContainer}>
                    <View style={{
                        alignItems: 'center',
                        paddingBottom: 20
                    }}>
                        <Image
                            source={require("../../img/login-v2.png")}
                            style={base.authImage}
                        />
                    </View>

                    <View>
                        <TouchableOpacity
                            onPress={handleNavigateToSignin}
                            style={styles.btnSignin}
                        >
                            <Text
                                style={styles.btnText}
                            >Signin</Text>
                        </TouchableOpacity>

                        <TouchableOpacity
                            onPress={handleNavigateToSignup}
                            style={styles.btnSignup}
                        >
                            <Text
                                style={styles.btnText}
                            >Signup</Text>
                        </TouchableOpacity>

                        {/* <TouchableOpacity
                            title="Admin"
                            onPress={handleNavigateToAdminDashboard}
                            style={styles.btnSignup}
                        >
                            <Text
                                style={styles.btnText}
                            >
                                Admin Dashboard
                            </Text>
                        </TouchableOpacity>

                        <TouchableOpacity
                            title="Home"
                            onPress={handleNavigateToUserDashboard}
                            style={styles.btnSignup}
                        >
                            <Text
                                style={styles.btnText}
                            >
                                User Dashboard
                            </Text>
                        </TouchableOpacity> */}
                        <TouchableOpacity
                            title="ForgotPassword"
                            onPress={handleNavigateToForgotPassword}
                            style={styles.btnSignup}
                        >
                            <Text
                                style={styles.btnText}
                            >
                                Forgot Password
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            title="VerifyEmail"
                            onPress={handleNavigateToVerifyEmail}
                            style={styles.btnSignup}
                        >
                            <Text
                                style={styles.btnText}
                            >
                                Verify Email
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>


            <Copyright />
        </View>
    );
};

const styles = StyleSheet.create({
    landingPageHeader:
    {
        height: '30%',
        // backgroundColor: 'powderblue', // Please Comment this line
        justifyContent: 'center',
        alignItems: 'center'
    },
    middleSection: {
        height: '65%',
        // backgroundColor: 'skyblue', // Please Comment this line
        justifyContent: 'flex-start',
    },
    middleContainer: {
        // backgroundColor: 'red', // Please Comment this line
        flexDirection: 'column',
        paddingLeft: 40,
        paddingRight: 40
    },

    btnSignin: {
        height: 46,
        backgroundColor: "#696cff",
        borderRadius: 20,
        justifyContent: 'center',
        marginTop: 20,
        marginBottom: 10
    },

    btnSignup: {
        height: 46,
        backgroundColor: '#ff7272',
        borderRadius: 20,
        justifyContent: 'center',
        marginTop: 10,
        marginBottom: 10
    },

    btnText: {
        color: '#FFF',
        fontSize: 18,
        fontWeight: '500',
        textAlign: 'center'
    }

})