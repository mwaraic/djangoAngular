
import { argThresholdOpts } from "moment";

export interface ShoppingItem {
  id: number;
  name: string;
  quantity: number;
  checked: boolean;
}
export interface navBar{
  id:string,
  logoImage:any,
  facebookLink:string,
  twitterLink:string,
  instagramLink:string,
  gitHubLink:string,
  linkedinLink:string,
  gmailLink:string
}


export const navBarData:navBar[]=[
  { 'id':'0123',
  'logoImage':'abc',
  'facebookLink':'https://www.facebook.com/remi.adriano.3',
  'twitterLink':'https://twitter.com/RiasatAurangzeb',
  'instagramLink':'https://www.instagram.com/aurangzebriasat/',
  'gitHubLink':'https://github.com/AurangzebR',
  'linkedinLink':'https://www.linkedin.com/in/aurangzeb-riasat/',
  'gmailLink':'azriasat@gmail.com'

  }
]
export interface introductionInterface{
  id:string,
  profileImage:string,
  aLittleIntroduction:string,
  welcomeIntroduction:string,
}
export const myData:introductionInterface[]=[
  {
  'id':'0123',
  'profileImage':'assets/background.png',
  'aLittleIntroduction':"<H3> <strong>ALITTLE ABOUT ME</strong> </H3><h6><strong> am Creative Web Designer and Front_end Developer</strong></h6><p>I'm a multi-foused designer working an interfaces and branding for digital productions.</p><p>Awards winning interdisciplinary Designer & Art director.a team who specialise in coding websites and themes of style and function for a wide range of interactive</p>",
  "welcomeIntroduction":"<H3> <strong>ALITTLE ABOUT ME</strong> </H3><h6><strong> am Creative Web Designer and Front_end Developer</strong></h6><p>I'm a multi-foused designer working an interfaces and branding for digital productions.</p><p>Awards winning interdisciplinary Designer & Art director.a team who specialise in coding websites and themes of style and function for a wide range of interactive</p>",

  }
]


