import { theme } from '@/theme';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 24,
    width: '100%',
    alignSelf: 'center',
    padding: theme.space[6],
    backgroundColor: theme.colors.black,
    borderRadius: theme.borderRadius.lg,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: theme.space[9],
  },
  label: {
    color: theme.colors.white,
    fontSize: theme.fonts.size.sm,
    fontFamily: theme.fonts.family.regular,
  },
});
