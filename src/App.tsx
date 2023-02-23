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

function App() {
  const data = [
    { day: "23/02", temp: 30 },
    { day: "24/02", temp: 25 },
    { day: "25/02", temp: 27 },
  ];

  return (
    <Styles.Container>
      <Styles.Content>
        <Styles.InfoSection>
          {/* <Styles.IllustrationImage
            src={Illustration}
            alt="Ilustração de um sistema de previsão do tempo"
          /> */}
          <Styles.HeaderInfoSection>
            <h1>Maceió</h1>
            <p>23/01/32</p>
          </Styles.HeaderInfoSection>
          <Styles.OverviewSection>
            <Styles.OverviewItem>
              <div>
                <CiTempHigh size={30} />
                <Styles.TitleOverviewItem>Temperatura</Styles.TitleOverviewItem>
              </div>
              <Styles.ValueOverviewItem>30°</Styles.ValueOverviewItem>
            </Styles.OverviewItem>
            <Styles.OverviewItem>
              <div>
                <WiHumidity size={30} />
                <Styles.TitleOverviewItem>Umidade</Styles.TitleOverviewItem>
              </div>
              <Styles.ValueOverviewItem>66%</Styles.ValueOverviewItem>
            </Styles.OverviewItem>
            <Styles.OverviewItem>
              <div>
                <WiStrongWind size={30} />
                <Styles.TitleOverviewItem>Vento</Styles.TitleOverviewItem>
              </div>
              <Styles.ValueOverviewItem>10.2 Km/h</Styles.ValueOverviewItem>
            </Styles.OverviewItem>
            <Styles.OverviewItem>
              <div>
                <WiDaySunny size={30} />
                <Styles.TitleOverviewItem>UV</Styles.TitleOverviewItem>
              </div>
              <Styles.ValueOverviewItem>7.0</Styles.ValueOverviewItem>
            </Styles.OverviewItem>
          </Styles.OverviewSection>
          <ResponsiveContainer width="100%" height="50%">
            <LineChart data={data} margin={{ left: 0, top: 20 }}>
              <Line type="monotone" dataKey="temp" stroke="#6c5ce7" />
              <CartesianGrid stroke="#fafafa" strokeDasharray="5 5" />
              <XAxis dataKey="day" />
              <YAxis />
              <Tooltip />
            </LineChart>
          </ResponsiveContainer>
        </Styles.InfoSection>

        <Styles.SearchSection>
          <Styles.IconImage
            src={Icon}
            alt="Ícone representando previsão do tempo"
          />
          <Styles.BtnLocalization>
            Usar localização atual
          </Styles.BtnLocalization>
          <Styles.Form>
            <Styles.InputSearch
              id="location_field"
              placeholder="Informe o local desejado"
              type="text"
            />
            <Styles.BtnSearch>Pesquisar</Styles.BtnSearch>
          </Styles.Form>
        </Styles.SearchSection>
      </Styles.Content>
    </Styles.Container>
  );
}

export default App;
