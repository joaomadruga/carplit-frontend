import { useContext, useState } from "react";
import { ScrollView } from "react-native";
import PriceFuelInput from "../../../../../components/settings/ConsumeFuel/PriceFuelInput.component";
import ConsumeFuelInput from "../../../../../components/settings/ConsumeFuel/ConsumeFuelInput.component";
import ButtonPrimaryDefault from "../../../../../components/utils/ButtonPrimaryDefault.component";
import InputWithTitleSubtitle from "../../../../../components/utils/InputWithTitleSubtitle.component";
import PaddingContent from "../../../../../components/utils/PaddingContent.component";
import SafeAreaViewDefault from "../../../../../components/utils/SafeAreaViewLogin.component";
import * as Constants from "../../../../../constants/utils/Constants"
import * as Store from "../../../../../redux/store/store";

export default function ConsumeFuel({ navigation }) {
    const { setConsumeAndFuel } = useContext(Store.HomeContext);
    const [fixedPriceFuel, setFixedPriceFuel] = useState("R$ 0,00");
    const [fixedConsumeFuel, setFixedConsumeFuel] = useState("0,00");
    return (
        <ScrollView style={{backgroundColor: Constants.colors.gray[0]}}>
        <SafeAreaViewDefault>
            <PaddingContent>
                    <ConsumeFuelInput
                    TextTitle={'Consumo médio do seu carro (km/L)'} 
                    TextSubtitle={'Esse valor será utilizado para calcular os litros de combustível gastos nos trajetos'}
                    fixedPriceState={{fixedState: fixedConsumeFuel, setFixedState: setFixedConsumeFuel}} 
                    />
                    <PriceFuelInput
                    TextTitle={'Custo do combustível por litro'} 
                    TextSubtitle={'Esse valor será utilizado para calcular o custo dos seus trajetos'}
                    fixedPriceState={{fixedState: fixedPriceFuel, setFixedState: setFixedPriceFuel}}
                    />
                    <ButtonPrimaryDefault 
                        marginTop={40} 
                        title={"Salvar alterações"} 
                        onPress={() => { 
                            setConsumeAndFuel({
                                priceFuel: parseFloat(fixedPriceFuel.replace('R$', '').trim().replace(',', '.')), 
                                consumeFuel: parseFloat(fixedConsumeFuel.replace(',', '.'))
                            });
                            navigation.goBack();
                        }} 
                    />
            </PaddingContent>
        </SafeAreaViewDefault>
        </ScrollView>
    );
}