import Icon from "./assets/images/icon_weather.svg";
import Illustration from "./assets/images/illustration_weather.svg";
import * as Styles from "./styles";

function App() {
  return (
    <Styles.Container>
      <Styles.Content>
        <Styles.InfoSection>
          <Styles.IllustrationImage
            src={Illustration}
            alt="Ilustração de um sistema de previsão do tempo"
          />
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
