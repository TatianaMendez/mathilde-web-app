import React from 'react';
import { InputFormProps } from '@/domain/register-form/model/inputForm';

const InputForm: React.FC<InputFormProps> = ({ placeholder, type, value, onChange }) => {
  return (
      <div className="mb-5">
        <input type={type} 
        value={value}
        onChange={onChange} 
        className="w-full p-2 border rounded" 
        placeholder={placeholder} 
        required />
      </div>
  );
};

export default InputForm;
