import Slider from "react-slick";

const CustomerFeedBack = () => {
  const CustomerFeedbackData = [
    {
      id: 1,
      name: "Oahed Noor Forhad",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque reiciendis inventore iste ratione ex alias quis magni at optio",
      img: "https://scontent-sin6-2.xx.fbcdn.net/v/t39.30808-1/458941233_414020678461446_4002528016422047195_n.jpg?stp=dst-jpg_s200x200&_nc_cat=110&ccb=1-7&_nc_sid=50d2ac&_nc_eui2=AeECRhtFIyyWQsCwYN8DtdshPeiUgqeJWF896JSCp4lYXx8qTeAtu65joX1KW5Li_S0bsXGYYWfLV7NpP3jsFfyP&_nc_ohc=cr8poi7WFbgQ7kNvgGv4s5-&_nc_zt=24&_nc_ht=scontent-sin6-2.xx&_nc_gid=AjLV4KZWN3Aryqo6X01D1TZ&oh=00_AYB89uKjG9xvclk3g7DHcRyEzByQYPh84Pnb3CPLsua6-Q&oe=673AAC36",
    },
    {
        id: 2,
        name: "Saiful Islam Rumi",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque reiciendis inventore iste ratione ex alias quis magni at optio",
        img: "https://scontent-sin6-3.xx.fbcdn.net/v/t39.30808-6/344269295_794276915602409_3350600188011578247_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=a5f93a&_nc_eui2=AeFQ_o5q0cqHX0glJX-71E6e9JZkg4WxikL0lmSDhbGKQuHz4Wtdoe1fJnFPky_9ua5hiOj160pOJbdntmpqw6mK&_nc_ohc=Ch7O4q8Dg1MQ7kNvgGUQNig&_nc_zt=23&_nc_ht=scontent-sin6-3.xx&_nc_gid=AwNMQXqS32J1FaCDQwRDd3u&oh=00_AYAFcmMce3VzidLnWK5UpsjNnJm8_WUEmAvpeN3H6lQMDQ&oe=673A8865",
    },
    {
      id: 3,
      name: "Mohaiminul Ayon",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque reiciendis inventore iste ratione ex alias quis magni at optio",
      img: "https://scontent-sin6-2.xx.fbcdn.net/v/t39.30808-6/431883386_3404762766439922_6955617483593988552_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeFe8kbSQ-XzQFHxx5Fk5sEvAmVrpzTcO1kCZWunNNw7Webph1fToUPp5DToqWvVWLpUzlbJ2khTn_LDq9Gz3B97&_nc_ohc=vwlcrZQLz_0Q7kNvgEl2ZFd&_nc_zt=23&_nc_ht=scontent-sin6-2.xx&_nc_gid=AehqC8SPFQmlnmw7BcGBC4L&oh=00_AYBSQhqz78yvp7IYU7TvSefPPRlTOQpSQIP6ZJIJyPv_4A&oe=673A837F",
    },
    {
      id: 5,
      name: "Md Abdullah",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque reiciendis inventore iste ratione ex alias quis magni at optio",
      img: "https://scontent-sin6-3.xx.fbcdn.net/v/t39.30808-6/450650325_2153462875012319_5690009078415130402_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeF28XsJjmBETjMQwIoYijoMMZoRNUB_05ExmhE1QH_TkRWjivzivf4R-Bq715qaEwyo1MfwiWfHWWwUh_eWm4z6&_nc_ohc=Zxrsm4iUsYoQ7kNvgHeR5D7&_nc_zt=23&_nc_ht=scontent-sin6-3.xx&_nc_gid=AwMwTJE-wFWVyxoFpzxJiRV&oh=00_AYBBv9-1Uw84ax9Ju7B9g8JNAE_3qCJRIjxG9FEJB-jvjw&oe=673A8C38",
    },
    {
        id: 6,
        name: "Tanim bhuiyan",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque reiciendis inventore iste ratione ex alias quis magni at optio",
        img: "https://scontent-sin6-3.xx.fbcdn.net/v/t39.30808-6/339321419_3367270853520484_1904766722508723854_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeHPFItA7qu1y8NVIB_SzzvjE8--fzT8Z_ATz75_NPxn8FAEkVa_BwEflD2G9ZQY3BTQIy1MOAuBj1_dDqNqdlac&_nc_ohc=ypzP2AlpeikQ7kNvgHm0ktg&_nc_zt=23&_nc_ht=scontent-sin6-3.xx&_nc_gid=Azo7xT2fK7jluz41rOIPV-V&oh=00_AYAcv8EmOYKQyuLzRAmwieBo0nWgNc0-PuIa9cTgro3EAA&oe=673A85CE"
        
    },
  ];
  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
    pauseOnHover: true,
    pauseOnFocus: true,
    responsive: [
      {
        breakpoint: 10000,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="py-10 mb-10 max-w-[1500px] mx-auto">
      <div className="">
        {/* header section */}
        <div className="text-center text-2xl  max-w-[600px] mx-auto mb-10 mt-20 ">
          <h2 data-aos="fade-up" className="font-semibold text-primary shadow-inner shadow-orange-200 rounded-xl">
            What our customers are saying ......</h2>
          
         
        </div>

      
        <div data-aos="zoom-in">
          <Slider {...settings}>
            {CustomerFeedbackData.map((data) => (
              <div key={data.id} className="my-6">
                <div className="flex flex-col gap-4 shadow-lg py-8 px-6 mx-4 rounded-xl dark:bg-gray-800 bg-primary/10 relative">
                  <div className="mb-4">
                    <img
                      src={data.img}
                      alt=""
                      className="rounded-full w-20 h-20"
                    />
                  </div>
                  <div className="flex flex-col items-center gap-4">
                    <div className="space-y-3">
                      <p className="text-xs text-gray-500">{data.text}</p>
                      <h1 className="text-xl font-bold text-black/80 dark:text-light">
                        {data.name}
                      </h1>
                    </div>
                  </div>
                  <p className="text-black/20 text-9xl font-serif absolute top-0 right-0">
                    ,,
                  </p>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default CustomerFeedBack;