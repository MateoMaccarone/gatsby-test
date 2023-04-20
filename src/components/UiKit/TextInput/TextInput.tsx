import React from "react";
import { Form } from "react-bootstrap";
import styled from "styled-components";

import TextInputErrorImage from "./../../../images/text-input-error.svg";

interface TextInputProps {
  label?: string;
  value?: string;
  error?: string;
  onChange: React.ChangeEventHandler<FormControlElement>;
  placeholder?: string;
  textMuted?: string;
}

const Wrapper = styled.div`
  & .label {
    font-family: "Space Grotesk";
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 18px;
    /* identical to box height */

    text-transform: uppercase;

    color: #000000;
    margin-bottom: 0;
  }

  & .text-input {
    background: #ffffff;
    border: 0;
    border-bottom: 1px solid #9ba9a7;
    border-radius: 0;

    font-family: "Archivo";
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 15px;
    padding: 14px 0;
    color: #63716e;

    &:hover {
      border-bottom: 1px solid #63716e;

      &::placeholder {
        color: #63716e;
      }
    }

    &::placeholder {
      color: #9ba9a7;
    }

    &:focus {
      border: 0;
      box-shadow: none;
      border-bottom: 1px solid #00e7c9;
      color: #000;
    }
  }
`;

const Error = styled.span`
  color: #ef5938;
`;

const ErrorDetail = styled.span`
  color: #ef5938;
  font-size: 10px;
  text-transform: none;
  margin-left: 4px;
`;

const ErrorImage = styled.img`
  margin-left: 8px;
`;

const TextInput: React.FC<TextInputProps> = (props) => {
  return (
    <Wrapper>
      <Form.Group className="mb-3">
        <Form.Label className="label d-flex align-items-center">
          {props.error ? (
            <Error className="d-flex align-items-center g-3">
              {props.label}
              <ErrorImage src={TextInputErrorImage} />
              <ErrorDetail>{props.error}</ErrorDetail>
            </Error>
          ) : (
            props.label
          )}
        </Form.Label>
        <Form.Control
          className="text-input"
          type="text"
          placeholder={props.placeholder}
          value={props.value}
          onChange={props.onChange}
        />
        {props.textMuted && (
          <Form.Text className="text-muted">{props.textMuted}</Form.Text>
        )}
      </Form.Group>
    </Wrapper>
  );
};

export default TextInput;
