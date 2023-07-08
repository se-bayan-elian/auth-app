import React from "react";
import {
  Control,
  ControlIcon,
  Group,
  StyledForm,
  Validation,
} from "./style.js";
import Typography from "../typography/Typography.jsx";
import Button from "../Button/Button.jsx";
const Form = ({ children }) => {
  return <StyledForm>{children}</StyledForm>;
};
Form.Validation = ({ msg, children }) => {
  return (
    <Validation className="control-validation">
      {children}
      <p>{msg}</p>
    </Validation>
  );
};
Form.Control = ({ as, value, handleChange ,placeholder}) => {
  return <Control type={as} value={value} onChange={handleChange} placeholder={placeholder} />;
};
Form.Label = ({ children }) => {
  return (
    <Typography as="label">
      {children}
    </Typography>
  );
};
Form.Group = ({ children, icon }) => {
  return (
    <Group className="from-group">
      {children}
      {icon}
    </Group>
  );
};
Form.ControlIcon = ({ svg }) => {
  return <ControlIcon className="control-icon">{svg}</ControlIcon>;
};
Form.Submit = ({ children, handleSubmit }) => {
  return (
    <Button type="submit" variant="primary" handleClick={handleSubmit}>
      {children}
    </Button>
  );
};

export default Form;
