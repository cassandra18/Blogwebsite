import React from 'react';
import { Link } from 'react-router-dom';
import { GoArrowRight } from "react-icons/go";


const RecentBlogs: React.FC = () => {
    return (
        <>
            <div>
                <h3>Latest Blogs</h3>
                <Link to="/latest-blog">
                    <p>Making the best out of the tecj skills i have gained</p>
                    <p>Read Now <GoArrowRight /></p>
                </Link>
                <br/>
                <Link to="/latest-blog">
                    <p>Making the best out of the tecj skills i have gained</p>
                    <p>Read Now <GoArrowRight /></p>
                </Link>
                <br/><Link to="/latest-blog">
                    <p>Making the best out of the tecj skills i have gained</p>
                    <p>Read Now <GoArrowRight /></p>
                </Link>
                <br/>
                <Link to="/latest-blog">
                    <p>Making the best out of the tecj skills i have gained</p>
                    <p>Read Now <GoArrowRight /></p>
                </Link>
                <br/>
                <Link to="/latest-blog">
                    <p>Making the best out of the tecj skills i have gained</p>
                    <p>Read Now <GoArrowRight /></p>
                </Link>
                <br/>
                <Link to="/latest-blog">
                    <p>Making the best out of the tecj skills i have gained</p>
                    <p>Read Now <GoArrowRight /></p>
                </Link>
                <br/>
                <h3>Popular Now</h3>
                <Link to="/popular-blog">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam quibusdam unde deserunt nulla odit alias ducimus consequuntur, eos, neque recusandae minima iure perspiciatis, ipsum molestias minus mollitia hic architecto repudiandae!</p>
                    <p>Read Now <GoArrowRight /></p>
                </Link>
                <Link to="/popular-blog">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam quibusdam unde deserunt nulla odit alias ducimus consequuntur, eos, neque recusandae minima iure perspiciatis, ipsum molestias minus mollitia hic architecto repudiandae!</p>
                    <p>Read Now <GoArrowRight /></p>
                </Link>
                <Link to="/popular-blog">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam quibusdam unde deserunt nulla odit alias ducimus consequuntur, eos, neque recusandae minima iure perspiciatis, ipsum molestias minus mollitia hic architecto repudiandae!</p>
                    <p>Read Now <GoArrowRight /></p>
                </Link>
                <Link to="/popular-blog">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam quibusdam unde deserunt nulla odit alias ducimus consequuntur, eos, neque recusandae minima iure perspiciatis, ipsum molestias minus mollitia hic architecto repudiandae!</p>
                    <p>Read Now <GoArrowRight /></p>
                </Link>
            </div>
        </>
    )
};

export default RecentBlogs;