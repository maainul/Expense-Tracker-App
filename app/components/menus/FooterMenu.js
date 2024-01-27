
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
export const FooterMenu = ({ navigation }) => {
    return (
        <View style={styles.container} >
            <TouchableOpacity>
                <FontAwesome5 name='user' style={styles.iconStyle} />
            </TouchableOpacity>
            <TouchableOpacity>
                <FontAwesome5 name='home' style={styles.iconStyle} />
            </TouchableOpacity>
            <TouchableOpacity>
                <FontAwesome5 name='cog' style={styles.iconStyle} />
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: "#696cff",
        paddingTop: 13,
        paddingBottom: 12,
        paddingLeft: 20,
        paddingRight: 20
    },
    iconStyle: {
        fontSize: 25,
        color: '#FFF',
    },
});
