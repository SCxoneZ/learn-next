import { useRouter } from 'next/router';

export default function ProductId(){
  const router = useRouter();
  const {productId, reviewsId} = router.query;
  return (
    <>
    <h1>Reviews id: {reviewsId}</h1>
    <h1>Product id: {productId}</h1>
    </>
  );
}