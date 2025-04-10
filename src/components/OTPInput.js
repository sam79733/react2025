function OTPInput({ arr }) {
  const handleOnChange = (e, i) => {
    const value = e.target.value;
    if (isNaN(value)) return;
  };

  return <input className="otp-input" type="text" onInput={handleOnChange} />;
}

export default OTPInput;
