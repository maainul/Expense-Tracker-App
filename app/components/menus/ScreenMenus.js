import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { LandingPage } from '../../screens/landingPage/LandingPage';
import { Signup } from '../../screens/auth/Signup';
import { Signin } from '../../screens/auth/Signin';
import { UserDashboard } from '../../screens/dashboard/UserDashboard';
import { HeaderRightMenu } from './HeaderRightMenu';
import { AdminDashboard } from '../../screens/dashboard/AdminDashboard';
import { ForgotPassword } from '../../screens/auth/ForgotPassword';
import { ResetPassword } from '../../screens/auth/ResetPassword';
import { VerifyEmail } from '../../screens/auth/VerifyEmail';


export const ScreenMenus = () => {
    const Stack = createNativeStackNavigator()

    return (
        <Stack.Navigator initialRouteName='LandingPage'>
            <Stack.Screen
                name='LandingPage'
                component={LandingPage}
                options={{
                    headerShown: false
                }}
            />

            <Stack.Screen
                name='Signup'
                component={Signup}
                options={{
                    headerShown: false
                }}
            />
            <Stack.Screen
                name='Signin'
                component={Signin}
                options={{
                    headerShown: false
                }}
            />
            <Stack.Screen
                name='UserDashboard'
                component={UserDashboard}
                options={{
                    headerRight: () => <HeaderRightMenu />
                }}
            />
            <Stack.Screen
                name='AdminDashboard'
                component={AdminDashboard}
                options={{
                    headerRight: () => <HeaderRightMenu />
                }}
            />
             <Stack.Screen
                name='ForgotPassword'
                component={ForgotPassword}
                options={{
                    headerRight: () => <HeaderRightMenu />
                }}
            />

            <Stack.Screen
                name='ResetPassword'
                component={ResetPassword}
                options={{
                    headerRight: () => <HeaderRightMenu />
                }}
            />

            
            <Stack.Screen
                name='VerifyEmail'
                component={VerifyEmail}
                options={{
                    headerRight: () => <HeaderRightMenu />
                }}
            />
        </Stack.Navigator>
    )
}