import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
  
  <>
    <Link href="/test">
    <a className={styles.link}>Test</a>
    </Link>
  </>
  
  );
}
