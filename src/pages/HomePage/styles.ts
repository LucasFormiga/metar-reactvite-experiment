import { Box, Typography } from "@mui/joy";
import styled from "@emotion/styled";

export const Container = styled(Box)`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const MetarBox = styled(Box)`
  width: 55vw;
  height: 65vh;
  border-radius: 1em;
  padding: 16px;
  display: flex;
  flex-direction: column;
`;

export const MetarBoxTitle = styled(Typography)`
  font-size: 40px;
  font-family: "JetBrains Mono", monospace;
  text-transform: uppercase;
  align-self: center;
`;

export const MetarBoxSubtitle = styled(Typography)`
  font-size: 24px;
  font-family: "JetBrains Mono", monospace;
  text-transform: uppercase;
  align-self: center;
`;

export const MetarBoxAirportName = styled(Typography)`
  font-size: 12px;
  font-family: "JetBrains Mono", monospace;
  text-transform: uppercase;
  align-self: center;
  text-align: center;
`;

export const MetarBoxContent = styled(Box)`
  width: 100%;
  height: 100vh;
  display: flex;
  align-self: center;
  flex-direction: column;
  padding-top: 10px;
`;

export const MetarBoxDecodedContent = styled(Box)`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-evenly;

  img {
    max-width: 200px;
  }
`;

export const MetarBoxFooterText = styled(Typography)`
  font-size: 10px;
  font-family: "JetBrains Mono", monospace;
  text-transform: uppercase;
  align-self: center;
`;
