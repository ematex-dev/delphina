import { View, StyleSheet } from 'react-native';

export default function Logo() {
    return (
        <View style={styles.bg}>
            <View style={styles.main}></View>
        </View>
    )
}

const styles = StyleSheet.create({
    bg: {
        backgroundColor: '#1B3A31',
        alignItems: 'center',
        justifyContent: 'center',
        width: 32,
        height: 32,
        flexDirection: 'row',
        borderRadius: 8,
    },
    main: {
        width: 10,
        height: 10,
        borderRadius: '50%',
        backgroundColor: '#ffd52dc7',
    }
})