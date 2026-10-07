import React from 'react';
import { View, Text, StyleSheet, Pressable, ScrollView, Linking } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';

import { colors, fonts, PHONE } from '../theme';
import Icon from '../components/Icon';

export default function Confirmation() {
  const router = useRouter();

  const goHome = () => router.replace('/');
  const callNow = () => Linking.openURL(`tel:${PHONE.replace(/[^\d+]/g, '')}`);

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.header}>
          <Pressable
            style={styles.backButton}
            onPress={goHome}
            hitSlop={8}
            accessibilityRole="button"
            accessibilityLabel="Back to home"
          >
            <Icon name="back" color={colors.pine} size={24} />
          </Pressable>
          <Text style={styles.headerTitle}>Confirmation</Text>
        </View>

        <View style={styles.topSection}>
          <View style={styles.iconCircle}>
            <Icon name="check" color={colors.white} size={32} width={2.5} />
          </View>

          <Text style={styles.title}>We've got it.</Text>
          <Text style={styles.subtitle}>
            Someone will call you back. If tonight feels urgent, don't wait — call now.
          </Text>

          <View style={styles.highlightBox}>
            <Text style={styles.highlightText}>
              <Text style={styles.highlightBold}>Next:</Text> an RN visits at a time that suits
              you. Free, no obligation.
            </Text>
          </View>
        </View>

        <View style={styles.bottomSection}>
          <Pressable
            style={({ pressed }) => [styles.callButton, pressed && styles.pressed]}
            onPress={callNow}
            accessibilityRole="button"
          >
            <Icon name="phone" color={colors.white} size={18} />
            <Text style={styles.callButtonText}>Call {PHONE}</Text>
          </Pressable>

          <Pressable
            style={({ pressed }) => [styles.homeButton, pressed && styles.pressed]}
            onPress={goHome}
            accessibilityRole="button"
          >
            <Text style={styles.homeButtonText}>Back to home</Text>
          </Pressable>

          <Text style={styles.disclaimer}>Prototype — nothing was actually sent.</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: colors.linen,
  },
  scrollView: {
    flex: 1,
  },
  content: {
    flexGrow: 1,
    justifyContent: 'space-between',
    paddingHorizontal: 24,
    paddingTop: 10,
    paddingBottom: 24,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  backButton: {
    width: 34,
    height: 34,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 8,
  },
  headerTitle: {
    fontFamily: fonts.heading,
    fontSize: 20,
    color: colors.pine,
  },
  topSection: {
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 40,
  },
  iconCircle: {
    width: 72,
    height: 72,
    borderRadius: 36,
    backgroundColor: colors.green,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 16,
  },
  title: {
    fontFamily: fonts.title,
    fontSize: 26,
    color: colors.pine,
    textAlign: 'center',
    marginBottom: 8,
  },
  subtitle: {
    fontFamily: fonts.body,
    fontSize: 16,
    lineHeight: 24,
    color: colors.moss,
    textAlign: 'center',
    marginBottom: 20,
  },
  highlightBox: {
    backgroundColor: colors.white,
    borderWidth: 1,
    borderColor: colors.line,
    padding: 16,
    borderRadius: 14,
    width: '100%',
  },
  highlightText: {
    fontFamily: fonts.body,
    fontSize: 15,
    lineHeight: 22,
    color: colors.pine,
    textAlign: 'center',
  },
  highlightBold: {
    fontFamily: fonts.bold,
  },
  bottomSection: {
    width: '100%',
    paddingTop: 10,
  },
  callButton: {
    flexDirection: 'row',
    backgroundColor: colors.accent,
    borderRadius: 14,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
    paddingVertical: 14,
    marginBottom: 10,
  },
  callButtonText: {
    fontFamily: fonts.bold,
    color: colors.white,
    fontSize: 16,
  },
  homeButton: {
    backgroundColor: colors.white,
    borderWidth: 1,
    borderColor: colors.line,
    borderRadius: 14,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 14,
    marginBottom: 12,
  },
  homeButtonText: {
    fontFamily: fonts.bold,
    color: colors.pine,
    fontSize: 16,
  },
  pressed: {
    opacity: 0.85,
  },
  disclaimer: {
    fontFamily: fonts.body,
    fontSize: 12,
    color: colors.moss,
    textAlign: 'center',
  },
});