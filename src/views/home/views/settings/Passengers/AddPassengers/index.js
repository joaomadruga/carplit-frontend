import ButtonPrimaryDefault from "../../../../../../components/utils/ButtonPrimaryDefault.component";
import InputWithTitleSubtitle from "../../../../../../components/utils/InputWithTitleSubtitle.component";
import PaddingContent from "../../../../../../components/utils/PaddingContent.component";
import SafeAreaViewDefault from "../../../../../../components/utils/SafeAreaViewLogin.component";


export default function AddPassenger() {
    return (
        <SafeAreaViewDefault>
            <PaddingContent>
                    <InputWithTitleSubtitle
                    TextTitle={'Nome da pessoa'} 
                    TextSubtitle={'Como você costuma chamar a sua rota (ex: Candeias - UFPE via Boa Viagem)'}
                    InputPlaceHolder={'Nome do Trajeto'} 
                    />
                    <InputWithTitleSubtitle
                    TextTitle={'Endereço ou ponto de encontro'} 
                    TextSubtitle={'Com essa informação, futuramente, poderemos calcular a distância total com maior precisão'}
                    InputPlaceHolder={'Endereço ou ponto de encontro'} 
                    />
                    <ButtonPrimaryDefault marginTop={40} title={"Adicionar trajeto"} onPress={() => console.log("pressed")} />
            </PaddingContent>
        </SafeAreaViewDefault>
    );
}