import Image from "next/image"
import Search from "../assets/svg/search"

const styles = {
    header: "bg-[#171714] text-white h-20 flex gap-[100px] w-full p-[30px]",
    headerWrapper: "flex justify-center h-full max-w-screen-xl mx-auto px-4",
    nav: "flex justify-center items-center gap-[30px]",
    navItem: "relative mr-1 cursor-pointer hover:opacity-60",
    badge: "rounded-full bg-blue-500 w-2 h-2 absolute bottom-5 top-1 right-0 ring-4",
    inputContainer: "flex items-center justify-center p-2 rounded bg-[#171924]",
    input: 'bg-transparent outline-none text-white w-70 ml-3'
}

const Header = () => {
  return (
    <div className={styles.header}>
        <Image 
            src="https://s2.coinmarketcap.com/static/cloud/img/coinmarketcap_white_1.svg"
            alt="CoinMarketCap Logo"
            width={220} // Adjust the width as needed
            height={220} // Adjust the height as needed
            
        />
        <div className={styles.headerWrapper}>
            <div className={styles.nav}>

              <div className={styles.navItem}>
                <div className={styles.navLink}>Cryptocurrencies</div>
                <div className={styles.badge} />
              </div>

              <div className={styles.navItem}>
                <div className={styles.navLink}>Exchanges</div>
                
              </div>

              <div className={styles.navItem}>
                <div className={styles.navLink}>NFT</div>
                <div className={styles.badge} />
              </div>

              <div className={styles.navItem}>
                <div className={styles.navLink}>Cryptown</div>
                <div className={styles.badge} />
              </div>

              <div className={styles.navItem}>
                <div className={styles.navLink}>Portfolio</div>
              </div>

              <div className={styles.navItem}>
                <div className={styles.navLink}>Watchlist</div>
              </div>

              <div className={styles.navItem}>
                <div className={styles.navLink}>Products</div>
                <div className={styles.badge} />
              </div>


              <div className={styles.navItem}>
                <div className={styles.navLink}>Learn</div>
                
              </div>

            </div>
            <div className="flex items-center">
              <div className={styles.inputContainer}>
                <Search />
                <input className={styles.input} placeholder="Search" />
              </div>
            </div>
          
        </div>
      

    </div>
  )
}

export default Header