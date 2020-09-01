import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  svg {
    width: 300px;
    height: 300px;

    margin-top: 40px;

    color: ${props => props.theme.colors.primary};
  }

  h1{
    font-size: 54px;
    color: ${props => props.theme.colors.text};
    margin-top: 10px;
  }

  p{
    margin-top: 24px;
    flex: 1;
    color: ${props => props.theme.colors.text};
  }
`;

export const Button = styled.button`
  background: ${props => props.theme.colors.background};
  color: ${props => props.theme.colors.primary};
  border: 0;

  transition: 0.2s;

  svg {
    width: 100px;
    height: 100px;

    margin-bottom: 40px;
  }

  :hover{
    opacity: 0.2;
  }
`;
