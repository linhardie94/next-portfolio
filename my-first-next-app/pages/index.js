import Header from "../components.js/Header"
import Image from 'next/image';

const MyImage = () => {
    return (
      <Image
        src="/static/img.jpg"
        alt="header image"
        width={0}
        height={0}
        style={{ width: '100%', height: 'auto' }}
        unoptimized
      />
    )
  }

function Welcome(props) {
    return <div>
        <br></br>
        <Header />
        <h1>My dev portfolio</h1>
        <MyImage />
    </div>
    ;
    }
export default Welcome;
