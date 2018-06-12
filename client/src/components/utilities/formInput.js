import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { FlexCenter } from '../page_layout/FlexLayout.js';

const InputContainer = FlexCenter.extend`
  height: 72px;
  width: 100%;
`;
const Input = styled.input`
  height: 32px;
  padding: 6px 12px;
  width: 360px;
  background-color: #fff;
  border: 1px solid #e5e5e5;
  border-radius: 2px;
  font-size: 14px;
`;

const renderInput = (changeCb, inputName, inputValue, isRequired, type, placeholder) => {
  return <Input
          value={inputValue}
          onChange={(event) => changeCb(event)}
          name={inputName}
          required={isRequired}
          type={type}
          placeholder={placeholder}
         />
}

export const FormInput = ({
  changeCb,
  inputName,
  inputValue,
  isRequired,
  type,
  placeholder,
}) => (
  <InputContainer>
    { renderInput(changeCb, inputName, inputValue, isRequired, type, placeholder) }
  </InputContainer>
);

FormInput.propTypes = {
  changeCb: PropTypes.func.isRequired,
  inputName: PropTypes.string,
  inputValue: PropTypes.string,
  isRequired: PropTypes.bool,
  type: PropTypes.string,
  placeholder: PropTypes.string,
};
