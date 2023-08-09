import React, { useState } from "react";
import CheckBox from "../components/CheckBox";

const Check = () => {
  const [checked, setChecked] = useState(false);
  const onChange = (e) => {
    setChecked(e.target.checked);
  };

  return (
    <div>
      <CheckBox onChange={onChange} checked={checked}>
        다음 약관에 모두 동의
      </CheckBox>
      <p>
        <b>check: {checked ? "true" : "false"}</b>
      </p>
    </div>
  );
};

export default Check;
