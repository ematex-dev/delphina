
import { View, StyleSheet } from 'react-native'

export default function containerCard({ children, secondary=false }) {
    return (
        <View style={[styles.card, { backgroundColor: secondary ? '#F4EFE6' : '#1B3A31' }]}>
            {children}
        </View>
    )
}

const styles = StyleSheet.create({
    card: {
        borderRadius: 16,
        backgroundColor: '#F4EFE6',
        padding: 28,
    }
})