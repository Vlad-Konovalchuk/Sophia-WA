import './index.scss';
import './scripts/dropDown';
import './scripts/burgerMenu';
import './scripts/toTop';
import {BurgerMenu, showMenu} from "./scripts/burgerMenu";
import {ScrollToTop, ToTop} from "./scripts/toTop";


// showMenu(document.querySelector('#burger'));
// showMenu(document.querySelector('#account-burger'));

const accountDropDown = new BurgerMenu(document.querySelector('#account-burger'));
const burgerMenu = new BurgerMenu(document.querySelector('#burger'));
const toTop = new ScrollToTop(document.querySelector('#top'));
toTop.attachEvent();





