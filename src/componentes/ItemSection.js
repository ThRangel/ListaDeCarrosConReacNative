import React from 'react';
import {StyleSheet, View, Text, ImagePropTypes} from 'react-native';

const ItemSection = (props) =>{

    return(
<View style={styles.viewStyle}>
{props.children}
</View>
    );
}

const styles = {

    viewStyle:{
        
       borderBottomWidth : 1,
        borderColor: 'gainsboro',
        paddingTop : 5,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        position: 'relative'
        
      

    }



};

export default ItemSection;