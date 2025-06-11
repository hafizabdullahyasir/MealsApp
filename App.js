import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import CategoriesScreen from './screens/CategoriesScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MealsOverview from './screens/MealsOverview';
import MealsDetail from './screens/MealsDetail';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Favourite from './screens/Favourite';
import { Ionicons } from '@expo/vector-icons';
import FavoritesContextProvider from './store/context/favorites-context';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

function DrawerNavigator(){
  return <Drawer.Navigator screenOptions={{ headerStyle: {backgroundColor: '#2890D6'}, headerTintColor: 'white', sceneContainerStyle: {backgroundColor: '#8BCCF5'}}}>
    <Drawer.Screen name='Categories' component={CategoriesScreen} options={{title: 'All Categories', drawerIcon: ({color, size})=> (<Ionicons name='list' color={color} size={size}/>),}} />
    <Drawer.Screen name='Favourite' component={Favourite} options={{drawerIcon: ({color, size})=> (<Ionicons name='star' color={color} size={size}/>)}} />
  </Drawer.Navigator>
}
  



export default function App() {
  return (
    <>
    <StatusBar style="dark" />
<FavoritesContextProvider>
    <NavigationContainer  > 
      <Stack.Navigator screenOptions={{ headerStyle: {backgroundColor: '#2890D6'}, contentStyle: {backgroundColor: 'white'}}}>
        <Stack.Screen name="Drawer"  options={{headerShown: false }}  component={DrawerNavigator} />
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
 </FavoritesContextProvider>   
      </>
 
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, 
  },
});
