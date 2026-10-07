
import { View, Text, StyleSheet, Pressable, ScrollView, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const countries = [
  "Oak Ridge",
  "Anderson Country",
  "Roane Country",
  "Knox Country area"
];

export default function ServiceArea () {
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
          <Text style={styles.headerTitle}>Where we go</Text>
        </View>

        <Text style={styles.subtitle}>
          Oak Ridge is home. From there we serve the counties around it.
        </Text>

        <View style={styles.mapContainer}>
          <Image 
            source={{ uri: 'https://images.unsplash.com/photo-1569336415962-a4bd9f69cd83?auto=format&fit=crop&q=80&w=800' }} 
            style={styles.mapImage} 
          />
        </View>

        <View style={styles.chipsContainer}>
          {countries.map((country, index) => ( 
            <View key={index} style={styles.chip}>
              <Text style={styles.chipText}>{country}</Text>
            </View>
          ))}
        </View>

        <Pressable style={styles.callButton}>
          <Text style={styles.callButtonText}>Not sure? Call and ask</Text>
        </Pressable>

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
    paddingHorizontal: 24,
    paddingTop: 10,
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
    color: "#24453C",
    paddingBottom: 2,
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: "700",
    color: "#24453C",
  },
  subtitle: {
    fontSize: 16,
    lineHeight: 24,
    color: '#74776F',
    marginBottom: 24,
  },
  mapContainer: {
    width: '100%',
    height: 250,
    borderRadius: 16,
    overflow: 'hidden',
    marginBottom: 24,
    borderWidth: 1,
    borderColor: '#E5E3DC',
    backgroundColor: '#FFFFFF',
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
    backgroundColor: '#F2EEE5',
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 20,
  },
  chipText: {
    fontSize: 14,
    color: '#23353C',
    fontWeight: '600',
  },
  callButton: {
    backgroundColor: '#F2EEE5',
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 16,
    marginBottom: 20,
  },
  callButtonText: {
    fontSize: 16,
    fontWeight: '700',
    color: '#193F35',
  },
});