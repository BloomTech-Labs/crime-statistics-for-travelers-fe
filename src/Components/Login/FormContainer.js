import React from 'react'
import styled from 'styled-components';
import './Form.css'

const PageContainer = styled.div`
  display: flex;
`;

const Left = styled.div`
  display: flex;
  flex-direction: column;
  width: 30%;
  height: 100%;
  background-color: #hhh;
`;

const Right = styled.div`
  width: 69%;
  height: 100%; 
`;


const FormContainer = () => {
  return (
    <PageContainer>
      <Left>Left</Left>
      <Right>Right</Right>
    </PageContainer>
  )
}

export default FormContainer