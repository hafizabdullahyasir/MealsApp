import { View, Text, StyleSheet, FlatList } from "react-native";  
import { MEALS } from "../data/dummy-data";
import MealItem from "../components/MealItem";

export default function MealsOverview({ route }) {
  const catId = route.params.categoryId;

  const displayedMeals = MEALS.filter((mealItemData) => {
    return mealItemData.categoryIds.indexOf(catId) >= 0;
  }); // ✅ this closing brace was missing

  function renderMealItem(itemData) {
    return <MealItem title={itemData.item.title} />;
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={displayedMeals}
        keyExtractor={(itemData) => itemData.id}
        renderItem={renderMealItem}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});
