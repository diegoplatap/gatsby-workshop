/** @jsx jsx */
import { jsx } from 'theme-ui';
import Intro from '../sections/intro.mdx'
import Inner from '../elements/inner';
import Content from '../elements/content';
import ShapesHero from './shapes/hero';

// import Intro componente MDX

const Hero = ({ offset }) => (
  <div>
    <ShapesHero offset={offset} />
    <Content sx={{ variant: `texts.bigger` }} speed={0.4} offset={offset}>
      <Inner><Intro /></Inner>
    </Content>
  </div>
);

export default Hero;
