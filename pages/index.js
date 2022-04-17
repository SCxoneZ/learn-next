import { useRouter } from 'next/router';

export default function Home() {
  const router = useRouter();
  return (
    <>
    <h1>Home Page</h1>
    <button onClick={() => {
    router.push("/product");
    }}>go to Producs</button>
    </>
    );
}