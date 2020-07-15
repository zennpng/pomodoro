import React from 'react'
import {View, Text, Vibration, StyleSheet} from 'react-native'

const styles = StyleSheet.create({
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

export default Counter;