import IconGitHub from '@/public/assets/images/icons/social-github.svg';
import IconLinkedIn from '@/public/assets/images/icons/social-linked-in.svg';
import IconStackOverflow from '@/public/assets/images/icons/social-stack-overflow.svg';
import IconDribbble from '@/public/assets/images/icons/social-dribble.svg';
import IconTwitter from '@/public/assets/images/icons/social-twitter.svg';
import IconWebsite from '@/public/assets/images/icons/social-website.svg';

const getSocialStuff = (url: string) => {
    if (url.includes('github')) return { Icon: IconGitHub, name: 'GitHub', text: 'GitHub' };
    if (url.includes('linkedin')) return { Icon: IconLinkedIn, name: 'LinkedIn', text: 'LinkedIn' };
    if (url.includes('stackoverflow')) return { Icon: IconStackOverflow, name: 'Stack Overflow', text: 'Stack Overflow' };
    if (url.includes('dribbble')) return { Icon: IconDribbble, name: 'Dribbble', text: 'Dribbble' };
    if (url.includes('twitter')) return { Icon: IconTwitter, name: 'Twitter', text: 'Twitter' };
    return { Icon: IconWebsite, name: 'Website', text: 'Website' };
}

const socials = [
    'https://www.linkedin.com/in/lee-wise/',
    'https://github.com/theleewise',
    'https://stackoverflow.com/users/800317/lee-wise',
    'https://twitter.com/theleewise',
    'https://dribbble.com/theleewise',
];

export default function Footer() {
    return (
        <footer className='bg-gray-800 bg-gradient-to-br from-gray-800 to-gray-900 text-gray-300 p-6 text-center'>
            <div id="contact"></div>
            <div className='container mx-auto'>
                <ul className='inline-flex gap-2'>
                    {socials.map((url, index) => {
                        const { name, text, Icon } = getSocialStuff(url);
                        return (
                            <li key={`social-${index}`} className='list-none block p-1'>
                                <a href={url} target="_blank" rel="noopener noreferrer" className='no-underline'>
                                    <span className="sr-only">{name}</span>
                                    {Icon ? <Icon className='w-5 h-5' /> : null}
                                </a>
                            </li>
                        );
                    })}
                </ul>
            </div>
        </footer>
    )
}