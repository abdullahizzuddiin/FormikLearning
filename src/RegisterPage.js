import React from 'react';
import {View, ScrollView, StyleSheet, ToastAndroid} from 'react-native';
import {Input, Button, Text, CheckBox} from 'react-native-elements';
import request from './request';
import {Formik} from 'formik';
import * as yup from 'yup';

const initialValues = {
    name: '',
    email: '',
    age: '',
    address: '',
    phoneNumber: '',
    hobby: '',
    favFood: '',
    favBeverage: '',
    favBook: '',
    motto: '',
    jomblo: false,
    spouseName: '',
    password: '',
    confirmationPassword: '',
};

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
    spouseName: yup
        .string()
        .when('jomblo', {
            is: val => val,
            then: yup.string().required('Nama pasangan wajib diisi'),
            otherwise: yup.string().notRequired()
        }),
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
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={onSubmit}>
            {({handleChange, setFieldValue, handleSubmit, handleBlur, touched, errors, values}) => (
                <ScrollView>
                    <View style={styles.container}>
                        <Text style={styles.title}>Halo, <Text style={styles.bold}>Kawan</Text>!</Text>
                        <Text style={styles.subtitle}>Isi form ini dengan data yang benar ya. </Text>

                        {/*FORM START*/}
                        <Input
                            placeholder='Nama'
                            errorMessage={touched.name && errors.name ? errors.name :  null}
                            onChangeText={handleChange('name')}
                            onBlur={handleBlur('name')}/>
                        <Input
                            placeholder='Email'
                            errorMessage={touched.email && errors.email ? errors.email :  null}
                            onChangeText={handleChange('email')}
                            onBlur={handleBlur('email')}/>
                        <Input
                            placeholder='Umur'
                            errorMessage={touched.age && errors.age ? errors.age :  null}
                            keyboardType={'number-pad'}
                            onChangeText={handleChange('age')}
                            onBlur={handleBlur('age')}/>
                        <Input
                            placeholder='Alamat'
                            errorMessage={touched.address && errors.address ? errors.address :  null}
                            onChangeText={handleChange('address')}
                            onBlur={handleBlur('address')}/>
                        <Input
                            placeholder='No. HP'
                            errorMessage={touched.phoneNumber && errors.phoneNumber ? errors.phoneNumber :  null}
                            onChangeText={handleChange('phoneNumber')}
                            onBlur={handleBlur('phoneNumber')}/>
                        <Input
                            placeholder='Hobi'
                            errorMessage={touched.hobby && errors.hobby ? errors.hobby :  null}
                            onChangeText={handleChange('hobby')}
                            onBlur={handleBlur('hobby')}/>
                        <Input
                            placeholder='Makanan Favorit'
                            errorMessage={touched.favFood && errors.favFood ? errors.favFood :  null}
                            onChangeText={handleChange('favFood')}
                            onBlur={handleBlur('favFood')}/>
                        <Input
                            placeholder='Minuman Favorit'
                            errorMessage={touched.favBeverage && errors.favBeverage ? errors.favBeverage :  null}
                            onChangeText={handleChange('favBeverage')}
                            onBlur={handleBlur('favBeverage')}/>
                        <Input
                            placeholder='Buku Favorit'
                            errorMessage={touched.favBook && errors.favBook ? errors.favBook :  null}
                            onChangeText={handleChange('favBook')}
                            onBlur={handleBlur('favBook')}/>
                        <Input
                            placeholder='Moto Hidup'
                            errorMessage={touched.motto && errors.motto ? errors.motto :  null}
                            onChangeText={handleChange('motto')}
                            onBlur={handleBlur('motto')}/>
                        <CheckBox
                            title='Jomblo'
                            onPress={() => {setFieldValue('jomblo', !values.jomblo)}}
                            checked={values.jomblo}/>
                        <Input
                            placeholder='Nama Pasangan'
                            errorMessage={touched.spouseName && errors.spouseName ? errors.spouseName :  null}
                            onChangeText={handleChange('spouseName')}
                            onBlur={handleBlur('spouseName')}/>
                        <Input
                            placeholder='Password'
                            errorMessage={touched.password && errors.password ? errors.password :  null}
                            onChangeText={handleChange('password')}
                            onBlur={handleBlur('password')}/>
                        <Input
                            placeholder='Konfirmasi Password'
                            errorMessage={touched.confirmationPassword && errors.confirmationPassword ? errors.confirmationPassword :  null}
                            onChangeText={handleChange('confirmationPassword')}
                            onBlur={handleBlur('confirmationPassword')}/>
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
