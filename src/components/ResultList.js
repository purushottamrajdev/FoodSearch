import React from 'react';
import {Text,View,StyleSheet,FlatList,TouchableOpacity} from 'react-native';
import ResultDetails from '../components/ResultDetails';
import {withNavigation} from 'react-navigation';
const ResultList=({title,results,navigation})=>{

    if (!results.length)
        return null;
    return <View style={styles.container}>
        <Text style={styles.title}>{title}</Text>
        <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={results}
        maxToRenderPerBatch={10}
        keyExtractor={result=>result.id}
        renderItem={({item})=>{
            return (
                <View style={styles.container}>
                    <TouchableOpacity onPress={()=>navigation.navigate('ResultsShow',{id:item.id})} >
                        <ResultDetails result={item} />
                    </TouchableOpacity>
                </View>)
        }}
        />
    </View>
};

const styles=StyleSheet.create({
    title:{
        fontSize:18,
        fontWeight:'bold',
        marginLeft:15,
        marginBottom:5
    },
    container:{
        marginBottom:10
    }
});

export  default withNavigation(ResultList);
