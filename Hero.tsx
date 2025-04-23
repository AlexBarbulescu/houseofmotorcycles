import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
} from "react-native";

const Hero = () => {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={{
          uri: "https://cdn.builder.io/api/v1/image/assets/TEMP/385ca04a65f500bbd7b5659b92dd564b468b9283?placeholderIfAbsent=true",
        }}
        style={styles.backgroundImage}
        resizeMode="cover"
      >
        <View style={styles.overlay} />
        <View style={styles.textBox}>
          <View style={styles.introContainer}>
            <Text style={styles.introText}>Dein Team von</Text>
          </View>

          <View style={styles.titleContainer}>
            <Text style={styles.titleText}>HOUSE OF MOTORCYCLES</Text>
          </View>

          <View style={styles.contentContainer}>
            <Text style={styles.paragraph}>
              Welcome to the House of Motorcycles – wo dein Bike mehr ist als
              nur ein Fortbewegungsmittel.
            </Text>

            <Text style={styles.paragraph}>
              Ob Harley, Chopper oder Cruiser – wir helfen dir, genau das
              richtige Gefährt zu finden, sei es aus Europa oder direkt als
              US-Import.
            </Text>

            <Text style={styles.paragraph}>
              Bei uns bekommst du nicht nur Bikes, sondern echte Leidenschaft
              auf zwei Rädern.
            </Text>

            <View style={styles.divider} />

            <Text style={styles.paragraph}>
              Vom klassischen Auspuff- oder Lenkerumbau bis hin zu komplett
              individuellen Custom-Projekten: Wir machen's möglich.
            </Text>

            <Text style={styles.paragraph}>
              Du hast die Idee – wir setzen sie um.
            </Text>

            <View style={styles.divider} />

            <Text style={styles.paragraph}>
              House of Motorcycles steht für ehrliche Beratung, saubere Arbeit
              und Bikes, die Blicke auf sich ziehen. Schau vorbei, frag uns aus
              – wir sind ready, wenn du es bist.
            </Text>
          </View>

          <TouchableOpacity
            style={styles.button}
            accessibilityRole="button"
            accessibilityLabel="Navigate to sales room"
          >
            <Text style={styles.buttonText}>To the sales room</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 600,
    width: "100%",
  },
  backgroundImage: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(0, 0, 0, 0.6)",
  },
  textBox: {
    width: "90%",
    maxWidth: 800,
    padding: 30,
    backgroundColor: "rgba(0, 0, 0, 0.7)",
    borderRadius: 8,
    alignItems: "center",
  },
  introContainer: {
    marginBottom: 10,
  },
  introText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "400",
    textAlign: "center",
  },
  titleContainer: {
    marginBottom: 20,
  },
  titleText: {
    color: "#fff",
    fontSize: 28,
    fontWeight: "bold",
    textAlign: "center",
  },
  contentContainer: {
    marginBottom: 25,
  },
  paragraph: {
    color: "#fff",
    fontSize: 16,
    lineHeight: 24,
    marginBottom: 15,
    textAlign: "center",
  },
  divider: {
    height: 1,
    width: "50%",
    backgroundColor: "rgba(255, 255, 255, 0.3)",
    alignSelf: "center",
    marginVertical: 15,
  },
  button: {
    backgroundColor: "#d9534f",
    paddingVertical: 12,
    paddingHorizontal: 25,
    borderRadius: 5,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
  },
});

export default Hero;
