import { View, Text } from "react-native";


export default function MealItem({title}){
    return (
        <View style={styles.mealItem}>

           <Text>{title}</Text>

            </View>
            
        
        
        )
       
    
    
    }


// const styles = StyleSheet.create({
//     mealItem: {
//         margin: 16,
//         borderRadius: 8,
//         overflow: 'hidden',
//         backgroundColor: 'white',
//         elevation: 4,
//         shadowColor: 'black',
//         shadowOpacity: 0.25,
//         shadowOffset: {width: 0, height: 2},
//         shadowRadius: 8,
//     },
// });