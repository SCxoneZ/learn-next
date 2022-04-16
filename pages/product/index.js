import Link from 'next/link';

export default function Product(){
  return (
  
  <>
    <ul>
      <Link href="/product/1">
       <a><h4>Product 1</h4></a>
      </Link>
      <Link href="/product/2">
        <a><h4>Product 2</h4></a>
      </Link>
      <Link href="/product/3">
        <a><h4>Product 3</h4></a>
      </Link>
    </ul>
  </>
  
  );
}