import React from 'react';

import Toolbar from './components/Toolbar/Toolbar'
import SideDrawer from './components/SideDrawer/SideDrawer';
import Backdrop from './components/Backdrop/Backdrop';

class App extends React.Component  {
  state = {
    SideDrawerOpen: false
  }
  drawerToggleClickHandler = () =>{
    this.setState((prevState) => {
      return {SideDrawerOpen: !prevState.SideDrawerOpen}
    })
  };
  render() {
    return (
      <div className="App" style={{height: "100%"}}>
        <Toolbar />
        <SideDrawer />
        <Backdrop />
        <main style={{marginTop: '64px'}}>
          <p>This is the main content</p>
        </main>
      </div>
    );
  }

}

export default App;
