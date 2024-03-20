// -------------------- objects ----------------------

// hero anim
const heroVariants = {
  initial: {
    x: -500,
    y: 50,
    opacity: 0,
  },
  animate: {
    x: 0,
    y: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
  scrollButton: {
    opacity: 0,
    y: 10,
    transition: {
      duration: 2,
      delay: 2,
      repeat: Infinity,
    },
  },
};
// contact anim
const contactVariants = {
  initial:{
    y: 200,
    opacity: 0,
  },
  animate:{
    y:0,
    opacity: 1,
    transition:{
      duration:1,
      staggerChildren: 0.1,
    }
  }

}

//sliding text anim
const sliderVariants = {
  initial: {
    x: 0,
  },
  animate: {
    x: "-200%",
    transition: {
      delay: 1.2,
      duration: 20,
      repeat: Infinity,
      repeatType: "mirror",
    },
  },
};

//sidebar anim
const sidebarVariants = {
  open: {
    clipPath: "circle(1350px at 50px 50px)",
    transition: {
      delay: 0.3,
      type: "spring",
      stiffness: 20,
    },
  },
  close: {
    clipPath: "circle(30px at 50px 50px)",
    transition: {
      delay: 0.1,
      type: "spring",
      stiffness: 800,
      damping: 81,
    },
  },
};

//link anim

const linkVariants = {
  open: {
    transition: {
      staggerChildren: 0.5,
    },
  },
  close: {
    transition: {
      staggerChildren: 0.05,
      staggerDirection: -1,
    },
  },
};

const linkItemVariants = {
  open: {
    y: 0,
    opacity: 1,
  },
  close: {
    y: 80,
    opacity: 0,
  },
};

// -------------------- objects ends ----------------------

// -------------------- arrays ----------------------

//url names
const urls = ["Home", "Project", "Yo", "Works", "Contact"];

//portfolio section
const portfolios = [
  {
    id: 1,
    title: "Title Here",
    img: "https://images.unsplash.com/photo-1707343846292-56e4c6abf291?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHx8",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Est iure maiores suscipit doloremque fugiat, sequi quod, ipsam autem quaerat quae provident aperiam nobis perspiciatis animi ipsa voluptatibus enim quidem illo.",
  },
  {
    id: 2,
    title: "Title Here",
    img: "https://images.unsplash.com/photo-1709433157272-18e3517fb36a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzfHx8ZW58MHx8fHx8",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Est iure maiores suscipit doloremque fugiat, sequi quod, ipsam autem quaerat quae provident aperiam nobis perspiciatis animi ipsa voluptatibus enim quidem illo.",
  },
  {
    id: 3,
    title: "Title Here",
    img: "https://images.unsplash.com/photo-1709634539435-f9fccaf0fda1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxOHx8fGVufDB8fHx8fA%3D%3D",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Est iure maiores suscipit doloremque fugiat, sequi quod, ipsam autem quaerat quae provident aperiam nobis perspiciatis animi ipsa voluptatibus enim quidem illo.",
  },
  {
    id: 4,
    title: "Title Here",
    img: "https://images.unsplash.com/photo-1682687220363-35e4621ed990?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHw1NXx8fGVufDB8fHx8fA%3D%3D",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Est iure maiores suscipit doloremque fugiat, sequi quod, ipsam autem quaerat quae provident aperiam nobis perspiciatis animi ipsa voluptatibus enim quidem illo.",
  },
];

//// -------------------- arrays ends----------------------
export {
  heroVariants,
  sliderVariants,
  sidebarVariants,
  linkVariants,
  linkItemVariants,
  urls,
  portfolios,
  contactVariants,
};
