import { StyleSheet, Text, View } from "react-native"
import Icon from 'react-native-vector-icons/FontAwesome';

export const DashboardCard = ({ icon, title, value }) => {
    return (
        <View style={styles.card}>
            <View >
                <Text style={styles.cardValue}>{value}</Text>
                <Text style={styles.cardTitle}>{title}</Text>
            </View>
            <View>
                <Icon name={`${icon}`} size={20} />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    card: {
        backgroundColor: "#FFF",
        width: '30%',
        height: 80,
        padding: 10,
        borderRadius: 8,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    cardValue: {
        fontSize: 18,
        fontWeight: '700',
        color: '#685DD8'
    },
    cardTitle: {
        fontSize: 12,
        fontWeight: 'bold',
        color: "#5D596C"
    }
})