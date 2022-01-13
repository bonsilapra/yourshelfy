import React from 'react';
import './MyButton.css';

const STYLES = ['btn--primary', 'btn--primary-rev', 'btn--outline', 'btn--test', 'btn--dark', 'btn--dark-rev', 'btn--light-rev'];

const SIZES = ['btn--small', 'btn--medium', 'btn--large', 'btn--large-icon', 'btn--small-icon'];

export const MyButton = ({
  children,
  type,
  onClick,
  style,
  title,
  buttonStyle,
  buttonSize,
  p
}) => {
  const checkButtonStyle = STYLES.includes(buttonStyle)
    ? buttonStyle
    : STYLES[0];

  const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0];

  return (
      <button
        className={`btn ${checkButtonStyle} ${checkButtonSize}`}
        onClick={onClick}
        type={type}
        style={style}
        title={title}
      >
        {children}
      </button>
  );
};