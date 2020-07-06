import React from "react"
import { Link } from "gatsby"
import SEO from "../components/seo"
import Layout from "../components/layout"

export default () => (
  <Layout>
     <SEO
        title="About | Ndifreke Friday (ndiecodes)"
      />

    <div className="container">
      <h1 className="heading mt">
        <span className="heading-primary">
          {" "}
          <span className="hi">Hi</span>
          <span className="dot" />
        </span>

        <span className="heading-secondary">I'm Ndifreke Friday</span>
        <span className="heading-tertiary mt">
          A Software Developer currently living in Lagos, Nigeria. I build
          responsive websites and scalable APIs. I am problem solving and always
          excited when it comes to mentoring aspiring developers.
        </span>

        <span className="heading-tertiary">
          My core skills are  <b>Javascript</b>{" "}
          (<b>Nodejs</b>, React, Vue) , <b>PHP</b>(Laravel), <b>Go </b> and HTML/CSS (SASS). I also have
          experience with DBMS [ <b>Mysql</b> / NoSql (<b>mongoDB</b>)], <b>Nginx Web Server</b> and <b>Jenkins Automation Server</b>.
        </span>
        <span className="heading-tertiary">
          I have completed <Link to="projects">projects</Link> alone and also
          worked with different teams. Some of the projects I am allowed to
          showcase are in my{" "}
          <a
            href="https://github.com/ndiecodes"
            target="_blank"
            rel="noopener noreferrer"
          >
            github repository
          </a>
          .
        </span>
      </h1>
    </div>
  </Layout>
)
