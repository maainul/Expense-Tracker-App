import { StyleSheet, Text, View } from "react-native"
import { FooterMenu } from "../../components/menus/FooterMenu"
import { DashboardCard } from "../../components/dashboardCard/DashoardCard"
import { base } from './../../style';

export const AdminDashboard = () => {
    return (
        <View style={styles.adminDashboardContainer}>
            <View style={styles.adminDashboardContent}>
                <View style={base.cards}>
                    <DashboardCard icon={'user'} title={'Total Users'} value={'20231'} />
                    <DashboardCard icon={'user-plus'} title={'Active Users'} value={'20231'} />
                    <DashboardCard icon={'user-times'} title={'Paid Users'} value={'20231'} />
                </View>
            </View>
            <FooterMenu />
        </View>
    )
}

const styles = StyleSheet.create({
    adminDashboardContainer: {
        flex: 1,
        flexDirection: 'column',
        // backgroundColor: 'brown'
    },
    adminDashboardContent: {
        height: '93%'
    }

})