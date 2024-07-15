import { styled } from "styled-components";

const IndonesiaCovid = styled.div`
.container{
    text-align: center;
   /* display: flex; */
   /* flex-direction: column; */
   /* align-items: center; */
   margin-top: 5rem;
}

.judul{
    color: #06d6a0;
    font-size: 3.052rem;
    /* margin-top: 40px; */
    text-align: center;

}

h1{
    color:rgb(18, 72, 143);
}

.caption {
    color: #118ab2;
    margin-bottom: 7rem;
    margin-top: -40px;
    font-size: 1.953rem;
    text-align: center;
}

.box_container {
    /* display: flex; */
    /* flex: row; */
    justify-content: center;
    /* margin-top: 40px; */
    
}

.box {
    width:290px;
    height: 300px;
    background-color: beige;
    margin-right: 4rem;
    margin-left: 4rem;
    margin-bottom: 5rem;
    border-radius: 2rem;
    line-height: 10px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}


.box p {
    font-size: 3rem;
}

.box:nth-of-type(1) p {
    color: green;
}

.box:nth-of-type(2) p {
    color: rgb(25, 5, 249);
}

.box:nth-of-type(3) p {
    color: rgb(252, 4, 45);
}

@media(min-width:768px){
    .box_container{

        display: flex;
        flex-wrap: wrap;
        width: 100%;
        /* padding: 1rem; */
    }    


}

@media(min-width:982px){
    /* nothing todo */
}




`;

export default IndonesiaCovid