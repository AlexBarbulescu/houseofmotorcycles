import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const ServiceCard = ({ icon, title, description }) => {
  return (
    <View style={styles.serviceCard}>
      <View style={styles.iconContainer}>
        <Ionicons name={icon} size={40} color="#d9534f" />
      </View>
      <View style={styles.titleContainer}>
        <Text style={styles.serviceTitle}>{title}</Text>
      </View>
      <View style={styles.descriptionContainer}>
        <Text style={styles.serviceDescription}>{description}</Text>
      </View>
    </View>
  );
};

const Services = () => {
  const services = [
    {
      icon: "construct-outline",
      title: "Custom Builds",
      description:
        "Transform your vision into reality with our expert customization services.",
    },
    {
      icon: "settings-outline",
      title: "Maintenance",
      description:
        "Keep your bike running smoothly with our professional maintenance services.",
    },
    {
      icon: "flash-outline",
      title: "Performance Upgrades",
      description:
        "Boost your motorcycle's performance with our specialized upgrade packages.",
    },
    {
      icon: "color-palette-outline",
      title: "Paint & Design",
      description:
        "Make your bike stand out with our custom paint and design services.",
    },
  ];

  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Our Services</Text>
      </View>

      <View style={styles.servicesGrid}>
        {services.map((service, index) => (
          <ServiceCard
            key={index}
            icon={service.icon}
            title={service.title}
            description={service.description}
          />
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: "#fff",
  },
  titleContainer: {
    marginBottom: 30,
    alignItems: "center",
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#333",
  },
  servicesGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  serviceCard: {
    width: "48%",
    backgroundColor: "#f8f9fa",
    borderRadius: 8,
    padding: 20,
    marginBottom: 20,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  iconContainer: {
    marginBottom: 15,
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: "rgba(217, 83, 79, 0.1)",
    justifyContent: "center",
    alignItems: "center",
  },
  titleContainer: {
    marginBottom: 10,
  },
  serviceTitle: {
    fontSize: 18,
    fontWeight: "600",
    color: "#333",
    textAlign: "center",
  },
  descriptionContainer: {},
  serviceDescription: {
    fontSize: 14,
    lineHeight: 20,
    color: "#666",
    textAlign: "center",
  },
});

export default Services;
