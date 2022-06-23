const speakerArray = [
  {
    name: 'Oby Ezekwesili',
    title: 'VP World Banks Africa region',
    description: 'She is an economic policy expert, an advocate for transparency and human capital development.',
    image: './image/Oby.png',
  },

  {
    name: 'Kamala D. Harris',
    title: 'U.S.A Vice president',
    description: 'Kamala Harris is an American politician and attorney. She was elected VP after a lifetime of public service.',
    image: './image/Kamala.webp',
  },

  {
    name: 'Okonjo Iweala',
    title: 'Director-General W.T.O',
    description: 'She is a Nigerian-American economist, environmental sustainability advocate and global development expert.',
    image: './image/okonjo-iweala.jpg',
  },

  {
    name: 'Jacinda Ardern',
    title: 'Prime Minister of New Zealand',
    description: 'Jacinda has been serving as the 40th prime minister of New Zealand and leader of the Labour Party since 2017.',
    image: './image/Jacinda.jpg',
  },

  {
    name: 'Shani Dhanda',
    title: 'British disability activist',
    description: 'Dhanda founded the Asian Disability Network and helped organise the first-ever Asian Woman Festival in the UK',
    image: './image/Shani-disability.webp',
  },

  {
    name: 'Tsai Ing-Wen',
    title: 'President of China',
    description: 'Taiwanese politician and academic serving as the President of the Republic of China since 2016.',
    image: './image/Tsai-ing-wen.png',
  },
];

const speakerBio = document.querySelector('.speakers-bio');

speakerBio.innerHTML = speakerArray.map((speaker) => `<div class="speaker">
    <div class="speaker-bg"></div>
    <img src=${speaker.image}  class="speaker-img" alt="speaker" />
    <div class="speaker-content">
     <h1>${speaker.name}</h1>
     <h3>${speaker.title}</h3>
     <p>${speaker.description}</p>
     </div>
    </div>`).join('');
