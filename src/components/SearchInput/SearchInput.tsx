import React from "react";
import { Input } from "@mui/joy";
import { SearchInputBox } from "./styles";

interface Props {
  icao: string;
  setIcao: (icao: string) => void;
  onMetar: (metar: string) => void;
}

const SearchInput: React.FC<Props> = ({ icao, setIcao, onMetar }) => {
  const onKey = async (event: { nativeEvent: any }) => {
    const { nativeEvent } = event;

    if (nativeEvent.key !== "Enter") {
      return;
    }

    if (!icao || icao.length < 4) {
      return;
    }

    const { data } = await fetch(
      `https://api-redemet.decea.mil.br/aerodromos/info?localidade=${icao.toUpperCase()}&metar=sim&api_key=ouyaq0gZ4pEyTFIz86fJyby2snpspM66yU728dB2`
    ).then((response) => response.json());

    if (!data.nome) {
      return alert("Airport ICAO is invalid.");
    }

    console.log(data);

    onMetar(data);
  };

  return (
    <SearchInputBox>
      <Input
        placeholder="Airport ICAO (ex. SBJP)"
        onKeyDown={onKey}
        value={icao}
        onChange={(event) => setIcao(event.target.value.toUpperCase())}
      />
    </SearchInputBox>
  );
};

export default SearchInput;
