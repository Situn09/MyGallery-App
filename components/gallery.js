import React, { useState, useEffect } from "react";
import {
  Text,
  ScrollView,
  FlatList,
  StyleSheet,
  View,
  TouchableOpacity,
} from "react-native";
import axios from "axios";
import Photo from "./photo";
import AppHeader from "./AppHeader";
import AsyncStorage from "@react-native-async-storage/async-storage";

const style = StyleSheet.create({
  container: { display: "flex", alignItems: "center", paddingBottom: 200 },
});

export default function Gallery({ navigation }) {
  const [data, setData] = useState([]);

  useEffect(() => {
    (async () => {
      axios
        .get(
          "https://api.flickr.com/services/rest/?method=flickr.photos.getRecent&per_page=20&page=1&api_key=6f102c62f41998d151e5a1b48713cf13&format=json&nojsoncallback=1&extras=url_s"
        )
        .then(async (res) => {
          try {
            await AsyncStorage.setItem(
              "images",
              JSON.stringify(res.data.photos.photo)
            );
          } catch (error) {
            console.log("ERROR : ", error);
          }
        });
      const images = await AsyncStorage.getItem("images");
      setData(images != null ? JSON.parse(images) : []);
    })();
  }, []);

  return (
    <View>
      <AppHeader />
      <View style={style.container}>
        <FlatList
          numColumns={2}
          data={data}
          renderItem={(entry) => {
            return (
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate("Full Image", {
                    imgUrl: entry.item.url_s,
                    title: entry.item.title,
                  })
                }
              >
                <Photo link={entry.item.url_s} name={entry.item.title} />
              </TouchableOpacity>
            );
          }}
        />
      </View>
    </View>
  );
}
