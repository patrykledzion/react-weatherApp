import React from "react";

const SearchForm = ({app}) => {

    let lastSearch = Date.now();
    const searchTimeout = 2000;
    let timeout_t = null
    const onInputFinish = (phrase) => {
        app.setState({searchPhrase: phrase})
    }

    const onInputHandle = (e) => {
        const now = Date.now();
        if(timeout_t!=null) {
            clearTimeout(timeout_t);
        }
        timeout_t = setTimeout(() => {
            onInputFinish(e.target.value);
        }, searchTimeout);
        if(now > lastSearch + searchTimeout) {
            onInputFinish(e.target.value);
            lastSearch = Date.now();
        }
    }

    return (
        <div className="search-form">
            <input type="text" onChange={onInputHandle} placeholder="Wpisz nazwę miejscowości..."/>
        </div>
    )
}

export default SearchForm;