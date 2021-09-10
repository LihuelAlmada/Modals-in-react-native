import React, { useState, useEffect } from "react";
import { Text, View, FlatList, Pressable, Modal, Alert, TextInput } from "react-native";

//Importamos los colores
import styles from './Styles'
import Colors from './Colores'

const ProtocolScreen = () => {
  const [labelMax, setLabelMax] = useState(2);
  const [placeDetailVisible, setPlaceDetailVisible] = useState(true);
  const [labelAcount, setLabelAcount] = useState(1);

	return(
		<View style={styles.container}>
      
      <Modal
        animationType="slide"
        transparent={true}
        visible={placeDetailVisible}
        onRequestClose={() => {
          Alert.alert("Create protocol form has been closed.");
          setPlaceDetailVisible(!placeDetailVisible);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.titleModal}>Protocol detail {labelAcount} / {labelMax}</Text>
            <Pressable
              style={[styles.button]}
              onPress={() => {
                /* Funcion para guardar datos en una array, con push
                
                  Data.push[modalValues]
                */
                  setLabelAcount(labelAcount+1)
                if (labelAcount == labelMax) {
                  setPlaceDetailVisible(false)
                }
              }}>
              <Text style={styles.fontButton}>Continue</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
      <Pressable
        style={styles.button}
        onPress = {()=>{
          setPlaceDetailVisible(!placeDetailVisible);
        }}
      >
        <Text>Continuar</Text>
      </Pressable>
		</View>
	);
}

export default ProtocolScreen;