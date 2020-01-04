import React, {Component} from 'react';
import PropTypes from "prop-types";
import Loader from "../../Components/Loader";
import Poster from "../../Components/Poster";
import Section from "../../Components/Section";



class SearchPresenter extends Component {
    render() {

        //상태값
        let {
            movieResults,
            tvResults,
            error,
            loading,
            searchTerm,
            handleSubmit,
            updateTerm
        } = this.props;

        return (
            <div>
                <form onSubmit={handleSubmit}>
                    <input
                        placeholder="영화 또는 TV프로그램을 검색하고 있습니다..."
                        value={searchTerm}
                        onChange={updateTerm}
                    />
                </form>
                {
                    loading ? (
                        <Loader/>
                    ) : (
                        <>
                            {movieResults && movieResults.length > 0 && (
                                <Section title="영화 검색결과">
                                    {movieResults.map(movie =>
                                        <Poster
                                            id={movie.id}
                                            title={movie.title}
                                            rating={movie.vote_average}
                                            year={movie.release_date}
                                            imageUrl={movie.poster_path}
                                        />
                                    )}
                                </Section>
                            )}
                            {tvResults && tvResults.length > 0 && (
                                <Section title="TV 프로그램 검색 결과">
                                    {tvResults.map(tv =>
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
                        </>
                    )
                }
            </div>
        );
    }
}


SearchPresenter.propTypes = {
    movieResults: PropTypes.array,
    tvResults: PropTypes.array,
    error: PropTypes.string,
    loading: PropTypes.bool.isRequired,
    searchTerm: PropTypes.string,
    handleSubmit: PropTypes.func.isRequired,
    updateTerm: PropTypes.func.isRequired
};

export default SearchPresenter;