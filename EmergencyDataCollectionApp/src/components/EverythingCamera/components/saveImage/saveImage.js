import * as FileSystem from "expo-file-system";
import * as MediaLibrary from "expo-media-library";
import { Platform } from "react-native";

export const saveImages = async (
  imageUris,
  baseName = "ReadyNeighborCustomName",
) => {
  if (!Array.isArray(imageUris) || imageUris.length === 0) {
    alert("No images to save.");
    return;
  }

  try {
    const { status } = await MediaLibrary.requestPermissionsAsync();
    if (status !== "granted") {
      alert("Sorry, we need media library permissions to make this work!");
      return;
    }

    const saveSingleImage = async (imageUri, index) => {
      const fileInfo = await FileSystem.getInfoAsync(imageUri);
      if (!fileInfo.exists) {
        throw new Error("Image does not exist!");
      }
      const fileExtension = imageUri.substring(imageUri.lastIndexOf("."));
      const newUri =
        FileSystem.documentDirectory + `${baseName}_${index}${fileExtension}`;
      await FileSystem.copyAsync({
        from: imageUri,
        to: newUri,
      });
      return await MediaLibrary.createAssetAsync(newUri);
    };

    const assets = await Promise.all(
      imageUris.map((uri, index) => saveSingleImage(uri, index + 1)),
    );

    if (assets.length > 0 && Platform.OS === "android") {
      let album = await MediaLibrary.getAlbumAsync("ReadyNeighbor");
      if (!album) {
        album = await MediaLibrary.createAlbumAsync(
          "ReadyNeighbor",
          assets[0],
          false,
        );
      }
      if (album) {
        await MediaLibrary.addAssetsToAlbumAsync(
          assets.slice(album ? 1 : 0),
          album.id,
          false,
        );
      } else {
        throw new Error("Failed to create or retrieve album.");
      }
    }
    alert("Images saved to gallery!");
  } catch (error) {
    console.error("Error saving images:", error);
    alert("Error saving images!");
  }
};
