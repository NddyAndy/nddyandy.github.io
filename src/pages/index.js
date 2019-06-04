import React from "react"

import Layout from '../components/layout'

export default () => (
    <Layout>

        <div className="container">
            <h1 className="heading">
                <span className="heading-primary"> <span className='hi'>Hi</span><span className="dot"></span></span>

                <span className="heading-secondary">I'm Ndifreke Friday,</span>
                <span className="heading-tertiary">A web developer based out of Port Harcourt, Nigeria. I build responsive websites and scalable APIs. I am problem solving and always excited when it comes to mentoring aspiring developers.</span>
            </h1>

            {/* <hr /> */}


            <div className="portfolio-area">
 
                <h2 className="heading-main">Projects</h2>
                <div className="porfolio">

                    <div className="portfolio-card">
                        <h2><a href="https://twitter.com/ndiecodes" target="_blank" rel="noopener noreferrer">Teachable.ng</a></h2>
                        <p className="tech"><em> <span>Tech Used: </span> HTML/CSS, Javascript(Nodejs)</em></p>

                        <p className="description">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic </p>

                    </div>

                     <div className="portfolio-card">
                        <h2><a href="https://twitter.com/ndiecodes" target="_blank" rel="noopener noreferrer">nbte.forum.org.ng/ranking</a></h2>
                        <p className="tech"><em> <span>Tech Used: </span> HTML/CSS, Javascript(Nodejs)</em></p>

                        <p className="description">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic </p>

                    </div>


                     <div className="portfolio-card">
                        <h2><a href="https://twitter.com/ndiecodes" target="_blank" rel="noopener noreferrer">MLM Solution</a></h2>
                        <p className="tech"><em> <span>Tech Used: </span> HTML/CSS, Javascript(Nodejs)</em></p>

                        <p className="description">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not </p>

                    </div>

                     <div className="portfolio-card">
                        <h2><a href="https://twitter.com/ndiecodes" target="_blank" rel="noopener noreferrer">Optisoft.ng</a></h2>
                        <p className="tech"><em> <span>Tech Used: </span> HTML/CSS, Javascript, PHP(Laravel)</em></p>

                        <p className="description">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not </p>

                    </div>

                    <div className="portfolio-card">
                        <h2><a href="https://twitter.com/ndiecodes" target="_blank" rel="noopener noreferrer">nddyacademy.herokuapp.com</a></h2>
                        <p className="tech"><em> <span>Tech Used: </span> HTML/CSS, Javascript, PHP(Laravel)</em></p>

                        <p className="description">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not </p>

                    </div>

                    

                </div>
               

            </div>

            <div className="Skills">

                <h2 className="heading-main">My Skills</h2>
                

            </div>


               <div className="Skills">

                    <h2 className="heading-main">My Skills</h2>


                </div>
            
        </div>

    


    </Layout>
)
