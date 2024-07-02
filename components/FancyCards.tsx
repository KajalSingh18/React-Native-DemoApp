import { Text, View ,StyleSheet, Image} from 'react-native'
import React, { Component } from 'react'

export class FancyCards extends Component {
  render() {
    return (
      <View>
        <Text style={styles.headingText}>FancyCards</Text>
        <View style={[styles.cards,styles.elevatedCard]}>
        <Image source={{uri:'https://miro.medium.com/v2/resize:fit:640/format:webp/1*fYA-b-KA9UUqPL2OsDYkQw.png'}} style={styles.cardImage}/>
        <View style={styles.cardBody}>
            <Text style={styles.cardTitle}>Hawa Mahal</Text>
            <Text style={styles.cardLabel}>Interesting Facts about Hawa Mahal.
</Text>
            <Text style={styles.cardDiscription}>Hawa Mahal is one of the most famous ancient monuments of “Rajasthan”.
It is located in Jaipur city, capital of the Rajasthan.
“Maharaja Sawai Pratap Singh” built the “Hawa Mahal Palace” in the year 1799.
Hawa Mahal is also known as “Palace of Winds”.</Text>
            <Text style={styles.cardFooter}>Jaipur city, Rajasthan</Text>
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
        paddingHorizontal:8,
        marginBottom:10
    },
    cards:{
        padding:8,
       paddingHorizontal:12,
       borderRadius:8
    },
    elevatedCard:{
        backgroundColor:'#4000ff',
    },
    cardImage:{
        marginTop:10,
        height:180,
        borderRadius:8,
    },
    cardBody:{
        marginLeft:10,
        
    },
    cardTitle:{
        marginTop:10,
        color:'white',
        fontSize:24,
        fontWeight:'bold',
        marginBottom:6
    },
    cardLabel:{
        fontSize:16,
        color:'white',
        marginBottom:4
    },
    cardDiscription:{
        color:'white',
        marginBottom:5
    },
    cardFooter:{
        color:'white',
        marginBottom:10
    }
    })
export default FancyCards