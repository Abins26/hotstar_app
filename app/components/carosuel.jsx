import React from 'react';
import { View, Image,ImageBackground, Dimensions, StyleSheet, SafeAreaView } from 'react-native';
import Carousel,{paginationDot} from 'react-native-reanimated-carousel';

const MovieImages = [
    { id: 1, url: "https://img10.hotstar.com/image/upload/f_auto,q_90,w_384/sources/r1/cms/prod/9792/1714983119792-v",title:"https://img10.hotstar.com/image/upload/f_auto,h_124/sources/r1/cms/prod/8803/1714809038803-t" },
    { id: 2, url: "https://img10.hotstar.com/image/upload/f_auto,q_90,w_384/sources/r1/cms/prod/8206/1715547198206-v" },
    { id: 3, url: "https://img10.hotstar.com/image/upload/f_auto,q_90,w_384/sources/r1/cms/prod/7990/1715946747990-v" },
    { id: 4, url: "https://img10.hotstar.com/image/upload/f_auto,q_90,w_384/sources/r1/cms/prod/360/1714634700360-v" },
    // { id: 5, url: "https://img10.hotstar.com/image/upload/f_auto,q_90,w_256/sources/r1/cms/prod/8095/1715162408095-v" },
    // { id: 6, url: "https://img10.hotstar.com/image/upload/f_auto,q_90,w_256/sources/r1/cms/prod/3108/1715106463108-v" }
];

const { width: screenWidth } = Dimensions.get('window');

const CarouselComponen = () => {
    return (
        <SafeAreaView style={styles.container}>
            <Carousel
                width={screenWidth}
                height={250}
                autoPlay={true}
                loop={true}
                // pagingEnabled={true}
                pagingEnabled={true}
                paginationDot={true}

             
                scrollAnimationDuration={5000}
                data={MovieImages}
                renderItem={({ item }) => (
                    <View style={styles.itemContainer}>
                        <ImageBackground source={{ uri: item.url }} style={styles.image} />
                        {/* <Image source={{uri: item.title}} style={styles.titleimage}/> */}
                        <View></View>
                    </View>
                )}
             
                />
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        display:"flex",
        flex: 1,
        // justifyContent: 'center',
        // alignItems: 'center',
        // backgroundColor:'black'
    },
    itemContainer: {
        backgroundColor: 'midnightblue',//-----------color
        borderRadius: 1,
        height: 250,
        padding: 1,
    },
    image: {
        width: '100%',
        height: '100%',
        borderRadius: 1,
    },
    titleimage:{
        display:"absolute",
        // flex:2,
        marginTop:0,
        width:"auto",
        height:150,
        backfaceVisibility:"trasparent",
    //   backgroundColor:"blue"
    },
    paginationContainer: {
        flexDirection: 'row',
        position: 'absolute',
        bottom: 1,
        alignSelf: 'center',
    },
    paginationDot: {
        width: 10,
        height: 10,
        borderRadius: 5,
        marginHorizontal: 2,
    },
    activeDot: {
        backgroundColor: 'black',
    },
    inactiveDot: {
        backgroundColor: 'gray',
    },
});

export default CarouselComponen;


// mode="parallax"
// modeConfig={{
//     parallaxScrollingScale: 0.9,
//     parallaxScrollingOffset: 50,
//     parallaxAdjacentItemScale: 0.8,
// }}