import { useState } from "react";
import { ScrollView } from "react-native";
import PriceFuelInput from "../../../../../components/settings/ConsumeFuel/PriceFuelInput.component";
import ConsumeFuelInput from "../../../../../components/settings/ConsumeFuel/ConsumeFuelInput.component";
import ButtonPrimaryDefault from "../../../../../components/utils/ButtonPrimaryDefault.component";
import InputWithTitleSubtitle from "../../../../../components/utils/InputWithTitleSubtitle.component";
import PaddingContent from "../../../../../components/utils/PaddingContent.component";
import SafeAreaViewDefault from "../../../../../components/utils/SafeAreaViewLogin.component";
import * as Constants from "../../../../../constants/utils/Constants"

export default function ConsumeFuel() {
    const [fixedPriceFuel, setFixedPriceFuel] = useState("R$ 0,00 / litro")
    const [fixedConsumeFuel, setFixedConsumeFuel] = useState("0,00 km/L")
    return (
        <ScrollView style={{backgroundColor: Constants.colors.gray[0]}}>
        <SafeAreaViewDefault>
            <PaddingContent>
                    <ConsumeFuelInput
                    TextTitle={'Consumo médio do seu carro (km/L)'} 
                    TextSubtitle={'Esse valor será utilizado para calcular os litros de combustível gastos nos trajetos'}
                    fixedPriceState={{fixedConsumeFuel, setFixedConsumeFuel}} 
                    />
                    <PriceFuelInput
                    TextTitle={'Custo do combustível por litro'} 
                    TextSubtitle={'Esse valor será utilizado para calcular o custo dos seus trajetos'}
                    fixedPriceState={{fixedPriceFuel, setFixedPriceFuel}}
                    />
                    <ButtonPrimaryDefault marginTop={40} title={"Salvar alterações"} onPress={() => console.log("pressed")} />
            </PaddingContent>
        </SafeAreaViewDefault>
        </ScrollView>
    );
}