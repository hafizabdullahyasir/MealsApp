
import { View, FlatList,  StyleSheet} from  'react-native'
import MealItem from './MealItem';

export default function MealsList({items}){




    
  function renderMealItem(itemData) {

    const item = itemData.item;
    const mealItemProps = {
      id: item.id,
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
      data={items}
      keyExtractor={(itemData) => itemData.id}
      renderItem={renderMealItem}
    />
  </View>


 )



}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 16,
    },
  });
  