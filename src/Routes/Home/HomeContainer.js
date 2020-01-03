import React, {Component} from 'react';
import HomePresenter from "./HomePresenter";
import {moviesApi} from "../../Api";

class HomeContainer extends Component {

    //상태값
    state = {
        nowPlaying: null,
        upComing: null,
        popular: null,
        error: null,
        loading: true
    };

    //라이프사이클
    async componentDidMount() {
        try {
            const {
                data: { results: nowPlaying }
            } = await moviesApi.nowPlaying();

            const {
                data: { results: upComing }
            } = await moviesApi.upComing();

            const {
                data: { results: popular }
            } = await  moviesApi.popular();

            this.setState({
                nowPlaying,
                upComing,
                popular
            });

        }
        catch {
            this.setState({
                error: "영화 정보를 찾을 수 없습니다."
            })
        }
        finally {
            this.setState({
                loading: false
            });
        }
    }

    render() {

        const {nowPlaying, upComing, popular, error, loading} = this.state;

        console.log(nowPlaying);

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