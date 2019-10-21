import React from 'react';
import {View, Text, Platform} from 'react-native';

import './example';
import {useDarkModeContext} from 'react-native-dark-mode';
import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';

class HomeScreen extends React.Component {
  static navigationOptions = ({theme}) => {
    return {
      headerStyle: {
        marginTop: Platform.OS === 'ios' ? 3 : 0,
        backgroundColor: theme === 'dark' ? '#000' : '#FFF', //** Here the change only works once.
      },
    };
  };
  render() {
    return (
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Text>Home Screen</Text>
      </View>
    );
  }
}

const AppNavigator = createStackNavigator({
  Home: {
    screen: HomeScreen,
  },
});

const Container = createAppContainer(AppNavigator);
const App = () => {
  const mode = useDarkModeContext();
  return <Container theme={mode} />;
};

export default App;
