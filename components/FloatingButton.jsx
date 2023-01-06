import React, { useState } from 'react';
import { View, StyleSheet, TouchableOpacity, Text, Animated } from 'react-native';
import Icons from 'react-native-vector-icons/FontAwesome';
const FloatingButton = () => {
    const [icon_1] = useState(new Animated.Value(40))
    const [icon_2] = useState(new Animated.Value(40))
    const [icon_3] = useState(new Animated.Value(40))

    const [pop, setPop] = useState(false);

    const popIn = () => {
        setPop(true);
        Animated.timing(icon_1, {
            toValue:130,
            duration:500,
            useNativeDriver:false
        }).start()

        Animated.timing(icon_2, {
            toValue: 110,
            duration: 500,
            useNativeDriver: false
        }).start()

        Animated.timing(icon_3, {
            toValue: 130,
            duration: 500,
            useNativeDriver: false
        }).start()
    }

    const popOut = () => {
        setPop(false);
        Animated.timing(icon_1, {
            toValue: 40,
            duration: 500,
            useNativeDriver: false
        }).start()

        Animated.timing(icon_2, {
            toValue: 40,
            duration: 500,
            useNativeDriver: false
        }).start()

        Animated.timing(icon_3, {
            toValue: 40,
            duration: 500,
            useNativeDriver: false
        }).start()
    }
    return (
        <View
        style={{ flex:1}}
        >
        <Animated.View style={[styles.circle,{bottom:icon_1}]}>
            <TouchableOpacity>
                    <Icons name="cloud-upload" size={25} color="#FFF" />
            </TouchableOpacity>
        </Animated.View>

            <Animated.View style={[styles.circle, {bottom:icon_2, right:icon_2}]}>
                <TouchableOpacity>
                    <Icons name="print" size={25} color="#FFF" />
                </TouchableOpacity>
            </Animated.View>

            <Animated.View style={[styles.circle, { right:icon_3}]}>
                <TouchableOpacity>
                    <Icons name="share-alt" size={25} color="#FFF" />
                </TouchableOpacity>
            </Animated.View>


            <TouchableOpacity
            style={styles.circle}
           onPress={() => {
               pop === false ? popIn() : popOut()
           }}
            >
                <Icons name="plus" size={25} color="#FFF" />
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    circle:{
backgroundColor:'#f52d56',
width:60,
height:60,
position: 'absolute',
bottom:40,
right:40,
borderRadius:50,
justifyContent:'center',
alignItems:'center',
    }
})

export default FloatingButton;