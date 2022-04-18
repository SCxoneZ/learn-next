import Link from 'next/link';
import styled from 'styled-components';

const MyList = styled.li({
  color: 'red'
});

export default function Product(){
  
  let test = [
    `/product/${Math.floor(Math.random()*1000)}`,
    `/product/${Math.floor(Math.random()*1000)}`,
    `/product/${Math.floor(Math.random()*1000)}`
  ];
  
  const components = [];
  for(let i = 0; i < test.length; i++){
    components.push(
    <Link key={i} href={test[i]}>
      <MyList>Loop ke-{i}</MyList>
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