import React, {useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import LoginPage from './src/LoginPage';
import RegisterPage from './src/RegisterPage';

const LOGIN_PAGE = 1;
const REGISTER_PAGE = 2;

const App: () => React$Node = () => {
    const [activePage, setActivePage] = useState(LOGIN_PAGE);

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={[styles.headerText, activePage === LOGIN_PAGE && styles.activeHeaderText]}
                      onPress={() => setActivePage(LOGIN_PAGE)}>Login Page</Text>
                <Text style={[styles.headerText, activePage === REGISTER_PAGE && styles.activeHeaderText]}
                      onPress={() => setActivePage(REGISTER_PAGE)}>Register Page</Text>
            </View>
            {activePage === LOGIN_PAGE ? <LoginPage/> : <RegisterPage/>}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    header: {
        flexDirection: 'row',
        borderBottomColor: 'grey',
        borderBottomWidth: 2,
        padding: 8,
    },
    headerText: {
        padding: 20,
        color: 'black',
        borderRadius: 8,
    },
    activeHeaderText: {
        backgroundColor: 'black',
        color: 'white',
        fontWeight: 'bold'
    },
});

export default App;
