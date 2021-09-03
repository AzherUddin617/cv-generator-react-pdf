import React from 'react';
import * as constance from '../constance';
import { Text, View, Image, StyleSheet } from '@react-pdf/renderer';

import dpImg from '../../assets/imgs/dp.jpeg';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    width: '100%',
    paddingBottom: 24,
    borderBottomWidth: 1,
    borderBottomColor: constance.BORDER_COLOR,
    borderBottomStyle: 'solid',
    alignItems: 'center',
  },
  detailColumn: {
    // flexDirection: 'column',
    flexGrow: 1,
    textTransform: 'uppercase',
  },
  name: {
    fontSize: 23,
    fontFamily: constance.FONT_MONST,
    letterSpacing: 7,
    lineHeight: 1.4,
    color: constance.TITLE_COLOR,
    opacity: 0.8,
  },
  subtitle: {
    paddingTop: 14,
    fontSize: 10,
    justifySelf: 'flex-end',
    fontFamily: 'Lato',
    color: '#999999',
  },
  imageContainer: {

  },
  image: {
    width: 80,
    borderRadius: '50%',
    // opacity: 0.95,
  },
});

const Header = () => (
  <View style={styles.container}>
    <View style={styles.detailColumn}>
      <Text style={styles.name}>Azher</Text>
      <Text style={styles.name}>Uddin Ahmed</Text>
      <Text style={styles.subtitle}>Front-End Web Developer</Text>
    </View>
    <View style={styles.imageContainer}>
      <Image src={dpImg} style={styles.image} />
    </View>
  </View>
);

export default Header;
