// pages/index.js
import Layout from '../components/Layout/Layout';
import Hero from '../components/Home/Hero';
import WhyPica from '../components/Home/WhyPica';
import WhoWeAre from '../components/Home/WhoWeAre';
import OurValues from '../components/Home/OurValues';
import Impact from '../components/Home/Impact';

export default function Home() {
  return (
    <Layout>
      <Hero />
      <WhyPica />
      <WhoWeAre />
      <OurValues />
    </Layout>
  );
}