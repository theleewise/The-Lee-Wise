'use client'

import Image from 'next/image';
// import JSLogo from '@/public/assets/images/logos/tech-js.svg';

export default function TechStack(){
  const classes = 'block w-24 h-24 bg-white flex items-center justify-center rounded-lg shadow-md color-gray-900 absolute';
  const techs = [
    { name: 'JavaScript', logo: null, position: [0, 0], },
    { name: 'CSS', logo: null, position: [100, 0], },
    { name: 'HTML', logo: null, position: [200, 0], },
    { name: 'React', logo: null, position: [300, 0], },
    { name: 'Next.js', logo: null, position: [400, 0], },
    { name: 'Node.js', logo: null, position: [0, 100], },
    { name: 'Material UI (MUI)', logo: null, position: [100, 100], },
    { name: 'Styled Components', logo: null, position: [200, 100], },
    { name: 'Tailwind', logo: null, position: [300, 100], },
    { name: 'Figma', logo: null, position: [400, 100], },
    { name: 'PHP', logo: null, position: [0, 200], },
  ];

  return (
    <div>
      <ul className='relative bg-slate-500' style={{ height: 500, width: 500 }}>
        {techs.map(({ name, logo, position }) => (
          <li key={name} className={classes} style={{ top: position[1], left: position[0] }}>
            {logo ? <Image src={logo} alt={name} className={classes} /> : name}
          </li>
        ))}
      </ul>
    </div>
  )
}