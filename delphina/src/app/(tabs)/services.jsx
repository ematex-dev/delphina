import { ScrollView, Text, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Header from '../../components/Header';
import ServiceList from '../../components/ServiceList';
import Cards from '../../components/Cards';
import { colors, fonts } from '../../theme';

export default function Services() {
  return (
    <SafeAreaView style={styles.safeArea} edges={['top']}>
      <ScrollView
        style={styles.screen}
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}
      >
        <Header title="What we do" />

        <Text style={styles.intro}>
          Non-medical home care. No skilled nursing procedures.
        </Text>

        <ServiceList />
        <Cards />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: colors.linen,
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
    fontFamily: fonts.body,
    marginTop: 18,
    fontSize: 17,
    lineHeight: 27,
    color: colors.moss,
    maxWidth: 500,
  },
});