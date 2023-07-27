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
      <View style={styles.cardBody}>
        <Text style={styles.cardTitle}>Happy trails</Text>
        <Text style={styles.cardLabel}>Himalayas</Text>
        <Text style={styles.cardDescription}>The Himalayas, or Himalaya, is a mountain range in Asia, separating the plains of the Indian subcontinent from the Tibetan Plateau. The range has some of the Earth's highest peaks, including the very highest, Mount Everest; over 100 peaks exceeding elevations of 7,200 m above sea level lie in the Himalayas.</Text>
        <Text style={styles.cardFooter}>120 Km away</Text>
      </View>
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
    card: {
      width: 350,
      height: 380,
      borderRadius: 8, 
      marginVertical: 12,
      marginHorizontal: 16
    },
    cardElevated: {
      backgroundColor: '#FFFFFF',
      elevation: 3,
      shadowOffset: {
        width:1,
        height:1
      }
    },
    cardImage: {
        height: 180,
        marginBottom: 8,
        borderTopLeftRadius: 6,
        borderTopRightRadius: 6
    },
    cardBody: {
      flex:1,
      flexGrow: 1,
      paddingHorizontal: 12
    },
    cardTitle: {
      color: '#000000',
      fontSize: 22,
      fontWeight: 'bold',
      marginBottom: 6
    },
    cardLabel: {
      color: '#000000',
      fontSize: 14,
      marginBottom: 6
    },
    cardDescription: {
      color: '#242B2E',
      fontSize: 12,
      marginBottom: 12,
      marginTop: 6,
      flexShrink: 1
    },
    cardFooter: {
      color: '#000000'
    }
})