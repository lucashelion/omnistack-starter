import React from 'react';
import { Text, View } from 'react-native';
import { WebView } from 'react-native-webview';

const Product = ({ navigation }) => {
    return (
        <View>
            <Text>Acesse: {navigation.state.params.product.url}</Text>
            {/* <WebView source={{ uri: navigation.state.params.product.url }} /> */}
        </View>
    );
};

Product.navigationOptions = ({ navigation }) => ({
    title: navigation.state.params.product.title,
});

export default Product;