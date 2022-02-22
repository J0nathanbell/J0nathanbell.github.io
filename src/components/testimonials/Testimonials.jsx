import './testimonials.scss'
const data = [

  {
    id: 1,
    icon: require("../../assets/twitter.png"),
    name: "dasdasd",
    title: "loren itsum",
    img: "https://www.thetimes.co.uk/imageserver/image/%2Fmethode%2Fsundaytimes%2Fprod%2Fweb%2Fbin%2Fce3beda8-87ef-11eb-a305-6c8dc51a72e0.jpg?crop=2250%2C1266%2C0%2C117&resize=1200",
    desc: "loren itsum",
    featured: false,
  },
  {
    id: 2,
    icon: require("../../assets/youtube.png"),
    name: "dasdasd",
    title: "lorem ipsum",
    img: "https://images.unsplash.com/photo-1580130379624-3a069adbffc5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=852&q=80",
    desc: "lorem ipsum",
    featured: true,
  },
  {
    id: 3,
    icon: require("../../assets/linkedin.png"),
    name: "dsadasd",
    title: "lorem ipsum",
    img: "https://i.guim.co.uk/img/media/4691e66139a946efacfa408136606e5842fea058/0_535_1649_989/master/1649.jpg?width=620&quality=85&auto=format&fit=max&s=31c54fed7c5c35a39f76d57682d65472",
    desc: "lorem ipsum",
    featured: false,
  },
];

export default function Testimonials() {
  return (
    <div className='testimonials' id="testimonials">
      <h1>Testimonials</h1>
      <div className="container">
        {data.map(d=>(
          <div className={d.featured ? 'card featured' : 'card'}>
            <div className="top">
              <img className="left" src={require("../../assets/right-arrow.png")}  alt="" />
              <img className="user" src={d.img}  alt="" />
              <img className="right" src={d.icon}  alt="" />
            </div>
            <div className="center">
              {d.desc}
            </div>
            <div className="bottom">
              <h3>{d.name}</h3>
              <h4>{d.title}</h4>
            </div>
          </div>
          ))}
      </div>
    </div>
  )
}