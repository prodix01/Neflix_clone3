import React, {Component} from 'react';
import HomePresenter from "./HomePresenter";

class HomeContainer extends Component {

    //상태값
    state = {
        nowPlaying: null,
        upComing: null,
        popular: null,
        error: null,
        loading: true
    };

    render() {

        const {nowPlaying, upComing, popular, error, loading} = this.state;
        return (
            <HomePresenter
                loading={loading}
                error={error}
                nowPlaying={nowPlaying}
                upComing={upComing}
                popular={popular}
            />
        );
    }
}

HomeContainer.propTypes = {};

export default HomeContainer;