import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { AuthProvider, useAuth } from './src/context/AuthContext';

import LoginScreen from './src/screens/LoginScreen';
import OrdersScreen from './src/screens/OrdersScreen';
import ProfileScreen from './src/screens/ProfileScreen';

const Drawer = createDrawerNavigator();
const Stack = createNativeStackNavigator();

const DrawerNavigator = () => {
  const { logout } = useAuth();
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Профиль" component={ProfileScreen} />
      <Drawer.Screen name="Заказы" component={OrdersScreen} />
      <Drawer.Screen 
        name="Выйти" 
        component={LoginScreen}
        listeners={({ navigation }) => ({
          drawerItemPress: () => {
            logout();
            navigation.closeDrawer();
          }
        })}
        options={{
          drawerLabelStyle: { color: '#FF3B30' }
        }}
      />
    </Drawer.Navigator>
  );
};

const Navigation = () => {
  const { token } = useAuth();

  return (
    <NavigationContainer>
      {token ? (
        <DrawerNavigator />
      ) : (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Login" component={LoginScreen} />
        </Stack.Navigator>
      )}
    </NavigationContainer>
  );
};

export default function App() {
  return (
    <AuthProvider>
      <Navigation />
    </AuthProvider>
  );
} 
