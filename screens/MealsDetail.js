import { Text, StyleSheet, View, Image, ScrollView } from "react-native";
import { MEALS } from "../data/dummy-data";
import Details from "../components/Details";
import List from "../components/List";


export default function MealsDetail({route}){

    const mealId = route.params.mealId;
    const selectedMeal = MEALS.find((meal)=> meal.id === meal.id)

return(
<ScrollView style={styles.rootContainer}>
<Image style={styles.image} source={{uri: selectedMeal.imageUrl}} />
<Text style={styles.title}>{selectedMeal.title}</Text>
<View>
<Details duration={selectedMeal.duration} complexity={selectedMeal.complexity} affordability={selectedMeal.affordability} textStyle={styles.detailtext}/>
</View>
<View style={styles.listOuterContainer}>
<View style={styles.listContainer}>
<View style={styles.subtitleContainer}>
<Text style={styles.subtitle}>Ingredients</Text>
</View>
<List data={selectedMeal.ingredients}/>
<View style={styles.subtitleContainer}>
<Text style={styles.subtitle}>steps</Text>
</View>
<List data={selectedMeal.steps}/>
</View>
</View>

</ScrollView>




);

}

const styles = StyleSheet.create({
    rootContainer:{
   marginBottom: 52,
    },
    image:{
        width: '100%',
        height: 350,
    },
    title:{
        fontWeight: 'bold',
        fontSize: 24,
        margin: 8,
        textAlign: 'center',
        color: 'white'
    },
    detailtext:{
        color: 'white' 
    },
    subtitle:{
        color: 'dodgerblue',
        fontSize: 18,
        fontWeight: 'bold',
       
       
        textAlign: 'center'
    },
    subtitleContainer:{
        marginHorizontal: 24,
        marginVertical: 4,

        
        padding: 6,
        borderBottomColor: 'white',
        borderBottomWidth: 2,
    },
    listContainer:{
        width: '80%',
    },
    listOuterContainer:{
        alignItems: 'center',
    },
}) 