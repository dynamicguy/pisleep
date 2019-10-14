import React from "react"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
    <Layout>
        <SEO title="Home"/>
        <h1>Anti Sleep Alarm</h1>
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
        <iframe width="560" height="315" src="https://www.youtube.com/embed/QYFAQYKeVJ4" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      
        <iframe width="560" height="315" src="https://www.youtube.com/embed/0Rxgtgfv4aA" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        
        <iframe width="560" height="315" src="https://www.youtube.com/embed/gNBFGVRLj30" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

        <p>To learn more about our products and pricing please reach us at nurul@ferdo.us or <a href="tel:01711241879">Call Us</a></p>
    </Layout>
);

export default IndexPage
