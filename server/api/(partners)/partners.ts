export default defineEventHandler((event) => {
  const team = [
    {
      id: 0,
      name: "Daenerys Targaryen",
      image: "https://thronesapi.com/assets/images/daenerys.jpg",
    },
    {
      id: 1,
      name: "Samwell Tarly",
      image: "https://thronesapi.com/assets/images/sam.jpg",
    },
    {
      id: 2,
      name: "Jon Snow",
      image: "https://thronesapi.com/assets/images/jon-snow.jpg",
    },
    {
      id: 3,
      name: "Arya Stark",
      image: "https://thronesapi.com/assets/images/arya-stark.jpg",
    },
    {
      id: 4,
      name: "Sansa Stark",
      image: "https://thronesapi.com/assets/images/sansa-stark.jpeg",
    },
    {
      id: 5,
      name: "Brandon Stark",
      image: "https://thronesapi.com/assets/images/bran-stark.jpg",
    },
  ];
  return team;
});
