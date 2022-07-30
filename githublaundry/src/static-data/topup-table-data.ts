export const topupTableLabels = [
  {
    text: 'New',
    textClass: 'text-green',
    bgClass: 'bg-green-light',
    previewClass: 'bg-green'
  },
  {
    text: 'Lead',
    textClass: 'text-cyan',
    bgClass: 'bg-cyan-light',
    previewClass: 'bg-cyan'
  },
  {
    text: 'In Progress',
    textClass: 'text-teal',
    bgClass: 'bg-teal-light',
    previewClass: 'bg-teal'
  },
  {
    text: 'Completed',
    textClass: 'text-purple',
    bgClass: 'bg-purple-light',
    previewClass: 'bg-purple'
  },
];

export const topupTableData = [
  {
    id: 0,
    imageSrc: 'assets/img/avatars/20.jpg',
    firstName: 'Dejesus',
    lastName: 'Chang',
    street: '899 Raleigh Place',
    zipcode: 8057,
    city: 'Munjor',
    phoneNumber: '+32 (818) 580-3557',
    mail: 'dejesus.chang@yourcompany.biz',
    labels: [topupTableLabels[0], topupTableLabels[1]]
  },
 
  {
    id: 29,
    imageSrc: 'assets/img/avatars/9.jpg',
    firstName: 'Deborah',
    lastName: 'Weiss',
    street: 'Haring Street',
    zipcode: 2989,
    city: 'Barstow',
    phoneNumber: '+1 (833) 465-3036',
    mail: 'deborah.weiss@yourcompany.tv',
    labels: [topupTableLabels[2]]
  }
];
