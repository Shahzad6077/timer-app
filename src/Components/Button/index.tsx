
import React, { MouseEvent } from 'react';




type Props = {
    id: string;
    classes?: string;
    name?: string;
    style?: any;

    disabled?: boolean;
    onClick?: (e: MouseEvent) => void
}
const Button: React.FC<Props> = ({ classes, name, style, disabled, onClick }) => {
    return (
        <button className={`btn ${classes}`} style={style} disabled={disabled} onClick={onClick}>
            {name}
        </button>
    );
}
Button.defaultProps = {
    classes: "",
    style: {},
    disabled: false

}

export default Button;
