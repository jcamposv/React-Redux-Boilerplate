import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import injectSheet from 'react-jss';
import { connect } from 'react-redux';

// Styles
import styles from './styles';

// Reducers
import { login } from '../../reducers/user';

type Props = {
  classes: Object,
  actions: Object,
  user: Object,
};

function mapStateToProps(state: Object): Object {
  return state;
}

function mapDispatchToProps(dispatch: Object) {
  return {
    actions: bindActionCreators({
      login,
    }, dispatch),
  };
}


class Home extends Component<Props, void> {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
    };
  }

  componentWillReceiveProps(nextProps: Object) {
    if (this.props.user.name !== nextProps.user.name) {
      this.setState({ name: nextProps.user.name });
    }
  }

  props: Props


  render() {
    const { classes, actions: { login: actionLogin } } = this.props;

    return (
      <div className={classes.home}>
        { this.state.name }
        <button onClick={actionLogin}>Login</button>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(injectSheet(styles)(Home));
