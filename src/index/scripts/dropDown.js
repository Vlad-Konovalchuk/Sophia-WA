function dropDownMenu(el) {
    const Eltitle = el.querySelector('.dropdown__title');
    let stateDropDown = el.classList.contains('opened');

    function close() {
        stateDropDown = false;
        el.classList.remove('opened');
        document.removeEventListener('click', close);
    }

    function open() {
        stateDropDown = true;
        el.classList.add('opened');
        document.addEventListener('click',  close);

    }

    function toggle(e){
        e.stopPropagation();

        if (stateDropDown) {
            close();
            setContent(e.target.textContent)
        } else {
            open();
        }
    }
    
    function setContent(text) {
        Eltitle.textContent = text;
    }

    el.addEventListener('click', (e) => {
        toggle(e)
    });
    el.addEventListener('keypress', (e) => {
        if (e.keyCode === 13) {
            toggle(e)
        }
    });



}


dropDownMenu(document.querySelector('#dropDownMenu'));