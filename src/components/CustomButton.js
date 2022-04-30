import { Button } from 'react-native'

import colors from '../../styles/colors'

const CustomButton = ({ title, onPress, type }) => {
  return (
    <Button
      title={title}
      onPress={() => onPress()}
      color={ type === 'primary' ? colors.lightPurple : colors.pink }
    />
  )
}
 
export default CustomButton