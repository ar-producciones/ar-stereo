export default defineEventHandler(_event => {
  const partners = [
    {
      id: 0,
      name: 'La Postal de Mar del Plata',
      image: '/partners/lp.webp',
      url: 'https://lapostaldemardelplata.com/'
    },
    {
      id: 1,
      name: 'CR News',
      image: '/partners/cr-news.webp',
      url: 'https://crnewsrd.com/'
    },
    {
      id: 2,
      name: 'Cronicas con Nova',
      image: '/partners/nc.webp',
      url: 'www.cronicasconnova.com'
    },
    {
      id: 3,
      name: 'Regionarios',
      image: '/partners/regionarios.webp',
      url: 'https://revistaregionarios.com/'
    },
    {
      id: 4,
      name: 'El Diario Tricolor',
      image: '/partners/edt.webp',
      url: 'https://www.eldiariotricolor.com'
    },
    {
      id: 5,
      name: 'Bonches Latinos',
      image: '/partners/bonches_latinos.webp',
      url: 'https://boncheslatinos.com/'
    },
    {
      id: 6,
      name: 'Noticias Nova',
      image: '/partners/noticias-nova.webp',
      url: 'https://www.agencianova.com/'
    }
  ]
  return partners
})
