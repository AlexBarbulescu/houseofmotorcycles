import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  Animated,
  Dimensions,
} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const MenuBar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);
  const insets = useSafeAreaInsets();

  const toggleMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const handleHover = (item: string | null) => {
    setHoveredItem(item);
  };

  // Animation for menu slide in/out
  const menuPosition = isMobileMenuOpen ? 0 : -300;

  return (
    <View style={[styles.container, { paddingTop: insets.top }]}>
      <View style={styles.logoContainer}>
        <Image
          source={{
            uri: "https://cdn.builder.io/api/v1/image/assets%2F7aeb5cf45399475b85c3a321bfd0a8a2%2F797b33e7b81b45b9bf26db125f0cd45c",
          }}
          style={styles.logoImage}
          accessibilityLabel="House of Motorcycles logo"
        />
        <View style={styles.logoTextContainer}>
          <Text style={styles.logoTextTop}>HOUSE OF</Text>
          <Text style={styles.logoTextBottom}>MOTORCYCLES</Text>
        </View>
      </View>

      <TouchableOpacity
        style={styles.menuButton}
        onPress={toggleMenu}
        accessibilityLabel="Toggle menu"
        accessibilityRole="button"
        accessibilityState={{ expanded: isMobileMenuOpen }}
      >
        <View style={styles.menuButtonLine} />
        <View style={styles.menuButtonLine} />
        <View style={styles.menuButtonLine} />
      </TouchableOpacity>

      {/* Mobile menu overlay */}
      {isMobileMenuOpen && (
        <TouchableOpacity
          style={styles.menuOverlay}
          onPress={closeMenu}
          activeOpacity={1}
        />
      )}

      {/* Navigation menu */}
      <Animated.View style={[styles.navMenu, { right: menuPosition }]}>
        <TouchableOpacity style={styles.navItem}>
          <Text style={styles.navText}>Home</Text>
        </TouchableOpacity>

        <View style={styles.navItemWithDropdown}>
          <TouchableOpacity
            style={styles.navItemDropdownHeader}
            onPress={() =>
              handleHover(hoveredItem === "motorcycles" ? null : "motorcycles")
            }
          >
            <Text style={styles.navText}>Motorcycles</Text>
            <Animated.View
              style={[
                styles.dropdownIcon,
                {
                  transform: [
                    {
                      rotate: hoveredItem === "motorcycles" ? "180deg" : "0deg",
                    },
                  ],
                },
              ]}
            />
          </TouchableOpacity>

          {hoveredItem === "motorcycles" && (
            <View style={styles.dropdownContent}>
              <TouchableOpacity style={styles.dropdownItem}>
                <Text style={styles.dropdownText}>Harley Davidson</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.dropdownItem}>
                <Text style={styles.dropdownText}>Choppers</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.dropdownItem}>
                <Text style={styles.dropdownText}>Cruisers</Text>
              </TouchableOpacity>
            </View>
          )}
        </View>

        <TouchableOpacity style={styles.navItem}>
          <Text style={styles.navText}>Events</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.navItem}>
          <Text style={styles.navText}>Workshop</Text>
        </TouchableOpacity>

        <View style={styles.navItemWithDropdown}>
          <TouchableOpacity
            style={styles.navItemDropdownHeader}
            onPress={() =>
              handleHover(hoveredItem === "about" ? null : "about")
            }
          >
            <Text style={styles.navText}>About</Text>
            <Animated.View
              style={[
                styles.dropdownIcon,
                {
                  transform: [
                    { rotate: hoveredItem === "about" ? "180deg" : "0deg" },
                  ],
                },
              ]}
            />
          </TouchableOpacity>

          {hoveredItem === "about" && (
            <View style={styles.dropdownContent}>
              <TouchableOpacity style={styles.dropdownItem}>
                <Text style={styles.dropdownText}>Our Story</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.dropdownItem}>
                <Text style={styles.dropdownText}>Team</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.dropdownItem}>
                <Text style={styles.dropdownText}>Testimonials</Text>
              </TouchableOpacity>
            </View>
          )}
        </View>
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingVertical: 15,
    backgroundColor: "#fff",
    borderBottomWidth: 1,
    borderBottomColor: "#e0e0e0",
    zIndex: 100,
  },
  logoContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  logoImage: {
    width: 50,
    height: 50,
    marginRight: 10,
  },
  logoTextContainer: {
    flexDirection: "column",
  },
  logoTextTop: {
    fontSize: 14,
    fontWeight: "600",
    color: "#333",
  },
  logoTextBottom: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#000",
  },
  menuButton: {
    width: 30,
    height: 24,
    justifyContent: "space-between",
    alignItems: "flex-end",
    zIndex: 101,
  },
  menuButtonLine: {
    width: "100%",
    height: 3,
    backgroundColor: "#333",
    borderRadius: 2,
  },
  menuOverlay: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(0,0,0,0.5)",
    zIndex: 99,
  },
  navMenu: {
    position: "absolute",
    top: 0,
    right: 0,
    width: 300,
    height: "100%",
    backgroundColor: "#fff",
    paddingTop: 80,
    paddingHorizontal: 20,
    zIndex: 100,
    shadowColor: "#000",
    shadowOffset: { width: -5, height: 0 },
    shadowOpacity: 0.1,
    shadowRadius: 15,
    elevation: 10,
  },
  navItem: {
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#f0f0f0",
  },
  navItemWithDropdown: {
    borderBottomWidth: 1,
    borderBottomColor: "#f0f0f0",
  },
  navItemDropdownHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 15,
  },
  navText: {
    fontSize: 16,
    fontWeight: "500",
    color: "#333",
  },
  dropdownIcon: {
    width: 0,
    height: 0,
    borderLeftWidth: 6,
    borderRightWidth: 6,
    borderTopWidth: 6,
    borderLeftColor: "transparent",
    borderRightColor: "transparent",
    borderTopColor: "#333",
  },
  dropdownContent: {
    paddingLeft: 15,
    paddingBottom: 10,
  },
  dropdownItem: {
    paddingVertical: 10,
  },
  dropdownText: {
    fontSize: 14,
    color: "#666",
  },
});

export default MenuBar;
