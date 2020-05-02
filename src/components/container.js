import styled from "styled-components"

const Container = styled.div `
    margin-left: auto;
    margin-right: auto;
    ${props => props.gutter ? 'padding-left: 1.5rem; padding-right: 1.5rem;' : '' }
    max-width: ${props => props.half ? '600px' : '1200px' };
    width: 100%;
`

export default Container