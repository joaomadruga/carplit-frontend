import styled from 'styled-components/native';
import * as Constants from "../../constants/utils/Constants";

const ImageWrapperStyle = styled.Image`
    width: ${props => props.width ? `${props.width}px` : 'auto'};
    height: ${props => props.height ? `${props.height}px` : 'auto'};
`;

export default function ImageWrapper({ source, ...props }) {
    return (
        <ImageWrapperStyle source={source} {...props}/>
    );
}