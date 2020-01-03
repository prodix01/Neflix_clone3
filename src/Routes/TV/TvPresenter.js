import React from "react";
import PropTypes from "prop-types";

const TvPresenter = ({popular, topRate, airingToday, loading, error}) =>
    <h1>{popular}</h1>;

TvPresenter.propTypes = {
    popular: PropTypes.array,
    topRate: PropTypes.array,
    airingToday: PropTypes.array,
    error: PropTypes.string,
    loading: PropTypes.bool.isRequired
};

export default TvPresenter;