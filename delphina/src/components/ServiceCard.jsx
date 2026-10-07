import { View, Image, Text, StyleSheet } from 'react-native'
import { fonts } from '../theme'

export default function ServiceCard({ service, ImageUrl }) {
    return(
        <View style={styles.card}>
            <View style={styles.imageContainer}>
                <Image source={{ uri: `${ImageUrl}` }} alt={service} width={'100%'} height={'100%'} style={styles.cardImage} />
            </View>
            <View style={{ paddingHorizontal: 10, paddingVertical: 16, }}>
                <Text style={styles.cardTitle}>{service}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    card: {
        borderWidth: 1,
        borderRadius: 20,
        borderColor: '#F4EFE6',
    },
    cardTitle: {
        fontFamily: fonts.title,
        color: '#1B3A31',
    },
    imageContainer: {
        width: '100%',
        height: 120,
    },
    cardImage: {
        width: '100%',
        objectFit: 'cover',
        borderTopLeftRadius: 20, 
        borderTopRightRadius: 20, 
    }
})