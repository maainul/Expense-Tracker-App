import { StyleSheet, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { RootNavigation } from './navigation';
import { AuthProvider } from './context/authContext';

export default function App() {

  return (
    <View style={styles.container}>
      <NavigationContainer>
        <AuthProvider>
          <RootNavigation />
        </AuthProvider>
      </NavigationContainer>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#FFFFFF",
  },

});
