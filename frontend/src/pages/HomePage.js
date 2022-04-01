import React, {Fragment} from 'react';
import Master from "../components/layouts/Master";
import Student from "../components/Student";


const HomePage = () => {
    return (
        <Fragment>
            <Master>
                <Student/>
            </Master>
        </Fragment>
    );
};

export default HomePage;