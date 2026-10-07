import { View, Text, StyleSheet, Pressable } from 'react-native';
import { useRouter } from 'expo-router';
import Icon from './Icon';
import { colors, fonts } from '../theme';

export default function Header({ title }) {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Pressable
        style={styles.backButton}
        onPress={() => router.navigate('/')}
        hitSlop={8}
        accessibilityRole="button"
        accessibilityLabel="Back to home"
      >
        <Icon name="back" color={colors.pine} size={24} />
      </Pressable>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  backButton: {
    width: 34,
    height: 34,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 8,
  },
  title: {
    fontFamily: fonts.title,
    fontSize: 28,
    color: colors.pine,
  },
});