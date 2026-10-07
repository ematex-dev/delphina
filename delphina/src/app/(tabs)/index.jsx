import { View, Text, ScrollView, StyleSheet, Pressable, Image } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';
import Logo from '@/components/Logo';
import ContainerCard from '@/components/ContainerCard';
import CustomButton from '@/components/CustomButton';
import ServiceCard from '@/components/ServiceCard';
import Icon from '../../components/Icon';
import { colors, fonts } from '../../theme';
import { confirmCall } from '../../utils/call';

export default function HomeScreen() {
  const router = useRouter();

  const services = [
    {
      ImageUrl: 'https://images.unsplash.com/photo-1791045779642-c36919da2481?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzfHx8ZW58MHx8fHx8',
      service: 'Personal Care'
    },
    {
      ImageUrl: 'https://plus.unsplash.com/premium_photo-1791039415487-880166b9b9e9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxMXx8fGVufDB8fHx8fA%3D%3D',
      service: 'Companioship'
    },
    {
      ImageUrl: 'https://images.unsplash.com/photo-1790646394476-04b32b61a2c1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxOHx8fGVufDB8fHx8fA%3D%3D',
      service: 'Respite care'
    },
  ]

  return (
    <ScrollView style={{ flex: 1 }}>
      <SafeAreaProvider style={{ flex: 1 }}>
        <SafeAreaView style={styles.container}>
          <View style={styles.header}>
            <View style={styles.logo}>
              <Logo />
              <View>
                <Text style={styles.logoMainText} >Delphina Home Health</Text>
                <Text style={styles.logoBodyText}>Oak Ridge, Tennessee</Text>
              </View>
            </View>

            <Pressable style={styles.cta}>
              <Icon name={'phone'} color={colors.moss} size={24} />
            </Pressable>
          </View>


          <View style={{ marginTop: 24 }}>
            <ContainerCard secondary={false}>
              <View style={styles.eyebrow}>
                <View style={styles.eyebrowSymbol} />
                <Text style={styles.eyebrowText}>Owned and run by a Registered Nurse</Text>
              </View>
              <Text style={styles.headingText}>The nurse who owns this agency is the one who comes to your mom's house.</Text>
              <Text style={styles.bodyText}>
                Non-medical home care across East Tennessee. Your free in-home assessment is done by an RN.
              </Text>


              <View>
                <CustomButton
                  title={"Request a free assessment"}
                  type={'primary'}
                  style={{ marginTop: 16, }}
                  onPress={() => router.navigate('/services')}
                />
               <CustomButton
                  title={"(865) 272-4673"}
                  type={'secondary'}
                  style={{ marginTop: 8, }}
                  textColor={'#fff'}
                  icon={true}
                  iconUrl={'phone'}
                  onPress={confirmCall}
                />
              </View>
            </ContainerCard>


            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginTop: 8 }}>
              <Text style={{ fontWeight: 'semibold', color: '#1B3A31' }}>✓ RN-owned</Text>
              <Text style={{ fontWeight: 'semibold', color: '#1B3A31' }}>✓ 30+ years local</Text>
              <Text style={{ fontWeight: 'semibold', color: '#1B3A31' }}>✓ Trained, insured</Text>
            </View>


           <View style={styles.titleHeader}>
                <Text style={styles.title}>What we do</Text>
                  <Pressable
                    onPress={() => router.navigate('/services')}
                    hitSlop={8}
                    accessibilityRole="link"
                    accessibilityLabel="See all services"
                  >
                  <Text style={styles.titleLink}>See all</Text>
                </Pressable>
        </View>


            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 16 }}>
              {services.map((s, index) => (
                <ServiceCard service={s.service} ImageUrl={s.ImageUrl} key={index} />
              ))}
            </View>

            <Pressable
              onPress={() => router.push('/area')}
              style={({ pressed }) => [{ marginTop: 24 }, pressed && { opacity: 0.85 }]}
              accessibilityRole="link"
              accessibilityLabel="See the areas we serve"
            >
              <ContainerCard secondary={true}>
                <View style={styles.footerContainer}>
                  <View style={{ flexDirection: 'row', alignItems: 'center', gap: 8, }}>
                    <View style={{ width: 40, height: 40, alignItems: 'center', justifyContent: 'center', backgroundColor: '#fff', borderRadius: '50%' }}>
                      <Icon name={'map'} color={colors.accent} size={20} />
                    </View>

                    <View>
                      <Text style={{ fontSize: 18, width: '80%', fontFamily: fonts.title }}>We drive these roads anyway.</Text>
                      <Text style={{ fontSize: 14, color: '#747474', width: '70%', fontFamily: fonts.body, }}>Oak Ridge, Anderson, Roane, Knox</Text>
                    </View>
                  </View>

                  <Icon name={'chev'} size={20} color={colors.moss} />
                </View>
              </ContainerCard>
            </Pressable>
          </View>
        </SafeAreaView>
      </SafeAreaProvider>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  container: {
    flex: 1,
    backgroundColor: '#FFFDFA',
    padding: 10,
  },
  logo: {
    flexDirection: 'row',
    gap: 8,
    alignItems: 'center',
  },
  logoMainText: {
    fontSize: 18,
    fontFamily: fonts.title,
  },
  logoBodyText: {
    fontSize: 14,
    fontWeight: 'thin',
  },
  cta: {
    backgroundColor: '#F4EFE6',
    padding: 12,
    borderRadius: '50%',
  },
  ctaIcon: {
    width: 18,
    height: 18,
  },
  eyebrow: {
    flexDirection: 'row',
    gap: 8,
    borderWidth: 1,
    borderRadius: 999,
    paddingVertical: 8,
    paddingHorizontal: 12,
    backgroundColor: '#ffffff1e',
    borderColor: '#ffffff57',
    alignItems: 'center',
  },
  eyebrowText: {
    color: '#fff',
    fontFamily: fonts.heading,
  },
  eyebrowSymbol: {
    width: 8,
    height: 8,
    borderRadius: '50%',
    backgroundColor: '#ffd52dc7',
  },
  headingText: {
    fontSize: 28,
    marginTop: 12,
    fontFamily: fonts.title,
    color: '#fff'
  },
  bodyText: {
    marginTop: 8,
    color: '#ffffffb9',
    fontSize: 16,
    lineHeight: 28,
    fontFamily: fonts.body,
  },
  titleHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 32,
  },
  title: {
    fontSize: 24,
    fontFamily: fonts.title,
  },
  titleLink: {
    fontFamily: fonts.semi,
    fontSize: 16,
  },
  location: {
    width: 20,
    height: 20,
  },
  footerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    
  }
})