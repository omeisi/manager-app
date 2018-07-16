import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ListView, View, Text } from 'react-native';
import { eployeesFetch } from '../actions';

class EmployeeList extends Component {
  componentWillMount() {
    this.props.eployeesFetch();

    this.createDateSource(this.props);
  }

  componentWillReceiveProps(nextProps) {
    this.createDateSource(nextProps);
  }

  createDateSource({ employees }) {
      const ds = new ListView.DataSource({
        rowHasChanged: (r1, r2) => r1 !== r2
      });

      this.dataSource = ds.cloneWithRows(employees);
  }


  render() {
    return (
      <View>
        <Text>potsie mootsie</Text>
        <Text>potsie mootsie</Text>
        <Text>potsie mootsie</Text>
        <Text>potsie mootsie</Text>
        <Text>potsie mootsie</Text>
      </View>
    );
  }
}

mapStateToProps(){

};

export default connect(null, { eployeesFetch })(EmployeeList);
