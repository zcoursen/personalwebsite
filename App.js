
import React, { Component }from 'react';
import {
  BrowserRouter,
  Route,
  Switch
} from 'react-router-dom';
import Sticky from 'react-stickynode';
import Home from './Home'
import About from './About'
import Contact from './Contact'
import Resume from './Resume/Resume'
import NotFound from './NotFound'
import Toolbar from './ToolBar/Toolbar'
import SideDrawer from './Side Drawer/SideDrawer';
import BackDrop from './BackDrop/BackDrop';


class App extends Component {
  
  state = {
    sideDrawerOpen: false
  };

  drawerToggleClickHandler = () => {
    this.setState((prevState) => {
      return {sideDrawerOpen: !prevState.sideDrawerOpen};
    });
  };

  backdropClickHandler = () => {
    this.setState({sideDrawerOpen: false});
  }
  
  render() {
    let backdrop;

    if(this.state.sideDrawerOpen) {
      backdrop = <BackDrop click={this.backdropClickHandler}/>
    }

  return (
    <BrowserRouter>
      <div className="container">
        <div className="toolbar" >
          <Sticky enabled={true} bottomBoundary={1200} >
            <Toolbar drawerclickHandler={this.drawerToggleClickHandler }/>
          </Sticky>
          <SideDrawer show={ this.state.sideDrawerOpen } />
          {backdrop}
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route path="/about" render={ () => <About title='About' /> }/>
            <Route path="/resume" component={Resume}/>
            <Route exact path="/contact" component={Contact}/>
            <Route path="/about" component={About}/>
            <Route component={NotFound} />
          </Switch>
      </div>
    </div>
  </BrowserRouter>
    )
  }
};

export default App;
