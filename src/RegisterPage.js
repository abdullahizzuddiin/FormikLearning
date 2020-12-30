import React from 'react';
import {View, ScrollView, StyleSheet, ToastAndroid} from 'react-native';
import {Input, Button, Text} from 'react-native-elements';
import {Controller, useForm} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';
import * as yup from 'yup';
import request from './request';

const validationSchema = yup.object({
    name: yup.string().required('Wajib diisi yup'),
    email: yup.string().required('Wajib diisi yup'),
    address: yup.string().required('Wajib diisi yup'),
    phoneNumber: yup.string().required('Wajib diisi yup'),
    hobby: yup.string().required('Wajib diisi yup'),
    favFood: yup.string().required('Wajib diisi yup'),
    favBeverage: yup.string().required('Wajib diisi yup'),
    favBook: yup.string().required('Wajib diisi yup'),
    motto: yup.string().required('Wajib diisi yup'),
    password: yup.string().required('Wajib diisi yup'),
    confirmationPassword: yup.string().required('Wajib diisi yup'),
});

const RegisterPage = () => {
    const {control, handleSubmit, errors} = useForm({
        resolver: yupResolver(validationSchema)
    });

    const onSubmit = async () => {
        const response = await request('Register');
        ToastAndroid.show(response, ToastAndroid.SHORT);
    };

    return (
        <ScrollView>
            <View style={styles.container}>
                <Text style={styles.title}>Halo, <Text style={styles.bold}>Kawan</Text>!</Text>
                <Text style={styles.subtitle}>Isi form ini dengan data yang benar ya. </Text>

                {/*FORM START*/}
                <Controller
                    name={'name'}
                    defaultValue={''}
                    control={control}
                    render={(onChange) => (
                        <Input
                            placeholder='Nama'
                            errorMessage={errors.name?.message}
                            onChangeText={val => onChange(val)}/>
                    )}/>
                <Controller
                    name={'email'}
                    defaultValue={''}
                    control={control}
                    render={(onChange) => (
                        <Input
                            placeholder='Email'
                            errorMessage={errors.email?.message}
                            onChangeText={val => onChange(val)}/>
                    )}/>
                <Controller
                    name={'address'}
                    defaultValue={''}
                    control={control}
                    render={(onChange) => (
                        <Input
                            placeholder='Alamat'
                            errorMessage={errors.address?.message}
                            onChangeText={val => onChange(val)}/>
                    )}/>
                <Controller
                    name={'phoneNumber'}
                    defaultValue={''}
                    control={control}
                    render={(onChange) => (
                        <Input
                            placeholder='No. HP'
                            errorMessage={errors.phoneNumber?.message}
                            onChangeText={val => onChange(val)}/>
                    )}/>
                <Controller
                    name={'hobby'}
                    defaultValue={''}
                    control={control}
                    render={(onChange) => (
                        <Input
                            placeholder='Hobi'
                            errorMessage={errors.hobby?.message}
                            onChangeText={val => onChange(val)}/>
                    )}/>
                <Controller
                    name={'favFood'}
                    defaultValue={''}
                    control={control}
                    render={(onChange) => (
                        <Input
                            placeholder='Makanan Favorit'
                            errorMessage={errors.favFood?.message}
                            onChangeText={val => onChange(val)}/>
                    )}/>
                <Controller
                    name={'favBeverage'}
                    defaultValue={''}
                    control={control}
                    render={(onChange) => (
                        <Input
                            placeholder='Minuman Favorit'
                            errorMessage={errors.favBeverage?.message}
                            onChangeText={val => onChange(val)}/>
                    )}/>
                <Controller
                    name={'favBook'}
                    defaultValue={''}
                    control={control}
                    render={(onChange) => (
                        <Input
                            placeholder='Buku Favorit'
                            errorMessage={errors.favBook?.message}
                            onChangeText={val => onChange(val)}/>
                    )}/>
                <Controller
                    name={'motto'}
                    defaultValue={''}
                    control={control}
                    render={(onChange) => (
                        <Input
                            placeholder='Moto Hidup'
                            errorMessage={errors.motto?.message}
                            onChangeText={val => onChange(val)}/>
                    )}/>
                <Controller
                    name={'password'}
                    defaultValue={''}
                    control={control}
                    render={(onChange) => (
                        <Input
                            placeholder='Password'
                            errorMessage={errors.password?.message}
                            onChangeText={val => onChange(val)}/>
                    )}/>
                <Controller
                    name={'confirmationPassword'}
                    defaultValue={''}
                    control={control}
                    render={(onChange) => (
                        <Input
                            placeholder='Konfirmasi Password'
                            errorMessage={errors.confirmationPassword?.message}
                            onChangeText={val => onChange(val)}/>
                    )}/>
                <Button title={'Daftar'} onPress={handleSubmit(onSubmit)}/>
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
    },
    title: {
        fontSize: 28,
    },
    subtitle: {
        marginBottom: 20,
    },
    bold: {
        fontWeight: 'bold',
    },
});

export default RegisterPage;
