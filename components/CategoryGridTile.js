import { View, Text, Pressable, StyleSheet, Platform} from "react-native";

export default function CategoryGridTile({title, color, onPress}){
    return(
       <View style={styles.gridItem }>
                    <Pressable android_ripple={{color: '#ccc'}} style={({pressed})=> [styles.button, pressed ? styles.buttonPressed : null]} onPress={onPress}>
            <View style={[styles.innerContainer, {backgroundColor: color}]}>
                <Text style={styles.title}>{title}</Text>
            </View>
        </Pressable>
       </View>
    )
}


const styles = StyleSheet.create({
    gridItem: {
        flex: 1,
        margin: 16,
        height: 150,
        borderRadius: 8,
        backgroundColor: 'white', 
        shadowColor: 'black',
        shadowOpacity: 0.25,
        shadowOffset: {width: 0, height: 2},
        shadowRadius: 8,
        overflow: Platform.OS === 'android' ? 'hidden' : 'visible',
      
    },
    innerContainer: {
        flex: 1,
        padding: 16,
        justifyContent: 'center',
        alignItems: 'center',
    },
    button: {
        flex: 1,
    },
  
    title: {
        fontWeight: 'bold',
        fontSize: 18,
    },  buttonPressed: {
        opacity: 0.5,
    },
})