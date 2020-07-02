import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const signIn = () => {
    const navigation = useNavigation();

    return(
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>SignIn</Text>
            <TouchableOpacity onPress={() => navigation.navigate('Sign Up')}>
                <Text>Sign Up</Text>
            </TouchableOpacity>
        </View>
    )
};

export default signIn;