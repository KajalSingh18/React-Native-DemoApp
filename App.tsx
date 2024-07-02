import { View, Text, StyleSheet, ScrollView, SafeAreaView } from 'react-native'
import React from 'react'
import FlatCards from './components/FlatCards'
import ElevatedCards from './components/ElevatedCards'
import FancyCards from './components/FancyCards'
import ActionCard from './components/ActionCard'
import ContactList from './components/ContactList'

const App = () => {
  return (
    <SafeAreaView>
      <ScrollView>
        <FlatCards/>
        <ElevatedCards/>
        <FancyCards/>
        <ContactList/>
        <ActionCard/>
      </ScrollView>
    </SafeAreaView>
  )
}
const styles=StyleSheet.create({

})
export default App