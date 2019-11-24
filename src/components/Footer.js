import React , {Component} from 'react';

class Footer extends  Component{
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <footer className="footer text-center bg-dark text-white">
                    <div className="container">
                        <span className="r">Copyright @ 2019 <a href="/" className="text-white">www.iamdev.io</a> </span>
                    </div>
                </footer>
            </div>
        );
    }

}
export  default Footer;