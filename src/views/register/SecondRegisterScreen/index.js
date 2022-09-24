import { useContext } from "react";
import { View } from "react-native";
import CurrentScreenWidget from "../../../components/register/CurrentScreenWidget.component";
import ButtonPrimaryDefault from "../../../components/utils/ButtonPrimaryDefault.component";
import InputWithTitleSubtitle from "../../../components/utils/InputWithTitleSubtitle.component";
import PaddingContent from "../../../components/utils/PaddingContent.component";
import SafeAreaViewDefault from "../../../components/utils/SafeAreaViewLogin.component";
import * as Store from "../../../redux/store/store";


export default function SecondRegisterScreen( {navigation} ) {
  const { loginInfo, setLoginInfo } = useContext(Store.LoginContext);
  const handleChange = (value, type) => {
    setLoginInfo(prev => ({...prev, [type]: value}))
  }
  return (
    <SafeAreaViewDefault>
      <PaddingContent>
        <View style={{flexDirection: 'column', justifyContent:'space-between', height: '100%'}}>
            <View>
                <CurrentScreenWidget numberOfFilledWidgets={2} />
                <InputWithTitleSubtitle
                    TextTitle={'Defina uma senha'} 
                    TextSubtitle={'Crie uma senha com pelo menos 8 caracteres.'}
                    InputPlaceHolder={'Senha'}
                    //onChangeText={(value) => {handleChange(value, 'login')}} 
                    //value={loginInfo.login}
                    secureTextEntry={true}
                />
                <InputWithTitleSubtitle
                    TextTitle={'Confirme sua senha'} 
                    TextSubtitle={'A senha deve coincidir com a escolhida acima'}
                    InputPlaceHolder={'Confirme a senha'}
                    //onChangeText={(value) => {handleChange(value, 'login')}} 
                    //value={loginInfo.login}
                    secureTextEntry={true}
                />
            </View>
            <ButtonPrimaryDefault title={'Continuar'} style={{marginBottom: 30}} onPress={() => {navigation.navigate('ThirdRegisterScreen')}}/>
        </View>
      </PaddingContent>
    </SafeAreaViewDefault>
  );
}