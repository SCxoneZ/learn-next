import Link from 'next/link';

export default function Product(){
  
  let test = [
    `/product/${Math.floor(Math.random()*1000)}`,
    `/product/${Math.floor(Math.random()*1000)}`,
    `/product/${Math.floor(Math.random()*1000)}`
  ];
  
  const components = [];
  for(let i = 0; i < test.length; i++){
    components.push(
    <Link href={test[i]}>
      <li>Loop ke-{i}</li>
    </Link>
    );
  }
  
  return (
  
  <>
    <ul>
      {components}
    </ul>
  </>
  
  );
}