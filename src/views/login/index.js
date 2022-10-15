import Input from '../../components/utils/Input.component';
import ButtonPrimaryDefault from '../../components/utils/ButtonPrimaryDefault.component'
import TextForgotPassword from '../../components/login/TextForgotPassword.component';
import { useContext, useEffect, useState } from 'react'
import * as Store from "../../redux/store/store";
import PaddingContent from '../../components/utils/PaddingContent.component';
import SafeAreaViewDefault from '../../components/utils/SafeAreaViewLogin.component';
import NotificationPopup from '../../components/utils/NotificationPopup.component';
import { CommonActions } from '@react-navigation/native';
import { getAuthTokenLogin } from '../../helper/login/utils';
import * as Constants from "../../constants/utils/Constants";

export default function LoginScreen( { navigation } ) {
  const [showPopup, setShowPopup] = useState(false);
  const [isDisabled, setIsDisabled] = useState(false);
  const { loginInfo, setLoginInfo, setIsLogin } = useContext(Store.LoginContext);
  const handleChange = async (value, type) => {
    setLoginInfo(prev => ({...prev, [type]: value}));
  };
  const onSubmit = async () => {
    const isEmailValid = () => { return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(loginInfo.login) };
    if (loginInfo.login && loginInfo.password && isEmailValid()) {
      setIsDisabled(true);
      const responseLogin = await getAuthTokenLogin(loginInfo.login.toLowerCase().trim(), loginInfo.password)
      .then(response => {
        const currentDate = new Date();
        handleChange(currentDate.getTime(), 'loginDate');
        handleChange(response.data.token, 'authToken');
        handleChange(response.data.average_consumption, 'averageConsumption');
        handleChange(response.data.fuel_per_liter, 'fuelPerLiter');
        navigation.dispatch(
          CommonActions.reset({
            index: 0,
            routes: [{
              name: 'HomeRoutes',
              params: {'isRegister': false}
            }],
          })
        );
        setIsLogin(true);
      })
      .catch((error) => {
        console.log(error);
        setShowPopup(true);
      });
      setIsDisabled(false);
    } else {
      setShowPopup(true);
    };
  }
  return (
    <SafeAreaViewDefault>
      <PaddingContent style={{marginTop: 40, alignItems: 'center'}}>
        <Input placeholder="Login" marginBottom={12} onChangeText={(value) => {handleChange(value, 'login')}} value={loginInfo.login}/>
        <Input placeholder="Senha" secureTextEntry={true} marginBottom={38} onChangeText={(value) => {handleChange(value, 'password')}} value={loginInfo.password}/>
        <ButtonPrimaryDefault
          title='Entrar'
          testID= 'test'
          onPress={() => onSubmit()}
          disabled={isDisabled}
          style={{backgroundColor: isDisabled ? Constants.colors.gray[700] : Constants.buttonConfig.Default.Primary.Small.BackgroundColor}}
        />
        <TextForgotPassword suppressHighlighting={true}  onPress={() => navigation.navigate('ForgotPasswordScreen')}>Esqueci minha senha</TextForgotPassword>
        { showPopup && <NotificationPopup title={"Login ou senha incorreto."} setShowPopup={setShowPopup} bottom={'60px'}/> }
      </PaddingContent>
    </SafeAreaViewDefault>
  );
}