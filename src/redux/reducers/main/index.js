import { fromJS} from 'immutable';
import constants from '../../constants';

const initialState = fromJS({
    example: "Welcome to React_Redux_Saga learning Platform."
});

function main(state = initialState, action) {
    // switch(action.type) {
    //     case constants.REACT_REDUX_SAGA_BOILERPLATE:
    //         return state 
    //             .set('example', action.value);
    //     default:
    //         return state;
    // }
    return initialState;
}

export default main;