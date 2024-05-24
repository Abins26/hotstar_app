import { View, Text,StyleSheet, ScrollView,Image } from 'react-native'
import React from 'react'

const Popularlaguages = () => {
    const languages =[
        {url:"https://img10.hotstar.com/image/upload/f_auto,q_90,w_1920/sources/r1/cms/prod/6661/1526661-a-00b818b5bc0e"},
        {url:"https://img10.hotstar.com/image/upload/f_auto,q_90,w_1920/sources/r1/cms/prod/6660/1526660-a-afdd1ecfd8ae"},
        {url:"https://img10.hotstar.com/image/upload/f_auto,q_90,w_1920/sources/r1/cms/prod/6682/1526682-a-fd4e220ba563"},
        {url:"https://img10.hotstar.com/image/upload/f_auto,q_90,w_1920/sources/r1/cms/prod/6685/1526685-a-5f5995a53f61"},
        {url:"https://img10.hotstar.com/image/upload/f_auto,q_90,w_1920/sources/r1/cms/prod/6672/1526672-a-eafe6913c6c8"},
        {url:"https://img10.hotstar.com/image/upload/f_auto,q_90,w_1920/sources/r1/cms/prod/6659/1526659-a-7271cf19114e"},

    ];
  return (
      <View style={styles.container}>

          <Text style={styles.cardHeading}>Popular Languages</Text>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={styles.cardContainer}>
          
              {languages.map((item, index) => (
                  <View key={index} style={styles.imagediv}>
                      <Image source={{ uri: item.url }} style={styles.image} />
                  </View>
              ))}

          </ScrollView>
      </View>
  )
}
const styles = StyleSheet.create({
    container: {
        // flex: 1,
        backgroundColor: 'black',
        height: "auto",
        width: '100%',
      },
      cardContainer:{
        // width:"100%",
        height:100
      },
      cardHeading: {
        fontSize: 16,
        fontWeight: "600",
        paddingHorizontal: 5,
        width: 200,
        color: "white",
        // backgroundColor: "skyblue"
      },
imagediv:{
    display: "flex",
padding:4,
    height:90,
    width:190,
},
image:{
    height:"100%",
    width:"100%"
},
})
export default Popularlaguages;