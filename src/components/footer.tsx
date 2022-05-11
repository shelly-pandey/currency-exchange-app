import 'font-awesome/css/font-awesome.min.css'
import 'mdbreact/dist/css/mdb.css';


export default function Footer() {
    const mdbreact = require('mdbreact');
    const { Footer, Container } = mdbreact;

    return (
        <Footer   className="Footer">


<div className="text-center">
                <ul className="list-unstyled list-inline">
                    <li className="list-inline-item"><a className="btn-floating btn-sm btn-fb mx-1" href="#action1"><i className="fa fa-facebook"> </i></a></li>
                    <li className="list-inline-item"><a className="btn-floating btn-sm btn-tw mx-1" href="#action1"><i className="fa fa-twitter"> </i></a></li>
                    <li className="list-inline-item"><a className="btn-floating btn-sm btn-gplus mx-1" href="#action1"><i className="fa fa-google-plus"> </i></a></li>
                    <li className="list-inline-item"><a className="btn-floating btn-sm btn-li mx-1" href="#action1"><i className="fa fa-linkedin"> </i></a></li>
                    <li className="list-inline-item"><a className="btn-floating btn-sm btn-dribbble mx-1" href="#action1"><i className="fa fa-dribbble"> </i></a></li>
                </ul>
            </div>
            <div className="footer-copyright text-center">
                <Container fluid>
                    &copy; {(new Date().getFullYear())} Copyright: <a href="https://www.MDBootstrap.com"> Shelly Pandey </a>
                </Container>
            </div>
        </Footer>
    );
}