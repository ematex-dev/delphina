import React from 'react';
import { View, Text, StyleSheet, Pressable, ScrollView, Image, Linking } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';

import { colors, fonts, PHONE } from '../../theme';
import Icon from '../../components/Icon';

const counties = [
  'Oak Ridge',
  'Anderson County',
  'Roane County',
  'Knox County area',
];

export default function ServiceArea() {
  const router = useRouter();

  const goBack = () => {
    if (router.canGoBack()) router.back();
    else router.replace('/');
  };

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
            onPress={goBack}
            hitSlop={8}
            accessibilityRole="button"
            accessibilityLabel="Go back"
          >
            <Icon name="back" color={colors.pine} size={24} />
          </Pressable>
          <Text style={styles.headerTitle}>Where we go</Text>
        </View>

        <Text style={styles.subtitle}>
          Oak Ridge is home. From there we serve the counties around it.
        </Text>

        <View style={styles.mapContainer}>
          <Image
            source={{
              uri: 'https://images.unsplash.com/photo-1569336415962-a4bd9f69cd83?auto=format&fit=crop&q=80&w=800',
            }}
            style={styles.mapImage}
          />
        </View>

        <View style={styles.chipsContainer}>
          {counties.map((county) => (
            <View key={county} style={styles.chip}>
              <Text style={styles.chipText}>{county}</Text>
            </View>
          ))}
        </View>

        <Pressable
          style={({ pressed }) => [styles.callButton, pressed && styles.pressed]}
          onPress={callNow}
          accessibilityRole="button"
        >
          <Icon name="phone" color={colors.pine} size={18} />
          <Text style={styles.callButtonText}>Not sure? Call and ask</Text>
        </Pressable>
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
    paddingHorizontal: 24,
    paddingTop: 10,
    paddingBottom: 40,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  backButton: {
    width: 34,
    height: 34,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 8,
  },
  headerTitle: {
    fontFamily: fonts.title,
    fontSize: 26,
    color: colors.pine,
  },
  subtitle: {
    fontFamily: fonts.body,
    fontSize: 16,
    lineHeight: 24,
    color: colors.moss,
    marginBottom: 24,
  },
  mapContainer: {
    width: '100%',
    height: 250,
    borderRadius: 16,
    overflow: 'hidden',
    marginBottom: 24,
    borderWidth: 1,
    borderColor: colors.line,
    backgroundColor: colors.white,
  },
  mapImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  chipsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 10,
    marginBottom: 24,
  },
  chip: {
    backgroundColor: colors.white,
    borderWidth: 1,
    borderColor: colors.line,
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 20,
  },
  chipText: {
    fontFamily: fonts.semi,
    fontSize: 14,
    color: colors.pine,
  },
  callButton: {
    flexDirection: 'row',
    gap: 8,
    backgroundColor: colors.white,
    borderWidth: 1,
    borderColor: colors.line,
    borderRadius: 14,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 14,
    marginBottom: 20,
  },
  callButtonText: {
    fontFamily: fonts.bold,
    fontSize: 16,
    color: colors.pine,
  },
  pressed: {
    opacity: 0.85,
  },
});