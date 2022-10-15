import { useContext, useEffect, useState } from "react";
import { ScrollView } from "react-native";
import PriceFuelInput from "../../../../../components/settings/ConsumeFuel/PriceFuelInput.component";
import ConsumeFuelInput from "../../../../../components/settings/ConsumeFuel/ConsumeFuelInput.component";
import ButtonPrimaryDefault from "../../../../../components/utils/ButtonPrimaryDefault.component";
import InputWithTitleSubtitle from "../../../../../components/utils/InputWithTitleSubtitle.component";
import PaddingContent from "../../../../../components/utils/PaddingContent.component";
import SafeAreaViewDefault from "../../../../../components/utils/SafeAreaViewLogin.component";
import * as Constants from "../../../../../constants/utils/Constants"
import * as Store from "../../../../../redux/store/store";
import { updateConsumeAndFuel } from "../../../../../helper/consumeandfuel/utils";
import NotificationPopup from "../../../../../components/utils/NotificationPopup.component";

export default function ConsumeFuel({ navigation }) {
    const { loginInfo, setLoginInfo } = useContext(Store.LoginContext);
    const [isDisabled, setIsDisabled] = useState(false);
    const [showPopup, setShowPopup] = useState(false);
    const [fixedConsumeFuel, setFixedConsumeFuel] = useState(loginInfo.averageConsumption.toFixed(2));
    const [fixedPriceFuel, setFixedPriceFuel] = useState(`R$ ${loginInfo.fuelPerLiter}`);

    const handleChange = async (value, type) => {
        setLoginInfo(prev => ({...prev, [type]: value}));
    };
    const onSubmit = async () => {
        setIsDisabled(true);
        const averageConsumption = parseFloat(fixedConsumeFuel.replace(',', '.'));
        const fuelPerLiter = parseFloat(fixedPriceFuel.replace('R$', '').replace(',', '.'));
        if (averageConsumption !== 0 && fuelPerLiter !== 0) {
            const updateObj = {
                "average_consumption": averageConsumption,
                "fuel_per_liter": fuelPerLiter
            };
            const responseAddPath = await updateConsumeAndFuel(loginInfo.authToken, updateObj)
            .then(response => {
                handleChange(averageConsumption, "averageConsumption");
                handleChange(fuelPerLiter, "fuelPerLiter");
                navigation.goBack();
            })
            .catch((error) => {
                console.log(error);
                setShowPopup(true);
            });
        } else {
            setShowPopup(true);
        }
        setIsDisabled(false);
    }
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
                        disabled={isDisabled}
                        onPress={() => { onSubmit() }} 
                    />
                    { showPopup && <NotificationPopup title={"Valores informados inválidos."} setShowPopup={setShowPopup} bottom={'-100px'}/> }
            </PaddingContent>
        </SafeAreaViewDefault>
        </ScrollView>
    );
}