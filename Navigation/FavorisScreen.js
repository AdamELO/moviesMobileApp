import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import Favorites from '../Components/Favorites'

const Stack = createStackNavigator();

class FavorisScreen extends React.Component {
    render() {
        return (
            <Stack.Navigator>
                <Stack.Screen name="Favorites" component={Favorites} options={{ title: 'Favoris' }} />
            </Stack.Navigator>
        )
    }
}

export default FavorisScreen