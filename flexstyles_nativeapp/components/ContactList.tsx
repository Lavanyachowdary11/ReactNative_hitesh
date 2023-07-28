import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function ContactList() {
    const contacts = [
        {
            uid: 1,
            name: 'Manoj',
            status: 'CFO of the Applicatin',
            imageUrl: 'https://books.forbes.com/wp-content/uploads/2022/10/writing-book-e1666892460806.jpg'
        },
        {
            uid: 2,
            name: 'Sai',
            status: 'Manager of the Application',
            imageUrl: 'https://books.forbes.com/wp-content/uploads/2022/10/writing-book-e1666892460806.jpg'
        },
        {
            uid: 3,
            name: 'Phani',
            status: 'Manager of the Payments',
            imageUrl: 'https://books.forbes.com/wp-content/uploads/2022/10/writing-book-e1666892460806.jpg'
        },
        {
            uid: 4,
            name: 'Deepthi',
            status: 'Payments Tracker of the Application',
            imageUrl: 'https://books.forbes.com/wp-content/uploads/2022/10/writing-book-e1666892460806.jpg'
        }
    ]
  return (
    <View>
      <Text style={styles.headingText}>ContactList</Text>
      <ScrollView
        style={styles.container}
        scrollEnabled={false}
      >
        {contacts.map(({uid, name, status, imageUrl}) => (
            <View key={uid} style={styles.userCard}>
                <Image source={{uri: imageUrl}} style={styles.userImage} />
                <View>
                    <Text style={styles.userName}>{name}</Text>
                    <Text style={styles.userStatus}>{status}</Text>
                </View>
            </View>
        ))}
      </ScrollView>
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
        paddingHorizontal: 16,
        marginBottom: 4
    }, 
    userCard: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 3,
        backgroundColor: '#8D3DAF',
        padding: 4,
        borderRadius: 10
    },
    userImage: {
        width: 60,
        height: 60,
        borderRadius: 60 / 2,
        marginRight: 14
    },
    userName: {
        fontSize: 16,
        fontWeight: '600',
        color: '#FFFFFF'
    },
    userStatus: {
        fontSize: 12,
    }
})