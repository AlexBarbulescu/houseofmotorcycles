import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Linking,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

const Footer = () => {
  const openEmail = () => {
    Linking.openURL("mailto:info@houseofmotorcycles.com");
  };

  const callPhone = () => {
    Linking.openURL("tel:+12345678901");
  };

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <View style={styles.contactSection}>
          <View style={styles.sectionTitleContainer}>
            <Text style={styles.sectionTitle}>Contact Us</Text>
          </View>

          <TouchableOpacity
            style={styles.contactItem}
            onPress={openEmail}
            accessibilityRole="button"
            accessibilityLabel="Send email to info@houseofmotorcycles.com"
          >
            <Ionicons
              name="mail-outline"
              size={18}
              color="#d9534f"
              style={styles.contactIcon}
            />
            <Text style={styles.contactText}>
              Email: info@houseofmotorcycles.com
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.contactItem}
            onPress={callPhone}
            accessibilityRole="button"
            accessibilityLabel="Call +1 234 567 890"
          >
            <Ionicons
              name="call-outline"
              size={18}
              color="#d9534f"
              style={styles.contactIcon}
            />
            <Text style={styles.contactText}>Phone: +1 234 567 890</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.linksSection}>
          <View style={styles.sectionTitleContainer}>
            <Text style={styles.sectionTitle}>Quick Links</Text>
          </View>

          <View style={styles.linksContainer}>
            <TouchableOpacity style={styles.linkItem}>
              <Text style={styles.linkText}>About Us</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.linkItem}>
              <Text style={styles.linkText}>Services</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.linkItem}>
              <Text style={styles.linkText}>Gallery</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>

      <View style={styles.copyright}>
        <Text style={styles.copyrightText}>
          © 2025 House of Motorcycles. All rights reserved.
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#222",
    paddingTop: 40,
  },
  content: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    paddingBottom: 30,
  },
  contactSection: {
    width: "48%",
  },
  linksSection: {
    width: "48%",
  },
  sectionTitleContainer: {
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#fff",
  },
  contactItem: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 15,
  },
  contactIcon: {
    marginRight: 10,
  },
  contactText: {
    fontSize: 14,
    color: "#ccc",
  },
  linksContainer: {},
  linkItem: {
    marginBottom: 15,
  },
  linkText: {
    fontSize: 14,
    color: "#ccc",
  },
  copyright: {
    borderTopWidth: 1,
    borderTopColor: "#333",
    paddingVertical: 20,
    alignItems: "center",
  },
  copyrightText: {
    fontSize: 12,
    color: "#999",
  },
});

export default Footer;
