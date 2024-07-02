import { View, Text ,StyleSheet, ScrollView} from 'react-native'
import React from 'react'

const ElevatedCards = () => {
  return (
    <View>
      <Text style={styles.headingText}>Elevated Cards</Text>
      <ScrollView horizontal={true} style={styles.container}>
       
            <View style={[styles.card,styles.elevateCard]}>
                <Text>ViewOne</Text>
            </View>
            <View style={[styles.card,styles.elevateCard]}>
                <Text>ViewOne</Text>
            </View>
            <View style={[styles.card,styles.elevateCard]}>
                <Text>ViewOne</Text>
            </View>
            <View style={[styles.card,styles.elevateCard]}>
                <Text>ViewOne</Text>
            </View>
            <View style={[styles.card,styles.elevateCard]}>
                <Text>ViewOne</Text>
            </View>
      </ScrollView>
    </View>
  )
}
const styles=StyleSheet.create({
    headingText:{
        fontSize:24,
        fontWeight:'bold',
        paddingHorizontal:8
    },
    container:{
    padding:8
    },
    card:{
        width:100,
        height:100,
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        borderRadius:4,
        margin:8
    },
    elevateCard:{
        backgroundColor:'#cadfe2',
        elevation:4, 
        shadowOffset:{
            height:1,
            width:1
        },
        shadowColor:"#333",
        shadowRadius:2,
        shadowOpacity:0.4,

    }
    })
export default ElevatedCards