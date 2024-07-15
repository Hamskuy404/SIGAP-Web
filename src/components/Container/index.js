import { styled } from "styled-components"

const ContainerCovid = styled.div`
    margin:0 auto;
    padding:1rem;
`

function Container(props){
    return <ContainerCovid>{props.children}</ContainerCovid>
}

export default Container