import styled from "styled-components";

export const Validation = styled.div`
 display: flex;
 flex-direction : column;
 p{
  color: red;
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
 }
`
export const Control = styled.input`
  border-radius: 0.375rem;
  border: 1px solid ${props => props.variant == 'error' ? 'red' : '#8692A6'};
  height: 4rem;
  width : 100%;
  padding : 1.44rem 1.88rem;
  color : var(--gray-color);
  &::placeholder{
  color:  #8692A6;
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  }
  margin-bottom: 0.44rem;
  &:focus{
    box-shadow: 0 0 3px 1px #2f7ded;
  }

`
export const Group = styled.div`
 width : 100%;
 display :flex;
 flex-direction : column ;
 position : relative;
`
export const StyledForm = styled.form`
  display : flex ;
  width: 26.625rem;
  flex-direction : column;
  gap : 0.87rem;

`
export const ControlIcon = styled.div`
  position : absolute;
  top : 14rem ;
  right : 1.38rem;
  width: 1.875rem;
  height: 1.5rem; 
  svg{
    width : 100%;
    height : 100%
  }
`