export const supportTableLabels = [
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

export const supportTableData = [
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
    labels: [supportTableLabels[0], supportTableLabels[1]]
  },
 
  {
    id: 28,
    imageSrc: 'assets/img/avatars/8.jpg',
    firstName: 'Susanna',
    lastName: 'Kidd',
    street: 'Loring Avenue',
    zipcode: 6432,
    city: 'Cascades',
    phoneNumber: '+1 (854) 456-2734',
    mail: 'susanna.kidd@yourcompany.biz',
    labels: [supportTableLabels[1]]
  }
];
