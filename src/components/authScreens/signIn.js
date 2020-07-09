import React from 'react';
import { View, Text, TouchableOpacity, Button, TextInput } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useForm, Controller } from 'react-hook-form';

import { connect } from 'react-redux';
import { login } from '../../actions/authActions';

import { styles } from '../../styles/styles';

const SignIn = (props) => {
    const navigation = useNavigation();

    const { handleSubmit, control } = useForm();

    const onSubmit = (data) => {
        props.dispatch(login(data))
        console.log(data)
    }


    return(
        <View style={styles.container}>
            {/* <Text style={styles.header}>Sign up</Text> */}
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
                    title="Sign in"
                    onPress={handleSubmit(onSubmit)}
                    />
            </View>

            <TouchableOpacity style={styles.link} onPress={() => navigation.navigate('Sign Up')}>
                <Text style={styles.label}>Don't have an account yet?</Text>
                <Text style={styles.linkText}>Sign Up</Text>
            </TouchableOpacity>
        </View>
    )
};

const mapStateToProps = state => ({
    // loggedIn: state.auth.currentUser !== null,
    // error: state.auth.error,
    // loading: state.auth.loading
});

export default connect(mapStateToProps)(SignIn);