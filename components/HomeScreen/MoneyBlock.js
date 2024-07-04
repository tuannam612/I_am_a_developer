import { View, Text, StyleSheet } from 'react-native';
import Color from '../../constants/Color';
export default function MoneyBlock({money}) {
    return(
        <View style={styles.moneyContainer}>
            <Text style={styles.money}>${money}</Text>
        </View>
    )
}
const styles = StyleSheet.create({
    moneyContainer: {
        height: 50,
        width: 200,
        alignSelf: 'flex-end',
        justifyContent: 'center',
        marginTop: 15,
        marginRight: 10,
        borderRadius: 10,
        backgroundColor: Color.COLOR.DARK_PURPLE
    },
    money: {
        textAlign: 'center',
        fontSize: 24,
        color: 'white',
        fontWeight: 'bold'
    },
})