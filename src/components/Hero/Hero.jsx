import './Hero.css';
import { Carrosel } from './Carousel/Carousel';

const Hero = () => {
  return (
    <section>
      <div className="hero-call-to-action">
        <Carrosel />
      </div>
    </section>
  );
};

export default Hero;
