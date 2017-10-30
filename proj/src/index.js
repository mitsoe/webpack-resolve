import _ from 'lodash';
import yolo from 'Test/test';
function component() {
    var element = document.createElement('div');

    // Lodash, currently included via a script, is required for this line to work
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');
    console.log(yolo);
    return element;
}

document.body.appendChild(component());