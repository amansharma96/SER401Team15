import * as FileSystem from "expo-file-system";
import * as MediaLibrary from "expo-media-library";
import { Platform } from "react-native";

export const saveImage = async (imageUri) => {
  try {
    const { status } = await MediaLibrary.requestPermissionsAsync();
    if (status !== "granted") {
      alert("Sorry, we need media library permissions to make this work!");
      return;
    }

    const fileInfo = await FileSystem.getInfoAsync(imageUri);
    if (!fileInfo.exists) {
      alert("Image does not exist!");
      return;
    }

    const asset = await MediaLibrary.createAssetAsync(imageUri);

    if (Platform.OS === "android") {
      const album = await MediaLibrary.getAlbumAsync("ReadyNeighbor");
      if (album == null) {
        await MediaLibrary.createAlbumAsync("ReadyNeighbor", asset, false);
      } else {
        await MediaLibrary.addAssetsToAlbumAsync([asset], album.id, false);
      }
    }

    alert("Image saved to gallery!");
  } catch (error) {
    console.error("Error saving image:", error);
    alert("Error saving image!");
  }
};
