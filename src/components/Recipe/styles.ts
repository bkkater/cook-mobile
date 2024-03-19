import { StyleSheet } from 'react-native';
import { theme } from '@/theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: 192,
    borderRadius: theme.borderRadius.lg,
    overflow: 'hidden',
  },
  image: {
    flex: 1,
  },
  linear: {
    flex: 1,
    padding: theme.space[3],
    justifyContent: 'flex-end',
  },
  title: {
    color: theme.colors.white,
    fontSize: theme.fonts.size.sm,
    fontFamily: theme.fonts.family.bold,
  },
  minutes: {
    color: theme.colors.yellow500,
    fontSize: theme.fonts.size.xs,
    fontFamily: theme.fonts.family.regular,
  },
});
