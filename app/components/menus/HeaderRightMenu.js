import { StyleSheet, TouchableOpacity } from "react-native"
import FontAwsome5 from 'react-native-vector-icons/FontAwesome5'


export const HeaderRightMenu = () => {
    return (
        <TouchableOpacity>
            <FontAwsome5 name="sign-out-alt" style={styles.iconStyle} />
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    iconStyle: {
        marginBottom: 3,
        alignSelf: 'center',
        fontSize: 24
    }
})