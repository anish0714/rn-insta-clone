import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  left: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  right: {
    marginRight: 10,
  },
  name: {
    fontWeight: 'bold',
    color: 'black',
  },
});

export default styles;
