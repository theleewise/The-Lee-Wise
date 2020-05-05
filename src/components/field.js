import React, { useState, useEffect } from 'react'
import { UID } from "react-uid"
import styled from 'styled-components'

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

    const { label, required, type } = props;

    return (
      <UID>
        {id => (
          <FieldWrapper floating={hasInput}>
            <label for={`field-${id}`}>
              <span>
                {label} {required ? `*` : ``}
              </span>
              {type === "textarea" ? (
                <textarea
                  name={label}
                  id={`field-${id}`}
                  onFocus={handleFocus}
                  onBlur={handleBlur}
                  rows={5}
                />
              ) : (
                <input
                  type={type}
                  name={label}
                  id={`field-${id}`}
                  onFocus={handleFocus}
                  onBlur={handleBlur}
                />
              )}
            </label>
            <div id={`${id}-required-message`} className="visuallyhidden">
              {label} is required.
            </div>
          </FieldWrapper>
        )}
      </UID>
    )
}

const FieldWrapper = styled.div `
    margin-bottom: 1.5rem;
    padding-top: 2rem;
    position: relative;

    span {
        color: #aaa;
        font-family: 'Oswald';
        font-size: 1.2rem;
        line-height: 1em;
        left: ${props => props.floating ? '0' : '1.5rem'}; 
        position: absolute;
        text-transform: uppercase;
        transition: all 0.25s ease-in-out;
        top: ${props => props.floating ? '0' : '3.5rem'}; 
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

export default Field