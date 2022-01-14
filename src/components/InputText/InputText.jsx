import { useState } from "react";
import * as S from "./InputText.style";

const InputText = ({ ...props }) => {
  const [focus, setFocus] = useState(false);

  return (
    <S.FormControl focus={focus}>
      <input
        {...props}
        onFocus={() => setFocus(true)}
        onBlur={() => setFocus(false)}
      />
    </S.FormControl>
  );
};

export default InputText;
