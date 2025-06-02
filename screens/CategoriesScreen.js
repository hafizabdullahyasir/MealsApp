import {CATEGORIES} from "../data/dummy-data";
import { FlatList , StyleSheet } from "react-native";
import CategoryGridTile from "../components/CategoryGridTile";



function renderCategoryItem(itemData){
    return <CategoryGridTile title={itemData.item.title} color={itemData.item.color} />;
}



export default function CategoriesScreen() {

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
    marginTop: 50,
   
      },
})
