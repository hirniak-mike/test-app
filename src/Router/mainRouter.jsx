import React from 'react'
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';

import { ALL_PRODUCTS, PRODUCT_ITEM } from '../Res/Consts/routerUrl';
import { BasicPage, AllProducts, Product, NotFound } from '../Pages';

const MainRouter = () => {
  return (
    <Router>
      <Switch>
        <Route exact path={ALL_PRODUCTS} render={() => <BasicPage><AllProducts /></BasicPage>} />
        <Route exact path={`${PRODUCT_ITEM}:id`} render={() => <BasicPage><Product /></BasicPage>} />
        <Route exact path='/' >
          <Redirect to={ALL_PRODUCTS} />
        </Route>
        <Route path='*' exact render={() => <BasicPage><NotFound /></BasicPage >} />
      </Switch>
    </Router>
  )
}

export default MainRouter;
