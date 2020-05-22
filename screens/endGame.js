import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Button,
  Image,
  ScrollView,
  Dimensions,
} from "react-native";
import Card from "../components/customCard";
import BTN from "../components/customButton";
const EndGame = (props) => {
  let urp;
  if (props.win) {
    urp = "https://i.postimg.cc/526VZT77/win1.jpg";
  } else {
    urp = "https://i.postimg.cc/vmsYRXpp/lose.jpg";
  }
  return (
    <ScrollView>
      <View style={styles.main}>
        <Card elevation={5} style={styles.container}>
          <Text style={{ fontSize: 18, fontWeight: "bold" }}>
            {props.title}
          </Text>
          <Text style={{ fontSize: 16, fontWeight: "400", color: "green" }}>
            Ans is {props.value}
          </Text>
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
        <BTN onBtnPress={props.restart} style={styles.btn}>
          RESTART
        </BTN>
      </View>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  main: {
    flex: 1,
    width: Dimensions.get("window").width,
    alignItems: "center",
  },
  container: {
    alignItems: "center",

    width: 250,
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
  btn: {
    backgroundColor: "#2193b0",
    color: "white",
    padding: 8,
    marginVertical: 10,
  },
});
export default EndGame;
