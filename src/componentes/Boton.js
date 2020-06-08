import React from 'react';
import {Text, TouchableOpacity} from 'react-native';

const Boton = (props) =>{
const {estiloBoton, estiloTexto }= styles;
    return(
    <TouchableOpacity
     onPress= {props.botonPresionado}
    
    style={estiloBoton}>
        <Text style={estiloTexto}>
            Más detalles
        </Text>
      </TouchableOpacity>
    );
}

const styles={
    estiloTexto:{
     fontSize : 22,
     fontWeight : '500',
     paddingTop: 6,
     paddingBottom: 6,
     color: 'white',
     textAlign : 'center'
    },
estiloBoton:{
    flex :1,
    alignSelf: 'stretch',
    backgroundColor : '#2ED2E5',
    borderWidth: 1,
    borderColor :'gainsboro',
    marginLeft : 7,
    marginRight: 7,
    borderRadius : 25
}
};

export default Boton;