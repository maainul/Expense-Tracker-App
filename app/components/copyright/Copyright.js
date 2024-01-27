import { StyleSheet, Text, View } from "react-native"

export const Copyright = () => {
    return (
        <View style={styles.footerSection}>
            <Text style={styles.footerText}>Copyright © 2024 Butterfly Tech</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    footerSection: {
        height: '5%',
        backgroundColor: '#EEE',
        justifyContent: 'center',
        alignItems: 'center'
    },
    footerText: {
        fontSize: 12,
        color: '#555'
    }
})