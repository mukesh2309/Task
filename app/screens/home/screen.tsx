import { View, Text, StyleSheet, ImageBackground } from 'react-native'
import React from 'react'
import { primary, white } from '../../theme/colors'
import Wrapper from '../../components/wrapper /component'
import TextComponent from '../../components/text/component'

const HomeScreen = () => {
  return (
    <Wrapper
    statusbar={{
      backgroundColor : primary[900],
      barStyle : 'light-content'
    }}
    >
      <TextComponent>
        Hey, Rahul
      </TextComponent>
    </Wrapper>
  )
}

const  styles = StyleSheet.create({
  container : {
    backgroundColor : white[900],
    flex : 1
  },
  topContainer :{
    backgroundColor : primary[900],
    flex :.3
  }
})

export default HomeScreen