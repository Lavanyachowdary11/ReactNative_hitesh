import { View, Text, SafeAreaView, ScrollView } from 'react-native'
import React from 'react'
import FlatCards from './components/FlatCards'
import ElevatedCrads from './components/ElevatedCrads'
import FancyCard from './components/FancyCard'
import ActionCard from './components/ActionCard'

const App = () => {
  return (
    <SafeAreaView>
      <ScrollView>
          <FlatCards />
          <ElevatedCrads />
          <FancyCard />
          <ActionCard />
      </ScrollView>
    </SafeAreaView>
  )
}

export default App