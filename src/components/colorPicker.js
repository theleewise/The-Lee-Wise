import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.ul`
    margin: 0;
    padding: 0;
    background-color: #fff;
    bottom: 4rem;
    box-shadow: 3px 3px 5px rgba(0,0,0,0.1);
    display: flex;
    left: 4rem;
    padding: 1rem;
    position: fixed;
    z-index: 99;

    li {
        margin: 0;
        list-style: none;
    }
    button {
        background: transparent;
        border: none;
        display: block;
        cursor: pointer;
        height: 3rem;
        width: 3rem;
    }
    span {
        position: absolute !important;
        height: 1px; 
        width: 1px;
        overflow: hidden;
        clip: rect(1px 1px 1px 1px); /* IE6, IE7 */
        clip: rect(1px, 1px, 1px, 1px);
        white-space: nowrap;
    }
`

const Color = styled.li`
    background-color: ${props => props.color};
`

function blah(color){
    document.body.style.setProperty('--primary-color', `${color}`);
}

const colorOptions = [
    {name: `Orange`, hex: '#ff8924' },
    {name: `Red`, hex: '#d61d2f' },
    {name: `Green`, hex: '#42ad5e' },
    {name: `Blue`, hex: '#25a4ff' },
]
const ColorPicker = () => {
    return (
        <Wrapper>
            {colorOptions.map(color => (
                <Color key={color.name} color={color.hex}>
                    <button onClick={ () => blah(color.hex) }>
                        <span>{color.name}</span>
                    </button>
                </Color>
            ))}
        </Wrapper>
    )
}

export default ColorPicker;