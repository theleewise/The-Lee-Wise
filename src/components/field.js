import React, { useState, useEffect } from 'react'
import styled from 'styled-components'

const FieldWrapper = styled.div`
    margin-bottom: 1.5rem;
    padding: 1em;
    position: relative;

    span {
        font-size: 1.2rem;
        line-height: 1em;
        left: 0.5em;
        position: absolute;
        transition: top 0.25s ease-in-out;
        top: ${props => props.floating ? '0' : '1rem'}; 
        z-index: 1;
    }
    input, textarea {
        background: rgba(255,255,255,0.25);
        border: none;
        font-size: 2rem;
        line-height: 1.2em;
        padding: 0.5em 1em;
        width: 100%;
    }
`

const Field = (props) => {
    const [hasInput, setInput] = useState(false);
    const handleFocus = (event) => {
        setInput(true);
    };
    const handleBlur = (event) => {
        if(event.target.value.trim().length > 0){
            setInput(true);
        } else {
            setInput(false);
        }
    }

    return (
        <FieldWrapper floating={hasInput}>
            <label>
                <span>{props.label} { props.required ? `*` : `` }</span>
                <input type={props.type} name={props.label} onFocus={ handleFocus } onBlur={ handleBlur } />
            </label>
        </FieldWrapper>
    )
}

export default Field