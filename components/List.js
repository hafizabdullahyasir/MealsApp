import { View, Text, StyleSheet } from "react-native"



export default function List({data}){
    return data.map((datapoint)=>(
        <View style={styles.listItem} key={datapoint}>
            <Text style={styles.itemText} >{datapoint}</Text>
        </View>
        
    ))
}


const styles= StyleSheet.create({
    listItem:{
        borderRadius: 6,
        paddingHorizontal: 8,
        paddingVertical: 4,
        marginVertical: 4,
        marginHorizontal: 12,
        backgroundColor: '#05355A'
    },
    itemText:{
        color: '#FEFEFE',
        textAlign: 'center'
    }
})