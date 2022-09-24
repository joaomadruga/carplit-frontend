import styled from 'styled-components/native';
import * as Constants from "../../constants/utils/Constants";
import BottomLine from '../utils/BottomLine.component';
import MoreDots from "../../../assets/Settings/more-icon.png";
import { TouchableWithoutFeedback, View } from 'react-native';
import ImageWrapper from '../utils/ImageWrapper.component';

const TouchableListItemStyle = styled.TouchableOpacity`
    padding-top: 16px;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`

const Title = styled.Text`
    font-family: ${Constants.fontConfig.Body.Medium.FontFamily};
    font-size: ${Constants.fontConfig.Body.Medium.FontSize};
    color: ${Constants.colors.gray[800]};
`

const Subtitle = styled.Text`
    font-family: ${Constants.fontConfig.Sm.Regular.FontFamily};
    font-size: ${Constants.fontConfig.Sm.Regular.FontSize};
    color: ${Constants.colors.gray[700]};
    margin-top: 4px;
`

export default function TouchableListItem({pathTitle, index, pathDistance, open, setCurrentItemIndex, ...props}){
    return (
        <>
            <TouchableListItemStyle {...props}>
                <View>
                    <Title>{pathTitle}</Title>
                    <Subtitle>{pathDistance}km</Subtitle>
                </View>
                    <TouchableWithoutFeedback onPress={() => {setCurrentItemIndex(index), open() }}>
                            <ImageWrapper style={{cursor: 'pointer'}} width={'24px'} height={'24px'} source={MoreDots} />
                    </TouchableWithoutFeedback>
            </TouchableListItemStyle>
            <BottomLine marginTop={16} />
        </>
    )
};