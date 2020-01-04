import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import {Link} from "react-router-dom";

const Container = styled.div`
`;

const ImgContainer = styled.div`
`;

const Image = styled.div`
`;

const Rating = styled.span`
`;

const Title = styled.span`
`;

const Year = styled.span`
`;

const Poster = ({
    id,
    imageUrl,
    title,
    rating,
    year
}) => (
    <Container>
        <ImgContainer>
            <Image/>
            <Rating>
                <span role="img" aria-label="rating">
                    ⭐️
                </span>
            </Rating>
        </ImgContainer>
        <Title>{title}</Title>
        <Year>{year}</Year>
    </Container>
);

Poster.propTypes = {
    id: PropTypes.number.isRequired,
    imageUrl: PropTypes.string,
    title: PropTypes.string.isRequired,
    rating: PropTypes.number,
    year: PropTypes.string
};

export default Poster;