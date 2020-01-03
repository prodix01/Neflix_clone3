import React, {Component} from 'react';
import TvPresenter from "./TvPresenter";
import HomePresenter from "../Home/HomePresenter";

class TvContainer extends Component {
    // 상태값
    state = {
        popular: null,
        topRate: null,
        airingToday: null,
        error: null,
        loading: true
    };
    render() {

        const {popular, topRate, airingToday, loading, error} = this.state;

        return (
            <HomePresenter
                loading={loading}
                error={error}
                popular={popular}
                topRate={topRate}
                airingToday={airingToday}
            />
        );
    }
}

export default TvContainer;