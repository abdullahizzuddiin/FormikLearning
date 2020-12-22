import React from 'react';
import {View, ScrollView, StyleSheet, ToastAndroid} from 'react-native';
import {Input, Button, Text, CheckBox} from 'react-native-elements';
import request from './request';
import {Formik} from 'formik';
import * as yup from 'yup';

const validationSchema = yup.object().shape({
    name: yup.string().required('Wajib Diisi'),
    email: yup.string().required('Wajib Diisi'),
    age: yup.number().typeError('Harus berupa angka').required('Wajib Diisi'),
    address: yup.string().required('Wajib Diisi'),
    phoneNumber: yup.string().required('Wajib Diisi'),
    hobby: yup.string().required('Wajib Diisi'),
    favFood: yup.string().required('Wajib Diisi'),
    favBeverage: yup.string().required('Wajib Diisi'),
    favBook: yup.string().required('Wajib Diisi'),
    motto: yup.string().required('Wajib Diisi'),
    jomblo: yup.boolean().required('Wajib Diisi'),
    password: yup.string().required('Wajib Diisi'),
    confirmationPassword: yup.string().required('Wajib Diisi'),
});


const RegisterPage = () => {
    const onSubmit = async (values) => {
        const response = await request('Register', values);
        ToastAndroid.show(response, ToastAndroid.SHORT);
    };

    return (
        <Formik
            initialValues={{}}
            validationSchema={validationSchema}
            onSubmit={onSubmit}>
            {({handleChange, setFieldValue, handleSubmit, errors, values}) => (
                <ScrollView>
                    <View style={styles.container}>
                        <Text style={styles.title}>Halo, <Text style={styles.bold}>Kawan</Text>!</Text>
                        <Text style={styles.subtitle}>Isi form ini dengan data yang benar ya. </Text>

                        {/*FORM START*/}
                        <Input
                            placeholder='Nama'
                            errorMessage={errors.name}
                            onChangeText={handleChange('name')}/>
                        <Input
                            placeholder='Email'
                            errorMessage={errors.email}
                            onChangeText={handleChange('email')}/>
                        <Input
                            placeholder='Umur'
                            errorMessage={errors.age}
                            keyboardType={'number-pad'}
                            onChangeText={handleChange('age')}/>
                        <Input
                            placeholder='Alamat'
                            errorMessage={errors.address}
                            onChangeText={handleChange('address')}/>
                        <Input
                            placeholder='No. HP'
                            errorMessage={errors.phoneNumber}
                            onChangeText={handleChange('phoneNumber')}/>
                        <Input
                            placeholder='Hobi'
                            errorMessage={errors.hobby}
                            onChangeText={handleChange('hobby')}/>
                        <Input
                            placeholder='Makanan Favorit'
                            errorMessage={errors.favFood}
                            onChangeText={handleChange('favFood')}/>
                        <Input
                            placeholder='Minuman Favorit'
                            errorMessage={errors.favBeverage}
                            onChangeText={handleChange('favBeverage')}/>
                        <Input
                            placeholder='Buku Favorit'
                            errorMessage={errors.favBook}
                            onChangeText={handleChange('favBook')}/>
                        <Input
                            placeholder='Moto Hidup'
                            errorMessage={errors.motto}
                            onChangeText={handleChange('motto')}/>
                        <CheckBox
                            title='Jomblo'
                            onPress={() => {setFieldValue('jomblo', !values.jomblo)}}
                            checked={values.jomblo}/>
                        <Input
                            placeholder='Password'
                            errorMessage={errors.password}
                            onChangeText={handleChange('password')}/>
                        <Input
                            placeholder='Konfirmasi Password'
                            errorMessage={errors.confirmationPassword}
                            onChangeText={handleChange('confirmationPassword')}/>
                        <Button title={'Daftar'} onPress={handleSubmit}/>
                    </View>
                </ScrollView>
            )}
        </Formik>
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
