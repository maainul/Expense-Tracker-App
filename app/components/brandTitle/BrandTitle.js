import { StyleSheet, Text, View } from "react-native"

export const BrandTitle = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.brandTitle}>Extra</Text>
            <Text style={styles.brandTitleLongdescription}>Expense Tracker Application </Text>
            <Text style={styles.brandMoto}>Your E-Wallet & Your Financial Friend </Text>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
    },

    brandTitle: {
        fontSize: 32,
        fontWeight: 'bold',
        color: "#696cff",
        fontWeight: "900",
    },

    brandTitleLongdescription: {
        fontSize: 24,
        fontWeight: '800',
        color: "#696cff",
    },
    brandMoto: {
        fontSize: 14,
        color: "#576B80",
        marginBottom: 15,
        marginTop: 5,
        fontWeight: '500'
    }
})