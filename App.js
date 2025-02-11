import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import NoteDetailScreen from './src/screens/NoteDetailScreen';
import AddNoteScreen from './src/screens/AddNoteScreen';
import HomeScreen from './src/screens/HomeScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Home"
          screenOptions={{
            headerStyle: {
              backgroundColor: "#4CAF50",
            },
            headerTintColor: "#fff",
            headerTitleStyle: {
              fontWeight: "bold",
            },
          }}
        >
            <Stack.Screen
              name="Home"
              component={HomeScreen}
              options={{
                title: "Les notes"
              }}
            />
            <Stack.Screen
            name="AddNote"
            component={AddNoteScreen}
            options={{
              title: "Ajout de notes"
            }}
            />
            <Stack.Screen
            name="NoteDetail"
            component={NoteDetailScreen}
            options={{
              title: "Details sur les notes"
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
  );
 }