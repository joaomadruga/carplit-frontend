import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import SafeAreaViewLogin from '../../components/login/SafeAreaViewLogin.component';
import LoginTitle from '../../components/login/TitleLogin.component';
import Input from '../../components/utils/Input.component';

export default function LoginScreen() {
  return (
    <SafeAreaViewLogin>
      <Input placeholder="Login"/>
      <Input placeholder="Senha"/>
    </SafeAreaViewLogin>
  );
}