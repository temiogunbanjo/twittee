import React from 'react';

const TextInput = (props: any) => {
  // Set defaults values
  let labelStyles = {};
  const type = props.type || 'text';
  const name = props.name || null;
  const id = props.id || null;
  const customPlaceholder = props.placeholder || '';
  const isRequired = props.required ? true : false;
  const pattern = type === 'password' ? props.pattern || null : null;

  // Add a display: none to label styles if label is empty
  if (customPlaceholder === '') labelStyles = { ...labelStyles, display: 'none' };

  return (
    <div className='position-relative custom-input my-3'>
      <input
        id={id}
        type={type}
        className='custom-input'
        name={name}
        placeholder=' '
        pattern={pattern}
        required={isRequired}
      />
      <label htmlFor={`${id}`} className='custom-input-label position-absolute' style={labelStyles}>
        {customPlaceholder}
      </label>
    </div>
  );
};

export default TextInput;
