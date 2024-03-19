import { StyleSheet } from 'react-native';
import { theme } from '@/theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: theme.space[4],
    paddingHorizontal: theme.space[4],
    paddingTop: theme.space[10],
  },
  title: {
    fontFamily: theme.fonts.family.bold,
    fontSize: theme.fonts.size.xl,
    lineHeight: 44,
  },
  subtitle: {
    fontFamily: theme.fonts.family.regular,
  },
  message: {
    fontFamily: theme.fonts.family.regular,
    fontSize: theme.fonts.size.md,
    color: theme.colors.gray400,
  },
  ingredients: {
    flexWrap: 'wrap',
    flexDirection: 'row',
    paddingBottom: 200,
    gap: 12,
  },
});
