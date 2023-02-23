import { useState, useRef } from "react";
import Icon from "./assets/images/icon_weather.svg";
import Illustration from "./assets/images/illustration_weather.svg";
import * as Styles from "./styles";
import { CiTempHigh } from "react-icons/ci";
import { WiHumidity, WiDaySunny, WiStrongWind } from "react-icons/wi";
import {
  CartesianGrid,
  Line,
  LineChart,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import axios from "axios";
import { Weather } from "./types/weather";

function App() {
  const [data, setData] = useState<Weather>();
  const [loading, setLoading] = useState(false);
  const input = useRef<HTMLInputElement>(null);

  const getWeatherInformationFromCurrentLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(async (position) => {
        const request = await axios.get(
          `https://api.weatherapi.com/v1/forecast.json?key=${
            import.meta.env.VITE_API_KEY
          }&q=${position.coords.latitude},${
            position.coords.longitude
          }&days=7&lang=pt`
        );

        setData(request.data);
      });
    }
  };

  const getWeatherInformationFromInputLocation = async () => {
    if (input.current?.value != "") {
      setLoading(true);

      const request = await axios.get(
        `https://api.weatherapi.com/v1/forecast.json?key=${
          import.meta.env.VITE_API_KEY
        }&q=${input.current!.value}&days=7&lang=pt`
      );

      setData(request.data);
      setLoading(false);
      input.current!.value = "";
    }
  };

  return (
    <Styles.Container>
      <Styles.Content>
        <Styles.InfoSection>
          {data == null ? (
            <Styles.IllustrationImage
              src={Illustration}
              alt="Ilustração de um sistema de previsão do tempo"
            />
          ) : (
            <>
              <Styles.HeaderInfoSection>
                <h1>{data?.location.name}</h1>
                <p>
                  {data?.location.localtime
                    .split(" ")[0]
                    .split("-")
                    .reverse()
                    .join("/")}
                </p>
              </Styles.HeaderInfoSection>
              <Styles.OverviewSection>
                <Styles.OverviewItem>
                  <div>
                    <CiTempHigh size={30} />
                    <Styles.TitleOverviewItem>
                      Temperatura
                    </Styles.TitleOverviewItem>
                  </div>
                  <Styles.ValueOverviewItem>
                    {data.current.temp_c}°
                  </Styles.ValueOverviewItem>
                </Styles.OverviewItem>
                <Styles.OverviewItem>
                  <div>
                    <WiHumidity size={30} />
                    <Styles.TitleOverviewItem>Umidade</Styles.TitleOverviewItem>
                  </div>
                  <Styles.ValueOverviewItem>
                    {data.current.humidity}%
                  </Styles.ValueOverviewItem>
                </Styles.OverviewItem>
                <Styles.OverviewItem>
                  <div>
                    <WiStrongWind size={30} />
                    <Styles.TitleOverviewItem>Vento</Styles.TitleOverviewItem>
                  </div>
                  <Styles.ValueOverviewItem>
                    {data.current.wind_kph} Km/h
                  </Styles.ValueOverviewItem>
                </Styles.OverviewItem>
                <Styles.OverviewItem>
                  <div>
                    <WiDaySunny size={30} />
                    <Styles.TitleOverviewItem>UV</Styles.TitleOverviewItem>
                  </div>
                  <Styles.ValueOverviewItem>
                    {data.current.uv}
                  </Styles.ValueOverviewItem>
                </Styles.OverviewItem>
              </Styles.OverviewSection>
              {/* <ResponsiveContainer width="100%" height="50%">
                <LineChart
                  data={data?.forecast.forecastday}
                  margin={{ left: 0, top: 20 }}
                >
                  <Line
                    type="monotone"
                    dataKey={data?.forecast.forecastday.day.maxtemp_c}
                    stroke="#6c5ce7"
                  />
                  <CartesianGrid stroke="#fafafa" strokeDasharray="5 5" />
                  <XAxis dataKey="day" />
                  <YAxis />
                  <Tooltip />
                </LineChart>
              </ResponsiveContainer> */}
            </>
          )}
        </Styles.InfoSection>

        <Styles.SearchSection>
          <Styles.IconImage
            src={Icon}
            alt="Ícone representando previsão do tempo"
          />
          <Styles.BtnLocalization
            onClick={getWeatherInformationFromCurrentLocation}
          >
            Usar localização atual
          </Styles.BtnLocalization>
          <Styles.Form>
            <Styles.InputSearch
              ref={input}
              placeholder="Informe o local desejado"
              type="text"
            />
            <Styles.BtnSearch
              disabled={loading}
              onClick={getWeatherInformationFromInputLocation}
            >
              Pesquisar
            </Styles.BtnSearch>
          </Styles.Form>
        </Styles.SearchSection>
      </Styles.Content>
    </Styles.Container>
  );
}

export default App;
