import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;

  align-items: center;
  width: 100%;
  background: var(--darkGrey);
  padding: 0 20px;
  min-height: 100px;
`;

export const Content = styled.div`
  display: flex;
  max-width: var(--maxWidth);
  width: 100%;
  margin 0 auto;

  .column{
    display: flex;
    justify-content: center;
    align-items: center;
    background: var(--medGrey);
    border-radius: 20px;
    margin: 0 20px;
    flex: 1;

    :first-child{
      margin-left: 0;
    }
    :last-child{
      margin-right : 0;
    }

  }
  @media(max-width: 768px){
    display: block;
    .column{
      margin: 20px 0px;
    } 
    
  }
`;
