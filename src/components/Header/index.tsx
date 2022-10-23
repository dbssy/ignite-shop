import { useRouter } from 'next/router';
import Link from 'next/link';
import Image from 'next/image';

import { HeaderContainer } from './styles';

import logoImg from '../../assets/logo.svg';

import { Cart } from '../Cart';

export function Header() {
  const { pathname } = useRouter();

  const showCartButton = pathname !== '/success';

  return (
    <HeaderContainer>
      <Link href="/">
        <a>
          <Image src={logoImg} alt="" />
        </a>
      </Link>

      {showCartButton && <Cart />}
    </HeaderContainer>
  );
}