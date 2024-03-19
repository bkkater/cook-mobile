import { Text, TouchableOpacity, TouchableOpacityProps } from 'react-native';

// Styles
import { styles } from './styles';

type ButtonProps = TouchableOpacityProps & {
  text: string;
};

export function Button({ text, ...rest }: ButtonProps) {
  return (
    <TouchableOpacity activeOpacity={0.7} style={[styles.button]} {...rest}>
      <Text style={[styles.text]}>{text}</Text>
    </TouchableOpacity>
  );
}
