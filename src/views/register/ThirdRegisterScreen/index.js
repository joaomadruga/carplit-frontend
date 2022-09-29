import { CommonActions } from "@react-navigation/native";
import { useContext, useState } from "react";
import { View } from "react-native";
import { useModalize } from "react-native-modalize";
import CurrentScreenWidget from "../../../components/register/CurrentScreenWidget.component";
import TextPrivacy from "../../../components/register/TextPrivacy.component";
import ConsumeFuelInput from "../../../components/settings/ConsumeFuel/ConsumeFuelInput.component";
import PriceFuelInput from "../../../components/settings/ConsumeFuel/PriceFuelInput.component";
import ButtonPrimaryDefault from "../../../components/utils/ButtonPrimaryDefault.component";
import InputWithTitleSubtitle from "../../../components/utils/InputWithTitleSubtitle.component";
import PaddingContent from "../../../components/utils/PaddingContent.component";
import SafeAreaViewDefault from "../../../components/utils/SafeAreaViewLogin.component";
import * as Store from "../../../redux/store/store";
import * as utils from '../../../helper/utils';
import NotificationPopup from "../../../components/utils/NotificationPopup.component";

export default function ThirdRegisterScreen({ navigation }) {
  const { loginInfo, setLoginInfo } = useContext(Store.LoginContext);
  const [fixedPriceFuel, setFixedPriceFuel] = useState("R$ 0,00");
  const [fixedConsumeFuel, setFixedConsumeFuel] = useState("0,00");
  const [isDisabled, setIsDisabled] = useState(false);
  const [showPopup, setShowPopup] = useState(false);

  const onSubmit = async () => {
    setIsDisabled(true);
    const priceFuel = parseFloat(fixedPriceFuel.replace('R$', '').trim().replace(',', '.'));
    const consumeFuel = parseFloat(fixedConsumeFuel.replace(',', '.'));
    const responseRegister = await utils.getAuthTokenRegister(loginInfo.name, loginInfo.login.toLowerCase().trim(), loginInfo.password, consumeFuel, priceFuel)
    .then(response => {
      setLoginInfo(prev => ({...prev, ["authToken"]: response.data.token}));
      navigation.dispatch(
        CommonActions.reset({
          index: 1,
          routes: [{
            name: 'HomeRoutes',
            params: {'isRegister': true}
          }],
        })
      );
    })
    .catch((error) => {
      console.log(error);
      setShowPopup(true);
    });
    setIsDisabled(false);

  };

  return (
    <SafeAreaViewDefault>
      <PaddingContent>
        <View style={{flexDirection: 'column', justifyContent:'space-between', height: '100%'}}>
            <View>
                <CurrentScreenWidget numberOfFilledWidgets={3} />
                <ConsumeFuelInput
                  TextTitle={'Consumo médio do seu carro (km/L)'} 
                  TextSubtitle={'Esse valor será utilizado para calcular os litros de combustível gastos nos trajetos'}
                  fixedPriceState={{fixedState: fixedConsumeFuel, setFixedState: setFixedConsumeFuel}}   
                  InputPlaceHolder={'Consumo (km/L)'}
                />
                <PriceFuelInput
                    TextTitle={'Custo do combustível por litro'} 
                    TextSubtitle={'Esse valor será utilizado para calcular o custo dos seus trajetos'}
                    fixedPriceState={{fixedState: fixedPriceFuel, setFixedState: setFixedPriceFuel}}
                />
            </View>
            <View>
              <TextPrivacy/>
              <ButtonPrimaryDefault title={'Finalizar cadastro'} style={{marginBottom: 30}} onPress={() => onSubmit()} disabled={isDisabled}/>
            </View>
        </View>
        { showPopup && <NotificationPopup title={"Impossível de criar a conta, tente com outras credenciais.."} setShowPopup={setShowPopup} bottom={'60px'}/> }
      </PaddingContent>
    </SafeAreaViewDefault>
  );
}