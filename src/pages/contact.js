import React from "react"

import SEO from "../components/seo"
import Layout from '../components/layout'

export default () => (
    <Layout>

     <SEO
        title="Contact | Ndifreke Friday (ndiecodes)"
      />    

        <div className="container">
            <div className="contact">

                <h1 className="heading-main">
                    Get in Touch!
                </h1>

                <p> Say <a  className="mail" href="mailto:ndiecodes@gmail.com" target="_blank" rel="noopener noreferrer">Hi</a> or find me on other social media platforms: <a href="https://www.linkedin.com/in/ndiecodes/" target="_blank" >LinkedIn</a>, <a href="https://twitter.com/ndiecodes" target="_blank" >Twitter</a>, <a href="https://github.com/ndiecodes" target="_blank" >Github</a>, <a href="https://facebook.com/ndiecodes" target="_blank" >Facebook</a>.</p>

            </div>
           
            
        </div>

    


    </Layout>
)
