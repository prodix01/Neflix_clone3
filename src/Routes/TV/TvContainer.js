import React, {Component} from 'react';
import TvPresenter from "./TvPresenter";
import {tvApi} from "../../Api";

class TvContainer extends Component {
    // 상태값
    state = {
        popular: null,
        topRate: null,
        airingToday: null,
        error: null,
        loading: true
    };

    //라이프사이클
    async componentDidMount() {
        try {
            const {
                data: { results : popular }
            } = await tvApi.popular();

            const {
                data: { results: topRate}
            } = await tvApi.topRate();

            const {
                data: { results: airingToday}
            } = await tvApi.airingToday();

            this.setState({
                popular,
                topRate,
                airingToday
            })
        }
        catch {
            this.setState({
                error: "TV프로그램 정보를 찾을 수 없습니다."
            })
        }
        finally {
            this.setState({
                loading: false
            });
        }
    }

    render() {

        const {popular, topRate, airingToday, loading, error} = this.state;

        console.log(popular);

        return (
            <TvPresenter
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