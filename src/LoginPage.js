import React from 'react';
import {View, StyleSheet, ToastAndroid} from 'react-native';
import {Input, Button, Text} from 'react-native-elements';
import {Formik} from 'formik';

import request from './request';

const LoginPage = () => {
    const validateForm = (values) => {
        const error = {};

        if (!values.email) {
            error.email = 'Harus diisi';
        }
        if (!values.password) {
            error.password = 'Harus diisi';
        }

        return error;
    };

    const onSubmit = async (values) => {
        const response = await request('Login', values);
        ToastAndroid.show(response, ToastAndroid.SHORT);
    };

    return (
        <Formik
            initialValues={{email: '', password: ''}}
            validate={validateForm}
            onSubmit={onSubmit}>
            {({handleChange, handleSubmit, errors}) => (
                <View style={styles.container}>
                    <Text style={styles.title}>Selamat Datang Kembali,
                        <Text style={styles.bold}> Kawan</Text>!
                    </Text>
                    <Input
                        placeholder='Email'
                        onChangeText={handleChange('email')}
                        errorMessage={errors.email}/>
                    <Input
                        placeholder='Password'
                        onChangeText={handleChange('password')}
                        errorMessage={errors.password} secureTextEntry/>
                    <Button title={'Login'} onPress={handleSubmit}/>
                </View>
            )}
        </Formik>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        justifyContent: 'center',
    },
    title: {
        marginBottom: 20,
        fontSize: 28,
    },
    bold: {
        fontWeight: 'bold',
    },
});

export default LoginPage;
