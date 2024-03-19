import { Text, View } from 'react-native';
import Animated, { SlideInDown, BounceOutDown } from 'react-native-reanimated';
import { MaterialIcons } from '@expo/vector-icons';

// Components
import { Button } from '@/components/Button';

// Styles
import { theme } from '@/theme';
import { styles } from './styles';

interface SelectedProps {
  quantity: number;
  onClear: () => void;
  onSearch: () => void;
}

export default function Selected({
  quantity,
  onClear,
  onSearch,
}: SelectedProps) {
  return (
    <Animated.View
      style={styles.container}
      entering={SlideInDown.duration(300)}
      exiting={BounceOutDown}
    >
      <View style={styles.header}>
        <Text style={styles.label}>{quantity} ingredientes selecionados</Text>

        <MaterialIcons
          name='close'
          size={24}
          onPress={onClear}
          color={theme.colors.gray400}
        />
      </View>

      <Button text='Encontrar' onPress={onSearch} />
    </Animated.View>
  );
}
