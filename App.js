import React from 'react';
import {View, Button, Text, StyleSheet, Vibration} from 'react-native'

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  work: {
    backgroundColor: 'lightgreen',
  },
  rest: {
    backgroundColor: 'yellow',
  },
  count: {
    fontSize: 25,
    textAlign:'center',
  },
  text :{
    fontSize: 40,
  }
})


class Counter extends React.Component {
    constructor(props) {
    super(props)
    this.state = {
      count: 1500,
      work: true,
    }
  }
  
  componentDidMount() {
      this.interval = setInterval(this.dec, 1000)
  }

  componentWillUnmount() { 
    clearInterval(this.interval)
  }
  
  dec = () => {
    this.setState(prevState => ({
      count: prevState.count -1,
    }))
  }

  render() {
    if (this.state.count < 0 && this.state.work === true) {
      this.setState({count:300, work:false})
      Vibration.vibrate()
      return (
        <View style={styles.rest}>
        <Text style={styles.text}> Rest Time! </Text>
        <Text style={styles.count}> {this.state.count} seconds left </Text> 
        </View>
      )
    }else if (this.state.count < 0 && this.state.work === false) {
      this.setState({count:1500, work:true})
      Vibration.vibrate()
      return (
        <View style={styles.work}>
        <Text style={styles.text}> Work Time! </Text>
        <Text style={styles.count}> {this.state.count} seconds left </Text> 
        </View>
      )
    }else if (this.state.count >= 0 && this.state.work === true) {
    return (
      <View style={styles.work}>
      <Text style={styles.text}> Work Time! </Text>
      <Text style={styles.count}> {this.state.count} seconds left </Text> 
      </View>
    )
    }else{
      return (
        <View style={styles.rest}>
        <Text style={styles.text}> Rest Time! </Text>
        <Text style={styles.count}> {this.state.count} seconds left </Text> 
        </View>
      )
    }
  }
}


export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      showCounter: false,
    }
  }

  workrest = () => this.setState(prevState => ({
    work: !prevState.work,
  }))
  
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