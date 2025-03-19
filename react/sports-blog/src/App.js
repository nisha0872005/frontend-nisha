import tervon from './asset/img/tervon.jpg';
import './App.css';

function App() {
  return (
    <div className='container'>
      <h1>
        Trevon Diggs makes it clear that his brother, Stefon, should leave Buffalo!
      </h1>
      <img src={tervon} alt="Trevon Diggs"  ></img>

      <h4>
        The injured Dallas Cowboys defensive back made it clear watching Monday Night Football last night: his brother, Stefon, needs to get out of Buffalo ASAP!
      </h4>
      <img src={lasvegasnews} alt="Trevon Diggs" />

      <p>
        There is some MAJOR drama in Buffalo! The Bills offense is a shadow of itself in 2023 from external and internal stressors. 
        Last night, QB Josh Allen and the hometown Bills struggled in a third loss in four weeks. 
        This time to the often self-destructive Denver Broncos.
      </p>
      <img src={lasvegas} alt="Trevon Diggs"   />

      <h3>Stefon Diggs, especially, has been frustrated.</h3>
      <p>
        The elite wideout has been seen vocalizing his frustrations with the coaching staff and his QB on the sideline during games over the last season and a half.
      </p>
      <img src={lasvegaswin} alt="Trevon Diggs"  />
      <h2>Is this Stefon's last year with the Bills?</h2>
      <p>
        Rumblings on social media suggest that we could see a split between Stefon Diggs and the Buffalo Bills similar to the one we saw with the Minnesota Vikings a few years ago.
      </p>
    </div>
  );
}

export default App;
