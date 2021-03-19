import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { NavigationContainer } from '@react-navigation/native'
import HomeScreen from "./HomeScreen"
import FavorisScreen from "./FavorisScreen"
import { Image, StyleSheet } from 'react-native'

const Tab = createBottomTabNavigator();

class Navigation extends React.Component {
    render() {
        return (
            <NavigationContainer>
                <Tab.Navigator
                    screenOptions={({ route }) => ({
                        tabBarIcon: () => {
                            let icon;
                            if (route.name === 'Home') {
                                icon = require('../Images/search.png')
                            } else if (route.name === 'Favorites') {
                                icon = require('../Images/heartfull.png')
                            }
                            return <Image
                                source={icon}
                                style={styles.icon}
                            />
                        },
                    })}
                    tabBarOptions={{
                        activeTintColor: 'purple',
                        inactiveTintColor: 'gray',
                        activeBackgroundColor: '#DDDDDD',
                        inactiveBackgroundColor: '#FFFFFF',
                        showLabel: false
                    }}
                    
                >
                    <Tab.Screen name="Home" component={HomeScreen} />
                    <Tab.Screen name="Favorites" component={FavorisScreen} />
                </Tab.Navigator>
            </NavigationContainer>
        )
    }
}


const styles = StyleSheet.create({
    icon: {
        width: 30,
        height: 30
    }
})

export default Navigation

