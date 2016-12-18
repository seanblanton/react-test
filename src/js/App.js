import Header from './modal/Header';
import Body from './modal/Body';
import Footer from './modal/Footer';
import Box from './modal/Box';
import React from 'react';
import style from '../css/main.scss';

class App extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
          <div>
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
