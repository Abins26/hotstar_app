import React from 'react';
import { View, Text, Image, StyleSheet, Dimensions,ImageBackground, Pressable } from 'react-native';
import Swiper from 'react-native-swiper';
import { TouchableWithoutFeedback } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const { width } = Dimensions.get('window');
const data = [
    { id: 1, url: "https://img10.hotstar.com/image/upload/f_auto,q_90,w_384/sources/r1/cms/prod/9792/1714983119792-v",title:"https://img10.hotstar.com/image/upload/f_auto,h_124/sources/r1/cms/prod/8803/1714809038803-t" },
    { id: 2, url: "https://img10.hotstar.com/image/upload/f_auto,q_90,w_384/sources/r1/cms/prod/8206/1715547198206-v" ,title:"https://img10.hotstar.com/image/upload/f_auto,h_124/sources/r1/cms/prod/3461/1715546943461-t"},
    { id: 3, url: "https://img10.hotstar.com/image/upload/f_auto,q_90,w_384/sources/r1/cms/prod/7990/1715946747990-v" ,title:"https://img10.hotstar.com/image/upload/f_auto,h_124/sources/r1/cms/prod/9300/1716380909300-t"},
    { id: 4, url: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcR7EEdWcA3O6n_glgen-awuDtSESppEmrSp2aYWfKVoTeI9CAOP" ,title:"https://img10.hotstar.com/image/upload/f_auto,h_124/sources/r1/cms/prod/2880/1714634712880-t"},
    { id: 5, url: "https://img10.hotstar.com/image/upload/f_auto,q_90,w_256/sources/r1/cms/prod/8095/1715162408095-v" ,title:"https://img10.hotstar.com/image/upload/f_auto,h_124/sources/r1/cms/prod/5019/1715665255019-t"},
];

const CarouselComponent = () => {
  return (
    <Swiper style={styles.wrapper} showsButtons={false} autoplay loop dotColor='gray' activeDotColor='white' >
      {data.map((item, index) => (
        <View style={styles.slide} key={index}>
          <ImageBackground source={{ uri: item.url }} style={styles.image} />

          <Image source={{ uri: item.title }} style={styles.titleimage} />
        
         <View>
            <Text style={styles.smalltext}>Action • Drama • Comedy • Family</Text>
          </View>
          <View style={styles.buttonssubplus}>
            <TouchableWithoutFeedback style={styles.buttons}>
              <View style={styles.buttontext}>
                <Text style={styles.buttontextsub}> <Icon name="caret-forward" size={22} color="white" />Subscribe</Text>
              </View>
            </TouchableWithoutFeedback>
            <Pressable style={styles.plusbutton}>
              <Text style={styles.plusbuttontext}>+</Text>
            </Pressable>
          </View>
        </View>
      ))}
    </Swiper>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    // height: 450,
  },
  slide: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'black',
    // justifyContent: 'center',
    // height:400
  },
  image: {
    width: width ,
    height: 310,
    borderRadius: 8,
  },
  titleimage: {
    position:"absolute",
    height:100,
    width:330,
    resizeMode:"cover",
    marginTop: 200,
    // textAlign: 'center',
    // color: '#fff',
  },
  buttonssubplus:{
    flexDirection:"row",
    justifyContent:"center",

},
  buttons:{
    justifyContent:"center",
  },
  buttontext:{
    alignContent:"center",
    borderRadius:10,
    justifyContent:"center",
    backgroundColor:"#131316",
    height:50,
    width:200,
    marginEnd:10,

  },
  buttontextsub:{
    opacity:1,
    textAlign:"center",
    justifyContent:"center",
    fontSize:20,
    fontWeight:'500',
    color:"white",

  },
  smalltext:{
    color:"white",
    fontSize:16,
    paddingBottom:4
  },
  plusbutton:{
    backgroundColor:"#131316", 
    width:60,
    height:50,
    borderRadius:9,
    alignContent:"center",
  },
  plusbuttontext:{
    color:"white",
    fontSize:30,
    textAlign:"center"

  }
});

export default CarouselComponent;




 