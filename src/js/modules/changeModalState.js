"use strict";

import checkNumInputs from "./checkNumInputs";

const changeModalState = ( state ) => {
	const windowForm = document.querySelectorAll( ".balcon_icons_img" ),
		windowWidth = document.querySelectorAll( "#width" ),
		windowHeight = document.querySelectorAll( "#height" ),
		windowType = document.querySelectorAll( "#view_type" ),
		windowProfile = document.querySelectorAll( ".checkbox" ),
		onwardBtn = document.querySelectorAll( "[data-onward]" );

	onwardBtn.forEach( ( btn ) => ( btn.disabled = true ) );

	windowProfile.forEach( ( box, i ) => {
		i == 1 ? ( box.checked = true ) : ""; // jshint ignore:line
	} );

	checkNumInputs( "#width" );
	checkNumInputs( "#height" );

	function bindActionToElems ( event, elem, prop ) {
		elem.forEach( ( item, i ) => {
			item.addEventListener( event, () => {
				switch ( item.nodeName ) {
					case "SPAN":
						state[ prop ] = i;
						break;
					case "INPUT":
						if ( item.getAttribute( "type" ) === "checkbox" ) {
							i === 0 ? ( state[ prop ] = "Холодное" ) : ( state[ prop ] = "Тёплое" ); // jshint ignore:line
							elem.forEach( ( box, j ) => {
								box.checked = false;
								if ( i == j ) {
									box.checked = true;
								}
							} );
						} else {
							onwardBtn.forEach( ( btn ) => {
								if ( item.value > 0 || item.value != "" ) {
									state[ prop ] = item.value.replace( /\D/, "" );
									btn.disabled = false;
								}
							} );
						}
						break;
					case "SELECT":
						state[ prop ] = item.value;
						break;
				}
				console.log( state );
			} );
		} );
	}

	bindActionToElems( "click", windowForm, "form" );
	bindActionToElems( "input", windowWidth, "width" );
	bindActionToElems( "input", windowHeight, "height" );
	bindActionToElems( "change", windowType, "type" );
	bindActionToElems( "change", windowProfile, "profile" );
};

export default changeModalState;
