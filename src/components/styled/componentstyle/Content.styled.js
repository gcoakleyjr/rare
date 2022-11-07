import styled from 'styled-components';


export const Img = styled.img`
    width: 100%;
    object-fit: cover;
    transition: 0.5s;
`;

export const ImgWrapper = styled.div`
    width: 180px;
    height: 180px;
    border-radius: 16px;
    overflow: hidden;
    box-shadow: ${props => props.theme.boxShadow.light};
    transition: 0.5s;
    cursor: pointer;

    &:hover {
        box-shadow: ${props => props.theme.boxShadow.medium};
    }

    &:hover img {
        transform: scale(1.05);
    }
`;

