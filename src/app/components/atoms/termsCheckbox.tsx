import React, { useState } from 'react';

const TermsCheckbox: React.FC = () => {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <div className="mb-5">
      <label className='checkbox-container'>
        <input
          type="checkbox"
          checked={isChecked}
          onChange={handleCheckboxChange}
          required
        />
        <span className="checkmark"></span>
        Acepto los términos y condiciones de la plataforma y la política de privacidad.
      </label>
    </div>
  );
};

export default TermsCheckbox;
