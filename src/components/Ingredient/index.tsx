import { Image, Pressable, PressableProps, Text } from 'react-native';

// Styles
import { styles } from './styles';

interface IngredientProps {
  name: string;
  image: string;
  selected?: boolean;
}

export default function Ingredient({
  name,
  image,
  selected = false,
  ...rest
}: IngredientProps & PressableProps) {
  return (
    <Pressable
      style={[styles.container, selected && styles.selected]}
      {...rest}
    >
      <Image
        style={styles.image}
        source={{
          uri: image,
        }}
      />

      <Text style={styles.text}>{name}</Text>
    </Pressable>
  );
}
