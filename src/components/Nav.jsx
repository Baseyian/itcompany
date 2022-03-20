import React from 'react';
const Nav = () => {
    return ( 
        <header className="u-clearfix u-header u-palette-2-base u-header" id="sec-2485"><div className="u-clearfix u-sheet u-valign-middle u-sheet-1">
      <a href="/" className="u-image u-logo u-image-1">
        <img src="images/logo.png" style={{width:"120px" , marginTop:10}} className="u-logo-image u-logo-image-1" />
      </a>
      <nav className="u-menu u-menu-dropdown u-offcanvas u-menu-1" data-responsive-from="XL">
        <div className="menu-collapse" style={{fontSize: '1rem', letterSpacing: 0, fontWeight: 700, textTransform: 'uppercase'}}>
          <a className="u-button-style u-custom-active-border-color u-custom-border u-custom-border-color u-custom-borders u-custom-hover-border-color u-custom-left-right-menu-spacing u-custom-padding-bottom u-custom-text-color u-custom-text-hover-color u-custom-top-bottom-menu-spacing u-nav-link u-text-active-palette-1-base u-text-hover-palette-2-base u-text-white" href="#">
            <svg>
            <use href="#menu-hamburger" /></svg>
            <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink"><defs><symbol id="menu-hamburger" viewBox="0 0 16 16" style={{width: 16, height: 16}}><rect y={1} width={16} height={2} /><rect y={7} width={16} height={2} /><rect y={13} width={16} height={2} />
                </symbol>
              </defs></svg>
          </a>
        </div>
        <div className="u-custom-menu u-nav-container" wfd-invisible="true">
          <ul className="u-nav u-spacing-30 u-unstyled u-nav-1"><li className="u-nav-item"><a className="u-border-2 u-border-active-palette-1-base u-border-hover-palette-1-base u-border-no-left u-border-no-right u-border-no-top u-button-style u-nav-link u-text-active-palette-1-base u-text-grey-90 u-text-hover-grey-90" href="/Page-1.html" data-page-id={283136} style={{padding: '10px 0px'}}>Page 1</a>
            </li></ul>
        </div>
        <div className="u-custom-menu u-nav-container-collapse">
          <div className="u-black u-container-style u-inner-container-layout u-opacity u-opacity-95 u-sidenav">
            <div className="u-inner-container-layout u-sidenav-overflow">
              <div className="u-menu-close" />
              <ul className="u-align-center u-nav u-popupmenu-items u-unstyled u-nav-2"><li className="u-nav-item"><a className="u-button-style u-nav-link" href="/Page-1.html" data-page-id={283136} style={{padding: '10px 20px'}}>Page 1</a>
                </li></ul>
            </div>
          </div>
          <div className="u-black u-menu-overlay u-opacity u-opacity-70" wfd-invisible="true" />
        </div>
      </nav>
    </div>
    </header>
     );
}
 
export default Nav;