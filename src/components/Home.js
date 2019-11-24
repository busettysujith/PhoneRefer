import React , {Component} from 'react';

class Home extends  Component{
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="container">
                <div className="alert alert-dismissible fade show " role="alert">
                    <span>🎉 </span><span className="loop">Hi Friend</span> - Welcome to land of innovations
                    <button type="button" className="close" data-dismiss="alert" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <br/>
                <div>
                    <p className="text-center">Hello <span>👋</span> I'm <span className="back">Irshad Ali</span> <br/>
                      <span>👨‍💻 </span>  Front-End-Developer based in Hyderabad, India. With a passion for creating new ideas and
                        beautiful functional websites with a strong understanding of development. </p>
                </div>
                <br/>
                <div>
                    <p className=" links text-center">
                        <a href="https://find-github.netlify.com" target="_blank"> Find Github Account</a> <br/>
                        <br/>
                        <a href="https://your-github-birthday.netlify.com" target="_blank"> Your Github Birthday</a> <br/>
                        <br/>
                        <a href="https://worldclock.netlify.com" target="_blank"> World Clock</a> <br/>
                        <br/>
                        <a href="https://online-compass.netlify.com" target="_blank"> Online Compass</a> <br/>
                        <br/>
                        <a href="https://2050.netlify.com" target="_blank"> 2048 Game</a> <br/>
                        <br/>
                        <a href="https://www.phonerefer.com" target="_blank"> PhoneRefer</a> <br/>
                        <br/>
                        <a href="https://ruff.netlify.com" target="_blank"> ruff</a>
                    </p>
                </div>

            </div>
        );
    }

}
export  default Home;