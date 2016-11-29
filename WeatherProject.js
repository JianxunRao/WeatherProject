/**
 * Created by Trojx on 2016/11/29 0029.
 */

import React,{Component} from 'react';
import { StyleSheet,
    Text,
    View,
    TextInput,
    Image,
    ToastAndroid} from 'react-native';
import Forecast from './Forecast';

var WeatherProject=React.createClass({
    getInitialState(){
        return({
            zip:'',
            forecast:{
                main:'Clouds',
                description:'few clouds',
                temp:45.7,
            }
        });
    },
    _handleTextChange(event){
        console.log(event.nativeEvent.text);
        ToastAndroid.show(event.nativeEvent.text,ToastAndroid.SHORT);
        this.setState({
            zip:event.nativeEvent.text,
        });
    },
    render(){
        return(
            <View style={styles.container}>
                <Text style={styles.welcome}>
                    Your input is{this.state.zip}.
                </Text>
                <Forecast
                main={this.state.forecast.main}
                description={this.state.forecast.description}
                temp={this.state.forecast.temp}/>
                <TextInput style={styles.input}
                onSubmitEditing={this._handleTextChange}
                returnKeyType='go'/>
            </View>
        );
    }
});

var styles=StyleSheet.create({
   container:{
       flex:1,
       justifyContent:'center',
       alignItems:'center',
       backgroundColor:'#4D4D4D',
   },
    welcome:{
       fontSize:20,
        textAlign:'center',
        margin:10,
    },
    input:{
       fontSize:20,
        borderWidth:2,
        height:40,
    }
});


module.exports=WeatherProject;