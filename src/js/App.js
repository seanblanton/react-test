import Header from './modal/Header';
import Body from './modal/Body';
import Footer from './modal/Footer';
import Full from './layout/Full';
import Half from './layout/Half';
import Third from './layout/Third';
import Quarter from './layout/Quarter';
import Sixth from './layout/Sixth';
import Eigth from './layout/Eigth';
import React from 'react';
import style from '../css/main.scss';

class App extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
          <div class="lh-body fw4 xs-pa0 xs-ma0 border-box sans-serif">
            <div className="xs-col5of12 bg-white border-gray20 br1 xs-mx-auto bw1 bs-solid border-gray40 shadow-2 xs-my4">
                <Header />
                <Body className="xs-fs5"> Lorem ipsum dolar Lorem ipsum dolar Lorem ipsum dolar Lorem ipsum dolar Lorem ipsum dolar Lorem ipsum dolar Lorem ipsum dolar Lorem ipsum dolar Lorem ipsum dolar Lorem ipsum dolar Lorem ipsum dolar Lorem ipsum dolar Lorem ipsum dolar Lorem ipsum dolar Lorem ipsum dolar   </Body>
                <Footer />
            </div>
          </div>
          );
    }

    onChange(e) {
        this.setState({
            name: e.target.value
        });
    }
}

export default App;
