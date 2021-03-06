import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import Favorites from '../Components/Favorites'
import FilmDetail from '../Components/FilmDetail'

const Stack = createStackNavigator();

class FavorisScreen extends React.Component {
    render() {
        return (
            <Stack.Navigator>
                <Stack.Screen name="Favorites" component={Favorites} options={{ title: 'Favoris' }} />
                <Stack.Screen name="FilmDetail" component={FilmDetail} />
            </Stack.Navigator>
        )
    }
}

export default FavorisScreen