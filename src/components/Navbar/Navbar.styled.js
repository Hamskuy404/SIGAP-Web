import { styled } from "styled-components";

const NavbarCovid = styled.div`
*{
  margin: 0 ;
}

a{
  text-decoration: none;
  color: white;
}

.container{
  background-color: #06d6a0;
  margin-bottom: 1rem;
}

.logo{
  margin-bottom: 1rem;
  color: white;
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


`

export default NavbarCovid;