import { ComponentProps } from 'react';

import { ProductSekletonContainer, SkeletonItem } from './styles';

type ProductSkeletonProps = ComponentProps<typeof ProductSekletonContainer>;

export function ProductSkeleton({ ...rest }: ProductSkeletonProps) {
  return (
    <ProductSekletonContainer {...rest}>
      <SkeletonItem />

      <div>
        <SkeletonItem />
        <SkeletonItem />
      </div>
    </ProductSekletonContainer>
  );
}