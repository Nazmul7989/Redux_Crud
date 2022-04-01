import React, {Fragment} from 'react';
import Header from "./Header";

const Master = (props) => {
    return (
        <Fragment>
            <Header/>
            {props.child}
        </Fragment>
    );
};

export default Master;