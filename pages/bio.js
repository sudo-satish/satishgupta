const Field = ({fieldName, value}) => 
  <div className="flex mx-2 p-1">
    <div className="w-1/2">{fieldName}</div>
    <div className="w-1/2">: {value}</div>
  </div>


const fields = [
  // {
  //   fieldName: 'Name',
  //   value: 'Satish Kumar Gupta',
  // },
  {
    fieldName: 'Father\'s Name',
    value: 'Girijesh Gupta'
  },
  {
    fieldName: 'Father\'s Occupation',
    value: 'Supervisor'
  },
  {
    fieldName: 'Mother\'s Name',
    value: 'Meera Devi'
  },
  {
    fieldName: 'Mother\'s Occupation',
    value: 'House Wife'
  },
  {
    fieldName: 'Date of birth',
    value: '9th Dec 1995'
  },
  {
    fieldName: 'Place of birth',
    value: 'Rudrapur Deoria'
  },
  {
    fieldName: 'Mobile No.',
    value: '8130626713'
  },
  {
    fieldName: 'Email',
    value: 'satishkumr001@gmail.com'
  },
  {
    fieldName: 'Address',
    value: 'H No. 5232, Street No. 5, Shyam Colony, Sehatpur, Faridabad, Haryana, 121003'
  },
  {
    fieldName: 'Caste',
    value: 'Gupta'
  },
  {
    fieldName: 'Patrilineal Gotra',
    value: 'Jaun Puri'
  },
  {
    fieldName: 'Maglik',
    value: 'Non Manglik'
  },
  {
    fieldName: 'Language',
    value: 'Hindi, English'
  },
  {
    fieldName: 'Height',
    value: '5 Feet 5 Inches'
  },
  {
    fieldName: 'Weight',
    value: '68 Kg'
  },
  {
    fieldName: 'Complexion',
    value: 'Medium'
  },
  {
    fieldName: 'Qualification',
    value: 'B. Tech (CSE)'
  },
  {
    fieldName: 'Occupation',
    value: 'Software Engineer'
  },
  {
    fieldName: 'Skills',
    value: 'Motivated, Caring, Positive Attitude, Leadership, Quick Learner'
  },
  {
    fieldName: 'Hobbies',
    value: 'Listening Music, Learning'
  },
];

const BioPage = () => {
  return (
    <>
      <Head>
        <title>Satish Gupta</title>
        <meta name="description" content="Satish Gupta, Highly skilled developer with experience of more than 4.5 years."></meta>
        <meta property="og:title" content="Satish Gupta" />
        <meta property="og:url" content="https://satishgupta.dev/" />
        <meta property="og:description" content="Highly skilled developer with experience of more than 4.5 years." />
        <meta property="og:image" content="https://satishgupta.dev/img/profile-image-reduced-quality.jpg" />
        <meta property="og:type" content="profile" />
        <meta property="og:profile:first_name" content="Satish" />
        <meta property="og:profile:last_name" content="Gupta" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="icon" href="/favicon-16x16.png" />
      </Head>
      <div className="h-full sm:h-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white font-serif md:flex transition-all ease-in-out duration-600">
        <div className="text-white bg-black text-center text-2xl sm:text-3xl md:text-2xl p-2 mb-3 md:mb-0 md:h-screen md:flex lg:w-1/3 flex-col transition-all ease-in-out duration-300 justify-center">
          <img src="/img/Satish_Pic.jpeg" className="content-center  mx-auto transition-all ease-in-out duration-600 rounded-full ring-2 ring-indigo-300 mb-7 h-24 w-24 lg:h-32 lg:w-32" />
          SATISH KUMAR GUPTA
        </div>
        <div className="text-xs sm:text-sm md:m-auto transition-all ease-in-out duration-600">
          {
            fields.map(({fieldName, value}, index) => <Field {...{fieldName, value, key: index}} />)
          }
        </div>
      </div>
    </>
  );
};

export default BioPage;
