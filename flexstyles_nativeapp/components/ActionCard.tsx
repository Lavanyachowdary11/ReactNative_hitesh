import { StyleSheet, Text, View, Linking, Image, TouchableOpacity } from 'react-native'
import React from 'react'

export default function ActionCard() {
    function openWebsite(websiteLink: string){
        Linking.openURL(websiteLink)
    }
  return (
    <View>
      <Text style={styles.headingText}>Blog Card</Text>
      <View style={[styles.card, styles.elevatedCard]}>
        <View style={styles.headingContainer}>
            <Text style={styles.headerText}>
                What's new in city of forts!!
            </Text>
        </View>
        <Image source={{uri: 'https://www.easemytrip.com/travel/img/fort.jpg'}} 
            style={styles.cardImage}
        />
        <View style={styles.bodyContainer}>
            <Text numberOfLines={2}>
                Forts is a 2D real-time strategy video game developed and published by Australian studio EarthWork Games. It was released on April 19, 2017.
            </Text>
        </View>
        <View style={styles.footerContainer}>
            <TouchableOpacity
            onPress={() => openWebsite('https://en.wikipedia.org/wiki/Forts_in_India')}>
                <Text style={styles.socialLinks}>Read More</Text>
            </TouchableOpacity>
            <TouchableOpacity
            onPress={() => openWebsite('https://reactnative.dev/docs/linking')}>
                <Text style={styles.socialLinks}>Learn More</Text>
            </TouchableOpacity>
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
      height: 360,
      borderRadius: 8, 
      marginVertical: 12,
      marginHorizontal: 16
    },
    elevatedCard: {
        backgroundColor: '#E07C24',
        elevation: 3,
        shadowOffset: {
            width: 1,
            height: 1
        },
        shadowColor:'#333',
        shadowOpacity: 0.4
    },
    headingContainer: {
        height: 40,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    headerText:{
        color: "#000000",
        fontSize: 16,
        fontWeight: '600'
    },
    cardImage: {
        height: 190
    },
    bodyContainer: {
        padding: 10
    },
    footerContainer: {
        padding: 8,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-evenly'
    },
    socialLinks: {
        fontSize: 16,
        color: '#000000',
        backgroundColor: '#FFFFFF',
        paddingHorizontal: 20,
        paddingVertical: 6,
        borderRadius: 6
    }
})