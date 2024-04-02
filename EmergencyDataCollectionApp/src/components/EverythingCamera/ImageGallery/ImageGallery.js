import React from "react";
import { Image, ScrollView, StyleSheet, View } from "react-native";

const ImageGallery = ({ images }) => (
  <ScrollView>
    <View style={styles.imageContainer}>
      {images.map((image, index) => (
        <Image key={index} source={{ uri: image }} style={styles.image} />
      ))}
    </View>
  </ScrollView>
);

const styles = StyleSheet.create({
  imageContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
  },
  image: {
    width: 100,
    height: 100,
    margin: 5,
    borderRadius: 8,
  },
});

export default ImageGallery;
