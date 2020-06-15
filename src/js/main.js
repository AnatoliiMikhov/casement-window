import "./slider";
import modals from "./modules/modals";
import tabs from "./modules/tabs";
import forms from "./modules/forms";
import changeModalState from './modules/changeModalState';
import timer from './modules/timer';

window.addEventListener( "DOMContentLoaded", () => {
    "use strict";

    const modalState = {
        form: 0,
        type: "tree",
        width: "",
        height: "",
        profile: "Тёплое"
    };

    const deadline = "2020-12-31T24:00:00";

    changeModalState( modalState );

    modals();

    tabs( ".glazing_slider",
        ".glazing_block",
        ".glazing_content",
        "active",
        "fadeInDown",
        0.8
    );

    tabs( ".decoration_slider",
        ".no_click",
        ".decoration_content > div > div",
        "after_click",
        "fadeInRight",
        0.8
    );

    tabs( ".balcon_icons",
        ".balcon_icons_img",
        ".big_img > img",
        "do_image_more",
        "fadeIn",
        0.8,
        "inline-block"
    );

    forms( modalState );

    timer(".timer1 .container1", deadline);
} );
