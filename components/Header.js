import logo from "../assets/img/Logo.png"
import Image from "next/image";
import styles from "../styles/header.module.css"
import Pokemons from "./Pokemons";
const Header = ({pokemons}) => {
    return (
        <div className={styles.header}>
            <div className={styles.logo}>
                <Image src={logo} alt="logo" />
                <Pokemons pokemons={pokemons}></Pokemons>
            </div>
        </div>
    );
};

export default Header;