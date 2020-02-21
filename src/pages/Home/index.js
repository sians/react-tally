import React from "react";
import Panel from "../../components/Panel";

const Home = () => {
    return (
        <div className="display-container">
            <Panel category="today"/>
            <Panel category="soon" />
        </div>
    )
}

export default Home;