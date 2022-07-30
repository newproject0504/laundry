export const pinrequestTableLabels = [
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

export const pinrequestTableData = [
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
    labels: [pinrequestTableLabels[0], pinrequestTableLabels[1]]
  },
  {
    id: 1,
    imageSrc: 'assets/img/avatars/1.jpg',
    firstName: 'Short',
    lastName: 'Lowe',
    street: '548 Cypress Avenue',
    zipcode: 5943,
    city: 'Temperanceville',
    phoneNumber: '+11 (977) 574-3636',
    mail: 'short.lowe@yourcompany.ca',
    labels: [pinrequestTableLabels[1]]
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
    labels: [pinrequestTableLabels[1]]
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
    labels: [pinrequestTableLabels[2]]
  }
];
