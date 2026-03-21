import { User } from 'lucide-react';
const Section = ({icon,children,sectionTitle}) => {
  return <div className='mx-5 mb-12'>
    <div className='flex my-3 items-center mb-6'>
      {icon}
      <h1 className='font-bold text-2xl mx-2'>{sectionTitle}</h1>
    </div>
    {children}
  </div>
}

export default Section;