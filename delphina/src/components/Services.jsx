import { ScrollView, View, Text, StyleSheet } from 'react-native';
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';
import Header from "./Header";
import ServiceLists from './ServiceList';
import Cards from './Cards';


export default function Services() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView
        style={styles.screen}
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}
      >
        <Header />
 
        <Text style={styles.intro}>
          Non-medical home care. No skilled nursing procedures.
        </Text>

        <ServiceLists />

        <Cards />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: { 
    flex: 1,
    backgroundColor: "#FAF9F3",
  },

  screen: {
    flex: 1,
  },

  content: {
    paddingHorizontal: 24,
    paddingTop: 18,
    paddingBottom: 32,
  },

  intro: {
    marginTop: 18,
    fontSize: 17,
    lineHeight: 27,
    color: "#74776F",
    maxWidth: 500,
  },
});