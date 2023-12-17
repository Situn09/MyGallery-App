import React from "react";
import { Text, View, StyleSheet, Image, TouchableOpacity } from "react-native";

const style = StyleSheet.create({
  container: {
    margin: 10,
    padding: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.35,
    shadowRadius: 5,
    elevation: 5,
    borderRadius: 5,
    width: 140,
  },
  img: {
    height: 120,
    width: 120,
    // cursor: "pointer",
  },
});
export default function Photo(props) {
  let url = props.link;
  let author = props.name;

  return (
    <View style={style.container}>
      <Image style={style.img} source={{ uri: url }} />
      <Text>{author}</Text>
    </View>
  );
}
