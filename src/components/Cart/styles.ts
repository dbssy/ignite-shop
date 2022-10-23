import * as Dialog from '@radix-ui/react-dialog';

import { styled } from '../../styles';

export const CartContent = styled(Dialog.Content, {
  top: 0,
  right: 0,
  bottom: 0,
  position: 'fixed',
  width: '30rem',
  padding: '3rem',
  paddingTop: '4.5rem',

  background: '$gray800',
  boxShadow: '-4px 0px 30px rgba(0, 0, 0, 0.8)',

  display: 'flex',
  flexDirection: 'column',

  h2: {
    fontWeight: 'bold',
    fontSize: 'lg',
    color: '$gray100',
    marginBottom: '2rem',
  },

  '> section': {
    display: 'flex',
    flexDirection: 'column',
    gap: '1.5rem',
    flex: 1,
    overflow: 'auto',
  },
});

export const CartClose = styled(Dialog.Close, {
  background: 'none',
  border: 'none',
  color: '$gray500',
  top: '1.75rem',
  right: '1.75rem',
  position: 'absolute',
  cursor: 'pointer',
});

export const CartProduct = styled('div', {
  display: 'flex',
  alignItems: 'center',
  gap: '1.25rem',
  width: '100%',
  height: '5.8125rem',
});

export const CartProductImage = styled('div', {
  background: 'linear-gradient(180deg, #1ea483 0%, #7465d4 100%)',
  borderRadius: 8,
  width: '6.3125rem',
  height: '5.8125rem',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  img: {
    objectFit: 'cover',
  },
});

export const CartProductDetails = styled('div', {
  height: '100%',
  display: 'flex',
  flexDirection: 'column',

  p: {
    color: '$gray300',
    fontSize: '$md',
  },

  strong: {
    marginTop: 4,
    fontSize: '$md',
    fontWeight: 'bold',
  },

  button: {
    background: 'none',
    border: 'none',
    color: '$green500',
    width: 'max-content',
    marginTop: 'auto',
    fontSize: '1rem',
    fontWeight: 'bold',
    cursor: 'pointer',
  },
});

export const CartFinalization = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  marginTop: 'auto',

  button: {
    background: '$green500',
    color: '$white',
    border: 'none',
    borderRadius: 8,
    width: '100%',
    height: '4.3125rem',
    fontSize: '$md',
    fontWeight: 'bold',
    cursor: 'pointer',

    '&:disabled': {
      opacity: 0.6,
      cursor: 'not-allowed',
    },

    '&:not(:disabled):hover': {
      background: '$green300',
    },
  },
});

export const FinalizationDetails = styled('section', {
  display: 'flex',
  flexDirection: 'column',
  gap: 8,
  marginBottom: 55,

  div: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',

    p: {
      fontSize: '$md',
      color: '$gray300',
    },

    '&:last-child': {
      fontWeight: 'bold',

      span: {
        fontSize: '$md',
      },

      p: {
        color: '$gray100',
        fontSize: '$xl',
      }
    }
  },
});