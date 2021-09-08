/*
 * @athur: Alexander Chi
 * @description: 
 * @date: 07/septiembre/2021
**/
import './asset/scss/App.scss';
import Card from './components/Card';
import calculator from './asset/svgs/icon-calculator.svg';
import karma from './asset/svgs/icon-karma.svg';
import supervisor from './asset/svgs/icon-supervisor.svg';
import team from './asset/svgs/icon-team-builder.svg'; 

const App = (props) => {
  return (
    <section className="container">
      <h2 className="not-blod">Reliable, efficient delivery</h2>
      <h2>Powered by Technology</h2>
      <p>Our Artificial intelligence powered tools use millons of project data points to ensure that your project is successful</p>
     
      <div className="content">
        <div className="col"> 
          <Card
            color="cyan"
            title="Supervisor"
            icon={supervisor}>
              Monitors activity to identify project roadblocks
          </Card>
        </div>
        <div className="col"> 
          <Card
            color="red"
            title="Team Builder"
            icon={team}>
              Scans our talent network to create the optimal team for your project
          </Card>
          <Card
            color="orange"
            title="Karma"
            icon={karma}>
              Regulary evaluates our talent to ensure quality
          </Card>
        </div>
        <div className="col"> 
          <Card
            color="blue"
            title="Calculator"
            icon={calculator}>
              Uses data from past projects to p´rovide better delivery estimates
          </Card>
        </div>
      </div>
    </section>
  );
}

export default App;
