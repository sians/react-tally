import React, { useCallback } from 'react'
import styled from 'styled-components';


const TextField = ({value, type, placeholder, styleType, colors, onChange}) => {
    const FieldStyles = styled.textarea`
        color: ${colors.primary};
        background: ${colors.highlight};
        box-shadow: 0px 0px 15px -8px ${colors.primary};
        height: 30px;
        font-family: 'PT Mono';
        `;

    const moveFocus= (e) => {
        const temp_value = e.target.value
        e.target.value = ''
        e.target.value = temp_value
    }
    
    return (
        <div>
            <FieldStyles
                    type={type}
                    placeholder={placeholder}
                    value={value}
                    className={styleType}
                    onChange={onChange}
                    ref={input => input && input.focus()}
                    onFocus={moveFocus}
            />
        </div>
    )
}

export default TextField;