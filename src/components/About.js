import React , {Component} from 'react';

class About extends  Component{
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="container">
                <div className="alert alert-dismissible fade show " role="alert">
                    <span className="loop"><span>🎊</span> Stay Connected - </span>📱 Fellow me on social networks
                    <button type="button" className="close" data-dismiss="alert" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                  <h2 className="text-center"> About Me</h2>
                        <div className="media">
                            <img
                                src="https://res.cloudinary.com/phonerefer/image/upload/v1574322245/irshadali.site/yr6f8np7kpqmrq2safly.jpg"
                                width="130px" height="130px" className="align-self-center mx-auto d-block p-2 photo" alt="irshad ali"/>
                                <div className="media-body mt-3">
                                    <p className="per-text">Hi. I'm <span className="name">Irshad Ali</span> a
                                        hard-working engineering graduate specialized in "Electronic Communication
                                        Engineering" and passionate about computers and technology. </p>
                                    <p className="per-text"> Along with my graduation i learned UI development
                                        HTML, CSS, Javascript, JQuery, ReactJs and also being a designer i am very good
                                        at Photoshop & Illustrator.</p>
                                </div>
                        </div>
                <br/>
                <div>
                    <p className="text-center hobbies">
                        ☕️ Coffee Lover
                        📝 Blogger
                        📷  Photographer
                    </p>
                </div>
                        <br/>
                        <div>
                            <h5 className="project">My Major Project <span className="proback">PhoneRefer.com</span> </h5>
                            <br/>
                            <p className="project">
                                I am the founder of <a href="https://www.phonerefer.com" className="nlink" target="_blank">PhoneRefer.com</a>
                            </p>
                            <p className="project">
                                PhoneRefer.com provides useful digital tips and resources on software, apps and gadgets. Our aim is to become your favorite digital resources destination on the web.
                                Where future is arriving faster than ever.
                            </p>
                        </div>
                <br/>
                <div className="align-items-center text-center">
                    <h4> Contact Me</h4>
                    <a href="mailto:phonerefer@gmail.com" className="fa fa-envelope text-decoration-none fa-2x" target="_blank"> </a>
                </div>
                        <br/>

                                <div className="align-items-center text-center">
                                    <h4> Follow Me On </h4>
                                    <a href="https://github.com/phonerefer" className="fab fa-github fa-2x icons" title="Irshad's Github Profile" target="_blank"> </a>
                                    &nbsp;&nbsp;&nbsp;&nbsp;
                                    <a href="https://codepen.io/phonerefer" className="fab fa-codepen fa-2x icons" title="Irshad's Codepen Profile" target="_blank"> </a>
                                    &nbsp;&nbsp;&nbsp;&nbsp;
                                    <a href="https://instagram.com/imirshadali"
                                       className="fab fa-instagram fa-2x icons" title="Irshad's Insatagram Profile" target="_blank"> </a>
                                    &nbsp;&nbsp;&nbsp;&nbsp;
                                    <a href="https://dev.to/phonerefer"
                                       className="fab fa-dev fa-2x " title="Irshad's DEV Profile" target="_blank"> </a>
                                </div>
                </div>
        );
    }

}
export  default About;