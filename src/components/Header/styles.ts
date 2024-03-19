import { theme } from '@/theme';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    paddingHorizontal: theme.space[8],
    paddingTop: theme.space[16],
  },
  title: {
    fontSize: theme.fonts.size.md,
    fontFamily: theme.fonts.family.bold,
    paddingVertical: theme.space[4],
  },
});
