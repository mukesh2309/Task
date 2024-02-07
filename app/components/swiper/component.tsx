import React, {useState} from 'react';
import {Dimensions, FlatList, Image, StyleSheet, View} from 'react-native';
import {gray, secondary, white} from '../../theme/colors';
import {spacing} from '../../theme/spacing';
import LikeBtn from '../like/component';
import {useDispatch} from 'react-redux';
import {addToLike, removeFromLike} from '../../store/slices/product/slice';

const width = Dimensions.get('window').width;

interface SwiperProps {
  images: [];
  id: number;
}
const Swiper = ({images, id}: SwiperProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const viewableItemsChanged = ({viewableItems}) => {
    if (viewableItems.length > 0) {
      setCurrentIndex(viewableItems[0].index);
    }
  };

  const renderItem = ({item}) => (
    <View style={{width}}>
      <Image source={{uri: item}} style={styles.image} resizeMode="cover" />
    </View>
  );

  const dispatch = useDispatch();

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
        viewabilityConfig={{viewAreaCoveragePercentThreshold: 50}}
        initialScrollIndex={currentIndex}
      />
      <View style={styles.indicatorContainer}>
        {images.map((_, index) => (
          <View
            key={index}
            style={[
              styles.indicator,
              currentIndex === index ? styles.activeIndicator : null,
            ]}
          />
        ))}
      </View>
      <View style={styles.like}>
        <LikeBtn
          onPress={e => {
            !e ? dispatch(addToLike({id})) : dispatch(removeFromLike({id}));
          }}
          isLiked={false}
          style={{
            marginTop: spacing[4],
            marginLeft: spacing[4],
          }}
        />
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
    height: spacing.value(240),
  },
  indicatorContainer: {
    position: 'absolute',
    bottom: spacing[10],
    left: spacing[8],
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
  like: {
    position: 'absolute',
    right: spacing[20],
    top: spacing[10],
    height: 40,
    width: 40,
    backgroundColor: white[900],
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: spacing[4],
  },
});

export default Swiper;
