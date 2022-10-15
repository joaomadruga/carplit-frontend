import { useContext, useEffect, useState } from "react";
import { View } from "react-native";
import CurrentScreenWidget from "../../../components/register/CurrentScreenWidget.component";
import ButtonPrimaryDefault from "../../../components/utils/ButtonPrimaryDefault.component";
import InputWithTitleSubtitle from "../../../components/utils/InputWithTitleSubtitle.component";
import NotificationPopup from "../../../components/utils/NotificationPopup.component";
import PaddingContent from "../../../components/utils/PaddingContent.component";
import SafeAreaViewDefault from "../../../components/utils/SafeAreaViewLogin.component";
import * as Store from "../../../redux/store/store";


export default function SecondRegisterScreen( {navigation} ) {
  const { loginInfo, setLoginInfo } = useContext(Store.LoginContext);
  const [showPopup, setShowPopup] = useState(false);
  const [password, setPassword] = useState({
    password: '',
    confirmPassword: ''
  });
  const handleChange = (value, type) => {
    setPassword(prev => ({...prev, [type]: value}))
  }

  const onSubmit = async () => {
    const isPasswordValid = () => { return password.password.length > 7 && password.password === password.confirmPassword };
    if (password.password && isPasswordValid()) {
      loginInfo.password = password.password;
      navigation.navigate('ThirdRegisterScreen');
    } else {
      setShowPopup(true);
    };
  };
  return (
    <SafeAreaViewDefault>
      <PaddingContent>
        <View style={{flexDirection: 'column', justifyContent:'space-between', height: '100%'}}>
            <View style={{alignSelf: 'center'}}>
                <CurrentScreenWidget numberOfFilledWidgets={2} />
                <InputWithTitleSubtitle
                    TextTitle={'Defina uma senha'} 
                    TextSubtitle={'Crie uma senha com pelo menos 8 caracteres.'}
                    InputPlaceHolder={'Senha'}
                    onChangeText={(value) => {handleChange(value, 'password')}} 
                    value={password.password}
                    secureTextEntry={true}
                />
                <InputWithTitleSubtitle
                    TextTitle={'Confirme sua senha'} 
                    TextSubtitle={'A senha deve coincidir com a escolhida acima'}
                    InputPlaceHolder={'Confirme a senha'}
                    onChangeText={(value) => {handleChange(value, 'confirmPassword')}} 
                    value={password.confirmPassword}
                    secureTextEntry={true}
                />
            </View>
            <ButtonPrimaryDefault title={'Continuar'} style={{marginBottom: 30}} onPress={() => {onSubmit()}}/>
        </View>
        { showPopup && <NotificationPopup title={"Senha informada inválida."} setShowPopup={setShowPopup} bottom={'35px'}/> }
      </PaddingContent>
    </SafeAreaViewDefault>
  );
}