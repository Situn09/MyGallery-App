import { useState } from "react";
import { Image, View, Dimensions } from "react-native";

export default function FullImage(props) {
  const [imgWidth, setImgWidth] = useState(100);
  const [imgHeight, setImgHeight] = useState(100);

  Image.getSize(props.route.params.imgUrl, (width, height) => {
    // calculate image width and height
    const screenWidth = Dimensions.get("window").width;
    const scaleFactor = width / screenWidth;
    const imageHeight = height / scaleFactor;
    setImgWidth(screenWidth);
    setImgHeight(imageHeight);
  });

  return (
    <View
      style={{
        display: "flex",
        justifyContent: "center",
        height: "100%",
      }}
    >
      <Image
        source={{ uri: props.route.params.imgUrl }}
        style={{ height: imgHeight, width: imgWidth }}
      />
    </View>
  );
}
