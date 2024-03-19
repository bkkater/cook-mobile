import { Text, View } from 'react-native';
import { router } from 'expo-router';
import { MaterialIcons } from '@expo/vector-icons';

// Styles
import { styles } from './styles';

interface HeaderProps {
  title: string;
}

export default function Header({ title }: HeaderProps) {
  function handleGoBack() {
    router.back();
  }

  return (
    <View style={styles.container}>
      <MaterialIcons name='arrow-back' size={32} onPress={handleGoBack} />

      <Text style={styles.title}>{title}</Text>
    </View>
  );
}
