import { useContext } from 'react';
import { Image, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { LoginContext } from '../../../../routes/routes';

export default function Carpool() {
        const { loginInfo, setLoginInfo } = useContext(LoginContext);
        console.log(loginInfo)
        //const { userLogin } = route.params;
    
        //console.log(userLogin)
        return (
            <SafeAreaView>
                <Text>Hello carpool screen!</Text>
            </SafeAreaView>
    );
}