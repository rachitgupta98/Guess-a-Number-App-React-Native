import React from "react";
import { View, Text, StyleSheet, Button, Image } from "react-native";
import Card from "../components/customCard";
const EndGame = (props) => {
  let urp;
  if (props.win) {
    urp = "https://i.postimg.cc/526VZT77/win1.jpg";
  } else {
    urp = "https://i.postimg.cc/vmsYRXpp/lose.jpg";
  }
  return (
    <View>
      <Card elevation={5} style={styles.container}>
        <Text>{props.title}</Text>
        <Text>Ans is {props.value}</Text>
      </Card>
      <View style={styles.imageContainer}>
        <Image
          source={{
            uri: urp,
          }}
          style={styles.image}
          resizeMode="cover"
        />
      </View>
      <Button title="RESTART" onPress={props.restart} />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    width: 200,
    maxWidth: "80%",
  },
  imageContainer: {
    width: 200,
    height: 200,
    borderRadius: 150,
    overflow: "hidden",
    marginVertical: 10,
  },
  image: {
    width: "100%",
    height: "100%",
  },
});
export default EndGame;
