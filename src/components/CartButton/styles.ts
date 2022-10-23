import { styled } from '../../styles';

export const CartButtonContainer = styled('button', {
  border: 'none',
  borderRadius: 6,

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  cursor: 'pointer',
  position: 'relative',

  '&:disabled': {
    opacity: 0.6,
    cursor: 'not-allowed',
  },

  variants: {
    color: {
      gray: {
        background: '$gray800',
        color: '$gray500',
      },
      green: {
        background: '$green500',
        color: '$white',

        '&:not(:disabled):hover': {
          background: '$green300',
        },
      },
    },
    size: {
      md: {
        width: '3rem',
        height: '3rem',

        svg: {
          fontSize: 24,
        },
      },
      lg: {
        width: '3.5rem',
        height: '3.5rem',

        svg: {
          fontSize: 32,
        },
      },
    },
  },

  defaultVariants: {
    color: 'gray',
    size: 'md',
  },
});