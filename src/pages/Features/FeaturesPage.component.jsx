import React from 'react';
import './FeaturePage.styles.scss';

const FeaturesPage = () => {
    return (
        <div className='featurePage'>
            <figure className='featurePage__img--1'>
                <img className='featurePage__img' src="/images/1.jpg" alt='Image1' />
            </figure>
            <figure className='featurePage__img--2'>
                <img className='featurePage__img' src="/images/2.jpg" alt='Image2' />
            </figure>
            <figure className='featurePage__img--3'>
                <img className='featurePage__img' src="/images/3.jpg" alt='Image3' />
            </figure>
            <figure className='featurePage__img--4'>
                <img className='featurePage__img' src="/images/4.jpg" alt='Image4' />
            </figure>
            <figure className='featurePage__img--5'>
                <img className='featurePage__img' src="/images/5.jpg" alt='Image5' />
            </figure>
            {/* <figure className='featurePage__img--6'>
                <img className='featurePage__img' src="/images/6.jpg" alt='Image6' />
            </figure> */}
            <figure className='featurePage__img--7'>
                <img className='featurePage__img' src="/images/7.jpg" alt='Image7' />
            </figure>
            <figure className='featurePage__img--8'>
                <img className='featurePage__img' src="/images/8.jpg" alt='Image8' />
            </figure>
            <figure className='featurePage__img--9'>
                <img className='featurePage__img' src="/images/9.jpg" alt='Image9' />
            </figure>
            <figure className='featurePage__img--10'>
                <img className='featurePage__img' src="/images/10.jpg" alt='Image10' />
            </figure>
        </div>
    )
}

export default FeaturesPage;
