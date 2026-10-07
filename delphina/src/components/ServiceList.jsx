import { View, Text, StyleSheet } from 'react-native';
import { colors, fonts } from '../theme';

const services = [
  { letter: 'P', title: 'Personal care', description: 'Bathing, dressing, grooming, mobility' },
  { letter: 'C', title: 'Companionship', description: 'Conversation, cards, a walk' },
  { letter: 'R', title: 'Respite care', description: 'Time off for the family caregiver' },
  { letter: 'M', title: 'Meals & light cleaning', description: 'Reminders and vital sign checks' },
  { letter: 'T', title: 'Transportation and errands', description: 'Appointments, groceries' },
  { letter: 'B', title: 'Bills & organizing', description: 'Paying bills, paperwork' },
  { letter: 'P', title: 'Pet care', description: 'Feeding, walks and litter' },
];

export default function ServiceList() {
  return (
    <View style={styles.container}>
      {services.map((service, index) => (
        <View
          key={service.title}
          style={[styles.item, index === services.length - 1 && styles.lastItem]}
        >
          <View style={styles.letterBox}>
            <Text style={styles.letter}>{service.letter}</Text>
          </View>

          <View style={styles.textContainer}>
            <Text style={styles.title}>{service.title}</Text>
            <Text style={styles.description}>{service.description}</Text>
          </View>
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 24,
    borderWidth: 1,
    borderColor: colors.line,
    borderRadius: 22,
    overflow: 'hidden',
    backgroundColor: colors.white,
  },
  item: {
    minHeight: 88,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 14,
    borderBottomWidth: 1,
    borderBottomColor: colors.line,
  },
  lastItem: {
    borderBottomWidth: 0,
  },
  letterBox: {
    width: 42,
    height: 42,
    borderRadius: 13,
    backgroundColor: colors.linen,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 16,
  },
  letter: {
    fontFamily: fonts.heading,
    fontSize: 18,
    color: colors.green,
  },
  textContainer: {
    flex: 1,
  },
  title: {
    fontFamily: fonts.bold,
    fontSize: 16,
    color: colors.pine,
    marginBottom: 4,
  },
  description: {
    fontFamily: fonts.body,
    fontSize: 13,
    lineHeight: 18,
    color: colors.moss,
  },
});