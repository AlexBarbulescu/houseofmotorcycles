import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  Linking,
  TouchableOpacity,
} from "react-native";
import { WebView } from "react-native-webview";

const { width } = Dimensions.get("window");

const Location = () => {
  const mapUrl =
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2249.3431843841287!2d9.406741312154775!3d54.74448427986826!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47b36982fcfc827b%3A0x82a85d0bc78e0ab6!2sHouse%20of%20Motorcycles!5e0!3m2!1sen!2sde!4v1709234067345!5m2!1sen!2sde";

  const openMapsApp = () => {
    const mapsUrl = "https://maps.google.com/?q=House+of+Motorcycles";
    Linking.openURL(mapsUrl);
  };

  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Find Us Here</Text>
      </View>

      <View style={styles.mapContainer}>
        <WebView
          source={{ uri: mapUrl }}
          style={styles.map}
          javaScriptEnabled={true}
          domStorageEnabled={true}
          startInLoadingState={true}
          scalesPageToFit={true}
          accessibilityLabel="Google Maps showing House of Motorcycles location"
        />

        <TouchableOpacity
          style={styles.openMapsButton}
          onPress={openMapsApp}
          accessibilityLabel="Open in Maps app"
          accessibilityRole="button"
        >
          <Text style={styles.openMapsButtonText}>Open in Maps</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: "#f8f9fa",
  },
  titleContainer: {
    marginBottom: 20,
    alignItems: "center",
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#333",
  },
  mapContainer: {
    height: 400,
    width: "100%",
    borderRadius: 8,
    overflow: "hidden",
    position: "relative",
  },
  map: {
    flex: 1,
  },
  openMapsButton: {
    position: "absolute",
    bottom: 20,
    right: 20,
    backgroundColor: "#d9534f",
    paddingVertical: 8,
    paddingHorizontal: 15,
    borderRadius: 5,
  },
  openMapsButtonText: {
    color: "#fff",
    fontWeight: "600",
  },
});

export default Location;
