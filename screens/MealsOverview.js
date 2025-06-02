import { View, Text, StyleSheet } from "react-native";  
import { MEALS } from "../data/dummy-data";


export default function MealsOverview({route}) {
const catId = route.params.categoryId;



const displayedMeals = MEALS.filter((mealItemData)=>{
    return mealItemData.categoryIds.indexOf(catId) >= 0;
})


    return (
        <View style={styles.container}>
                <Text>Meals Overview - {catId}</Text>
              
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
    },
})

