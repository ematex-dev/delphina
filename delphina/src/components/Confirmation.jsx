import React from 'react';
import { View, Text, StyleSheet, Pressable, ScrollView, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function Confirmation({ navigation }) {
  return (
    <SafeAreaView style={styles.safeArea}>
      
      <ScrollView 
        style={styles.scrollView}
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}
      >
        
        <View style={styles.header}>
          <Pressable style={styles.backButton} onPress={() => navigation?.goBack()}>
            <Text style={styles.arrow}>{"<"}</Text>
          </Pressable>
          <Text style={styles.headerTitle}>Confirmation</Text>
        </View>

        <View style={styles.topSection}>
          <View style={styles.iconContainer}>
            
            <Image 
              source={{ uri: 'https://cdn-icons-png.flaticon.com/512/190/190411.png' }}
              style={styles.checkImage} 
            />
          </View>

          <Text style={styles.title}>We've got it.</Text>
          <Text style={styles.subtitle}>
            Someone will call you back. If tonight feels urgent, don't wait — call now.
          </Text>

          <View style={styles.highlightBox}>
            <Text style={styles.highlightText}>
              <Text style={{ fontWeight: '700' }}>Next:</Text> an RN visits at a time that suits you. Free, no obligation.
            </Text>
          </View>
        </View>

        <View style={styles.bottomSection}>
          <Pressable style={styles.callButton}>
            <Text style={styles.callButtonText}>Call (865) 272-4673</Text>
          </Pressable>

          <Pressable 
            style={styles.homeButton} 
            onPress={() => navigation?.navigate('Services')}
          >
            <Text style={styles.homeButtonText}>Back to home</Text>
          </Pressable>

          <Text style={styles.disclaimer}>
            Prototype — nothing was actually sent.
          </Text>
        </View>

      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#FAF9F3",
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
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10, 
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
    color: "#24453C",
    paddingBottom: 2,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: "600",
    color: "#24453C",
  },
  topSection: {
    alignItems: 'center',
    marginTop: 20, 
    marginBottom: 40,
  },
  iconContainer: {
    alignItems: 'center',
    marginBottom: 12,
  },
  
  // 👇 REPLACED THE OLD CIRCLE STYLE WITH THIS IMAGE STYLE 👇
  checkImage: {
    width: 60,
    height: 60,
    resizeMode: 'contain',
  },
  
  title: {
    fontSize: 24,
    fontWeight: '700',
    color: '#193F35',
    textAlign: 'center',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 15,
    lineHeight: 22,
    color: '#74776F',
    textAlign: 'center',
    marginBottom: 20,
  },
  highlightBox: {
    backgroundColor: '#F2EEE5',
    padding: 16,
    borderRadius: 14,
    width: '100%',
  },
  highlightText: {
    fontSize: 14,
    lineHeight: 20,
    color: '#23353C',
    textAlign: 'center',
  }, 
  bottomSection: {
    width: '100%',
    paddingTop: 10,
  },
  callButton: {
    backgroundColor: "#CC5B2C",
    borderRadius: 12,
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 12,
    marginBottom: 8,
  },
  callButtonText: {
    color: "#FFFFFF",
    fontSize: 15,
    fontWeight: "700",
  },
  homeButton: {
    backgroundColor: "#FFFFFF",
    borderWidth: 1,
    borderColor: "#E5E3DC",
    borderRadius: 12,
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 12,
    marginBottom: 12,
  },
  homeButtonText: {
    color: "#193F35",
    fontSize: 15,
    fontWeight: "700",
  },
  disclaimer: {
    fontSize: 11,
    color: "#A0A39D",
    textAlign: "center",
  },
});