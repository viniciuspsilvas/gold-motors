import React from 'react';
import Login from '@bit/smart-solution-4u.ss4u-components.form.login';
import DoubleColumn from '@bit/smart-solution-4u.ss4u-components.layout.double-column';

import logo from '../../../public/assets/img/logo.png'

const { REACT_APP_NAME } = process.env;



const LoginScreen = () => {

    return (
        <DoubleColumn logo={logo}>
            <Login title={REACT_APP_NAME} ></Login>
        </DoubleColumn>
    );
}

export default LoginScreen;