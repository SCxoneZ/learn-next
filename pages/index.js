import { useRouter } from 'next/router';
import Button from '@mui/material/Button';

export default function Home() {
  const router = useRouter();
  return (
    <>
    <h1>Home Page</h1>
    <Button color="error" variant="outlined" onClick={() => {
    router.push("/product");
    }}>go to Producs</Button>
    </>
    );
}