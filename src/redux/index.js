
import React, {PureComponent} from 'react';
import store from './storeConfig';
import {Provider} from 'react-redux';
import PropTypes from 'prop-types';
import Main from './containers/main';

class Sampleform extends PureComponent {
    static displayName = "Sample Form";

    render(){
        return(
            <Provider store={store}>
                <div> 
                    <Main />
                </div>
            </Provider>
        )
    }
}

export default Sampleform;