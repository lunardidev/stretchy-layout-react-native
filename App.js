import React, { useRef } from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  StatusBar,
  SafeAreaView,
  Animated,
  Image
} from "react-native";

export default function App() {
  const scrollY = useRef(new Animated.Value(0));

  const translateY = scrollY.current.interpolate({
    inputRange: [0, 90],
    outputRange: [0, -50],
    extrapolate: "clamp",
    useNativeDriver: true
  });

  const scale = scrollY.current.interpolate({
    inputRange: [0, 90],
    outputRange: [1.6, 1.5],
    useNativeDriver: true
  });

  const textTranslateY = scrollY.current.interpolate({
    inputRange: [0, 90],
    outputRange: [0, 2],
    extrapolate: "clamp",
    useNativeDriver: true
  });

  const opacity = scrollY.current.interpolate({
    inputRange: [0, 90],
    outputRange: [1, 0.8],
    extrapolate: "clamp",
    useNativeDriver: true
  });

  _renderItems = () => {
    return [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16].map(i => (
      <View key={i} style={{ marginVertical: 10, padding: 15 }}>
        <Text>Line {i}</Text>
      </View>
    ));
  };

  return (
    <>
      <StatusBar barStyle="light-content" />
      <SafeAreaView style={styles.container}>
        <Animated.ScrollView
          scrollEventThrottle={16}
          onScroll={Animated.event([
            { nativeEvent: { contentOffset: { y: scrollY.current } } }
          ])}
          style={{ flex: 1, alignSelf: "stretch" }}
          contentContainerStyle={{ marginTop: 150 }}
        >
          {this._renderItems()}
        </Animated.ScrollView>
        <Animated.View
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: 150,
            backgroundColor: "#34495e",
            alignItems: "center",
            justifyContent: "flex-end",
            transform: [{ translateY }]
          }}
        >
          <Animated.Image
            source={{
              uri:
                "https://static01.nyt.com/images/2018/01/06/world/06japan-suicides-b/06japan-suicides-b-articleLarge.jpg?quality=75&auto=webp&disable=upscale"
            }}
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              height: 150,
              backgroundColor: "#34495e",
              alignItems: "center",
              justifyContent: "flex-end",
              marginBottom: 0,
              transform: [{ scale }]
            }}
          />
          <Animated.Text
            style={{
              opacity: opacity,
              position: "absolute",
              top: 130,
              color: "white",
              fontSize: 20,
              transform: [{ scale }, { translateY: textTranslateY }]
            }}
          >
            My App Title
          </Animated.Text>
        </Animated.View>
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff"
  }
});
