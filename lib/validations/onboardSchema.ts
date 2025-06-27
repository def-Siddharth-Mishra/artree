import * as yup from 'yup';

export const onboardSchema = yup.object().shape({

  name: yup.string().required('Name is required').min(2, 'Name must be at least 2 characters'),
  
  bio: yup.string().required('Bio is required').min(20, 'Bio must be at least 20 characters'),
  
  category: yup.array(yup.string()).min(1, 'Please select at least one category').required('Category is required'),
  
  languagesSpoken: yup.array(yup.string()).min(1, 'Please select at least one language').required('Languages Spoken are required'),
  
  feeRange: yup.string().oneOf(
    ['$100 - $500', '$500 - $1000', '$1000 - $2000', '$2000+'],
    'Please select a valid fee range'
  ).required('Fee Range is required'),
  
  profileUpload: yup.mixed().notRequired(),
  
  location: yup.string().required('Location is required').min(3, 'Location must be at least 3 characters'),

});

export type OnboardFormData = yup.InferType<typeof onboardSchema>;
