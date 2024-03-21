import React from 'react'
import { View,Text } from 'react-native'

const SeacrhScreen = ({ route }) => {
    const { searchTerm, searchResults } = route.params;

  return (
    <View> 
        <Text>Results for: {searchTerm}</Text>
    </View>
  )
}

export default SeacrhScreen