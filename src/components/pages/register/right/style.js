import { styled } from "styled-components";

export const StyledBackBtn = styled.button`
  display: flex;
  gap: 0.56rem;
  align-items: center;
  color: var(--gray-color);
  font-size: 1rem;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  margin-top: 2.44rem;
  margin-left: 3.12rem;
  margin-bottom: 2.25rem;
  cursor: pointer;
  &:hover{
    text-decoration: underline;
  }
`
export const StyledProgress = styled.div`
  width : 100%;
  height: 0.25rem;
  border-radius: 0.25rem;
  background: #C4C4C4;
  position : relative;
  >div{
    border-radius: 0.25rem;
    background: ${props => props.color};
    position : absolute;
    top: 0;
    bottom : 0;
    left : 0;
    width : ${props =>( props.value)+'%'}
  }
`