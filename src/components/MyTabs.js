import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import SuddenCardiac from '../screens/SuddenCardiac.js';
import Screen_1 from '../screens/Screen_13.js';
import Screen_2 from '../screens/Screen_2.js';
const Tab = createBottomTabNavigator();

const MyTabs = () => {
    return (
        <Tab.Navigator
            initialRouteName="SuddenCardiac"
            screenOptions={{
                tabBarActiveTintColor: '#e91e63',
                headerShown: false
            }}
        >
            <Tab.Screen
                name="SuddenCardiac"
                component={SuddenCardiac}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons name="home" color={color} size={size} />
                    ),
                }}
            />
            <Tab.Screen
                name="Screen_1"
                component={Screen_1}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons name="bell" color={color} size={size} />
                    )
                }}
            />
            <Tab.Screen
                name="Screen_2"
                component={Screen_2}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons name="account" color={color} size={size} />
                    ),
                }}
            />
        </Tab.Navigator>
    );
}

export default MyTabs;