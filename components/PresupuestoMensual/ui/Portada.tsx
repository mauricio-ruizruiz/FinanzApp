// import NextImage from 'next/image';
import { Image, Text, Title } from '@mantine/core';

const Portada = () => {
  return (
    <>
      <Title order={1} ta="center" mt={100} fz={80} fw={900}>
        Presupuesto{' '}
        <Text inherit variant="gradient" component="span" gradient={{ from: 'blue', to: 'grape' }}>
          Mensual
        </Text>
      </Title>

      <Image
        radius="xl"
        h={200}
        mx={'auto'}
        maw={'75vw'}
        src="./images/banner-presupuesto-mensual.png"
      />
    </>
  );
};

export default Portada;
