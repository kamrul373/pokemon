import Image  from "next/image"
import pic1 from "../assets/img/Image01.png"
import pic2 from "../assets/img/Image02.png"
import pic3 from "../assets/img/Image03.png"
import pic4 from "../assets/img/Image04.png"
import pic5 from "../assets/img/Image05.png"
import styles from "../styles/article.module.css"
const Article = () => {
    return (
        <div className={styles.article}>
            <div className={styles.articlecontent}>
                <div className={styles.title}>
                    <h1>Ash & Pikachu Arrive in <br/> Pokemon Universe</h1>
                </div>
                <div className={styles.flex}>
                    <div className={styles.left}>
                        <div className={styles.flex}>
                            <div>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic</p>
                                <div className={styles.flex}>
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make Lorem Ipsum is simply dummy text of the printing and typesetting industry. printer took a galley of type and scrambled it to make Lorem Ipsum is simply dummy tex printer took a galley of type and scrambled it to make Lorem Ipsum is simply </p>
                                    <Image src={pic4} width="100%" height="100%"/>
                                </div>
                                <div>
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make Lorem Ipsum is simply dummy text printer took a galley of type and scrambled it to make Lorem Ipsum is simply dummy</p>
                                    
                                </div>
                            </div>
                            <div>
                                <Image src={pic3} width="100%" className={styles.marginbottom}/>
                                <Image src={pic2} width="100%" />
                            </div>
                            
                        </div>
                         <div>
                         <p className={styles.margintop}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make Lorem Ipsum is simply dummy text printer took a galley of type and scrambled it to make Lorem Ipsum is simply dummy Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make Lorem Ipsum is simply dummy text printer took a galley of type and scrambled it to make Lorem Ipsum is simply dummy</p>
                         </div>
                        
                    </div>
                    <div  className={styles.right}>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic</p>
                        <div className={styles.flex}>
                            <Image src={pic5} />
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic</p>
                        </div>
                        <div className={styles.flex}>
                            <Image src={pic1} />
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic</p>
                        </div>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Article;