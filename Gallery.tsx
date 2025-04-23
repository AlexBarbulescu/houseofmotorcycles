import React, { useState, useEffect, useRef } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  Dimensions,
  ScrollView,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

const { width } = Dimensions.get("window");

const Gallery = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const scrollViewRef = useRef(null);

  const images = [
    {
      uri: "https://cdn.builder.io/api/v1/image/assets%2F7aeb5cf45399475b85c3a321bfd0a8a2%2Fe02e6fad911c486b862c4eb69ce9bdc2",
      alt: "Custom motorcycle showcase",
    },
    {
      uri: "https://cdn.builder.io/api/v1/image/assets%2F7aeb5cf45399475b85c3a321bfd0a8a2%2F7d597f568f184ebb88078eb883fe223c",
      alt: "Vintage motorcycle",
    },
    {
      uri: "https://cdn.builder.io/api/v1/image/assets%2F7aeb5cf45399475b85c3a321bfd0a8a2%2Fc8d8193f395548cb941410f19ef11e2d",
      alt: "Modern motorcycle",
    },
    {
      uri: "https://cdn.builder.io/api/v1/image/assets%2F7aeb5cf45399475b85c3a321bfd0a8a2%2Fe159abde30f6469f807763b2a55fb967",
      alt: "Modern motorcycle",
    },
  ];

  const nextSlide = () => {
    const newIndex = (currentSlide + 1) % images.length;
    setCurrentSlide(newIndex);
    scrollViewRef.current?.scrollTo({ x: newIndex * width, animated: true });
  };

  const prevSlide = () => {
    const newIndex = (currentSlide - 1 + images.length) % images.length;
    setCurrentSlide(newIndex);
    scrollViewRef.current?.scrollTo({ x: newIndex * width, animated: true });
  };

  const handleScroll = (event) => {
    const contentOffsetX = event.nativeEvent.contentOffset.x;
    const newIndex = Math.round(contentOffsetX / width);
    if (newIndex !== currentSlide) {
      setCurrentSlide(newIndex);
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => clearInterval(interval);
  }, [currentSlide]);

  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Featured Bikes</Text>
      </View>

      <View style={styles.carouselContainer}>
        <ScrollView
          ref={scrollViewRef}
          horizontal
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          onScroll={handleScroll}
          scrollEventThrottle={16}
          style={styles.scrollView}
        >
          {images.map((image, index) => (
            <View key={index} style={styles.slide}>
              <Image
                source={{ uri: image.uri }}
                style={styles.image}
                accessibilityLabel={image.alt}
              />
            </View>
          ))}
        </ScrollView>

        <TouchableOpacity
          style={[styles.navButton, styles.prevButton]}
          onPress={prevSlide}
          accessibilityLabel="Previous slide"
          accessibilityRole="button"
        >
          <Ionicons name="chevron-back" size={24} color="#fff" />
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.navButton, styles.nextButton]}
          onPress={nextSlide}
          accessibilityLabel="Next slide"
          accessibilityRole="button"
        >
          <Ionicons name="chevron-forward" size={24} color="#fff" />
        </TouchableOpacity>

        <View style={styles.indicators}>
          {images.map((_, index) => (
            <TouchableOpacity
              key={index}
              style={[
                styles.indicator,
                currentSlide === index ? styles.activeIndicator : {},
              ]}
              onPress={() => {
                setCurrentSlide(index);
                scrollViewRef.current?.scrollTo({
                  x: index * width,
                  animated: true,
                });
              }}
              accessibilityLabel={`Go to slide ${index + 1}`}
              accessibilityRole="button"
            />
          ))}
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: "#222",
  },
  titleContainer: {
    marginBottom: 20,
    alignItems: "center",
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#fff",
  },
  carouselContainer: {
    height: 400,
    position: "relative",
  },
  scrollView: {
    width: width,
  },
  slide: {
    width: width,
    height: 400,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: width - 40,
    height: 350,
    borderRadius: 8,
  },
  navButton: {
    position: "absolute",
    top: "50%",
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    justifyContent: "center",
    alignItems: "center",
    transform: [{ translateY: -20 }],
  },
  prevButton: {
    left: 10,
  },
  nextButton: {
    right: 10,
  },
  indicators: {
    position: "absolute",
    bottom: 20,
    width: "100%",
    flexDirection: "row",
    justifyContent: "center",
  },
  indicator: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: "rgba(255, 255, 255, 0.5)",
    marginHorizontal: 5,
  },
  activeIndicator: {
    backgroundColor: "#fff",
  },
});

export default Gallery;
