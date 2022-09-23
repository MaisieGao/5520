import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  Button,
  Dimensions
} from "react-native";

const GameOverScreen = props => {
  return (
      <View style={styles.screen}>
        <Text style={styles.title}>Game is Over</Text>
        <View style={[styles.card, styles.shadowProp, styles.elevation]}>
        <Text style={styles.topic}>Here is your picture</Text>
          {props.gameWin === true?
          <Image 
          style={styles.image}
          source={{

            uri:
              "https://picsum.photos/id/"+props.userNumber+"/100/100"
          }}
          
          
        />:
        <Image 
        style={styles.image}
        source={require('./sadEmoji.png')} />
        }
        <Button
        style={styles.button}
        color="#ff1493"
        title="Start Again"
        onPress={props.onRestart}/>
        </View>
        
      </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    marginTop: 80,
    alignItems: "center"
  },
  title: {
    fontSize: 23,
    
    marginVertical: 10,
    height: 55,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    color: "#800080",
    borderColor: "#800080",
  },
  topic:{
    marginTop: 20,
    fontSize: 20,
    color:"yellow"
    },
    image: {
    
      marginTop: 20,
      marginBottom: 20,
    },
  card: {
    width: "80%",
    maxWidth: "95%",
    minWidth: 300,
    height: 430,
    alignItems: "center",
    marginTop: 30,
    backgroundColor: "black",
    borderRadius: 20
  },
  shadowProp: {
    shadowColor: '#171717',
    shadowOffset: {width: -4, height: 4},
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  elevation: {
    elevation: 20,
    shadowColor: '#171717',
  },
  button:{
    backgroundColor:"black"
  }
});

export default GameOverScreen;