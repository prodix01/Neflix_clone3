import React from "react";
import PropTypes from "prop-types";
import Loader from "../../Components/Loader";
import Poster from "../../Components/Poster";
import Section from "../../Components/Section";
import styled from "styled-components";


const Container = styled.div`
    padding: 20px;
`;

const TvPresenter = ({popular, topRate, airingToday, loading, error}) =>
    loading ? (
        <Loader/>
    ) : (
        <Container>
            {popular && popular.length > 0 && (
                <Section title="인기 TV프로그램">
                    {popular.map(tv =>
                        <Poster
                            id={tv.id}
                            title={tv.name}
                            rating={tv.vote_average}
                            year={tv.first_air_date}
                            imageUrl={tv.poster_path}
                        />
                    )}
                </Section>
            )}
            {airingToday && airingToday.length > 0 && (
                <Section title="방영중 TV프로그램">
                    {airingToday.map(tv =>
                        <Poster
                            id={tv.id}
                            title={tv.name}
                            rating={tv.vote_average}
                            year={tv.first_air_date}
                            imageUrl={tv.poster_path}
                        />
                    )}
                </Section>
            )}
            {topRate && topRate.length > 0 && (
                <Section title="최고의 TV프로그램">
                    {topRate.map(tv =>
                        <Poster
                            id={tv.id}
                            title={tv.name}
                            rating={tv.vote_average}
                            year={tv.first_air_date}
                            imageUrl={tv.poster_path}
                        />
                    )}
                </Section>
            )}
        </Container>
    );

TvPresenter.propTypes = {
    popular: PropTypes.array,
    topRate: PropTypes.array,
    airingToday: PropTypes.array,
    error: PropTypes.string,
    loading: PropTypes.bool.isRequired
};

export default TvPresenter;