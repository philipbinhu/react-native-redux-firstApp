import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { TabNavigator } from 'react-navigation';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 30,
    textAlign: 'center',
    margin: 10,
  },
    tabinfo: {
        fontSize: 15,
        textAlign: 'center',
        margin: 10,
    },
});

const OneScreen = () => (
  <View style={styles.container}>
    <Text style={styles.welcome}>
      This is the first Screen.
    </Text>
      <Text style={styles.tabinfo}>
          Press the bottom tab switch to other page.
      </Text>
  </View>
)

const TwoScreen = () => (
  <View style={styles.container}>
    <Text style={styles.welcome}>
        This is the second Screen.
    </Text>
  </View>
)

const ThreeScreen = () => (
  <View style={styles.container}>
    <Text style={styles.welcome}>
        This is the third Screen.
    </Text>
  </View>
)

const FourScreen = () => (
  <View style={styles.container}>
    <Text style={styles.welcome}>
        This is the fourth Screen.
    </Text>
  </View>
)

const ProfileScreen = TabNavigator({
  One: {screen: OneScreen},
  Two: {screen: TwoScreen},
  Three: {screen: ThreeScreen},
  Four: {screen: FourScreen}
})

ProfileScreen.navigationOptions = {
  title: 'Profile Screen',
};

export default ProfileScreen;
