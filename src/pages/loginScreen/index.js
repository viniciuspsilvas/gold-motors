import React from 'react';
import Login from '@bit/smart-solution-4u.ss4u-components.form.login';
import DoubleColumn from '@bit/smart-solution-4u.ss4u-components.layout.double-column';

import { useTheme } from '@material-ui/core/styles';



const LoginScreen = () => {

    const theme = useTheme();

    console.log("theme Atual =>", theme)

    return (
        <DoubleColumn>
            <Login></Login>
        </DoubleColumn>
    );
}

export default LoginScreen;