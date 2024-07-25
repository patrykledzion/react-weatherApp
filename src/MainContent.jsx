import React from "react";
import Content from "./Content";

const MainContent = ({app}) => {
    return (
        <div className="main-content">
            <div className="main-background"></div>
            <div className="content">
                <Content app={app}/>
            </div>
        </div>
    )
}

export default MainContent;