import Head from "next/head";
import HeadMeta from "../components/HeadMeta/HeadMeta";

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
      <HeadMeta />
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
