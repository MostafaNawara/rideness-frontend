import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import Helmet from 'react-helmet';
import * as authActions from 'redux/modules/auth';

import Grid from 'react-bootstrap/lib/Grid';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import Input from 'react-bootstrap/lib/Input';
import Button from 'react-bootstrap/lib/Button';
import Panel from 'react-bootstrap/lib/Panel';

const styles = require('./style.scss');

@connect(
  state => ({auth: state.auth}),
  authActions)
export default class Login extends Component {
  static propTypes = {
    auth: PropTypes.object,
    login: PropTypes.func,
    verify: PropTypes.func,
    location: PropTypes.object
  }

  state = {
    phoneNumber: ''
  }

  handleSubmit(event) {
    event.preventDefault();

    const input = this.refs.phoneNumber.refs.input;
    this.props.login(input.value);
    this.setState({phoneNumber: input.value});
    input.value = '';
  }

  handleVerify(event) {
    event.preventDefault();

    const input = this.refs.code.refs.input;
    this.props.verify(input.value, this.state.phoneNumber, this.props.location.query.plan);
    input.value = '';
  }

  renderPlanOnUs() {
    if (this.props.location.query.plan !== '5') return false;

    return (
      <h3>
        Don't worry about paying, we are still in beta and this one is on us! Free for now, but not free forever ;)
      </h3>
    );
  }

  renderLoginLanguage() {
    if (this.props.location.query.plan) {
      return 'Sign up';
    }

    return 'Log in';
  }

  renderPanel() {
    if (this.state.phoneNumber && this.props.auth.awaitingVerification) {
      return (
        <Panel>
          <h3 className={styles.title}>
            <small>
              A code as been sent to {this.state.phoneNumber}
            </small>
          </h3>
          <form className="login-form" onSubmit={this.handleVerify.bind(this)}>
            <Input ref="code" type="text" placeholder="Code..." />
            <Button onClick={this.handleVerify.bind(this)}>
              Verify
            </Button>
          </form>
        </Panel>
      );
    }

    return (
      <Panel>
        <h3 className={styles.title}>
          <small>
            {this.renderLoginLanguage()}
          </small>
        </h3>
        <form className="login-form" onSubmit={this.handleSubmit.bind(this)}>
          <Input ref="phoneNumber" type="text" placeholder="Phone number..." />
          <Button onClick={this.handleSubmit.bind(this)}>
            {this.renderLoginLanguage()}
          </Button>
        </form>
      </Panel>
    );
  }

  render() {
    return (
      <Grid className={`page-container`} fluid>
        <Helmet title="Login"/>
        <Row>
          <Col md={4} mdOffset={4}>
            {this.renderPanel()}
          </Col>
        </Row>
      </Grid>
    );
  }
}
