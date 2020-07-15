import React from 'react';
import {View, Button, Text, StyleSheet} from 'react-native'
import Counter from './counter'

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  }
})

export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      showCounter: false,
    }
  }
  
  toggleCounter = () => this.setState(prevState => ({
    showCounter: !prevState.showCounter,
  }))

  render() {
    if (this.state.showCounter) {
      return (
        <View style={styles.appContainer}>
          <Counter />
          <Text>{"\n"}</Text>
          <Button title="Stop Timer" onPress={this.toggleCounter} />
        </View>
      )
    } else {
      return (
        <View style={styles.appContainer}>
          <Text style={{fontSize:30}}> Pomodoro Timer </Text>
          <Text style={{fontSize:15}}> ~ 25 mins work, 5 mins rest ~ </Text>
          <Text>{"\n"}</Text>
          <Button title="Start Timer" onPress={this.toggleCounter} />
        </View>
      )
    }
  }
}
