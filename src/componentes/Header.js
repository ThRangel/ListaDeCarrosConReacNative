
import React from 'react';
import {
  View,
  Text,
  StyleSheet
 
} from 'react-native';

const Header = props =>{
    return(
    <View style={styles.estiloVista}>
       <Text style = {styles.estiloTexto}>{props.titulo}</Text>
       </View>

    );
}

const styles = StyleSheet.create({
      estiloTexto: {
        fontSize : 28,
        textAlign : 'center'

      },
      estiloVista: {
          backgroundColor : '#2ED2E5',
          height: 95,
          justifyContent: 'center',
          alignItems: 'center',
          paddingTop: 25
         
      }

    });

export default Header;

