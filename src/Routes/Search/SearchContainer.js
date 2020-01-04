import React, {Component} from 'react';
import SearchPresenter from "./SearchPresenter";
import {moviesApi, tvApi} from "../../Api";


class SearchContainer extends Component {

    //상태값
    state = {
        movieResults: null,
        tvResults: null,
        error: null,
        loading: false,
        searchTerm: ""
    };

    handleSubmit = () => {
        const {searchTerm} = this.state;
        if (searchTerm !== null) {
            this.searchByTerm();
        }
    };

    //Search By Term
    searchByTerm = async () => {
        const {searchTerm} = this.state;

        this.setState({loading: true});

        try {
            const {
                data: { results : movieResults }
            } = await moviesApi.search(searchTerm);

            const {
                data: { results: tvResults }
            } = await tvApi.search(searchTerm);

            this.setState({movieResults, tvResults});
        }
        catch {
            this.setState({
                error: "검색결과를 찾을 수 없습니다."
            });
        }
        finally {
            this.setState({
                loading: false
            });
        }
    };

    updateTerm = event => {
        const {
            target: {value}
        } = event;

        this.setState({
            searchTerm: value
        });
    };

    render() {

        const {
            movieResults,
            tvResults,
            error,
            loading,
            searchTerm
        } = this.state;

        console.log(movieResults);

        return (
            <SearchPresenter
                loading={loading}
                handleSubmit={this.handleSubmit}
                updateTerm={this.updateTerm}
                searchTerm={searchTerm}
                movieResults={movieResults}
                tvResults={tvResults}
                error={error}
            />
        );
    }
}

export default SearchContainer;