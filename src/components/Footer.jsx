import { logo } from "../assets";
import styles from "../style";
import { footerLinks, socialMedia } from "../constants";

const Footer = () => (
  <section id="footer" className={`${styles.flexCenter} ${styles.paddingY} flex-col`}>
    <div className={`${styles.flexStart} md:flex-row flex-col mb-8 w-full`}>
      <div className="flex flex-col justify-start flex-1 mr-10 ">
        <img src={logo} alt="logo" className="w-[266px] h-[68px] object-contain"/>
        <p className={`${styles.paragraph} max-w-[310px] mt-4`}>A new way to make the payments easy, reliable and secure.</p>
      </div>

      <div className="flex-[1.5] w-full flex flex-row flex-wrap justify-between md:mt-0 mt-10">
      {footerLinks.map((footerLink) =>(
        <div key={footerLink.key} className="flex flex-col ss:my-0 my-4 min-w-[150px]">
          <h4 className="font-poppins font-medium text-[18px] leading-[27px] text-dimWhite">{footerLink.title}</h4>
          <ul className="mt-4 list-none">
            {footerLink.links.map((link, index) => (
              <li key={link.name} className={`font-poppins font-normal text-[16px] leading-[24px] text-dimWhite hover:text-secondary cursor-pointer ${index !== footerLink.links.length -1 ? 'mb-4': 'mb-0'}`}>
                {link.name}
              </li>
            ))}
          </ul>
        </div>


      ))}
      </div>
    </div>

    <div className="flex flex-col items-center justify-between w-full pt-6 md:flex-row border-t-[1px] border-t-[#3F3E45]">
      <p className="font-poppins font-normal text-[18px] leading-[27px] text-white text-center"> 2021 HooBank. All Rights Reserved.</p>

      <div className="flex md;mt-0 mt-6" >
        {socialMedia.map((social, index) =>(
          <img 
             key={social.id}
             src={social.icon}
             className={`w-[21px] h-[21px] object-contain cursor-pointer ${index !== socialMedia.length-1 ? 'mr-6' : 'mr-0' }`}
          />
        ))}
      </div>
    </div>
  </section>
)

export default Footer