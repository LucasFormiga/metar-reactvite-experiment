import React, { useEffect, useState } from "react";
import {
  Container,
  MetarBox,
  MetarBoxAirportName,
  MetarBoxContent,
  MetarBoxDecodedContent,
  MetarBoxFooterText,
  MetarBoxSubtitle,
  MetarBoxTitle,
} from "./styles";
import SearchInput from "../../components/SearchInput/SearchInput";
import DecodedCompass from "../../components/DecodedCompass/DecodedCompass";

interface Props {}

const HomePage: React.FC<Props> = () => {
  const [icao, setIcao] = useState<string>("");
  const [data, setData] = useState<any>(null);
  const [wind, setWind] = useState<number>(0);

  useEffect(() => {
    if (icao.length === 4) {
      return;
    }

    setData(null);
  }, [icao]);

  useEffect(() => {
    if (!data) {
      return setWind(0);
    }

    setWind(getDegrees());
  }, [data]);

  const handleMetar = (metar: string): void => {
    setData(metar);
  };

  const getDegrees = (): number => {
    const { vento } = data;
    const windInfo = vento.split(" ");

    return windInfo[0].substring(0, windInfo[0].length - 1);
  };

  return (
    <Container>
      <MetarBox
        sx={(theme) => ({
          backgroundColor: theme.vars.palette.background.level1,
        })}
      >
        <MetarBoxTitle>Metar</MetarBoxTitle>
        <MetarBoxSubtitle>
          {icao ? icao : "Set the Airport ICAO"}
        </MetarBoxSubtitle>

        {data ? <MetarBoxAirportName>{data.nome}</MetarBoxAirportName> : null}

        <MetarBoxContent>
          <SearchInput icao={icao} setIcao={setIcao} onMetar={handleMetar} />

          {data ? (
            <MetarBoxDecodedContent>
              <DecodedCompass degrees={wind} />
            </MetarBoxDecodedContent>
          ) : null}
        </MetarBoxContent>

        {data ? <MetarBoxFooterText>{data.metar}</MetarBoxFooterText> : null}
      </MetarBox>
    </Container>
  );
};

export default HomePage;
