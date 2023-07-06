import styled from "@emotion/styled";
import { Box } from "@mui/joy";

export const CompassBox = styled(Box)``;

export const CompassImage = styled("img")`
  max-width: 200px;
  position: absolute;
`;

export const CompassArrow = styled.img<{ degrees: number }>`
  max-width: 200px;
  position: relative;
  animation-name: degrees;
  animation-duration: 1s;
  transform: rotate(${(props) => props.degrees || 0}deg);

  @keyframes degrees {
    from {
      transform: rotate(0deg);
    }

    to {
      transform: rotate(${(props) => props.degrees || 0}deg);
    }
  }
`;
