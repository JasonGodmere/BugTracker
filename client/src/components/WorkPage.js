import * as React from "react";

import Navigator from "./navigator/Navigator.js";
import Window from "./window/Window.js";

function WorkPage() {
    return (
        <React.Fragment>
            <Navigator />
            <Window />
        </React.Fragment>
    );
}

export default WorkPage;