import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: 'white',
  },
  searchContainer: {
    paddingTop: 10,
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    color: 'black',
    borderRadius: 8,
    borderColor: 'grey',
  },
  listingMain: {
    padding: 15,
    borderBottomWidth: 1,
  },
  textStyle: {
    color: 'black',
  },
  search: {justifyContent: 'center', alignItems: 'center'},
  searchText: {paddingTop: 20, fontSize: 20, color: 'black'},
});

export default styles;
