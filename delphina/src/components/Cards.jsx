import { View, Text, StyleSheet, Pressable } from 'react-native';
import { useRouter } from 'expo-router';
import { colors, fonts } from '../theme';

export default function AssessmentCard() {
  const router = useRouter();

  return (
    <View style={styles.card}>
      <Text style={styles.title}>Not sure what you need?</Text>

      <Text style={styles.description}>
        An RN will visit, look at the whole picture, and tell you honestly.
      </Text>

      <Pressable
        style={({ pressed }) => [styles.button, pressed && styles.pressed]}
        onPress={() => router.push('/assess')}
        accessibilityRole="button"
      >
        <Text style={styles.buttonText}>Request a free assessment</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: colors.pine,
    borderRadius: 22,
    padding: 24,
    marginTop: 18,
  },
  title: {
    fontFamily: fonts.title,
    fontSize: 21,
    color: colors.white,
    marginBottom: 8,
  },
  description: {
    fontFamily: fonts.body,
    fontSize: 16,
    lineHeight: 22,
    color: 'rgba(255,253,250,0.8)',
    marginBottom: 8,
  },
  button: {
    marginTop: 24,
    width: '100%',
    backgroundColor: colors.accent,
    borderRadius: 14,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 14,
  },
  pressed: {
    opacity: 0.85,
  },
  buttonText: {
    fontFamily: fonts.bold,
    color: colors.white,
    fontSize: 17,
  },
});