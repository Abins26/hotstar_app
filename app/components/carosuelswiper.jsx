import React from 'react';
import { View, Text, Image, StyleSheet, Dimensions,ImageBackground } from 'react-native';
import Swiper from 'react-native-swiper';

const { width } = Dimensions.get('window');

const data = [
    { id: 1, url: "https://img10.hotstar.com/image/upload/f_auto,q_90,w_384/sources/r1/cms/prod/9792/1714983119792-v",title:"https://img10.hotstar.com/image/upload/f_auto,h_124/sources/r1/cms/prod/8803/1714809038803-t" },
    { id: 2, url: "https://img10.hotstar.com/image/upload/f_auto,q_90,w_384/sources/r1/cms/prod/8206/1715547198206-v" ,title:""},
    { id: 3, url: "https://img10.hotstar.com/image/upload/f_auto,q_90,w_384/sources/r1/cms/prod/7990/1715946747990-v" ,title:""},
    { id: 4, url: "https://img10.hotstar.com/image/upload/f_auto,q_90,w_384/sources/r1/cms/prod/360/1714634700360-v" ,title:""},
    { id: 5, url: "https://img10.hotstar.com/image/upload/f_auto,q_90,w_256/sources/r1/cms/prod/8095/1715162408095-v" ,title:""},
    { id: 6, url: "https://img10.hotstar.com/image/upload/f_auto,q_90,w_256/sources/r1/cms/prod/3108/1715106463108-v" ,title:""}
];

const CarouselComponent = () => {
  return (
    <Swiper style={styles.wrapper} showsButtons={false} autoplay loop dotColor='gray' activeDotColor='white' >
      {data.map((item, index) => (
        <View style={styles.slide} key={index}>
          <ImageBackground source={{ uri: item.url }} style={styles.image} />

          <Image source={item.title} style={styles.titleimage}/>
        </View>
      ))}
    </Swiper>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    // height: 250,
    
  },
  slide: {
    flex: 1,
    // justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black',
    height:400
  },
  image: {
    width: width ,
    height: 310,
    borderRadius: 8,
  },
  titleimage: {
    // color: '#fff',
    position:"absolute",
    height:100,
    width:280,
    textAlign: 'center',
    marginTop: 280,
  },
});

export default CarouselComponent;




 