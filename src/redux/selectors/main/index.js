import { createSelector } from "reselect";

const makeSelectGlobal = () => state => state

//const selectMain = state => state["main"];

const mainData = () => createSelector(
    makeSelectGlobal(),
    global => global.main
);

// // const exampleData = () => createSelector(
// //     mainData(),
// //     data => {
// //         if(data.get('example')) return data.get('example');
// //     }
// // )

const exampleData = () => createSelector(
    mainData(),
    data => data.get('example')
);

export { makeSelectGlobal, mainData, exampleData }

