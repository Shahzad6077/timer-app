
import React from 'react';




type Props = {
    classes?: string;
    name?: string;
    style?: any
}
const Button: React.FC<Props> = ({ classes, name, style }) => {
    return (
        <button className={`btn ${classes}`} style={style}>
            {name}
        </button>
    );
}
Button.defaultProps = {
    classes: "",
    style: {}
}

export default Button;
