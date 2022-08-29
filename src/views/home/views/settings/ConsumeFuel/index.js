import InputWithTitleSubtitle from "../../../../../components/utils/InputWithTitleSubtitle.component";
import PaddingContent from "../../../../../components/utils/PaddingContent.component";
import SafeAreaViewDefault from "../../../../../components/utils/SafeAreaViewLogin.component";


export default function ConsumeFuel() {
    return (
        <SafeAreaViewDefault>
            <PaddingContent>
                    <InputWithTitleSubtitle
                    TextTitle={'Consumo médio do seu carro (km/L)'} 
                    TextSubtitle={'Esse valor será utilizado para calcular os litros de combustível gastos nos trajetos'}
                    InputPlaceHolder={'Consumo (km/L)'} 
                    />
                    <InputWithTitleSubtitle
                    TextTitle={'Custo do combustível por litro'} 
                    TextSubtitle={'Esse valor será utilizado para calcular o custo dos seus trajetos'}
                    InputPlaceHolder={'Custo do litro'} 
                    />
            </PaddingContent>
        </SafeAreaViewDefault>
    );
}