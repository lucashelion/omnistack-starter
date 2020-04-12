import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Main from './pages/main';
import Product from './pages/product';

// export default createStackNavigator({
//     Main
// });

const AppNavigator = createStackNavigator(
    {
        Main,
        Product,
    }, 
    {
    navigationOptions: {
        headerStyle:{
            backgroundColor: "#DA552F"
        },
        headerTintColor: "#fff",
    },
},
);

export default createAppContainer(AppNavigator);