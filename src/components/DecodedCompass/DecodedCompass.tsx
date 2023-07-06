import React from "react";
import { CompassArrow, CompassBox, CompassImage } from "./styles";
import Compass from "../../assets/compass.svg";
import Arrow from "../../assets/arrow.svg";

interface Props {
  degrees: number;
}

const DecodedCompass: React.FC<Props> = ({ degrees }) => {
  return (
    <CompassBox>
      <CompassImage src={Compass} alt="Compass" />
      <CompassArrow
        src={Arrow}
        alt="Arrow inside the Compass"
        degrees={degrees}
      />
    </CompassBox>
  );
};

export default DecodedCompass;
