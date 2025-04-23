import React from "react";
import { ScrollView, StyleSheet } from "react-native";
import MenuBar from "./MenuBar";
import Hero from "./Hero";
import Features from "./Features";
import Gallery from "./Gallery";
import Location from "./Location";
import Services from "./Services";
import Footer from "./Footer";

const Website = () => {
  return (
    <ScrollView style={styles.container}>
      <MenuBar />
      <Hero />
      <Features />
      <Gallery />
      <Location />
      <Services />
      <Footer />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});

export default Website;
