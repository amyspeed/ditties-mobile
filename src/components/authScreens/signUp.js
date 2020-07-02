import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const signUp = () => {

    const navigation = useNavigation();

    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>SignUp</Text>
            <TouchableOpacity onPress={() => navigation.navigate('Sign In')}>
                <Text>Sign In</Text>
            </TouchableOpacity>
        </View>
    )
};

export default signUp;