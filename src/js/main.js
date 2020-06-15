import "./slider";
import modals from "./modules/modals";
import tabs from "./modules/tabs";
import forms from "./modules/forms";
import { modalState } from './modules/setModalStateDefault';
import changeModalState from './modules/changeModalState';
import timer from './modules/timer';
import images from './modules/images';

window.addEventListener( "DOMContentLoaded", () => {
    "use strict";

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

    timer( ".timer1 .container1", deadline );

    images();
} );
