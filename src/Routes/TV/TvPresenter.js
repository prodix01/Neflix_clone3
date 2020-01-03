import React from "react";
import PropTypes from "prop-types";
import Loader from "../../Components/Loader";

const TvPresenter = ({popular, topRate, airingToday, loading, error}) =>
    loading ? (
        <Loader/>
    ) : (
        <h1>tv</h1>
    );

TvPresenter.propTypes = {
    popular: PropTypes.array,
    topRate: PropTypes.array,
    airingToday: PropTypes.array,
    error: PropTypes.string,
    loading: PropTypes.bool.isRequired
};

export default TvPresenter;