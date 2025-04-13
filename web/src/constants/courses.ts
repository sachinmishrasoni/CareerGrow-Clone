export interface Partner {
    partner: string;
    fees: string;
}

export interface ICourse {
    name: string;
    category: 'Under Graduate Courses' | 'Post Graduate Courses' | 'Diploma Courses' | 'Certificate Courses';
    placementGuarantee?: boolean;
    partners: Partner[];
}

export const coursesData: ICourse[] = [
    // 🔹 UNDER GRADUATE COURSES
    {
        name: 'B.Tech in Computer Science',
        category: 'Under Graduate Courses',
        partners: [
            { partner: 'Coursera', fees: '$1200' },
            { partner: 'edX', fees: '$1000' }
        ]
    },
    {
        name: 'B.Sc in Physics',
        category: 'Under Graduate Courses',
        partners: [
            { partner: 'Khan Academy', fees: 'Free' },
            { partner: 'FutureLearn', fees: '$500' }
        ]
    },
    {
        name: 'B.Com in Finance',
        category: 'Under Graduate Courses',
        partners: [
            { partner: 'Udemy', fees: '$300' }
        ]
    },
    {
        name: 'BA in Economics',
        category: 'Under Graduate Courses',
        partners: [
            { partner: 'edX', fees: '$800' },
            { partner: 'LinkedIn Learning', fees: '$600' }
        ]
    },

    // 🔹 POST GRADUATE COURSES
    {
        name: 'M.Tech in Data Science',
        category: 'Post Graduate Courses',
        partners: [
            { partner: 'Coursera', fees: '$1500' },
            { partner: 'Udacity', fees: '$1800' }
        ]
    },
    {
        name: 'M.Sc in Applied Mathematics',
        category: 'Post Graduate Courses',
        partners: [
            { partner: 'edX', fees: '$1100' }
        ]
    },
    {
        name: 'MBA in Marketing',
        category: 'Post Graduate Courses',
        placementGuarantee: true,
        partners: [
            { partner: 'LinkedIn Learning', fees: '$900' },
            { partner: 'Simplilearn', fees: '$950' }
        ]
    },

    // 🔹 DIPLOMA COURSES
    {
        name: 'Diploma in Web Development',
        category: 'Diploma Courses',
        placementGuarantee: true,
        partners: [
            { partner: 'Udemy', fees: '$250' },
            { partner: 'Codecademy', fees: '$200' }
        ]
    },
    {
        name: 'Diploma in Graphic Design',
        category: 'Diploma Courses',
        partners: [
            { partner: 'Skillshare', fees: '$180' }
        ]
    },
    {
        name: 'Diploma in Cybersecurity',
        category: 'Diploma Courses',
        partners: [
            { partner: 'Pluralsight', fees: '$300' }
        ]
    },

    // 🔹 CERTIFICATE COURSES
    {
        name: 'Certificate in Python Programming',
        category: 'Certificate Courses',
        partners: [
            { partner: 'Coursera', fees: '$100' },
            { partner: 'edX', fees: '$120' }
        ]
    },
    {
        name: 'Certificate in Business Analytics',
        category: 'Certificate Courses',
        partners: [
            { partner: 'LinkedIn Learning', fees: '$150' }
        ]
    },
    {
        name: 'Certificate in Digital Marketing',
        category: 'Certificate Courses',
        partners: [
            { partner: 'Google Digital Garage', fees: 'Free' },
            { partner: 'HubSpot Academy', fees: 'Free' }
        ]
    }
];
