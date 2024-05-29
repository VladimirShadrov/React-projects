import { getPagesArray } from '../../utils/pages';
import classes from './pagination.module.css';

type PaginationProps = {
  totalPages: number;
  page: number;
  changePage: (page: number) => void;
};

export const Pagination = ({ totalPages, page, changePage }: PaginationProps) => {
  const pagesArray = getPagesArray(totalPages);

  return (
    <div className={classes['pagination__wrapper']}> {
      pagesArray.map((pageNum: number) => {
        return (
          <span
            onClick={() => changePage(pageNum)}
            key={pageNum}
            className={`${classes['pagination__button']} ${page === pageNum ? classes['active'] : ''}`}>
            {pageNum}
          </span>
        );
      })
    }
    </div >

  );
};