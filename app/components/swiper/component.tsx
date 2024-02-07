import React, { useState } from 'react';
import { Dimensions, FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { spacing } from '../../theme/spacing';
import { black, gray, secondary } from '../../theme/colors';

const { width } = Dimensions.get('window');

const Swiper = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const viewableItemsChanged = ({ viewableItems }) => {
    if (viewableItems.length > 0) {
      setCurrentIndex(viewableItems[0].index);
    }
  };
  
  const renderItem = ({ item }) => (
    <View style={{ width }}>
      <Image
        source={{ uri: item }}
        style={styles.image}
        resizeMode="cover"
      />
    </View>
  );

  const handlePrev = () => {
    setCurrentIndex(currentIndex > 0 ? currentIndex - 1 : 0);
  };

  const handleNext = () => {
    setCurrentIndex(currentIndex < images.length - 1 ? currentIndex + 1 : images.length - 1);
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={images}
        keyExtractor={(item, index) => index.toString()}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        renderItem={renderItem}
        onViewableItemsChanged={viewableItemsChanged}
        viewabilityConfig={{ viewAreaCoveragePercentThreshold: 50 }}
        initialScrollIndex={currentIndex}
      />
      <View style={styles.indicatorContainer}>
        {images.map((_, index) => (
          <View
            key={index}
            style={[styles.indicator, currentIndex === index ? styles.activeIndicator : null]}
          />
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width,
    height: spacing.value(240)
  },
  indicatorContainer: {
    position: 'absolute',
    bottom: spacing[10],
    left : spacing[8],
    flexDirection: 'row',
    justifyContent: 'center',
  },
  indicator: {
    height: spacing[4],
    width: spacing[30],
    borderRadius: spacing[8],
    backgroundColor: gray[600],
    marginHorizontal: spacing.value(4),
  },
  activeIndicator: {
    backgroundColor: secondary[900],
  },
  arrowLeft: {
    position: 'absolute',
    top: '50%',
    left: 20,
    zIndex: 1,
  },
  arrowRight: {
    position: 'absolute',
    top: '50%',
    right: 20,
    zIndex: 1,
  },
  arrowText: {
    fontSize: 24,
    color: 'white',
  },
});

export default Swiper;
