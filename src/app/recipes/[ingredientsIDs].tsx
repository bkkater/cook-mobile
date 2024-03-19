import { Text, ScrollView, View, FlatList } from 'react-native';

// Components
import Header from '@/components/Header';
import { Recipe } from '@/components/Recipe';

// Styles
import { styles } from './styles';

export default function Recipes() {
  return (
    <View style={styles.container}>
      <Header title='Ingredients' />

      {/* <Infredients ingredients={[]} /> */}

      <FlatList
        style={styles.recipes}
        data={['1']}
        keyExtractor={(item) => item}
        renderItem={() => (
          <Recipe
            recipe={{
              name: 'Omelete',
              image:
                'https://www.receitasnestle.com.br/sites/default/files/styles/recipe_detail_desktop/public/srh_recipes/c8e30bdb49b19b59a19b7894281dd4a9.jpg',
              minutes: 10,
            }}
          />
        )}
      />
    </View>
  );
}
