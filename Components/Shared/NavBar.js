import Image from "next/image";
import logo from "../../Assets/Homepage/logo.png";
import { TbSearch } from 'react-icons/tb'
import { FiHeart } from 'react-icons/fi'
import { MdOutlineShoppingCart } from 'react-icons/md'
import styles from '../../styles/NavBar.module.css'

const Handler = () => {
  return (
    <>
      <div className="lg:w-[1170px] py-[30px] mx-auto flex justify-between items-center">
        <div>
          <Image src={logo} alt="h3llo world" />
        </div>
        <div>
          <ul className="flex gap-[45px] w-fit">
            <li className={`text-[18px] text-lightBlack cursor-pointer  ${styles.navList}`}>Home <p className={styles.liBorder}></p></li>
            <li className={`text-[18px] text-lightBlack cursor-pointer  ${styles.navList}`}>Shop <p className={styles.liBorder}></p></li>
            <li className={`text-[18px] text-lightBlack cursor-pointer  ${styles.navList}`}>History <p className={styles.liBorder}></p></li>
            <li className={`text-[18px] text-lightBlack cursor-pointer  ${styles.navList}`}>Login <p className={styles.liBorder}></p></li>
            <li className={`text-[18px] text-lightBlack cursor-pointer  ${styles.navList}`}>Contact <p className={styles.liBorder}></p></li>
          </ul>
        </div>
        <div>
          <ul className="flex gap-[25px] w-fit">
            <li className="text-lightBlack text-[1.5rem]"><TbSearch/></li>
            <li className="text-lightBlack text-[1.5rem]"><FiHeart/></li>
            <li className="text-lightBlack text-[1.5rem]"><MdOutlineShoppingCart/></li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Handler;
