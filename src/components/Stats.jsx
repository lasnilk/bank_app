import React from 'react';
import {stats} from '../constants'
import styles from '../style';

const Stats = () => (
  <section className={`${styles.flexCenter} flex-row flex-wrap sm:mb-20 mb:6`}>
    {stats.map((stats) => (
      <div key={stats.id} className={`flex-1 flex justify-center items-center m-3`}>
        <h4 className='font-poppins font-semibold text-[15px] xs:text-[25px] xs:leading-[53px] leading-[43px]'>{stats.value}</h4>
        <p className='font-poppins font-normal text-[15px] xs:text-[20px] xs:leading-[26px] leading-[21px] text-gradient uppercase ml-3'>{stats.title}</p>
      </div>
    ))}
  </section>
)

export default Stats