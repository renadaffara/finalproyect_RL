import Login from "../screens/login";
import Register from "../screens/register";
import TabNavigator from "./tabNavigator";

const Stack = createNativeStackNavigator();

function tabNavigatior(){
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
          name="Login"
          component={Login}
        />  

        <Stack.Screen
          name="Register"
          component={Register}
        />

        <Stack.Screen
          name="NavegacionTab"
          component={TabNavigator}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default TabNavigator;