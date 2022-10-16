import { ActivityIndicator } from "react-native-paper";
import * as Constants from '../../constants/utils/Constants';

export default function Loading ({...props}){
    return (
        <ActivityIndicator animating={true} color={Constants.colors.primary[600]} {...props} />
    )
}