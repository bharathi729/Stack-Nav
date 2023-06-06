import { StatusBar } from "expo-status-bar";
import { StyleSheet,Text,View } from "react-native";
import{createNativeStackNavigator} from '@react-navigation/native-stack';
import { NavigationContainer,useNavigation } from "@react-navigation/native";
import Home from "./Home";
import Details from "./Details";
import { QueryClient,QueryClientProvider } from "react-query";


const queryClient=new QueryClient()

const Stack=createNativeStackNavigator()

export default function App(){

  return (
    <QueryClientProvider client={queryClient}>
      <NavigationContainer>
        <Stack.Navigator>

          <Stack.Screen name='Home' component={Home} />
          <Stack.Screen name="details" component={Details} />

        </Stack.Navigator>
      </NavigationContainer>
    </QueryClientProvider>
  )
}

