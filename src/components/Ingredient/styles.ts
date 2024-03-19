import { StyleSheet } from 'react-native';
import { theme } from '@/theme';

export const styles = StyleSheet.create({
  container: {
    borderWidth: 2,
    borderColor: theme.colors.gray200,
    borderRadius: theme.borderRadius.full,
    paddingHorizontal: theme.space[4],
    height: 40,
    alignItems: 'center',
    flexDirection: 'row',
    gap: theme.space[2],
  },
  image: {
    width: 16,
    height: 16,
  },
  text: {
    fontFamily: theme.fonts.family.medium,
    fontSize: theme.fonts.size.xxs,
  },
  selected: {
    borderWidth: 2,
    borderColor: theme.colors.green600,
    backgroundColor: theme.colors.green100,
  },
});
