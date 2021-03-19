import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import News from '../Components/News'
import FilmDetail from '../Components/FilmDetail'

const Stack = createStackNavigator();

class NewsScreen extends React.Component {
    render() {
        return (
            <Stack.Navigator>
                <Stack.Screen name="News" component={News} options={{ title: 'Les Derniers Films' }} />
                <Stack.Screen name="FilmDetail" component={FilmDetail} />
            </Stack.Navigator>
        )
    }
}

export default NewsScreen