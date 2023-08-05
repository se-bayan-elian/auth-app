import React from "react";
import BackBtn from "./BackBtn";
import SecHeader from "../../../components/SecHeader";
import Container from "../../../components/Container";
import FromContainer from "./FromContainer";
import HrOr from "../../../components/HrOr";
import Button from "../../../components/Button";
const Right = ({ setPage }) => {
  return (
    <div className="right-side" style={{ width: "55.5%", overflowY: "auto" }}>
      <BackBtn setPage={setPage}></BackBtn>
      <Container variant={"sm"}>
        <SecHeader
          heading1={"Register Individual Account!"}
          heading2={
            "For the purpose of gamers regulation, your details are required."
          }
          size="md"
          style={{ marginBottom: "1.75rem" }}
        ></SecHeader>
        <FromContainer></FromContainer>
        <HrOr></HrOr>
        <Button type='button' variant={'secondary'} handleClick={()=> setPage('login')}>login</Button>
      </Container>
    </div>
  );
};

export default Right;
