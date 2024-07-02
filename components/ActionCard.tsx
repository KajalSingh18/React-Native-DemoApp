import { Image, Linking, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { Component } from 'react'

export class ActionCard extends Component {
  render() {
    const operWebsite=(websiteLink:string)=>{
        Linking.openURL(websiteLink);
    }
    return (
      <View>
        <Text style={styles.headingText}>Blog Card</Text>
        <View style={[styles.card,styles.elevatedCard]}>
        <View style={styles.headingContainer}>
        <Text style={styles.headerText}>Whats new in JavaScript 2021 ES</Text>
        </View>
        <Image source={{uri:"https://wpengine.com/wp-content/uploads/2021/07/jsheader-1024x535.png"}} style={styles.cardImage}/>
        <View style={styles.bodyContainer}>
            <Text numberOfLines={6}>
            The look and feel of a website says as much about a brand, a company, and their goals as the actual content on it. Building a new website is an exciting process, and good designers will take special care to ensure the new site illustrates visually the message an individual or business is trying to convey to their audience. 
            </Text>
        </View>
        <View style={styles.footerContainer}>
        <TouchableOpacity onPress={()=>{operWebsite('https://developer.mozilla.org/en-US/docs/Web/JavaScript')}}><Text style={styles.socialLink}>Read more...</Text></TouchableOpacity>
        <TouchableOpacity onPress={()=>{operWebsite('https://in.linkedin.com/')}}><Text style={styles.socialLink}>Follow me</Text></TouchableOpacity>
        </View>
        </View>
      </View>
    )
  }
}
const styles=StyleSheet.create({
    headingText:{
        marginTop:10,
        fontSize:24,
        fontWeight:'bold',
        paddingHorizontal:8,

    },
    card:{
     marginTop:10,
        height:400,
        borderRadius:8,
        marginBottom:10
    },
    elevatedCard:{
        backgroundColor:'#02CCFE',
        elevation:3,
        shadowOffset:{
            height:1,
            width:1
        },
        shadowColor:'#333',
        shadowOpacity:0.6,
    },
    headingContainer:{
        height:40,
        alignItems:'center',
        justifyContent:'center',
    },
    headerText:{
        fontSize:20,
        fontWeight:'bold'
    },
    cardImage:{
        height:180,
        paddingHorizontal:20,
    },
    bodyContainer:{
        padding:10,
        fontWeight:'300'
    },
    footerContainer:{
        marginTop:10,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-evenly'
    },
    socialLink:{
        backgroundColor:'white',
        paddingHorizontal:15,
        paddingVertical:6,
        borderRadius:8,
        fontSize:15,
        fontWeight:'bold'
    },

})
export default ActionCard