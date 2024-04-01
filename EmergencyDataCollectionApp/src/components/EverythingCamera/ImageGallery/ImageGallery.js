import React from "react";
import { Image, ScrollView, StyleSheet } from "react-native";

const ImageGallery = ({ images }) => (
  <ScrollView contentContainerStyle={styles.imageContainer}>
    {images.map((image, index) => (
      <Image key={index} source={{ uri: image }} style={styles.image} />
    ))}
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
  },
});

export default ImageGallery;
