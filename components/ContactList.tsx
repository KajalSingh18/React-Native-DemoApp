import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function ContactList() {
    const contacts = [
        {
          uid: 1,
          name: "Alice Smith",
          status: "active",
          imageUrl: "https://d38b044pevnwc9.cloudfront.net/cutout-nuxt/enhancer/4.jpg"
        },
        {
          uid: 2,
          name: "Bob Johnson",
          status: "inactive",
          imageUrl: "https://d38b044pevnwc9.cloudfront.net/cutout-nuxt/enhancer/5.jpg"
        },
        {
          uid: 3,
          name: "Charlie Davis",
          status: "active",
          imageUrl: "https://d38b044pevnwc9.cloudfront.net/cutout-nuxt/enhancer/1.jpg"
        },
        {
          uid: 4,
          name: "Dana Lee",
          status: "active",
          imageUrl: "https://d38b044pevnwc9.cloudfront.net/cutout-nuxt/enhancer/1.jpg"
        },
        {
          uid: 5,
          name: "Eli Brown",
          status: "inactive",
          imageUrl: "https://d38b044pevnwc9.cloudfront.net/cutout-nuxt/enhancer/5.jpg"
        }
      ];
      
  return (
    <View>
      <Text style={styles.headerText}>ContactList</Text>
      <ScrollView style={styles.container} scrollEnabled={false}>
        {contacts.map((curEle,index)=>(
            <View key={curEle.uid} style={styles.userCard}>
                <Image source={{uri:curEle.imageUrl}} style={styles.userImage}/>
                <View>
                <Text style={styles.userName}>{curEle.name}</Text>
                <Text style={styles.userStatus}>{curEle.status}</Text>
                </View>
            </View>
        ))}
      </ScrollView>
      
    </View>
  )
}

const styles = StyleSheet.create({
    headerText:{
        marginVertical:10,
        fontSize:24,
        fontWeight:'bold',
        paddingHorizontal:8,

    },
    container:{paddingHorizontal:16,
        marginBottom:4
    },
    userCard:{
        flex:1,
        flexDirection:'row',
        alignItems:'center',
        backgroundColor:'blue',
        marginBottom:10,
        borderRadius:10
    },
    userImage:{
        height:60,
        width:60,
        borderRadius:50,
        marginRight:20
    },
    userName:{
        fontSize:16,
        fontWeight:'bold',
        color:'#000'
    },
    userStatus:{
        fontSize:12,
    }
})