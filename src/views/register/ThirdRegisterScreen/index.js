import { CommonActions } from "@react-navigation/native";
import { useContext } from "react";
import { View } from "react-native";
import { useModalize } from "react-native-modalize";
import CurrentScreenWidget from "../../../components/register/CurrentScreenWidget.component";
import TextPrivacy from "../../../components/register/TextPrivacy.component";
import ButtonPrimaryDefault from "../../../components/utils/ButtonPrimaryDefault.component";
import InputWithTitleSubtitle from "../../../components/utils/InputWithTitleSubtitle.component";
import PaddingContent from "../../../components/utils/PaddingContent.component";
import SafeAreaViewDefault from "../../../components/utils/SafeAreaViewLogin.component";
import * as Store from "../../../redux/store/store";

export default function ThirdRegisterScreen({ navigation }) {
  const { loginInfo, setLoginInfo } = useContext(Store.LoginContext);
  const handleChange = (value, type) => {
    setLoginInfo(prev => ({...prev, [type]: value}))
  };
  return (
    <SafeAreaViewDefault>
      <PaddingContent>
        <View style={{flexDirection: 'column', justifyContent:'space-between', height: '100%'}}>
            <View>
                <CurrentScreenWidget numberOfFilledWidgets={3} />
                <InputWithTitleSubtitle
                    TextTitle={'Consumo médio do seu carro (km/L)'} 
                    TextSubtitle={'Esse valor será utilizado para calcular os litros de combustível gastos nos trajetos'}
                    InputPlaceHolder={'Consumo (km/L)'}
                    //onChangeText={(value) => {handleChange(value, 'login')}} 
                    value={loginInfo.login}
                    secureTextEntry={true}
                />
                <InputWithTitleSubtitle
                    TextTitle={'Custo do combustível por litro'} 
                    TextSubtitle={'Esse valor será utilizado para calcular o custo dos seus trajetos'}
                    InputPlaceHolder={'Custo do litro'}
                    //onChangeText={(value) => {handleChange(value, 'login')}} 
                    value={loginInfo.login}
                    secureTextEntry={true}
                />
            </View>
            <View>
              <TextPrivacy/>
              <ButtonPrimaryDefault title={'Finalizar cadastro'} style={{marginBottom: 30}} onPress={() => navigation.dispatch(
                CommonActions.reset({
                  index: 1,
                  routes: [{
                    name: 'HomeRoutes',
                    params: {'isRegister': true}
                  }],
                })
              )}/>
            </View>
        </View>
      </PaddingContent>
    </SafeAreaViewDefault>
  );
}