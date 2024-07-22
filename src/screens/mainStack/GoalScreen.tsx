import React from 'react'
import { View ,Text} from 'react-native'
import { moderateScale } from '../../utils/metrics'

const Goal = () => {
  return (
    <View>
    <Text
      style={{
        fontSize: moderateScale(24),
        color: '#000',
        textAlign: 'center',
      }}>
      GoalScreen
    </Text>
  </View>
  )
}

export default Goal;