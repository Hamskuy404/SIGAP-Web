import { styled } from "styled-components";

const RegionsCovid = styled.div`
.container{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 5rem;
 }
 
 .judul{
    color: #06d6a0;
    font-size: 3.052rem;
    /* margin-top: 40px; */
    text-align: center;

}

.caption {
    color: #118ab2;
    margin-bottom: 7rem;
    margin-top: -40px;
    font-size: 1.953rem;
    text-align: center;

}

 .box_container {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }

 
 .box {
    /* padding:1rem 0rem 1rem 1rem; */
     width: 290px;
     height: 340px;
     background-color: beige;
     margin-right: 4rem;
     margin-left: 4rem;
     margin-bottom: 5rem;
     border-radius: 2rem;
     /* display: flex; */
     /* flex-direction: column; */
     /* justify-content: center; */
     /* align-items: center; */
 }
 
 .total1{
     font-size: 1.5rem; 
     color: green;
 }
 
 .total2{
     font-size: 1.5rem; 
     color: blue;
 }
 .total3{
     color: red;
     font-size: 1.5rem; 
 }

h1{
    font-size: 1.7rem; 
    color: rgb(18, 72, 143);
    text-align: center;
}

.status{
    color: gray;
}


.subjudul{
    line-height: 15px;
    margin-left: 10px;
    margin-top: -20px;
    /* margin-bottom: 2px; */
    /* margin-top: 20px; */
    /* border:  1px solid black; */
    border: 1px solid transparent;
    /* margin-top: 20px; */
}

.data{
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: -2rem;    
}

.p {
    color:#06d6a0;
    margin: 2px;
}
 

img{
    margin-right: 7px;
}
 
.mask{
    /* margin-left: 142px; */
}
`

export default RegionsCovid;