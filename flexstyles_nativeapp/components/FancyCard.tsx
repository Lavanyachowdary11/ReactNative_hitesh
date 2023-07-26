import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function FancyCard() {
  return (
    <View>
      <Text style={styles.headingText}>Trending Places</Text>
      <View style={[styles.card, styles.cardElevated]}>
        <Image 
            source={{uri: 'https://images.unsplash.com/photo-1545652985-5edd365b12eb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dHJla3xlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80'}}
            style={styles.cardImage}
        />
      </View>
      <View style={styles.cardBody}>
        <Text style={styles.cardTitle}>Happy trails</Text>
        <Text style={styles.cardLabel}>Himalayas</Text>
        <Text style={styles.cardDescription}>The Himalayas, or Himalaya, is a mountain range in Asia, separating the plains of the Indian subcontinent from the Tibetan Plateau. The range has some of the Earth's highest peaks, including the very highest, Mount Everest; over 100 peaks exceeding elevations of 7,200 m above sea level lie in the Himalayas.</Text>
        <Text style={styles.cardFooter}>120 Km away</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    headingText: {
        fontSize: 24,
        fontWeight: 'bold',
        paddingHorizontal: 8
    },
    container: {
        padding: 8,
    },
    card: {

    },
    cardElevated: {

    },
    cardImage: {
        height: 180
    },
    cardBody: {

    },
    cardTitle: {

    },
    cardLabel: {

    },
    cardDescription: {

    },
    cardFooter: {
        
    }
})