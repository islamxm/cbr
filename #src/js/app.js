import acc from './modules/acc.js';
import buttonHover from './modules/buttonHover.js';
import * as flsFuncs from './modules/functions.js';

flsFuncs.isWebp();

document.addEventListener('DOMContentLoaded', () => {
    buttonHover();
    acc();
})
