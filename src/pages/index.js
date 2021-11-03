import React from 'react';
import { Parallax } from '@react-spring/parallax';

import Layout from '../components/Layout';
import Hero from '../components/Hero';
import Projects from '../components/Projects';
import About from '../components/About';
import Contact from '../components/Contact';
import BlogPost from '../components/BlogPost';

const IndexPage = () => (
  <Layout>
    <Parallax pages={5.5}>
      <Hero offset={0} />
      <Projects offset={1} />
      <About offset={3} />
      <BlogPost offset={3.5} />
      <Contact offset={4.8} />
    </Parallax>
  </Layout>
);

export default IndexPage;
