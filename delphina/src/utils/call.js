import { Alert, ActionSheetIOS, Linking, Platform } from 'react-native';
import { PHONE } from '../theme';

const dial = () => Linking.openURL(`tel:${PHONE.replace(/[^\d+]/g, '')}`);

export function confirmCall() {
  if (Platform.OS === 'ios') {
    ActionSheetIOS.showActionSheetWithOptions(
      {
        title: 'Delphina Home Health',
        options: [`Call ${PHONE}`, 'Cancel'],
        cancelButtonIndex: 1,
      },
      (index) => {
        if (index === 0) dial();
      }
    );
  } else {
    Alert.alert(
      'Call Delphina?',
      `${PHONE} — you'll reach the office directly.`,
      [
        { text: 'Cancel', style: 'cancel' },
        { text: 'Call', onPress: dial },
      ],
      { cancelable: true }
    );
  }
}