import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import CategoriesScreen from './screens/CategoriesScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MealsOverview from './screens/MealsOverview';
import MealsDetail from './screens/MealsDetail';
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <>
    <StatusBar style="dark" />
    <NavigationContainer  > 
      <Stack.Navigator screenOptions={{ headerStyle: {backgroundColor: '#2890D6'}, headerTintColor: 'white', contentStyle: {backgroundColor: '#8BCCF5'}}}>
        <Stack.Screen name="MealsCategories"  options={{title: "Meals Categories", }}  component={CategoriesScreen} />
        <Stack.Screen
            name="MealsOverview"
            component={MealsOverview}
            // options={({ route, navigation }) => {
            //   const catId = route.params.categoryId;
            //   return { title: catId };
              //  }}
                />
                <Stack.Screen name='MealsDetail' options={{title: "Meals Details"}} component={MealsDetail} />
                    </Stack.Navigator>
    </NavigationContainer>
      </>
 
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, 
  },
});
