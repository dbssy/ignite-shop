import { styled } from '..';

export const SuccessContainer = styled('main', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  margin: '0 auto',
  height: 656,

  h1: {
    fontSize: '$2xl',
    color: '$gray100',
  },

  p: {
    maxWidth: 560,
    color: '$gray300',
    fontSize: '$xl',
    lineHeight: 1.4,
    marginTop: '2rem',
    textAlign: 'center',
  },

  a: {
    fontSize: '$lg',
    color: '$green500',
    display: 'block',
    marginTop: '5rem',
    textDecoration: 'none',
    fontWeight: 'bold',

    '&:hover': {
      color: '$green300',
    }
  }
});

export const ImageContainer = styled('div', {
  background: 'linear-gradient(180deg, #1ea483 0%, #7465d4 100%)',
  width: '100%',
  maxWidth: 130,
  height: 145,
  borderRadius: 8,
  marginTop: '4rem',
  padding: '0.25rem',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  img: {
    objectFit: 'cover',
  }
});