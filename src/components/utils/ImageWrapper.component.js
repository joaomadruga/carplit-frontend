import styled from 'styled-components/native';
import * as Constants from "../../constants/utils/Constants";

const ImageWrapperStyle = styled.Image`
    width: ${props => props.width ? `${props.width}` : 'auto'};
    height: ${props => props.height ? `${props.height}` : 'auto'};
    margin-left: ${props => props.marginLeft ? `${props.marginLeft}px` : 0};
    max-width: ${props => props.maxWidth ? `${props.maxWidth}` : 'auto'};
    overflow: hidden;
`;

export default function ImageWrapper({ source, ...props }) {
    return (
        <ImageWrapperStyle source={source} {...props}/>
    );
}