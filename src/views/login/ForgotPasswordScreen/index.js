import { useContext, useState } from "react";
import ButtonPrimaryDefault from "../../../components/utils/ButtonPrimaryDefault.component";
import InputWithTitleSubtitle from "../../../components/utils/InputWithTitleSubtitle.component";
import PaddingContent from "../../../components/utils/PaddingContent.component";
import SafeAreaViewDefault from "../../../components/utils/SafeAreaViewLogin.component";
import * as Store from "../../../redux/store/store";


export default function ForgotPasswordScreen( { navigation } ) {
  const [showPopup, setShowPopup] = useState(false);
  const [isDisabled, setIsDisabled] = useState(false);
  const { loginInfo, setLoginInfo } = useContext(Store.LoginContext);
  return (
    <SafeAreaViewDefault>
      <PaddingContent style={{marginTop: 8}}>
            <InputWithTitleSubtitle
                TextTitle={'Insira seu email cadastrado'} 
                TextSubtitle={'Vamos enviar um email com o link para redefinição de senha.'}
                InputPlaceHolder={'Email'}
                //onChangeText={(value) => {handleChange(value, 'login')}} 
                //value={loginInfo.login}
            />
            <ButtonPrimaryDefault title={'Enviar email de redefinição'} style={{marginTop: 8}} onPress={() => {console.log('pressed')}}/>
      </PaddingContent>
        
    </SafeAreaViewDefault>
  );
}