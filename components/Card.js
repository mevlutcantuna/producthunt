import styles from "../styles/Card.module.css";
import commentIcon from "../assets/comment.svg";
import Image from "next/image";

function Card({ item }) {

  const myLoader = ({src,width,quality}) => {
    return `https://picsum.photos/${src}?w=${width}&?q=${quality || 75}`
  }
 
  return (
    <div className={styles.container}>
      <div className={styles.poster}>
        <Image loader={myLoader} src={item.poster} alt="poster" height={12} width={12} />
      </div>
      <div className={styles.info}>
        <div className={styles.title}>{item.title}</div>
        <div className={styles.summary}>{item.summary}</div>
        <div className={styles.infoBottom}>
          <div className={styles.commentCount}>
            <span>
              <Image src={commentIcon} alt="comment" />
            </span>
            {item.commentCount}
          </div>
          <div className={styles.usedFor}>
            {item.usedFor.map((item) => (
              <span key={item.id}>{item.title}</span>
            ))}
          </div>
        </div>
      </div>
      <div className={styles.vote}>
        <div />
        <span>{item.vote}</span>
      </div>
    </div>
  );
}

export default Card;
