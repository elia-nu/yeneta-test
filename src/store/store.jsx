import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";
const useStore = create((set) => ({

AdminNav:"Dashboard",
en:true,
admin:false,
a_Why :[],
a_Invoice :[],
a_Ceo:{},
a_Aboutus:{},
a_Service:[],
a_Contactus:[],
a_Program:[],
a_Event:[],
a_Blog:[],
a_Staff:[],
a_Student:[],
a_Testimonials:[],
a_Gallery :[],
a_Message :[],
a_Partner :[],
drive_i:[],
about_title:[],
about_subtitle:"",
service:{},
about:{},
gallery:{},
why :{},
program:{},
event:{},
blog:{},
staff:{},
testimonials:{},
about_description_am:"",
about_description:"",
about_link:"",
about_imgurl:"",
service_title:"",
service_subtitle:"",
title:"",
startdates:"",
enddates:"",

id:"",
name:"",
email:"",
order:[],
product:[],
bg:false,
actStu:[],
totalItems:"0",
isLoading:false,
setIsLoading: (data) => set((state) => ({ isLoading: data })),
setActStu: (data) => set((state) => ({ actStu: data })),
setTotalItems: (data) => set((state) => ({ totalItems: data })),
setBg: (data) => set((state) => ({ bg: data })),
setOrder: (data) => set((state) => ({ order: data })),
setProduct: (data) => set((state) => ({ product: data })),
setEmail: (data) => set((state) => ({ email: data })),
setId: (data) => set((state) => ({ id: data })),
setName: (data) => set((state) => ({ name: data })), 
setEndDates: (data) => set((state) => ({ enddates: data })),
setStartDates: (data) => set((state) => ({ startdates: data })),
setTitle: (data) => set((state) => ({ title: data })), 
setA_Contactus: (data) => set((state) => ({ a_Contactus: data })),
setAdminNav: (data) => set((state) => ({ AdminNav: data })),
setAdmin: (data) => set((state) => ({ admin: data })),
setEn: (data) => set((state) => ({ en: data })),
setDrive_i: (data) => set((state) => ({ drive_i: data })),
setA_Ceo: (data) => set((state) => ({ a_Ceo: data })),
setA_Why : (data) => set((state) => ({ a_Why : data })),
setA_Message : (data) => set((state) => ({ a_Message : data })),
setA_Partner : (data) => set((state) => ({ a_Partner : data })),
setA_Event : (data) => set((state) => ({ a_Event : data })),
setA_Student : (data) => set((state) => ({ a_Student : data })),
setA_Aboutus: (data) => set((state) => ({ a_Aboutus: data })),
setA_Invoice: (data) => set((state) => ({ a_Invoice: data })),
setA_Service: (data) => set((state) => ({ a_Service: data })),
setA_Program: (data) => set((state) => ({ a_Program: data })),
setA_Event: (data) => set((state) => ({ a_Event: data })),
setA_Blog: (data) => set((state) => ({ a_Blog: data })),
setA_Staff: (data) => set((state) => ({ a_Staff: data })),
setA_Testimonials: (data) => set((state) => ({ a_Testimonials: data })),
setA_Gallery : (data) => set((state) => ({ a_Gallery : data })),
setGallery: (data) => set((state) => ({ gallery: data })),
setService: (data) => set((state) => ({ service: data })),
setWhy: (data) => set((state) => ({ why: data })),
setAboutus: (data) => set((state) => ({ about: data })), // Assuming 'Aboutus' refers to 'about'
setService: (data) => set((state) => ({ service: data })),
setProgram: (data) => set((state) => ({ program: data })),
setEvent: (data) => set((state) => ({ event: data })),
setBlog: (data) => set((state) => ({ blog: data })),
setStaff: (data) => set((state) => ({ staff: data })),
setTestimonials: (data) => set((state) => ({ testimonials: data })),
setGallery: (data) => set((state) => ({ gallery: data })),
setAbout: (data) => set((state) => ({ about: data })),
setAbout_link: (data) => set((state) => ({ about_link: data })),
setAboutImgUrl: (data) => set((state) => ({ about_imgurl: data })),
setAboutDescriptionAm: (data) => set((state) => ({ about_description_am: data })),
setAboutDescription: (data) => set((state) => ({ about_description: data })),
setServiceSubtitleAm: (data) => set((state) => ({ service_subtitle_am: data })),
setServiceTitle: (data) => set((state) => ({ service_title: data })),
setServiceSubtitle: (data) => set((state) => ({ service_subtitle: data })), 
  
 }));

  
export default useStore;
