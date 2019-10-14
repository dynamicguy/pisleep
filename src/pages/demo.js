import React from "react"

import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"

const DemoPage = () => (
  <Layout>
    <SEO title="Demo" />
      <h1>Demo</h1>
      <iframe title="demo1" width="100%" height="600" src="https://www.youtube.com/embed/QYFAQYKeVJ4" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      
      <iframe title="demo2" width="100%" height="600" src="https://www.youtube.com/embed/0Rxgtgfv4aA" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      
      <iframe title="demo3" width="100%" height="600" src="https://www.youtube.com/embed/gNBFGVRLj30" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default DemoPage
