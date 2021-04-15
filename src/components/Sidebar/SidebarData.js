import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as FiIcons from 'react-icons/fi';
import * as MdIcons from 'react-icons/md';

export const SidebarData = [
    {
        title: 'For you',
        path: '/foryou',
        icon: <MdIcons.MdPerson />,
        cName: 'nav-text'
    },
    {
        title: 'Top Stories',
        path: '/topstories',
        icon: <FiIcons.FiGlobe />,
        cName: 'nav-text'
    },
    {
        title: 'Following',
        path: '/following',
        icon: <FiIcons.FiStar />,
        cName: 'nav-text'
    },
    {
        title: 'Saved search',
        path: '/savedsearches',
        icon: <FaIcons.FaSearch />,
        cName: 'nav-text'
    },
    {
        title: 'Pakistan',
        path: '/pakistan',
        icon: <FaIcons.FaFlag />,
        cName: 'nav-text'
    },
    {
        title: 'World',
        path: '/world',
        icon: <FaIcons.FaGlobeAsia />,
        cName: 'nav-text'
    },
    {
        title: 'Local news',
        path: '/localnews',
        icon: <MdIcons.MdLocationOn />,
        cName: 'nav-text'
    },
    {
        title: 'Business',
        path: '/business',
        icon: <FaIcons.FaBuilding />,
        cName: 'nav-text'
    },
    {
        title: 'Technology',
        path: '/technology',
        icon: <FaIcons.FaMicrochip />,
        cName: 'nav-text'
    },
    {
        title: 'Entertainment',
        path: '/entertainment',
        icon: <MdIcons.MdLocalMovies />,
        cName: 'nav-text'
    },
    {
        title: 'Sports',
        path: '/sports',
        icon: <MdIcons.MdDirectionsBike />,
        cName: 'nav-text'
    },
    {
        title: 'Science',
        path: '/science',
        icon: <FaIcons.FaFlask />,
        cName: 'nav-text'
    },
    {
        title: 'Health',
        path: '/health',
        icon: <FaIcons.FaWeight />,
        cName: 'nav-text'
    }
];