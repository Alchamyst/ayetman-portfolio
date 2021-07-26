import * as React from 'react';
import Layout from '../components/layout';

const metaKWs = [
    "contact ashley yetman", 
    "get in touch with ashley yetman", 
    "email with ashley yetman", 
    "message ashley yetman", 
    "contact alchamyst",
    "get in touch with alchamyst", 
    "email alchamyst", 
    "message alchamyst"
];

const IndexPage = () => {
  return (
    <Layout pageTitle="Contact Ashley" metaKWs={metaKWs}>
      <p>Contact Form Coming Soon!</p>
    </Layout>
  )
};

export default IndexPage;