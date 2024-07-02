import { Text, View ,StyleSheet, ScrollView} from 'react-native'
import React, { Component } from 'react'

export class FlatCards extends Component {
  render() {
    return (
      <View>
        <Text style={styles.headingText}>Flat Cards</Text>
      <View style={styles.container}>
        <View style={[styles.card, styles.cardOne]}>
            <Text>Red</Text>
        </View>
        <View style={[styles.card, styles.cardTwo]}>
            <Text>Green</Text>
        </View>
        <View style={[styles.card, styles.cardThree]}>
            <Text>Blue</Text>
        </View>
        <View style={[styles.card, styles.cardFour]}>
            <Text>Sky Blue</Text>
        </View>
        <View style={[styles.card, styles.cardFour]}>
            <Text>Sky Blue</Text>
        </View>
        <View style={[styles.card, styles.cardFour]}>
            <Text>Sky Blue</Text>
        </View>
      </View>
      </View>
    )
  }
}
const styles=StyleSheet.create({
headingText:{
    fontSize:24,
    fontWeight:'bold',
    paddingHorizontal:8
},
container:{
flex:1,
flexDirection:'row',
flexWrap:'wrap',
padding:8
},
card:{
    width:100,
    height:100,
    // flex:1,
    
    justifyContent:'center',
    alignItems:'center',
    
    borderRadius:4,
    margin:8
},
cardOne:{
    backgroundColor:'red', 
},
cardTwo:{
    backgroundColor:'green',
},
cardThree:{
    backgroundColor:'blue',
},
cardFour:{
    backgroundColor:'skyblue'
}
})
export default FlatCards