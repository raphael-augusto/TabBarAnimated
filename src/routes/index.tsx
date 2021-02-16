/* eslint-disable react/prop-types */
import React from 'react';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Icon from 'react-native-vector-icons/Feather';
import { NavigationContainer } from '@react-navigation/native';

import AddButton from '../components/AddButton';

import {
  ProfileScreen,
  CameraScreen,
  LocalizationScreen,
  ConfigurationScreen,
  AddButtonAnimated,
} from '../pages';

const Tab = createBottomTabNavigator();

const TabRoutes: React.FC = () => (
  <>
    <NavigationContainer>
      <Tab.Navigator
        tabBarOptions={{
          activeTintColor: '#F8F8F8',
          inactiveTintColor: '#586589',
          labelStyle: {
            fontSize: 13,
          },
          showLabel: false,
          style: {
            backgroundColor: '#171F33',
            paddingBottom: 10,
            paddingTop: 10,
            height: 65,
          },
        }}
      >
        <Tab.Screen
          name="ProfileScreen"
          component={ProfileScreen}
          options={{
            title: '',
            tabBarIcon: ({ size, color }) => (
              <Icon name="user" size={size} color={color} />
            ),
          }}
        />

        <Tab.Screen
          name="CameraScreen"
          component={CameraScreen}
          options={{
            title: '',
            tabBarIcon: ({ size, color }) => (
              <Icon name="camera" size={size} color={color} />
            ),
          }}
        />
        <Tab.Screen
          name="ADD"
          component={AddButtonAnimated}
          options={{
            title: '',
            tabBarIcon: ({ size, color }) => <AddButton />,
          }}
        />
        <Tab.Screen
          name="LocalizationScreen"
          component={LocalizationScreen}
          options={{
            title: '',
            tabBarIcon: ({ size, color }) => (
              <Icon name="flag" size={size} color={color} />
            ),
          }}
        />
        <Tab.Screen
          name="ConfigurationScreen"
          component={ConfigurationScreen}
          options={{
            title: '',
            tabBarIcon: ({ size, color }) => (
              <Icon name="more-horizontal" size={size} color={color} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  </>
);

export default TabRoutes;
