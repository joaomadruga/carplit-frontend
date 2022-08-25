import { useContext } from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import ConsumeFuelView from '../../../components/settings/ConsumeFuel/ConsumeFuelView.components';
import PaddingContent from '../../../components/utils/PaddingContent.component';
import Input from '../../../components/utils//Input.component';
import * as Constants from '../../../constants/utils/Constants';

export default function ConsumeFuel() {
    return (
        <SafeAreaView>
            <PaddingContent>
                    <ConsumeFuelView TextTitle={'Consumo médio do seu carro (km/L)'} TextSubtitle={'Esse valor será utilizado para calcular os litros de combustível gastos nos trajetos'}/>
                    <Input placeholder="Consumo (km/L)" marginBottom={24} color={Constants.inputConfig.Consume.color}/>
                    <ConsumeFuelView TextTitle={'Custo do combustível por litro'} TextSubtitle={'Esse valor será utilizado para calcular o custo dos seus trajetos'}/>
                    <Input placeholder="Custo do litro" color={Constants.inputConfig.Consume.color}/>
            </PaddingContent>
        </SafeAreaView>
    );
}