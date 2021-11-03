import React from 'react';
import MyAbout from '../sections/about.mdx'
import Inner from '../elements/inner';
import Content from '../elements/content';
import ShapesAbout from './shapes/about';

// import About MDX file;

const About = ({ offset }) => (
  <div>
    <ShapesAbout offset={offset} />
    <Content speed={0.4} offset={offset}>
      <Inner><MyAbout /></Inner>
    </Content>
  </div>
);

export default About;
