import styled from 'styled-components/native';
import * as Constants from "../../constants/utils/Constants";
import { Dimensions, View } from 'react-native';
import ImageWrapper from '../utils/ImageWrapper.component';
import ArrowRight from '../../../assets/Button/arrow-right.png'
import BottomLine from '../utils/BottomLine.component';

const TouchableListItemStyle = styled.TouchableOpacity`
    padding: 16px 0;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`

const Title = styled.Text`
    font-family: ${Constants.fontConfig.H3.Medium.FontFamily};
    font-size: ${Constants.fontConfig.H3.Medium.FontSize};
    color: ${Constants.colors.gray[800]};
    padding-right: 10%;
`

const Subtitle = styled.Text`
    font-family: ${Constants.fontConfig.Body.Regular.FontFamily};
    font-size: ${Constants.fontConfig.Body.Regular.FontSize};
    color: ${Constants.colors.gray[700]};
`

export default function TouchableListItem({titleText, subtitleText, ...props}){
    const windowWidth = Dimensions.get('window').width;
    const windowHeight = Dimensions.get('window').height;
    return (
        <>
            <TouchableListItemStyle {...props}>
                <View style={{maxWidth: '90%'}}>
                    <Title>{titleText}</Title>
                    <Subtitle>{subtitleText}km</Subtitle>
                </View>
                <ImageWrapper source={ArrowRight} width={'24px'} height={'24px'} />
            </TouchableListItemStyle>
            <BottomLine/>
        </>
    )
};