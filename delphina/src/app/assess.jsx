import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Pressable,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
  Alert,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';

import { colors, fonts, PHONE } from '../theme';
import Icon from '../components/Icon';

const InputField = ({
  label,
  placeholder,
  value,
  onChangeText,
  multiline = false,
  keyboardType = 'default',
}) => (
  <View style={styles.inputContainer}>
    <Text style={styles.label}>{label}</Text>
    <TextInput
      style={[styles.input, multiline && styles.multilineInput]}
      placeholder={placeholder}
      placeholderTextColor={colors.moss}
      value={value}
      onChangeText={onChangeText}
      multiline={multiline}
      keyboardType={keyboardType}
      textAlignVertical={multiline ? 'top' : 'center'}
    />
  </View>
);

export default function FreeAssessment() {
  const router = useRouter();
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [needs, setNeeds] = useState('');

  const handleSubmit = () => {
    if (!name.trim() || !phone.trim() || !needs.trim()) {
      Alert.alert('Almost there', 'Please fill in all three fields so we can call you back.');
      return;
    }

    // TODO: send { name, phone, needs } to your backend here
    router.push('/done');
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <KeyboardAvoidingView
        style={styles.keyboardView}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      >
        <ScrollView
          style={styles.screen}
          contentContainerStyle={styles.content}
          showsVerticalScrollIndicator={false}
          keyboardShouldPersistTaps="handled"
        >
          <View style={styles.header}>
            <Pressable
              style={styles.backButton}
              onPress={() => router.back()}
              hitSlop={8}
              accessibilityRole="button"
              accessibilityLabel="Go back"
            >
              <Icon name="back" color={colors.pine} size={24} />
            </Pressable>
            <Text style={styles.headerTitle}>Free assessment</Text>
          </View>

          <Text style={styles.intro}>Three things and an RN will call you back.</Text>

          <View style={styles.formContainer}>
            <InputField
              label="Your name"
              placeholder="Sarah Jenkins"
              value={name}
              onChangeText={setName}
            />
            <InputField
              label="Best phone number"
              placeholder={PHONE}
              value={phone}
              onChangeText={setPhone}
              keyboardType="phone-pad"
            />
            <InputField
              label="Who needs care, and what's going on?"
              placeholder="My mother, 82, in Oak Ridge..."
              value={needs}
              onChangeText={setNeeds}
              multiline
            />
          </View>

          <View style={styles.spacer} />

          <Pressable
            style={({ pressed }) => [styles.submitButton, pressed && styles.pressed]}
            onPress={handleSubmit}
          >
            <Text style={styles.submitButtonText}>Send it</Text>
          </Pressable>

          <Text style={styles.disclaimer}>
            No cost, no obligation. We don't share your information.
          </Text>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: { flex: 1, backgroundColor: colors.linen },
  keyboardView: { flex: 1 },
  screen: { flex: 1 },
  content: { paddingHorizontal: 24, paddingTop: 18, paddingBottom: 40 },
  header: { flexDirection: 'row', alignItems: 'center', marginBottom: 16 },
  backButton: {
    width: 34,
    height: 34,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 8,
  },
  headerTitle: { fontFamily: fonts.title, fontSize: 26, color: colors.pine },
  intro: {
    fontFamily: fonts.body,
    fontSize: 16,
    lineHeight: 24,
    color: colors.moss,
    marginBottom: 32,
  },
  formContainer: { marginBottom: 24 },
  inputContainer: { marginBottom: 20 },
  label: { fontFamily: fonts.semi, fontSize: 15, color: colors.pine, marginBottom: 8 },
  input: {
    fontFamily: fonts.body,
    backgroundColor: colors.white,
    borderWidth: 1,
    borderColor: colors.line,
    borderRadius: 12,
    paddingHorizontal: 16,
    height: 52,
    fontSize: 16,
    color: colors.pine,
  },
  multilineInput: { height: 120, paddingTop: 16, paddingBottom: 16 },
  spacer: { height: 40 },
  submitButton: {
    backgroundColor: colors.accent,
    borderRadius: 14,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 14,
  },
  pressed: { opacity: 0.85 },
  submitButtonText: { fontFamily: fonts.bold, color: colors.white, fontSize: 16 },
  disclaimer: {
    fontFamily: fonts.body,
    marginTop: 16,
    fontSize: 13,
    color: colors.moss,
    textAlign: 'center',
    lineHeight: 18,
  },
});