import React, {useState} from 'react';
import {View, StyleSheet, ToastAndroid} from 'react-native';
import {Input, Button, Text} from 'react-native-elements';
import request from './request';

const LoginPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState({});

    const validateForm = () => {
        const error = {};
        let anyError = false;

        if (!email) {
            error.email = 'Harus diisi';
            anyError = true;
        }
        if (!password) {
            error.password = 'Harus diisi';
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
            const response = await request('Login');
            ToastAndroid.show(response, ToastAndroid.SHORT);
        } catch (e) {
            console.log('Ada error');
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Selamat Datang Kembali,
                <Text style={styles.bold}>Kawan</Text>!
            </Text>

            {/*FORM START*/}
            <Input
                placeholder='Email'
                onChangeText={setEmail}
                errorMessage={error.email}/>
            <Input
                placeholder='Password'
                onChangeText={setPassword}
                errorMessage={error.password} secureTextEntry/>
            <Button title={'Login'} onPress={onSubmit}/>
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
