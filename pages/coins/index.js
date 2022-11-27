import axios   from "axios";

const CoinList = ({ coinData }) => {
    console.log('coinData');
    console.log(coinData)
    return <div>{
        coinData.entries.map((coin) => {
            return (
                <div>
                    <h1>{ coin.API}</h1>
                    <img width={"50px"} src={"https://d17fnq9dkz9hgj.cloudfront.net/uploads/2013/09/cat-black-superstitious-fcs-cat-myths-162286659.jpg"} />
                    <p>{coin.Category}</p>
                    <p>{coin.Description}</p>
                </div>
            )
        })
    }</div>;
}

export const getStaticProps = async () => { // getServerSideProps
    const data = await axios.get(
        "https://api.publicapis.org/entries"
    );
console.log('data');
console.log(data)
    return {
        props: {
            coinData: data.data
        }
        // revalidate: 10, // getServerSideProps use. 10 sec
    }
}

export default CoinList;