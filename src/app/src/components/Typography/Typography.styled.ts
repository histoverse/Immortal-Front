import { COLOR_BLACK, COLOR_GRAY, COLOR_WHITE } from '../../styles';

import { FontFamily, FontWeights } from './Typography.types';

export const styles = {
  font: {
    [FontFamily.Inter]: {
      fontFamily: FontFamily.Inter,
    },
    [FontFamily.Cinzel]: {
      fontFamily: FontFamily.Cinzel,
    },
  },
  h1: {
    fontFamily: FontFamily.Cinzel,
    fontWeight: FontWeights.Bold,
    fontSize: 39.142,
    lineHeight: '132.5%',
    letterSpacing: '-0.391px',
    textTransform: 'uppercase',
  },
  subtitle: {
    fontWeight: FontWeights.Regular,
    fontSize: 24,
    lineHeight: '132.5%',
    letterSpacing: '-0.24px',
    textTransform: 'uppercase',
  },
  body: {
    fontWeight: FontWeights.Regular,
    fontSize: 20,
    lineHeight: '132.5%',
  },
  label: {
    fontWeight: FontWeights.Regular,
    fontSize: 18,
    lineHeight: '132.5%',
  },
  button: {
    fontWeight: FontWeights.Bold,
    fontSize: 14.326,
    lineHeight: '132.5%',
    textTransform: 'uppercase',
    letterSpacing: '-0.143px',
  },
  white: {
    color: COLOR_WHITE,
  },
  black: {
    color: COLOR_BLACK,
  },
  gray: {
    color: COLOR_GRAY,
  },
  transparent: {
    color: 'transparent',
  },
};
