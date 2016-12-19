import Header from './modal/Header';
import Body from './modal/Body';
import Footer from './modal/Footer';
import Full from './layout/Full';
import Half from './layout/Half';
import Quarter from './layout/Quarter';
import Third from './layout/Third';
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

            <div className="clearfix">
              <Full> test </Full>
            </div>
            <div className="clearfix">
              <Half> test </Half>
              <Half> test </Half>
            </div>
            <div className="clearfix">
              <Third> test </Third>
              <Third> test </Third>
              <Third> test </Third>
            </div>
            <div className="clearfix">
              <Quarter> test </Quarter>
              <Quarter> test </Quarter>
              <Quarter> test </Quarter>
              <Quarter> test </Quarter>
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
