import Header from "../components/Header";
import styles from "../styles/Home.module.css";
import Card from "../components/Card";
import {mockData} from "../data";

export default function Home() {
  return (
    <div className={styles.container}>
    <div className={styles.main}>
      <Header/>
      <div className={styles.cards}>
        {
          mockData.map((item) => <Card key={item.id} item={item}/>)
        }
      </div>
    </div>
    </div>
  )
}
