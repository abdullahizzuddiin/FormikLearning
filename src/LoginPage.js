import React from 'react';
import {View, StyleSheet, ToastAndroid} from 'react-native';
import {Input, Button, Text} from 'react-native-elements';
import {Controller, useForm} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';
import * as yup from 'yup';
import request from './request';

const validationSchema = yup.object({
    email: yup.string().email().required('Wajib diisi bos'),
    password: yup.string().required('Wajib diisi bos')
});

const LoginPage = () => {
    const { control, handleSubmit, errors} = useForm({
        resolver: yupResolver(validationSchema)
    });

    const onSubmit = async (value) => {
        const response = await request('Login', value);
        ToastAndroid.show(response, ToastAndroid.SHORT);
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Selamat Datang Kembali,
                <Text style={styles.bold}>Kawan</Text>!
            </Text>

            {/*FORM START*/}
            <Controller
                control={control}
                name={'email'}
                defaultValue={''}
                render={({onChange}) => (
                    <Input
                        placeholder='Email'
                        onChangeText={val => onChange(val)}
                        errorMessage={errors.email?.message}/>
                )}/>
            <Controller
                control={control}
                defaultValue={''}
                name={'password'}
                render={({onChange}) => (
                    <Input
                        placeholder='Password'
                        onChangeText={val => onChange(val)}
                        errorMessage={errors.password?.message} secureTextEntry/>
                )}/>
            <Button title={'Login'} onPress={handleSubmit(onSubmit)}/>
        </View>
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
