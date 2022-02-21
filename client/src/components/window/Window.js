import * as React from "react";

import Header from "./header/Header.js";
import Content from "./content/Content.js";


function Window() {
    return (
        <React.Fragment>
            <Header />
            <Content />
        </React.Fragment>
    );
}

export default Window;