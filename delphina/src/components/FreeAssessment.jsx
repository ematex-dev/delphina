import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, Pressable, ScrollView, KeyboardAvoidingView, Platform } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';


const InputField = ({ label, placeholder, value, onChangeText, multiline = false, keyboardType = 'default' }) => {
  return (
    <View style={styles.inputContainer}>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        style={[styles.input, multiline && styles.multilineInput]}
        placeholder={placeholder}
        placeholderTextColor="#A0A39D"
        value={value}
        onChangeText={onChangeText}
        multiline={multiline}
        keyboardType={keyboardType}
        textAlignVertical={multiline ? 'top' : 'center'}
      />
    </View>
  );
};

export default function FreeAssessment({ navigation }) {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [needs, setNeeds] = useState('');

    const handleSubmit = () => {
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
        >
        
          <View style={styles.header}>
            <Pressable style={styles.backButton} onPress={() => navigation.goBack()}>
              <Text style={styles.arrow}>{"<"}</Text>
            </Pressable>
            <Text style={styles.headerTitle}>Free assessment</Text>
          </View>

          <Text style={styles.intro}>
            Three things and an RN will call you back.
          </Text>


          <View style={styles.formContainer}>
            <InputField 
              label="Your name"
              placeholder="Sarah Jenkins"
              value={name}
              onChangeText={setName}
            />

            <InputField 
              label="Best phone number"
              placeholder="(865) 555-0148"
              value={phone}
              onChangeText={setPhone}
              keyboardType="phone-pad"
            />

            <InputField 
              label="Who needs care, and what's going on?"
              placeholder="My mother, 82, in Oak Ridge..."
              value={needs}
              onChangeText={setNeeds}
              multiline={true}
            />
          </View>


          <Pressable style={styles.submitButton} onPress={handleSubmit}>
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
  safeArea: {
    flex: 1,
    backgroundColor: "#FAF9F3",
  },
  keyboardView: {
    flex: 1,
  },
  screen: {
    flex: 1,
  },
  content: {
    paddingHorizontal: 24,
    paddingTop: 18,
    paddingBottom: 40,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 16,
  },
  backButton: {
    width: 34,
    height: 34,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 8,
  },
  arrow: {
    fontSize: 24,
    fontWeight: "400",
    color: "#24453C",
    paddingBottom: 2,
  },
  headerTitle: {
    fontSize: 26,
    fontWeight: "700",
    color: "#24453C",
  },
  intro: {
    fontSize: 16,
    lineHeight: 24,
    color: "#74776F",
    marginBottom: 32,
  },
  formContainer: {
    marginBottom: 24,
  },
  inputContainer: {
    marginBottom: 20,
  },
  label: {
    fontSize: 15,
    fontWeight: "600",
    color: "#23353C",
    marginBottom: 8,
  },
  input: {
    backgroundColor: "#FFFFFF",
    borderWidth: 1,
    borderColor: "#E5E3DC",
    borderRadius: 12,
    paddingHorizontal: 16,
    height: 52,
    fontSize: 16,
    color: "#23353C",
  },
  multilineInput: {
    height: 120,
    paddingTop: 16,
    paddingBottom: 16,
  },
  submitButton: {
    backgroundColor: "#CC5B2C",
    borderRadius: 14,
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 12,
    marginTop: 120,
  },
  submitButtonText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "700",
  },
  disclaimer: {
    marginTop: 16,
    fontSize: 13,
    color: "#A0A39D",
    textAlign: "center",
    lineHeight: 18,
  },
});