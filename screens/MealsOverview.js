import { View, Text, StyleSheet, FlatList } from "react-native";  
import { MEALS, CATEGORIES } from "../data/dummy-data";
import MealItem from "../components/MealItem";
import { useLayoutEffect } from "react";


export default function MealsOverview({ route, navigation }) {
  const catId = route.params.categoryId;

  const displayedMeals = MEALS.filter((mealItemData) => {
    return mealItemData.categoryIds.indexOf(catId) >= 0;
  });

  useLayoutEffect(()=>{
    const categoryTitle = CATEGORIES.find((category)=> category.id === catId).title;


    navigation.setOptions({
      title: categoryTitle
    });



  },[catId, navigation])



  function renderMealItem(itemData) {

    const item = itemData.item;
    const mealItemProps = {
      title: item.title,
      imageUrl: item.imageUrl,
      duration: item.duration,
      complexity: item.complexity,
      affordability: item.affordability,
    };

    return <MealItem {...mealItemProps} />;
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
