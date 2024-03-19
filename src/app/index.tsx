import { router } from 'expo-router';
import { useEffect, useState } from 'react';
import { Alert, Text, View, ScrollView } from 'react-native';

// Components
import Ingredient from '@/components/Ingredient';
import Selected from '@/components/Selected';

// Api
import { services } from '@/api/services';

// Styles
import { styles } from './styles';

export default function Home() {
  const [ingredients, setIngredients] = useState<IngredientProps[]>([]);
  const [selected, setSelected] = useState<string[]>([]);

  function handleToggleSelected(value: string) {
    if (selected.includes(value)) {
      return setSelected((prevState) =>
        prevState.filter((item) => item !== value)
      );
    }

    setSelected((prevState) => [...prevState, value]);
  }

  function handleClearSelected() {
    Alert.alert('Limpar Ingredientes', 'Deseja limpar tudo?', [
      {
        text: 'Não',
        style: 'cancel',
      },
      {
        text: 'Sim',
        onPress: () => setSelected([]),
      },
    ]);
  }

  function handleSearch() {
    router.navigate('/recipes');
  }

  useEffect(() => {
    services.ingredients.findAll().then(setIngredients);
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Escolha {'\n'}
        <Text style={styles.subtitle}>os produtos</Text>
      </Text>

      <Text style={styles.message}>
        Descubra receitas baseadas nos produtos que você escolheu.
      </Text>

      <ScrollView
        contentContainerStyle={styles.ingredients}
        showsVerticalScrollIndicator={false}
      >
        {ingredients.map((item) => (
          <Ingredient
            key={item.id}
            name={item.name}
            image={`${services.storage.imagePath}/${item.image}`}
            selected={selected.includes(item.id)}
            onPress={() => handleToggleSelected(item.id)}
          />
        ))}
      </ScrollView>

      {!!selected?.length && (
        <Selected
          quantity={selected.length}
          onClear={handleClearSelected}
          onSearch={handleSearch}
        />
      )}
    </View>
  );
}
