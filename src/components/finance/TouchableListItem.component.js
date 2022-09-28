import styled from 'styled-components/native';
import * as Constants from "../../constants/utils/Constants";
import { Dimensions, View } from 'react-native';
import ImageWrapper from '../utils/ImageWrapper.component';
import ArrowRight from '../../../assets/Button/full-arrow-right.png'
import BottomLine from '../utils/BottomLine.component';

const TouchableListItemStyle = styled.TouchableOpacity`
    padding: 16px 20px;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`

const Title = styled.Text`
    font-family: ${Constants.fontConfig.Body.Bold.FontFamily};
    font-size: ${Constants.fontConfig.Body.Bold.FontSize};
    color: ${Constants.colors.gray[800]};
`

const Subtitle = styled.Text`
    font-family: ${Constants.fontConfig.Sm.Medium.FontFamily};
    font-size: ${Constants.fontConfig.Sm.Medium.FontSize};
    color: ${Constants.colors.gray[700]};
`

export default function TouchableListItem({titleText, subtitleText, ...props}){
    const formatedValue = Constants.formatter.format(subtitleText);
    return (
        <>
            <TouchableListItemStyle {...props}>
                <View>
                    <Title>{titleText}</Title>
                    <Subtitle>Saldo devedor: {formatedValue}</Subtitle>
                </View>
                <ImageWrapper source={ArrowRight} width={'24px'} height={'24px'} />
            </TouchableListItemStyle>
            <BottomLine style={{marginLeft: 0, borderBottomColor: Constants.colors.gray[400]}}/>
        </>
    )
};