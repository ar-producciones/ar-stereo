export default defineEventHandler(_event => {
  const team = [
    {
      id: 0,
      name: 'Alfredo Rojas',
      image: 'https://cg.com.ve/wp-content/uploads/03.jpg'
    },
    {
      id: 1,
      name: 'Mariana Camacho',
      image:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShX5Bn34YbjhvFMhApZkjdRb7ajLUzDYdjol9MIp_qkSHgs0YZlh8qSwga-e6ciycdMIU&usqp=CAU'
    },
    {
      id: 2,
      name: 'Edgar Petit',
      image: 'https://thronesapi.com/assets/images/jon-snow.jpg'
    },
    {
      id: 3,
      name: 'Delianny Rojas',
      image: 'https://thronesapi.com/assets/images/arya-stark.jpg'
    },
    {
      id: 4,
      name: 'Neomar Cepeda',
      image: 'https://thronesapi.com/assets/images/sansa-stark.jpeg'
    },
    {
      id: 5,
      name: "Jesus 'Chamin' Castro",
      image: 'https://thronesapi.com/assets/images/bran-stark.jpg'
    }
  ]
  return team
})
