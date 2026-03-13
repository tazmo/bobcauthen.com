import avatar from '../assets/images/avatar.jpg';
import hero from '../assets/images/hero.jpg';
import type { SiteConfig } from '../types';

const siteConfig: SiteConfig = {
    website: 'https://bobcauthen.com',
    avatar: {
        src: avatar,
        alt: 'Bob Cauthen'
    },
    title: 'Bob Cauthen',
    subtitle: 'My Site',
    description: 'Personal web site for Bob Cauthen',
    image: {
        src: '/bob-cauthen.jpg',
        alt: 'Picture of Bob Cauthen smiling.'
    },
    headerNavLinks: [
        {
            text: 'Home',
            href: '/'
        },
        {
            text: 'Blog',
            href: '/blog'
        },
        {
            text: 'Projects',
            href: '/projects'
        },
        {
            text: 'Tags',
            href: '/tags'
        }
    ],
    footerNavLinks: [
        {
            text: 'About',
            href: '/about'
        },
        {
            text: 'Contact',
            href: '/contact'
        },
        {
            text: 'Terms',
            href: '/terms'
        }
    ],
    socialLinks: [
        {
            text: 'LinkedIn',
            href: 'https://www.linkedin.com/in/bob-cauthen/'
        },
        {
            text: 'Instagram',
            href: 'https://instagram.com/'
        },
        {
            text: 'X/Twitter',
            href: 'https://twitter.com/'
        }
    ],
    hero: {
        title: 'Welcome to My Corner',
        text: "As an IT professional, I have worn a lot of hats over the years. Not just on the job, but off. \
        My hobbies include **anything** related to tech, hardware and software, Linux, Homelabs, Snow Skiing, SCUBA Diving and \
        most recently, Photography.\n\n This site is currently pretty minimal. Trust me, I have a lot to say, but I'm \
        just starting. I will try NOT to have advertising (if I can help it) and will add an RSS feed, \
        as well as a way to comment on Blog Posts. I am not (currently) interested in SEO \
        optimization, so entries will probably vary greatly, hense the RSS feed. Use it, don't use it, up to you. \
        But I do have a Terms section as a CYA. Sorry but we live in litigious times. \
        \n\nFeel free to peruse my employment history on \
        [LinkedIn](https://www.linkedin.com/in/bob-cauthen) or follow me on [Twitter/X](http://x.com/bob_cauthen).",
        image: {
            src: hero,
            alt: 'A beautiful mountain landscape covered in snow, half obscured by shadows and the other half in the sunlight.'
        },
        actions: [
            {
                text: 'Contact Me (currently Disabled)',
                href: '/contact'
            }
        ]
    },
    subscribe: {
        enabled: false,
        title: 'Subscribe to Dante Newsletter',
        text: 'One update per week. All the latest posts directly in your inbox.',
        form: {
            action: '#'
        }
    },
    postsPerPage: 4,
    projectsPerPage: 4
};

export default siteConfig;
