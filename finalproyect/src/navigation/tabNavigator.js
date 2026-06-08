import Login from "../screens/login";
import Register from "../screens/register";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const Tab = createBottomTabNavigator();

function TabNavigator(){
  return (
      <Tab.Navigator>
        <Tab.Screen 
          name="Login"
          component={Login}
        />  

        <Tab.Screen
          name="Register"
          component={Register}
        />

      </Tab.Navigator>
  );
}

export default TabNavigator;