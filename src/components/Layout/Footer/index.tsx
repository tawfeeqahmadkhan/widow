import Image from "next/image";
import Link from "next/link";

// MIDDLE LINKS DATA
interface ProductType {
  id: number;
  section: string;
  link: string[];
}

interface Social {
  imgsrc: string,
  href: string,
}

const products: ProductType[] = [
  {
    id: 1,
    section: "Useful Links",
    link: ['Home', 'Road Map', 'Features', 'FAQ'],
  }
]

const socialLinks: Social[] = [
  { imgsrc: '/images/footer/telegram.png', href: "https://t.me/WidowAI" },
  { imgsrc: '/images/footer/x.png', href: "https://dribble.com/" },

]


const footer = () => {
  return (
    <footer className="bg-bodyBg relative pt-2">
      <div className="bg-gradient-to-r from-primary to-secondary hidden lg:block absolute w-full h-full top-0 -left-1/2 blur-390"></div>
      <div className="container mx-auto lg:max-w-screen-xl md:max-w-screen-md px-4 relative z-10 pb-16">
        <div className="grid grid-cols-1 gap-y-10 gap-x-16 sm:grid-cols-2 lg:grid-cols-12 xl:gap-x-8">
          <div className='col-span-6'>
            <img
              className="block h-12 w-20px mb-4"
              src={'/images/logo/logo.png'}
              alt="Crypto-Logo"
            />
            <h3 className='text-white/60 text-sm font-normal leading-9 mb-4 lg:mb-16'>Widow AI emerges as a cutting-edge AI platform that not only automates the creation of applications but also excels in generating accurate answers, producing videos, and designing graphics. With its advanced natural language processing (NLP) capabilities, Widow AI can listen to and process up to 100,000 words, making it an indispensable tool for a wide range of applications.</h3>
            <div className='flex gap-4'>
              {socialLinks.map((items, i) => (
                <Link href={items.href} key={i}><img src={items.imgsrc} alt={items.imgsrc} className='footer-icons bg-white rounded-full p-2' /></Link>
              ))}
            </div>
          </div>
          {products.map((product) => (
            <div key={product.id} className="group relative col-span-2">
              <p className="text-white text-xl font-medium mb-9">{product.section}</p>
              <ul>
                {product.link.map((link: string, index: number) => (
                  <li key={index} className='mb-5'>
                    <Link href="/" className="text-white/60 text-sm font-normal mb-6 space-links">{link}</Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
          <div className="col-span-4">
            <h3 className="text-white text-xl font-medium mb-9">Contact Us</h3>
            {/* <h4 className="text-white/60 text-sm font-normal mb-6 flex gap-2">
              <Image src={'/images/footer/number.svg'} alt="number-icon" width={20} height={20} />(406) 555-012
            </h4> */}
            <h4 className="text-white/60 text-sm font-normal mb-6 flex gap-2">
              <Image src={'/images/footer/email.svg'} alt="email-icon" width={20} height={20} />info@widowai.tech
            </h4>
            <h4 className="text-white/60 text-sm font-normal mb-6 flex gap-2">
              <Image src={'/images/footer/address.svg'} alt="address-icon" width={20} height={20} />India, Jammu & Kashmir
            </h4>
          </div>
        </div>
      </div>
      <div className='py-8 px-4 border-t border-t-lightblue'>
        <h3 className='text-center text-white'>@2025 - All Rights Reserved by <Link href="/" target="_blank" className="hover:text-primary">Widow Ai</Link></h3>
      </div>
    </footer>
  )
}

export default footer;
