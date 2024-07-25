import React from "react";
import SearchForm from "./Components/SearchForm";
import SimpleData from "./SimpleData";

const Content = ({app}) => {
    return (
        <div className="app-content">
            <SearchForm app={app}/>     
            <SimpleData app={app}/>   
        </div>
    )
}

export default Content;