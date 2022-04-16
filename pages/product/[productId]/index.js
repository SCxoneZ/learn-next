import { useRouter } from 'next/router';

export default function ProductId(){
  const router = useRouter();
  const {productId} = router.query;
  return <h1>Product id: {productId}</h1>;
}