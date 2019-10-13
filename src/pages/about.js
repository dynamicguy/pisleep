import React from "react"
import { Link } from "gatsby"
import Image from "../components/image"
import Layout from "../components/layout"
import SEO from "../components/seo"

const AboutPage = () => (
  <Layout>
    <SEO title="Page two" />
      <h1>About Us</h1>
      <p>PiSleep is a driver and vehicle safety product which can accurately predict and warn driver's sleeping during
          the driving to protect driver's life and avoid the damage to the vehicle.</p>
      <h2>Features</h2>
      <ul>
          <li>Early warning for fatigue and distraction driving status</li>
          <li>Suit for all vehicles</li>
          <li>Work around all day, under any weather</li>
          <li>Can be used with glasses and sunglasses</li>
          <li>Distinguish real doze or fake sleep, effectively reduce false warning.</li>
          <li>Easy to be installed and used.</li>
      </ul>
      <div style={{maxWidth: `300px`, marginBottom: `1.45rem`}}>
          <Image/>
      </div>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default AboutPage
