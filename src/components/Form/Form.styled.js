import { styled } from "styled-components";

const FormCovid = styled.div`

.container {
    margin: 1rem;
}

.forms {
    display: flex;
    flex-direction: column;
    text-align: center;
}

.forms__title {
    
    color: #06d6a0;
    margin-bottom: 2rem;
    font-size: 2.44rem;
}

.forms__left {
    margin-bottom: 1rem;
}

.forms__image {
    max-width: 100%;
    height: auto;
    border-radius: 25px;
}

.form {
    display: flex;
    flex-direction: column;
    justify-content: center;
}

.form__group{
    margin-bottom: 1.5rem;
}

.form__input {
    width: 80%;
    padding: 12px 20px;
    border-radius: 10px;
    border: 2px solid #06d6a0;
}

.form__inputLabel {
    text-align: left;
    color: #64748b;
}

.form__button {
    width: 80%;
    padding: 12px 20px;
    border: none;
    border-radius: 10px;
    background-color: #06d6a0;
    color: #fff;
}

  
  @media (min-width: 992px) {
    .container {
      max-width: 1200px;
      margin: 3rem auto;
    }
  
    .forms {
      margin: 0 1rem;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      text-align: left;
    }
  
    .forms__left {
      flex-basis: 60%;
    }
  
    .forms__right {
      flex-basis: 40%;
    }
  }

  span{
    color: red;
  }
`;

export default FormCovid;