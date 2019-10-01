import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Image ,FlatList} from 'react-native';
import yelp from '../api/yelp';
const ResultsShowScreen = ({ navigation }) => {
    const id = navigation.getParam('id');
    const [result, setResult] = useState('');
    const getResult = async (id) => {
        const response = await yelp.get(`/${id}`);
        setResult(response.data);
    }
    useEffect(() => {
        getResult(id);
    }, []);

    if(!result)
        return null;

    return <View >
        <Text>{result.name}</Text>
        <FlatList
            data={result.photos}
            keyExtractor={photo=>photo}
            renderItem={({item})=>{
                return <Image source={{uri: item}} style={styles.image} />
            }}
        />
    </View>
}

const styles = StyleSheet.create({
 image:{
     height:200,
     width:300,
     marginHorizontal:15,
     marginVertical:10,
     alignSelf:'center'
 }
});

export default ResultsShowScreen;

