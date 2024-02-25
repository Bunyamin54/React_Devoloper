import Button from './styled/Button';
import HeaderStyled from './styled/HeaderStyled';
import Image from './styled/Image';

const Header = () => {
  return (
    <HeaderStyled>
      <div>
        <h1>Drømmenes IT-karriere starter her!</h1>
        <p>
          Digitaliseringen av samfunnet øker, og teknologien vi benytter oss av påvirker i stadig større grad hvordan vi lever livene våre. Et godt samspill mellom teknolog, individer og samfunn er derfor viktigere enn noen gang.

          Vil du øke din forståelse av hvordan IT og informasjonssystemer utvikles, brukes og påvirker oss, og få kunnskap til selv å kunne bidra i utviklingen? Ved å følge dette studiet vil du få kompetanse til å analysere, designe og utvikle digitale løsninger ut fra brukerens behov. Studiet gir også rom for at du kan fordype deg i aktuelle tema som IT-sikkerhet og universell utforming. Vi har et eget mentorprogram for nye studenter og du vil  i starten av studiet få tilbud om et introduksjonskurs i programmering.
          {' '}
        </p>
        <Button primary>Start din nye karriere</Button>
      </div>

      <Image src="./images/j1.jpg" />
    </HeaderStyled>
  );
};

export default Header;
