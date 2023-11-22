
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { IconButton } from 'react-native-paper'; 
import { Provider } from 'react-redux';
import store from './reducers/store';
import HomeScreen from './Screen/HomeScreen';
import LoginScreen from './Screen/LoginScreen';
import AddScreen from './Screen/AddScreen';
import DetailsScreen from './Screen/DetailsScreen';
import CustomersScreen from './Screen/CustomersDetailScreen';
import AddCustomerScreen from './Screen/AddCustomerScreen';
import TransactionScreen from './Screen/TransactionScreen';
import DetailTransactionScreen from './Screen/DetailTransactionScreen';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Tab.Navigator
          initialRouteName="Login" 
          screenOptions={{
            tabBarActiveTintColor: '#e91e63',
          }}
        >
          {/* Home Screen */}
          <Tab.Screen
            name="Home"
            component={HomeScreen}
            options={{
              tabBarLabel: 'Home',
              tabBarIcon: ({ color, size }) => (
                <IconButton
                  icon="camera"
                  size={size}
                  onPress={() => {}}
                />
              ),
            }}
          />

          {/* Login Screen */}
          <Tab.Screen
            name="Login"
            component={LoginScreen}
            options={{
              tabBarLabel: 'Login',
              tabBarIcon: ({ color, size }) => (
                <IconButton
                  icon="login"
                  size={size}
                  onPress={() => {}}
                />
              ),
            }}
          />

          {/* Service Screen */}
          <Tab.Screen
            name="Service"
            component={AddScreen}
            options={{
              tabBarLabel: 'Service',
              tabBarIcon: ({ color, size }) => (
                <IconButton
                  icon="login"
                  size={size}
                  onPress={() => {}}
                />
              ),
            }}
          />
          <Tab.Screen
            name="Details"
            component={DetailsScreen}
            options={{
              tabBarLabel: 'Service',
              tabBarIcon: ({ color, size }) => (
                <IconButton
                  icon="login"
                  size={size}
                  onPress={() => {}}
                />
              ),
            }}
          />
          <Tab.Screen
            name="Customers"
            component={CustomersScreen}
            options={{
              tabBarLabel: 'Customers',
              tabBarIcon: ({ color, size }) => (
                <IconButton
                  icon="login"
                  size={size}
                  onPress={() => {}}
                />
              ),
            }}
          />
          <Tab.Screen
            name="AddCustomers"
            component={AddCustomerScreen}
            options={{
              tabBarLabel: 'Add',
              tabBarIcon: ({ color, size }) => (
                <IconButton
                  icon="login"
                  size={size}
                  onPress={() => {}}
                />
              ),
            }}
          />
           <Tab.Screen
            name="Transaction"
            component={TransactionScreen}
            options={{
              tabBarLabel: 'Transaction',
              tabBarIcon: ({ color, size }) => (
                <IconButton
                  icon="login"
                  size={size}
                  onPress={() => {}}
                />
              ),
            }}
          />
          <Tab.Screen
            name="DetailTransaction"
            component={DetailTransactionScreen}
            options={{
              tabBarLabel: 'Transaction',
              tabBarIcon: ({ color, size }) => (
                <IconButton
                  icon="login"
                  size={size}
                  onPress={() => {}}
                />
              ),
            }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
