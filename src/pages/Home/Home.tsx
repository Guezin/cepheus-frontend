import {
  Container,
  Header,
  Content,
  Title,
  Launches,
  LatestLaunch,
} from './styles';

const Home = () => (
  <Container>
    <Header>
      <section>
        <div>
          <h1>Cepheus</h1>
        </div>

        <div>
          <span>Lembre-se! Foguete não tem ré.</span>
        </div>
      </section>
    </Header>

    <Content>
      <section>
        <Title>Lançamentos</Title>

        <LatestLaunch to="/launches/latest">
          <header>
            <h2>Último</h2>
            <span>Foguete - IXPE</span>
            <span>Data: 12/12/2021</span>
          </header>
        </LatestLaunch>

        <Launches to="/launches/next">
          <header>
            <h2>Próximo</h2>
            <span>lorem ipsum</span>
          </header>
        </Launches>

        <Launches to="/launches/upcoming">
          <header>
            <h2>Próximos</h2>
            <span>lorem ipsum</span>
          </header>
        </Launches>

        <Launches to="/launches/past">
          <header>
            <h2>Passados</h2>
            <span>lorem ipsum</span>
          </header>
        </Launches>
      </section>
    </Content>
  </Container>
);

export default Home;
