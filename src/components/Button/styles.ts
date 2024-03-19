import { StyleSheet } from 'react-native';

import { theme } from '@/theme';

export const styles = StyleSheet.create({
  button: {
    height: 48,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: theme.colors.green600,
    borderRadius: theme.borderRadius.sm,
  },
  text: {
    color: theme.colors.white,
    fontSize: theme.fonts.size.sm,
    fontFamily: theme.fonts.family.medium,
  },
});
