import { supabase } from '@/api/supabase';

export async function findAll() {
  const { data } = await supabase
    .from('ingredients')
    .select()
    .order('name')
    .returns<IngredientProps[]>();

  return data ?? [];
}
