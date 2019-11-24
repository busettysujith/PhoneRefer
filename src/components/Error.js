import React , {Component} from 'react';

class Error extends  Component{
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="container">
                    <div className="alert alert-dismissible fade show " role="alert">
                        <span>😵</span> <span className="loop"> Sorry Friend - </span> Can't Find What You Want
                        <button type="button" className="close" data-dismiss="alert" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                <br/>
                <div className="content text-center"><img alt="404 page" width="206" src="https://res.cloudinary.com/phonerefer/image/upload/v1572421224/irshadali.site/404_fhlby7.png" className="icon"/>
                    <br/>
                    <br/>
                    <h1 className="title">Page not found</h1>
                    <p className="description">The page you are looking for doesn't exist or has been moved.</p>
                    <p className="description">Sorry From - <strong>Irshad Ali</strong> </p>
                    <br/>
                </div>
            </div>
        );
    }

}
export  default Error;