import {
  View,
  Text,
  SafeAreaView,
  TextInput,
  StyleSheet,
  FlatList,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import axios from 'axios';
import styles from './styles';
import Listing from '../componets/listing';

const Search = () => {
  const [listing, setListing] = useState([]);

  const [search, setSearch] = useState('');

  useEffect(() => {
    let tempArray = [];
    const getData = setTimeout(() => {
      axios
        .get(`https://api.agify.io/?name=${search}`)
        .then(response => {
          if (response?.data) {
            let values = response?.data;
            if (values?.age || values?.count || values?.name) {
              tempArray.push({
                age: values?.age,
                count: values?.count,
                name: values?.name,
              });
            }
          }
          setListing(tempArray);
        })
        .catch(error => {
          console.log('error', error);
        });
    }, 500);

    return () => clearTimeout(getData);
  }, [search]);

  const renderListing = item => {
    const {name, age, count} = item;
    return <Listing name={name} age={age} count={count} />;
  };

  return (
    <SafeAreaView style={styles.mainContainer}>
      <View style={styles.search}>
        <Text style={styles.searchText}>Search</Text>
      </View>
      <View style={styles.searchContainer}>
        <TextInput
          style={styles.input}
          onChangeText={text => setSearch(text)}
          value={search}
          placeholder={'Enter text to search...'}
          placeholderTextColor={'black'}
        />
      </View>
      <View style={styles.listContainer}>
        <FlatList data={listing} renderItem={({item}) => renderListing(item)} />
      </View>
    </SafeAreaView>
  );
};

export default Search;
