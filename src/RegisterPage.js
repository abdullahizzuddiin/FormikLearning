import React from 'react';
import {View, ScrollView, StyleSheet, ToastAndroid} from 'react-native';
import {Input, Button, Text, CheckBox} from 'react-native-elements';
import {Controller, useForm} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';
import * as yup from 'yup';
import request from './request';

const validationSchema = yup.object({
    name: yup.string().required('Wajib diisi yup'),
    age: yup.number().transform((val, oval) => {
            // it seems react-hook-form send empty input as `string` instead of `undefined` (oval).
            // Then, yup tried to parse it. So, it always get typeerror
            //https://github.com/react-hook-form/react-hook-form/issues/330#issuecomment-569635842
            //https://github.com/jquense/yup#mixedtransformcurrentvalue-any-originalvalue-any--any-schema
            return typeof oval === "string" && oval.trim() === "" ? undefined : val
        }
    ).typeError('Wajib Angka BOs').required('Wajib diisi yup'),
    email: yup.string().required('Wajib diisi yup'),
    address: yup.string().required('Wajib diisi yup'),
    phoneNumber: yup.string().required('Wajib diisi yup'),
    hobby: yup.string().required('Wajib diisi yup'),
    favFood: yup.string().required('Wajib diisi yup'),
    favBeverage: yup.string().required('Wajib diisi yup'),
    favBook: yup.string().required('Wajib diisi yup'),
    motto: yup.string().required('Wajib diisi yup'),
    jomblo: yup.boolean().required('Wajib diisi yup'),
    password: yup.string().required('Wajib diisi yup'),
    confirmationPassword: yup.string().required('Wajib diisi yup'),
});

const RegisterPage = () => {
    const {control, handleSubmit, errors} = useForm({
        resolver: yupResolver(validationSchema),
        mode: 'onBlur', //https://github.com/react-hook-form/react-hook-form/issues/283#issuecomment-610514235
        reValidateMode: 'onBlur'
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
                    render={({onChange, onBlur}) => (
                        <Input
                            placeholder='Nama'
                            errorMessage={errors.name?.message}
                            onBlur={onBlur}
                            onChangeText={val => onChange(val)}/>
                    )}/>
                <Controller
                    name={'age'}
                    defaultValue={''}
                    control={control}
                    render={({onChange, onBlur}) => (
                        <Input
                            placeholder='Umur'
                            onBlur={event => onBlur(event)}
                            errorMessage={errors.age?.message}
                            onChangeText={val => onChange(val)}/>
                    )}/>
                <Controller
                    name={'email'}
                    defaultValue={''}
                    control={control}
                    render={({onChange, onBlur}) => (
                        <Input
                            placeholder='Email'
                            errorMessage={errors.email?.message}
                            onBlur={onBlur}
                            onChangeText={val => onChange(val)}/>
                    )}/>
                <Controller
                    name={'address'}
                    defaultValue={''}
                    control={control}
                    render={({onChange, onBlur}) => (
                        <Input
                            placeholder='Alamat'
                            errorMessage={errors.address?.message}
                            onBlur={onBlur}
                            onChangeText={val => onChange(val)}/>
                    )}/>
                <Controller
                    name={'phoneNumber'}
                    defaultValue={''}
                    control={control}
                    render={({onChange, onBlur}) => (
                        <Input
                            placeholder='No. HP'
                            errorMessage={errors.phoneNumber?.message}
                            onBlur={onBlur}
                            onChangeText={val => onChange(val)}/>
                    )}/>
                <Controller
                    name={'hobby'}
                    defaultValue={''}
                    control={control}
                    render={({onChange, onBlur}) => (
                        <Input
                            placeholder='Hobi'
                            errorMessage={errors.hobby?.message}
                            onBlur={onBlur}
                            onChangeText={val => onChange(val)}/>
                    )}/>
                <Controller
                    name={'favFood'}
                    defaultValue={''}
                    control={control}
                    render={({onChange, onBlur}) => (
                        <Input
                            placeholder='Makanan Favorit'
                            errorMessage={errors.favFood?.message}
                            onBlur={onBlur}
                            onChangeText={val => onChange(val)}/>
                    )}/>
                <Controller
                    name={'favBeverage'}
                    defaultValue={''}
                    control={control}
                    render={({onChange, onBlur}) => (
                        <Input
                            placeholder='Minuman Favorit'
                            errorMessage={errors.favBeverage?.message}
                            onBlur={onBlur}
                            onChangeText={val => onChange(val)}/>
                    )}/>
                <Controller
                    name={'favBook'}
                    defaultValue={''}
                    control={control}
                    render={({onChange, onBlur}) => (
                        <Input
                            placeholder='Buku Favorit'
                            errorMessage={errors.favBook?.message}
                            onBlur={onBlur}
                            onChangeText={val => onChange(val)}/>
                    )}/>
                <Controller
                    name={'motto'}
                    defaultValue={''}
                    control={control}
                    render={({onChange, onBlur}) => (
                        <Input
                            placeholder='Moto Hidup'
                            errorMessage={errors.motto?.message}
                            onBlur={onBlur}
                            onChangeText={val => onChange(val)}/>
                    )}/>
                <Controller
                    name={'jomblo'}
                    defaultValue={false}
                    control={control}
                    render={({onChange, value}) => (
                        <CheckBox
                            title='Jomblo'
                            onPress={() => onChange(!value)}
                            checked={value}/>
                    )}/>
                <Controller
                    name={'password'}
                    defaultValue={''}
                    control={control}
                    render={({onChange, onBlur}) => (
                        <Input
                            placeholder='Password'
                            errorMessage={errors.password?.message}
                            onBlur={onBlur}
                            onChangeText={val => onChange(val)}/>
                    )}/>
                <Controller
                    name={'confirmationPassword'}
                    defaultValue={''}
                    control={control}
                    render={({onChange, onBlur}) => (
                        <Input
                            placeholder='Konfirmasi Password'
                            errorMessage={errors.confirmationPassword?.message}
                            onBlur={onBlur}
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
