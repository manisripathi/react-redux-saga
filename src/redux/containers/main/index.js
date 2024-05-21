import React, { PureComponent} from 'react';
import {connect} from 'react-redux';
import { createStructuredSelector } from 'reselect';
import PropTypes from 'prop-types';
import selectors from "../../selectors";
import actions from "../../actions";

class Main extends PureComponent {

    render(){

        return(
            <div>
                <h3> This is main page. </h3>
                <h5> {this.props.example} </h5>
            </div>
        );
    }
};

export function mapDispatchToProps(dispatch) {
    return {
        //example: (value) => dispatch(actions.example(value)) 
    };
}

const mapStateToProps = () => createStructuredSelector({
    example: selectors.exampleData()
});

export default connect(mapStateToProps, mapDispatchToProps)(Main);

