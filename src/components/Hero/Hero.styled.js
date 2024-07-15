import { styled } from "styled-components";
const HeroCovid = styled.div`

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-bottom: 3rem;
.judul{
    color: #06d6a0;
    text-align: center;
    font-size: 3.052rem;
}

.caption {
    color: #118ab2;
    text-align: center;
    margin-bottom: 1rem;
    font-size: 1.953rem;

}

.description {
    color: gray;
    text-align: center;
    margin-bottom: 1rem;
    font-size: 1rem;
}

.hero_image {
    border-radius: 1rem;
    max-width: 100%;
}

.button {
    background-color: #06d6a0;
    padding: 0.8rem 2rem;
    border-radius: 1rem;
    border: none;
    margin:1rem 9rem 3rem;
    /* display:flex; */
    /* justify-content:center; */
}


@media(min-width: 992px){
        max-width: 1200px;
        flex-direction: row;
        justify-content: space-between;
        margin: 2rem auto ;
    .judul{
        text-align: left;
    }
    .caption{
        text-align: left;
    }
    .description{
        /* width:29px; */
        text-align: left;
    }

    .button{
        margin:0px;
    }

    /* .left {
        flex-basis: 40%;
    }

    .right {
        flex-basis: 60%;
    } */

}
`

export default HeroCovid;