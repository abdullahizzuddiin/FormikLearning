import React, {useState} from 'react';
import {View, ScrollView, StyleSheet, ToastAndroid} from 'react-native';
import {Input, Button, Text} from 'react-native-elements';
import request from './request';

const RegisterPage = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [address, setAddress] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [hobby, setHobby] = useState('');
    const [favFood, setFavFood] = useState('');
    const [favBeverage, setFavBeverage] = useState('');
    const [favBook, setFavBook] = useState('');
    const [motto, setMotto] = useState('');
    const [password, setPassword] = useState('');
    const [confirmationPassword, setConfirmationPassword] = useState('');
    const [error, setError] = useState({});

    const validateForm = () => {
        const error = {};
        let anyError = false;

        if (!name) {
            error.name = 'harus diisi';
            anyError = true;
        }

        if (!email) {
            error.email = 'harus diisi';
            anyError = true;
        }

        if (!address) {
            error.address = 'Harus diisi';
            anyError = true;
        }

        if (!phoneNumber) {
            error.phoneNumber = 'Harus diisi';
            anyError = true;
        }

        if (!hobby) {
            error.hobby = 'Harus diisi';
            anyError = true;
        }

        if (!favFood) {
            error.favFood = 'Harus diisi';
            anyError = true;
        }

        if (!favBeverage) {
            error.favBeverage = 'Harus diisi';
            anyError = true;
        }

        if (!favBook) {
            error.favBook = 'Harus diisi';
            anyError = true;
        }

        if (!motto) {
            error.motto = 'Harus diisi';
            anyError = true;
        }

        if (!password) {
            error.password = 'Harus diisi';
            anyError = true;
        }

        if (!confirmationPassword) {
            error.confirmationPassword = 'Harus diisi';
            anyError = true;
        }

        if (anyError) {
            setError(error);
            throw error;
        }
    };

    const onSubmit = async () => {
        try {
            validateForm();
            setError({});
            const response = await request('Register');
            ToastAndroid.show(response, ToastAndroid.SHORT);
        } catch (e) {
            console.log('Ada error');
        }
    };

    return (
        <ScrollView>
            <View style={styles.container}>
                <Text style={styles.title}>Halo, <Text style={styles.bold}>Kawan</Text>!</Text>
                <Text style={styles.subtitle}>Isi form ini dengan data yang benar ya. </Text>

                {/*FORM START*/}
                <Input
                    placeholder='Nama'
                    errorMessage={error.name}
                    onChangeText={setName}/>
                <Input
                    placeholder='Email'
                    errorMessage={error.email}
                    onChangeText={setEmail}/>
                <Input
                    placeholder='Alamat'
                    errorMessage={error.address}
                    onChangeText={setAddress}/>
                <Input
                    placeholder='No. HP'
                    errorMessage={error.phoneNumber}
                    onChangeText={setPhoneNumber}/>
                <Input
                    placeholder='Hobi'
                    errorMessage={error.hobby}
                    onChangeText={setHobby}/>
                <Input
                    placeholder='Makanan Favorit'
                    errorMessage={error.favFood}
                    onChangeText={setFavFood}/>
                <Input
                    placeholder='Minuman Favorit'
                    errorMessage={error.favBeverage}
                    onChangeText={setFavBeverage}/>
                <Input
                    placeholder='Buku Favorit'
                    errorMessage={error.favBook}
                    onChangeText={setFavBook}/>
                <Input
                    placeholder='Moto Hidup'
                    errorMessage={error.motto}
                    onChangeText={setMotto}/>
                <Input
                    placeholder='Password'
                    errorMessage={error.password}
                    onChangeText={setPassword}/>
                <Input
                    placeholder='Konfirmasi Password'
                    errorMessage={error.confirmationPassword}
                    onChangeText={setConfirmationPassword}/>
                <Button title={'Daftar'} onPress={onSubmit}/>
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
