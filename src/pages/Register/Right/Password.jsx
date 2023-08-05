import React, { useState } from "react";
import { StyledProgress } from "./style";
import Form from "../../../components/Form";

const Password = ({ value, setControls, variant }) => {
  const msgs = [
    "very bad",
    "Not bad but you know you can do it better",
    "very Good",
  ];
  const colors = ["red", "#FFC107", "green"];
  const progressValues = [15, 60, 100];
  const checkPassword = () => {
    const PASSWORD_REGEX_1 = /^[A-Za-z0-9]\w{0,6}$/;
    const PASSWORD_REGEX_2 = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}$/;
    const PASSWORD_REGEX_3 =
      /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*]).{8,}$/;
    if (PASSWORD_REGEX_1.test(value)) {
      setDegree(0);
      return false;
    } else if (PASSWORD_REGEX_2.test(value)) {
      setDegree(1);
      return true;
    } else if (PASSWORD_REGEX_3.test(value)) {
      setDegree(2);
      return true;
    }
  };
  const [degree, setDegree] = useState(0);
  return (
    <Form.Group>
      <Form.Label>Create password*</Form.Label>
      <Form.Control
        as="password"
        placeholder={"Password"}
        value={value}
        handleChange={(e) => {
          checkPassword();
          setControls((prev) => {
            return {
              ...prev,
              password: {
                ...prev["password"],
                value: e.target.value,
                isValid: checkPassword(),
              },
            };
          });
          variant = { variant };
        }}
        variant={variant}
      ></Form.Control>
      {value && (
        <Form.Validation msg={msgs[degree]} textColor={colors[degree]}>
          <StyledProgress
            className="progress"
            value={progressValues[degree]}
            $D
            color={colors[degree]}
          >
            <div className="progress-value"></div>
          </StyledProgress>
        </Form.Validation>
      )}
    </Form.Group>
  );
};

export default Password;
