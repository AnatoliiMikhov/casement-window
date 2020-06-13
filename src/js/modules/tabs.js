"use strict";

const tabs = (
    headerSelector,
    tabSelector,
    contentSelector,
    activeClass,
    animationName,
    animDuration,
    display = "block" ) => {

    const header = document.querySelector( headerSelector ),
        tab = document.querySelectorAll( tabSelector ),
        content = document.querySelectorAll( contentSelector );

    function hideTabContent () {
        content.forEach( ( item ) => {
            item.style.display = "none";
            item.style.animation = "";
            item.classList.remove( animationName );
        } );

        tab.forEach( ( item ) => {
            item.classList.remove( activeClass );
        } );
    }

    function showTabContent ( i = 0 ) {
        content[ i ].style.display = display;
        content[ i ].style.animation = `${ animDuration }s ease-out ${ animationName }`;
        content[ i ].classList.add( animationName );
        tab[ i ].classList.add( activeClass );

    }

    hideTabContent();
    showTabContent();

    header.addEventListener( "click", ( e ) => {
        const target = e.target;
        if ( target &&
            ( target.classList.contains( tabSelector.replace( /\./, "" ) ) ||
                target.parentNode.classList.contains( tabSelector.replace( /\./, "" ) ) )
        ) {
            tab.forEach( ( item, i ) => {
                if ( target === item || target.parentNode === item ) {
                    hideTabContent();
                    showTabContent( i );
                }
            } );
        }
    } );
};

export default tabs;
