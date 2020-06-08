import React from 'react';
import {Text, View, Image, Linking} from 'react-native';

import Item from './Item';
import ItemSection from './ItemSection';
import Boton from './Boton';

const CarDetail = props =>{

    return(
    <Item>
        <ItemSection>
           
            <View style={styles.headerContainer}>  
            <Text style={styles.headerText}>
                {props.brand.brand}
       
            </Text>
            <Text style={styles.headerText}>
                {props.brand.model[0].name}
            </Text>
            
            </View>
        </ItemSection>

        <ItemSection>
            <Image  style={styles.estiloImagen} source={ {uri : props.brand.model[0].image} }/>

        </ItemSection>

        <ItemSection>

            <Boton botonPresionado= { () =>{
                console.log(props.brand.brand)
                Linking.openURL(props.brand.model[0].url);
            }
            }
                />
        </ItemSection>
    </Item>
    );
}

const styles={
   headerContainer:{
       flexDirection : 'column',
       justifyContent: 'space-between'
   },
   headerText:{
       fontSize : 18,
       fontWeight : '500',
       textTransform: 'uppercase',
       textAlign : 'center'
   },
   estiloImagen:{
       height: 300,
       flex: 1,
       width: 0
   }
};

export default CarDetail;