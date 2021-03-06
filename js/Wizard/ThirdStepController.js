import {StepController} from './StepController';
const $ = require('jquery');

export class ThirdStepController extends StepController {
    enter(dataObject) {
        this.$wrapper = $('#step3');
        super.enter(dataObject);
        console.log('enter step 3');

        this.$wrapper.find('.name-value').text(dataObject.User.name);
        this.$wrapper.find('input[name=phone]').val(dataObject.User.phone);
    }

    exit(dataObject) {
        super.exit(dataObject);
        console.log('exit step 3');
    }
}

/**
 * This class should be remove by tree-shaking
 */
export class Unused {
    constructor() {
        this.hola = true;
    }

    work() {
        // do some stuff
        return this.hola + '('+3+')';
    }
}