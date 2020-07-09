import React, { Component } from 'react';
import { ScrollView, Text, TouchableOpacity } from 'react-native';

import { getAllDitties } from '../../actions/dittiesActions';

import { connect } from 'react-redux';
import { styles } from '../../styles/styles';

class Dashboard extends Component {

    componentDidMount() {
        this.props.dispatch(getAllDitties())
    }

    render() {
        if (this.props.ditties) {
            console.log(this.props.ditties)
        }

        return (
            <ScrollView style={{ flex: 1, marginTop: 100 }}>
                <Text style={styles.header}>Dashboard</Text>
                { this.props.ditties ? <Text>Hi {this.props.ditties.firstName}!</Text> : null }

                { this.props.ditties.ditties ? this.props.ditties.ditties.map(ditty => (
                    <TouchableOpacity style={styles.songButton}>
                        <Text>{ditty.title}</Text>
                    </TouchableOpacity>)) 
                : null }
            </ScrollView>
        )
    }
}

const mapStateToProps = state => ({
    ditties: state.ditties.ditties
  });

export default connect(mapStateToProps)(Dashboard);