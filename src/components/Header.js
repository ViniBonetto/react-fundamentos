import React, {useContext} from 'react';
import PropTypes from 'prop-types';
import Button from './Button';

import { ThemeContext } from '../context/ThemeContext';
import Title from './Title';

export default function Header(props) {
    const { onToggleTheme } = useContext(ThemeContext);

    return (
        <div>
        <Title>{props.title}</Title>
        {props.children}
        </div>
    );
}

Header.PropsTypes = {
    title: PropTypes.string,
    children: PropTypes.node.isRequired
}

Header.defaultProps = {
    title: 'Componente Header'
}