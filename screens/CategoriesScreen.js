import {CATEGORIES} from "../data/dummy-data";
import { FlatList , StyleSheet } from "react-native";
import CategoryGridTile from "../components/CategoryGridTile";









export default function CategoriesScreen({navigation}) {
    function renderCategoryItem(itemData){
        function pressHandler(){
           
            navigation.navigate('MealsOverview', {
                categoryId: itemData.item.id,
            });
        }
        return <CategoryGridTile title={itemData.item.title} color={itemData.item.color} onPress={pressHandler} />;
    }

    return (
       
     <FlatList
     data={CATEGORIES}
     style={styles.screen} 
     keyExtractor={(item) => item.id}
     renderItem={renderCategoryItem}
     numColumns={2}
 
/>

 )
    }



const styles = StyleSheet.create({
    screen: {
    flex: 1,

   
      },
})
