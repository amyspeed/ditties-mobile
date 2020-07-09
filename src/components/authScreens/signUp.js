import React from 'react';
import { View, Text, TouchableOpacity, Button, TextInput } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useForm, Controller } from 'react-hook-form';

import { styles } from '../../styles/styles';

const signUp = () => {
    const navigation = useNavigation();

    const { handleSubmit, control } = useForm();

    const onSubmit = (data) => {
        console.log(data)
    }


    return(
        <View style={styles.container}>
            {/* <Text style={styles.header}>Sign in</Text> */}
            <Text style={styles.label}>First Name</Text>
                <Controller
                    control={control}
                    render={({ onChange, onBlur, value }) => (
                    <TextInput
                        style={styles.input}
                        onBlur={onBlur}
                        onChangeText={value => onChange(value)}
                        value={value}
                    />
                    )}
                name="firstName"
            />

            <Text style={styles.label}>Last Name</Text>
            <Controller
                    control={control}
                    render={({ onChange, onBlur, value }) => (
                    <TextInput
                        style={styles.input}
                        onBlur={onBlur}
                        onChangeText={value => onChange(value)}
                        value={value}
                    />
                    )}
                name="lastName"
            />
            <Text style={styles.label}>Username</Text>
                <Controller
                    control={control}
                    render={({ onChange, onBlur, value }) => (
                    <TextInput
                        style={styles.input}
                        onBlur={onBlur}
                        onChangeText={value => onChange(value)}
                        value={value}
                    />
                    )}
                name="username"
            />

            <Text style={styles.label}>Password</Text>
            <Controller
                    control={control}
                    render={({ onChange, onBlur, value }) => (
                    <TextInput
                        style={styles.input}
                        onBlur={onBlur}
                        onChangeText={value => onChange(value)}
                        value={value}
                    />
                    )}
                name="password"
            />

            <View style={styles.button}>
                <Button
                    style={styles.buttonInner}
                    color='white'
                    title="Register"
                    onPress={handleSubmit(onSubmit)}
                    />
            </View>

            <TouchableOpacity style={styles.link} onPress={() => navigation.navigate('Sign In')}>
                <Text style={styles.label}>Already have an account?</Text>
                <Text style={styles.linkText}>Sign In</Text>
            </TouchableOpacity>
        </View>
    )
};

export default signUp;