import React, { Component } from 'react';
import { View, Text, TextInput, Button } from 'react-native';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      num1: '',
      num2: '',
      result: ''
    };
  }

  handleCalculate = (operator) => {
    let num1 = parseFloat(this.state.num1);
    let num2 = parseFloat(this.state.num2);

    let result = 0;
    switch (operator) {
      case '+':
        result = num1 + num2;
        break;
      case '-':
        result = num1 - num2;
        break;
      case '*':
        result = num1 * num2;
        break;
      case '/':
        result = num2 !== 0 ? num1 / num2 : 'Divide by 0 Error';
        break;
    }
    this.setState({ result });
  }

  render() {
    return (
      <View style={{ padding: 50 }}>
        <TextInput
          keyboardType='numeric'
          style={{ height: 80 }}
          placeholder="Enter first number"
          onChangeText={num1 => this.setState({ num1 })}
          value={this.state.num1.toString()} 
        />

        <TextInput
          keyboardType='numeric'
          style={{ height: 80 }}
          placeholder="Enter second number"
          onChangeText={num2 => this.setState({ num2 })}
          value={this.state.num2.toString()} 
        />

        <Button title='+' onPress={() => this.handleCalculate('+')} />
        <Button title='-' onPress={() => this.handleCalculate('-')} />
        <Button title='*' onPress={() => this.handleCalculate('*')} />
        <Button title='/' onPress={() => this.handleCalculate('/')} />

        <Text style={{ padding: 10, fontSize: 24 }}>
          Result: {this.state.result}
        </Text>
      </View>
    );
  }
}

export default App;