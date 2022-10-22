// import Image from 'next/image';
import { ImageContainer, ProductContainer, ProductDetails } from '../../styles/pages/product';

export default function Product() {
  return (
    <ProductContainer>
      <ImageContainer>
      </ImageContainer>

      <ProductDetails>
        <h1>Camiseta X</h1>
        <span>R$ 5,00</span>

        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab vel modi error earum similique, veritatis recusandae delectus! Quas voluptatem pariatur ratione exercitationem ipsum dolores similique corrupti, fuga inventore esse sunt!</p>

        <button>Comprar agora</button>
      </ProductDetails>
    </ProductContainer>
  );
}