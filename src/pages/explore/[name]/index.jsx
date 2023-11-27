import React, { useEffect } from 'react';
import Head from 'next/head';
import Layout from '@/layouts/default';
import Loader from '@/components/Common/Loader';
import Navbar from '@/components/Common/MainNavbar';
import Header from '@/components/Explore/Header';
import Content from '@/components/Explore/Content';
import CallToAction from '@/components/Explore/CallToAction';
import Footer from '@/components/OnePage/Footer';
import data from '@/data/Custom/hotel-slider.json';

function ProjectDetails({ project }) {
  useEffect(() => {
    document.body.classList.add('main-bg');
    return () => document.body.classList.remove('main-bg');
  }, [project]);

  return (
    <>
      <Head>
        <title>The Bohemian Boys | {project.title}</title>
      </Head>

      <Loader />
      <Navbar mainBg />
      <main>
        <Header project={project} />
        <Content project={project} />
        <CallToAction project={project} />
      </main>
      <Footer />
    </>
  );
}

ProjectDetails.getLayout = (page) => <Layout>{page}</Layout>;

export default ProjectDetails;

export const getStaticPaths = async () => {
  // Generate dynamic paths based on data
  const paths = data.map((item) => ({ params: { name: item.link } }));
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async (context) => {
  const project = data.find((item) => item.link === context.params.name);
  if (!project) {
    return {
      notFound: true,
    };
  }
  return {
    props: { project },
  };
};
