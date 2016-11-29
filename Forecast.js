/**
 *
 * Created by Trojx on 2016/11/29 0029.
 */
import React,{Component} from 'react';
import { StyleSheet,
    Text,
    View,
    TextInput,
    Image,
    ToastAndroid} from 'react-native';

var Forecast=React.createClass({
   render:function () {
       return(
         <View style={{height:200}}>
             <Text style={styles.bigText}>
                 {this.props.main}
             </Text>
             <Text style={styles.mainText}>
                 Current conditions:{this.props.description}
             </Text>
             <Text style={styles.bigText}>
                 {this.props.temp}°F
             </Text>
         </View>
       );
   }
});

var styles=StyleSheet.create({
   bigText:{
       flex:2,
       fontSize:20,
       textAlign:'center',
       margin:10,
       color:'#FFFFFF',
   },
    mainText:{
       flex:1,
        fontSize:16,
        textAlign:'center',
        color:'#FFFFFF'
    }
});

module.exports=Forecast;