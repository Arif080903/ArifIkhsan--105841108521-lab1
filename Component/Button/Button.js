import { StyleSheet, Text, View, Image} from 'react-native'
import React from 'react'


  const ButtonCostum = ({color, text, borderRadius}) => {
  return(
    <View style={{
      backgroundColor : color,
      width : 350,
      height : 50,
      borderRadius : borderRadius,
      justifyContent : 'center'

    }}>
      <Text style={{
        textAlign : 'center',
        fontSize : 30,
        color : 'white',
        fontWeight : 'bold'
      }}>{text}
      </Text>
    </View>
  )}
  

  export default ButtonCostum