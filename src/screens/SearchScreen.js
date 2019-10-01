import React,{useState} from 'react';
import {View,Text,StyleSheet,ScrollView} from 'react-native';
import  SearchBar from '../components/SearchBar';
import useResult from '../hooks/useResult';
import ResultList from '../components/ResultList';
const SearchScreen=({navigation})=>{
    const [term,setTerm]=useState('');
    const [searchApi,results,errorMessage]=useResult()
    const filterResultByPrice=(price)=>{
        return results.filter(result=>result.price===price)
    }
    return <View style={{flex:1}}>
        <SearchBar 
        term={term} 
        onTermChange={(newTerm)=>setTerm(newTerm)} 
       // onTermChange={setTerm} //also works
        onTermSubmit={()=>searchApi(term)}
        />
        {errorMessage?<Text>{errorMessage}</Text>:null}
        <ScrollView >
        <ResultList navigation={navigation} results={filterResultByPrice('$')} title="Cost Effective"/>
        <ResultList navigation={navigation} results={filterResultByPrice('$$')} title="Big Pricier"/>
        <ResultList navigation={navigation} results={filterResultByPrice('$$$')} title="Big Spender"/>
        </ScrollView>
    </View>
}

const styles=StyleSheet.create({

});

export default SearchScreen;