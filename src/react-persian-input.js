import "./style.css";
import { useState } from "react";
import PropTypes from "prop-types";
import React from "react";
const FaInput = ({
  label,
  width,
  rtl,
  borderStyle,
  inputStyle,
  labelStyle,
  value,
  onInputChange,
  validationError,
  borderOnFocusStyle,
  borderErrorStyle,
  labelOnFocusStyle,
  moveLabelTop,
  moveLabelRight,
  scaleLabel,
}) => {
  const [onFocusStyleBorder, setOnFocusStyleBorder] = useState({});
  const [onFocusStyleLabel, setOnFocusStyleLabel] = useState({});
  //const borderEl = useRef("borderEl");
  //const heigthEl = borderEl.current.clientHeight;
  //console.log(heigthEl);
  const onClickInputHanlder = () => {
    setOnFocusStyleBorder({ borderColor: "blueviolet", ...borderOnFocusStyle });
    setOnFocusStyleLabel({
      transform: `translateY(-${moveLabelTop}) translateX(${moveLabelRight}) scale(${scaleLabel})`,
      ...labelOnFocusStyle,
    });
    /*setOnFocusStyleLabel({
      transform: `translateY(-${
        (heigthEl * 1) / 2
      }px) translateX(15px) scale(0.92)`,
      ...labelOnFocusStyle,
    });*/
  };
  const onBlurInputHandler = () => {
    setOnFocusStyleBorder("");
    !value && setOnFocusStyleLabel("");
  };
  let borderStyles;
  if (validationError) {
    borderStyles = { borderColor: "#f32013", ...borderErrorStyle };
  } else {
    borderStyles = onFocusStyleBorder;
  }

  return (
    <div
      className="input_wrapper-persian-input"
      onBlur={onBlurInputHandler}
      onFocus={onClickInputHanlder}
      style={{ width: width }}
    >
      <div
        style={{ ...borderStyles, ...borderStyle }}
        className={`border-persian-input`}
      >
        <input
          className="input-persian-input"
          style={{ ...inputStyle, direction: rtl && "rtl" }}
          value={value}
          onChange={onInputChange}
        />
        <label
          className="label-persian-input"
          style={{ ...labelStyle, ...onFocusStyleLabel }}
        >
          {label}
        </label>
      </div>
      <div className="error-log-persina-input">{validationError} </div>
    </div>
  );
};

FaInput.defaultProps = {
  moveLabelTop: "22px",
  moveLabelRight: "10px",
  scaleLabel: ".94",
};
FaInput.propTypes = {
  label: PropTypes.string.isRequired,
  width: PropTypes.string,
  rtl: PropTypes.bool,
  borderStyle: PropTypes.object,
  inputStyle: PropTypes.object,
  labelStyle: PropTypes.object,
  value: PropTypes.string.isRequired,
  onInputChange: PropTypes.func.isRequired,
  validationError: PropTypes.string,
  borderOnFocusStyle: PropTypes.object,
  borderErrorStyle: PropTypes.object,
  labelOnFocusStyle: PropTypes.object,
  moveLabelTop: PropTypes.string,
  moveLabelRight: PropTypes.string,
  scaleLabel: PropTypes.string.isRequired,
};
export default FaInput;
