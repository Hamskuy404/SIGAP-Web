import { styled } from "styled-components";

const FooterCovid = styled.div`
    *{
    margin: 0 ;
  }
  
  .container{
    background-color: #06d6a0;
    margin-bottom: 1rem;
  }

  a{
    text-decoration:none;
    color:white;
  }
  
  .logo{
    margin-bottom: 1rem;
    color:white;
  }
  
  .list {
    list-style-type: none;
  }
  
  .item{
    margin-bottom: 1rem;
  }
  
  @media(min-width: 760px){
    .container {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
    }
  
    .logo{
      margin-top: 1rem;
      margin-left: 1rem;
    }
  
    .list{
      display: flex;
      flex-direction: row;
    }
  
    .item{
      margin: 1rem;
    }
  }
  

`;

export default FooterCovid