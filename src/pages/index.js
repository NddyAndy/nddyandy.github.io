import React from "react"
import {Link} from "gatsby"

import Layout from '../components/layout'

export default () => (
    <Layout>

        <div className="container">
            <h1 className="heading mt">
                
                <span className="heading-primary"> <span className='hi'>Hi</span><span className="dot"></span></span>

                <span className="heading-secondary">I'm Ndifreke Friday</span>
                <span className="heading-tertiary mt">A web developer based out of Port Harcourt, Nigeria. I build responsive websites and scalable APIs. I am problem solving and always excited when it comes  to mentoring aspiring developers.</span>

                <span className="heading-tertiary">
                My core skills are <b>HTML</b>, <b>CSS</b> (SASS), <b>Javascript</b> (React, Vue, <b>Nodejs</b>) and <b>PHP</b>(Laverel). I also have experience with DBMS [ <b>Mysql</b> / NoSql (<b>mongoDB</b> and firebase)], <b>git</b> version control and <b>Linux</b>.
            </span>
                <span className="heading-tertiary">
                I have completed <Link to="projects">projects</Link> alone and also worked with different teams. I have mentored over 20 students (directly) in web development. Some of the projects I am allowed to showcase are in my <a href="https://github.com/ndiecodes" target="_blank" rel="noopener noreferrer">github repository</a>.
            </span>
            </h1>

            
        </div>

    


    </Layout>
)
