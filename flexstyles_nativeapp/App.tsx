import { View, Text, SafeAreaView, ScrollView } from 'react-native'
import React from 'react'
import FlatCards from './components/FlatCards'
import ElevatedCrads from './components/ElevatedCrads'
import FancyCard from './components/FancyCard'

const App = () => {
  return (
    <SafeAreaView>
      <ScrollView>
          <FlatCards />
          <ElevatedCrads />
          <FancyCard />
      </ScrollView>
    </SafeAreaView>
  )
}

export default App