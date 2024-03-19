import { ActivityIndicator } from 'react-native';

// Styles
import { theme } from '@/theme';
import { styles } from './styles';

export default function Loading() {
  return (
    <ActivityIndicator style={styles.container} color={theme.colors.green600} />
  );
}
