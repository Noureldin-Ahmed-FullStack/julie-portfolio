
import { FaTiktok } from "react-icons/fa";
import { Zoom, Tooltip } from '@mui/material';
import { BiLogoInstagram } from "react-icons/bi";
import { CiMail } from "react-icons/ci";
import { FaWhatsapp } from "react-icons/fa";



export default function SocialsSegment() {
  return (
    <div className='w-100 justify-content-center d-flex'>
      <div className='grid grid-cols-2 sm:grid-cols-4 gap-8'>
        {/* <Grid className="">
          <div className='InstaBG w-fit mx-auto'>
            <a href="https://www.instagram.com/" className='group' target='_blank'>
              <Tooltip arrow followCursor={true} placement='top' TransitionComponent={Zoom} title={"Instagram"}>
                <BiLogoInstagram className=' group-hover:!text-6xl transition-all duration-150 ease-in-out MyLink !z-10 !text-4xl sm:text-5xl' />
              </Tooltip>
            </a>
          </div>
          <p className='playwrite font-extrabold text-zinc-200 text-center mt-5'>Instagram</p>
        </Grid> */}
        {/* <Grid>
          <a className='MyLink FBLink'>
            <FacebookIcon className='' sx={{ fontSize: "3rem" }} />
          </a>
        </Grid> */}
        <div className="">
          <Tooltip arrow followCursor={true} placement='top' TransitionComponent={Zoom} title={"Instagram"}>
            <div className="InstaBG w-fit mx-auto">
               <a className='MyLink flex group justify-center ' href="https://www.instagram.com/artbyjulieulfeng/" target='_blank'>
              <BiLogoInstagram className='text-zinc-200 group-hover:!text-6xl transition-all duration-150 ease-in-out !text-4xl sm:text-5xl' />
            </a>
            </div>
           
          </Tooltip>
          <p className='playwrite font-extrabold text-zinc-200 text-center mt-5'>Instagram</p>
        </div>
        <div className="">
          <Tooltip arrow followCursor={true} placement='top' TransitionComponent={Zoom} title={"Mail me"}>
            <a className='MyLink flex group justify-center MailLink' href="mailto:Julie_lazuli@hotmail.com" target='_blank'>
              <CiMail className=' group-hover:!text-6xl transition-all duration-150 ease-in-out !text-4xl sm:text-5xl' />
            </a>
          </Tooltip>
          <p className='playwrite font-extrabold text-zinc-200 text-center mt-5'>Mail</p>
        </div>

        <div className="">
          <Tooltip arrow followCursor={true} placement='top' TransitionComponent={Zoom} title={"WhatsApp"}>
            <a className='MyLink group flex justify-center whatsAppLink' target='_blank' href='https://wa.me/+4798133055'>
              <FaWhatsapp className=' group-hover:!text-6xl transition-all duration-150 ease-in-out !text-4xl sm:text-5xl' />
            </a>
          </Tooltip>
          <p className='playwrite font-extrabold text-zinc-200 text-center mt-5'>WhatsApp</p>
        </div>
        <div className="">
          <Tooltip arrow followCursor={true} placement='top' TransitionComponent={Zoom} title={"TikTok"}>
            <a className='flex justify-center group' target='_blank' href='https://www.tiktok.com/@artbyjulieulfeng?_t=ZN-8ulpfXpMz02&_r=1'>
              <FaTiktok className='group-hover:bg-black/75 group-hover:text-white transition-all duration-300 text-white rounded-md !text-4xl sm:text-5xl group-hover:!text-6xl' />
            </a>
          </Tooltip>
          <p className='playwrite font-extrabold text-zinc-200 text-center mt-5'>TikTok</p>
        </div>
      </div>
    </div>
  )
}