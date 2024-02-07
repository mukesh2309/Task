import React from 'react';
import { StyleSheet, View } from 'react-native';
import Svg, { Defs, LinearGradient, Path, Stop } from 'react-native-svg';
import { black } from '../../theme/colors';
import { spacing } from '../../theme/spacing';
import TextComponent from '../text/component';

const StarIcon = ({ filled, halfFilled }: any) => {
  let fillColor = 'transparent';
  if (filled) {
    fillColor = '#FFD700';
  } else if (halfFilled) {
    fillColor = 'url(#half)';
  }

  return (
    <Svg width="24" height="24" viewBox="0 0 24 24">
      <Defs>
        <LinearGradient id="half" x1="0" y1="0" x2="1" y2="0">
          <Stop offset="50%" stopColor="#FFD700" />
          <Stop offset="50%" stopColor="transparent" />
        </LinearGradient>
      </Defs>
      <Path
        fill={fillColor}
        d="M12 1.875l2.229 5.396h5.775l-4.634 3.996 1.886 5.535-4.966-3.755-4.934 3.755 1.886-5.535-4.634-3.996h5.775z"
      />
    </Svg>
  );
};

interface RatingProps {
  rating: number;
  review?: number;
}
const Rating = ({ rating, review }: RatingProps) => {
  const renderStars = () => {
    const stars = [];
    const filledStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    // Adjust to render only the needed stars
    const totalStars = Math.min(filledStars + (hasHalfStar ? 1 : 0), 5);

    for (let i = 0; i < totalStars; i++) {
      stars.push(<StarIcon key={i} filled={i < filledStars} halfFilled={hasHalfStar && i === filledStars} />);
    }

    return stars;
  };

  return (
    <View style={styles.container}>
      {renderStars()}
      {review && (
        <TextComponent style={styles.text} color={black[100]}>{review} Reviews</TextComponent>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginVertical : spacing[4]
  },
  text : {
    marginBottom : spacing[4],
    marginLeft : spacing[8]
  }
});

export default Rating;
