
import { MEALS, CATEGORIES } from "../data/dummy-data";
import MealItem from "../components/MealsList/MealItem";
import { useLayoutEffect } from "react";
import MealsList from "../components/MealsList/MealsList";


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




  return <MealsList items={displayedMeals}/>
  
}

