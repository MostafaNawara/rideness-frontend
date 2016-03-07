import React, { Component } from 'react';
import {connect} from 'react-redux';
import Helmet from 'react-helmet';
import * as authActions from 'redux/modules/auth';

import Grid from 'react-bootstrap/lib/Grid';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import Input from 'react-bootstrap/lib/Input';
import Button from 'react-bootstrap/lib/Button';
import Panel from 'react-bootstrap/lib/Panel';

@connect(
  state => ({user: state.auth.user}),
  authActions)
export default class Signup extends Component {
  static propTypes = {
    user: PropTypes.object,
    login: PropTypes.func
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const input = this.refs.phoneNumber;
    this.props.login(input.value);
    input.value = '';
  }

  renderPlanOnUs() {
    if (this.props.params.plan !== '5') return false;

    return (
      <h3>
        Don't worry about paying, we are still in beta and this one is on us! Free for now, but not free forever ;)
      </h3>
    );
  }

  render() {
    const styles = require('../Login/style.scss');

    return (
      <Grid className={`page-container`} fluid>
        <Helmet title="Login"/>
        <Row>
          <Col md={4} mdOffset={4}>
            <Panel>
              <h3 className={styles.title}>
                <small>
                  Sign up
                </small>
              </h3>
              <form className="login-form" onSubmit={this.handleSubmit}>
                {this.renderPlanOnUs()}
                <Input ref="phoneNumber" type="text" placeholder="Phone number..." />
                <Button onClick={this.handleSubmit}>
                  Sign up
                </Button>
              </form>
            </Panel>
          </Col>
        </Row>
      </Grid>
    );
  }
}
