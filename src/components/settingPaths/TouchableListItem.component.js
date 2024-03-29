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
    padding-right: 10%;
`

const Subtitle = styled.Text`
    font-family: ${Constants.fontConfig.Sm.Regular.FontFamily};
    font-size: ${Constants.fontConfig.Sm.Regular.FontSize};
    color: ${Constants.colors.gray[700]};
    margin-top: 4px;
`

export default function TouchableListItem({pathTitle, index, pathDistance, open, currentItem, setCurrentItem, currentItemId, ...props}){
    const handleChange = (value, type) => {
        setCurrentItem(prev => ({...prev, [type]: value}))
    }
    return (
        <>
            <TouchableListItemStyle {...props} activeOpacity={1}>
                <View style={{maxWidth: '90%'}}>
                    <Title>{pathTitle}</Title>
                    <Subtitle>{pathDistance}km</Subtitle>
                </View>
                <TouchableWithoutFeedback onPress={() => { handleChange(index, "index"), handleChange(currentItemId, "id"), open() }}>
                        <ImageWrapper style={{cursor: 'pointer'}} width={'24px'} height={'24px'} source={MoreDots} />
                </TouchableWithoutFeedback>
            </TouchableListItemStyle>
            <BottomLine marginTop={16} />
        </>
    )
};