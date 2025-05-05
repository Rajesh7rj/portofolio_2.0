import React from 'react';
import Image from 'next/image';
import styles from '@/styles/modules/Portfolio.module.scss';
import Link from 'next/link';
import { FiLink as LinkIcon } from 'react-icons/fi';
import classNames from 'classnames';

type Props = {
  imageUrl:  any;
  category:  any;
  title:  any;
  href: any;
};

const Portfolio = ({ imageUrl, category, title, href }: Props) => {
  return (
    <div className={classNames(styles['portfolio'], 'bg-white dark:bg-gray-800')}>
      <div className="relative w-full pt-[0% !h-full"> 
      <Image 
       src={imageUrl}
       alt={title}
      //  layout="fill"
       objectFit="fill"
       height={720} width={1280} layout="responsive"
       className="rounded-t-2xl"
      />
      </div>
      <div className={styles['portfolio-overlay']}>
        <span className={styles['portfolio-category']}>{category}</span>
        <Link href={href}>
          <a className={styles['portfolio-title']}>{title}</a>
        </Link>
        <Link href={href}>
          <a className={styles['portfolio-link']}>
            <LinkIcon className="h-5 text-white" />
          </a>
        </Link>
      </div>
    </div>
  );
};

export default Portfolio;
