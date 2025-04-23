import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const FeatureItem = ({ icon, title, description }) => {
  return (
    <View style={styles.featureItem}>
      <View style={styles.iconContainer}>
        <View style={styles.iconCircle}>
          <Ionicons name={icon} size={24} color="#d9534f" />
        </View>
      </View>
      <View style={styles.featureTitle}>
        <Text style={styles.featureTitleText}>{title}</Text>
      </View>
      <View style={styles.featureDescription}>
        <Text style={styles.featureDescriptionText}>{description}</Text>
      </View>
    </View>
  );
};

const Features = () => {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Image
          source={{
            uri: "https://cdn.builder.io/api/v1/image/assets/TEMP/385ca04a65f500bbd7b5659b92dd564b468b9283?placeholderIfAbsent=true",
          }}
          style={styles.image}
          accessibilityLabel="Custom motorcycle showcase"
        />

        <View style={styles.featuresGrid}>
          <FeatureItem
            icon="cart-outline"
            title="Online purchase"
            description="Digital purchase and reservation in just 10 minutes – purchase contract within 12 hours"
          />

          <FeatureItem
            icon="cube-outline"
            title="Freight forwarding delivery"
            description="Nationwide delivery directly to your door, including transport security"
          />

          <FeatureItem
            icon="swap-horizontal-outline"
            title="Trade-in"
            description="Trade-ins for all brands, including pickup, are easy and hassle-free."
          />

          <FeatureItem
            icon="color-wand-outline"
            title="Individualization"
            description="Extensive modifications to all vehicles upon request"
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: "#f8f9fa",
  },
  content: {
    alignItems: "center",
  },
  image: {
    width: "100%",
    height: 250,
    borderRadius: 8,
    marginBottom: 30,
  },
  featuresGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    width: "100%",
  },
  featureItem: {
    width: "48%",
    marginBottom: 30,
    backgroundColor: "#fff",
    borderRadius: 8,
    padding: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  iconContainer: {
    marginBottom: 15,
  },
  iconCircle: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: "rgba(217, 83, 79, 0.1)",
    justifyContent: "center",
    alignItems: "center",
  },
  featureTitle: {
    marginBottom: 10,
  },
  featureTitleText: {
    fontSize: 18,
    fontWeight: "600",
    color: "#333",
  },
  featureDescription: {},
  featureDescriptionText: {
    fontSize: 14,
    lineHeight: 20,
    color: "#666",
  },
});

export default Features;
