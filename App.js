import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const App = () => {
  return(
    <View style= {styles.mainbody}>
              <View style={styles.firstChild}/>  
              <View style={styles.SecondChild}/>  
              <View style={styles.ThirdChild}/>  
    </View>
    
    );
}
const styles = StyleSheet.create({
  mainbody: {
    flex: 1, 
    flexDirection: 'column-reverse',
    alignItems: 'center',
    justifyContent: 'center'

  },
  firstChild: {
        flex: 6,
        width: 50,
        height: 50,
        backgroundColor: 'blue'
  },
  SecondChild: {
    flex: 6,
    width:50,
    height: 50,
    backgroundColor: 'red'
  },
  ThirdChild: {
    flex: 6,
    width:50,
    height: 50,
    backgroundColor: 'black'
  }
})


export default App;